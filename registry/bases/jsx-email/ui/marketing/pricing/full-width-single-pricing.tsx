/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Container, Head, Html, Preview, Section, Text } from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FullWidthSinglePricingVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FullWidthSinglePricingProps {
  theme?: EmailThemeTokens;
  heading?: string;
  price?: string;
  period?: string;
  description?: string;
  feature1?: string;
  feature2?: string;
  feature3?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: FullWidthSinglePricingVariant;
}

export const FullWidthSinglePricing = ({
  theme = defaultTheme,
  heading = "Pro Plan",
  price = "$29",
  period = "/month",
  description = "Everything you need to grow.",
  feature1 = "Unlimited emails",
  feature2 = "Custom templates",
  feature3 = "Priority support",
  ctaLabel = "Subscribe",
  ctaHref = "#",
  variant = "default",
}: FullWidthSinglePricingProps) => {
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
  const features = [feature1, feature2, feature3];
  const featureStyle = {
    color: theme.colorText,
    fontSize: theme.fontSizeSm,
    margin: "0 0 8px",
    textAlign: "center" as const,
  };
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
            padding: "64px 0",
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
            <Section
              style={{
                border: `1px solid ${theme.colorBorder}`,
                borderRadius: theme.borderRadiusLg ?? theme.borderRadius,
                padding: "32px",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  color: theme.colorText,
                  fontSize: theme.fontSizeXl,
                  fontWeight: theme.fontWeightBold,
                  margin: "0 0 16px",
                  textAlign: "center",
                }}
              >
                {heading}
              </Text>
              <Text
                style={{
                  color: theme.colorText,
                  fontSize: theme.fontSizeXl,
                  fontWeight: theme.fontWeightBold,
                  margin: "0 0 8px",
                  textAlign: "center",
                }}
              >
                {price}
              </Text>
              <Text
                style={{
                  color: theme.colorTextMuted,
                  fontSize: theme.fontSizeBase,
                  margin: "0 0 16px",
                  textAlign: "center",
                }}
              >
                {period}
              </Text>
              <Text
                style={{
                  color: theme.colorTextMuted,
                  fontSize: theme.fontSizeSm,
                  margin: "0 0 24px",
                  textAlign: "center",
                }}
              >
                {description}
              </Text>
              {features.map((feature) => (
                <Text key={feature} style={featureStyle}>
                  &bull; {feature}
                </Text>
              ))}
              {ctaLabel && ctaHref ? (
                <a
                  href={ctaHref}
                  style={{
                    backgroundColor: theme.colorPrimary,
                    borderRadius: theme.borderRadius,
                    color: theme.colorPrimaryForeground ?? "#ffffff",
                    display: "inline-block",
                    fontSize: theme.fontSizeBase,
                    fontWeight: theme.fontWeightMedium,
                    marginTop: "16px",
                    padding: "12px 32px",
                    textDecoration: "none",
                  }}
                >
                  {ctaLabel}
                </a>
              ) : null}
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

FullWidthSinglePricing.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Subscribe",
  description: "Everything you need to grow.",
  feature1: "Unlimited emails",
  feature2: "Custom templates",
  feature3: "Priority support",
  heading: "Pro Plan",
  period: "/month",
  price: "$29",
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthSinglePricingProps;
