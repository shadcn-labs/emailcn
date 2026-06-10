/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type HeroAlignedOverlayVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroAlignedOverlayProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  backgroundColor?: string;
  textColor?: string;
  align?: "left" | "center";
  variant?: HeroAlignedOverlayVariant;
}

const AlignedOverlayCta = ({
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
    align="left"
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

const HeroAlignedOverlaySection = ({
  align,
  backgroundImage,
  backgroundImageAlt,
  ctaHref,
  ctaLabel,
  heading,
  subheading,
  textColor,
  theme,
  variant,
}: {
  align: "center" | "left";
  backgroundImage: string;
  backgroundImageAlt: string;
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  subheading: string;
  textColor: string;
  theme: EmailThemeTokens;
  variant: HeroAlignedOverlayVariant;
}) => (
  <Section
    style={{ backgroundColor: theme.colorBackgroundMuted, padding: "48px 0" }}
  >
    <Row>
      <Column>
        <Img
          alt={backgroundImageAlt}
          src={backgroundImage}
          width="100%"
          style={{
            display: "block",
            maxWidth: "100%",
            paddingBottom: theme.spacingBase,
          }}
        />
        <Text
          style={{
            color: textColor,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeHeading,
            fontWeight: theme.fontWeightBold,
            margin: 0,
            paddingBottom: theme.spacingBase,
            textAlign: align,
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
            textAlign: align,
          }}
        >
          {subheading}
        </Text>
        {ctaLabel && ctaHref ? (
          <AlignedOverlayCta
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            theme={theme}
          />
        ) : null}
      </Column>
    </Row>
  </Section>
);

export const HeroAlignedOverlay = ({
  theme = defaultTheme,
  heading = "Aligned Overlay",
  subheading = "Background image with left-aligned text overlay.",
  ctaLabel = "Shop Now",
  ctaHref = "#",
  backgroundImage = "https://static.photos/business/600x250/2",
  backgroundImageAlt = "background",
  backgroundColor = "#f9fafb",
  textColor = "#111827",
  align = "left",
  variant = "default",
}: HeroAlignedOverlayProps) => {
  void backgroundColor;

  return (
    <Html>
      <Head />
      <Preview>hero aligned overlay</Preview>
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
            <HeroAlignedOverlaySection
              align={align}
              backgroundImage={backgroundImage}
              backgroundImageAlt={backgroundImageAlt}
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
};

HeroAlignedOverlay.PreviewProps = {
  align: "left",
  backgroundColor: "#f9fafb",
  backgroundImage: "https://static.photos/business/600x250/3",
  backgroundImageAlt: "background image",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Hero Aligned Overlay",
  subheading:
    "A background image with left-aligned heading, subheading, and CTA overlaid on top.",
  textColor: "#111827",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroAlignedOverlayProps;
