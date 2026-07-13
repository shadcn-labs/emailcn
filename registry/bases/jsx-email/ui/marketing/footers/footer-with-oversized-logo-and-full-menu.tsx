/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FooterWithOversizedLogoAndFullMenuVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterWithOversizedLogoAndFullMenuProps {
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
  variant?: FooterWithOversizedLogoAndFullMenuVariant;
}

export const FooterWithOversizedLogoAndFullMenu = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/160x40/3",
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
}: FooterWithOversizedLogoAndFullMenuProps) => {
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
        <Section
          style={{
            backgroundColor: theme.colorBackground,
            padding: "32px 0",
            transform: skew,
          }}
        >
          <Container
            style={{
              margin: "0 auto",
              maxWidth: theme.containerWidth,
              textAlign: "center",
              transform: unskew,
            }}
          >
            <Img
              src={logoSrc}
              alt={logoAlt}
              width="160"
              height="40"
              style={{
                height: "auto",
                margin: "0 auto 24px",
                objectFit: "contain",
              }}
            />
            <Text style={{ margin: "0 0 24px", textAlign: "center" }}>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: theme.colorTextMuted,
                    fontSize: theme.fontSizeSm,
                    margin: "0 12px",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </Text>
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
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

FooterWithOversizedLogoAndFullMenu.PreviewProps = {
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
  logoSrc: "https://static.photos/business/160x40/6",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterWithOversizedLogoAndFullMenuProps;
