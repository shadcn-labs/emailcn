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
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type CouponOverlayedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CouponOverlayedProps {
  theme?: EmailThemeTokens;
  code?: string;
  discount?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: CouponOverlayedVariant;
}

const CouponOverlayedSection = ({
  code,
  ctaHref,
  ctaLabel,
  description,
  discount,
  theme,
  variant,
}: {
  code: string;
  ctaHref: string;
  ctaLabel: string;
  description: string;
  discount: string;
  theme: EmailThemeTokens;
  variant: CouponOverlayedVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorPrimary}
    borderRadius={theme.borderRadius}
    padding={theme.spacingXl ?? "24px"}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorPrimaryForeground}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {discount}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorPrimaryForeground}
        fontFamily={theme.fontFamilyMono}
        fontSize="28px"
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {code}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorPrimaryForeground}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase ?? "14px"}
        paddingBottom={theme.spacingLg ?? "24px"}
      >
        {description}
      </MjmlText>
      {ctaLabel && ctaHref ? (
        <MjmlButton
          align="center"
          backgroundColor={theme.colorPrimaryForeground}
          borderRadius={theme.borderRadius}
          color={theme.colorPrimary}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "14px"}
          fontWeight={theme.fontWeightMedium}
          href={ctaHref}
          innerPadding={`${theme.spacingBase ?? "16px"} ${theme.spacingLg ?? "24px"}`}
        >
          {ctaLabel}
        </MjmlButton>
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

export const CouponOverlayed = ({
  theme = defaultTheme,
  code = "VIP30",
  discount = "30% OFF",
  description = "Exclusive VIP discount. Use code at checkout.",
  ctaLabel = "Claim Offer",
  ctaHref = "#",
  variant = "default",
}: CouponOverlayedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>coupon overlayed</MjmlPreview>
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
        <CouponOverlayedSection
          code={code}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          description={description}
          discount={discount}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

CouponOverlayed.PreviewProps = {
  code: "VIP30",
  ctaHref: "https://example.com/claim",
  ctaLabel: "Claim Offer",
  description: "Exclusive VIP discount. Use code at checkout.",
  discount: "30% OFF",
  theme: defaultTheme,
  variant: "default",
} satisfies CouponOverlayedProps;
