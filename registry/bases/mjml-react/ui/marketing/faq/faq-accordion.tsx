/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      {(items ?? []).map((item, i) => (
        <MjmlSection
          key={item.question + i}
          backgroundColor={theme.colorBackgroundMuted}
          borderRadius={theme.borderRadius}
          padding={theme.spacingBase ?? "16px"}
        >
          <MjmlText
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase}
            fontWeight={theme.fontWeightMedium}
            paddingBottom={theme.spacingBase ?? "8px"}
          >
            {item.question}
          </MjmlText>
          <MjmlText
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase}
            lineHeight={theme.lineHeightBase}
          >
            {item.answer}
          </MjmlText>
        </MjmlSection>
      ))}
    </MjmlColumn>
  </MjmlSection>
);
export const FAQAccordion = ({
  theme = defaultTheme,
  items = [{ answer: "This is the answer.", question: "What is this?" }],
  variant = "default",
}: FAQAccordionProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>FAQ accordion</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <FAQAccordionSection items={items} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
FAQAccordion.PreviewProps = {
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
