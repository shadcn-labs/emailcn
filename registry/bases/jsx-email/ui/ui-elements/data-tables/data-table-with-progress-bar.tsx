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

export interface DataTableWithProgressProps {
  theme?: EmailThemeTokens;
  headers?: string[];
  rows?: { label: string; progress: number; value: string }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DataTableWithProgressSection = ({
  headers,
  rows,
  theme,
}: {
  headers: string[];
  rows: NonNullable<DataTableWithProgressProps["rows"]>;
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
        {rows.map((row, ri) => (
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
                  {row.label}
                </Text>
              </Column>
              <Column style={{ width: cellWidth }}>
                <Section
                  style={{
                    backgroundColor: theme.colorBackgroundSubtle ?? "#f3f4f6",
                    borderRadius: theme.borderRadius,
                    padding: "0",
                  }}
                >
                  <Row>
                    {row.progress > 0 ? (
                      <Column
                        style={{
                          backgroundColor: theme.colorPrimary,
                          borderRadius: theme.borderRadius,
                          padding: "4px 0",
                          width: `${row.progress}%`,
                        }}
                      >
                        <Text
                          style={{
                            color: theme.colorPrimaryForeground,
                            fontFamily: theme.fontFamily,
                            fontSize: "10px",
                            fontWeight: theme.fontWeightBold ?? "600",
                            margin: 0,
                            padding: "0",
                            textAlign: "center",
                          }}
                        >
                          {row.progress}%
                        </Text>
                      </Column>
                    ) : null}
                    {row.progress < 100 ? (
                      <Column
                        style={{
                          padding: "0",
                          width: `${100 - row.progress}%`,
                        }}
                      ></Column>
                    ) : null}
                  </Row>
                </Section>
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
            </Row>
          </Section>
        ))}
      </Row>
    </Section>
  );
};

export const DataTableWithProgress = ({
  theme = defaultTheme,
  headers = ["Item", "Progress", "Value"],
  rows = [{ label: "Task 1", progress: 75, value: "$1.TwoK" }],
  variant = "default",
}: DataTableWithProgressProps) => (
  <Html>
    <Head />
    <Preview>table-progress</Preview>
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
          <DataTableWithProgressSection
            headers={headers}
            rows={rows}
            theme={theme}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

DataTableWithProgress.PreviewProps = {
  headers: ["Project", "Progress", "Budget"],
  rows: [
    { label: "Web Redesign", progress: 90, value: "$1TwoK" },
    { label: "Mobile App", progress: 60, value: "$8.5K" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableWithProgressProps;
