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

export type CTAAccentVariant = "default" | "slanted-left" | "slanted-right";

export interface CTAAccentProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: CTAAccentVariant;
}

const CTAAccentSection = ({
  ctaHref,
  ctaLabel,
  heading,
  subtext,
  theme,
  variant,
}: {
  ctaHref: string;
  ctaLabel: string;
  heading: string;
  subtext: string;
  theme: EmailThemeTokens;
  variant: CTAAccentVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackgroundMuted,
      border: `1px solid ${theme.colorBorder ?? "#e5e7eb"}`,
      borderRadius: theme.borderRadius,
      padding: theme.spacingXl ?? "24px",
    }}
  >
    <Row>
      <Column>
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
              padding: `${theme.spacingBase ?? "16px"} ${theme.spacingLg ?? "24px"}`,
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

export const BoxedCtaWithBackgroundImage = ({
  theme = defaultTheme,
  heading = "Featured Announcement",
  subtext = "Check out what's new and exciting.",
  ctaLabel = "Learn More",
  ctaHref = "#",
  variant = "default",
}: CTAAccentProps) => (
  <Html>
    <Head />
    <Preview>cta accent</Preview>
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
          <CTAAccentSection
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

BoxedCtaWithBackgroundImage.PreviewProps = {
  ctaHref: "https://example.com/learn",
  ctaLabel: "Learn More",
  heading: "New Features Available",
  subtext: "Discover what's new in our latest release.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAAccentProps;
