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

export type HeroBlockOverlayVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroBlockOverlayProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  overlayColor?: string;
  textColor?: string;
  variant?: HeroBlockOverlayVariant;
}

const BlockOverlayCta = ({
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

const HeroBlockOverlaySection = ({
  ctaHref,
  ctaLabel,
  heading,
  overlayColor,
  subheading,
  textColor,
  theme,
  variant,
}: {
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  overlayColor: string;
  subheading: string;
  textColor: string;
  theme: EmailThemeTokens;
  variant: HeroBlockOverlayVariant;
}) => (
  <Section style={{ backgroundColor: overlayColor, padding: "80px 0" }}>
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
          <BlockOverlayCta
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            theme={theme}
          />
        ) : null}
      </Column>
    </Row>
  </Section>
);

export const HeroBlockOverlay = ({
  theme = defaultTheme,
  heading = "Block Overlay Hero",
  subheading = "Dark background section with light text overlaid.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  overlayColor = "#111827",
  textColor = "#ffffff",
  variant = "default",
}: HeroBlockOverlayProps) => (
  <Html>
    <Head />
    <Preview>hero block overlay</Preview>
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
          <HeroBlockOverlaySection
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            heading={heading}
            overlayColor={overlayColor}
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

HeroBlockOverlay.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Learn More",
  heading: "Hero Block Overlay",
  overlayColor: "#111827",
  subheading:
    "A dark overlay section with light text and a contrasting call-to-action button.",
  textColor: "#ffffff",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroBlockOverlayProps;
