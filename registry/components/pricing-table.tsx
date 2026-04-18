import { Button, Column, Container, Row, Section, Text } from "react-email";

import type { EmailTheme } from "../themes/default";
import { theme as defaultTheme } from "../themes/default";

export interface PricingTableProps {
  theme?: EmailTheme;
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

export const PricingTable = ({
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
}: PricingTableProps) => {
  const style = {
    card: {
      backgroundColor: theme.colorBackground,
      border: `1px solid ${theme.colorBorder}`,
      borderRadius: theme.borderRadius,
      padding: theme.spacingLg,
    },
    cta: {
      backgroundColor: theme.button.primary.backgroundColor,
      borderRadius: theme.button.primary.borderRadius,
      color: theme.button.primary.color,
      display: "inline-block",
      fontSize: theme.button.primary.fontSize,
      fontWeight: theme.button.primary.fontWeight,
      marginTop: theme.spacingBase,
      paddingX: theme.button.primary.paddingX,
      paddingY: theme.button.primary.paddingY,
      textDecoration: "none",
    } as const,
    feature: {
      color: theme.colorTextMuted,
      fontSize: theme.fontSizeBase,
      lineHeight: theme.lineHeightBase,
      marginBottom: "4px",
    },
    highlightedCard: {
      backgroundColor: theme.colorBackgroundMuted,
      border: `2px solid ${theme.colorPrimary}`,
      borderRadius: theme.borderRadius,
      padding: theme.spacingLg,
    },
    period: {
      color: theme.colorTextMuted,
      fontSize: theme.fontSizeSm,
    },
    planName: {
      color: theme.colorText,
      fontSize: theme.fontSizeLg,
      fontWeight: theme.fontWeightMedium,
      marginBottom: "8px",
    },
    price: {
      color: theme.colorText,
      fontSize: theme.fontSizeHeading,
      fontWeight: theme.fontWeightBold,
      marginBottom: "4px",
    },
    section: {
      padding: `${theme.spacingXl} 0`,
    },
  };

  return (
    <Section style={style.section}>
      <Container>
        <Row>
          {plans.map((plan, index) => (
            <Column
              key={index}
              style={plan.highlighted ? style.highlightedCard : style.card}
            >
              <Text style={style.planName}>{plan.name}</Text>
              <Text style={style.price}>
                {plan.price}
                <span style={style.period}>{plan.period}</span>
              </Text>
              {plan.features.map((feature, fIndex) => (
                <Text key={fIndex} style={style.feature}>
                  • {feature}
                </Text>
              ))}
              {plan.ctaLabel && plan.ctaHref && (
                <Button href={plan.ctaHref} style={style.cta}>
                  {plan.ctaLabel}
                </Button>
              )}
            </Column>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

PricingTable.PreviewProps = {
  theme: defaultTheme,
} satisfies PricingTableProps;

export default PricingTable;
