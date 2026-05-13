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

export type TeamInlineVariant = "default" | "slanted-left" | "slanted-right";

export interface TeamInlineProps {
  theme?: EmailThemeTokens;
  members?: { avatarUrl?: string; name: string; role: string }[];
  variant?: TeamInlineVariant;
}

const TeamInlineSection = ({
  members,
  theme,
  variant,
}: {
  members: TeamInlineProps["members"];
  theme: EmailThemeTokens;
  variant: TeamInlineVariant;
}) => {
  const items = members ?? [];

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      <MjmlColumn>
        {items.slice(0, 4).map((member, i) => (
          <MjmlColumn
            key={member.name + i}
            width={`${100 / Math.min(items.length, 4)}%`}
            padding={theme.spacingBase ?? "24px"}
            verticalAlign="middle"
          >
            {member.avatarUrl ? (
              <MjmlImage
                align="center"
                alt={member.name}
                borderRadius="50%"
                src={member.avatarUrl}
                width={64}
                height={64}
                paddingBottom={theme.spacingBase ?? "8px"}
              />
            ) : null}
            <MjmlText
              align="center"
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeSm ?? "12px"}
              fontWeight={theme.fontWeightMedium}
              paddingBottom={theme.spacingBase ?? "2px"}
            >
              {member.name}
            </MjmlText>
            <MjmlText
              align="center"
              color={theme.colorTextMuted}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeSm ?? "11px"}
            >
              {member.role}
            </MjmlText>
          </MjmlColumn>
        ))}
      </MjmlColumn>
    </MjmlSection>
  );
};

export const HorizontalTeamMemberBios = ({
  theme = defaultTheme,
  members = [
    { name: "John Doe", role: "CEO" },
    { name: "Jane Smith", role: "CTO" },
    { name: "Bob Wilson", role: "Design" },
    { name: "Alice Lee", role: "Marketing" },
  ],
  variant = "default",
}: TeamInlineProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>team inline</MjmlPreview>
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
        <TeamInlineSection members={members} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HorizontalTeamMemberBios.PreviewProps = {
  members: [
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2Fhorizontal-team-member-bios.tsx-64-1&size=64",
      name: "Alex Johnson",
      role: "CEO",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2Fhorizontal-team-member-bios.tsx-64-2&size=64",
      name: "Maria Garcia",
      role: "CTO",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2Fhorizontal-team-member-bios.tsx-64-3&size=64",
      name: "David Kim",
      role: "Design",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2Fhorizontal-team-member-bios.tsx-64-4&size=64",
      name: "Alice Lee",
      role: "Marketing",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TeamInlineProps;
