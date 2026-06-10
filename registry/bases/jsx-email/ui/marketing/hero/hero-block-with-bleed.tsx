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

export type HeroBlockWithBleedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroBlockWithBleedProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  backgroundColor?: string;
  variant?: HeroBlockWithBleedVariant;
}

const BlockBleedCta = ({
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

const HeroBlockWithBleedSection = ({
  backgroundColor,
  ctaHref,
  ctaLabel,
  heading,
  imageAlt,
  imageSrc,
  subheading,
  theme,
  variant,
}: {
  backgroundColor: string;
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  imageAlt: string;
  imageSrc: string;
  subheading: string;
  theme: EmailThemeTokens;
  variant: HeroBlockWithBleedVariant;
}) => (
  <Section style={{ backgroundColor, padding: "48px 0" }}>
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorPrimaryForeground,
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
            color: theme.colorPrimaryForeground,
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
          <BlockBleedCta ctaHref={ctaHref} ctaLabel={ctaLabel} theme={theme} />
        ) : null}
      </Column>
      <Column style={{ padding: "24px 0 0" }}>
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

export const HeroBlockWithBleed = ({
  theme = defaultTheme,
  heading = "Block with Bleed",
  subheading = "Full-width background with an image that bleeds to the edges.",
  ctaLabel = "Explore",
  ctaHref = "#",
  imageSrc = "https://static.photos/business/600x300/2",
  imageAlt = "bleed image",
  backgroundColor = "#111827",
  variant = "default",
}: HeroBlockWithBleedProps) => (
  <Html>
    <Head />
    <Preview>hero block bleed</Preview>
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
          <HeroBlockWithBleedSection
            backgroundColor={backgroundColor}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            heading={heading}
            imageAlt={imageAlt}
            imageSrc={imageSrc}
            subheading={subheading}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

HeroBlockWithBleed.PreviewProps = {
  backgroundColor: "#111827",
  ctaHref: "https://example.com",
  ctaLabel: "Shop Now",
  heading: "Hero Block with Bleed",
  imageAlt: "bleed image",
  imageSrc: "https://static.photos/business/600x300/3",
  subheading:
    "A full-width dark background section with a heading and a bleeding image below.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroBlockWithBleedProps;
