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

export type HeroSplitContainedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroSplitContainedProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  align?: "left" | "center";
  variant?: HeroSplitContainedVariant;
}

const SplitContainedCta = ({
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

const HeroSplitContainedSection = ({
  align,
  ctaHref,
  ctaLabel,
  heading,
  imageAlt,
  imageSrc,
  subheading,
  theme,
  variant,
}: {
  align: "center" | "left";
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  imageAlt: string;
  imageSrc: string;
  subheading: string;
  theme: EmailThemeTokens;
  variant: HeroSplitContainedVariant;
}) => (
  <Section style={{ backgroundColor: theme.colorBackground, padding: "0" }}>
    <Row>
      <Column
        style={{
          padding: "32px 16px 32px 32px",
          verticalAlign: "middle",
          width: "50%",
        }}
      >
        <Text
          style={{
            color: theme.colorText,
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
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeLg,
            lineHeight: theme.lineHeightBase,
            margin: 0,
            paddingBottom: theme.spacingLg,
            textAlign: align,
          }}
        >
          {subheading}
        </Text>
        {ctaLabel && ctaHref ? (
          <SplitContainedCta
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

export const HeroSplitContained = ({
  theme = defaultTheme,
  heading = "Split Contained Hero",
  subheading = "Text on the left, image on the right — evenly split.",
  ctaLabel = "Learn More",
  ctaHref = "#",
  imageSrc = "https://static.photos/city/600x400/2",
  imageAlt = "split image",
  align = "left",
  variant = "default",
}: HeroSplitContainedProps) => (
  <Html>
    <Head />
    <Preview>hero split contained</Preview>
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
          <HeroSplitContainedSection
            align={align}
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

HeroSplitContained.PreviewProps = {
  align: "left",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Split Contained",
  imageAlt: "split contained",
  imageSrc: "https://static.photos/city/600x400/3",
  subheading:
    "A balanced split layout with text on the left and an image on the right.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroSplitContainedProps;
