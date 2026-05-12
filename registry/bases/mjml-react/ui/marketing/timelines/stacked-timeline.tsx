/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlDivider,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type TimelineMinimalVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface TimelineMinimalProps {
  theme?: EmailThemeTokens;
  events?: { date: string; title: string; description: string }[];
  variant?: TimelineMinimalVariant;
}
const TimelineMinimalSection = ({
  events,
  theme,
  variant,
}: {
  events: TimelineMinimalProps["events"];
  theme: EmailThemeTokens;
  variant: TimelineMinimalVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
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
            color={theme.colorText}
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
          {i < (events ?? []).length - 1 ? (
            <MjmlDivider borderColor={theme.colorBorder} borderWidth="1px" />
          ) : null}
        </MjmlSection>
      ))}
    </MjmlColumn>
  </MjmlSection>
);
export const StackedTimeline = ({
  theme = defaultTheme,
  events = [
    { date: "2024-01", description: "Initial release.", title: "v1.0.0" },
  ],
  variant = "default",
}: TimelineMinimalProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>timeline minimal</MjmlPreview>
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
        <TimelineMinimalSection
          events={events}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
StackedTimeline.PreviewProps = {
  events: [
    {
      date: "May 2026",
      description: "Major update with new components.",
      title: "v2.0.0",
    },
    {
      date: "Apr 2026",
      description: "New testimonial and pricing components.",
      title: "v1.5.0",
    },
    { date: "Mar 2026", description: "Initial release.", title: "v1.0.0" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TimelineMinimalProps;
