import {
  Button,
  Column,
  Container,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";

import type { EmailTheme } from "@/registry/themes/default";
import { theme as defaultTheme } from "@/registry/themes/default";

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
}: PricingTableProps) => (
  <Tailwind config={theme}>
    <Section className="py-12">
      <Container>
        <Row>
          {plans.map((plan, index) => (
            <Column
              key={index}
              className={
                plan.highlighted
                  ? "rounded-md border-2 border-primary bg-background-muted p-8"
                  : "rounded-md border border-border bg-background p-8"
              }
            >
              <Text className="mb-2 text-lg font-medium text-foreground">
                {plan.name}
              </Text>
              <Text className="mb-1 text-heading font-bold text-foreground">
                {plan.price}
                <span className="text-sm text-foreground-muted">
                  {plan.period}
                </span>
              </Text>
              {plan.features.map((feature, fIndex) => (
                <Text
                  key={fIndex}
                  className="mb-1 text-base leading-snug text-foreground-muted"
                >
                  • {feature}
                </Text>
              ))}
              {plan.ctaLabel && plan.ctaHref ? (
                <Button
                  href={plan.ctaHref}
                  className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-fg no-underline"
                >
                  {plan.ctaLabel}
                </Button>
              ) : null}
            </Column>
          ))}
        </Row>
      </Container>
    </Section>
  </Tailwind>
);

PricingTable.PreviewProps = {
  theme: defaultTheme,
} satisfies PricingTableProps;

export default PricingTable;
