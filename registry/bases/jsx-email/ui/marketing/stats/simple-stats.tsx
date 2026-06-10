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

export type StatsHighlightVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface StatsHighlightProps {
  theme?: EmailThemeTokens;
  value?: string;
  label?: string;
  variant?: StatsHighlightVariant;
}

const StatsHighlightSection = ({
  label,
  theme,
  value,
  variant,
}: {
  label: string;
  theme: EmailThemeTokens;
  value: string;
  variant: StatsHighlightVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorPrimary,
            fontFamily: theme.fontFamily,
            fontSize: "36px",
            fontWeight: theme.fontWeightBold,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "8px",
            textAlign: "center",
          }}
        >
          {value}
        </Text>
        <Text
          style={{
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeLg ?? "16px",
            margin: 0,
            textAlign: "center",
          }}
        >
          {label}
        </Text>
      </Column>
    </Row>
  </Section>
);

export const SimpleStats = ({
  theme = defaultTheme,
  value = "99.9%",
  label = "Uptime",
  variant = "default",
}: StatsHighlightProps) => (
  <Html>
    <Head />
    <Preview>stats highlight</Preview>
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
          <StatsHighlightSection
            label={label}
            theme={theme}
            value={value}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

SimpleStats.PreviewProps = {
  label: "Customer Satisfaction",
  theme: defaultTheme,
  value: "99.9%",
  variant: "default",
} satisfies StatsHighlightProps;
