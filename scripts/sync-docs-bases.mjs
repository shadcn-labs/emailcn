/* eslint-disable no-plusplus, prefer-destructuring */
// 1) Rewrites install commands in mjml-react component docs to the canonical
//    item names (derived from each page's ComponentSource). Item names are
//    identical across styles; the style is selected by the registry URL
//    (/r/<style>/<name>.json) configured in components.json.
// 2) Mirrors the mjml-react docs tree to jsx-email (the jsx-email ui library
//    and demos are 1:1 ports of the mjml-react ones).
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DOCS = path.join(ROOT, "content/docs/components");

const walk = (d) =>
  fs
    .readdirSync(d, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]
    );

// canonical install name from the ComponentSource src in the same page
const canonicalInstall = (src) => {
  const m = src.match(
    /<ComponentSource[\s\S]*?src="registry\/bases\/[\w-]+\/(ui|blocks|themes|fonts)\/([\w./-]+)\.(tsx|ts)"/
  );
  if (!m) {
    return null;
  }
  const stem = path.basename(m[2]);
  const kind = m[1];
  if (kind === "blocks") {
    return `block-${stem}`;
  }
  if (kind === "themes") {
    return `theme-${stem}`;
  }
  if (kind === "fonts") {
    return stem === "default" ? "default-fonts" : stem;
  }
  return stem;
};

// --- 1) fix mjml install names in place ---
let fixed = 0;
for (const f of walk(path.join(DOCS, "mjml-react"))) {
  if (!f.endsWith(".mdx")) {
    continue;
  }
  const src = fs.readFileSync(f, "utf-8");
  const name = canonicalInstall(src);
  if (!name) {
    continue;
  }
  const updated = src.replaceAll(
    /npx shadcn@latest add @emailcn\/[\w-]+/g,
    `npx shadcn@latest add @emailcn/${name}`
  );
  if (updated !== src) {
    fs.writeFileSync(f, updated);
    fixed++;
  }
}
console.log(`mjml docs install names fixed: ${fixed}`);

// --- 2) mirror mjml-react docs tree to jsx-email ---
const SRC = path.join(DOCS, "mjml-react");
const DEST = path.join(DOCS, "jsx-email");
fs.rmSync(DEST, { force: true, recursive: true });

const transform = (text) =>
  text
    .split('base="mjml-react"')
    .join('base="jsx-email"')
    .split("registry/bases/mjml-react/")
    .join("registry/bases/jsx-email/")
    .split("/docs/components/mjml-react/")
    .join("/docs/components/jsx-email/")
    .split("npm install @faire/mjml-react")
    .join("npm install jsx-email")
    .split("MJML React")
    .join("JSX Email")
    .split("Email components built with mjml-react")
    .join("Email components built with jsx-email")
    .split("(MJML)")
    .join("(JSX Email)")
    .split("EmailThemeTokens` | `defaultTheme`")
    .join("EmailThemeTokens` | `defaultTheme`");

let copied = 0;
for (const f of walk(SRC)) {
  const rel = path.relative(SRC, f);
  const dest = path.join(DEST, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, transform(fs.readFileSync(f, "utf-8")));
  copied++;
}
console.log(`jsx-email docs files written: ${copied}`);

// --- 3) register the base in components/meta.json ---
const metaPath = path.join(DOCS, "meta.json");
const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
if (!meta.pages.includes("jsx-email")) {
  meta.pages.push("jsx-email");
  fs.writeFileSync(metaPath, `${JSON.stringify(meta, null, 2)}\n`);
  console.log("components/meta.json: added jsx-email");
}
