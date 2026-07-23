import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

import {
  DividerFrame,
  SpacingEmailShell,
  dividerTextStyle,
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
    <p style={{ ...dividerTextStyle, fontWeight: 500 }}>{title}</p>
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
