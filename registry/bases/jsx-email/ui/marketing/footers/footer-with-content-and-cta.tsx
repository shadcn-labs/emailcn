/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Container, Head, Html, Preview, Section, Text } from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FooterWithContentAndCtaVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterWithContentAndCtaProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: FooterWithContentAndCtaVariant;
}

export const FooterWithContentAndCta = ({
  theme = defaultTheme,
  heading = "Stay in touch",
  subtext = "Subscribe to our newsletter.",
  ctaLabel = "Subscribe",
  ctaHref = "#",
  variant = "default",
}: FooterWithContentAndCtaProps) => {
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
      <Preview>{heading}</Preview>
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
            <Text
              style={{
                color: theme.colorText,
                fontSize: theme.fontSizeLg,
                fontWeight: theme.fontWeightMedium,
                margin: "0 0 8px",
                textAlign: "center",
              }}
            >
              {heading}
            </Text>
            <Text
              style={{
                color: theme.colorTextMuted,
                fontSize: theme.fontSizeSm,
                margin: "0 0 24px",
                textAlign: "center",
              }}
            >
              {subtext}
            </Text>
            {ctaLabel && ctaHref ? (
              <a
                href={ctaHref}
                style={{
                  backgroundColor: theme.colorPrimary,
                  borderRadius: theme.borderRadius,
                  color: theme.colorPrimaryForeground ?? "#ffffff",
                  display: "inline-block",
                  fontSize: theme.fontSizeSm,
                  fontWeight: theme.fontWeightMedium,
                  padding: "8px 24px",
                  textDecoration: "none",
                }}
              >
                {ctaLabel}
              </a>
            ) : null}
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

FooterWithContentAndCta.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Subscribe",
  heading: "Stay in touch",
  subtext: "Subscribe to our newsletter.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterWithContentAndCtaProps;
