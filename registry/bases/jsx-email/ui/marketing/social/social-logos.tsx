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
} from "jsx-email";
import type { CSSProperties } from "react";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type SocialLogosVariant = "default" | "slanted-left" | "slanted-right";

export type SocialLogosTile =
  | "square"
  | "circle"
  | "pill"
  | "squared-box"
  | "outlined-box"
  | "outlined-pill"
  | "outlined-square";

export interface SocialLogosProps {
  theme?: EmailThemeTokens;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  socialSrc4?: string;
  socialAlt4?: string;
  variant?: SocialLogosVariant;
  tile?: SocialLogosTile;
}

const tileStyle = (
  theme: EmailThemeTokens,
  tile: SocialLogosTile
): CSSProperties => {
  const base: CSSProperties = {
    display: "inline-block",
    padding: tile === "pill" || tile === "outlined-pill" ? "12px 16px" : "12px",
  };
  const radius =
    tile === "circle" || tile === "pill" || tile === "outlined-pill"
      ? "9999px"
      : tile === "squared-box"
        ? "4px"
        : tile === "outlined-box"
          ? "0"
          : "8px";
  const outlined =
    tile === "outlined-box" ||
    tile === "outlined-pill" ||
    tile === "outlined-square";
  return outlined
    ? {
        ...base,
        border: `1px solid ${theme.colorBorder}`,
        borderRadius: radius,
      }
    : {
        ...base,
        backgroundColor: theme.colorBackgroundMuted,
        borderRadius: radius,
      };
};

export const SocialLogosSection = ({
  theme = defaultTheme,
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-social-social-logos-tsx-1&size=24",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-social-social-logos-tsx-2&size=24",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-social-social-logos-tsx-3&size=24",
  socialAlt3 = "Instagram",
  socialSrc4 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-social-social-logos-tsx-4&size=24",
  socialAlt4 = "LinkedIn",
  variant = "default",
  tile = "square",
}: SocialLogosProps & { theme?: EmailThemeTokens }) => {
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
          transform: unskew,
        }}
      >
        <Row>
          {socials.map((social) => (
            <Column
              key={social.alt}
              style={{
                padding: "0 12px",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              <span style={tileStyle(theme, tile)}>
                <Img
                  src={social.src}
                  alt={social.alt}
                  width="24"
                  height="24"
                  style={{ height: "auto", objectFit: "contain" }}
                />
              </span>
            </Column>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export const SocialLogos = ({
  theme = defaultTheme,
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-social-social-logos-tsx-5&size=24",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-social-social-logos-tsx-6&size=24",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-social-social-logos-tsx-7&size=24",
  socialAlt3 = "Instagram",
  socialSrc4 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-social-social-logos-tsx-8&size=24",
  socialAlt4 = "LinkedIn",
  variant = "default",
  tile = "square",
}: SocialLogosProps) => (
  <Html>
    <Head />
    <Preview>Social</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        fontFamily: theme.fontFamily,
        margin: 0,
      }}
    >
      <SocialLogosSection
        socialAlt1={socialAlt1}
        socialAlt2={socialAlt2}
        socialAlt3={socialAlt3}
        socialAlt4={socialAlt4}
        socialSrc1={socialSrc1}
        socialSrc2={socialSrc2}
        socialSrc3={socialSrc3}
        socialSrc4={socialSrc4}
        theme={theme}
        tile={tile}
        variant={variant}
      />
    </Body>
  </Html>
);

SocialLogos.PreviewProps = {
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "Instagram",
  socialAlt4: "LinkedIn",
  socialSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-social-social-logos-tsx-9&size=24",
  socialSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-social-social-logos-tsx-10&size=24",
  socialSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-social-social-logos-tsx-11&size=24",
  socialSrc4:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-social-social-logos-tsx-12&size=24",
  theme: defaultTheme,
  tile: "square",
  variant: "default",
} satisfies SocialLogosProps;
