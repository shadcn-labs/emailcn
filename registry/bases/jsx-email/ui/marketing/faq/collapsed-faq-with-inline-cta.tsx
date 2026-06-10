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

export type FAQAccordionVariant = "default" | "slanted-left" | "slanted-right";
export interface FAQAccordionProps {
  theme?: EmailThemeTokens;
  items?: { question: string; answer: string }[];
  variant?: FAQAccordionVariant;
}
const FAQAccordionSection = ({
  items,
  theme,
  variant,
}: {
  items: FAQAccordionProps["items"];
  theme: EmailThemeTokens;
  variant: FAQAccordionVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column>
        {(items ?? []).map((item, i) => (
          <Section
            key={item.question + i}
            style={{
              backgroundColor: theme.colorBackgroundMuted,
              borderRadius: theme.borderRadius,
              padding: theme.spacingBase ?? "16px",
            }}
          >
            <Row>
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
            </Row>
          </Section>
        ))}
      </Column>
    </Row>
  </Section>
);
export const CollapsedFaqWithInlineCta = ({
  theme = defaultTheme,
  items = [{ answer: "This is the answer.", question: "What is this?" }],
  variant = "default",
}: FAQAccordionProps) => (
  <Html>
    <Head />
    <Preview>FAQ accordion</Preview>
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
          <FAQAccordionSection items={items} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);
CollapsedFaqWithInlineCta.PreviewProps = {
  items: [
    {
      answer: "EmailCN is a collection of email components.",
      question: "What is EmailCN?",
    },
    {
      answer: "Yes, all components are fully responsive.",
      question: "Are they responsive?",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FAQAccordionProps;
