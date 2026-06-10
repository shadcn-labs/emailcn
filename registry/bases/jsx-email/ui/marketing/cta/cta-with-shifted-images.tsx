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

export type CTAFilledVariant = "default" | "slanted-left" | "slanted-right";

export interface CTAFilledProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: CTAFilledVariant;
}

const CTAFilledSection = ({
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
  variant: CTAFilledVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorPrimary,
      borderRadius: theme.borderRadius,
      padding: theme.spacingXl ?? "24px",
    }}
  >
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorPrimaryForeground,
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
            color: theme.colorPrimaryForeground,
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
              backgroundColor: theme.colorPrimaryForeground,
              borderRadius: theme.borderRadius,
              color: theme.colorPrimary,
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

export const CtaWithShiftedImages = ({
  theme = defaultTheme,
  heading = "Ready to get started?",
  subtext = "Join thousands of happy users.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "default",
}: CTAFilledProps) => (
  <Html>
    <Head />
    <Preview>cta filled</Preview>
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
          <CTAFilledSection
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

CtaWithShiftedImages.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Start Building Free",
  heading: "Ready to get started?",
  subtext: "Join 10,000+ developers building with our tools.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAFilledProps;
