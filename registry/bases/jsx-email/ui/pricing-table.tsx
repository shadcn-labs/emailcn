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
  Tailwind,
  Text,
} from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

export interface PricingTableProps {
  plans?: {
    name: string;
    price: string;
    period: string;
    features: string[];
    ctaLabel: string;
    ctaHref: string;
    highlighted?: boolean;
  }[];
}

export const PricingTableSection = ({
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
}: Pick<PricingTableProps, "plans">) => (
  <Section style={{ padding: "48px 0" }}>
    <Container style={{ maxWidth: defaultTheme.containerWidth }}>
      <Row>
        {plans.map((plan, index) => (
          <Column
            key={`${plan.name}-${index}`}
            style={{
              backgroundColor: plan.highlighted
                ? defaultTheme.colorBackgroundMuted
                : defaultTheme.colorBackground,
              border: plan.highlighted
                ? `2px solid ${defaultTheme.colorPrimary}`
                : `1px solid ${defaultTheme.colorBorder}`,
              borderRadius: "8px",
              padding: "32px",
            }}
          >
            <Text
              style={{
                color: defaultTheme.colorText,
                fontSize: defaultTheme.fontSizeLg,
                fontWeight: defaultTheme.fontWeightMedium,
                marginBottom: "8px",
              }}
            >
              {plan.name}
            </Text>
            <Text
              style={{
                color: defaultTheme.colorText,
                fontSize: defaultTheme.fontSizeHeading,
                fontWeight: defaultTheme.fontWeightBold,
                marginBottom: "4px",
              }}
            >
              {plan.price}
              <span
                style={{
                  color: defaultTheme.colorTextMuted,
                  fontSize: defaultTheme.fontSizeSm,
                }}
              >
                {plan.period}
              </span>
            </Text>
            {plan.features.map((feature, fIndex) => (
              <Text
                key={`${plan.name}-f-${fIndex}`}
                style={{
                  color: defaultTheme.colorTextMuted,
                  fontSize: defaultTheme.fontSizeBase,
                  lineHeight: 1.4,
                  marginBottom: "4px",
                }}
              >
                • {feature}
              </Text>
            ))}
            {plan.ctaLabel && plan.ctaHref ? (
              <Button
                href={plan.ctaHref}
                width={160}
                height={40}
                style={{
                  backgroundColor: defaultTheme.button.primary.backgroundColor,
                  borderRadius: defaultTheme.button.primary.borderRadius,
                  color: defaultTheme.button.primary.color,
                  display: "inline-block",
                  fontSize: defaultTheme.button.primary.fontSize,
                  fontWeight: defaultTheme.button.primary.fontWeight,
                  height: "auto",
                  marginTop: "24px",
                  paddingBottom: defaultTheme.button.primary.paddingY,
                  paddingLeft: defaultTheme.button.primary.paddingX,
                  paddingRight: defaultTheme.button.primary.paddingX,
                  paddingTop: defaultTheme.button.primary.paddingY,
                  textDecoration: "none",
                  width: "auto",
                }}
              >
                {plan.ctaLabel}
              </Button>
            ) : null}
          </Column>
        ))}
      </Row>
    </Container>
  </Section>
);

export const PricingTable = ({
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
}: PricingTableProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Pricing</Preview>
    <Tailwind>
      <Body
        style={{
          backgroundColor: defaultTheme.colorBackground,
          fontFamily: defaultTheme.fontFamily,
          margin: 0,
        }}
      >
        <PricingTableSection plans={plans} />
      </Body>
    </Tailwind>
  </Html>
);

PricingTable.PreviewProps = {} satisfies PricingTableProps;
