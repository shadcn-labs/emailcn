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

export type FAQGridVariant = "default" | "slanted-left" | "slanted-right";
export interface FAQGridProps {
  theme?: EmailThemeTokens;
  items?: { question: string; answer: string }[];
  variant?: FAQGridVariant;
}
const FAQGridSection = ({
  items,
  theme,
  variant,
}: {
  items: FAQGridProps["items"];
  theme: EmailThemeTokens;
  variant: FAQGridVariant;
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
        {list.slice(0, 4).map((item, i) => (
          <Column
            key={item.question + i}
            style={{
              padding: theme.spacingBase ?? "16px",
              verticalAlign: "top",
              width: "50%",
            }}
          >
            <Text
              style={{
                color: theme.colorText,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeBase,
                fontWeight: theme.fontWeightMedium,
                margin: 0,
                paddingBottom: theme.spacingBase ?? "8px",
              }}
            >
              {item.question}
            </Text>
            <Text
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeBase,
                lineHeight: theme.lineHeightBase,
                margin: 0,
              }}
            >
              {item.answer}
            </Text>
          </Column>
        ))}
      </Row>
    </Section>
  );
};
export const ExpandedFaqWithNumbers = ({
  theme = defaultTheme,
  items = [
    { answer: "Answer 1", question: "Question 1?" },
    { answer: "Answer 2", question: "Question 2?" },
    { answer: "Answer 3", question: "Question 3?" },
    { answer: "Answer 4", question: "Question 4?" },
  ],
  variant = "default",
}: FAQGridProps) => (
  <Html>
    <Head />
    <Preview>FAQ grid</Preview>
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
          <FAQGridSection items={items} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);
ExpandedFaqWithNumbers.PreviewProps = {
  items: [
    {
      answer: "A collection of responsive email components.",
      question: "What is EmailCN?",
    },
    {
      answer: "Yes, all components are fully responsive.",
      question: "Are they responsive?",
    },
    { answer: "MIT license.", question: "What license?" },
    {
      answer: "Yes, via our GitHub discussions.",
      question: "Is there community support?",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FAQGridProps;
