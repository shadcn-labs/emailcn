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

export interface ProgressBarColumnsProps {
  theme?: EmailThemeTokens;
  values?: number[];
  labels?: string[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const ProgressBarColumnsSection = ({
  values,
  labels,
  theme,
}: {
  values: number[];
  labels?: string[];
  theme: EmailThemeTokens;
}) => (
  <Section style={{ padding: `${theme.spacingLg ?? "32px"} 0` }}>
    <Row>
      {values.slice(0, 4).map((val, i) => {
        const clamped = Math.max(0, Math.min(100, val));
        return (
          <Column
            key={i}
            style={{
              padding: theme.spacingBase ?? "16px",
              width: `${100 / Math.min(values.length, 4)}%`,
            }}
          >
            {labels?.[i] ? (
              <Text
                style={{
                  color: theme.colorText,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeSm ?? "12px",
                  margin: 0,
                  paddingBottom: theme.spacingBase ?? "16px",
                }}
              >
                {labels[i]}
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
                      padding: "6px 0",
                      width: `${clamped}%`,
                    }}
                  >
                    <Text
                      style={{
                        color: theme.colorPrimaryForeground,
                        fontFamily: theme.fontFamily,
                        fontSize: "10px",
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
                  <Column
                    style={{ padding: "0", width: `${100 - clamped}%` }}
                  ></Column>
                ) : null}
              </Row>
            </Section>
          </Column>
        );
      })}
    </Row>
  </Section>
);

export const ProgressBarColumns = ({
  theme = defaultTheme,
  values = [80, 60, 40],
  labels = ["Design", "Dev", "QA"],
  variant = "default",
}: ProgressBarColumnsProps) => (
  <Html>
    <Head />
    <Preview>progress-cols</Preview>
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
          <ProgressBarColumnsSection
            values={values}
            labels={labels}
            theme={theme}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

ProgressBarColumns.PreviewProps = {
  labels: ["Design", "Dev", "Testing"],
  theme: defaultTheme,
  values: [90, 65, 40],
  variant: "default",
} satisfies ProgressBarColumnsProps;
