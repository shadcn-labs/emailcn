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

export type FooterWith3ColMenuVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterWith3ColMenuProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  col1Heading?: string;
  col1Link1?: string;
  col1Link1Href?: string;
  col1Link2?: string;
  col1Link2Href?: string;
  col2Heading?: string;
  col2Link1?: string;
  col2Link1Href?: string;
  col2Link2?: string;
  col2Link2Href?: string;
  col3Heading?: string;
  col3Link1?: string;
  col3Link1Href?: string;
  col3Link2?: string;
  col3Link2Href?: string;
  variant?: FooterWith3ColMenuVariant;
}

export const FooterWith3ColMenu = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/100x25/3",
  logoAlt = "Logo",
  col1Heading = "Product",
  col1Link1 = "Features",
  col1Link1Href = "#",
  col1Link2 = "Pricing",
  col1Link2Href = "#",
  col2Heading = "Company",
  col2Link1 = "About",
  col2Link1Href = "#",
  col2Link2 = "Blog",
  col2Link2Href = "#",
  col3Heading = "Support",
  col3Link1 = "Docs",
  col3Link1Href = "#",
  col3Link2 = "Contact",
  col3Link2Href = "#",
  variant = "default",
}: FooterWith3ColMenuProps) => {
  const skew =
    variant === "slanted-left"
      ? "skewX(-10deg)"
      : variant === "slanted-right"
        ? "skewX(10deg)"
        : undefined;
  const unskew =
    variant === "slanted-left"
      ? "skewX(10deg)"
      : variant === "slanted-right"
        ? "skewX(-10deg)"
        : undefined;
  const columns = [
    {
      heading: col1Heading,
      links: [
        { href: col1Link1Href, label: col1Link1 },
        { href: col1Link2Href, label: col1Link2 },
      ],
    },
    {
      heading: col2Heading,
      links: [
        { href: col2Link1Href, label: col2Link1 },
        { href: col2Link2Href, label: col2Link2 },
      ],
    },
    {
      heading: col3Heading,
      links: [
        { href: col3Link1Href, label: col3Link1 },
        { href: col3Link2Href, label: col3Link2 },
      ],
    },
  ];
  return (
    <Html>
      <Head />
      <Preview>Footer</Preview>
      <Body
        style={{
          backgroundColor: theme.colorBackground,
          fontFamily: theme.fontFamily,
          margin: 0,
        }}
      >
        <Container style={{ margin: "0 auto", maxWidth: theme.containerWidth }}>
          <Section
            style={{
              backgroundColor: theme.colorBackground,
              padding: "32px 0",
              transform: skew,
            }}
          >
            <Section style={{ transform: unskew }}>
              <Section style={{ marginBottom: "24px", textAlign: "center" }}>
                <Img
                  src={logoSrc}
                  alt={logoAlt}
                  width="100"
                  height="25"
                  style={{
                    display: "block",
                    height: "auto",
                    margin: "0 auto",
                    objectFit: "contain",
                  }}
                />
              </Section>
              <Row>
                {columns.map((col) => (
                  <Column
                    key={col.heading}
                    style={{
                      textAlign: "center",
                      verticalAlign: "top",
                      width: "33.33%",
                    }}
                  >
                    <Text
                      style={{
                        color: theme.colorText,
                        fontSize: theme.fontSizeSm,
                        fontWeight: theme.fontWeightMedium,
                        margin: "0 0 12px",
                      }}
                    >
                      {col.heading}
                    </Text>
                    {col.links.map((link, i) => (
                      <Text
                        key={link.label}
                        style={{
                          color: theme.colorTextMuted,
                          fontSize: theme.fontSizeSm,
                          margin: i === col.links.length - 1 ? 0 : "0 0 8px",
                        }}
                      >
                        <a
                          href={link.href}
                          style={{
                            color: theme.colorTextMuted,
                            textDecoration: "none",
                          }}
                        >
                          {link.label}
                        </a>
                      </Text>
                    ))}
                  </Column>
                ))}
              </Row>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

FooterWith3ColMenu.PreviewProps = {
  col1Heading: "Product",
  col1Link1: "Features",
  col1Link1Href: "#",
  col1Link2: "Pricing",
  col1Link2Href: "#",
  col2Heading: "Company",
  col2Link1: "About",
  col2Link1Href: "#",
  col2Link2: "Blog",
  col2Link2Href: "#",
  col3Heading: "Support",
  col3Link1: "Docs",
  col3Link1Href: "#",
  col3Link2: "Contact",
  col3Link2Href: "#",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/100x25/4",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterWith3ColMenuProps;
