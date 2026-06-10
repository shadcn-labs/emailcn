import fs from "node:fs";
import path from "node:path";

const outRoot = path.join(process.cwd(), "public", "r");
const STYLES = ["react-email", "mjml-react", "jsx-email"];

// Rewrites installed import paths to match each item's file target (see
// scripts/sync-registry-items.mjs). Item names are identical across styles,
// so the rules only vary by the base path being replaced.
const baseRules = STYLES.flatMap((base) => [
  [
    new RegExp(`@\\/registry\\/bases\\/${base}\\/themes\\/([^"']+)`, "g"),
    "@/components/emails/themes/theme-$1",
  ],
  [
    new RegExp(`@\\/registry\\/bases\\/${base}\\/fonts\\/([^"']+)`, "g"),
    "@/components/emails/fonts/$1",
  ],
  [
    new RegExp(`@\\/registry\\/bases\\/${base}\\/ui\\/([^"']+)`, "g"),
    "@/components/emails/$1",
  ],
  [
    new RegExp(`@\\/registry\\/bases\\/${base}\\/blocks\\/([^"']+)`, "g"),
    "@/components/emails/$1",
  ],
]);

const replacements = [
  ...baseRules,
  [/@\/registry\/themes\/([^"']+)/g, "@/components/emails/themes/$1"],
  [/@\/registry\/lib\/resolve-theme/g, "@/components/emails/lib/resolve-theme"],
  [
    /(?:\.\.\/)+lib\/get-layout-tokens/g,
    "@/components/emails/lib/get-layout-tokens",
  ],
];

const normalizeCode = (code) => {
  let updated = code;

  for (const [pattern, replacement] of replacements) {
    updated = updated.replace(pattern, replacement);
  }

  return updated;
};

for (const style of STYLES) {
  const outDir = path.join(outRoot, style);
  for (const fileName of fs.readdirSync(outDir)) {
    if (!fileName.endsWith(".json")) {
      continue;
    }

    const filePath = path.join(outDir, fileName);
    const item = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    let changed = false;

    for (const file of item.files ?? []) {
      if (
        typeof file.target === "string" &&
        file.target.startsWith("emails/")
      ) {
        file.target = `components/${file.target}`;
        changed = true;
      }

      if (typeof file.content === "string") {
        const content = normalizeCode(file.content);
        if (content !== file.content) {
          file.content = content;
          changed = true;
        }
      }
    }

    if (changed) {
      fs.writeFileSync(filePath, `${JSON.stringify(item, null, 2)}\n`);
    }
  }
}
