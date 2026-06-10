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

export interface DataTableEditButtonProps {
  theme?: EmailThemeTokens;
  headers?: string[];
  rows?: { name: string; role: string; editHref?: string }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DataTableEditButtonSection = ({
  headers,
  rows,
  theme,
}: {
  headers: string[];
  rows: NonNullable<DataTableEditButtonProps["rows"]>;
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
                <Text
                  style={{
                    color: theme.colorText,
                    fontFamily: theme.fontFamily,
                    fontSize: theme.fontSizeBase ?? "14px",
                    margin: 0,
                    padding: "0",
                  }}
                >
                  {row.role}
                </Text>
              </Column>
              <Column style={{ width: cellWidth }}>
                {row.editHref ? (
                  <Text
                    style={{
                      color: theme.colorTextMuted,
                      fontFamily: theme.fontFamily,
                      fontSize: theme.fontSizeSm ?? "12px",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    <a
                      href={row.editHref}
                      style={{
                        color: theme.colorPrimary,
                        fontFamily: theme.fontFamily,
                        textDecoration: "underline",
                      }}
                    >
                      Edit
                    </a>
                  </Text>
                ) : null}
              </Column>
            </Row>
          </Section>
        ))}
      </Row>
    </Section>
  );
};

export const DataTableEditButton = ({
  theme = defaultTheme,
  headers = ["Name", "Role", ""],
  rows = [{ editHref: "#", name: "Alice", role: "Admin" }],
  variant = "default",
}: DataTableEditButtonProps) => (
  <Html>
    <Head />
    <Preview>table-edit</Preview>
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
          <DataTableEditButtonSection
            headers={headers}
            rows={rows}
            theme={theme}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

DataTableEditButton.PreviewProps = {
  headers: ["User", "Dept", ""],
  rows: [
    { editHref: "#", name: "Alice Johnson", role: "Engineering" },
    { editHref: "#", name: "Bob Smith", role: "Marketing" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableEditButtonProps;
