/* eslint-disable no-plusplus, no-nested-ternary, complexity, prefer-destructuring, no-inline-comments, unicorn/no-array-reduce */
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
    themeDeps: ["react-email"],
  },
  {
    deps: ["@faire/mjml-react", "mjml-browser"],
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

const walk = (d) =>
  fs.existsSync(d)
    ? fs
        .readdirSync(d, { withFileTypes: true })
        .flatMap((e) =>
          e.isDirectory()
            ? walk(path.join(d, e.name))
            : /\.(tsx|ts)$/.test(e.name)
              ? [path.join(d, e.name)]
              : []
        )
    : [];

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
  return stem; // ui
};

const targetFor = (relPath) => {
  const stem = path.basename(relPath).replace(/\.(tsx|ts)$/, "");
  if (relPath.startsWith("themes/")) {
    return `components/email/theme-${stem}.ts`;
  }
  return `components/email/${path.basename(relPath)}`;
};

const registryDepsFor = (base, absPath) => {
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
  return [...deps].toSorted();
};

const buildItem = (base, relPath) => {
  const absPath = path.join(ROOT, "registry/bases", base.name, relPath);
  const filePath = `registry/bases/${base.name}/${relPath}`;
  const existing = existingByPath.get(filePath);
  const reCounterpart = existingByPath.get(
    `registry/bases/react-email/${relPath}`
  );
  const stem = path.basename(relPath).replace(/\.(tsx|ts)$/, "");

  const isTheme = relPath.startsWith("themes/");
  const isFont = relPath.startsWith("fonts/");
  const isBlock = relPath.startsWith("blocks/");

  let title = existing?.title ?? reCounterpart?.title;
  let description = existing?.description ?? reCounterpart?.description;
  if (isTheme) {
    // per-style flavor in theme titles/descriptions
    title = `${titleCase(stem)} Email Theme (${base.label})`;
    description = `${titleCase(stem)} email theme tokens for ${base.label} templates`;
  } else if (!title) {
    title = titleCase(stem);
    description = `${titleCase(stem)} email component`;
  } else if (isFont && base.name !== "react-email") {
    description = (description ?? "").replace("React Email", base.label);
  }

  const categories =
    existing?.categories ??
    reCounterpart?.categories ??
    (isTheme ? ["theme"] : isFont ? ["email-font"] : ["email-component"]);

  const type = isBlock
    ? "registry:block"
    : isTheme || isFont
      ? "registry:file"
      : "registry:component";

  const fileType = isTheme || isFont ? "registry:file" : "registry:component";

  const item = {
    categories,
    description,
    files: [
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

  const deps = isTheme ? base.themeDeps : base.deps;
  if (deps.length > 0) {
    item.dependencies = deps;
  }
  const registryDependencies = registryDepsFor(base, absPath);
  if (registryDependencies.length > 0) {
    item.registryDependencies = registryDependencies;
  }
  return item;
};

for (const base of BASES) {
  const baseDir = path.join(ROOT, "registry/bases", base.name);
  const rel = (p) => path.relative(baseDir, p);
  const group = (sub) => walk(path.join(baseDir, sub)).map(rel).sort();

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
