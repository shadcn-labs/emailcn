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

export type TimelineBorderedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface TimelineBorderedProps {
  theme?: EmailThemeTokens;
  events?: { date: string; title: string; description: string }[];
  variant?: TimelineBorderedVariant;
}
const TimelineBorderedSection = ({
  events,
  theme,
  variant,
}: {
  events: TimelineBorderedProps["events"];
  theme: EmailThemeTokens;
  variant: TimelineBorderedVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {(events ?? []).map((e, i) => (
      <MjmlSection
        key={e.title + i}
        padding={`${theme.spacingBase ?? "16px"} 0`}
      >
        <MjmlColumn width="80px" padding="0" verticalAlign="top">
          <MjmlText
            color={theme.colorPrimary}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm}
            fontWeight={theme.fontWeightBold}
          >
            {e.date}
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn
          padding="0 0 0 16px"
          verticalAlign="top"
          borderLeft={`Twopx solid ${theme.colorPrimary}`}
        >
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
        </MjmlColumn>
      </MjmlSection>
    ))}
  </MjmlSection>
);
export const ChangelogBoxed = ({
  theme = defaultTheme,
  events = [
    { date: "2024-01", description: "Initial release.", title: "v1.0.0" },
  ],
  variant = "default",
}: TimelineBorderedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>timeline bordered</MjmlPreview>
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
        <TimelineBorderedSection
          events={events}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
ChangelogBoxed.PreviewProps = {
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
} satisfies TimelineBorderedProps;
