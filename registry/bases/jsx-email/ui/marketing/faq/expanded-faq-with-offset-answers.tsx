/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Container, Head, Html, Preview, Section, Text } from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type ExpandedFaqWithOffsetAnswersVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface ExpandedFaqWithOffsetAnswersProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
  q3?: string;
  a3?: string;
  variant?: ExpandedFaqWithOffsetAnswersVariant;
}

export const ExpandedFaqWithOffsetAnswers = ({
  theme = defaultTheme,
  heading = "FAQ",
  q1 = "What is this product?",
  a1 = "This product helps you build beautiful emails.",
  q2 = "How does pricing work?",
  a2 = "We offer flexible pricing plans.",
  q3 = "Is there customer support?",
  a3 = "Yes, we offer 24/7 support.",
  variant = "default",
}: ExpandedFaqWithOffsetAnswersProps) => {
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
  const items = [
    { a: a1, q: q1 },
    { a: a2, q: q2 },
    { a: a3, q: q3 },
  ];
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
            {items.map((item, index) => (
              <Section
                key={item.q}
                style={{
                  marginBottom: index === items.length - 1 ? 0 : "24px",
                }}
              >
                <Text
                  style={{
                    color: theme.colorText,
                    fontSize: theme.fontSizeSm,
                    fontWeight: theme.fontWeightBold,
                    margin: "0 0 8px",
                  }}
                >
                  {item.q}
                </Text>
                <Text
                  style={{
                    color: theme.colorTextMuted,
                    fontSize: theme.fontSizeSm,
                    lineHeight: theme.lineHeightBase,
                    margin: 0,
                    paddingLeft: "24px",
                  }}
                >
                  {item.a}
                </Text>
              </Section>
            ))}
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

ExpandedFaqWithOffsetAnswers.PreviewProps = {
  a1: "This product helps you build beautiful emails.",
  a2: "We offer flexible pricing plans.",
  a3: "Yes, we offer 24/7 support.",
  heading: "FAQ",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
  variant: "default",
} satisfies ExpandedFaqWithOffsetAnswersProps;
