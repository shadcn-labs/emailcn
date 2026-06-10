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
  <Section
    style={{
      backgroundColor: theme.colorText,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column>
        {(events ?? []).map((e, i) => (
          <Section
            key={e.title + i}
            style={{ padding: `${theme.spacingBase ?? "16px"} 0` }}
          >
            <Row>
              <Text
                style={{
                  color: theme.colorTextMuted,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeSm,
                  margin: 0,
                  paddingBottom: theme.spacingBase ?? "4px",
                }}
              >
                {e.date}
              </Text>
              <Text
                style={{
                  color: theme.colorBackground,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeBase,
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
                }}
              >
                {e.description}
              </Text>
            </Row>
          </Section>
        ))}
      </Column>
    </Row>
  </Section>
);
export const SplitCards = ({
  theme = defaultTheme,
  events = [
    { date: "2024-01", description: "Initial release.", title: "v1.0.0" },
  ],
  variant = "default",
}: TimelineDarkProps) => (
  <Html>
    <Head />
    <Preview>timeline dark</Preview>
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
          <TimelineDarkSection
            events={events}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
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
