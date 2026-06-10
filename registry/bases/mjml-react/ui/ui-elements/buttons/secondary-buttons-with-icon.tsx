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

export interface SecondaryButtonsWithIconProps {
  theme?: EmailThemeTokens;
  label?: string;
  href?: string;
  icon?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const SecondaryButtonsWithIconSection = ({
  label,
  href,
  icon,
  theme,
  variant,
}: {
  label: string;
  href: string;
  icon: string;
  theme: EmailThemeTokens;
  variant: NonNullable<SecondaryButtonsWithIconProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";
  return (
    <MjmlSection padding={`${theme.spacingBase ?? "24px"} 0`}>
      <MjmlColumn>
        <MjmlText
          align={alignText}
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
          paddingBottom={theme.spacingBase ?? "16px"}
        >
          {icon}
        </MjmlText>
        <MjmlButton
          align={alignText}
          backgroundColor={theme.button.secondary.backgroundColor}
          border={theme.button.secondary.border}
          borderRadius={theme.button.secondary.borderRadius}
          color={theme.button.secondary.color}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
          fontWeight={theme.fontWeightMedium ?? "500"}
          href={href}
          innerPadding={`${theme.button.secondary.paddingY ?? "12px"} ${theme.button.secondary.paddingX ?? "24px"}`}
        >
          {label}
        </MjmlButton>
      </MjmlColumn>
    </MjmlSection>
  );
};

export const SecondaryButtonsWithIcon = ({
  theme = defaultTheme,
  label = "Learn More",
  href = "#",
  icon = "\u279C",
  variant = "default",
}: SecondaryButtonsWithIconProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>secondary-icon-btn</MjmlPreview>
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
        <SecondaryButtonsWithIconSection
          label={label}
          href={href}
          icon={icon}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

SecondaryButtonsWithIcon.PreviewProps = {
  href: "#",
  icon: "\u279C",
  label: "Learn More",
  theme: defaultTheme,
  variant: "default",
} satisfies SecondaryButtonsWithIconProps;
