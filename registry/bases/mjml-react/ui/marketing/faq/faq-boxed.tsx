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

export type FAQBoxedVariant = "default" | "slanted-left" | "slanted-right";

export interface FAQBoxedProps {
  theme?: EmailThemeTokens;
  items?: { question: string; answer: string }[];
  variant?: FAQBoxedVariant;
}

const FAQBoxedSection = ({
  items,
  theme,
  variant,
}: {
  items: FAQBoxedProps["items"];
  theme: EmailThemeTokens;
  variant: FAQBoxedVariant;
}) => {
  const list = items ?? [];

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      <MjmlColumn>
        {list.map((item, i) => (
          <MjmlSection
            key={item.question + i}
            backgroundColor={
              i % 2 === 0 ? theme.colorBackgroundMuted : theme.colorBackground
            }
            border={
              i % 2 === 1
                ? `1px solid ${theme.colorBorder ?? "#e5e7eb"}`
                : "none"
            }
            borderRadius={theme.borderRadius}
            padding={theme.spacingBase ?? "24px"}
          >
            <MjmlText
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeLg ?? "16px"}
              fontWeight={theme.fontWeightMedium}
              paddingBottom={theme.spacingBase ?? "16px"}
            >
              {item.question}
            </MjmlText>
            <MjmlText
              color={theme.colorTextMuted}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase ?? "14px"}
              lineHeight={theme.lineHeightBase}
            >
              {item.answer}
            </MjmlText>
          </MjmlSection>
        ))}
      </MjmlColumn>
    </MjmlSection>
  );
};

export const FAQBoxed = ({
  theme = defaultTheme,
  items = [
    {
      answer: "This is the answer to the question.",
      question: "What is this?",
    },
  ],
  variant = "default",
}: FAQBoxedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>FAQ boxed</MjmlPreview>
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
        <FAQBoxedSection items={items} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FAQBoxed.PreviewProps = {
  items: [
    {
      answer:
        "EmailCN is a collection of beautifully designed email components.",
      question: "What is EmailCN?",
    },
    {
      answer: "Yes, they work across all major email clients.",
      question: "Are the components responsive?",
    },
    {
      answer: "MIT license — free to use.",
      question: "What is the license?",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FAQBoxedProps;
