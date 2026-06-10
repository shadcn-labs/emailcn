/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type FullWidthSinglePricingVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FullWidthSinglePricingProps {
  theme?: TailwindConfig;
  heading?: string;
  price?: string;
  period?: string;
  description?: string;
  feature1?: string;
  feature2?: string;
  feature3?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: FullWidthSinglePricingVariant;
}

export const FullWidthSinglePricingSection = ({
  heading = "Pro Plan",
  price = "$29",
  period = "/month",
  description = "Everything you need to grow.",
  feature1 = "Unlimited emails",
  feature2 = "Custom templates",
  feature3 = "Priority support",
  ctaLabel = "Subscribe",
  ctaHref = "#",
  variant = "default",
}: Omit<FullWidthSinglePricingProps, "theme">) => {
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
      <Container
        className={`mx-auto max-w-container text-center ${getUnskewClass()}`}
      >
        <Section className="rounded-lg border border-border p-8">
          <Text className="m-0 mb-4 text-xl font-bold text-foreground">
            {heading}
          </Text>
          <Text className="m-0 mb-2 text-4xl font-bold text-foreground">
            {price}
          </Text>
          <Text className="m-0 mb-4 text-base font-normal text-foreground-muted">
            {period}
          </Text>
          <Text className="m-0 mb-6 text-sm text-foreground-muted">
            {description}
          </Text>
          <Text className="m-0 mb-2 text-sm text-foreground">
            &bull; {feature1}
          </Text>
          <Text className="m-0 mb-2 text-sm text-foreground">
            &bull; {feature2}
          </Text>
          <Text className="m-0 mb-6 text-sm text-foreground">
            &bull; {feature3}
          </Text>
          {ctaLabel && ctaHref ? (
            <Button
              href={ctaHref}
              className="inline-block rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-fg no-underline"
            >
              {ctaLabel}
            </Button>
          ) : null}
        </Section>
      </Container>
    </Section>
  );
};

export const FullWidthSinglePricing = ({
  theme = defaultTheme,
  heading = "Pro Plan",
  price = "$29",
  period = "/month",
  description = "Everything you need to grow.",
  feature1 = "Unlimited emails",
  feature2 = "Custom templates",
  feature3 = "Priority support",
  ctaLabel = "Subscribe",
  ctaHref = "#",
  variant = "default",
}: FullWidthSinglePricingProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FullWidthSinglePricingSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          description={description}
          feature1={feature1}
          feature2={feature2}
          feature3={feature3}
          heading={heading}
          period={period}
          price={price}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FullWidthSinglePricing.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Subscribe",
  description: "Everything you need to grow your business.",
  feature1: "Unlimited emails",
  feature2: "Custom templates",
  feature3: "Priority support",
  heading: "Pro Plan",
  period: "/month",
  price: "$29",
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthSinglePricingProps;
