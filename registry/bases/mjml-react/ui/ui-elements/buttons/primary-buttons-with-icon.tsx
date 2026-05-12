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

export interface PrimaryButtonsWithIconProps {
  theme?: EmailThemeTokens;
  label?: string;
  href?: string;
  icon?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const PrimaryButtonsWithIconSection = ({
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
  variant: NonNullable<PrimaryButtonsWithIconProps["variant"]>;
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
          backgroundColor={theme.colorPrimary}
          borderRadius={theme.borderRadius}
          color={theme.colorPrimaryForeground ?? "#ffffff"}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
          fontWeight={theme.fontWeightMedium ?? "500"}
          href={href}
          innerPadding={`${theme.spacingBase ?? "16px"} ${theme.spacingLg ?? "24px"}`}
        >
          {label}
        </MjmlButton>
      </MjmlColumn>
    </MjmlSection>
  );
};

export const PrimaryButtonsWithIcon = ({
  theme = defaultTheme,
  label = "Shop Now",
  href = "#",
  icon = "\u279C",
  variant = "default",
}: PrimaryButtonsWithIconProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>primary-icon-btn</MjmlPreview>
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
        <PrimaryButtonsWithIconSection
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

PrimaryButtonsWithIcon.PreviewProps = {
  href: "#",
  icon: "\u279C",
  label: "Shop Now",
  theme: defaultTheme,
  variant: "default",
} satisfies PrimaryButtonsWithIconProps;
