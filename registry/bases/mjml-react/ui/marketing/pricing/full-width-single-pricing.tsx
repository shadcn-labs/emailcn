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

export type FullWidthSinglePricingVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FullWidthSinglePricingProps {
  theme?: EmailThemeTokens;
  heading?: string;
  price?: string;
  period?: string;
  description?: string;
  feature1?: string;
  feature2?: string;
  feature3?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: FullWidthSinglePricingVariant;
}

const variantClass = (variant: FullWidthSinglePricingVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const FullWidthSinglePricing = ({
  theme = defaultTheme,
  heading = "Pro Plan",
  price = "$29",
  period = "/month",
  description = "Everything you need to grow.",
  feature1 = "Unlimited emails",
  feature2 = "Custom templates",
  feature3 = "Priority support",
  ctaLabel = "Subscribe",
  ctaHref = "#",
  variant = "default",
}: FullWidthSinglePricingProps) => {
  const features = [feature1, feature2, feature3];
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
          <MjmlColumn
            border={`1px solid ${theme.colorBorder}`}
            borderRadius={theme.borderRadiusLg ?? theme.borderRadius}
            padding="32px"
          >
            <MjmlText
              align="center"
              color={theme.colorText}
              fontSize={theme.fontSizeXl}
              fontWeight={theme.fontWeightBold}
              paddingBottom="16px"
            >
              {heading}
            </MjmlText>
            <MjmlText
              align="center"
              color={theme.colorText}
              fontSize={theme.fontSizeXl}
              fontWeight={theme.fontWeightBold}
              paddingBottom="8px"
            >
              {price}
            </MjmlText>
            <MjmlText
              align="center"
              color={theme.colorTextMuted}
              fontSize={theme.fontSizeBase}
              paddingBottom="16px"
            >
              {period}
            </MjmlText>
            <MjmlText
              align="center"
              color={theme.colorTextMuted}
              fontSize={theme.fontSizeSm}
              paddingBottom="24px"
            >
              {description}
            </MjmlText>
            {features.map((feature) => (
              <MjmlText
                key={feature}
                align="center"
                color={theme.colorText}
                fontSize={theme.fontSizeSm}
                paddingBottom="8px"
              >
                &bull; {feature}
              </MjmlText>
            ))}
            {ctaLabel && ctaHref ? (
              <MjmlButton
                align="center"
                backgroundColor={theme.colorPrimary}
                borderRadius={theme.borderRadius}
                color={theme.colorPrimaryForeground ?? "#ffffff"}
                fontSize={theme.fontSizeBase}
                fontWeight={theme.fontWeightMedium}
                href={ctaHref}
                innerPadding="12px 32px"
                paddingTop="16px"
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

FullWidthSinglePricing.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Subscribe",
  description: "Everything you need to grow.",
  feature1: "Unlimited emails",
  feature2: "Custom templates",
  feature3: "Priority support",
  heading: "Pro Plan",
  period: "/month",
  price: "$29",
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthSinglePricingProps;
