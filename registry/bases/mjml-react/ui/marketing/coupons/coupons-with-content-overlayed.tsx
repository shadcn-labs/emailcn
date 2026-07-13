/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlHead,
  MjmlHero,
  MjmlPreview,
  MjmlStyle,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type CouponsWithContentOverlayedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CouponsWithContentOverlayedProps {
  theme?: EmailThemeTokens;
  discount?: string;
  code?: string;
  description?: string;
  backgroundSrc?: string;
  backgroundAlt?: string;
  variant?: CouponsWithContentOverlayedVariant;
}

const variantClass = (variant: CouponsWithContentOverlayedVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const CouponsWithContentOverlayed = ({
  theme = defaultTheme,
  discount = "30% OFF",
  code = "FLASH30",
  description = "Flash sale - limited time only",
  backgroundSrc = "https://static.photos/city/600x400/3",
  backgroundAlt = "",
  variant = "default",
}: CouponsWithContentOverlayedProps) => (
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
      <MjmlHero
        backgroundColor="#1f2937"
        backgroundHeight={400}
        backgroundPosition="center center"
        backgroundUrl={backgroundSrc}
        backgroundWidth={600}
        cssClass={variantClass(variant)}
        mode="fluid-height"
        padding="48px 32px"
      >
        <MjmlText
          align="center"
          color="#ffffff"
          fontSize={theme.fontSizeXl}
          fontWeight={theme.fontWeightBold}
          paddingBottom="8px"
        >
          {discount}
        </MjmlText>
        <MjmlText
          align="center"
          color="rgba(255,255,255,0.8)"
          fontSize={theme.fontSizeLg}
          paddingBottom="16px"
        >
          {description}
        </MjmlText>
        <MjmlText align="center">
          <span
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: theme.borderRadius,
              color: "#ffffff",
              display: "inline-block",
              fontFamily: theme.fontFamilyMono,
              fontSize: theme.fontSizeLg,
              fontWeight: theme.fontWeightBold,
              letterSpacing: "0.1em",
              padding: "12px 32px",
            }}
          >
            {code}
          </span>
        </MjmlText>
      </MjmlHero>
    </MjmlBody>
  </Mjml>
);

CouponsWithContentOverlayed.PreviewProps = {
  backgroundAlt: "",
  backgroundSrc: "https://static.photos/city/600x400/6",
  code: "FLASH30",
  description: "Flash sale - limited time only",
  discount: "30% OFF",
  theme: defaultTheme,
  variant: "default",
} satisfies CouponsWithContentOverlayedProps;
