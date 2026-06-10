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

export interface ProgressBarGroupProps {
  theme?: EmailThemeTokens;
  items?: { label: string; value: number }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const ProgressBarGroupSection = ({
  items,
  theme,
}: {
  items: NonNullable<ProgressBarGroupProps["items"]>;
  theme: EmailThemeTokens;
}) => (
  <Section style={{ padding: `${theme.spacingLg ?? "32px"} 0` }}>
    <Row>
      <Column>
        {items.map((item) => {
          const clamped = Math.max(0, Math.min(100, item.value));
          return (
            <Section
              key={item.label}
              style={{ padding: `0 0 ${theme.spacingBase ?? "16px"}` }}
            >
              <Row>
                <Column>
                  <Text
                    style={{
                      color: theme.colorText,
                      fontFamily: theme.fontFamily,
                      fontSize: theme.fontSizeSm ?? "12px",
                      margin: 0,
                      paddingBottom: theme.spacingBase ?? "16px",
                    }}
                  >
                    {item.label}
                  </Text>
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
              </Row>
            </Section>
          );
        })}
      </Column>
    </Row>
  </Section>
);

export const ProgressBarGroup = ({
  theme = defaultTheme,
  items = [
    { label: "Task 1", value: 80 },
    { label: "Task 2", value: 60 },
  ],
  variant = "default",
}: ProgressBarGroupProps) => (
  <Html>
    <Head />
    <Preview>progress-group</Preview>
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
          <ProgressBarGroupSection items={items} theme={theme} />
        </Section>
      </Container>
    </Body>
  </Html>
);

ProgressBarGroup.PreviewProps = {
  items: [
    { label: "Research", value: 100 },
    { label: "Design", value: 75 },
    { label: "Dev", value: 50 },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies ProgressBarGroupProps;
