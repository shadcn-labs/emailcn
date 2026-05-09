import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "public", "r");

const replacements = [
  [
    /@\/registry\/bases\/react-email\/fonts\/([^"']+)/g,
    "@/components/emails/fonts/$1",
  ],
  [/@\/registry\/bases\/react-email\/ui\/([^"']+)/g, "@/components/emails/$1"],
  [/@\/registry\/themes\/([^"']+)/g, "@/components/emails/themes/$1"],
  [/@\/registry\/lib\/resolve-theme/g, "@/components/emails/lib/resolve-theme"],
  [
    /(?:\.\.\/)+lib\/get-layout-tokens/g,
    "@/components/emails/lib/get-layout-tokens",
  ],
  [
    /@\/registry\/bases\/mjml-react\/themes\/([^"']+)/g,
    "@/components/emails/themes/mjml-$1",
  ],
  [/@\/registry\/bases\/mjml-react\/ui\/([^"']+)/g, "@/components/emails/$1"],
  [/@\/registry\/bases\/mjml-react\/blocks\/([^"']+)/g, "@/components/emails/$1"],
];

const normalizeCode = (code) => {
  let updated = code;

  for (const [pattern, replacement] of replacements) {
    updated = updated.replace(pattern, replacement);
  }

  return updated;
};

for (const fileName of fs.readdirSync(outDir)) {
  if (!fileName.endsWith(".json")) {
    continue;
  }

  const filePath = path.join(outDir, fileName);
  const item = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  let changed = false;

  for (const file of item.files ?? []) {
    if (typeof file.target === "string" && file.target.startsWith("emails/")) {
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
