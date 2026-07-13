/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Container, Head, Html, Preview, Section, Text } from "jsx-email";
import type { CSSProperties } from "react";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type StackedTimelineVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export type StackedTimelineLayout = "line" | "boxed";

export interface StackedTimelineProps {
  theme?: EmailThemeTokens;
  heading?: string;
  step1?: string;
  step1Desc?: string;
  step2?: string;
  step2Desc?: string;
  step3?: string;
  step3Desc?: string;
  variant?: StackedTimelineVariant;
  layout?: StackedTimelineLayout;
}

const itemStyle = (
  theme: EmailThemeTokens,
  layout: StackedTimelineLayout,
  isLast: boolean
): CSSProperties =>
  layout === "boxed"
    ? {
        border: `1px solid ${theme.colorBorder}`,
        borderRadius: "8px",
        marginBottom: isLast ? 0 : "16px",
        padding: "24px",
      }
    : {
        borderLeft: `2px solid ${theme.colorBorder}`,
        marginBottom: isLast ? 0 : "24px",
        paddingLeft: "32px",
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
  layout = "line",
}: StackedTimelineProps) => {
  const steps = [
    { desc: step1Desc, title: step1 },
    { desc: step2Desc, title: step2 },
    { desc: step3Desc, title: step3 },
  ];
  return (
    <Html>
      <Head />
      <Preview>{heading}</Preview>
      <Body
        style={{
          backgroundColor: theme.colorBackground,
          fontFamily: theme.fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{
            margin: "0 auto",
            maxWidth: theme.containerWidth,
            padding: "48px 24px",
          }}
        >
          {heading ? (
            <Text
              style={{
                color: theme.colorText,
                fontSize: theme.fontSizeXl,
                fontWeight: theme.fontWeightBold,
                margin: "0 0 32px",
                textAlign: "center",
              }}
            >
              {heading}
            </Text>
          ) : null}
          {steps.map((step, i) => (
            <Section
              key={step.title + i}
              style={itemStyle(theme, layout, i === steps.length - 1)}
            >
              <Text
                style={{
                  color: theme.colorText,
                  fontSize: theme.fontSizeLg,
                  fontWeight: theme.fontWeightBold,
                  margin: "0 0 8px",
                }}
              >
                {step.title}
              </Text>
              <Text
                style={{
                  color: theme.colorTextMuted,
                  fontSize: theme.fontSizeBase,
                  lineHeight: theme.lineHeightBase,
                  margin: 0,
                }}
              >
                {step.desc}
              </Text>
            </Section>
          ))}
        </Container>
      </Body>
    </Html>
  );
};

StackedTimeline.PreviewProps = {
  heading: "How It Works",
  layout: "line",
  step1: "Sign Up",
  step1Desc: "Create your free account in just 30 seconds.",
  step2: "Build",
  step2Desc: "Design beautiful emails with our drag-and-drop builder.",
  step3: "Send",
  step3Desc: "Deliver your campaigns to thousands of subscribers.",
  theme: defaultTheme,
  variant: "default",
} satisfies StackedTimelineProps;
