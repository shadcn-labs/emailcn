import { createHash } from "node:crypto";

import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";

export const EMAILCN_AGENT_SKILL_MD = `# ${SITE.NAME} — email component registry

## Summary

Help users add **${SITE.NAME}** React Email and MJML React components via the shadcn CLI against the public registry, and navigate the documentation site.

## Registry

- Registry JSON: \`/r/registry.json\` (shadcn schema)
- Docs: ${ROUTES.DOCS_REGISTRY}

## Install (shadcn)

\`\`\`bash
npx shadcn@latest add ${SITE.URL}/r/button.json
\`\`\`

Prefer following the on-site installation guide: ${ROUTES.DOCS_INSTALLATION}

## When answering

- Prefer linking to \`${ROUTES.DOCS}\` sections over guessing props.
- Components live under React Email and MJML React namespaces in the docs.
`;

export const emailcnAgentSkillDigest = (): string => {
  const hex = createHash("sha256")
    .update(EMAILCN_AGENT_SKILL_MD, "utf-8")
    .digest("hex");

  return `sha256:${hex}`;
};
