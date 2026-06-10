/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
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

export interface DividerWithIconButtonProps {
  theme?: EmailThemeTokens;
  icon?: string;
  label?: string;
  href?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DividerWithIconButtonSection = ({
  icon,
  label,
  href,
  theme,
  variant,
}: {
  icon: string;
  label: string;
  href: string;
  theme: EmailThemeTokens;
  variant: NonNullable<DividerWithIconButtonProps["variant"]>;
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
              paddingBottom: theme.spacingBase ?? "16px",
              textAlign: alignText,
            }}
          >
            {icon}
          </Text>
          <Button
            href={href}
            align={alignText}
            width={160}
            height={40}
            style={{
              backgroundColor: theme.colorPrimary,
              borderRadius: theme.borderRadius,
              color: theme.colorPrimaryForeground ?? "#ffffff",
              display: "inline-block",
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "12px",
              fontWeight: theme.fontWeightMedium ?? "500",
              height: "auto",
              padding: `${theme.spacingBase ?? "16px"} ${theme.spacingLg ?? "24px"}`,
              textDecoration: "none",
              width: "auto",
            }}
          >
            {label}
          </Button>
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

export const DividerWithIconButton = ({
  theme = defaultTheme,
  icon = "\u279C",
  label = "Discover",
  href = "#",
  variant = "default",
}: DividerWithIconButtonProps) => (
  <Html>
    <Head />
    <Preview>divider-icon-btn</Preview>
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
          <DividerWithIconButtonSection
            icon={icon}
            label={label}
            href={href}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

DividerWithIconButton.PreviewProps = {
  href: "https://example.com",
  icon: "\u279C",
  label: "Learn More",
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithIconButtonProps;
