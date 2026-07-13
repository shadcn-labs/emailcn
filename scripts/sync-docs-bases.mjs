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
const DOCS = path.join(ROOT, "content/docs/components");
const SRC_BASE = "react-email";

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
    dependency: "npm install @faire/mjml-react",
    // The mjml/jsx demo for header-with-logo is registered under a legacy key.
    demoRenames: { "header-with-logo-demo": "header-logo-with-links-demo" },
  },
  {
    base: "jsx-email",
    title: "JSX Email",
    dependency: "npm install jsx-email",
    demoRenames: { "header-with-logo-demo": "header-logo-with-links-demo" },
  },
];

const COPY_SOURCE_STEP = "<Step>Copy the component source into your project.</Step>";

const injectDependencyStep = (text, dependency) => {
  if (!text.includes(COPY_SOURCE_STEP)) {
    return text;
  }
  const block = `<Step>Install the following dependencies:</Step>

\`\`\`bash
${dependency}
\`\`\`

${COPY_SOURCE_STEP}`;
  // Inject once, before the (single) copy-source step on every component page.
  return text.replace(COPY_SOURCE_STEP, block);
};

const transformMdx = (text, target) => {
  let out = text
    .split(`base="${SRC_BASE}"`)
    .join(`base="${target.base}"`)
    .split(`registry/bases/${SRC_BASE}/`)
    .join(`registry/bases/${target.base}/`)
    .split(`/docs/components/${SRC_BASE}/`)
    .join(`/docs/components/${target.base}/`)
    .split("TailwindConfig")
    .join("EmailThemeTokens");
  for (const [from, to] of Object.entries(target.demoRenames)) {
    out = out.split(`name="${from}"`).join(`name="${to}"`);
  }
  out = injectDependencyStep(out, target.dependency);
  return out;
};

const transformMeta = (text, target) =>
  text.split('"title": "React Email"').join(`"title": "${target.title}"`);

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
    fs.writeFileSync(
      destPath,
      isMeta ? transformMeta(raw, target) : transformMdx(raw, target)
    );
    files++;
  }
  console.log(`${target.base}: ${files} files generated from ${SRC_BASE}`);
};

for (const target of TARGETS) {
  generate(target);
}

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
