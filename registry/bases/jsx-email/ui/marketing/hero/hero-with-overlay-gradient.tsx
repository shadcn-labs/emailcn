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

export type HeroWithOverlayGradientVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithOverlayGradientProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundColor?: string;
  textColor?: string;
  variant?: HeroWithOverlayGradientVariant;
}

const OverlayGradientCta = ({
  ctaHref,
  ctaLabel,
  theme,
}: {
  ctaHref: string;
  ctaLabel: string;
  theme: EmailThemeTokens;
}) => (
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
      fontSize: theme.fontSizeSm,
      fontWeight: theme.fontWeightMedium,
      height: "auto",
      padding: `${theme.button.primary.paddingY} ${theme.button.primary.paddingX}`,
      textDecoration: "none",
      width: "auto",
    }}
  >
    {ctaLabel}
  </Button>
);

const HeroWithOverlayGradientSection = ({
  backgroundColor,
  ctaHref,
  ctaLabel,
  heading,
  subheading,
  textColor,
  theme,
  variant,
}: {
  backgroundColor: string;
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  subheading: string;
  textColor: string;
  theme: EmailThemeTokens;
  variant: HeroWithOverlayGradientVariant;
}) => {
  const sectionPadding =
    variant === "slanted-left"
      ? "80px 0 60px"
      : variant === "slanted-right"
        ? "60px 0 80px"
        : "80px 0";

  return (
    <Section style={{ backgroundColor, padding: sectionPadding }}>
      <Row>
        <Column>
          <Text
            style={{
              color: textColor,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeHeading,
              fontWeight: theme.fontWeightBold,
              margin: 0,
              paddingBottom: theme.spacingBase,
              textAlign: "center",
            }}
          >
            {heading}
          </Text>
          <Text
            style={{
              color: textColor,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeLg,
              lineHeight: theme.lineHeightBase,
              margin: 0,
              paddingBottom: theme.spacingXl,
              textAlign: "center",
            }}
          >
            {subheading}
          </Text>
          {ctaLabel && ctaHref ? (
            <OverlayGradientCta
              ctaHref={ctaHref}
              ctaLabel={ctaLabel}
              theme={theme}
            />
          ) : null}
        </Column>
      </Row>
    </Section>
  );
};

export const HeroWithOverlayGradient = ({
  theme = defaultTheme,
  heading = "Gradient Overlay Hero",
  subheading = "A solid background color simulating a gradient overlay with light text.",
  ctaLabel = "Discover",
  ctaHref = "#",
  backgroundColor = "#1e3a5f",
  textColor = "#ffffff",
  variant = "default",
}: HeroWithOverlayGradientProps) => (
  <Html>
    <Head />
    <Preview>hero overlay gradient</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorText,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <HeroWithOverlayGradientSection
            backgroundColor={backgroundColor}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            heading={heading}
            subheading={subheading}
            textColor={textColor}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

HeroWithOverlayGradient.PreviewProps = {
  backgroundColor: "#1e3a5f",
  ctaHref: "https://example.com",
  ctaLabel: "Learn More",
  heading: "Hero with Overlay Gradient",
  subheading:
    "A solid email-safe background color with light text overlay and a prominent CTA.",
  textColor: "#ffffff",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithOverlayGradientProps;
