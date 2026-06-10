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

export type HeroWithSlantedSplitVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithSlantedSplitProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  textBackgroundColor?: string;
  decorativeColor?: string;
  variant?: HeroWithSlantedSplitVariant;
}

const SlantedSplitCta = ({
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

const HeroWithSlantedSplitSection = ({
  ctaHref,
  ctaLabel,
  decorativeColor,
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
  decorativeColor: string;
  heading: string;
  imageAlt: string;
  imageSrc: string;
  subheading: string;
  textBackgroundColor: string;
  theme: EmailThemeTokens;
  variant: HeroWithSlantedSplitVariant;
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
          <SlantedSplitCta
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
      {variant !== "default" ? (
        <Column style={{ padding: "0" }}>
          <Section
            style={{ backgroundColor: decorativeColor, padding: "4px 0" }}
          >
            <Row></Row>
          </Section>
        </Column>
      ) : null}
    </Row>
  </Section>
);

export const HeroWithSlantedSplit = ({
  theme = defaultTheme,
  heading = "Slanted Split",
  subheading = "Split layout with an angled decorative divider.",
  ctaLabel = "Discover",
  ctaHref = "#",
  imageSrc = "https://static.photos/city/600x400/2",
  imageAlt = "angled split",
  textBackgroundColor = "#f9fafb",
  decorativeColor = "#111827",
  variant = "default",
}: HeroWithSlantedSplitProps) => (
  <Html>
    <Head />
    <Preview>hero slanted split</Preview>
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
          <HeroWithSlantedSplitSection
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            decorativeColor={decorativeColor}
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

HeroWithSlantedSplit.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Learn More",
  decorativeColor: "#111827",
  heading: "Hero with Slanted Split",
  imageAlt: "angled split",
  imageSrc: "https://static.photos/city/600x400/3",
  subheading:
    "A split layout with an angled decorative divider accent between text and image panels.",
  textBackgroundColor: "#f9fafb",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithSlantedSplitProps;
