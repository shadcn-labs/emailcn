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

export type CardsTimelineVariant = "default" | "slanted-left" | "slanted-right";

export interface CardsTimelineProps {
  theme?: TailwindConfig;
  heading?: string;
  step1?: string;
  step1Desc?: string;
  step2?: string;
  step2Desc?: string;
  step3?: string;
  step3Desc?: string;
  variant?: CardsTimelineVariant;
}

export const CardsTimelineSection = ({
  heading = "Timeline",
  step1 = "Discovery",
  step1Desc = "Understanding requirements and goals.",
  step2 = "Design",
  step2Desc = "Creating wireframes and prototypes.",
  step3 = "Delivery",
  step3Desc = "Launching the final product.",
  variant = "default",
}: Omit<CardsTimelineProps, "theme">) => {
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
        <Section className="mb-4 rounded-lg bg-background-muted p-6">
          <Text className="m-0 mb-2 text-base font-bold text-foreground">
            {step1}
          </Text>
          <Text className="m-0 text-sm leading-relaxed text-foreground-muted">
            {step1Desc}
          </Text>
        </Section>
        <Section className="mb-4 rounded-lg bg-background-muted p-6">
          <Text className="m-0 mb-2 text-base font-bold text-foreground">
            {step2}
          </Text>
          <Text className="m-0 text-sm leading-relaxed text-foreground-muted">
            {step2Desc}
          </Text>
        </Section>
        <Section className="rounded-lg bg-background-muted p-6">
          <Text className="m-0 mb-2 text-base font-bold text-foreground">
            {step3}
          </Text>
          <Text className="m-0 text-sm leading-relaxed text-foreground-muted">
            {step3Desc}
          </Text>
        </Section>
      </Container>
    </Section>
  );
};

export const CardsTimeline = ({
  theme = defaultTheme,
  heading = "Timeline",
  step1 = "Discovery",
  step1Desc = "Understanding requirements and goals.",
  step2 = "Design",
  step2Desc = "Creating wireframes and prototypes.",
  step3 = "Delivery",
  step3Desc = "Launching the final product.",
  variant = "default",
}: CardsTimelineProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CardsTimelineSection
          heading={heading}
          step1={step1}
          step1Desc={step1Desc}
          step2={step2}
          step2Desc={step2Desc}
          step3={step3}
          step3Desc={step3Desc}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

CardsTimeline.PreviewProps = {
  heading: "Timeline",
  step1: "Discovery",
  step1Desc: "Understanding requirements and defining project goals.",
  step2: "Design",
  step2Desc: "Creating wireframes, prototypes, and visual designs.",
  step3: "Delivery",
  step3Desc: "Development, testing, and launching the final product.",
  theme: defaultTheme,
  variant: "default",
} satisfies CardsTimelineProps;
