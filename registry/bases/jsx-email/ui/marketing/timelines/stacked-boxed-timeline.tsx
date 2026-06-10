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
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: `${theme.spacingXl ?? "48px"} 0`,
      }}
    >
      <Row>
        <Column>
          {list.map((event, i) => (
            <Section
              key={event.title + i}
              style={{ padding: `${theme.spacingBase ?? "24px"} 0` }}
            >
              <Row>
                <Column
                  style={{ padding: "0", verticalAlign: "top", width: "100px" }}
                >
                  <Text
                    style={{
                      color: theme.colorTextMuted,
                      fontFamily: theme.fontFamily,
                      fontSize: theme.fontSizeSm ?? "12px",
                      fontWeight: theme.fontWeightMedium,
                      margin: 0,
                    }}
                  >
                    {event.date}
                  </Text>
                </Column>
                <Column style={{ padding: "0 0 0 16px", verticalAlign: "top" }}>
                  <Text
                    style={{
                      color: theme.colorText,
                      fontFamily: theme.fontFamily,
                      fontSize: theme.fontSizeBase ?? "14px",
                      fontWeight: theme.fontWeightMedium,
                      margin: 0,
                      paddingBottom: theme.spacingBase ?? "8px",
                    }}
                  >
                    {event.title}
                  </Text>
                  <Text
                    style={{
                      color: theme.colorTextMuted,
                      fontFamily: theme.fontFamily,
                      fontSize: theme.fontSizeBase ?? "14px",
                      lineHeight: theme.lineHeightBase,
                      margin: 0,
                    }}
                  >
                    {event.description}
                  </Text>
                </Column>
                {i < list.length - 1 ? (
                  <Hr
                    style={{
                      borderBottomWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopColor: theme.colorBorder ?? "#e5e7eb",
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
};

export const StackedBoxedTimeline = ({
  theme = defaultTheme,
  events = [
    { date: "2024-01-01", description: "Initial release.", title: "v1.0.0" },
  ],
  variant = "default",
}: TimelineStackedProps) => (
  <Html>
    <Head />
    <Preview>timeline stacked</Preview>
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
          <TimelineStackedSection
            events={events}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
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
