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

export type TeamCardVariant = "default" | "slanted-left" | "slanted-right";
export interface TeamCardProps {
  theme?: EmailThemeTokens;
  members?: { avatarUrl?: string; name: string; role: string }[];
  variant?: TeamCardVariant;
}
const TeamCardSection = ({
  members,
  theme,
  variant,
}: {
  members: TeamCardProps["members"];
  theme: EmailThemeTokens;
  variant: TeamCardVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {(members ?? []).slice(0, 3).map((m, i) => (
      <MjmlColumn
        key={m.name + i}
        width="33.33%"
        padding={theme.spacingBase ?? "16px"}
        verticalAlign="top"
      >
        <MjmlSection
          backgroundColor={theme.colorBackgroundMuted}
          border={`1px solid ${theme.colorBorder}`}
          borderRadius={theme.borderRadius}
          padding={theme.spacingBase ?? "16px"}
        >
          {m.avatarUrl ? (
            <MjmlImage
              align="center"
              alt={m.name}
              borderRadius="50%"
              src={m.avatarUrl}
              width={64}
              height={64}
              paddingBottom={theme.spacingBase ?? "12px"}
            />
          ) : null}
          <MjmlText
            align="center"
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase}
            fontWeight={theme.fontWeightMedium}
            paddingBottom={theme.spacingBase ?? "4px"}
          >
            {m.name}
          </MjmlText>
          <MjmlText
            align="center"
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm}
          >
            {m.role}
          </MjmlText>
        </MjmlSection>
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const TwoColumnTeamCards = ({
  theme = defaultTheme,
  members = [{ name: "John Doe", role: "CEO" }],
  variant = "default",
}: TeamCardProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>team card</MjmlPreview>
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
        <TeamCardSection members={members} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
TwoColumnTeamCards.PreviewProps = {
  members: [
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2F2-column-team-cards.tsx-64-1&size=64",
      name: "Alex Johnson",
      role: "CEO",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2F2-column-team-cards.tsx-64-2&size=64",
      name: "Maria Garcia",
      role: "CTO",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2F2-column-team-cards.tsx-64-3&size=64",
      name: "David Kim",
      role: "Design Lead",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TeamCardProps;
