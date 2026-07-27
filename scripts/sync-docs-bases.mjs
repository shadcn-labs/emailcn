// Generates the mjml-react and jsx-email component docs from the canonical
// react-email component docs, so all three bases expose the exact same set of
// doc pages (same slugs, same count). Only the base-specific bits differ:
//   - the `base="..."` attribute on ComponentPreview / ComponentSource / ComponentsList
//   - the `registry/bases/<base>/...` source path
//   - the theme prop type (TailwindConfig -> EmailThemeTokens)
//   - a base-specific "Install the following dependencies" step
//   - the base title in the root meta.json
//
// react-email docs are hand-authored and are the single source of truth.
// Edit them under content/docs/components/react-email/**, then re-run this.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const CONTENT_DOCS = path.join(ROOT, "content/docs");
const DOCS = path.join(ROOT, "content/docs/components");
const SRC_BASE = "react-email";
const BASES = [SRC_BASE, "mjml-react", "jsx-email"];
const MANUAL_TAB_PATTERN =
  /<TabsContent value="manual">[\s\S]*?<\/TabsContent>/;

const walk = (d) =>
  fs
    .readdirSync(d, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]
    );

// Each derived base + how it differs from the react-email source.
const TARGETS = [
  {
    base: "mjml-react",
    title: "MJML React",
  },
  {
    base: "jsx-email",
    title: "JSX Email",
  },
];

const registries = new Map(
  BASES.map((base) => {
    const registryPath = path.join(ROOT, `registry-${base}.json`);
    const registry = JSON.parse(fs.readFileSync(registryPath, "utf-8"));
    return [base, new Map(registry.items.map((item) => [item.name, item]))];
  })
);

const registryDependencyName = (dependency) => {
  try {
    return path.basename(new URL(dependency).pathname, ".json");
  } catch {
    return path.basename(dependency, ".json");
  }
};

const requiredFiles = (item, items) => {
  const files = [];
  const queued = [item];
  const visitedItems = new Set();
  const visitedTargets = new Set();

  while (queued.length > 0) {
    const current = queued.shift();
    if (!current || visitedItems.has(current.name)) {
      continue;
    }
    visitedItems.add(current.name);

    for (const file of current.files ?? []) {
      if (!visitedTargets.has(file.target)) {
        files.push(file);
        visitedTargets.add(file.target);
      }
    }

    for (const dependency of current.registryDependencies ?? []) {
      const dependencyItem = items.get(registryDependencyName(dependency));
      if (dependencyItem) {
        queued.push(dependencyItem);
      }
    }
  }

  return files;
};

const componentSource = (file, base) => `  <ComponentSource
    src="${file.path}"
    base="${base}"
    title="${file.target}"
  />`;

const standardizeManualInstallation = (text, base) => {
  if (!MANUAL_TAB_PATTERN.test(text)) {
    return text;
  }

  const itemName = /@emailcn\/([a-z0-9-]+)/.exec(text)?.[1];
  const items = registries.get(base);
  const item = itemName ? items?.get(itemName) : undefined;
  if (!item || !items) {
    throw new Error(
      `Missing ${base} registry item for ${itemName ?? "document"}`
    );
  }

  const dependencies = item.dependencies ?? [];
  const files = requiredFiles(item, items);
  if (dependencies.length === 0 || files.length === 0) {
    throw new Error(
      `Incomplete manual installation data for ${base}/${item.name}`
    );
  }

  const manualTab = `<TabsContent value="manual">

<Steps>
  <Step>**Install the following dependencies:**</Step>

\`\`\`bash
npm install ${dependencies.join(" ")}
\`\`\`

  <Step>**Copy and paste the following code into your project.**</Step>
${files.map((file) => componentSource(file, base)).join("\n")}
  <Step>**Update the import paths to match your project setup.**</Step>
</Steps>

</TabsContent>`;

  return text.replace(MANUAL_TAB_PATTERN, manualTab);
};

const transformMdx = (text, target) =>
  text
    .split(`base="${SRC_BASE}"`)
    .join(`base="${target.base}"`)
    .split(`registry/bases/${SRC_BASE}/`)
    .join(`registry/bases/${target.base}/`)
    .split(`/docs/components/${SRC_BASE}/`)
    .join(`/docs/components/${target.base}/`)
    .split("TailwindConfig")
    .join("EmailThemeTokens");

const transformMeta = (text, target) =>
  text.split('"title": "React Email"').join(`"title": "${target.title}"`);

const standardizeManualInstallations = () => {
  for (const file of walk(CONTENT_DOCS).filter((entry) =>
    entry.endsWith(".mdx")
  )) {
    const raw = fs.readFileSync(file, "utf-8");
    if (!MANUAL_TAB_PATTERN.test(raw)) {
      continue;
    }

    const base = BASES.find((candidate) =>
      file.split(path.sep).includes(candidate)
    );
    if (!base) {
      throw new Error(`Missing renderer base for ${path.relative(ROOT, file)}`);
    }

    const standardized = standardizeManualInstallation(raw, base);
    if (standardized !== raw) {
      fs.writeFileSync(file, standardized);
    }
  }
};

const generate = (target) => {
  const src = path.join(DOCS, SRC_BASE);
  const dest = path.join(DOCS, target.base);
  fs.rmSync(dest, { force: true, recursive: true });

  let files = 0;
  for (const f of walk(src)) {
    const rel = path.relative(src, f);
    const destPath = path.join(dest, rel);
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    const raw = fs.readFileSync(f, "utf-8");
    const isMeta = path.basename(f) === "meta.json";
    const transformed = isMeta
      ? transformMeta(raw, target)
      : transformMdx(raw, target);
    fs.writeFileSync(destPath, transformed);
    files += 1;
  }
  console.log(`${target.base}: ${files} files generated from ${SRC_BASE}`);
};

for (const target of TARGETS) {
  generate(target);
}
standardizeManualInstallations();

// Ensure all three bases are registered in components/meta.json.
const metaPath = path.join(DOCS, "meta.json");
const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
let metaChanged = false;
for (const base of ["react-email", ...TARGETS.map((t) => t.base)]) {
  if (!meta.pages.includes(base)) {
    meta.pages.push(base);
    metaChanged = true;
  }
}
if (metaChanged) {
  fs.writeFileSync(metaPath, `${JSON.stringify(meta, null, 2)}\n`);
  console.log("components/meta.json updated");
}
