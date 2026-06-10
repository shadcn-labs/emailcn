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

export type HeroSplitFullBleedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroSplitFullBleedProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  textBackgroundColor?: string;
  variant?: HeroSplitFullBleedVariant;
}

const SplitFullBleedCta = ({
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
      backgroundColor: theme.colorPrimary,
      borderRadius: theme.borderRadius,
      color: theme.colorPrimaryForeground,
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

const HeroSplitFullBleedSection = ({
  ctaHref,
  ctaLabel,
  heading,
  imageAlt,
  imageSrc,
  subheading,
  textBackgroundColor,
  theme,
  variant,
}: {
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  imageAlt: string;
  imageSrc: string;
  subheading: string;
  textBackgroundColor: string;
  theme: EmailThemeTokens;
  variant: HeroSplitFullBleedVariant;
}) => (
  <Section style={{ backgroundColor: textBackgroundColor, padding: "0" }}>
    <Row>
      <Column
        style={{ padding: "32px", verticalAlign: "middle", width: "50%" }}
      >
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeHeading,
            fontWeight: theme.fontWeightBold,
            margin: 0,
            paddingBottom: theme.spacingBase,
            textAlign: "left",
          }}
        >
          {heading}
        </Text>
        <Text
          style={{
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeLg,
            lineHeight: theme.lineHeightBase,
            margin: 0,
            paddingBottom: theme.spacingLg,
            textAlign: "left",
          }}
        >
          {subheading}
        </Text>
        {ctaLabel && ctaHref ? (
          <SplitFullBleedCta
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            theme={theme}
          />
        ) : null}
      </Column>
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
    </Row>
  </Section>
);

export const HeroSplitFullBleed = ({
  theme = defaultTheme,
  heading = "Full Bleed Split",
  subheading = "Full-width split layout: image bleeds on the right, text on the left.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  imageSrc = "https://static.photos/city/600x400/2",
  imageAlt = "full bleed",
  textBackgroundColor = "#f9fafb",
  variant = "default",
}: HeroSplitFullBleedProps) => (
  <Html>
    <Head />
    <Preview>hero split full bleed</Preview>
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
          <HeroSplitFullBleedSection
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            heading={heading}
            imageAlt={imageAlt}
            imageSrc={imageSrc}
            subheading={subheading}
            textBackgroundColor={textBackgroundColor}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

HeroSplitFullBleed.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Learn More",
  heading: "Hero Split Full Bleed",
  imageAlt: "full bleed image",
  imageSrc: "https://static.photos/city/600x400/3",
  subheading:
    "A full-bleed split layout with a text panel on the left and a zero-padding image on the right.",
  textBackgroundColor: "#f9fafb",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroSplitFullBleedProps;
