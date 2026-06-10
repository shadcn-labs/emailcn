/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
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

export interface ButtonsProps {
  theme?: EmailThemeTokens;
  label?: string;
  href?: string;
  icon?: string;
  variant?: "primary" | "secondary" | "text";
  align?: "left" | "center" | "right";
}

const ButtonsSection = ({
  label,
  href,
  icon,
  theme,
  variant,
  align,
}: {
  label: string;
  href: string;
  icon?: string;
  theme: EmailThemeTokens;
  variant: NonNullable<ButtonsProps["variant"]>;
  align: NonNullable<ButtonsProps["align"]>;
}) => {
  const buttonStyle =
    variant === "secondary"
      ? {
          backgroundColor: theme.button.secondary.backgroundColor,
          border: theme.button.secondary.border,
          borderRadius: theme.button.secondary.borderRadius,
          color: theme.button.secondary.color,
          innerPadding: `${theme.button.secondary.paddingY ?? "12px"} ${theme.button.secondary.paddingX ?? "24px"}`,
        }
      : {
          backgroundColor: theme.colorPrimary,
          border: undefined,
          borderRadius: theme.borderRadius,
          color: theme.colorPrimaryForeground ?? "#ffffff",
          innerPadding: `${theme.spacingBase ?? "16px"} ${theme.spacingLg ?? "24px"}`,
        };

  return (
    <Section style={{ padding: `${theme.spacingBase ?? "24px"} 0` }}>
      <Row>
        <Column>
          {variant === "text" ? (
            <Text
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeBase ?? "14px",
                margin: 0,
                textAlign: align,
              }}
            >
              <a
                href={href}
                style={{
                  color: theme.colorPrimary,
                  fontFamily: theme.fontFamily,
                  textDecoration: "underline",
                }}
              >
                {icon ? `${icon} ${label}` : label}
              </a>
            </Text>
          ) : (
            <>
              {icon ? (
                <Text
                  style={{
                    color: theme.colorTextMuted,
                    fontFamily: theme.fontFamily,
                    fontSize: theme.fontSizeBase ?? "14px",
                    margin: 0,
                    paddingBottom: theme.spacingBase ?? "16px",
                    textAlign: align,
                  }}
                >
                  {icon}
                </Text>
              ) : null}
              <Button
                href={href}
                align={align}
                width={160}
                height={40}
                style={{
                  backgroundColor: buttonStyle.backgroundColor,
                  border: buttonStyle.border,
                  borderRadius: buttonStyle.borderRadius,
                  color: buttonStyle.color,
                  display: "inline-block",
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeBase ?? "14px",
                  fontWeight: theme.fontWeightMedium ?? "500",
                  height: "auto",
                  padding: buttonStyle.innerPadding,
                  textDecoration: "none",
                  width: "auto",
                }}
              >
                {label}
              </Button>
            </>
          )}
        </Column>
      </Row>
    </Section>
  );
};

export const Buttons = ({
  theme = defaultTheme,
  label = "Click Here",
  href = "#",
  icon,
  variant = "primary",
  align = "center",
}: ButtonsProps) => (
  <Html>
    <Head />
    <Preview>{label}</Preview>
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
          <ButtonsSection
            label={label}
            href={href}
            icon={icon}
            theme={theme}
            variant={variant}
            align={align}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

Buttons.PreviewProps = {
  align: "center",
  href: "https://example.com",
  label: "Get Started",
  theme: defaultTheme,
  variant: "primary",
} satisfies ButtonsProps;
