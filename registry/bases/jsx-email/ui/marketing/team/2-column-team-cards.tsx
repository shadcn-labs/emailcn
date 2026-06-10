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
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      {(members ?? []).slice(0, 3).map((m, i) => (
        <Column
          key={m.name + i}
          style={{
            padding: theme.spacingBase ?? "16px",
            verticalAlign: "top",
            width: "33.33%",
          }}
        >
          <Section
            style={{
              backgroundColor: theme.colorBackgroundMuted,
              border: `1px solid ${theme.colorBorder}`,
              borderRadius: theme.borderRadius,
              padding: theme.spacingBase ?? "16px",
            }}
          >
            <Row>
              {m.avatarUrl ? (
                <Img
                  alt={m.name}
                  src={m.avatarUrl}
                  width={64}
                  height={64}
                  style={{
                    borderRadius: "50%",
                    display: "block",
                    margin: "0 auto",
                    maxWidth: "100%",
                    paddingBottom: theme.spacingBase ?? "12px",
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
                  paddingBottom: theme.spacingBase ?? "4px",
                  textAlign: "center",
                }}
              >
                {m.name}
              </Text>
              <Text
                style={{
                  color: theme.colorTextMuted,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeSm,
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {m.role}
              </Text>
            </Row>
          </Section>
        </Column>
      ))}
    </Row>
  </Section>
);
export const TwoColumnTeamCards = ({
  theme = defaultTheme,
  members = [{ name: "John Doe", role: "CEO" }],
  variant = "default",
}: TeamCardProps) => (
  <Html>
    <Head />
    <Preview>team card</Preview>
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
          <TeamCardSection members={members} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
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
