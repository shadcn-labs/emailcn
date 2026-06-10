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

export type HeroWithImageGridVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithImageGridProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image1Src?: string;
  image1Alt?: string;
  image2Src?: string;
  image2Alt?: string;
  image3Src?: string;
  image3Alt?: string;
  variant?: HeroWithImageGridVariant;
}

const ImageGridCta = ({
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

const HeroWithImageGridSection = ({
  ctaHref,
  ctaLabel,
  heading,
  image1Alt,
  image1Src,
  image2Alt,
  image2Src,
  image3Alt,
  image3Src,
  subheading,
  theme,
  variant,
}: {
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  image1Alt: string;
  image1Src: string;
  image2Alt: string;
  image2Src: string;
  image3Alt: string;
  image3Src: string;
  subheading: string;
  theme: EmailThemeTokens;
  variant: HeroWithImageGridVariant;
}) => (
  <Section
    style={{ backgroundColor: theme.colorBackground, padding: "48px 0" }}
  >
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorText,
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
            color: theme.colorTextMuted,
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
      </Column>
      <Column style={{ padding: "0 8px", width: "33.33%" }}>
        <Img
          alt={image1Alt}
          src={image1Src}
          width="100%"
          style={{
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
            paddingBottom: theme.spacingBase,
          }}
        />
      </Column>
      <Column style={{ padding: "0 8px", width: "33.33%" }}>
        <Img
          alt={image2Alt}
          src={image2Src}
          width="100%"
          style={{
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
            paddingBottom: theme.spacingBase,
          }}
        />
      </Column>
      <Column style={{ padding: "0 8px", width: "33.33%" }}>
        <Img
          alt={image3Alt}
          src={image3Src}
          width="100%"
          style={{
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
            paddingBottom: theme.spacingBase,
          }}
        />
      </Column>
      <Column>
        {ctaLabel && ctaHref ? (
          <ImageGridCta ctaHref={ctaHref} ctaLabel={ctaLabel} theme={theme} />
        ) : null}
      </Column>
    </Row>
  </Section>
);

export const HeroWithImageGrid = ({
  theme = defaultTheme,
  heading = "Image Grid Hero",
  subheading = "A hero heading paired with a grid of images.",
  ctaLabel = "View Gallery",
  ctaHref = "#",
  image1Src = "https://static.photos/city/300x200/2",
  image1Alt = "image 1",
  image2Src = "https://static.photos/city/300x200/3",
  image2Alt = "image 2",
  image3Src = "https://static.photos/city/300x200/4",
  image3Alt = "image 3",
  variant = "default",
}: HeroWithImageGridProps) => (
  <Html>
    <Head />
    <Preview>hero image grid</Preview>
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
          <HeroWithImageGridSection
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            heading={heading}
            image1Alt={image1Alt}
            image1Src={image1Src}
            image2Alt={image2Alt}
            image2Src={image2Src}
            image3Alt={image3Alt}
            image3Src={image3Src}
            subheading={subheading}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

HeroWithImageGrid.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Browse Collection",
  heading: "Hero with Image Grid",
  image1Alt: "product 1",
  image1Src: "https://static.photos/city/300x200/5",
  image2Alt: "product 2",
  image2Src: "https://static.photos/city/300x200/6",
  image3Alt: "product 3",
  image3Src: "https://static.photos/city/300x200/7",
  subheading: "A prominent heading followed by a three-column image grid.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithImageGridProps;
