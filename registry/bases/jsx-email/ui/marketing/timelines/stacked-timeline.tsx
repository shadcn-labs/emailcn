/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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
  <Section
    style={{
      backgroundColor: theme.colorBackground,
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
                  color: theme.colorText,
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
              {i < (events ?? []).length - 1 ? (
                <Hr
                  style={{
                    borderBottomWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopColor: theme.colorBorder,
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    width: "100%",
                  }}
                />
              ) : null}
            </Row>
          </Section>
        ))}
      </Column>
    </Row>
  </Section>
);
export const StackedTimeline = ({
  theme = defaultTheme,
  events = [
    { date: "2024-01", description: "Initial release.", title: "v1.0.0" },
  ],
  variant = "default",
}: TimelineMinimalProps) => (
  <Html>
    <Head />
    <Preview>timeline minimal</Preview>
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
          <TimelineMinimalSection
            events={events}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
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
