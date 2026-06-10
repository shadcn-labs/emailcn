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
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      {(members ?? []).slice(0, 4).map((m, i) => (
        <Column
          key={m.name + i}
          style={{
            padding: theme.spacingBase ?? "12px",
            verticalAlign: "top",
            width: "25%",
          }}
        >
          {m.avatarUrl ? (
            <Img
              alt={m.name}
              src={m.avatarUrl}
              width={48}
              height={48}
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
              fontSize: theme.fontSizeSm,
              fontWeight: theme.fontWeightMedium,
              margin: 0,
              paddingBottom: theme.spacingBase ?? "2px",
              textAlign: "center",
            }}
          >
            {m.name}
          </Text>
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: "11px",
              margin: 0,
              textAlign: "center",
            }}
          >
            {m.role}
          </Text>
        </Column>
      ))}
    </Row>
  </Section>
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
  <Html>
    <Head />
    <Preview>team compact</Preview>
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
          <TeamCompactSection
            members={members}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
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
