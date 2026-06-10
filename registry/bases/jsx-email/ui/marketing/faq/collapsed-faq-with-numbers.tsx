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

export type FAQDarkVariant = "default" | "slanted-left" | "slanted-right";
export interface FAQDarkProps {
  theme?: EmailThemeTokens;
  items?: { question: string; answer: string }[];
  variant?: FAQDarkVariant;
}
const FAQDarkSection = ({
  items,
  theme,
  variant,
}: {
  items: FAQDarkProps["items"];
  theme: EmailThemeTokens;
  variant: FAQDarkVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorText,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column>
        {(items ?? []).map((item, i) => (
          <Section
            key={item.question + i}
            style={{ padding: `${theme.spacingBase ?? "16px"} 0` }}
          >
            <Row>
              <Text
                style={{
                  color: theme.colorBackground,
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
export const CollapsedFaqWithNumbers = ({
  theme = defaultTheme,
  items = [{ answer: "This is the answer.", question: "What is this?" }],
  variant = "default",
}: FAQDarkProps) => (
  <Html>
    <Head />
    <Preview>FAQ dark</Preview>
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
          <FAQDarkSection items={items} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);
CollapsedFaqWithNumbers.PreviewProps = {
  items: [
    {
      answer: "A collection of responsive email components.",
      question: "What is EmailCN?",
    },
    { answer: "MIT license.", question: "What license?" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FAQDarkProps;
