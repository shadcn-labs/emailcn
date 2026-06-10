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

export type PricingBasicVariant = "default" | "slanted-left" | "slanted-right";

export interface PricingBasicProps {
  theme?: EmailThemeTokens;
  name?: string;
  price?: string;
  period?: string;
  features?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  variant?: PricingBasicVariant;
}

const PricingBasicSection = ({
  ctaHref,
  ctaLabel,
  features,
  name,
  period,
  price,
  theme,
  variant,
}: {
  ctaHref: string;
  ctaLabel: string;
  features: string[];
  name: string;
  period: string;
  price: string;
  theme: EmailThemeTokens;
  variant: PricingBasicVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
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
            fontSize: theme.fontSizeLg ?? "16px",
            fontWeight: theme.fontWeightMedium,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "16px",
            textAlign: "center",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeHeading,
            fontWeight: theme.fontWeightBold,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "16px",
            textAlign: "center",
          }}
        >
          {price}
          <span
            style={{
              color: theme.colorTextMuted,
              fontSize: theme.fontSizeSm ?? "14px",
            }}
          >
            {period}
          </span>
        </Text>
        {features.map((f, i) => (
          <Text
            key={name + f + i}
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase ?? "14px",
              lineHeight: theme.lineHeightBase,
              margin: 0,
              paddingBottom: theme.spacingBase ?? "8px",
              textAlign: "center",
            }}
          >
            &bull; {f}
          </Text>
        ))}
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
      </Column>
    </Row>
  </Section>
);

export const TwoColumnsPricingTableWithGaps = ({
  theme = defaultTheme,
  name = "Basic",
  price = "$9",
  period = "/mo",
  features = ["1 user", "5 projects"],
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "default",
}: PricingBasicProps) => (
  <Html>
    <Head />
    <Preview>pricing basic</Preview>
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
          <PricingBasicSection
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            features={features}
            name={name}
            period={period}
            price={price}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

TwoColumnsPricingTableWithGaps.PreviewProps = {
  ctaHref: "https://example.com/signup",
  ctaLabel: "Get Started",
  features: ["1 user", "5 projects", "Basic support"],
  name: "Basic",
  period: "/mo",
  price: "$9",
  theme: defaultTheme,
  variant: "default",
} satisfies PricingBasicProps;
