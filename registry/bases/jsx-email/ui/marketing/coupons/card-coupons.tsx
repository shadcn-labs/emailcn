/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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

export const CardCoupons = ({
  theme = defaultTheme,
  heading = "Special Offer",
  discount = "20% OFF",
  code = "SAVE20",
  description = "On your first purchase",
  expiry = "Expires in 7 days",
  variant = "default",
}: CardCouponsProps) => {
  const skew =
    variant === "slanted-left"
      ? "skewX(-10deg)"
      : variant === "slanted-right"
        ? "skewX(10deg)"
        : undefined;
  const unskew =
    variant === "slanted-left"
      ? "skewX(10deg)"
      : variant === "slanted-right"
        ? "skewX(-10deg)"
        : undefined;
  return (
    <Html>
      <Head />
      <Preview>{discount}</Preview>
      <Body
        style={{
          backgroundColor: theme.colorBackground,
          fontFamily: theme.fontFamily,
          margin: 0,
        }}
      >
        <Section
          style={{
            backgroundColor: theme.colorBackground,
            padding: "64px 0",
            transform: skew,
          }}
        >
          <Container
            style={{
              margin: "0 auto",
              maxWidth: theme.containerWidth,
              transform: unskew,
            }}
          >
            <Section
              style={{
                backgroundColor: theme.colorBackgroundMuted,
                border: `2px dashed ${theme.colorBorder}`,
                borderRadius: theme.borderRadiusLg ?? theme.borderRadius,
                padding: "32px",
                textAlign: "center",
              }}
            >
              {heading ? (
                <Text
                  style={{
                    color: theme.colorTextMuted,
                    fontSize: theme.fontSizeLg,
                    fontWeight: theme.fontWeightMedium,
                    margin: "0 0 16px",
                    textAlign: "center",
                  }}
                >
                  {heading}
                </Text>
              ) : null}
              <Text
                style={{
                  color: theme.colorPrimary,
                  fontSize: theme.fontSizeXl,
                  fontWeight: theme.fontWeightBold,
                  margin: "0 0 16px",
                  textAlign: "center",
                }}
              >
                {discount}
              </Text>
              <Text
                style={{
                  color: theme.colorText,
                  fontFamily: theme.fontFamilyMono,
                  fontSize: theme.fontSizeLg,
                  fontWeight: theme.fontWeightBold,
                  letterSpacing: "0.1em",
                  margin: "0 0 24px",
                  textAlign: "center",
                }}
              >
                {code}
              </Text>
              <Text
                style={{
                  color: theme.colorTextMuted,
                  fontSize: theme.fontSizeBase,
                  margin: "0 0 8px",
                  textAlign: "center",
                }}
              >
                {description}
              </Text>
              <Hr
                style={{ borderColor: theme.colorBorder, margin: "16px 0" }}
              />
              {expiry ? (
                <Text
                  style={{
                    color: theme.colorTextSubtle,
                    fontSize: theme.fontSizeSm,
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  {expiry}
                </Text>
              ) : null}
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

CardCoupons.PreviewProps = {
  code: "SAVE20",
  description: "On your first purchase",
  discount: "20% OFF",
  expiry: "Expires in 7 days",
  heading: "Special Offer",
  theme: defaultTheme,
  variant: "default",
} satisfies CardCouponsProps;
