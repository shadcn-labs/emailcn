import { MjmlButton } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

import {
  DividerFrame,
  SpacingEmailShell,
  dividerColors,
  dividerFontFamily,
} from "./divider-shared";
import type { DividerVariant } from "./divider-shared";

export interface DividerWithIconButtonProps {
  href?: string;
  icon?: string;
  label?: string;
  theme?: EmailThemeTokens;
  variant?: DividerVariant;
}

export const DividerWithIconButtonSection = ({
  href = "#",
  icon = "➜",
  label = "Learn More",
  variant = "center",
}: Omit<DividerWithIconButtonProps, "theme">) => (
  <DividerFrame variant={variant}>
    <MjmlButton
      align="center"
      backgroundColor={dividerColors.text}
      borderRadius="6px"
      color={dividerColors.white}
      fontFamily={dividerFontFamily}
      fontSize="12px"
      fontWeight="500"
      href={href}
      innerPadding="8px 16px"
      lineHeight="18px"
      padding="0"
    >
      {icon}&nbsp;&nbsp;{label}
    </MjmlButton>
  </DividerFrame>
);

export const DividerWithIconButton = ({
  href = "#",
  icon = "➜",
  label = "Learn More",
  theme = defaultTheme,
  variant = "center",
}: DividerWithIconButtonProps) => (
  <SpacingEmailShell preview={label} theme={theme}>
    <DividerWithIconButtonSection
      href={href}
      icon={icon}
      label={label}
      variant={variant}
    />
  </SpacingEmailShell>
);

DividerWithIconButton.PreviewProps = {
  href: "https://example.com",
  icon: "➜",
  label: "Learn More",
  theme: defaultTheme,
  variant: "center",
} satisfies DividerWithIconButtonProps;
