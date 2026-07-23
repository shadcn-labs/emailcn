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

export interface DividerWithButtonProps {
  href?: string;
  label?: string;
  theme?: EmailThemeTokens;
  variant?: DividerVariant;
}

export const DividerWithButtonSection = ({
  href = "#",
  label = "View All",
  variant = "center",
}: Omit<DividerWithButtonProps, "theme">) => (
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
      {label}
    </MjmlButton>
  </DividerFrame>
);

export const DividerWithButton = ({
  href = "#",
  label = "View All",
  theme = defaultTheme,
  variant = "center",
}: DividerWithButtonProps) => (
  <SpacingEmailShell preview={label} theme={theme}>
    <DividerWithButtonSection href={href} label={label} variant={variant} />
  </SpacingEmailShell>
);

DividerWithButton.PreviewProps = {
  href: "https://example.com/shop",
  label: "Shop Now",
  theme: defaultTheme,
  variant: "center",
} satisfies DividerWithButtonProps;
