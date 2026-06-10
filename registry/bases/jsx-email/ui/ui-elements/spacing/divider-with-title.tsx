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

export interface DividerWithTitleProps {
  theme?: EmailThemeTokens;
  title?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DividerWithTitleSection = ({
  title,
  theme,
  variant,
}: {
  title: string;
  theme: EmailThemeTokens;
  variant: NonNullable<DividerWithTitleProps["variant"]>;
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
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase ?? "14px",
              fontWeight: theme.fontWeightMedium ?? "500",
              margin: 0,
              textAlign: alignText,
            }}
          >
            {title}
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

export const DividerWithTitle = ({
  theme = defaultTheme,
  title = "Section",
  variant = "default",
}: DividerWithTitleProps) => (
  <Html>
    <Head />
    <Preview>divider-title</Preview>
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
          <DividerWithTitleSection
            title={title}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

DividerWithTitle.PreviewProps = {
  theme: defaultTheme,
  title: "Featured Products",
  variant: "default",
} satisfies DividerWithTitleProps;
