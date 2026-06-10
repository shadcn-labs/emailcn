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

export type HeroOverlayedSplitVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroOverlayedSplitProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlayBackgroundColor?: string;
  overlayTextColor?: string;
  variant?: HeroOverlayedSplitVariant;
}

const OverlayedSplitCta = ({
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

const HeroOverlayedSplitSection = ({
  ctaHref,
  ctaLabel,
  heading,
  imageAlt,
  imageSrc,
  overlayBackgroundColor,
  overlayTextColor,
  subheading,
  theme,
  variant,
}: {
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  imageAlt: string;
  imageSrc: string;
  overlayBackgroundColor: string;
  overlayTextColor: string;
  subheading: string;
  theme: EmailThemeTokens;
  variant: HeroOverlayedSplitVariant;
}) => (
  <Section style={{ backgroundColor: overlayBackgroundColor, padding: "0" }}>
    <Row>
      <Column style={{ padding: "0", verticalAlign: "middle", width: "50%" }}>
        <Img
          alt={imageAlt}
          src={imageSrc}
          width="100%"
          style={{
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
            padding: "0",
          }}
        />
      </Column>
      <Column
        style={{ padding: "32px", verticalAlign: "middle", width: "50%" }}
      >
        <Text
          style={{
            color: overlayTextColor,
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
            color: overlayTextColor,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeLg,
            lineHeight: theme.lineHeightBase,
            margin: 0,
            paddingBottom: theme.spacingLg,
            textAlign: "center",
          }}
        >
          {subheading}
        </Text>
        {ctaLabel && ctaHref ? (
          <OverlayedSplitCta
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            theme={theme}
          />
        ) : null}
      </Column>
    </Row>
  </Section>
);

export const HeroOverlayedSplit = ({
  theme = defaultTheme,
  heading = "Overlayed Split",
  subheading = "Text overlays a dark background beside the image.",
  ctaLabel = "Explore",
  ctaHref = "#",
  imageSrc = "https://static.photos/city/600x400/2",
  imageAlt = "overlayed split",
  overlayBackgroundColor = "#111827",
  overlayTextColor = "#ffffff",
  variant = "default",
}: HeroOverlayedSplitProps) => (
  <Html>
    <Head />
    <Preview>hero overlayed split</Preview>
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
          <HeroOverlayedSplitSection
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            heading={heading}
            imageAlt={imageAlt}
            imageSrc={imageSrc}
            overlayBackgroundColor={overlayBackgroundColor}
            overlayTextColor={overlayTextColor}
            subheading={subheading}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

HeroOverlayedSplit.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Learn More",
  heading: "Hero Overlayed Split",
  imageAlt: "overlayed split",
  imageSrc: "https://static.photos/city/600x400/3",
  overlayBackgroundColor: "#111827",
  overlayTextColor: "#ffffff",
  subheading:
    "A split layout where the text overlays a dark background panel beside the image.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroOverlayedSplitProps;
