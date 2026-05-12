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

export type StackedTimelineVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface StackedTimelineProps {
  theme?: TailwindConfig;
  heading?: string;
  step1?: string;
  step1Desc?: string;
  step2?: string;
  step2Desc?: string;
  step3?: string;
  step3Desc?: string;
  variant?: StackedTimelineVariant;
}

export const StackedTimelineSection = ({
  heading = "How It Works",
  step1 = "Step 1",
  step1Desc = "Description of step one.",
  step2 = "Step 2",
  step2Desc = "Description of step two.",
  step3 = "Step 3",
  step3Desc = "Description of step three.",
  variant = "default",
}: Omit<StackedTimelineProps, "theme">) => {
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
        <Section className="mb-6 pl-8 border-l-2 border-border">
          <Text className="m-0 mb-2 text-base font-bold text-foreground">
            {step1}
          </Text>
          <Text className="m-0 text-sm leading-relaxed text-foreground-muted">
            {step1Desc}
          </Text>
        </Section>
        <Section className="mb-6 pl-8 border-l-2 border-border">
          <Text className="m-0 mb-2 text-base font-bold text-foreground">
            {step2}
          </Text>
          <Text className="m-0 text-sm leading-relaxed text-foreground-muted">
            {step2Desc}
          </Text>
        </Section>
        <Section className="pl-8 border-l-2 border-border">
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

export const StackedTimeline = ({
  theme = defaultTheme,
  heading = "How It Works",
  step1 = "Step 1",
  step1Desc = "Description of step one.",
  step2 = "Step 2",
  step2Desc = "Description of step two.",
  step3 = "Step 3",
  step3Desc = "Description of step three.",
  variant = "default",
}: StackedTimelineProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <StackedTimelineSection
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

StackedTimeline.PreviewProps = {
  heading: "How It Works",
  step1: "Sign Up",
  step1Desc: "Create your free account in just 30 seconds.",
  step2: "Build",
  step2Desc: "Design beautiful emails with our drag-and-drop builder.",
  step3: "Send",
  step3Desc: "Deliver your campaigns to thousands of subscribers.",
  theme: defaultTheme,
  variant: "default",
} satisfies StackedTimelineProps;
