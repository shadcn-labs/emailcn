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

export type PaymentTimelineVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface PaymentTimelineProps {
  theme?: TailwindConfig;
  heading?: string;
  step1?: string;
  step1Desc?: string;
  step1Amount?: string;
  step2?: string;
  step2Desc?: string;
  step2Amount?: string;
  step3?: string;
  step3Desc?: string;
  step3Amount?: string;
  variant?: PaymentTimelineVariant;
}

export const PaymentTimelineSection = ({
  heading = "Payment Timeline",
  step1 = "Order Placed",
  step1Desc = "Your order has been confirmed.",
  step1Amount = "$99.00",
  step2 = "Processing",
  step2Desc = "Payment is being processed.",
  step2Amount = "$99.00",
  step3 = "Completed",
  step3Desc = "Payment completed successfully.",
  step3Amount = "$99.00",
  variant = "default",
}: Omit<PaymentTimelineProps, "theme">) => {
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
          <Column className="w-1/3 pr-4 text-center align-top">
            <Section className="mb-2 mx-auto h-8 w-8 rounded-full bg-primary">
              <Text className="m-0 text-center text-sm font-bold leading-8 text-primary-fg">
                1
              </Text>
            </Section>
            <Text className="m-0 mb-1 text-sm font-bold text-foreground">
              {step1}
            </Text>
            <Text className="m-0 mb-1 text-xs text-foreground-muted">
              {step1Desc}
            </Text>
            <Text className="m-0 text-xs font-medium text-foreground">
              {step1Amount}
            </Text>
          </Column>
          <Column className="w-1/3 px-4 text-center align-top">
            <Section className="mb-2 mx-auto h-8 w-8 rounded-full bg-background-muted border border-border">
              <Text className="m-0 text-center text-sm font-bold leading-8 text-foreground">
                2
              </Text>
            </Section>
            <Text className="m-0 mb-1 text-sm font-bold text-foreground">
              {step2}
            </Text>
            <Text className="m-0 mb-1 text-xs text-foreground-muted">
              {step2Desc}
            </Text>
            <Text className="m-0 text-xs font-medium text-foreground">
              {step2Amount}
            </Text>
          </Column>
          <Column className="w-1/3 pl-4 text-center align-top">
            <Section className="mb-2 mx-auto h-8 w-8 rounded-full bg-background-muted border border-border">
              <Text className="m-0 text-center text-sm font-bold leading-8 text-foreground">
                3
              </Text>
            </Section>
            <Text className="m-0 mb-1 text-sm font-bold text-foreground">
              {step3}
            </Text>
            <Text className="m-0 mb-1 text-xs text-foreground-muted">
              {step3Desc}
            </Text>
            <Text className="m-0 text-xs font-medium text-foreground">
              {step3Amount}
            </Text>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export const PaymentTimeline = ({
  theme = defaultTheme,
  heading = "Payment Timeline",
  step1 = "Order Placed",
  step1Desc = "Your order has been confirmed.",
  step1Amount = "$99.00",
  step2 = "Processing",
  step2Desc = "Payment is being processed.",
  step2Amount = "$99.00",
  step3 = "Completed",
  step3Desc = "Payment completed successfully.",
  step3Amount = "$99.00",
  variant = "default",
}: PaymentTimelineProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <PaymentTimelineSection
          heading={heading}
          step1={step1}
          step1Amount={step1Amount}
          step1Desc={step1Desc}
          step2={step2}
          step2Amount={step2Amount}
          step2Desc={step2Desc}
          step3={step3}
          step3Amount={step3Amount}
          step3Desc={step3Desc}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

PaymentTimeline.PreviewProps = {
  heading: "Payment Timeline",
  step1: "Order Placed",
  step1Amount: "$99.00",
  step1Desc: "Your order has been confirmed.",
  step2: "Processing",
  step2Amount: "$99.00",
  step2Desc: "Payment is being processed.",
  step3: "Completed",
  step3Amount: "$99.00",
  step3Desc: "Payment completed successfully.",
  theme: defaultTheme,
  variant: "default",
} satisfies PaymentTimelineProps;
