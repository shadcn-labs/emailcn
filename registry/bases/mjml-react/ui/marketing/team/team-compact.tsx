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
export const TeamCompact = ({
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
TeamCompact.PreviewProps = {
  members: [
    {
      avatarUrl: "https://placehold.co/48x48?text=AJ",
      name: "Alex Johnson",
      role: "CEO",
    },
    {
      avatarUrl: "https://placehold.co/48x48?text=MG",
      name: "Maria Garcia",
      role: "CTO",
    },
    {
      avatarUrl: "https://placehold.co/48x48?text=DK",
      name: "David Kim",
      role: "Design",
    },
    {
      avatarUrl: "https://placehold.co/48x48?text=AL",
      name: "Alice Lee",
      role: "Marketing",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TeamCompactProps;
