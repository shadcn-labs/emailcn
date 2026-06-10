// Renders every jsx-email block to HTML and fails on errors or suspiciously
// short output. Run with: npx tsx scripts/render-blocks-check.tsx
import fs from "node:fs";
import path from "node:path";

import { render } from "jsx-email";

const dir = path.join(process.cwd(), "registry/bases/jsx-email/blocks");

const main = async () => {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"));
  const failures: string[] = [];
  for (const file of files) {
    try {
      const mod = await import(path.join(dir, file));
      const Block = Object.values(mod).find((v) => typeof v === "function") as
        | ((props: Record<string, unknown>) => React.JSX.Element)
        | undefined;
      if (!Block) {
        failures.push(`${file}: no component export`);
        continue;
      }
      const html = await render(<Block />);
      if (!html || html.length < 300) {
        failures.push(`${file}: short output (${html?.length ?? 0})`);
      }
    } catch (error) {
      failures.push(
        `${file}: ${error instanceof Error ? error.message : error}`
      );
    }
  }
  console.log(`rendered ${files.length - failures.length}/${files.length}`);
  if (failures.length > 0) {
    console.error(failures.join("\n"));
    process.exit(1);
  }
};

main();
