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

export type CollapsedFaqWithInlineCtaVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CollapsedFaqWithInlineCtaProps {
  theme?: TailwindConfig;
  heading?: string;
  q1?: string;
  q2?: string;
  q3?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaText?: string;
  variant?: CollapsedFaqWithInlineCtaVariant;
}

export const CollapsedFaqWithInlineCtaSection = ({
  heading = "FAQ",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
  ctaLabel = "Contact Us",
  ctaHref = "#",
  ctaText = "Still have questions?",
  variant = "default",
}: Omit<CollapsedFaqWithInlineCtaProps, "theme">) => {
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
        {heading ? (
          <Text className="m-0 mb-8 text-center text-2xl font-bold text-foreground">
            {heading}
          </Text>
        ) : null}
        <Text className="m-0 mb-4 text-sm font-medium text-foreground">
          {q1}
        </Text>
        <Text className="m-0 mb-4 text-sm font-medium text-foreground">
          {q2}
        </Text>
        <Text className="m-0 mb-8 text-sm font-medium text-foreground">
          {q3}
        </Text>
        {ctaText ? (
          <Text className="m-0 mb-4 text-base text-foreground-muted">
            {ctaText}
          </Text>
        ) : null}
        {ctaLabel && ctaHref ? (
          <Button
            href={ctaHref}
            className="inline-block rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-fg no-underline"
          >
            {ctaLabel}
          </Button>
        ) : null}
      </Container>
    </Section>
  );
};

export const CollapsedFaqWithInlineCta = ({
  theme = defaultTheme,
  heading = "FAQ",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
  ctaLabel = "Contact Us",
  ctaHref = "#",
  ctaText = "Still have questions?",
  variant = "default",
}: CollapsedFaqWithInlineCtaProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CollapsedFaqWithInlineCtaSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          ctaText={ctaText}
          heading={heading}
          q1={q1}
          q2={q2}
          q3={q3}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

CollapsedFaqWithInlineCta.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Contact Us",
  ctaText: "Still have questions?",
  heading: "FAQ",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
  variant: "default",
} satisfies CollapsedFaqWithInlineCtaProps;
