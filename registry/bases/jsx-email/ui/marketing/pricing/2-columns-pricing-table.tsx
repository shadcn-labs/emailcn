/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
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

export type TwoColumnsPricingTableVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TwoColumnsPricingTableProps {
  theme?: EmailThemeTokens;
  heading?: string;
  plan1?: string;
  price1?: string;
  period1?: string;
  desc1?: string;
  feature1_1?: string;
  feature1_2?: string;
  feature1_3?: string;
  ctaLabel1?: string;
  ctaHref1?: string;
  plan2?: string;
  price2?: string;
  period2?: string;
  desc2?: string;
  feature2_1?: string;
  feature2_2?: string;
  feature2_3?: string;
  ctaLabel2?: string;
  ctaHref2?: string;
  variant?: TwoColumnsPricingTableVariant;
}

const Card = ({
  plan,
  price,
  period,
  desc,
  features,
  ctaLabel,
  ctaHref,
  highlight,
  theme,
}: {
  plan: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlight: boolean;
  theme: EmailThemeTokens;
}) => (
  <Section
    style={{
      border: highlight
        ? `2px solid ${theme.colorPrimary}`
        : `1px solid ${theme.colorBorder}`,
      borderRadius: theme.borderRadiusLg ?? theme.borderRadius,
      padding: "24px",
      textAlign: "center",
    }}
  >
    <Text
      style={{
        color: theme.colorText,
        fontSize: theme.fontSizeLg,
        fontWeight: theme.fontWeightBold,
        margin: "0 0 12px",
        textAlign: "center",
      }}
    >
      {plan}
    </Text>
    <Text
      style={{
        color: theme.colorText,
        fontSize: theme.fontSizeHeading,
        fontWeight: theme.fontWeightBold,
        margin: "0 0 8px",
        textAlign: "center",
      }}
    >
      {price}
      <span
        style={{
          color: theme.colorTextMuted,
          fontSize: theme.fontSizeSm,
          fontWeight: theme.fontWeightNormal,
        }}
      >
        {period}
      </span>
    </Text>
    <Text
      style={{
        color: theme.colorTextMuted,
        fontSize: theme.fontSizeSm,
        margin: "0 0 16px",
        textAlign: "center",
      }}
    >
      {desc}
    </Text>
    {features.map((feature, index) => (
      <Text
        key={feature}
        style={{
          color: theme.colorText,
          fontSize: theme.fontSizeSm,
          margin: index === features.length - 1 ? "0 0 24px" : "0 0 4px",
          textAlign: "center",
        }}
      >
        &bull; {feature}
      </Text>
    ))}
    {ctaLabel && ctaHref ? (
      <a
        href={ctaHref}
        style={{
          backgroundColor: theme.colorPrimary,
          borderRadius: theme.borderRadius,
          color: theme.colorPrimaryForeground ?? "#ffffff",
          display: "inline-block",
          fontSize: theme.fontSizeSm,
          fontWeight: theme.fontWeightMedium,
          padding: "8px 24px",
          textDecoration: "none",
        }}
      >
        {ctaLabel}
      </a>
    ) : null}
  </Section>
);

export const TwoColumnsPricingTable = ({
  theme = defaultTheme,
  heading = "Plans",
  plan1 = "Starter",
  price1 = "$9",
  period1 = "/month",
  desc1 = "For individuals.",
  feature1_1 = "1,000 emails",
  feature1_2 = "Basic templates",
  feature1_3 = "Email support",
  ctaLabel1 = "Get Started",
  ctaHref1 = "#",
  plan2 = "Pro",
  price2 = "$29",
  period2 = "/month",
  desc2 = "For teams.",
  feature2_1 = "Unlimited emails",
  feature2_2 = "Custom templates",
  feature2_3 = "Priority support",
  ctaLabel2 = "Subscribe",
  ctaHref2 = "#",
  variant = "default",
}: TwoColumnsPricingTableProps) => {
  const skew =
    variant === "slanted-left"
      ? "skewX(-10deg)"
      : variant === "slanted-right"
        ? "skewX(10deg)"
        : undefined;
  const unskew =
    variant === "slanted-left"
      ? "skewX(10deg)"
      : variant === "slanted-right"
        ? "skewX(-10deg)"
        : undefined;
  return (
    <Html>
      <Head />
      <Preview>{heading}</Preview>
      <Body
        style={{
          backgroundColor: theme.colorBackground,
          fontFamily: theme.fontFamily,
          margin: 0,
        }}
      >
        <Section
          style={{
            backgroundColor: theme.colorBackground,
            padding: "64px 0",
            transform: skew,
          }}
        >
          <Container
            style={{
              margin: "0 auto",
              maxWidth: theme.containerWidth,
              transform: unskew,
            }}
          >
            {heading ? (
              <Text
                style={{
                  color: theme.colorText,
                  fontSize: theme.fontSizeHeading,
                  fontWeight: theme.fontWeightBold,
                  margin: "0 0 32px",
                  textAlign: "center",
                }}
              >
                {heading}
              </Text>
            ) : null}
            <Row>
              <Column
                style={{
                  paddingRight: "16px",
                  verticalAlign: "top",
                  width: "50%",
                }}
              >
                <Card
                  ctaHref={ctaHref1}
                  ctaLabel={ctaLabel1}
                  desc={desc1}
                  features={[feature1_1, feature1_2, feature1_3]}
                  highlight={false}
                  period={period1}
                  plan={plan1}
                  price={price1}
                  theme={theme}
                />
              </Column>
              <Column
                style={{
                  paddingLeft: "16px",
                  verticalAlign: "top",
                  width: "50%",
                }}
              >
                <Card
                  ctaHref={ctaHref2}
                  ctaLabel={ctaLabel2}
                  desc={desc2}
                  features={[feature2_1, feature2_2, feature2_3]}
                  highlight
                  period={period2}
                  plan={plan2}
                  price={price2}
                  theme={theme}
                />
              </Column>
            </Row>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

TwoColumnsPricingTable.PreviewProps = {
  ctaHref1: "#",
  ctaHref2: "#",
  ctaLabel1: "Get Started",
  ctaLabel2: "Subscribe",
  desc1: "For individuals.",
  desc2: "For teams.",
  feature1_1: "1,000 emails",
  feature1_2: "Basic templates",
  feature1_3: "Email support",
  feature2_1: "Unlimited emails",
  feature2_2: "Custom templates",
  feature2_3: "Priority support",
  heading: "Plans",
  period1: "/month",
  period2: "/month",
  plan1: "Starter",
  plan2: "Pro",
  price1: "$9",
  price2: "$29",
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnsPricingTableProps;
