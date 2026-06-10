/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: `${theme.spacingXl ?? "48px"} 0`,
      }}
    >
      <Row>
        {items.map((member, i) => (
          <Column
            key={member.name + i}
            style={{
              padding: theme.spacingBase,
              verticalAlign: "top",
              width: colWidth,
            }}
          >
            {member.avatarUrl ? (
              <Img
                alt={member.name}
                src={member.avatarUrl}
                width={80}
                height={80}
                style={{
                  borderRadius: "50%",
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "100%",
                  paddingBottom: theme.spacingBase,
                }}
              />
            ) : null}
            <Text
              style={{
                color: theme.colorText,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeBase,
                fontWeight: theme.fontWeightMedium,
                margin: 0,
                paddingBottom: theme.spacingBase,
                textAlign: "center",
              }}
            >
              {member.name}
            </Text>
            <Text
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeSm,
                margin: 0,
                paddingBottom: theme.spacingBase,
                textAlign: "center",
              }}
            >
              {member.role}
            </Text>
            {member.bio ? (
              <Text
                style={{
                  color: theme.colorTextSubtle,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeSm,
                  lineHeight: theme.lineHeightBase,
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {member.bio}
              </Text>
            ) : null}
          </Column>
        ))}
      </Row>
    </Section>
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
  <Html>
    <Head />
    <Preview>team grid</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <TeamGridSection
            columns={columns}
            members={members}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
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
