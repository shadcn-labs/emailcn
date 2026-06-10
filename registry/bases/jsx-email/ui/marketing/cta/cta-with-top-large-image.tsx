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

export type CTAWideVariant = "default" | "slanted-left" | "slanted-right";

export interface CTAWideProps {
  theme?: EmailThemeTokens;
  heading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: CTAWideVariant;
}

const CTAWideSection = ({
  ctaHref,
  ctaLabel,
  heading,
  theme,
  variant,
}: {
  ctaHref: string;
  ctaLabel: string;
  heading: string;
  theme: EmailThemeTokens;
  variant: CTAWideVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackgroundMuted,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeHeading,
            fontWeight: theme.fontWeightBold,
            margin: 0,
            paddingBottom: theme.spacingLg ?? "32px",
            textAlign: "center",
          }}
        >
          {heading}
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

export const CtaWithTopLargeImage = ({
  theme = defaultTheme,
  heading = "Start Building Today",
  ctaLabel = "Get Started Free",
  ctaHref = "#",
  variant = "default",
}: CTAWideProps) => (
  <Html>
    <Head />
    <Preview>cta wide</Preview>
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
          <CTAWideSection
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            heading={heading}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

CtaWithTopLargeImage.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Get Started Free",
  heading: "Start Building Today",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAWideProps;
