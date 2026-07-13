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

export type SimpleFooterWithSocialIconsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SimpleFooterWithSocialIconsProps {
  theme?: EmailThemeTokens;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  variant?: SimpleFooterWithSocialIconsVariant;
}

export const SimpleFooterWithSocialIcons = ({
  theme = defaultTheme,
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-simple-footer-with-social-icons-tsx-4&size=20",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-simple-footer-with-social-icons-tsx-5&size=20",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-simple-footer-with-social-icons-tsx-6&size=20",
  socialAlt3 = "LinkedIn",
  variant = "default",
}: SimpleFooterWithSocialIconsProps) => {
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
                    margin: "0 12px",
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

SimpleFooterWithSocialIcons.PreviewProps = {
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "LinkedIn",
  socialSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-simple-footer-with-social-icons-tsx-7&size=20",
  socialSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-simple-footer-with-social-icons-tsx-8&size=20",
  socialSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-footers-simple-footer-with-social-icons-tsx-9&size=20",
  theme: defaultTheme,
  variant: "default",
} satisfies SimpleFooterWithSocialIconsProps;
