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

export type TimelineDarkVariant = "default" | "slanted-left" | "slanted-right";
export interface TimelineDarkProps {
  theme?: EmailThemeTokens;
  events?: { date: string; title: string; description: string }[];
  variant?: TimelineDarkVariant;
}
const TimelineDarkSection = ({
  events,
  theme,
  variant,
}: {
  events: TimelineDarkProps["events"];
  theme: EmailThemeTokens;
  variant: TimelineDarkVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorText}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      {(events ?? []).map((e, i) => (
        <MjmlSection
          key={e.title + i}
          padding={`${theme.spacingBase ?? "16px"} 0`}
        >
          <MjmlText
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm}
            paddingBottom={theme.spacingBase ?? "Fourpx"}
          >
            {e.date}
          </MjmlText>
          <MjmlText
            color={theme.colorBackground}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase}
            fontWeight={theme.fontWeightMedium}
            paddingBottom={theme.spacingBase ?? "Fourpx"}
          >
            {e.title}
          </MjmlText>
          <MjmlText
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase}
            lineHeight={theme.lineHeightBase}
          >
            {e.description}
          </MjmlText>
        </MjmlSection>
      ))}
    </MjmlColumn>
  </MjmlSection>
);
export const SplitCards = ({
  theme = defaultTheme,
  events = [
    { date: "2024-01", description: "Initial release.", title: "v1.0.0" },
  ],
  variant = "default",
}: TimelineDarkProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>timeline dark</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
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
      <MjmlWrapper padding="0">
        <TimelineDarkSection events={events} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
SplitCards.PreviewProps = {
  events: [
    {
      date: "May 2026",
      description: "Major update with new components.",
      title: "v2.0.0",
    },
    { date: "Apr 2026", description: "New components added.", title: "v1.5.0" },
    { date: "Mar 2026", description: "Initial release.", title: "v1.0.0" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TimelineDarkProps;
