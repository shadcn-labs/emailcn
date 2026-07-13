/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Container, Head, Html, Preview, Section, Text } from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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

export const CouponsWithCenteredText = ({
  theme = defaultTheme,
  heading = "Your Coupon",
  discount = "15% OFF",
  code = "WELCOME15",
  description = "Welcome discount for new customers",
  variant = "default",
}: CouponsWithCenteredTextProps) => {
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
              textAlign: "center",
              transform: unskew,
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
                color: theme.colorTextMuted,
                fontSize: theme.fontSizeBase,
                margin: "0 0 24px",
                textAlign: "center",
              }}
            >
              {description}
            </Text>
            <Section style={{ textAlign: "center" }}>
              <Text
                style={{
                  backgroundColor: theme.colorBackgroundMuted,
                  borderRadius: theme.borderRadius,
                  color: theme.colorText,
                  display: "inline-block",
                  fontFamily: theme.fontFamilyMono,
                  fontSize: theme.fontSizeLg,
                  fontWeight: theme.fontWeightBold,
                  letterSpacing: "0.1em",
                  margin: 0,
                  padding: "16px 32px",
                }}
              >
                {code}
              </Text>
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

CouponsWithCenteredText.PreviewProps = {
  code: "WELCOME15",
  description: "Welcome discount for new customers",
  discount: "15% OFF",
  heading: "Your Coupon",
  theme: defaultTheme,
  variant: "default",
} satisfies CouponsWithCenteredTextProps;
