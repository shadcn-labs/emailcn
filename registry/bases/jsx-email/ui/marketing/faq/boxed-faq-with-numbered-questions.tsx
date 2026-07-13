/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Container, Head, Html, Preview, Section, Text } from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type BoxedFaqWithNumberedQuestionsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BoxedFaqWithNumberedQuestionsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
  variant?: BoxedFaqWithNumberedQuestionsVariant;
}

export const BoxedFaqWithNumberedQuestions = ({
  theme = defaultTheme,
  heading = "FAQ",
  q1 = "What is this product?",
  a1 = "This product helps you build beautiful emails.",
  q2 = "How does pricing work?",
  a2 = "We offer flexible pricing plans.",
  variant = "default",
}: BoxedFaqWithNumberedQuestionsProps) => {
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
                  border: `1px solid ${theme.colorBorder}`,
                  borderRadius: theme.borderRadiusLg,
                  marginBottom: "24px",
                  padding: "24px",
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
                  01. {q1}
                </Text>
                <Text
                  style={{
                    color: theme.colorTextMuted,
                    fontSize: theme.fontSizeSm,
                    lineHeight: theme.lineHeightBase,
                    margin: 0,
                  }}
                >
                  {a1}
                </Text>
              </Section>
              <Section
                style={{
                  border: `1px solid ${theme.colorBorder}`,
                  borderRadius: theme.borderRadiusLg,
                  padding: "24px",
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
                  02. {q2}
                </Text>
                <Text
                  style={{
                    color: theme.colorTextMuted,
                    fontSize: theme.fontSizeSm,
                    lineHeight: theme.lineHeightBase,
                    margin: 0,
                  }}
                >
                  {a2}
                </Text>
              </Section>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

BoxedFaqWithNumberedQuestions.PreviewProps = {
  a1: "This product helps you build beautiful emails quickly and easily.",
  a2: "We offer flexible pricing plans to suit your needs, starting at $9/month.",
  heading: "FAQ",
  q1: "What is this product?",
  q2: "How does pricing work?",
  theme: defaultTheme,
  variant: "default",
} satisfies BoxedFaqWithNumberedQuestionsProps;
