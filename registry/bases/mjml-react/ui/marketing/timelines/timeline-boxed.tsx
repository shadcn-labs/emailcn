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

export type TimelineBoxedVariant = "default" | "slanted-left" | "slanted-right";

export interface TimelineBoxedProps {
  theme?: EmailThemeTokens;
  events?: { date: string; title: string; description: string }[];
  variant?: TimelineBoxedVariant;
}

const TimelineBoxedSection = ({
  events,
  theme,
  variant,
}: {
  events: TimelineBoxedProps["events"];
  theme: EmailThemeTokens;
  variant: TimelineBoxedVariant;
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
            border={`1px solid ${theme.colorBorder ?? "#e5e7eb"}`}
            borderRadius={theme.borderRadius}
            padding={theme.spacingBase ?? "24px"}
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
          </MjmlSection>
        ))}
      </MjmlColumn>
    </MjmlSection>
  );
};

export const TimelineBoxed = ({
  theme = defaultTheme,
  events = [
    { date: "2024-01-01", description: "Initial release.", title: "v1.0.0" },
  ],
  variant = "default",
}: TimelineBoxedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>timeline boxed</MjmlPreview>
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
        <TimelineBoxedSection events={events} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TimelineBoxed.PreviewProps = {
  events: [
    {
      date: "May 2026",
      description: "Major update with new components.",
      title: "v2.0.0",
    },
    {
      date: "Apr 2026",
      description: "Added testimonial and pricing components.",
      title: "v1.5.0",
    },
    {
      date: "Mar 2026",
      description: "Initial public release.",
      title: "v1.0.0",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TimelineBoxedProps;
