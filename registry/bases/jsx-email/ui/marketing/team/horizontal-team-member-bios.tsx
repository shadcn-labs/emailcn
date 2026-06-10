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
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: `${theme.spacingXl ?? "48px"} 0`,
      }}
    >
      <Row>
        <Column>
          {items.slice(0, 4).map((member, i) => (
            <Column
              key={member.name + i}
              style={{
                padding: theme.spacingBase ?? "24px",
                verticalAlign: "middle",
                width: `${100 / Math.min(items.length, 4)}%`,
              }}
            >
              {member.avatarUrl ? (
                <Img
                  alt={member.name}
                  src={member.avatarUrl}
                  width={64}
                  height={64}
                  style={{
                    borderRadius: "50%",
                    display: "block",
                    margin: "0 auto",
                    maxWidth: "100%",
                    paddingBottom: theme.spacingBase ?? "8px",
                  }}
                />
              ) : null}
              <Text
                style={{
                  color: theme.colorText,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeSm ?? "12px",
                  fontWeight: theme.fontWeightMedium,
                  margin: 0,
                  paddingBottom: theme.spacingBase ?? "2px",
                  textAlign: "center",
                }}
              >
                {member.name}
              </Text>
              <Text
                style={{
                  color: theme.colorTextMuted,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeSm ?? "11px",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {member.role}
              </Text>
            </Column>
          ))}
        </Column>
      </Row>
    </Section>
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
  <Html>
    <Head />
    <Preview>team inline</Preview>
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
          <TeamInlineSection
            members={members}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
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
