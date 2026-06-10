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

export type StackedBoxedTimelineVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface StackedBoxedTimelineProps {
  theme?: TailwindConfig;
  heading?: string;
  step1?: string;
  step1Desc?: string;
  step2?: string;
  step2Desc?: string;
  step3?: string;
  step3Desc?: string;
  variant?: StackedBoxedTimelineVariant;
}

export const StackedBoxedTimelineSection = ({
  heading = "Timeline",
  step1 = "Phase 1",
  step1Desc = "Description of phase one.",
  step2 = "Phase 2",
  step2Desc = "Description of phase two.",
  step3 = "Phase 3",
  step3Desc = "Description of phase three.",
  variant = "default",
}: Omit<StackedBoxedTimelineProps, "theme">) => {
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
        <Section className="mb-4 rounded-lg border border-border p-6">
          <Text className="m-0 mb-2 text-base font-bold text-foreground">
            {step1}
          </Text>
          <Text className="m-0 text-sm leading-relaxed text-foreground-muted">
            {step1Desc}
          </Text>
        </Section>
        <Section className="mb-4 rounded-lg border border-border p-6">
          <Text className="m-0 mb-2 text-base font-bold text-foreground">
            {step2}
          </Text>
          <Text className="m-0 text-sm leading-relaxed text-foreground-muted">
            {step2Desc}
          </Text>
        </Section>
        <Section className="rounded-lg border border-border p-6">
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

export const StackedBoxedTimeline = ({
  theme = defaultTheme,
  heading = "Timeline",
  step1 = "Phase 1",
  step1Desc = "Description of phase one.",
  step2 = "Phase 2",
  step2Desc = "Description of phase two.",
  step3 = "Phase 3",
  step3Desc = "Description of phase three.",
  variant = "default",
}: StackedBoxedTimelineProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <StackedBoxedTimelineSection
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

StackedBoxedTimeline.PreviewProps = {
  heading: "Timeline",
  step1: "Research",
  step1Desc: "Deep market research and user interviews.",
  step2: "Development",
  step2Desc: "Agile development with weekly sprints.",
  step3: "Launch",
  step3Desc: "Public launch with marketing campaign.",
  theme: defaultTheme,
  variant: "default",
} satisfies StackedBoxedTimelineProps;
