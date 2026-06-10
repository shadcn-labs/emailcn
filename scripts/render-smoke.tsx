/* eslint-disable no-plusplus, no-nested-ternary, complexity, prefer-destructuring, no-inline-comments, unicorn/no-array-reduce */
// Renders every jsx-email demo to HTML and fails on errors or suspiciously
// short output. Run with: npx tsx scripts/render-smoke.tsx
import { render } from "jsx-email";

import { demos } from "@/examples/__index__";

const main = async () => {
  const entries = Object.entries(demos["jsx-email"]);
  const failures: string[] = [];
  for (const [name, Demo] of entries) {
    try {
      const html = await render(<Demo />);
      if (!html || html.length < 300) {
        failures.push(`${name}: short output (${html?.length ?? 0})`);
      }
    } catch (error) {
      failures.push(
        `${name}: ${error instanceof Error ? error.message : error}`
      );
    }
  }
  console.log(`rendered ${entries.length - failures.length}/${entries.length}`);
  if (failures.length > 0) {
    console.error(failures.join("\n"));
    process.exit(1);
  }
};

main();
