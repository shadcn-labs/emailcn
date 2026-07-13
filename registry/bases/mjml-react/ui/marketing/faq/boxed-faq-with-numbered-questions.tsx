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
  MjmlStyle,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type BoxedFaqWithNumberedQuestionsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BoxedFaqWithNumberedQuestionsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
  variant?: BoxedFaqWithNumberedQuestionsVariant;
}

const variantClass = (variant: BoxedFaqWithNumberedQuestionsVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const BoxedFaqWithNumberedQuestions = ({
  theme = defaultTheme,
  heading = "FAQ",
  q1 = "What is this product?",
  a1 = "This product helps you build beautiful emails.",
  q2 = "How does pricing work?",
  a2 = "We offer flexible pricing plans.",
  variant = "default",
}: BoxedFaqWithNumberedQuestionsProps) => {
  const items = [
    { a: a1, n: "01", q: q1 },
    { a: a2, n: "02", q: q2 },
  ];
  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>{heading}</MjmlPreview>
        <MjmlStyle>{`
          .ec-skew-left > div { transform: skewX(-10deg); }
          .ec-skew-right > div { transform: skewX(10deg); }
        `}</MjmlStyle>
        <MjmlAttributes>
          <MjmlAll color={theme.colorText} fontFamily={theme.fontFamily} />
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
        <MjmlSection
          backgroundColor={theme.colorBackground}
          cssClass={variantClass(variant)}
          padding="64px 0"
        >
          <MjmlColumn>
            {heading ? (
              <MjmlText
                align="center"
                color={theme.colorText}
                fontSize={theme.fontSizeHeading}
                fontWeight={theme.fontWeightBold}
                paddingBottom="32px"
              >
                {heading}
              </MjmlText>
            ) : null}
            {items.map((item) => (
              <MjmlText key={item.n} paddingBottom="24px">
                <span
                  style={{
                    border: `1px solid ${theme.colorBorder}`,
                    borderRadius: theme.borderRadiusLg ?? theme.borderRadius,
                    display: "block",
                    padding: "24px",
                  }}
                >
                  <span
                    style={{
                      color: theme.colorText,
                      display: "block",
                      fontSize: theme.fontSizeSm,
                      fontWeight: theme.fontWeightBold,
                      marginBottom: "8px",
                    }}
                  >
                    {item.n}. {item.q}
                  </span>
                  <span
                    style={{
                      color: theme.colorTextMuted,
                      display: "block",
                      fontSize: theme.fontSizeSm,
                      lineHeight: theme.lineHeightBase,
                    }}
                  >
                    {item.a}
                  </span>
                </span>
              </MjmlText>
            ))}
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};

BoxedFaqWithNumberedQuestions.PreviewProps = {
  a1: "This product helps you build beautiful emails.",
  a2: "We offer flexible pricing plans.",
  heading: "FAQ",
  q1: "What is this product?",
  q2: "How does pricing work?",
  theme: defaultTheme,
  variant: "default",
} satisfies BoxedFaqWithNumberedQuestionsProps;
