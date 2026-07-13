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

export type ExpandedFaqWithOffsetAnswersVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface ExpandedFaqWithOffsetAnswersProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
  q3?: string;
  a3?: string;
  variant?: ExpandedFaqWithOffsetAnswersVariant;
}

const variantClass = (variant: ExpandedFaqWithOffsetAnswersVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const ExpandedFaqWithOffsetAnswers = ({
  theme = defaultTheme,
  heading = "FAQ",
  q1 = "What is this product?",
  a1 = "This product helps you build beautiful emails.",
  q2 = "How does pricing work?",
  a2 = "We offer flexible pricing plans.",
  q3 = "Is there customer support?",
  a3 = "Yes, we offer 24/7 support.",
  variant = "default",
}: ExpandedFaqWithOffsetAnswersProps) => {
  const items = [
    { a: a1, q: q1 },
    { a: a2, q: q2 },
    { a: a3, q: q3 },
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
              <MjmlText key={item.q} paddingBottom="24px">
                <span
                  style={{
                    color: theme.colorText,
                    display: "block",
                    fontSize: theme.fontSizeSm,
                    fontWeight: theme.fontWeightBold,
                    marginBottom: "8px",
                  }}
                >
                  {item.q}
                </span>
                <span
                  style={{
                    color: theme.colorTextMuted,
                    display: "block",
                    fontSize: theme.fontSizeSm,
                    lineHeight: theme.lineHeightBase,
                    paddingLeft: "24px",
                  }}
                >
                  {item.a}
                </span>
              </MjmlText>
            ))}
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};

ExpandedFaqWithOffsetAnswers.PreviewProps = {
  a1: "This product helps you build beautiful emails.",
  a2: "We offer flexible pricing plans.",
  a3: "Yes, we offer 24/7 support.",
  heading: "FAQ",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
  variant: "default",
} satisfies ExpandedFaqWithOffsetAnswersProps;
