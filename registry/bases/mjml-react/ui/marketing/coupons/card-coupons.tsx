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

export type CardCouponsVariant = "default" | "slanted-left" | "slanted-right";

export interface CardCouponsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  discount?: string;
  code?: string;
  description?: string;
  expiry?: string;
  variant?: CardCouponsVariant;
}

const variantClass = (variant: CardCouponsVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const CardCoupons = ({
  theme = defaultTheme,
  heading = "Special Offer",
  discount = "20% OFF",
  code = "SAVE20",
  description = "On your first purchase",
  expiry = "Expires in 7 days",
  variant = "default",
}: CardCouponsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{discount}</MjmlPreview>
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
          backgroundColor={theme.colorBackgroundMuted}
          border={`2px dashed ${theme.colorBorder}`}
          borderRadius={theme.borderRadiusLg ?? theme.borderRadius}
          padding="32px"
        >
          {heading ? (
            <MjmlText
              align="center"
              color={theme.colorTextMuted}
              fontSize={theme.fontSizeLg}
              fontWeight={theme.fontWeightMedium}
              paddingBottom="16px"
            >
              {heading}
            </MjmlText>
          ) : null}
          <MjmlText
            align="center"
            color={theme.colorPrimary}
            fontSize={theme.fontSizeXl}
            fontWeight={theme.fontWeightBold}
            paddingBottom="16px"
          >
            {discount}
          </MjmlText>
          <MjmlText
            align="center"
            color={theme.colorText}
            fontFamily={theme.fontFamilyMono}
            fontSize={theme.fontSizeLg}
            fontWeight={theme.fontWeightBold}
            letterSpacing="0.1em"
            paddingBottom="24px"
          >
            {code}
          </MjmlText>
          <MjmlText
            align="center"
            color={theme.colorTextMuted}
            fontSize={theme.fontSizeBase}
            paddingBottom="16px"
          >
            {description}
          </MjmlText>
          {expiry ? (
            <MjmlText
              align="center"
              color={theme.colorTextSubtle}
              fontSize={theme.fontSizeSm}
            >
              {expiry}
            </MjmlText>
          ) : null}
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);

CardCoupons.PreviewProps = {
  code: "SAVE20",
  description: "On your first purchase",
  discount: "20% OFF",
  expiry: "Expires in 7 days",
  heading: "Special Offer",
  theme: defaultTheme,
  variant: "default",
} satisfies CardCouponsProps;
