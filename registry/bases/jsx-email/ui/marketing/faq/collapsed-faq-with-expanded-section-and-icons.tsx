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

export type FAQExpandedVariant = "default" | "slanted-left" | "slanted-right";

export interface FAQExpandedProps {
  theme?: EmailThemeTokens;
  items?: { question: string; answer: string }[];
  variant?: FAQExpandedVariant;
}

const FAQExpandedSection = ({
  items,
  theme,
  variant,
}: {
  items: FAQExpandedProps["items"];
  theme: EmailThemeTokens;
  variant: FAQExpandedVariant;
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
              style={{ padding: `${theme.spacingBase ?? "24px"} 0` }}
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
                {i < list.length - 1 ? (
                  <Hr
                    style={{
                      borderBottomWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopColor: theme.colorBorder ?? "#e5e7eb",
                      borderTopStyle: "solid",
                      borderTopWidth: "1px",
                      marginTop: theme.spacingXl ?? "48px",
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
};

export const CollapsedFaqWithExpandedSectionAndIcons = ({
  theme = defaultTheme,
  items = [
    {
      answer: "This is the answer to the question.",
      question: "What is this?",
    },
  ],
  variant = "default",
}: FAQExpandedProps) => (
  <Html>
    <Head />
    <Preview>FAQ expanded</Preview>
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
          <FAQExpandedSection items={items} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);

CollapsedFaqWithExpandedSectionAndIcons.PreviewProps = {
  items: [
    {
      answer:
        "EmailCN is a collection of beautifully designed, responsive email components built with React Email.",
      question: "What is EmailCN?",
    },
    {
      answer:
        "Yes, all components are fully responsive and work across major email clients including Gmail, Outlook, and Apple Mail.",
      question: "Are the components responsive?",
    },
    {
      answer: "Components are free to use under the MIT license.",
      question: "What is the license?",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FAQExpandedProps;
