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

export type PricingSideBySideVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface PricingSideBySideProps {
  theme?: EmailThemeTokens;
  plans?: {
    name: string;
    price: string;
    period: string;
    features: string[];
    ctaLabel: string;
    ctaHref: string;
    highlighted?: boolean;
  }[];
  variant?: PricingSideBySideVariant;
}

const PricingSideBySideSection = ({
  plans,
  theme,
  variant,
}: {
  plans: PricingSideBySideProps["plans"];
  theme: EmailThemeTokens;
  variant: PricingSideBySideVariant;
}) => {
  const items = (plans ?? []).slice(0, 2);

  return (
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: `${theme.spacingXl ?? "48px"} 0`,
      }}
    >
      <Row>
        {items.map((plan, i) => (
          <Column
            key={plan.name + i}
            style={{
              padding: theme.spacingBase ?? "24px",
              verticalAlign: "top",
              width: `${100 / Math.max(items.length, 1)}%`,
            }}
          >
            <Section
              style={{
                backgroundColor: plan.highlighted
                  ? theme.colorBackgroundMuted
                  : theme.colorBackground,
                border: plan.highlighted
                  ? `2px solid ${theme.colorPrimary}`
                  : `1px solid ${theme.colorBorder ?? "#e5e7eb"}`,
                borderRadius: theme.borderRadius,
                padding: theme.spacingXl ?? "24px",
              }}
            >
              <Row>
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
                  {plan.name}
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
                  {plan.price}
                  <span
                    style={{
                      color: theme.colorTextMuted,
                      fontSize: theme.fontSizeSm ?? "14px",
                    }}
                  >
                    {plan.period}
                  </span>
                </Text>
                {plan.features.map((f, fi) => (
                  <Text
                    key={plan.name + f + fi}
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
                  href={plan.ctaHref}
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
                  {plan.ctaLabel}
                </Button>
              </Row>
            </Section>
          </Column>
        ))}
      </Row>
    </Section>
  );
};

export const FullWidthSinglePricing = ({
  theme = defaultTheme,
  plans = [
    {
      ctaHref: "#",
      ctaLabel: "Get Started",
      features: ["1 user", "5 projects"],
      name: "Basic",
      period: "/mo",
      price: "$9",
    },
    {
      ctaHref: "#",
      ctaLabel: "Get Started",
      features: ["5 users", "Unlimited projects", "Priority support"],
      highlighted: true,
      name: "Pro",
      period: "/mo",
      price: "$29",
    },
  ],
  variant = "default",
}: PricingSideBySideProps) => (
  <Html>
    <Head />
    <Preview>pricing side-by-side</Preview>
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
          <PricingSideBySideSection
            plans={plans}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

FullWidthSinglePricing.PreviewProps = {
  plans: [
    {
      ctaHref: "https://example.com/signup",
      ctaLabel: "Get Started",
      features: ["1 user", "5 projects", "Basic support"],
      name: "Basic",
      period: "/mo",
      price: "$9",
    },
    {
      ctaHref: "https://example.com/signup",
      ctaLabel: "Get Started",
      features: [
        "5 users",
        "Unlimited projects",
        "Priority support",
        "Custom branding",
      ],
      highlighted: true,
      name: "Pro",
      period: "/mo",
      price: "$29",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies PricingSideBySideProps;
