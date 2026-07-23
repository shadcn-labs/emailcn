// Keeps component preview demos in sync without a separate manifest:
//   - react-email demo files are the canonical source
//   - mjml-react and jsx-email demos are derived by changing the registry base
//   - examples/__index__.tsx is generated from the files that actually exist
//   - every ComponentPreview reference must resolve to a demo file
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const EXAMPLES = path.join(ROOT, "examples");
const PREVIEW_DOCS = [
  path.join(ROOT, "content/docs/components"),
  path.join(ROOT, "content/docs/fonts"),
];
const SOURCE_BASE = "react-email";
const DERIVED_BASES = ["jsx-email", "mjml-react"];
const BASES = [...DERIVED_BASES, SOURCE_BASE];
const REACT_ONLY_DEMOS = new Set([
  "collage-fonts-demo.tsx",
  "default-fonts-demo.tsx",
  "dither-fonts-demo.tsx",
  "skin-fonts-demo.tsx",
  "tech-fonts-demo.tsx",
]);
const COMPONENT_PREVIEW_PATTERN = /<ComponentPreview\b[\s\S]*?\/>/g;

const walk = (directory) =>
  fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });

const componentName = (name) => {
  const pascal = name
    .split("-")
    .filter(Boolean)
    .map((part) => `${part[0].toUpperCase()}${part.slice(1)}`)
    .join("");
  return /^\d/.test(pascal) ? `Email${pascal}` : pascal;
};

const demoFiles = (base) =>
  fs
    .readdirSync(path.join(EXAMPLES, base))
    .filter((file) => file.endsWith(".tsx"))
    .toSorted();

const transformDemo = (source, base) =>
  source.replaceAll(
    `/registry/bases/${SOURCE_BASE}/`,
    `/registry/bases/${base}/`
  );

const syncDerivedDemos = (base) => {
  const destination = path.join(EXAMPLES, base);
  const canonicalFiles = demoFiles(SOURCE_BASE).filter(
    (file) => !REACT_ONLY_DEMOS.has(file)
  );
  const canonicalNames = new Set(canonicalFiles);

  for (const file of demoFiles(base)) {
    if (!canonicalNames.has(file)) {
      fs.rmSync(path.join(destination, file));
    }
  }

  for (const file of canonicalFiles) {
    const source = fs.readFileSync(
      path.join(EXAMPLES, SOURCE_BASE, file),
      "utf-8"
    );
    fs.writeFileSync(path.join(destination, file), transformDemo(source, base));
  }

  console.log(
    `${base}: ${canonicalFiles.length} demos synced from ${SOURCE_BASE}`
  );
};

const attributeValue = (tag, name) => {
  const match = new RegExp(`\\b${name}=(?:"([^"]+)"|'([^']+)')`).exec(tag);
  return match?.[1] ?? match?.[2];
};

const validatePreviewReferences = () => {
  const missing = [];

  for (const docsRoot of PREVIEW_DOCS) {
    for (const file of walk(docsRoot).filter((entry) =>
      entry.endsWith(".mdx")
    )) {
      const source = fs.readFileSync(file, "utf-8");
      for (const match of source.matchAll(COMPONENT_PREVIEW_PATTERN)) {
        const [tag] = match;
        const name = attributeValue(tag, "name");
        if (!name) {
          missing.push(`${path.relative(ROOT, file)}: missing preview name`);
          continue;
        }
        const base = attributeValue(tag, "base") ?? SOURCE_BASE;
        if (!BASES.includes(base)) {
          missing.push(
            `${path.relative(ROOT, file)}: unsupported preview base "${base}"`
          );
          continue;
        }
        const demo = path.join(EXAMPLES, base, `${name}.tsx`);
        if (!fs.existsSync(demo)) {
          missing.push(
            `${path.relative(ROOT, file)}: missing ${path.relative(ROOT, demo)}`
          );
        }
      }
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Invalid ComponentPreview references:\n${missing.join("\n")}`
    );
  }
};

const generateIndex = () => {
  const imports = ['import type { ComponentType } from "react";', ""];
  const maps = [];

  for (const base of BASES) {
    const entries = demoFiles(base).map((file, index) => {
      const name = file.slice(0, -4);
      const identifier = `Demo${componentName(base)}${index}`;
      imports.push(`import ${identifier} from "./${base}/${name}";`);
      return `    ${JSON.stringify(name)}: ${identifier},`;
    });
    maps.push(`  ${JSON.stringify(base)}: {\n${entries.join("\n")}\n  },`);
  }

  const output = `${imports.join("\n")}

export const demos: Record<
  "jsx-email" | "mjml-react" | "react-email",
  Record<string, ComponentType>
> = {
${maps.join("\n")}
};
`;
  fs.writeFileSync(path.join(EXAMPLES, "__index__.tsx"), output);
};

for (const base of DERIVED_BASES) {
  syncDerivedDemos(base);
}
validatePreviewReferences();
generateIndex();
