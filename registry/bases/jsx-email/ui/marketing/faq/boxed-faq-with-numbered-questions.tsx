/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FAQBoxedVariant = "default" | "slanted-left" | "slanted-right";

export interface FAQBoxedProps {
  theme?: EmailThemeTokens;
  items?: { question: string; answer: string }[];
  variant?: FAQBoxedVariant;
}

const FAQBoxedSection = ({
  items,
  theme,
  variant,
}: {
  items: FAQBoxedProps["items"];
  theme: EmailThemeTokens;
  variant: FAQBoxedVariant;
}) => {
  const list = items ?? [];

  return (
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: `${theme.spacingXl ?? "48px"} 0`,
      }}
    >
      <Row>
        <Column>
          {list.map((item, i) => (
            <Section
              key={item.question + i}
              style={{
                backgroundColor:
                  i % 2 === 0
                    ? theme.colorBackgroundMuted
                    : theme.colorBackground,
                border:
                  i % 2 === 1
                    ? `1px solid ${theme.colorBorder ?? "#e5e7eb"}`
                    : "none",
                borderRadius: theme.borderRadius,
                padding: theme.spacingBase ?? "24px",
              }}
            >
              <Row>
                <Text
                  style={{
                    color: theme.colorText,
                    fontFamily: theme.fontFamily,
                    fontSize: theme.fontSizeLg ?? "16px",
                    fontWeight: theme.fontWeightMedium,
                    margin: 0,
                    paddingBottom: theme.spacingBase ?? "16px",
                  }}
                >
                  {item.question}
                </Text>
                <Text
                  style={{
                    color: theme.colorTextMuted,
                    fontFamily: theme.fontFamily,
                    fontSize: theme.fontSizeBase ?? "14px",
                    lineHeight: theme.lineHeightBase,
                    margin: 0,
                  }}
                >
                  {item.answer}
                </Text>
              </Row>
            </Section>
          ))}
        </Column>
      </Row>
    </Section>
  );
};

export const BoxedFaqWithNumberedQuestions = ({
  theme = defaultTheme,
  items = [
    {
      answer: "This is the answer to the question.",
      question: "What is this?",
    },
  ],
  variant = "default",
}: FAQBoxedProps) => (
  <Html>
    <Head />
    <Preview>FAQ boxed</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <FAQBoxedSection items={items} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);

BoxedFaqWithNumberedQuestions.PreviewProps = {
  items: [
    {
      answer:
        "EmailCN is a collection of beautifully designed email components.",
      question: "What is EmailCN?",
    },
    {
      answer: "Yes, they work across all major email clients.",
      question: "Are the components responsive?",
    },
    {
      answer: "MIT license — free to use.",
      question: "What is the license?",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FAQBoxedProps;
