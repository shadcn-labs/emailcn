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

export type TimelineStackedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TimelineStackedProps {
  theme?: EmailThemeTokens;
  events?: { date: string; title: string; description: string }[];
  variant?: TimelineStackedVariant;
}

const TimelineStackedSection = ({
  events,
  theme,
  variant,
}: {
  events: TimelineStackedProps["events"];
  theme: EmailThemeTokens;
  variant: TimelineStackedVariant;
}) => {
  const list = events ?? [];

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      <MjmlColumn>
        {list.map((event, i) => (
          <MjmlSection
            key={event.title + i}
            padding={`${theme.spacingBase ?? "24px"} 0`}
          >
            <MjmlColumn width="100px" padding="0" verticalAlign="top">
              <MjmlText
                color={theme.colorTextMuted}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeSm ?? "12px"}
                fontWeight={theme.fontWeightMedium}
              >
                {event.date}
              </MjmlText>
            </MjmlColumn>
            <MjmlColumn padding="0 0 0 16px" verticalAlign="top">
              <MjmlText
                color={theme.colorText}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeBase ?? "14px"}
                fontWeight={theme.fontWeightMedium}
                paddingBottom={theme.spacingBase ?? "8px"}
              >
                {event.title}
              </MjmlText>
              <MjmlText
                color={theme.colorTextMuted}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeBase ?? "14px"}
                lineHeight={theme.lineHeightBase}
              >
                {event.description}
              </MjmlText>
            </MjmlColumn>
            {i < list.length - 1 ? (
              <MjmlDivider
                borderColor={theme.colorBorder ?? "#e5e7eb"}
                borderWidth="1px"
              />
            ) : null}
          </MjmlSection>
        ))}
      </MjmlColumn>
    </MjmlSection>
  );
};

export const StackedBoxedTimeline = ({
  theme = defaultTheme,
  events = [
    { date: "2024-01-01", description: "Initial release.", title: "v1.0.0" },
  ],
  variant = "default",
}: TimelineStackedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>timeline stacked</MjmlPreview>
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
        <TimelineStackedSection
          events={events}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

StackedBoxedTimeline.PreviewProps = {
  events: [
    {
      date: "May 2026",
      description: "Added new grid and timeline components for email layouts.",
      title: "v2.0.0 - Major Update",
    },
    {
      date: "Apr 2026",
      description: "New testimonial and pricing table components.",
      title: "v1.5.0 - New Components",
    },
    {
      date: "Mar 2026",
      description: "Initial public release with core components.",
      title: "v1.0.0 - Launch",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TimelineStackedProps;
