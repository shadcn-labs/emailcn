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

export type TimelineAccentVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface TimelineAccentProps {
  theme?: EmailThemeTokens;
  events?: { date: string; title: string; description: string }[];
  variant?: TimelineAccentVariant;
}
const TimelineAccentSection = ({
  events,
  theme,
  variant,
}: {
  events: TimelineAccentProps["events"];
  theme: EmailThemeTokens;
  variant: TimelineAccentVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackgroundMuted}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {(events ?? []).map((e, i) => (
      <MjmlColumn key={e.title + i}>
        <MjmlText
          color={theme.colorPrimary}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm}
          fontWeight={theme.fontWeightBold}
          paddingBottom={theme.spacingBase ?? "4px"}
        >
          {e.date}
        </MjmlText>
        <MjmlText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeLg}
          fontWeight={theme.fontWeightMedium}
          paddingBottom={theme.spacingBase ?? "4px"}
        >
          {e.title}
        </MjmlText>
        <MjmlText
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
          paddingBottom={theme.spacingBase ?? "16px"}
        >
          {e.description}
        </MjmlText>
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const TimelineAccent = ({
  theme = defaultTheme,
  events = [
    { date: "2024-01", description: "Initial release.", title: "v1.0.0" },
  ],
  variant = "default",
}: TimelineAccentProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>timeline accent</MjmlPreview>
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
        <TimelineAccentSection
          events={events}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
TimelineAccent.PreviewProps = {
  events: [
    {
      date: "May 2026",
      description: "Major update with new components.",
      title: "v2.0.0",
    },
    { date: "Apr 2026", description: "New components added.", title: "v1.5.0" },
    {
      date: "Mar 2026",
      description: "Initial public release.",
      title: "v1.0.0",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TimelineAccentProps;
