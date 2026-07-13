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

export type HeaderWithLogoAndSocialIconsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithLogoAndSocialIconsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  variant?: HeaderWithLogoAndSocialIconsVariant;
}

export const HeaderWithLogoAndSocialIcons = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/6",
  logoAlt = "Logo",
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-headers-header-with-logo-and-social-icons-tsx-6&size=24",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-headers-header-with-logo-and-social-icons-tsx-7&size=24",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-headers-header-with-logo-and-social-icons-tsx-8&size=24",
  socialAlt3 = "LinkedIn",
  variant = "default",
}: HeaderWithLogoAndSocialIconsProps) => {
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
  ];
  return (
    <Html>
      <Head />
      <Preview>Header</Preview>
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
            padding: "24px 0",
            transform: skew,
          }}
        >
          <Container
            style={{
              margin: "0 auto",
              maxWidth: theme.containerWidth,
              transform: unskew,
            }}
          >
            <Row>
              <Column style={{ verticalAlign: "middle", width: "50%" }}>
                <Img
                  src={logoSrc}
                  alt={logoAlt}
                  width="120"
                  height="30"
                  style={{ height: "auto", objectFit: "contain" }}
                />
              </Column>
              <Column
                style={{
                  textAlign: "right",
                  verticalAlign: "middle",
                  width: "50%",
                }}
              >
                {socials.map((social) => (
                  <Img
                    key={social.alt}
                    src={social.src}
                    alt={social.alt}
                    width="24"
                    height="24"
                    style={{
                      display: "inline-block",
                      height: "auto",
                      marginLeft: "12px",
                      objectFit: "contain",
                    }}
                  />
                ))}
              </Column>
            </Row>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

HeaderWithLogoAndSocialIcons.PreviewProps = {
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/10",
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "LinkedIn",
  socialSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-headers-header-with-logo-and-social-icons-tsx-10&size=24",
  socialSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-headers-header-with-logo-and-social-icons-tsx-11&size=24",
  socialSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-headers-header-with-logo-and-social-icons-tsx-12&size=24",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderWithLogoAndSocialIconsProps;
