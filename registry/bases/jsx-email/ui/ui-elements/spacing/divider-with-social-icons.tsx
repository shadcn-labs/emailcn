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

export interface DividerWithSocialIconsProps {
  theme?: EmailThemeTokens;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DividerWithSocialIconsSection = ({
  theme,
  variant,
}: {
  theme: EmailThemeTokens;
  variant: NonNullable<DividerWithSocialIconsProps["variant"]>;
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
              fontSize: theme.fontSizeBase ?? "14px",
              margin: 0,
              textAlign: alignText,
            }}
          >{`\u24D0 \u24B6 \u24C8 \u24CE`}</Text>
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

export const DividerWithSocialIcons = ({
  theme = defaultTheme,
  variant = "default",
}: DividerWithSocialIconsProps) => (
  <Html>
    <Head />
    <Preview>divider-social</Preview>
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
          <DividerWithSocialIconsSection theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);

DividerWithSocialIcons.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithSocialIconsProps;
