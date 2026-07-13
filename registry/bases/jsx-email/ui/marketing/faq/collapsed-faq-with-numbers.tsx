/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Container, Head, Html, Preview, Section, Text } from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type CollapsedFaqWithNumbersVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CollapsedFaqWithNumbersProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  q2?: string;
  q3?: string;
  q4?: string;
  variant?: CollapsedFaqWithNumbersVariant;
}

export const CollapsedFaqWithNumbers = ({
  theme = defaultTheme,
  heading = "FAQ",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
  q4 = "Can I cancel anytime?",
  variant = "default",
}: CollapsedFaqWithNumbersProps) => {
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
    { n: "01", q: q1 },
    { n: "02", q: q2 },
    { n: "03", q: q3 },
    { n: "04", q: q4 },
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
              <Text
                key={item.n}
                style={{
                  color: theme.colorText,
                  fontSize: theme.fontSizeSm,
                  fontWeight: theme.fontWeightMedium,
                  margin: index === items.length - 1 ? 0 : "0 0 16px",
                }}
              >
                {item.n}. {item.q}
              </Text>
            ))}
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

CollapsedFaqWithNumbers.PreviewProps = {
  heading: "FAQ",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  q4: "Can I cancel anytime?",
  theme: defaultTheme,
  variant: "default",
} satisfies CollapsedFaqWithNumbersProps;
