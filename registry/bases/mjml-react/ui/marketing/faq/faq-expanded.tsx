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
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      <MjmlColumn>
        {list.map((item, i) => (
          <MjmlSection
            key={item.question + i}
            padding={`${theme.spacingBase ?? "24px"} 0`}
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
            {i < list.length - 1 ? (
              <MjmlDivider
                borderColor={theme.colorBorder ?? "#e5e7eb"}
                borderWidth="1px"
                paddingTop={theme.spacingXl ?? "48px"}
              />
            ) : null}
          </MjmlSection>
        ))}
      </MjmlColumn>
    </MjmlSection>
  );
};

export const FAQExpanded = ({
  theme = defaultTheme,
  items = [
    {
      answer: "This is the answer to the question.",
      question: "What is this?",
    },
  ],
  variant = "default",
}: FAQExpandedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>FAQ expanded</MjmlPreview>
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
        <FAQExpandedSection items={items} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FAQExpanded.PreviewProps = {
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
