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

export type CollapsedFaqWithNumbersVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CollapsedFaqWithNumbersProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  q2?: string;
  q3?: string;
  q4?: string;
  variant?: CollapsedFaqWithNumbersVariant;
}

const variantClass = (variant: CollapsedFaqWithNumbersVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const CollapsedFaqWithNumbers = ({
  theme = defaultTheme,
  heading = "FAQ",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
  q4 = "Can I cancel anytime?",
  variant = "default",
}: CollapsedFaqWithNumbersProps) => {
  const items = [
    { n: "01", q: q1 },
    { n: "02", q: q2 },
    { n: "03", q: q3 },
    { n: "04", q: q4 },
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
              <MjmlText
                key={item.n}
                color={theme.colorText}
                fontSize={theme.fontSizeSm}
                fontWeight={theme.fontWeightMedium}
                paddingBottom="16px"
              >
                {item.n}. {item.q}
              </MjmlText>
            ))}
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};

CollapsedFaqWithNumbers.PreviewProps = {
  heading: "FAQ",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  q4: "Can I cancel anytime?",
  theme: defaultTheme,
  variant: "default",
} satisfies CollapsedFaqWithNumbersProps;
