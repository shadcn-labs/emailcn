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

export type FooterWithSocialIconsAndAddressVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterWithSocialIconsAndAddressProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  address?: string;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  socialSrc4?: string;
  socialAlt4?: string;
  variant?: FooterWithSocialIconsAndAddressVariant;
}

export const FooterWithSocialIconsAndAddress = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/100x25/7",
  logoAlt = "Logo",
  address = "123 Main Street, San Francisco, CA 94102",
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-7&size=20",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-8&size=20",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-9&size=20",
  socialAlt3 = "Instagram",
  socialSrc4 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-10&size=20",
  socialAlt4 = "LinkedIn",
  variant = "default",
}: FooterWithSocialIconsAndAddressProps) => {
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
  const socials = [
    { alt: socialAlt1, src: socialSrc1 },
    { alt: socialAlt2, src: socialSrc2 },
    { alt: socialAlt3, src: socialSrc3 },
    { alt: socialAlt4, src: socialSrc4 },
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
            <Text
              style={{
                color: theme.colorTextMuted,
                fontSize: theme.fontSizeSm,
                margin: "0 0 16px",
                textAlign: "center",
              }}
            >
              {address}
            </Text>
            <Text style={{ margin: 0, textAlign: "center" }}>
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
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

FooterWithSocialIconsAndAddress.PreviewProps = {
  address: "123 Main Street, San Francisco, CA 94102",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/100x25/12",
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "Instagram",
  socialAlt4: "LinkedIn",
  socialSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-12&size=20",
  socialSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-13&size=20",
  socialSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-14&size=20",
  socialSrc4:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-footer-with-social-icons-and-address-tsx-15&size=20",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterWithSocialIconsAndAddressProps;
