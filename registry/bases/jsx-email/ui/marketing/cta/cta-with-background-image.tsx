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

export type CTAAnnouncementVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CTAAnnouncementProps {
  theme?: EmailThemeTokens;
  badge?: string;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: CTAAnnouncementVariant;
}

const CTAAnnouncementSection = ({
  badge,
  ctaHref,
  ctaLabel,
  heading,
  subtext,
  theme,
  variant,
}: {
  badge: string;
  ctaHref: string;
  ctaLabel: string;
  heading: string;
  subtext: string;
  theme: EmailThemeTokens;
  variant: CTAAnnouncementVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorPrimary,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeSm ?? "12px",
            fontWeight: theme.fontWeightBold,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "16px",
            textAlign: "center",
          }}
        >
          {badge}
        </Text>
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeXl ?? "20px",
            fontWeight: theme.fontWeightMedium,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "16px",
            textAlign: "center",
          }}
        >
          {heading}
        </Text>
        <Text
          style={{
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeBase ?? "14px",
            margin: 0,
            paddingBottom: theme.spacingLg ?? "24px",
            textAlign: "center",
          }}
        >
          {subtext}
        </Text>
        {ctaLabel && ctaHref ? (
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
              fontSize: theme.fontSizeSm ?? "14px",
              fontWeight: theme.fontWeightMedium,
              height: "auto",
              padding: `${theme.button.primary.paddingY} ${theme.button.primary.paddingX}`,
              textDecoration: "none",
              width: "auto",
            }}
          >
            {ctaLabel}
          </Button>
        ) : null}
      </Column>
    </Row>
  </Section>
);

export const CtaWithBackgroundImage = ({
  theme = defaultTheme,
  badge = "NEW",
  heading = "Introducing Our Latest Feature",
  subtext = "Built to help you move faster and ship better.",
  ctaLabel = "Learn More",
  ctaHref = "#",
  variant = "default",
}: CTAAnnouncementProps) => (
  <Html>
    <Head />
    <Preview>cta announcement</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <CTAAnnouncementSection
            badge={badge}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            heading={heading}
            subtext={subtext}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

CtaWithBackgroundImage.PreviewProps = {
  badge: "NEW",
  ctaHref: "https://example.com/feature",
  ctaLabel: "Learn More",
  heading: "Introducing Our Latest Feature",
  subtext: "Built to help you move faster and ship better.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAAnnouncementProps;
