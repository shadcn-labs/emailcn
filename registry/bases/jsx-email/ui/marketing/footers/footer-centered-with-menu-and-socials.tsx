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

export type FooterCenteredWithMenuAndSocialsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterCenteredWithMenuAndSocialsProps {
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
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  copyright?: string;
  variant?: FooterCenteredWithMenuAndSocialsVariant;
}

export const FooterCenteredWithMenuAndSocials = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/100x25/6",
  logoAlt = "Logo",
  link1 = "Features",
  link1Href = "#",
  link2 = "Pricing",
  link2Href = "#",
  link3 = "About",
  link3Href = "#",
  link4 = "Contact",
  link4Href = "#",
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-centered-with-menu-and-socials-tsx-6&size=20",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-centered-with-menu-and-socials-tsx-7&size=20",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-centered-with-menu-and-socials-tsx-8&size=20",
  socialAlt3 = "LinkedIn",
  copyright = "© 2024 Acme Inc.",
  variant = "default",
}: FooterCenteredWithMenuAndSocialsProps) => {
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
  ];
  const socials = [
    { alt: socialAlt1, src: socialSrc1 },
    { alt: socialAlt2, src: socialSrc2 },
    { alt: socialAlt3, src: socialSrc3 },
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
                width="100"
                height="25"
                style={{
                  display: "block",
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
              <Text style={{ margin: "0 0 16px", textAlign: "center" }}>
                {socials.map((social) => (
                  <Img
                    key={social.alt}
                    src={social.src}
                    alt={social.alt}
                    width="20"
                    height="20"
                    style={{
                      display: "inline-block",
                      height: "auto",
                      margin: "0 8px",
                      objectFit: "contain",
                    }}
                  />
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
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

FooterCenteredWithMenuAndSocials.PreviewProps = {
  copyright: "© 2024 Acme Inc.",
  link1: "Features",
  link1Href: "#",
  link2: "Pricing",
  link2Href: "#",
  link3: "About",
  link3Href: "#",
  link4: "Contact",
  link4Href: "#",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/100x25/10",
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "LinkedIn",
  socialSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-centered-with-menu-and-socials-tsx-10&size=20",
  socialSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-centered-with-menu-and-socials-tsx-11&size=20",
  socialSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-centered-with-menu-and-socials-tsx-12&size=20",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterCenteredWithMenuAndSocialsProps;
