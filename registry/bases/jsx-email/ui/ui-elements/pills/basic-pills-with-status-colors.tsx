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

export type PillStatusVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info";

export interface BasicPillsStatusColorsProps {
  theme?: EmailThemeTokens;
  pills?: { label: string; variant: PillStatusVariant }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const pillColors = (v: PillStatusVariant, theme: EmailThemeTokens) => {
  switch (v) {
    case "success": {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorSuccess ?? "#10b981",
        text: theme.colorSuccess ?? "#10b981",
      };
    }
    case "warning": {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorWarning ?? "#f59e0b",
        text: theme.colorWarning ?? "#f59e0b",
      };
    }
    case "danger": {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorDanger ?? "#ef4444",
        text: theme.colorDanger ?? "#ef4444",
      };
    }
    case "info": {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorPrimary,
        text: theme.colorPrimary,
      };
    }
    default: {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorBorder ?? "#e5e7eb",
        text: theme.colorTextMuted,
      };
    }
  }
};

const BasicPillsStatusColorsSection = ({
  pills,
  theme,
  variant,
}: {
  pills: NonNullable<BasicPillsStatusColorsProps["pills"]>;
  theme: EmailThemeTokens;
  variant: NonNullable<BasicPillsStatusColorsProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";
  return (
    <Section style={{ padding: `${theme.spacingBase ?? "24px"} 0` }}>
      <Row>
        {pills.map((pill) => {
          const c = pillColors(pill.variant, theme);
          return (
            <Column key={pill.label} style={{ padding: "4px" }}>
              <Section
                style={{
                  backgroundColor: c.bg,
                  border: `1px solid ${c.border}`,
                  borderRadius: theme.borderRadius,
                  padding: "4px 12px",
                }}
              >
                <Row>
                  <Column>
                    <Text
                      style={{
                        color: c.text,
                        fontFamily: theme.fontFamily,
                        fontSize: theme.fontSizeSm ?? "12px",
                        fontWeight: theme.fontWeightMedium ?? "500",
                        margin: 0,
                        padding: "0",
                        textAlign: alignText,
                      }}
                    >
                      {pill.label}
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Column>
          );
        })}
      </Row>
    </Section>
  );
};

export const BasicPillsStatusColors = ({
  theme = defaultTheme,
  pills = [
    { label: "Active", variant: "success" as PillStatusVariant },
    { label: "Pending", variant: "warning" as PillStatusVariant },
  ],
  variant = "default",
}: BasicPillsStatusColorsProps) => (
  <Html>
    <Head />
    <Preview>pills</Preview>
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
          <BasicPillsStatusColorsSection
            pills={pills}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

BasicPillsStatusColors.PreviewProps = {
  pills: [
    { label: "Active", variant: "success" },
    { label: "Pending", variant: "warning" },
    { label: "Cancelled", variant: "danger" },
    { label: "New", variant: "info" },
    { label: "Draft", variant: "default" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BasicPillsStatusColorsProps;
