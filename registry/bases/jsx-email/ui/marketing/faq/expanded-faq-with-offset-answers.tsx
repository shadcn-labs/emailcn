/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FAQMinimalVariant = "default" | "slanted-left" | "slanted-right";
export interface FAQMinimalProps {
  theme?: EmailThemeTokens;
  items?: { question: string; answer: string }[];
  variant?: FAQMinimalVariant;
}
const FAQMinimalSection = ({
  items,
  theme,
  variant,
}: {
  items: FAQMinimalProps["items"];
  theme: EmailThemeTokens;
  variant: FAQMinimalVariant;
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
            style={{ padding: `${theme.spacingBase ?? "16px"} 0` }}
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
              {i < (items ?? []).length - 1 ? (
                <Hr
                  style={{
                    borderBottomWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopColor: theme.colorBorder,
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    width: "100%",
                  }}
                />
              ) : null}
            </Row>
          </Section>
        ))}
      </Column>
    </Row>
  </Section>
);
export const ExpandedFaqWithOffsetAnswers = ({
  theme = defaultTheme,
  items = [{ answer: "This is the answer.", question: "What is this?" }],
  variant = "default",
}: FAQMinimalProps) => (
  <Html>
    <Head />
    <Preview>FAQ minimal</Preview>
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
          <FAQMinimalSection items={items} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);
ExpandedFaqWithOffsetAnswers.PreviewProps = {
  items: [
    {
      answer: "A collection of responsive email components.",
      question: "What is EmailCN?",
    },
    { answer: "MIT license.", question: "What license?" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FAQMinimalProps;
