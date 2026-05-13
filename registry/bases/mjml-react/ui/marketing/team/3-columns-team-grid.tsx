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

export type TeamGridVariant = "default" | "slanted-left" | "slanted-right";

export interface TeamGridProps {
  theme?: EmailThemeTokens;
  members?: { avatarUrl?: string; name: string; role: string; bio?: string }[];
  columns?: 2 | 3;
  variant?: TeamGridVariant;
}

const TeamGridSection = ({
  columns,
  members,
  theme,
  variant,
}: {
  columns: 2 | 3;
  members: TeamGridProps["members"];
  theme: EmailThemeTokens;
  variant: TeamGridVariant;
}) => {
  const colWidth = columns === 2 ? "50%" : "33.33%";
  const items = (members ?? []).slice(0, columns);

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {items.map((member, i) => (
        <MjmlColumn
          key={member.name + i}
          width={colWidth}
          padding={theme.spacingBase}
          verticalAlign="top"
        >
          {member.avatarUrl ? (
            <MjmlImage
              align="center"
              alt={member.name}
              borderRadius="50%"
              src={member.avatarUrl}
              width={80}
              height={80}
              paddingBottom={theme.spacingBase}
            />
          ) : null}
          <MjmlText
            align="center"
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase}
            fontWeight={theme.fontWeightMedium}
            paddingBottom={theme.spacingBase}
          >
            {member.name}
          </MjmlText>
          <MjmlText
            align="center"
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm}
            paddingBottom={theme.spacingBase}
          >
            {member.role}
          </MjmlText>
          {member.bio ? (
            <MjmlText
              align="center"
              color={theme.colorTextSubtle}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeSm}
              lineHeight={theme.lineHeightBase}
            >
              {member.bio}
            </MjmlText>
          ) : null}
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const ThreeColumnsTeamGrid = ({
  theme = defaultTheme,
  members = [
    { name: "John Doe", role: "CEO" },
    { name: "Jane Smith", role: "CTO" },
    { name: "Bob Wilson", role: "Design Lead" },
  ],
  columns = 3,
  variant = "default",
}: TeamGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>team grid</MjmlPreview>
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
        <TeamGridSection
          columns={columns}
          members={members}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ThreeColumnsTeamGrid.PreviewProps = {
  columns: 3,
  members: [
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2F3-columns-team-grid.tsx-80-1&size=80",
      bio: "Building the future of email.",
      name: "Alex Johnson",
      role: "CEO & Founder",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2F3-columns-team-grid.tsx-80-2&size=80",
      bio: "Leading engineering and product.",
      name: "Maria Garcia",
      role: "CTO",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2F3-columns-team-grid.tsx-80-3&size=80",
      bio: "Designing beautiful experiences.",
      name: "David Kim",
      role: "Design Lead",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TeamGridProps;
