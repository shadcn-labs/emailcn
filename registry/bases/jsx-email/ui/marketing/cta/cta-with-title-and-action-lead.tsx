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

export type CTASplitVariant = "default" | "slanted-left" | "slanted-right";

export interface CTASplitProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  variant?: CTASplitVariant;
}

const CTASplitSection = ({
  heading,
  primaryCtaHref,
  primaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
  subtext,
  theme,
  variant,
}: {
  heading: string;
  primaryCtaHref: string;
  primaryCtaLabel: string;
  secondaryCtaHref: string;
  secondaryCtaLabel: string;
  subtext: string;
  theme: EmailThemeTokens;
  variant: CTASplitVariant;
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
        {primaryCtaLabel && primaryCtaHref ? (
          <Button
            href={primaryCtaHref}
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
            {primaryCtaLabel}
          </Button>
        ) : null}
        {secondaryCtaLabel && secondaryCtaHref ? (
          <Button
            href={secondaryCtaHref}
            align="center"
            width={160}
            height={40}
            style={{
              backgroundColor: theme.button.secondary.backgroundColor,
              border: theme.button.secondary.border,
              borderRadius: theme.borderRadius,
              color: theme.button.secondary.color,
              display: "inline-block",
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "14px",
              fontWeight: theme.fontWeightMedium,
              height: "auto",
              padding: `${theme.button.secondary.paddingY} ${theme.button.secondary.paddingX}`,
              textDecoration: "none",
              width: "auto",
            }}
          >
            {secondaryCtaLabel}
          </Button>
        ) : null}
      </Column>
    </Row>
  </Section>
);

export const CtaWithTitleAndActionLead = ({
  theme = defaultTheme,
  heading = "Two Options",
  subtext = "Choose the path that works best for you.",
  primaryCtaLabel = "Get Started",
  primaryCtaHref = "#",
  secondaryCtaLabel = "Learn More",
  secondaryCtaHref = "#",
  variant = "default",
}: CTASplitProps) => (
  <Html>
    <Head />
    <Preview>cta split</Preview>
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
          <CTASplitSection
            heading={heading}
            primaryCtaHref={primaryCtaHref}
            primaryCtaLabel={primaryCtaLabel}
            secondaryCtaHref={secondaryCtaHref}
            secondaryCtaLabel={secondaryCtaLabel}
            subtext={subtext}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

CtaWithTitleAndActionLead.PreviewProps = {
  heading: "Ready to Begin?",
  primaryCtaHref: "https://example.com/signup",
  primaryCtaLabel: "Sign Up Free",
  secondaryCtaHref: "https://example.com/demo",
  secondaryCtaLabel: "Book a Demo",
  subtext:
    "Start building today with our free tier or book a personalized demo.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTASplitProps;
