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

export interface DividerWithIconProps {
  theme?: EmailThemeTokens;
  icon?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DividerWithIconSection = ({
  icon,
  theme,
  variant,
}: {
  icon: string;
  theme: EmailThemeTokens;
  variant: NonNullable<DividerWithIconProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";
  return (
    <Section style={{ padding: `${theme.spacingBase ?? "16px"} 0` }}>
      <Row>
        <Column>
          <Hr
            style={{
              borderBottomWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopColor: theme.colorBorder,
              borderTopStyle: "solid",
              marginBottom: theme.spacingBase ?? "16px",
              width: "100%",
            }}
          />
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeLg ?? "16px",
              margin: 0,
              textAlign: alignText,
            }}
          >
            {icon}
          </Text>
          <Hr
            style={{
              borderBottomWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopColor: theme.colorBorder,
              borderTopStyle: "solid",
              marginTop: theme.spacingBase ?? "16px",
              width: "100%",
            }}
          />
        </Column>
      </Row>
    </Section>
  );
};

export const DividerWithIcon = ({
  theme = defaultTheme,
  icon = "\u2728",
  variant = "default",
}: DividerWithIconProps) => (
  <Html>
    <Head />
    <Preview>divider-icon</Preview>
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
          <DividerWithIconSection icon={icon} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);

DividerWithIcon.PreviewProps = {
  icon: "\u2728",
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithIconProps;
