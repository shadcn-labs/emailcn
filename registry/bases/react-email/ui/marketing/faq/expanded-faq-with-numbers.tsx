/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
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

export type ExpandedFaqWithNumbersVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface ExpandedFaqWithNumbersProps {
  theme?: TailwindConfig;
  heading?: string;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
  q3?: string;
  a3?: string;
  variant?: ExpandedFaqWithNumbersVariant;
}

export const ExpandedFaqWithNumbersSection = ({
  heading = "FAQ",
  q1 = "What is this product?",
  a1 = "This is a product that helps you build beautiful emails.",
  q2 = "How does pricing work?",
  a2 = "We offer flexible pricing plans to suit your needs.",
  q3 = "Is there customer support?",
  a3 = "Yes, we offer 24/7 customer support via email and chat.",
  variant = "default",
}: Omit<ExpandedFaqWithNumbersProps, "theme">) => {
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
        <Section className="mb-6">
          <Text className="m-0 mb-2 text-sm font-bold text-foreground">
            01. {q1}
          </Text>
          <Text className="m-0 text-sm leading-relaxed text-foreground-muted">
            {a1}
          </Text>
        </Section>
        <Section className="mb-6">
          <Text className="m-0 mb-2 text-sm font-bold text-foreground">
            02. {q2}
          </Text>
          <Text className="m-0 text-sm leading-relaxed text-foreground-muted">
            {a2}
          </Text>
        </Section>
        <Section>
          <Text className="m-0 mb-2 text-sm font-bold text-foreground">
            03. {q3}
          </Text>
          <Text className="m-0 text-sm leading-relaxed text-foreground-muted">
            {a3}
          </Text>
        </Section>
      </Container>
    </Section>
  );
};

export const ExpandedFaqWithNumbers = ({
  theme = defaultTheme,
  heading = "FAQ",
  q1 = "What is this product?",
  a1 = "This is a product that helps you build beautiful emails.",
  q2 = "How does pricing work?",
  a2 = "We offer flexible pricing plans to suit your needs.",
  q3 = "Is there customer support?",
  a3 = "Yes, we offer 24/7 customer support via email and chat.",
  variant = "default",
}: ExpandedFaqWithNumbersProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ExpandedFaqWithNumbersSection
          a1={a1}
          a2={a2}
          a3={a3}
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

ExpandedFaqWithNumbers.PreviewProps = {
  a1: "This is a product that helps you build beautiful emails quickly and easily.",
  a2: "We offer flexible pricing plans to suit your needs, starting at $9/month.",
  a3: "Yes, we offer 24/7 customer support via email and live chat.",
  heading: "FAQ",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
  variant: "default",
} satisfies ExpandedFaqWithNumbersProps;
