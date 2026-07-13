/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FooterCenteredWithBorderedFullMenuVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterCenteredWithBorderedFullMenuProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  link1?: string;
  link1Href?: string;
  link2?: string;
  link2Href?: string;
  link3?: string;
  link3Href?: string;
  link4?: string;
  link4Href?: string;
  link5?: string;
  link5Href?: string;
  copyright?: string;
  variant?: FooterCenteredWithBorderedFullMenuVariant;
}

export const FooterCenteredWithBorderedFullMenu = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/3",
  logoAlt = "Logo",
  link1 = "Features",
  link1Href = "#",
  link2 = "Pricing",
  link2Href = "#",
  link3 = "About",
  link3Href = "#",
  link4 = "Blog",
  link4Href = "#",
  link5 = "Contact",
  link5Href = "#",
  copyright = "© 2024 Acme Inc.",
  variant = "default",
}: FooterCenteredWithBorderedFullMenuProps) => {
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
  const links = [
    { href: link1Href, label: link1 },
    { href: link2Href, label: link2 },
    { href: link3Href, label: link3 },
    { href: link4Href, label: link4 },
    { href: link5Href, label: link5 },
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
            <Section style={{ textAlign: "center", transform: unskew }}>
              <Img
                src={logoSrc}
                alt={logoAlt}
                width="120"
                height="30"
                style={{
                  display: "block",
                  height: "auto",
                  margin: "0 auto 24px",
                  objectFit: "contain",
                }}
              />
              <Hr
                style={{ borderColor: theme.colorBorder, margin: "0 0 24px" }}
              />
              <Text style={{ margin: "0 0 24px", textAlign: "center" }}>
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      color: theme.colorTextMuted,
                      fontSize: theme.fontSizeSm,
                      margin: "0 16px",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </Text>
              <Hr
                style={{ borderColor: theme.colorBorder, margin: "0 0 24px" }}
              />
              <Text
                style={{
                  color: theme.colorTextSubtle,
                  fontSize: theme.fontSizeSm,
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {copyright}
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

FooterCenteredWithBorderedFullMenu.PreviewProps = {
  copyright: "© 2024 Acme Inc.",
  link1: "Features",
  link1Href: "#",
  link2: "Pricing",
  link2Href: "#",
  link3: "About",
  link3Href: "#",
  link4: "Blog",
  link4Href: "#",
  link5: "Contact",
  link5Href: "#",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/4",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterCenteredWithBorderedFullMenuProps;
