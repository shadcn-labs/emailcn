// Regenerates the per-style registry files (registry-<style>.json) from the
// base file trees. The three styles (react-email, mjml-react, jsx-email)
// share identical item names; the style only changes which registry file an
// item is built from and the /r/<style>/<name>.json URL it is served at.
//   - names:  theme-<id>, <x>-fonts, block-<stem>, <ui file stem>
//   - registryDependencies derived from each file's actual imports
// Existing titles/descriptions/categories are preserved by file path, falling
// back to the react-email counterpart for newly added items.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const REGISTRY_URL = "https://emailcn.vercel.app/r";

const BASES = [
  {
    deps: ["react-email"],
    label: "React Email",
    name: "react-email",
    themeDeps: ["react-email", "tailwindcss"],
  },
  {
    deps: ["@faire/mjml-react", "mjml"],
    label: "MJML",
    name: "mjml-react",
    themeDeps: [],
  },
  {
    deps: ["jsx-email"],
    label: "JSX Email",
    name: "jsx-email",
    themeDeps: [],
  },
];

const registryFileFor = (base) => path.join(ROOT, `registry-${base.name}.json`);

// Titles/descriptions/categories are preserved by file path from whichever
// registry files already exist (the legacy combined registry.json or the
// per-style files).
const existingByPath = new Map();
for (const candidate of [
  path.join(ROOT, "registry.json"),
  ...BASES.map(registryFileFor),
]) {
  if (!fs.existsSync(candidate)) {
    continue;
  }
  const parsed = JSON.parse(fs.readFileSync(candidate, "utf-8"));
  for (const item of parsed.items ?? []) {
    const filePath = item.files?.[0]?.path;
    if (filePath && !existingByPath.has(filePath)) {
      existingByPath.set(filePath, item);
    }
  }
}

const titleCase = (stem) =>
  stem
    .split("-")
    .map((s) => (s ? s[0].toUpperCase() + s.slice(1) : s))
    .join(" ");

const walk = (directory) => {
  if (!fs.existsSync(directory)) {
    return [];
  }
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      return walk(entryPath);
    }
    if (/\.(tsx|ts)$/.test(entry.name)) {
      return [entryPath];
    }
    return [];
  });
};

/** file path within a base -> registry item name (identical across styles) */
const itemNameFor = (relPath) => {
  const stem = path.basename(relPath).replace(/\.(tsx|ts)$/, "");
  if (relPath.startsWith("themes/")) {
    return `theme-${stem}`;
  }
  if (relPath.startsWith("fonts/")) {
    return stem === "default" ? "default-fonts" : stem;
  }
  if (relPath.startsWith("blocks/")) {
    return `block-${stem}`;
  }
  // UI components retain their file stem.
  return stem;
};

const targetFor = (relPath) => {
  const stem = path.basename(relPath).replace(/\.(tsx|ts)$/, "");
  if (relPath.startsWith("themes/")) {
    return `components/email/theme-${stem}.ts`;
  }
  return `components/email/${path.basename(relPath)}`;
};

const themeSourceFor = (base, relPath) =>
  path.join(
    ROOT,
    "registry/themes",
    base.name === "react-email" ? "react-email" : "definitions",
    path.basename(relPath)
  );

const registryFile = (sourcePath, target) => ({
  path: path.relative(ROOT, sourcePath).split(path.sep).join("/"),
  target,
  type: "registry:file",
});

const themeFilesFor = (base, relPath) => {
  const stem = path.basename(relPath, ".ts");
  const definitionPath = path.join(
    ROOT,
    "registry/themes/definitions",
    `${stem}.ts`
  );
  const typesPath = path.join(ROOT, "registry/themes/types.ts");

  if (base.name !== "react-email") {
    return [
      registryFile(definitionPath, `components/email/theme-${stem}.ts`),
      registryFile(typesPath, "components/email/email-theme-types.ts"),
    ];
  }

  return [
    registryFile(
      themeSourceFor(base, relPath),
      `components/email/theme-${stem}.ts`
    ),
    registryFile(definitionPath, `components/email/theme-${stem}-tokens.ts`),
    registryFile(
      path.join(ROOT, "registry/themes/create-react-email-theme.ts"),
      "components/email/create-react-email-theme.ts"
    ),
    registryFile(typesPath, "components/email/email-theme-types.ts"),
  ];
};

const resolveRelativeSource = (absPath, importPath) => {
  const resolved = path.resolve(path.dirname(absPath), importPath);
  const candidates = [
    resolved,
    `${resolved}.ts`,
    `${resolved}.tsx`,
    path.join(resolved, "index.ts"),
    path.join(resolved, "index.tsx"),
  ];
  return candidates.find((candidate) => fs.existsSync(candidate));
};

const registryDepsFor = (base, absPath, kind) => {
  const src = fs.readFileSync(absPath, "utf-8");
  const deps = new Set();
  const re = new RegExp(
    `@/registry/bases/${base.name}/((?:themes|fonts|ui|blocks)/[\\w./-]+)`,
    "g"
  );
  for (const m of src.matchAll(re)) {
    const rel = m[1].endsWith(".ts") || m[1].endsWith(".tsx") ? m[1] : null;
    const relPath =
      rel ?? `${m[1]}${m[1].startsWith("themes/") ? ".ts" : ".tsx"}`;
    deps.add(`${REGISTRY_URL}/${base.name}/${itemNameFor(relPath)}.json`);
  }

  if (kind !== "theme") {
    const themeImportRe =
      /@\/registry\/themes\/(?:definitions|react-email)\/([\w-]+)/g;
    for (const match of src.matchAll(themeImportRe)) {
      deps.add(`${REGISTRY_URL}/${base.name}/theme-${match[1]}.json`);
    }
  }

  const baseDir = path.join(ROOT, "registry/bases", base.name);
  const relativeImportRe = /(?:from\s+|import\s+)["'](\.{1,2}\/[\w./-]+)["']/g;
  for (const match of src.matchAll(relativeImportRe)) {
    const dependencyPath = resolveRelativeSource(absPath, match[1]);
    if (!dependencyPath || dependencyPath === absPath) {
      continue;
    }
    const relPath = path.relative(baseDir, dependencyPath);
    if (relPath.startsWith("..")) {
      continue;
    }
    deps.add(
      `${REGISTRY_URL}/${base.name}/${itemNameFor(relPath.split(path.sep).join("/"))}.json`
    );
  }

  return [...deps].toSorted();
};

const kindFor = (relPath) => {
  if (relPath.startsWith("themes/")) {
    return "theme";
  }
  if (relPath.startsWith("fonts/")) {
    return "font";
  }
  if (relPath.startsWith("blocks/")) {
    return "block";
  }
  return "component";
};

const registryTypeFor = (kind) => {
  if (kind === "block") {
    return "registry:block";
  }
  if (kind === "theme" || kind === "font") {
    return "registry:file";
  }
  return "registry:component";
};

const categoriesFor = (kind) => {
  if (kind === "theme") {
    return ["theme"];
  }
  if (kind === "font") {
    return ["email-font"];
  }
  return ["email-component"];
};

const metadataFor = (base, kind, stem, existing, reCounterpart) => {
  let title = existing?.title ?? reCounterpart?.title;
  let description = existing?.description ?? reCounterpart?.description;
  if (kind === "theme") {
    title = `${titleCase(stem)} Email Theme (${base.label})`;
    description = `${titleCase(stem)} email theme tokens for ${base.label} templates`;
  } else if (!title) {
    title = titleCase(stem);
    description = `${titleCase(stem)} email component`;
  } else if (kind === "font" && base.name !== "react-email") {
    description = (description ?? "").replace("React Email", base.label);
  }
  return { description, title };
};

const buildItem = (base, relPath) => {
  const kind = kindFor(relPath);
  const absPath =
    kind === "theme"
      ? themeSourceFor(base, relPath)
      : path.join(ROOT, "registry/bases", base.name, relPath);
  const filePath = path.relative(ROOT, absPath).split(path.sep).join("/");
  const existing = existingByPath.get(filePath);
  const reCounterpart = existingByPath.get(
    kind === "theme"
      ? `registry/themes/react-email/${path.basename(relPath)}`
      : `registry/bases/react-email/${relPath}`
  );
  const stem = path.basename(relPath).replace(/\.(tsx|ts)$/, "");
  const { description, title } = metadataFor(
    base,
    kind,
    stem,
    existing,
    reCounterpart
  );
  const categories =
    kind === "theme"
      ? categoriesFor(kind)
      : (existing?.categories ??
        reCounterpart?.categories ??
        categoriesFor(kind));
  const type = registryTypeFor(kind);
  const fileType =
    kind === "theme" || kind === "font" ? type : "registry:component";

  const item = {
    categories,
    description,
    files:
      kind === "theme"
        ? themeFilesFor(base, relPath)
        : [
            {
              path: filePath,
              target: targetFor(relPath),
              type: fileType,
            },
          ],
    name: itemNameFor(relPath),
    title,
    type,
  };

  const deps = kind === "theme" ? base.themeDeps : base.deps;
  if (deps.length > 0) {
    item.dependencies = deps;
  }
  const registryDependencies = registryDepsFor(base, absPath, kind);
  if (registryDependencies.length > 0) {
    item.registryDependencies = registryDependencies;
  }
  return item;
};

for (const base of BASES) {
  const baseDir = path.join(ROOT, "registry/bases", base.name);
  const rel = (p) => path.relative(baseDir, p);
  const group = (sub) => {
    if (sub === "themes") {
      const directory = path.join(
        ROOT,
        "registry/themes",
        base.name === "react-email" ? "react-email" : "definitions"
      );
      return walk(directory)
        .map((filePath) => `themes/${path.basename(filePath)}`)
        .toSorted();
    }
    return walk(path.join(baseDir, sub)).map(rel).toSorted();
  };

  const items = [];
  for (const kind of ["themes", "fonts", "ui", "blocks"]) {
    for (const relPath of group(kind)) {
      if (relPath === "registry.ts") {
        continue;
      }
      items.push(buildItem(base, relPath));
    }
  }

  // sanity: unique names within the style
  const names = new Set();
  const targets = new Map();
  for (const item of items) {
    if (names.has(item.name)) {
      throw new Error(`duplicate item name in ${base.name}: ${item.name}`);
    }
    names.add(item.name);

    for (const file of item.files) {
      const existingPath = targets.get(file.target);
      if (existingPath && existingPath !== file.path) {
        throw new Error(
          `duplicate target in ${base.name}: ${file.target} (${existingPath}, ${file.path})`
        );
      }
      targets.set(file.target, file.path);
    }
  }

  const registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    homepage: "https://emailcn.vercel.app",
    items,
    name: "emailcn",
  };
  fs.writeFileSync(
    registryFileFor(base),
    `${JSON.stringify(registry, null, 2)}\n`
  );
  console.log(`registry-${base.name}.json: ${items.length} items`);
}
