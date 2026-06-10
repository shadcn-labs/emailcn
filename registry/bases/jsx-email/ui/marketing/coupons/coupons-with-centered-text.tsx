/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type CouponCenteredVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CouponCenteredProps {
  theme?: EmailThemeTokens;
  code?: string;
  discount?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: CouponCenteredVariant;
}

const CouponCenteredSection = ({
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
  variant: CouponCenteredVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeSm ?? "12px",
            fontWeight: theme.fontWeightMedium,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "16px",
            textAlign: "center",
          }}
        >
          {discount}
        </Text>
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamilyMono,
            fontSize: "28px",
            fontWeight: theme.fontWeightBold,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "16px",
            textAlign: "center",
          }}
        >
          {code}
        </Text>
        <Text
          style={{
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeBase ?? "14px",
            margin: 0,
            paddingBottom: theme.spacingLg ?? "24px",
            textAlign: "center",
          }}
        >
          {description}
        </Text>
        {ctaLabel && ctaHref ? (
          <Button
            href={ctaHref}
            align="center"
            width={160}
            height={40}
            style={{
              backgroundColor: theme.colorPrimary,
              borderRadius: theme.borderRadius,
              color: theme.colorPrimaryForeground,
              display: "inline-block",
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "14px",
              fontWeight: theme.fontWeightMedium,
              height: "auto",
              padding: `${theme.button.primary.paddingY} ${theme.button.primary.paddingX}`,
              textDecoration: "none",
              width: "auto",
            }}
          >
            {ctaLabel}
          </Button>
        ) : null}
      </Column>
    </Row>
  </Section>
);

export const CouponsWithCenteredText = ({
  theme = defaultTheme,
  code = "SAVE20",
  discount = "20% OFF",
  description = "Use code at checkout to receive your discount.",
  ctaLabel = "Shop Now",
  ctaHref = "#",
  variant = "default",
}: CouponCenteredProps) => (
  <Html>
    <Head />
    <Preview>coupon centered</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <CouponCenteredSection
            code={code}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            description={description}
            discount={discount}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

CouponsWithCenteredText.PreviewProps = {
  code: "FLASH50",
  ctaHref: "https://example.com/shop",
  ctaLabel: "Shop Sale",
  description: "Flash sale! 50% off select items. Limited time only.",
  discount: "50% OFF",
  theme: defaultTheme,
  variant: "default",
} satisfies CouponCenteredProps;
