import { MjmlText } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

import {
  DividerFrame,
  SpacingEmailShell,
  dividerColors,
  dividerFontFamily,
} from "./divider-shared";
import type { DividerVariant } from "./divider-shared";

export interface DividerWithIconProps {
  icon?: string;
  theme?: EmailThemeTokens;
  variant?: DividerVariant;
}

export const DividerWithIconSection = ({
  icon = "✨",
  variant = "center",
}: Omit<DividerWithIconProps, "theme">) => (
  <DividerFrame variant={variant}>
    <MjmlText
      align="center"
      color={dividerColors.text}
      fontFamily={dividerFontFamily}
      fontSize="18px"
      lineHeight="28px"
      padding="0"
    >
      {icon}
    </MjmlText>
  </DividerFrame>
);

export const DividerWithIcon = ({
  icon = "✨",
  theme = defaultTheme,
  variant = "center",
}: DividerWithIconProps) => (
  <SpacingEmailShell preview="Divider with icon" theme={theme}>
    <DividerWithIconSection icon={icon} variant={variant} />
  </SpacingEmailShell>
);

DividerWithIcon.PreviewProps = {
  icon: "✨",
  theme: defaultTheme,
  variant: "center",
} satisfies DividerWithIconProps;
