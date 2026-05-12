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
  MjmlDivider,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      {(items ?? []).map((item, i) => (
        <MjmlSection
          key={item.question + i}
          padding={`${theme.spacingBase ?? "16px"} 0`}
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
          {i < (items ?? []).length - 1 ? (
            <MjmlDivider borderColor={theme.colorBorder} borderWidth="1px" />
          ) : null}
        </MjmlSection>
      ))}
    </MjmlColumn>
  </MjmlSection>
);
export const ExpandedFaqWithOffsetAnswers = ({
  theme = defaultTheme,
  items = [{ answer: "This is the answer.", question: "What is this?" }],
  variant = "default",
}: FAQMinimalProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>FAQ minimal</MjmlPreview>
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
        <FAQMinimalSection items={items} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
