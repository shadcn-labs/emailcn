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

export interface DividerWithTitleProps {
  theme?: EmailThemeTokens;
  title?: string;
  variant?: DividerVariant;
}

export const DividerWithTitleSection = ({
  title = "Section Title",
  variant = "center",
}: Omit<DividerWithTitleProps, "theme">) => (
  <DividerFrame variant={variant}>
    <MjmlText
      align="center"
      color={dividerColors.text}
      fontFamily={dividerFontFamily}
      fontSize="14px"
      fontWeight="500"
      lineHeight="20px"
      padding="0"
    >
      {title}
    </MjmlText>
  </DividerFrame>
);

export const DividerWithTitle = ({
  theme = defaultTheme,
  title = "Section Title",
  variant = "center",
}: DividerWithTitleProps) => (
  <SpacingEmailShell preview={title} theme={theme}>
    <DividerWithTitleSection title={title} variant={variant} />
  </SpacingEmailShell>
);

DividerWithTitle.PreviewProps = {
  theme: defaultTheme,
  title: "Featured Products",
  variant: "center",
} satisfies DividerWithTitleProps;
