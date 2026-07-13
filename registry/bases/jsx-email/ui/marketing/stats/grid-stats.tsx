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
import type { CSSProperties } from "react";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type GridStatsVariant = "default" | "slanted-left" | "slanted-right";

export type GridStatsTone = "boxed" | "outlined" | "accent" | "border";

export interface GridStatsProps {
  theme?: EmailThemeTokens;
  stat1?: string;
  stat1Label?: string;
  stat2?: string;
  stat2Label?: string;
  stat3?: string;
  stat3Label?: string;
  variant?: GridStatsVariant;
  tone?: GridStatsTone;
}

const accented = (tone: GridStatsTone, i: number) =>
  tone === "accent" && i === 0;

const columnStyle = (
  theme: EmailThemeTokens,
  tone: GridStatsTone,
  i: number
): CSSProperties => {
  const base: CSSProperties = {
    textAlign: "center",
    verticalAlign: "top",
    width: "33.33%",
  };
  switch (tone) {
    case "outlined": {
      return {
        ...base,
        border: `1px solid ${theme.colorBorder}`,
        borderRadius: "8px",
        padding: "24px",
      };
    }
    case "accent": {
      return i === 0
        ? {
            ...base,
            backgroundColor: theme.colorPrimary,
            borderRadius: "8px",
            padding: "24px",
          }
        : { ...base, padding: i === 1 ? "24px 16px" : "24px 0" };
    }
    case "border": {
      return {
        ...base,
        borderRight: i === 2 ? undefined : `1px solid ${theme.colorBorder}`,
        padding:
          i === 0 ? "24px 24px 24px 0" : i === 1 ? "24px" : "24px 0 24px 24px",
      };
    }
    default: {
      return {
        ...base,
        backgroundColor: theme.colorBackgroundMuted,
        borderRadius: "8px",
        padding: "24px",
      };
    }
  }
};

export const GridStats = ({
  theme = defaultTheme,
  stat1 = "99.9%",
  stat1Label = "Uptime",
  stat2 = "10M+",
  stat2Label = "Users",
  stat3 = "150+",
  stat3Label = "Countries",
  variant = "default",
  tone = "boxed",
}: GridStatsProps) => {
  const stats = [
    { label: stat1Label, value: stat1 },
    { label: stat2Label, value: stat2 },
    { label: stat3Label, value: stat3 },
  ];
  return (
    <Html>
      <Head />
      <Preview>Stats</Preview>
      <Body
        style={{
          backgroundColor: theme.colorBackground,
          fontFamily: theme.fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{
            margin: "0 auto",
            maxWidth: theme.containerWidth,
            padding: "64px 24px",
          }}
        >
          <Row>
            {stats.map((stat, i) => (
              <Column key={stat.label} style={columnStyle(theme, tone, i)}>
                <Text
                  style={{
                    color: accented(tone, i)
                      ? theme.colorPrimaryForeground
                      : theme.colorText,
                    fontSize: theme.fontSizeHeading,
                    fontWeight: theme.fontWeightBold,
                    margin: 0,
                  }}
                >
                  {stat.value}
                </Text>
                <Text
                  style={{
                    color: accented(tone, i)
                      ? theme.colorPrimaryForeground
                      : theme.colorTextMuted,
                    fontSize: theme.fontSizeSm,
                    letterSpacing: "0.05em",
                    margin: "8px 0 0",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </Text>
              </Column>
            ))}
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

GridStats.PreviewProps = {
  stat1: "99.9%",
  stat1Label: "Uptime",
  stat2: "10M+",
  stat2Label: "Users",
  stat3: "150+",
  stat3Label: "Countries",
  theme: defaultTheme,
  tone: "boxed",
  variant: "default",
} satisfies GridStatsProps;
