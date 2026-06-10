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

export interface FullWidthProgressBarProps {
  theme?: EmailThemeTokens;
  value?: number;
  label?: string;
  showLabel?: boolean;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const FullWidthProgressBarSection = ({
  value,
  label,
  showLabel,
  theme,
}: {
  value: number;
  label?: string;
  showLabel: boolean;
  theme: EmailThemeTokens;
}) => {
  const clamped = Math.max(0, Math.min(100, value));
  const fillWidth = `${clamped}%`;
  const emptyWidth = `${100 - clamped}%`;

  return (
    <Section style={{ padding: `${theme.spacingLg ?? "32px"} 0` }}>
      <Row>
        <Column>
          {label || showLabel ? (
            <Text
              style={{
                color: theme.colorText,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeBase ?? "14px",
                fontWeight: theme.fontWeightMedium ?? "500",
                margin: 0,
                paddingBottom: theme.spacingBase ?? "16px",
              }}
            >
              {label ?? `${clamped}%`}
              {showLabel && label ? ` — ${clamped}%` : null}
            </Text>
          ) : null}
          <Section
            style={{
              backgroundColor: theme.colorBackgroundSubtle ?? "#f3f4f6",
              borderRadius: theme.borderRadius,
              padding: "0",
            }}
          >
            <Row>
              {clamped > 0 ? (
                <Column
                  style={{
                    backgroundColor: theme.colorPrimary,
                    borderRadius: theme.borderRadius,
                    padding: "8px 0",
                    width: fillWidth,
                  }}
                >
                  <Text
                    style={{
                      color: theme.colorPrimaryForeground,
                      fontFamily: theme.fontFamily,
                      fontSize: theme.fontSizeSm ?? "12px",
                      fontWeight: theme.fontWeightBold ?? "600",
                      margin: 0,
                      padding: "0",
                      textAlign: "center",
                    }}
                  >
                    {clamped}%
                  </Text>
                </Column>
              ) : null}
              {clamped < 100 ? (
                <Column style={{ padding: "0", width: emptyWidth }}></Column>
              ) : null}
            </Row>
          </Section>
        </Column>
      </Row>
    </Section>
  );
};

export const FullWidthProgressBar = ({
  theme = defaultTheme,
  value = 65,
  label,
  showLabel = true,
  variant = "default",
}: FullWidthProgressBarProps) => (
  <Html>
    <Head />
    <Preview>progress-bar</Preview>
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
          <FullWidthProgressBarSection
            value={value}
            label={label}
            showLabel={showLabel}
            theme={theme}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

FullWidthProgressBar.PreviewProps = {
  label: "Progress",
  showLabel: true,
  theme: defaultTheme,
  value: 65,
  variant: "default",
} satisfies FullWidthProgressBarProps;
