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

export type CTAWithBackgroundImageVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CTAWithBackgroundImageProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundSrc?: string;
  backgroundAlt?: string;
  variant?: CTAWithBackgroundImageVariant;
}

const skewStyle = (variant: CTAWithBackgroundImageVariant): CSSProperties => {
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

const unskewStyle = (variant: CTAWithBackgroundImageVariant): CSSProperties => {
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

export const CTAWithBackgroundImage = ({
  theme = defaultTheme,
  heading = "Limited Offer",
  subtext = "Get 50% off your first month.",
  ctaLabel = "Claim Offer",
  ctaHref = "#",
  backgroundSrc = "https://static.photos/city/600x400/3",
  backgroundAlt = "",
  variant = "default",
}: CTAWithBackgroundImageProps) => (
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
          <Section
            style={{
              borderRadius: theme.borderRadiusLg,
              overflow: "hidden",
              position: "relative",
              ...unskewStyle(variant),
            }}
          >
            <Img
              src={backgroundSrc}
              alt={backgroundAlt}
              width="600"
              height="400"
              style={{ height: "auto", objectFit: "cover", width: "100%" }}
            />
            <Section
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                bottom: 0,
                left: 0,
                padding: "48px",
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
                  fontSize: theme.fontSizeLg,
                  margin: "16px 0 32px",
                }}
              >
                {subtext}
              </Text>
              {ctaLabel && ctaHref ? (
                <a
                  href={ctaHref}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: theme.borderRadius,
                    color: "#111827",
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
      </Container>
    </Body>
  </Html>
);

CTAWithBackgroundImage.PreviewProps = {
  backgroundAlt: "Background",
  backgroundSrc: "https://static.photos/city/600x400/4",
  ctaHref: "https://example.com",
  ctaLabel: "Claim Offer",
  heading: "Limited Offer",
  subtext: "Get 50% off your first month.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAWithBackgroundImageProps;
