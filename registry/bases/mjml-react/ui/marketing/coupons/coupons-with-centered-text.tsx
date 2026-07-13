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

export type CouponsWithCenteredTextVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CouponsWithCenteredTextProps {
  theme?: EmailThemeTokens;
  heading?: string;
  discount?: string;
  code?: string;
  description?: string;
  variant?: CouponsWithCenteredTextVariant;
}

const variantClass = (variant: CouponsWithCenteredTextVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const CouponsWithCenteredText = ({
  theme = defaultTheme,
  heading = "Your Coupon",
  discount = "15% OFF",
  code = "WELCOME15",
  description = "Welcome discount for new customers",
  variant = "default",
}: CouponsWithCenteredTextProps) => (
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
        <MjmlColumn>
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
            color={theme.colorTextMuted}
            fontSize={theme.fontSizeBase}
            paddingBottom="24px"
          >
            {description}
          </MjmlText>
          <MjmlText align="center">
            <span
              style={{
                backgroundColor: theme.colorBackgroundMuted,
                borderRadius: theme.borderRadius,
                color: theme.colorText,
                display: "inline-block",
                fontFamily: theme.fontFamilyMono,
                fontSize: theme.fontSizeLg,
                fontWeight: theme.fontWeightBold,
                letterSpacing: "0.1em",
                padding: "16px 32px",
              }}
            >
              {code}
            </span>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);

CouponsWithCenteredText.PreviewProps = {
  code: "WELCOME15",
  description: "Welcome discount for new customers",
  discount: "15% OFF",
  heading: "Your Coupon",
  theme: defaultTheme,
  variant: "default",
} satisfies CouponsWithCenteredTextProps;
