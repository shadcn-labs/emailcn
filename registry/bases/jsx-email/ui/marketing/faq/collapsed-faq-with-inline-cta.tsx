/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Container, Head, Html, Preview, Section, Text } from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type CollapsedFaqWithInlineCtaVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CollapsedFaqWithInlineCtaProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  q2?: string;
  q3?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaText?: string;
  variant?: CollapsedFaqWithInlineCtaVariant;
}

export const CollapsedFaqWithInlineCta = ({
  theme = defaultTheme,
  heading = "FAQ",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
  ctaLabel = "Contact Us",
  ctaHref = "#",
  ctaText = "Still have questions?",
  variant = "default",
}: CollapsedFaqWithInlineCtaProps) => {
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
  const questions = [q1, q2, q3];
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
              textAlign: "center",
              transform: unskew,
            }}
          >
            {heading ? (
              <Text
                style={{
                  color: theme.colorText,
                  fontSize: theme.fontSizeHeading,
                  fontWeight: theme.fontWeightBold,
                  margin: "0 0 32px",
                  textAlign: "center",
                }}
              >
                {heading}
              </Text>
            ) : null}
            {questions.map((question, index) => (
              <Text
                key={question}
                style={{
                  color: theme.colorText,
                  fontSize: theme.fontSizeSm,
                  fontWeight: theme.fontWeightMedium,
                  margin:
                    index === questions.length - 1 ? "0 0 32px" : "0 0 16px",
                  textAlign: "center",
                }}
              >
                {question}
              </Text>
            ))}
            {ctaText ? (
              <Text
                style={{
                  color: theme.colorTextMuted,
                  fontSize: theme.fontSizeBase,
                  margin: "0 0 16px",
                  textAlign: "center",
                }}
              >
                {ctaText}
              </Text>
            ) : null}
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

CollapsedFaqWithInlineCta.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Contact Us",
  ctaText: "Still have questions?",
  heading: "FAQ",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
  variant: "default",
} satisfies CollapsedFaqWithInlineCtaProps;
