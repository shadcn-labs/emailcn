/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
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

export type SplitCardsVariant = "default" | "slanted-left" | "slanted-right";

export interface SplitCardsProps {
  theme?: TailwindConfig;
  heading?: string;
  step1?: string;
  step1Desc?: string;
  step1Date?: string;
  step2?: string;
  step2Desc?: string;
  step2Date?: string;
  step3?: string;
  step3Desc?: string;
  step3Date?: string;
  variant?: SplitCardsVariant;
}

export const SplitCardsSection = ({
  heading = "Timeline",
  step1 = "Kickoff",
  step1Desc = "Project kickoff meeting.",
  step1Date = "Week 1",
  step2 = "Development",
  step2Desc = "Main development phase.",
  step2Date = "Week 2-6",
  step3 = "Launch",
  step3Desc = "Public launch.",
  step3Date = "Week 8",
  variant = "default",
}: Omit<SplitCardsProps, "theme">) => {
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
        <Row className="mb-4">
          <Column className="w-1/3 pr-4 align-top">
            <Section className="rounded-lg bg-background-muted p-4">
              <Text className="m-0 mb-1 text-sm font-bold text-foreground">
                {step1}
              </Text>
              <Text className="m-0 mb-2 text-xs text-foreground-subtle">
                {step1Date}
              </Text>
              <Text className="m-0 text-xs text-foreground-muted">
                {step1Desc}
              </Text>
            </Section>
          </Column>
          <Column className="w-1/3 px-4 align-top">
            <Section className="rounded-lg bg-background-muted p-4">
              <Text className="m-0 mb-1 text-sm font-bold text-foreground">
                {step2}
              </Text>
              <Text className="m-0 mb-2 text-xs text-foreground-subtle">
                {step2Date}
              </Text>
              <Text className="m-0 text-xs text-foreground-muted">
                {step2Desc}
              </Text>
            </Section>
          </Column>
          <Column className="w-1/3 pl-4 align-top">
            <Section className="rounded-lg bg-background-muted p-4">
              <Text className="m-0 mb-1 text-sm font-bold text-foreground">
                {step3}
              </Text>
              <Text className="m-0 mb-2 text-xs text-foreground-subtle">
                {step3Date}
              </Text>
              <Text className="m-0 text-xs text-foreground-muted">
                {step3Desc}
              </Text>
            </Section>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export const SplitCards = ({
  theme = defaultTheme,
  heading = "Timeline",
  step1 = "Kickoff",
  step1Desc = "Project kickoff meeting.",
  step1Date = "Week 1",
  step2 = "Development",
  step2Desc = "Main development phase.",
  step2Date = "Week 2-6",
  step3 = "Launch",
  step3Desc = "Public launch.",
  step3Date = "Week 8",
  variant = "default",
}: SplitCardsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <SplitCardsSection
          heading={heading}
          step1={step1}
          step1Date={step1Date}
          step1Desc={step1Desc}
          step2={step2}
          step2Date={step2Date}
          step2Desc={step2Desc}
          step3={step3}
          step3Date={step3Date}
          step3Desc={step3Desc}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

SplitCards.PreviewProps = {
  heading: "Timeline",
  step1: "Kickoff",
  step1Date: "Week 1",
  step1Desc: "Project kickoff meeting with stakeholders.",
  step2: "Development",
  step2Date: "Week 2-6",
  step2Desc: "Main development and testing phase.",
  step3: "Launch",
  step3Date: "Week 8",
  step3Desc: "Public launch and marketing campaign.",
  theme: defaultTheme,
  variant: "default",
} satisfies SplitCardsProps;
