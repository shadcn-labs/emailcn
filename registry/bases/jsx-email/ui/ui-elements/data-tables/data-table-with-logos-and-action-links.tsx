/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export interface DataTableLogosActionsProps {
  theme?: EmailThemeTokens;
  headers?: string[];
  rows?: {
    logoUrl?: string;
    name: string;
    actionLabel?: string;
    actionHref?: string;
  }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DataTableLogosActionsSection = ({
  headers,
  rows,
  theme,
}: {
  headers: string[];
  rows: NonNullable<DataTableLogosActionsProps["rows"]>;
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
                {row.logoUrl ? (
                  <Img
                    alt={row.name}
                    height={24}
                    src={row.logoUrl}
                    width={24}
                    style={{
                      borderRadius: "999px",
                      display: "block",
                      margin: "0 auto",
                      maxWidth: "100%",
                    }}
                  />
                ) : (
                  <Text
                    style={{
                      fontFamily: theme.fontFamily,
                      fontSize: "14px",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: theme.colorPrimary,
                        borderRadius: "999px",
                        color: theme.colorPrimaryForeground ?? "#ffffff",
                        display: "inline-block",
                        height: 24,
                        lineHeight: "24px",
                        textAlign: "center",
                        width: 24,
                      }}
                    >
                      {row.name.charAt(0)}
                    </span>
                  </Text>
                )}
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
                  {row.name}
                </Text>
              </Column>
              <Column style={{ width: cellWidth }}>
                {row.actionLabel && row.actionHref ? (
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
                      href={row.actionHref}
                      style={{
                        color: theme.colorPrimary,
                        fontFamily: theme.fontFamily,
                        textDecoration: "underline",
                      }}
                    >
                      {row.actionLabel}
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

export const DataTableLogosActions = ({
  theme = defaultTheme,
  headers = ["", "App", ""],
  rows = [{ actionHref: "#", actionLabel: "Configure", name: "Slack" }],
  variant = "default",
}: DataTableLogosActionsProps) => (
  <Html>
    <Head />
    <Preview>table-logos</Preview>
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
          <DataTableLogosActionsSection
            headers={headers}
            rows={rows}
            theme={theme}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

DataTableLogosActions.PreviewProps = {
  headers: ["", "Integration", ""],
  rows: [
    {
      actionHref: "#",
      actionLabel: "Configure",
      logoUrl: "https://static.photos/business/320x80/2",
      name: "Slack",
    },
    {
      actionHref: "#",
      actionLabel: "Connect",
      logoUrl: "https://static.photos/business/320x80/3",
      name: "Notion",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableLogosActionsProps;
