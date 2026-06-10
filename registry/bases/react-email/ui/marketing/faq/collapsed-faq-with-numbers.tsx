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

export type CollapsedFaqWithNumbersVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CollapsedFaqWithNumbersProps {
  theme?: TailwindConfig;
  heading?: string;
  q1?: string;
  q2?: string;
  q3?: string;
  q4?: string;
  variant?: CollapsedFaqWithNumbersVariant;
}

export const CollapsedFaqWithNumbersSection = ({
  heading = "FAQ",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
  q4 = "Can I cancel anytime?",
  variant = "default",
}: Omit<CollapsedFaqWithNumbersProps, "theme">) => {
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
        <Text className="m-0 mb-4 text-sm font-medium text-foreground">
          01. {q1}
        </Text>
        <Text className="m-0 mb-4 text-sm font-medium text-foreground">
          02. {q2}
        </Text>
        <Text className="m-0 mb-4 text-sm font-medium text-foreground">
          03. {q3}
        </Text>
        <Text className="m-0 text-sm font-medium text-foreground">
          04. {q4}
        </Text>
      </Container>
    </Section>
  );
};

export const CollapsedFaqWithNumbers = ({
  theme = defaultTheme,
  heading = "FAQ",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
  q4 = "Can I cancel anytime?",
  variant = "default",
}: CollapsedFaqWithNumbersProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CollapsedFaqWithNumbersSection
          heading={heading}
          q1={q1}
          q2={q2}
          q3={q3}
          q4={q4}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

CollapsedFaqWithNumbers.PreviewProps = {
  heading: "FAQ",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  q4: "Can I cancel anytime?",
  theme: defaultTheme,
  variant: "default",
} satisfies CollapsedFaqWithNumbersProps;
