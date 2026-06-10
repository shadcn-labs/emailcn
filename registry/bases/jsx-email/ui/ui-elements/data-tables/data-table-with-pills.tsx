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

export interface DataTableWithPillsProps {
  theme?: EmailThemeTokens;
  headers?: string[];
  rows?: { name: string; status: string; statusVariant: string }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const pillStatusColor = (v: string, theme: EmailThemeTokens) => {
  switch (v) {
    case "active": {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorSuccess ?? "#10b981",
        text: theme.colorSuccess ?? "#10b981",
      };
    }
    case "pending": {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorWarning ?? "#f59e0b",
        text: theme.colorWarning ?? "#f59e0b",
      };
    }
    case "cancelled": {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorDanger ?? "#ef4444",
        text: theme.colorDanger ?? "#ef4444",
      };
    }
    default: {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorBorder ?? "#e5e7eb",
        text: theme.colorTextMuted,
      };
    }
  }
};

const DataTableWithPillsSection = ({
  headers,
  rows,
  theme,
}: {
  headers: string[];
  rows: NonNullable<DataTableWithPillsProps["rows"]>;
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
                  {row.name}
                </Text>
              </Column>
              <Column style={{ width: cellWidth }}>
                <Section
                  style={{
                    backgroundColor: pillStatusColor(row.statusVariant, theme)
                      .bg,
                    border: `1px solid ${pillStatusColor(row.statusVariant, theme).border}`,
                    borderRadius: theme.borderRadius,
                    padding: "2px 8px",
                  }}
                >
                  <Row>
                    <Column>
                      <Text
                        style={{
                          color: pillStatusColor(row.statusVariant, theme).text,
                          fontFamily: theme.fontFamily,
                          fontSize: "10px",
                          fontWeight: theme.fontWeightMedium ?? "500",
                          margin: 0,
                          padding: "0",
                          textAlign: "center",
                        }}
                      >
                        {row.status}
                      </Text>
                    </Column>
                  </Row>
                </Section>
              </Column>
            </Row>
          </Section>
        ))}
      </Row>
    </Section>
  );
};

export const DataTableWithPills = ({
  theme = defaultTheme,
  headers = ["Name", "Status"],
  rows = [{ name: "Alice", status: "Active", statusVariant: "active" }],
  variant = "default",
}: DataTableWithPillsProps) => (
  <Html>
    <Head />
    <Preview>table-pills</Preview>
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
          <DataTableWithPillsSection
            headers={headers}
            rows={rows}
            theme={theme}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

DataTableWithPills.PreviewProps = {
  headers: ["User", "Status"],
  rows: [
    { name: "Alice", status: "Active", statusVariant: "active" },
    { name: "Bob", status: "Pending", statusVariant: "pending" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableWithPillsProps;
