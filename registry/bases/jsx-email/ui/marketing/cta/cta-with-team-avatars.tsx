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

export type CTAOutlineVariant = "default" | "slanted-left" | "slanted-right";

export interface CTAOutlineProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: CTAOutlineVariant;
}

const CTAOutlineSection = ({
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
  variant: CTAOutlineVariant;
}) => (
  <Section
    style={{
      backgroundColor: "transparent",
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

export const CtaWithTeamAvatars = ({
  theme = defaultTheme,
  heading = "Special Offer",
  subtext = "Limited time deal just for you.",
  ctaLabel = "Shop Now",
  ctaHref = "#",
  variant = "default",
}: CTAOutlineProps) => (
  <Html>
    <Head />
    <Preview>cta outline</Preview>
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
          <CTAOutlineSection
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

CtaWithTeamAvatars.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Shop Now",
  heading: "Limited Time Offer",
  subtext: "Save 20% on your first order with code WELCOME20.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAOutlineProps;
