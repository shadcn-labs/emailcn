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
  <Section
    style={{
      backgroundColor: theme.colorPrimary,
      borderRadius: theme.borderRadius,
      padding: theme.spacingXl ?? "24px",
    }}
  >
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorPrimaryForeground,
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
            color: theme.colorPrimaryForeground,
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
            color: theme.colorPrimaryForeground,
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
              backgroundColor: theme.colorPrimaryForeground,
              borderRadius: theme.borderRadius,
              color: theme.colorPrimary,
              display: "inline-block",
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "14px",
              fontWeight: theme.fontWeightMedium,
              height: "auto",
              padding: `${theme.spacingBase ?? "16px"} ${theme.spacingLg ?? "24px"}`,
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

export const CouponsWithContentOverlayed = ({
  theme = defaultTheme,
  code = "VIP30",
  discount = "30% OFF",
  description = "Exclusive VIP discount. Use code at checkout.",
  ctaLabel = "Claim Offer",
  ctaHref = "#",
  variant = "default",
}: CouponOverlayedProps) => (
  <Html>
    <Head />
    <Preview>coupon overlayed</Preview>
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
          <CouponOverlayedSection
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

CouponsWithContentOverlayed.PreviewProps = {
  code: "VIP30",
  ctaHref: "https://example.com/claim",
  ctaLabel: "Claim Offer",
  description: "Exclusive VIP discount. Use code at checkout.",
  discount: "30% OFF",
  theme: defaultTheme,
  variant: "default",
} satisfies CouponOverlayedProps;
