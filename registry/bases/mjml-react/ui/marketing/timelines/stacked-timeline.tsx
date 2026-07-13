/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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

const itemAttrs = (
  theme: EmailThemeTokens,
  layout: StackedTimelineLayout,
  isLast: boolean
) =>
  layout === "boxed"
    ? {
        border: `1px solid ${theme.colorBorder}`,
        borderRadius: "8px",
        padding: "24px",
        paddingBottom: isLast ? "24px" : "24px",
      }
    : {
        borderLeft: `2px solid ${theme.colorBorder}`,
        padding: "0 0 0 32px",
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
    <Mjml>
      <MjmlHead>
        <MjmlPreview>{heading}</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll color={theme.colorText} fontFamily={theme.fontFamily} />
          <MjmlText
            fontSize={theme.fontSizeBase}
            lineHeight={theme.lineHeightBase}
          />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody
        backgroundColor={theme.colorBackground}
        width={theme.containerWidth}
      >
        <MjmlWrapper padding="48px 24px">
          {heading ? (
            <MjmlSection padding="0 0 24px">
              <MjmlColumn>
                <MjmlText
                  align="center"
                  color={theme.colorText}
                  fontSize={theme.fontSizeXl}
                  fontWeight={theme.fontWeightBold}
                  padding="0"
                >
                  {heading}
                </MjmlText>
              </MjmlColumn>
            </MjmlSection>
          ) : null}
          {steps.map((step, i) => (
            <MjmlSection
              key={step.title + i}
              paddingBottom={i === steps.length - 1 ? "0" : "16px"}
            >
              <MjmlColumn {...itemAttrs(theme, layout, i === steps.length - 1)}>
                <MjmlText
                  color={theme.colorText}
                  fontSize={theme.fontSizeLg}
                  fontWeight={theme.fontWeightBold}
                  paddingBottom="8px"
                >
                  {step.title}
                </MjmlText>
                <MjmlText color={theme.colorTextMuted} padding="0">
                  {step.desc}
                </MjmlText>
              </MjmlColumn>
            </MjmlSection>
          ))}
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
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
