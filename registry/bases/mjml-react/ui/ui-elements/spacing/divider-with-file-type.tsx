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

export interface DividerWithFileTypeProps {
  fileType?: string;
  theme?: EmailThemeTokens;
  variant?: DividerVariant;
}

export const DividerWithFileTypeSection = ({
  fileType = "PDF",
  variant = "center",
}: Omit<DividerWithFileTypeProps, "theme">) => (
  <DividerFrame variant={variant}>
    <MjmlButton
      align="center"
      backgroundColor={dividerColors.mutedBackground}
      borderRadius="4px"
      color={dividerColors.muted}
      fontFamily={dividerFontFamily}
      fontSize="12px"
      fontWeight="500"
      innerPadding="4px 8px"
      lineHeight="18px"
      padding="0"
    >
      {fileType}
    </MjmlButton>
  </DividerFrame>
);

export const DividerWithFileType = ({
  fileType = "PDF",
  theme = defaultTheme,
  variant = "center",
}: DividerWithFileTypeProps) => (
  <SpacingEmailShell preview={fileType} theme={theme}>
    <DividerWithFileTypeSection fileType={fileType} variant={variant} />
  </SpacingEmailShell>
);

DividerWithFileType.PreviewProps = {
  fileType: "PDF",
  theme: defaultTheme,
  variant: "center",
} satisfies DividerWithFileTypeProps;
