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

export type TeamWithBioVariant = "default" | "slanted-left" | "slanted-right";
export interface TeamWithBioProps {
  theme?: EmailThemeTokens;
  members?: { avatarUrl?: string; name: string; role: string; bio: string }[];
  variant?: TeamWithBioVariant;
}
const TeamWithBioSection = ({
  members,
  theme,
  variant,
}: {
  members: TeamWithBioProps["members"];
  theme: EmailThemeTokens;
  variant: TeamWithBioVariant;
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
          {m.avatarUrl ? (
            <Img
              alt={m.name}
              src={m.avatarUrl}
              width={80}
              height={80}
              style={{
                borderRadius: "50%",
                display: "block",
                margin: "0 auto",
                maxWidth: "100%",
                paddingBottom: theme.spacingBase ?? "16px",
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
              paddingBottom: theme.spacingBase ?? "8px",
              textAlign: "center",
            }}
          >
            {m.role}
          </Text>
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
            {m.bio}
          </Text>
        </Column>
      ))}
    </Row>
  </Section>
);
export const TwoColumnTeamCardsWithDetails = ({
  theme = defaultTheme,
  members = [{ bio: "Building the future.", name: "John Doe", role: "CEO" }],
  variant = "default",
}: TeamWithBioProps) => (
  <Html>
    <Head />
    <Preview>team with bio</Preview>
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
          <TeamWithBioSection
            members={members}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
TwoColumnTeamCardsWithDetails.PreviewProps = {
  members: [
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2F2-column-team-cards-with-details.tsx-80-1&size=80",
      bio: "Building the future of email.",
      name: "Alex Johnson",
      role: "CEO",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2F2-column-team-cards-with-details.tsx-80-2&size=80",
      bio: "Leading engineering.",
      name: "Maria Garcia",
      role: "CTO",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fteam%2F2-column-team-cards-with-details.tsx-80-3&size=80",
      bio: "Designing experiences.",
      name: "David Kim",
      role: "Design Lead",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TeamWithBioProps;
