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

export interface DataTableChangeIndicatorProps {
  theme?: EmailThemeTokens;
  headers?: string[];
  rows?: {
    name: string;
    value: string;
    change: string;
    direction: "up" | "down";
  }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DataTableChangeIndicatorSection = ({
  headers,
  rows,
  theme,
}: {
  headers: string[];
  rows: NonNullable<DataTableChangeIndicatorProps["rows"]>;
  theme: EmailThemeTokens;
}) => {
  const cellWidth = `${100 / headers.length}%`;
  return (
    <Section
      style={{
        border: `1px solid ${theme.colorBorder ?? "#e5e7eb"}`,
        borderRadius: theme.borderRadius,
        padding: "0",
      }}
    >
      <Row>
        <Section
          style={{
            backgroundColor: theme.colorBackgroundMuted,
            padding: `${theme.spacingBase ?? "16px"} ${theme.spacingBase ?? "16px"}`,
          }}
        >
          <Row>
            {headers.map((h) => (
              <Column key={h} style={{ width: cellWidth }}>
                <Text
                  style={{
                    color: theme.colorText,
                    fontFamily: theme.fontFamily,
                    fontSize: theme.fontSizeBase ?? "14px",
                    fontWeight: theme.fontWeightBold ?? "600",
                    margin: 0,
                    padding: "0",
                  }}
                >
                  {h}
                </Text>
              </Column>
            ))}
          </Row>
        </Section>
        {rows.map((row, ri) => {
          const isUp = row.direction === "up";
          return (
            <Section
              key={ri}
              style={{
                padding: `${theme.spacingBase ?? "16px"} ${theme.spacingBase ?? "16px"}`,
              }}
            >
              <Row>
                <Column style={{ width: cellWidth }}>
                  <Text
                    style={{
                      color: theme.colorText,
                      fontFamily: theme.fontFamily,
                      fontSize: theme.fontSizeBase ?? "14px",
                      margin: 0,
                      padding: "0",
                    }}
                  >
                    {row.name}
                  </Text>
                </Column>
                <Column style={{ width: cellWidth }}>
                  <Text
                    style={{
                      color: theme.colorText,
                      fontFamily: theme.fontFamily,
                      fontSize: theme.fontSizeBase ?? "14px",
                      margin: 0,
                      padding: "0",
                    }}
                  >
                    {row.value}
                  </Text>
                </Column>
                <Column style={{ width: cellWidth }}>
                  <Section
                    style={{
                      backgroundColor: theme.colorBackgroundMuted,
                      border: `1px solid ${isUp ? (theme.colorSuccess ?? "#10b981") : (theme.colorDanger ?? "#ef4444")}`,
                      borderRadius: theme.borderRadius,
                      padding: "2px 8px",
                    }}
                  >
                    <Row>
                      <Column>
                        <Text
                          style={{
                            color: isUp
                              ? (theme.colorSuccess ?? "#10b981")
                              : (theme.colorDanger ?? "#ef4444"),
                            fontFamily: theme.fontFamily,
                            fontSize: "10px",
                            fontWeight: theme.fontWeightMedium ?? "500",
                            margin: 0,
                            padding: "0",
                            textAlign: "center",
                          }}
                        >
                          {isUp ? "\u2191" : "\u2193"} {row.change}
                        </Text>
                      </Column>
                    </Row>
                  </Section>
                </Column>
              </Row>
            </Section>
          );
        })}
      </Row>
    </Section>
  );
};

export const DataTableChangeIndicator = ({
  theme = defaultTheme,
  headers = ["Metric", "Value", "Change"],
  rows = [
    { change: "+8.2%", direction: "up", name: "Revenue", value: "$12.5K" },
  ],
  variant = "default",
}: DataTableChangeIndicatorProps) => (
  <Html>
    <Head />
    <Preview>table-change</Preview>
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
          <DataTableChangeIndicatorSection
            headers={headers}
            rows={rows}
            theme={theme}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

DataTableChangeIndicator.PreviewProps = {
  headers: ["Metric", "Value", "Change"],
  rows: [
    { change: "+8.2%", direction: "up", name: "Revenue", value: "$12.5K" },
    { change: "-1.5%", direction: "down", name: "Churn", value: "3.1%" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableChangeIndicatorProps;
