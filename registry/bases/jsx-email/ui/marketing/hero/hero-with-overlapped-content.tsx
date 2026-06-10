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

export type HeroWithOverlappedContentVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithOverlappedContentProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  contentBackgroundColor?: string;
  contentTextColor?: string;
  variant?: HeroWithOverlappedContentVariant;
}

const OverlappedContentCta = ({
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

const HeroWithOverlappedContentSection = ({
  contentBackgroundColor,
  contentTextColor,
  ctaHref,
  ctaLabel,
  heading,
  imageAlt,
  imageSrc,
  subheading,
  theme,
  variant,
}: {
  contentBackgroundColor: string;
  contentTextColor: string;
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  imageAlt: string;
  imageSrc: string;
  subheading: string;
  theme: EmailThemeTokens;
  variant: HeroWithOverlappedContentVariant;
}) => (
  <Section style={{ backgroundColor: theme.colorBackground, padding: "0" }}>
    <Row>
      <Column style={{ padding: "0" }}>
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
        style={{
          backgroundColor: contentBackgroundColor,
          padding: "32px",
          paddingTop: "24px",
        }}
      >
        <Text
          style={{
            color: contentTextColor,
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
            color: contentTextColor,
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
          <OverlappedContentCta
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            theme={theme}
          />
        ) : null}
      </Column>
    </Row>
  </Section>
);

export const HeroWithOverlappedContent = ({
  theme = defaultTheme,
  heading = "Overlapped Content",
  subheading = "A content box overlaps the image below with a distinct background.",
  ctaLabel = "Read More",
  ctaHref = "#",
  imageSrc = "https://static.photos/business/600x250/2",
  imageAlt = "top image",
  contentBackgroundColor = "#ffffff",
  contentTextColor = "#111827",
  variant = "default",
}: HeroWithOverlappedContentProps) => (
  <Html>
    <Head />
    <Preview>hero overlapped content</Preview>
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
          <HeroWithOverlappedContentSection
            contentBackgroundColor={contentBackgroundColor}
            contentTextColor={contentTextColor}
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

HeroWithOverlappedContent.PreviewProps = {
  contentBackgroundColor: "#ffffff",
  contentTextColor: "#111827",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Hero with Overlapped Content",
  imageAlt: "top image",
  imageSrc: "https://static.photos/business/600x250/3",
  subheading:
    "An image at the top with a content box that visually overlaps it using padding adjustments.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithOverlappedContentProps;
