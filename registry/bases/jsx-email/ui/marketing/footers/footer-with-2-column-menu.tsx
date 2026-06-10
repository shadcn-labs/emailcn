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

export type FooterColumnsVariant = "default" | "slanted-left" | "slanted-right";

export interface FooterColumnsProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  columns?: { heading: string; links: { label: string; href: string }[] }[];
  variant?: FooterColumnsVariant;
}

const FooterColumnsSection = ({
  columns,
  companyName,
  theme,
  variant,
}: {
  columns: FooterColumnsProps["columns"];
  companyName: string;
  theme: EmailThemeTokens;
  variant: FooterColumnsVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0 ${theme.spacingBase ?? "24px"} 0`,
    }}
  >
    <Row>
      {(columns ?? []).slice(0, 3).map((col, i) => (
        <Column
          key={col.heading + i}
          style={{
            padding: theme.spacingBase ?? "24px",
            verticalAlign: "top",
            width: `${100 / Math.min((columns ?? []).length, 3)}%`,
          }}
        >
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "12px",
              fontWeight: theme.fontWeightMedium,
              margin: 0,
              paddingBottom: theme.spacingBase ?? "8px",
            }}
          >
            {col.heading}
          </Text>
          {col.links.map((link) => (
            <Text
              key={link.label}
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeSm ?? "11px",
                margin: 0,
                paddingBottom: theme.spacingBase ?? "4px",
              }}
            >
              {link.label}
            </Text>
          ))}
        </Column>
      ))}
      <Column>
        <Text
          style={{
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeSm ?? "11px",
            margin: 0,
            textAlign: "center",
          }}
        >
          &copy; {new Date().getFullYear()} {companyName}
        </Text>
      </Column>
    </Row>
  </Section>
);

export const FooterWith2ColumnMenu = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  columns = [
    {
      heading: "Product",
      links: [
        { href: "#", label: "Features" },
        { href: "#", label: "Pricing" },
      ],
    },
    {
      heading: "Company",
      links: [
        { href: "#", label: "About" },
        { href: "#", label: "Blog" },
      ],
    },
    {
      heading: "Support",
      links: [
        { href: "#", label: "Docs" },
        { href: "#", label: "Contact" },
      ],
    },
  ],
  variant = "default",
}: FooterColumnsProps) => (
  <Html>
    <Head />
    <Preview>footer columns</Preview>
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
          <FooterColumnsSection
            columns={columns}
            companyName={companyName}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
FooterWith2ColumnMenu.PreviewProps = {
  columns: [
    {
      heading: "Product",
      links: [
        { href: "#", label: "Features" },
        { href: "#", label: "Pricing" },
      ],
    },
    {
      heading: "Company",
      links: [
        { href: "#", label: "About" },
        { href: "#", label: "Blog" },
      ],
    },
    { heading: "Support", links: [{ href: "#", label: "Contact" }] },
  ],
  companyName: "Acme Inc.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterColumnsProps;
