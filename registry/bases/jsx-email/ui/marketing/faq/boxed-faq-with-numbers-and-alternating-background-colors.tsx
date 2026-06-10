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

export type FAQWithSearchVariant = "default" | "slanted-left" | "slanted-right";
export interface FAQWithSearchProps {
  theme?: EmailThemeTokens;
  heading?: string;
  items?: { question: string; answer: string }[];
  variant?: FAQWithSearchVariant;
}
const FAQWithSearchSection = ({
  heading,
  items,
  theme,
  variant,
}: {
  heading: string;
  items: FAQWithSearchProps["items"];
  theme: EmailThemeTokens;
  variant: FAQWithSearchVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column>
        {heading ? (
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeHeading,
              fontWeight: theme.fontWeightBold,
              margin: 0,
              paddingBottom: theme.spacingXl ?? "48px",
              textAlign: "center",
            }}
          >
            {heading}
          </Text>
        ) : null}
      </Column>
      {(items ?? []).map((item, i) => (
        <Column key={item.question + i}>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeLg,
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
              paddingBottom: theme.spacingBase ?? "16px",
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
                marginBottom: theme.spacingBase ?? "16px",
                width: "100%",
              }}
            />
          ) : null}
        </Column>
      ))}
    </Row>
  </Section>
);
export const BoxedFaqWithNumbersAndAlternatingBackgroundColors = ({
  theme = defaultTheme,
  heading = "Frequently Asked Questions",
  items = [{ answer: "This is the answer.", question: "What is this?" }],
  variant = "default",
}: FAQWithSearchProps) => (
  <Html>
    <Head />
    <Preview>FAQ with search</Preview>
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
          <FAQWithSearchSection
            heading={heading}
            items={items}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
BoxedFaqWithNumbersAndAlternatingBackgroundColors.PreviewProps = {
  heading: "Frequently Asked Questions",
  items: [
    {
      answer: "A collection of responsive email components.",
      question: "What is EmailCN?",
    },
    {
      answer: "Yes, they work across all major clients.",
      question: "Are they responsive?",
    },
    { answer: "MIT license.", question: "What license?" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FAQWithSearchProps;
