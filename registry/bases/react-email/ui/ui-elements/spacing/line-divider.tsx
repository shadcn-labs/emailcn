import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";

import { LineDividerSection, SpacingEmailShell } from "./divider-shared";

export interface LineDividerProps {
  theme?: TailwindConfig;
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
