/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type StatsInlineVariant = "default" | "slanted-left" | "slanted-right";

export interface StatsInlineProps {
  theme?: EmailThemeTokens;
  stats?: { value: string; label: string }[];
  variant?: StatsInlineVariant;
}

const StatsInlineSection = ({
  stats,
  theme,
  variant,
}: {
  stats: StatsInlineProps["stats"];
  theme: EmailThemeTokens;
  variant: StatsInlineVariant;
}) => {
  const items = (stats ?? []).slice(0, 4);

  return (
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: `${theme.spacingXl ?? "48px"} 0`,
      }}
    >
      <Row>
        {items.map((stat, i) => (
          <Column
            key={stat.label + i}
            style={{
              padding: theme.spacingBase ?? "24px",
              verticalAlign: "top",
              width: `${100 / items.length}%`,
            }}
          >
            <Text
              style={{
                color: theme.colorText,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeLg ?? "16px",
                fontWeight: theme.fontWeightBold,
                margin: 0,
                paddingBottom: theme.spacingBase ?? "4px",
                textAlign: "center",
              }}
            >
              {stat.value}
            </Text>
            <Text
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeSm ?? "12px",
                margin: 0,
                textAlign: "center",
              }}
            >
              {stat.label}
            </Text>
          </Column>
        ))}
      </Row>
    </Section>
  );
};

export const SingleStatWithBackgroundImage = ({
  theme = defaultTheme,
  stats = [
    { label: "Users", value: "10K+" },
    { label: "Downloads", value: "50K+" },
    { label: "Countries", value: "120+" },
    { label: "Reviews", value: "5K+" },
  ],
  variant = "default",
}: StatsInlineProps) => (
  <Html>
    <Head />
    <Preview>stats inline</Preview>
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
          <StatsInlineSection stats={stats} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);

SingleStatWithBackgroundImage.PreviewProps = {
  stats: [
    { label: "Active Users", value: "50K+" },
    { label: "Countries", value: "120+" },
    { label: "5-Star Reviews", value: "10K+" },
    { label: "Years", value: "5+" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies StatsInlineProps;
