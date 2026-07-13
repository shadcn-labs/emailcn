/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Container, Head, Html, Preview, Section, Text } from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type ExpandedFaqWithNumbersVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface ExpandedFaqWithNumbersProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
  q3?: string;
  a3?: string;
  variant?: ExpandedFaqWithNumbersVariant;
}

export const ExpandedFaqWithNumbers = ({
  theme = defaultTheme,
  heading = "FAQ",
  q1 = "What is this product?",
  a1 = "This is a product that helps you build beautiful emails.",
  q2 = "How does pricing work?",
  a2 = "We offer flexible pricing plans to suit your needs.",
  q3 = "Is there customer support?",
  a3 = "Yes, we offer 24/7 customer support via email and chat.",
  variant = "default",
}: ExpandedFaqWithNumbersProps) => {
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
    { a: a1, n: "01", q: q1 },
    { a: a2, n: "02", q: q2 },
    { a: a3, n: "03", q: q3 },
  ];
  const questionStyle = {
    color: theme.colorText,
    fontSize: theme.fontSizeSm,
    fontWeight: theme.fontWeightBold,
    margin: "0 0 8px",
  };
  const answerStyle = {
    color: theme.colorTextMuted,
    fontSize: theme.fontSizeSm,
    lineHeight: theme.lineHeightBase,
    margin: 0,
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
                key={item.n}
                style={{
                  marginBottom: index === items.length - 1 ? 0 : "24px",
                }}
              >
                <Text style={questionStyle}>
                  {item.n}. {item.q}
                </Text>
                <Text style={answerStyle}>{item.a}</Text>
              </Section>
            ))}
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

ExpandedFaqWithNumbers.PreviewProps = {
  a1: "This is a product that helps you build beautiful emails quickly and easily.",
  a2: "We offer flexible pricing plans to suit your needs, starting at $9/month.",
  a3: "Yes, we offer 24/7 customer support via email and live chat.",
  heading: "FAQ",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
  variant: "default",
} satisfies ExpandedFaqWithNumbersProps;
