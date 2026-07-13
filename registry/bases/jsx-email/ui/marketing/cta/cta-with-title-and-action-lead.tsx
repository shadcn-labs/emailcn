/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Container, Head, Html, Preview, Section, Text } from "jsx-email";
import type { CSSProperties } from "react";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type CTAWithTitleAndActionLeadVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CTAWithTitleAndActionLeadProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: CTAWithTitleAndActionLeadVariant;
}

const skewStyle = (
  variant: CTAWithTitleAndActionLeadVariant
): CSSProperties => {
  switch (variant) {
    case "slanted-left": {
      return { transform: "skewX(-10deg)" };
    }
    case "slanted-right": {
      return { transform: "skewX(10deg)" };
    }
    default: {
      return {};
    }
  }
};

const unskewStyle = (
  variant: CTAWithTitleAndActionLeadVariant
): CSSProperties => {
  switch (variant) {
    case "slanted-left": {
      return { transform: "skewX(10deg)" };
    }
    case "slanted-right": {
      return { transform: "skewX(-10deg)" };
    }
    default: {
      return {};
    }
  }
};

export const CTAWithTitleAndActionLead = ({
  theme = defaultTheme,
  heading = "Ready to get started?",
  subtext = "Join thousands of happy users.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "default",
}: CTAWithTitleAndActionLeadProps) => (
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
      <Container style={{ margin: "0 auto", maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "64px 0", ...skewStyle(variant) }}>
          <Section style={{ textAlign: "center", ...unskewStyle(variant) }}>
            <Text
              style={{
                color: theme.colorText,
                fontSize: theme.fontSizeHeading,
                fontWeight: theme.fontWeightBold,
                lineHeight: 1.375,
                margin: 0,
              }}
            >
              {heading}
            </Text>
            <Text
              style={{
                color: theme.colorTextMuted,
                fontSize: theme.fontSizeLg,
                margin: "16px 0 32px",
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
                  color: theme.colorPrimaryForeground,
                  display: "inline-block",
                  fontSize: theme.fontSizeBase,
                  fontWeight: theme.fontWeightMedium,
                  padding: "12px 32px",
                  textDecoration: "none",
                }}
              >
                {ctaLabel}
              </a>
            ) : null}
          </Section>
        </Section>
      </Container>
    </Body>
  </Html>
);

CTAWithTitleAndActionLead.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Get Started Free",
  heading: "Ready to get started?",
  subtext: "Join 10,000+ developers building with our tools.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAWithTitleAndActionLeadProps;
