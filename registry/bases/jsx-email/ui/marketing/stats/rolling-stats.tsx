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

export type StatsFourColumnVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface StatsFourColumnProps {
  theme?: EmailThemeTokens;
  stats?: { value: string; label: string }[];
  variant?: StatsFourColumnVariant;
}

const StatsFourColumnSection = ({
  stats,
  theme,
  variant,
}: {
  stats: StatsFourColumnProps["stats"];
  theme: EmailThemeTokens;
  variant: StatsFourColumnVariant;
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
              width: "25%",
            }}
          >
            <Text
              style={{
                color: theme.colorText,
                fontFamily: theme.fontFamily,
                fontSize: "24px",
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
                fontSize: theme.fontSizeSm ?? "11px",
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

export const RollingStats = ({
  theme = defaultTheme,
  stats = [
    { label: "Users", value: "10K+" },
    { label: "Downloads", value: "50K+" },
    { label: "Countries", value: "120+" },
    { label: "Reviews", value: "5K+" },
  ],
  variant = "default",
}: StatsFourColumnProps) => (
  <Html>
    <Head />
    <Preview>stats 4-col</Preview>
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
          <StatsFourColumnSection
            stats={stats}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

RollingStats.PreviewProps = {
  stats: [
    { label: "Active Users", value: "50K+" },
    { label: "Countries", value: "120+" },
    { label: "Reviews", value: "10K+" },
    { label: "Years", value: "5+" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies StatsFourColumnProps;
