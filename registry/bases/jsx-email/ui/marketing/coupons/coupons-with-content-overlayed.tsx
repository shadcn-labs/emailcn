/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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

export const CouponsWithContentOverlayed = ({
  theme = defaultTheme,
  discount = "30% OFF",
  code = "FLASH30",
  description = "Flash sale - limited time only",
  backgroundSrc = "https://static.photos/city/600x400/3",
  backgroundAlt = "",
  variant = "default",
}: CouponsWithContentOverlayedProps) => {
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
                borderRadius: theme.borderRadiusLg ?? theme.borderRadius,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Img
                src={backgroundSrc}
                alt={backgroundAlt}
                width="600"
                height="400"
                style={{
                  display: "block",
                  height: "auto",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              <Section
                style={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  bottom: 0,
                  left: 0,
                  padding: "32px",
                  position: "absolute",
                  right: 0,
                  textAlign: "center",
                  top: 0,
                }}
              >
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: theme.fontSizeXl,
                    fontWeight: theme.fontWeightBold,
                    margin: "0 0 8px",
                    textAlign: "center",
                  }}
                >
                  {discount}
                </Text>
                <Text
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: theme.fontSizeLg,
                    margin: "0 0 16px",
                    textAlign: "center",
                  }}
                >
                  {description}
                </Text>
                <Text
                  style={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderRadius: theme.borderRadius,
                    color: "#ffffff",
                    display: "inline-block",
                    fontFamily: theme.fontFamilyMono,
                    fontSize: theme.fontSizeLg,
                    fontWeight: theme.fontWeightBold,
                    letterSpacing: "0.1em",
                    margin: 0,
                    padding: "12px 32px",
                  }}
                >
                  {code}
                </Text>
              </Section>
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

CouponsWithContentOverlayed.PreviewProps = {
  backgroundAlt: "",
  backgroundSrc: "https://static.photos/city/600x400/6",
  code: "FLASH30",
  description: "Flash sale - limited time only",
  discount: "30% OFF",
  theme: defaultTheme,
  variant: "default",
} satisfies CouponsWithContentOverlayedProps;
