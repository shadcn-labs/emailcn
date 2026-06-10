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

export type CTADarkVariant = "default" | "slanted-left" | "slanted-right";

export interface CTADarkProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: CTADarkVariant;
}

const CTADarkSection = ({
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
  variant: CTADarkVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorText,
      borderRadius: theme.borderRadius,
      padding: theme.spacingXl ?? "24px",
    }}
  >
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorBackground,
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
              backgroundColor: theme.colorBackground,
              borderRadius: theme.borderRadius,
              color: theme.colorText,
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

export const CtaWithImageStrip = ({
  theme = defaultTheme,
  heading = "Exclusive Access",
  subtext = "Join our premium tier for exclusive features.",
  ctaLabel = "Upgrade Now",
  ctaHref = "#",
  variant = "default",
}: CTADarkProps) => (
  <Html>
    <Head />
    <Preview>cta dark</Preview>
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
          <CTADarkSection
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

CtaWithImageStrip.PreviewProps = {
  ctaHref: "https://example.com/upgrade",
  ctaLabel: "Upgrade Now",
  heading: "Go Premium",
  subtext: "Unlock advanced features and priority support.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTADarkProps;
