/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type HeroWithOverlayedContentVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithOverlayedContentProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  variant?: HeroWithOverlayedContentVariant;
}

const OverlayedContentCta = ({
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

const HeroWithOverlayedContentSection = ({
  backgroundImage,
  backgroundImageAlt,
  ctaHref,
  ctaLabel,
  heading,
  subheading,
  theme,
  variant,
}: {
  backgroundImage: string;
  backgroundImageAlt: string;
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  subheading: string;
  theme: EmailThemeTokens;
  variant: HeroWithOverlayedContentVariant;
}) => {
  const sectionPadding =
    variant === "slanted-left"
      ? "80px 0 60px"
      : variant === "slanted-right"
        ? "60px 0 80px"
        : "60px 0";

  return (
    <Section
      style={{
        backgroundColor: theme.colorBackgroundMuted,
        padding: sectionPadding,
      }}
    >
      <Row>
        <Column>
          <Link href="#">
            <Img
              alt={backgroundImageAlt}
              height="200px"
              src={backgroundImage}
              width="100%"
              style={{
                display: "block",
                margin: "0 auto",
                maxWidth: "100%",
                paddingBottom: theme.spacingBase,
              }}
            />
          </Link>
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
          {ctaLabel && ctaHref ? (
            <OverlayedContentCta
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

export const HeroWithOverlayedContent = ({
  theme = defaultTheme,
  heading = "Large Heading Over Background",
  subheading = "Content layered on top of a background image or color block.",
  ctaLabel = "Learn More",
  ctaHref = "#",
  backgroundImage = "https://static.photos/business/600x200/2",
  backgroundImageAlt = "background",
  variant = "default",
}: HeroWithOverlayedContentProps) => (
  <Html>
    <Head />
    <Preview>hero overlayed content</Preview>
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
          <HeroWithOverlayedContentSection
            backgroundImage={backgroundImage}
            backgroundImageAlt={backgroundImageAlt}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            heading={heading}
            subheading={subheading}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

HeroWithOverlayedContent.PreviewProps = {
  backgroundImage: "https://static.photos/business/600x200/3",
  backgroundImageAlt: "background",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Hero with Overlayed Content",
  subheading:
    "A large heading overlapping a background image with a call to action.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithOverlayedContentProps;
