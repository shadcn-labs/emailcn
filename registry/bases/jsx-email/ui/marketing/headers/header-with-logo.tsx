/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Container, Head, Html, Img, Preview, Section } from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type HeaderLogoWithLinksVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderLogoWithLinksProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  variant?: HeaderLogoWithLinksVariant;
}

export const HeaderLogoWithLinks = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/3",
  logoAlt = "Logo",
  variant = "default",
}: HeaderLogoWithLinksProps) => {
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
              textAlign: "center",
              transform: unskew,
            }}
          >
            <Img
              src={logoSrc}
              alt={logoAlt}
              width="120"
              height="30"
              style={{
                height: "auto",
                margin: "0 auto",
                objectFit: "contain",
              }}
            />
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

HeaderLogoWithLinks.PreviewProps = {
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/4",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderLogoWithLinksProps;
