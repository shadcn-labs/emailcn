/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type TeamCompactVariant = "default" | "slanted-left" | "slanted-right";
export interface TeamCompactProps {
  theme?: EmailThemeTokens;
  members?: { avatarUrl?: string; name: string; role: string }[];
  variant?: TeamCompactVariant;
}
const TeamCompactSection = ({
  members,
  theme,
  variant,
}: {
  members: TeamCompactProps["members"];
  theme: EmailThemeTokens;
  variant: TeamCompactVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {(members ?? []).slice(0, 4).map((m, i) => (
      <MjmlColumn
        key={m.name + i}
        width="25%"
        padding={theme.spacingBase ?? "12px"}
        verticalAlign="top"
      >
        {m.avatarUrl ? (
          <MjmlImage
            align="center"
            alt={m.name}
            borderRadius="50%"
            src={m.avatarUrl}
            width={48}
            height={48}
            paddingBottom={theme.spacingBase ?? "8px"}
          />
        ) : null}
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm}
          fontWeight={theme.fontWeightMedium}
          paddingBottom={theme.spacingBase ?? "2px"}
        >
          {m.name}
        </MjmlText>
        <MjmlText
          align="center"
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize="11px"
        >
          {m.role}
        </MjmlText>
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const TwoColumnsCompact = ({
  theme = defaultTheme,
  members = [
    { name: "John Doe", role: "CEO" },
    { name: "Jane Smith", role: "CTO" },
    { name: "Bob Wilson", role: "Design" },
    { name: "Alice Lee", role: "Marketing" },
  ],
  variant = "default",
}: TeamCompactProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>team compact</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <TeamCompactSection members={members} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
TwoColumnsCompact.PreviewProps = {
  members: [
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2F2-columns-compact.tsx-48-1&size=48",
      name: "Alex Johnson",
      role: "CEO",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2F2-columns-compact.tsx-48-2&size=48",
      name: "Maria Garcia",
      role: "CTO",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2F2-columns-compact.tsx-48-3&size=48",
      name: "David Kim",
      role: "Design",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2F2-columns-compact.tsx-48-4&size=48",
      name: "Alice Lee",
      role: "Marketing",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TeamCompactProps;
