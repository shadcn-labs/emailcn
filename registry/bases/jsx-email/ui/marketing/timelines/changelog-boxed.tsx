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
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      {(events ?? []).map((e, i) => (
        <Section
          key={e.title + i}
          style={{ padding: `${theme.spacingBase ?? "16px"} 0` }}
        >
          <Row>
            <Column
              style={{ padding: "0", verticalAlign: "top", width: "80px" }}
            >
              <Text
                style={{
                  color: theme.colorPrimary,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeSm,
                  fontWeight: theme.fontWeightBold,
                  margin: 0,
                }}
              >
                {e.date}
              </Text>
            </Column>
            <Column
              style={{
                borderLeft: `2px solid ${theme.colorPrimary}`,
                padding: "0 0 0 16px",
                verticalAlign: "top",
              }}
            >
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
            </Column>
          </Row>
        </Section>
      ))}
    </Row>
  </Section>
);
export const ChangelogBoxed = ({
  theme = defaultTheme,
  events = [
    { date: "2024-01", description: "Initial release.", title: "v1.0.0" },
  ],
  variant = "default",
}: TimelineBorderedProps) => (
  <Html>
    <Head />
    <Preview>timeline bordered</Preview>
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
          <TimelineBorderedSection
            events={events}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
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
