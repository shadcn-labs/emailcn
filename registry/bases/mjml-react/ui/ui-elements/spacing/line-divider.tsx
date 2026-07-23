import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

import { LineDividerSection, SpacingEmailShell } from "./divider-shared";

export interface LineDividerProps {
  theme?: EmailThemeTokens;
}

export { LineDividerSection };

export const LineDivider = ({ theme = defaultTheme }: LineDividerProps) => (
  <SpacingEmailShell preview="Line divider" theme={theme}>
    <LineDividerSection />
  </SpacingEmailShell>
);

LineDivider.PreviewProps = {
  theme: defaultTheme,
} satisfies LineDividerProps;
