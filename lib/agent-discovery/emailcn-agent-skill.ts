import { createHash } from "node:crypto";

import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";

export const EMAILCN_AGENT_SKILL_MD = `# ${SITE.NAME} — email component registry

## Summary

Help users add **${SITE.NAME}** email components via the shadcn CLI against the public registry, and navigate the documentation site. The registry ships three styles — \`react-email\`, \`mjml-react\`, and \`jsx-email\` — with identical item names.

## Registry

- Registry JSON: \`/r/{style}/registry.json\` (shadcn schema), styles: \`react-email\`, \`mjml-react\`, \`jsx-email\`
- Items: \`/r/{style}/{name}.json\`
- Docs: ${ROUTES.DOCS_REGISTRY}

## Install (shadcn)

\`\`\`bash
npx shadcn@latest add ${SITE.URL}/r/react-email/buttons.json
\`\`\`

Prefer following the on-site installation guide: ${ROUTES.DOCS_INSTALLATION}

## When answering

- Prefer linking to \`${ROUTES.DOCS}\` sections over guessing props.
- Components live under React Email, MJML React, and JSX Email sections in the docs.
`;

export const emailcnAgentSkillDigest = (): string => {
  const hex = createHash("sha256")
    .update(EMAILCN_AGENT_SKILL_MD, "utf-8")
    .digest("hex");

  return `sha256:${hex}`;
};
