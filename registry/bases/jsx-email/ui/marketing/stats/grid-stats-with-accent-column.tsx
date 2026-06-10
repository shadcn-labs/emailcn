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

export type StatsAccentVariant = "default" | "slanted-left" | "slanted-right";

export interface StatsAccentProps {
  theme?: EmailThemeTokens;
  stats?: { value: string; label: string }[];
  columns?: 2 | 3 | 4;
  variant?: StatsAccentVariant;
}

const StatsAccentSection = ({
  columns,
  stats,
  theme,
  variant,
}: {
  columns: 2 | 3 | 4;
  stats: StatsAccentProps["stats"];
  theme: EmailThemeTokens;
  variant: StatsAccentVariant;
}) => {
  const colWidth = `${100 / columns}%`;
  const items = (stats ?? []).slice(0, columns);

  return (
    <Section
      style={{
        backgroundColor: theme.colorBackgroundMuted,
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
              width: colWidth,
            }}
          >
            <Text
              style={{
                color: theme.colorPrimary,
                fontFamily: theme.fontFamily,
                fontSize: "28px",
                fontWeight: theme.fontWeightBold,
                margin: 0,
                paddingBottom: theme.spacingBase ?? "8px",
                textAlign: "center",
              }}
            >
              {stat.value}
            </Text>
            <Text
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeSm ?? "14px",
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

export const GridStatsWithAccentColumn = ({
  theme = defaultTheme,
  stats = [
    { label: "Users", value: "10K+" },
    { label: "Downloads", value: "50K+" },
    { label: "Countries", value: "120+" },
  ],
  columns = 3,
  variant = "default",
}: StatsAccentProps) => (
  <Html>
    <Head />
    <Preview>stats accent</Preview>
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
          <StatsAccentSection
            columns={columns}
            stats={stats}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

GridStatsWithAccentColumn.PreviewProps = {
  columns: 3,
  stats: [
    { label: "Active Users", value: "50K+" },
    { label: "Countries", value: "120+" },
    { label: "5-Star Reviews", value: "10K+" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies StatsAccentProps;
