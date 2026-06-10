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
              style={{
                border: `1px solid ${theme.colorBorder ?? "#e5e7eb"}`,
                borderRadius: theme.borderRadius,
                padding: theme.spacingBase ?? "24px",
              }}
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
              </Row>
            </Section>
          ))}
        </Column>
      </Row>
    </Section>
  );
};

export const Changelog = ({
  theme = defaultTheme,
  events = [
    { date: "2024-01-01", description: "Initial release.", title: "v1.0.0" },
  ],
  variant = "default",
}: TimelineBoxedProps) => (
  <Html>
    <Head />
    <Preview>timeline boxed</Preview>
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
          <TimelineBoxedSection
            events={events}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

Changelog.PreviewProps = {
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
