/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlDivider,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      {heading ? (
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeHeading}
          fontWeight={theme.fontWeightBold}
          paddingBottom={theme.spacingXl ?? "48px"}
        >
          {heading}
        </MjmlText>
      ) : null}
    </MjmlColumn>
    {(items ?? []).map((item, i) => (
      <MjmlColumn key={item.question + i}>
        <MjmlText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeLg}
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
          paddingBottom={theme.spacingBase ?? "16px"}
        >
          {item.answer}
        </MjmlText>
        {i < (items ?? []).length - 1 ? (
          <MjmlDivider
            borderColor={theme.colorBorder}
            borderWidth="1px"
            paddingBottom={theme.spacingBase ?? "16px"}
          />
        ) : null}
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const BoxedFaqWithNumbersAndAlternatingBackgroundColors = ({
  theme = defaultTheme,
  heading = "Frequently Asked Questions",
  items = [{ answer: "This is the answer.", question: "What is this?" }],
  variant = "default",
}: FAQWithSearchProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>FAQ with search</MjmlPreview>
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
        <FAQWithSearchSection
          heading={heading}
          items={items}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
