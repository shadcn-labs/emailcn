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

export interface DataTableBasicProps {
  theme?: EmailThemeTokens;
  headers?: string[];
  rows?: string[][];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DataTableBasicSection = ({
  headers,
  rows,
  theme,
}: {
  headers: string[];
  rows: string[][];
  theme: EmailThemeTokens;
}) => {
  const cellWidth = headers.length > 0 ? `${100 / headers.length}%` : "100%";
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
              {headers.map((_, ci) => (
                <Column key={ci} style={{ width: cellWidth }}>
                  <Text
                    style={{
                      color: theme.colorText,
                      fontFamily: theme.fontFamily,
                      fontSize: theme.fontSizeBase ?? "14px",
                      margin: 0,
                      padding: "0",
                    }}
                  >
                    {row[ci] ?? ""}
                  </Text>
                </Column>
              ))}
            </Row>
          </Section>
        ))}
      </Row>
    </Section>
  );
};

export const DataTableBasic = ({
  theme = defaultTheme,
  headers = ["Name", "Status"],
  rows = [["Alice", "Active"]],
  variant = "default",
}: DataTableBasicProps) => (
  <Html>
    <Head />
    <Preview>data-table</Preview>
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
          <DataTableBasicSection headers={headers} rows={rows} theme={theme} />
        </Section>
      </Container>
    </Body>
  </Html>
);

DataTableBasic.PreviewProps = {
  headers: ["Product", "Price", "Qty"],
  rows: [
    ["Widget A", "$29", "2"],
    ["Widget B", "$49", "1"],
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableBasicProps;
