/* eslint-disable no-plusplus, no-nested-ternary, complexity, prefer-destructuring, no-inline-comments, unicorn/no-array-reduce */
// Renders every mjml-react demo to HTML and fails on errors, MJML parse
// errors, or suspiciously short output. Run with:
//   npx tsx scripts/render-smoke-mjml.tsx
import { render } from "@faire/mjml-react/utils/render";

import { demos } from "@/examples/__index__";

const main = () => {
  const entries = Object.entries(demos["mjml-react"]);
  const failures: string[] = [];
  for (const [name, Demo] of entries) {
    try {
      const { html, errors } = render(<Demo />, { validationLevel: "soft" });
      if (errors && errors.length > 0) {
        failures.push(
          `${name}: ${errors.map((e) => e.formattedMessage).join("; ")}`
        );
      } else if (!html || html.length < 300) {
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
