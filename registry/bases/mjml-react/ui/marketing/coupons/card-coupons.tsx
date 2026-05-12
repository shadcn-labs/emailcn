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

export type CouponCardDefaultVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CouponCardDefaultProps {
  theme?: EmailThemeTokens;
  code?: string;
  discount?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: CouponCardDefaultVariant;
}

const CouponCardDefaultSection = ({
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
  variant: CouponCardDefaultVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    border={`Twopx dashed ${theme.colorBorder ?? "#e5e7eb"}`}
    borderRadius={theme.borderRadius}
    padding={theme.spacingXl ?? "24px"}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "1Twopx"}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {discount}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamilyMono}
        fontSize="28px"
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {code}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase ?? "14px"}
        paddingBottom={theme.spacingLg ?? "24px"}
      >
        {description}
      </MjmlText>
      {ctaLabel && ctaHref ? (
        <MjmlButton
          align="center"
          backgroundColor={theme.colorPrimary}
          borderRadius={theme.borderRadius}
          color={theme.colorPrimaryForeground}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "14px"}
          fontWeight={theme.fontWeightMedium}
          href={ctaHref}
          innerPadding={`${theme.button.primary.paddingY} ${theme.button.primary.paddingX}`}
        >
          {ctaLabel}
        </MjmlButton>
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

export const CardCoupons = ({
  theme = defaultTheme,
  code = "SAVE20",
  discount = "20% OFF",
  description = "Use code at checkout to receive your discount.",
  ctaLabel = "Shop Now",
  ctaHref = "#",
  variant = "default",
}: CouponCardDefaultProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>coupon card</MjmlPreview>
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
        <CouponCardDefaultSection
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

CardCoupons.PreviewProps = {
  code: "WELCOME25",
  ctaHref: "https://example.com/shop",
  ctaLabel: "Redeem Now",
  description:
    "Valid on all orders over $50. Cannot be combined with other offers.",
  discount: "25% OFF",
  theme: defaultTheme,
  variant: "default",
} satisfies CouponCardDefaultProps;
