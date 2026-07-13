/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlStyle,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type CollapsedFaqWithInlineCtaVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CollapsedFaqWithInlineCtaProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  q2?: string;
  q3?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaText?: string;
  variant?: CollapsedFaqWithInlineCtaVariant;
}

const variantClass = (variant: CollapsedFaqWithInlineCtaVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const CollapsedFaqWithInlineCta = ({
  theme = defaultTheme,
  heading = "FAQ",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
  ctaLabel = "Contact Us",
  ctaHref = "#",
  ctaText = "Still have questions?",
  variant = "default",
}: CollapsedFaqWithInlineCtaProps) => {
  const questions = [q1, q2, q3];
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
            {questions.map((question, index) => (
              <MjmlText
                key={question}
                align="center"
                color={theme.colorText}
                fontSize={theme.fontSizeSm}
                fontWeight={theme.fontWeightMedium}
                paddingBottom={index === questions.length - 1 ? "32px" : "16px"}
              >
                {question}
              </MjmlText>
            ))}
            {ctaText ? (
              <MjmlText
                align="center"
                color={theme.colorTextMuted}
                fontSize={theme.fontSizeBase}
                paddingBottom="16px"
              >
                {ctaText}
              </MjmlText>
            ) : null}
            {ctaLabel && ctaHref ? (
              <MjmlButton
                align="center"
                backgroundColor={theme.colorPrimary}
                borderRadius={theme.borderRadius}
                color={theme.colorPrimaryForeground ?? "#ffffff"}
                fontSize={theme.fontSizeSm}
                fontWeight={theme.fontWeightMedium}
                href={ctaHref}
                innerPadding="8px 24px"
              >
                {ctaLabel}
              </MjmlButton>
            ) : null}
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};

CollapsedFaqWithInlineCta.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Contact Us",
  ctaText: "Still have questions?",
  heading: "FAQ",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
  variant: "default",
} satisfies CollapsedFaqWithInlineCtaProps;
