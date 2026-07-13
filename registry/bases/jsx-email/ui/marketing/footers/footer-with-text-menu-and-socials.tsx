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

export type FooterWithTextMenuAndSocialsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterWithTextMenuAndSocialsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  text?: string;
  link1?: string;
  link1Href?: string;
  link2?: string;
  link2Href?: string;
  link3?: string;
  link3Href?: string;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  variant?: FooterWithTextMenuAndSocialsVariant;
}

export const FooterWithTextMenuAndSocials = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/100x25/6",
  logoAlt = "Logo",
  text = "© 2024 Acme Inc. All rights reserved.",
  link1 = "Privacy",
  link1Href = "#",
  link2 = "Terms",
  link2Href = "#",
  link3 = "Contact",
  link3Href = "#",
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-with-text-menu-and-socials-tsx-6&size=20",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-with-text-menu-and-socials-tsx-7&size=20",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-with-text-menu-and-socials-tsx-8&size=20",
  socialAlt3 = "LinkedIn",
  variant = "default",
}: FooterWithTextMenuAndSocialsProps) => {
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
              width="100"
              height="25"
              style={{
                height: "auto",
                margin: "0 auto 16px",
                objectFit: "contain",
              }}
            />
            <Text style={{ margin: "0 0 16px", textAlign: "center" }}>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: theme.colorTextMuted,
                    fontSize: theme.fontSizeSm,
                    margin: "0 8px",
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
              {text}
            </Text>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

FooterWithTextMenuAndSocials.PreviewProps = {
  link1: "Privacy",
  link1Href: "#",
  link2: "Terms",
  link2Href: "#",
  link3: "Contact",
  link3Href: "#",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/100x25/10",
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "LinkedIn",
  socialSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-with-text-menu-and-socials-tsx-10&size=20",
  socialSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-with-text-menu-and-socials-tsx-11&size=20",
  socialSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-with-text-menu-and-socials-tsx-12&size=20",
  text: "© 2024 Acme Inc. All rights reserved.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterWithTextMenuAndSocialsProps;
