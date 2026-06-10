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
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type TwoColumnsPricingTableWithGapsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TwoColumnsPricingTableWithGapsProps {
  theme?: TailwindConfig;
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
  variant?: TwoColumnsPricingTableWithGapsVariant;
}

export const TwoColumnsPricingTableWithGapsSection = ({
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
}: Omit<TwoColumnsPricingTableWithGapsProps, "theme">) => {
  const getVariantClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[-10deg]";
      }
      case "slanted-right": {
        return "skew-x-[10deg]";
      }
      default: {
        return "";
      }
    }
  };

  const getUnskewClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[10deg]";
      }
      case "slanted-right": {
        return "skew-x-[-10deg]";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <Section className={`bg-background py-16 ${getVariantClass()}`}>
      <Container className={`mx-auto max-w-container ${getUnskewClass()}`}>
        {heading ? (
          <Text className="m-0 mb-8 text-center text-2xl font-bold text-foreground">
            {heading}
          </Text>
        ) : null}
        <Row>
          <Column className="w-1/2 pr-6 align-top">
            <Section className="rounded-lg bg-background-muted p-8 text-center">
              <Text className="m-0 mb-3 text-lg font-bold text-foreground">
                {plan1}
              </Text>
              <Text className="m-0 mb-2 text-3xl font-bold text-foreground">
                {price1}
                <span className="text-sm font-normal text-foreground-muted">
                  {period1}
                </span>
              </Text>
              <Text className="m-0 mb-4 text-sm text-foreground-muted">
                {desc1}
              </Text>
              <Text className="m-0 mb-1 text-sm text-foreground">
                &bull; {feature1_1}
              </Text>
              <Text className="m-0 mb-1 text-sm text-foreground">
                &bull; {feature1_2}
              </Text>
              <Text className="m-0 mb-6 text-sm text-foreground">
                &bull; {feature1_3}
              </Text>
              {ctaLabel1 && ctaHref1 ? (
                <Button
                  href={ctaHref1}
                  className="inline-block rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-fg no-underline"
                >
                  {ctaLabel1}
                </Button>
              ) : null}
            </Section>
          </Column>
          <Column className="w-1/2 pl-6 align-top">
            <Section className="rounded-lg bg-background-muted p-8 text-center">
              <Text className="m-0 mb-3 text-lg font-bold text-foreground">
                {plan2}
              </Text>
              <Text className="m-0 mb-2 text-3xl font-bold text-foreground">
                {price2}
                <span className="text-sm font-normal text-foreground-muted">
                  {period2}
                </span>
              </Text>
              <Text className="m-0 mb-4 text-sm text-foreground-muted">
                {desc2}
              </Text>
              <Text className="m-0 mb-1 text-sm text-foreground">
                &bull; {feature2_1}
              </Text>
              <Text className="m-0 mb-1 text-sm text-foreground">
                &bull; {feature2_2}
              </Text>
              <Text className="m-0 mb-6 text-sm text-foreground">
                &bull; {feature2_3}
              </Text>
              {ctaLabel2 && ctaHref2 ? (
                <Button
                  href={ctaHref2}
                  className="inline-block rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-fg no-underline"
                >
                  {ctaLabel2}
                </Button>
              ) : null}
            </Section>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export const TwoColumnsPricingTableWithGaps = ({
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
}: TwoColumnsPricingTableWithGapsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TwoColumnsPricingTableWithGapsSection
          ctaHref1={ctaHref1}
          ctaHref2={ctaHref2}
          ctaLabel1={ctaLabel1}
          ctaLabel2={ctaLabel2}
          desc1={desc1}
          desc2={desc2}
          feature1_1={feature1_1}
          feature1_2={feature1_2}
          feature1_3={feature1_3}
          feature2_1={feature2_1}
          feature2_2={feature2_2}
          feature2_3={feature2_3}
          heading={heading}
          period1={period1}
          period2={period2}
          plan1={plan1}
          plan2={plan2}
          price1={price1}
          price2={price2}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnsPricingTableWithGaps.PreviewProps = {
  ctaHref1: "https://example.com",
  ctaHref2: "https://example.com",
  ctaLabel1: "Get Started",
  ctaLabel2: "Subscribe",
  desc1: "Perfect for individuals getting started.",
  desc2: "Best for teams and growing businesses.",
  feature1_1: "1,000 emails/month",
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
} satisfies TwoColumnsPricingTableWithGapsProps;
