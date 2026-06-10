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
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {list.slice(0, 4).map((item, i) => (
        <MjmlColumn
          key={item.question + i}
          width="50%"
          padding={theme.spacingBase ?? "16px"}
          verticalAlign="top"
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
        </MjmlColumn>
      ))}
    </MjmlSection>
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>FAQ grid</MjmlPreview>
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
        <FAQGridSection items={items} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
