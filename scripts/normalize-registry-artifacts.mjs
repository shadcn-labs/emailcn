import fs from "node:fs";
import path from "node:path";

const outRoot = path.join(process.cwd(), "public", "r");
const STYLES = ["react-email", "mjml-react", "jsx-email"];

// Rewrites installed import paths to match each item's file target (see
// scripts/sync-registry-items.mjs). Item names are identical across styles,
// so the rules only vary by the base path being replaced.
const installedImport = (kind, importPath) => {
  const fileName = path.posix.basename(importPath);
  return `@/components/email/${kind === "themes" ? `theme-${fileName}` : fileName}`;
};

const baseRules = STYLES.map((base) => [
  new RegExp(
    `@\\/registry\\/bases\\/${base}\\/(themes|fonts|ui|blocks)\\/([^"']+)`,
    "g"
  ),
  (_match, kind, importPath) => installedImport(kind, importPath),
]);

const commonReplacements = [
  [
    /@\/components\/emails\/([^"']+)/g,
    (_match, importPath) =>
      `@/components/email/${path.posix.basename(importPath)}`,
  ],
  [/@\/registry\/lib\/resolve-theme/g, "@/components/email/resolve-theme"],
  [
    /(?:\.\.\/)+lib\/get-layout-tokens/g,
    "@/components/email/get-layout-tokens",
  ],
];

const themeReplacementsFor = (style) => [
  [
    /@\/registry\/themes\/react-email\/([^"']+)/g,
    (_match, importPath) =>
      `@/components/email/theme-${path.posix.basename(importPath)}`,
  ],
  [
    /@\/registry\/themes\/definitions\/([^"']+)/g,
    (_match, importPath) => {
      const suffix = style === "react-email" ? "-tokens" : "";
      return `@/components/email/theme-${path.posix.basename(importPath)}${suffix}`;
    },
  ],
  [
    /@\/registry\/themes\/create-react-email-theme/g,
    "@/components/email/create-react-email-theme",
  ],
  [/@\/registry\/themes\/types/g, "@/components/email/email-theme-types"],
];

const normalizeCode = (code, style) => {
  let updated = code;

  const replacements = [
    ...baseRules,
    ...themeReplacementsFor(style),
    ...commonReplacements,
  ];
  for (const [pattern, replacement] of replacements) {
    updated = updated.replace(pattern, replacement);
  }

  return updated;
};

const normalizeItem = (item, style) => {
  let changed = false;

  for (const file of item.files ?? []) {
    if (typeof file.target === "string") {
      const target = `components/email/${path.posix.basename(file.target)}`;
      if (file.target !== target) {
        file.target = target;
        changed = true;
      }
    }

    if (typeof file.content === "string") {
      const content = normalizeCode(file.content, style);
      if (content !== file.content) {
        file.content = content;
        changed = true;
      }
    }
  }

  return changed;
};

for (const style of STYLES) {
  const outDir = path.join(outRoot, style);
  const registry = JSON.parse(
    fs.readFileSync(path.join(outDir, "registry.json"), "utf-8")
  );
  const expectedFiles = new Set([
    "registry.json",
    ...registry.items.map((item) => `${item.name}.json`),
  ]);

  for (const fileName of fs.readdirSync(outDir)) {
    if (fileName.endsWith(".json") && !expectedFiles.has(fileName)) {
      fs.rmSync(path.join(outDir, fileName));
    }
  }

  for (const fileName of fs.readdirSync(outDir)) {
    if (!fileName.endsWith(".json")) {
      continue;
    }

    const filePath = path.join(outDir, fileName);
    const item = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    let changed = false;
    for (const registryItem of item.items ?? [item]) {
      changed = normalizeItem(registryItem, style) || changed;
    }

    if (changed) {
      fs.writeFileSync(filePath, `${JSON.stringify(item, null, 2)}\n`);
    }
  }
}
