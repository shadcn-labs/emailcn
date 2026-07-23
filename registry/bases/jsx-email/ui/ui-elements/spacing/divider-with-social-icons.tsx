import { Text } from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

import {
  DividerFrame,
  SpacingEmailShell,
  dividerTextStyle,
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
    <Text
      style={{
        ...dividerTextStyle,
        fontSize: "18px",
        letterSpacing: "8px",
        lineHeight: "28px",
      }}
    >
      {"ⓐ Ⓐ Ⓢ Ⓨ"}
    </Text>
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
