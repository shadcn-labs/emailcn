import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";

import { SpacingEmailShell, VerticalSpacerSection } from "./divider-shared";

export interface VerticalSpacerProps {
  height?: number;
  theme?: TailwindConfig;
}

export { VerticalSpacerSection };

export const VerticalSpacer = ({
  height = 24,
  theme = defaultTheme,
}: VerticalSpacerProps) => (
  <SpacingEmailShell preview="Vertical spacer" theme={theme}>
    <VerticalSpacerSection height={height} />
  </SpacingEmailShell>
);

VerticalSpacer.PreviewProps = {
  height: 48,
  theme: defaultTheme,
} satisfies VerticalSpacerProps;
