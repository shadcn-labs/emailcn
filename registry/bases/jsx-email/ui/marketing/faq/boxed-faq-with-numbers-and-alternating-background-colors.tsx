/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Container, Head, Html, Preview, Section, Text } from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type BoxedFaqWithNumbersAndAlternatingBackgroundColorsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BoxedFaqWithNumbersAndAlternatingBackgroundColorsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
  q3?: string;
  a3?: string;
  variant?: BoxedFaqWithNumbersAndAlternatingBackgroundColorsVariant;
}

export const BoxedFaqWithNumbersAndAlternatingBackgroundColors = ({
  theme = defaultTheme,
  heading = "FAQ",
  q1 = "What is this product?",
  a1 = "This product helps you build beautiful emails.",
  q2 = "How does pricing work?",
  a2 = "We offer flexible pricing plans.",
  q3 = "Is there customer support?",
  a3 = "Yes, we offer 24/7 support.",
  variant = "default",
}: BoxedFaqWithNumbersAndAlternatingBackgroundColorsProps) => {
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
  const questionStyle = {
    color: theme.colorText,
    fontSize: theme.fontSizeSm,
    fontWeight: theme.fontWeightBold,
    margin: "0 0 8px",
  } as const;
  const answerStyle = {
    color: theme.colorTextMuted,
    fontSize: theme.fontSizeSm,
    lineHeight: theme.lineHeightBase,
    margin: 0,
  } as const;
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
        <Container style={{ margin: "0 auto", maxWidth: theme.containerWidth }}>
          <Section
            style={{
              backgroundColor: theme.colorBackground,
              padding: "64px 0",
              transform: skew,
            }}
          >
            <Section style={{ transform: unskew }}>
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
              <Section
                style={{
                  backgroundColor: theme.colorBackgroundMuted,
                  borderTopLeftRadius: theme.borderRadiusLg,
                  borderTopRightRadius: theme.borderRadiusLg,
                  padding: "24px",
                }}
              >
                <Text style={questionStyle}>01. {q1}</Text>
                <Text style={answerStyle}>{a1}</Text>
              </Section>
              <Section
                style={{
                  backgroundColor: theme.colorBackground,
                  padding: "24px",
                }}
              >
                <Text style={questionStyle}>02. {q2}</Text>
                <Text style={answerStyle}>{a2}</Text>
              </Section>
              <Section
                style={{
                  backgroundColor: theme.colorBackgroundMuted,
                  borderBottomLeftRadius: theme.borderRadiusLg,
                  borderBottomRightRadius: theme.borderRadiusLg,
                  padding: "24px",
                }}
              >
                <Text style={questionStyle}>03. {q3}</Text>
                <Text style={answerStyle}>{a3}</Text>
              </Section>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

BoxedFaqWithNumbersAndAlternatingBackgroundColors.PreviewProps = {
  a1: "This product helps you build beautiful emails quickly and easily.",
  a2: "We offer flexible pricing plans to suit your needs, starting at $9/month.",
  a3: "Yes, we offer 24/7 customer support via email and live chat.",
  heading: "FAQ",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
  variant: "default",
} satisfies BoxedFaqWithNumbersAndAlternatingBackgroundColorsProps;
