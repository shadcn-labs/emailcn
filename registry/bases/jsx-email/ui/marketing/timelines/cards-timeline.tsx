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
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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
  <Section
    style={{
      backgroundColor: theme.colorBackgroundMuted,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      {(events ?? []).map((e, i) => (
        <Column key={e.title + i}>
          <Text
            style={{
              color: theme.colorPrimary,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm,
              fontWeight: theme.fontWeightBold,
              margin: 0,
              paddingBottom: theme.spacingBase ?? "4px",
            }}
          >
            {e.date}
          </Text>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeLg,
              fontWeight: theme.fontWeightMedium,
              margin: 0,
              paddingBottom: theme.spacingBase ?? "4px",
            }}
          >
            {e.title}
          </Text>
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase,
              lineHeight: theme.lineHeightBase,
              margin: 0,
              paddingBottom: theme.spacingBase ?? "16px",
            }}
          >
            {e.description}
          </Text>
        </Column>
      ))}
    </Row>
  </Section>
);
export const CardsTimeline = ({
  theme = defaultTheme,
  events = [
    { date: "2024-01", description: "Initial release.", title: "v1.0.0" },
  ],
  variant = "default",
}: TimelineAccentProps) => (
  <Html>
    <Head />
    <Preview>timeline accent</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <TimelineAccentSection
            events={events}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
CardsTimeline.PreviewProps = {
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
