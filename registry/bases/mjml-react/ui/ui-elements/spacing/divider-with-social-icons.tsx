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

export interface DividerWithSocialIconsProps {
  theme?: EmailThemeTokens;
  variant?: DividerVariant;
}

export const DividerWithSocialIconsSection = ({
  variant = "center",
}: Omit<DividerWithSocialIconsProps, "theme">) => (
  <DividerFrame variant={variant}>
    <MjmlText
      align="center"
      color={dividerColors.text}
      fontFamily={dividerFontFamily}
      fontSize="18px"
      letterSpacing="8px"
      lineHeight="28px"
      padding="0"
    >
      {"ⓐ Ⓐ Ⓢ Ⓨ"}
    </MjmlText>
  </DividerFrame>
);

export const DividerWithSocialIcons = ({
  theme = defaultTheme,
  variant = "center",
}: DividerWithSocialIconsProps) => (
  <SpacingEmailShell preview="Divider with social icons" theme={theme}>
    <DividerWithSocialIconsSection variant={variant} />
  </SpacingEmailShell>
);

DividerWithSocialIcons.PreviewProps = {
  theme: defaultTheme,
  variant: "center",
} satisfies DividerWithSocialIconsProps;
