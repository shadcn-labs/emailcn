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
          padding={theme.spacingBase ?? "24px"}
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
              paddingBottom={theme.spacingBase ?? "24px"}
            />
          ) : null}
          <MjmlText
            align="center"
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase ?? "14px"}
            fontWeight={theme.fontWeightMedium}
            paddingBottom={theme.spacingBase ?? "4px"}
          >
            {member.name}
          </MjmlText>
          <MjmlText
            align="center"
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm ?? "12px"}
            paddingBottom={theme.spacingBase ?? "8px"}
          >
            {member.role}
          </MjmlText>
          {member.bio ? (
            <MjmlText
              align="center"
              color={theme.colorTextSubtle}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeSm ?? "12px"}
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

export const TeamGrid = ({
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

TeamGrid.PreviewProps = {
  columns: 3,
  members: [
    {
      avatarUrl: "https://placehold.co/80x80?text=AJ",
      bio: "Building the future of email.",
      name: "Alex Johnson",
      role: "CEO & Founder",
    },
    {
      avatarUrl: "https://placehold.co/80x80?text=MG",
      bio: "Leading engineering and product.",
      name: "Maria Garcia",
      role: "CTO",
    },
    {
      avatarUrl: "https://placehold.co/80x80?text=DK",
      bio: "Designing beautiful experiences.",
      name: "David Kim",
      role: "Design Lead",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TeamGridProps;
