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

export type StatsWithIconsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface StatsWithIconsProps {
  theme?: EmailThemeTokens;
  stats?: { value: string; label: string; icon?: string }[];
  columns?: 2 | 3 | 4;
  variant?: StatsWithIconsVariant;
}

const StatsWithIconsSection = ({
  columns,
  stats,
  theme,
  variant,
}: {
  columns: 2 | 3 | 4;
  stats: StatsWithIconsProps["stats"];
  theme: EmailThemeTokens;
  variant: StatsWithIconsVariant;
}) => {
  const colWidth = `${100 / columns}%`;
  const items = (stats ?? []).slice(0, columns);

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
              width: colWidth,
            }}
          >
            <Text
              style={{
                fontFamily: theme.fontFamily,
                fontSize: "32px",
                margin: 0,
                paddingBottom: theme.spacingBase ?? "8px",
                textAlign: "center",
              }}
            >
              {stat.icon ?? "✨"}
            </Text>
            <Text
              style={{
                color: theme.colorText,
                fontFamily: theme.fontFamily,
                fontSize: "28px",
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

export const GridStatsWithBorder = ({
  theme = defaultTheme,
  stats = [
    { icon: "👥", label: "Users", value: "10K+" },
    { icon: "⬇️", label: "Downloads", value: "50K+" },
    { icon: "🌍", label: "Countries", value: "120+" },
  ],
  columns = 3,
  variant = "default",
}: StatsWithIconsProps) => (
  <Html>
    <Head />
    <Preview>stats with icons</Preview>
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
          <StatsWithIconsSection
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

GridStatsWithBorder.PreviewProps = {
  columns: 3,
  stats: [
    { icon: "👥", label: "Active Users", value: "50K+" },
    { icon: "🌍", label: "Countries", value: "120+" },
    { icon: "⭐", label: "5-Star Reviews", value: "10K+" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies StatsWithIconsProps;
