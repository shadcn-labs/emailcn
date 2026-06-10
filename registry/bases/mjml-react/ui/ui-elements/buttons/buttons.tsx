/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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
    <MjmlSection padding={`${theme.spacingBase ?? "24px"} 0`}>
      <MjmlColumn>
        {variant === "text" ? (
          <MjmlText
            align={align}
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase ?? "14px"}
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
          </MjmlText>
        ) : (
          <>
            {icon ? (
              <MjmlText
                align={align}
                color={theme.colorTextMuted}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeBase ?? "14px"}
                paddingBottom={theme.spacingBase ?? "16px"}
              >
                {icon}
              </MjmlText>
            ) : null}
            <MjmlButton
              align={align}
              backgroundColor={buttonStyle.backgroundColor}
              border={buttonStyle.border}
              borderRadius={buttonStyle.borderRadius}
              color={buttonStyle.color}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase ?? "14px"}
              fontWeight={theme.fontWeightMedium ?? "500"}
              href={href}
              innerPadding={buttonStyle.innerPadding}
            >
              {label}
            </MjmlButton>
          </>
        )}
      </MjmlColumn>
    </MjmlSection>
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{label}</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <ButtonsSection
          label={label}
          href={href}
          icon={icon}
          theme={theme}
          variant={variant}
          align={align}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

Buttons.PreviewProps = {
  align: "center",
  href: "https://example.com",
  label: "Get Started",
  theme: defaultTheme,
  variant: "primary",
} satisfies ButtonsProps;
