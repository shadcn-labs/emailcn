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
import type { CSSProperties } from "react";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type BoxedCTAWithBackgroundImageVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BoxedCTAWithBackgroundImageProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundSrc?: string;
  backgroundAlt?: string;
  variant?: BoxedCTAWithBackgroundImageVariant;
}

const skewStyle = (
  variant: BoxedCTAWithBackgroundImageVariant
): CSSProperties => {
  switch (variant) {
    case "slanted-left": {
      return { transform: "skewX(-10deg)" };
    }
    case "slanted-right": {
      return { transform: "skewX(10deg)" };
    }
    default: {
      return {};
    }
  }
};

const unskewStyle = (
  variant: BoxedCTAWithBackgroundImageVariant
): CSSProperties => {
  switch (variant) {
    case "slanted-left": {
      return { transform: "skewX(10deg)" };
    }
    case "slanted-right": {
      return { transform: "skewX(-10deg)" };
    }
    default: {
      return {};
    }
  }
};

export const BoxedCTAWithBackgroundImage = ({
  theme = defaultTheme,
  heading = "Special Offer",
  subtext = "Limited time deal just for you.",
  ctaLabel = "Get Deal",
  ctaHref = "#",
  backgroundSrc = "https://static.photos/city/600x300/3",
  backgroundAlt = "",
  variant = "default",
}: BoxedCTAWithBackgroundImageProps) => (
  <Html>
    <Head />
    <Preview>{heading}</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        fontFamily: theme.fontFamily,
        margin: 0,
      }}
    >
      <Container style={{ margin: "0 auto", maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "64px 0", ...skewStyle(variant) }}>
          <Section style={{ ...unskewStyle(variant) }}>
            <Section
              style={{
                border: `2px solid ${theme.colorBorder}`,
                borderRadius: theme.borderRadiusLg,
                padding: "32px",
              }}
            >
              <Section
                style={{
                  borderRadius: theme.borderRadiusLg,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Img
                  src={backgroundSrc}
                  alt={backgroundAlt}
                  width="600"
                  height="300"
                  style={{ height: "auto", objectFit: "cover", width: "100%" }}
                />
                <Section
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
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
                      fontSize: theme.fontSizeHeading,
                      fontWeight: theme.fontWeightBold,
                      lineHeight: 1.375,
                      margin: 0,
                    }}
                  >
                    {heading}
                  </Text>
                  <Text
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: theme.fontSizeBase,
                      margin: "12px 0 24px",
                    }}
                  >
                    {subtext}
                  </Text>
                  {ctaLabel && ctaHref ? (
                    <a
                      href={ctaHref}
                      style={{
                        backgroundColor: theme.colorPrimary,
                        borderRadius: theme.borderRadius,
                        color: theme.colorPrimaryForeground,
                        display: "inline-block",
                        fontSize: theme.fontSizeBase,
                        fontWeight: theme.fontWeightMedium,
                        padding: "12px 32px",
                        textDecoration: "none",
                      }}
                    >
                      {ctaLabel}
                    </a>
                  ) : null}
                </Section>
              </Section>
            </Section>
          </Section>
        </Section>
      </Container>
    </Body>
  </Html>
);

BoxedCTAWithBackgroundImage.PreviewProps = {
  backgroundAlt: "Background",
  backgroundSrc: "https://static.photos/city/600x300/4",
  ctaHref: "https://example.com",
  ctaLabel: "Get Deal",
  heading: "Special Offer",
  subtext: "Limited time deal just for you.",
  theme: defaultTheme,
  variant: "default",
} satisfies BoxedCTAWithBackgroundImageProps;
