import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";

import {
  FullWidthProgressContent,
  ProgressEmailShell,
} from "./progress-bar-shared";
import type { ProgressBarContentVariant } from "./progress-bar-shared";

export interface FullWidthProgressBarProps {
  description?: string;
  theme?: TailwindConfig;
  title?: string;
  value?: number;
  variant?: ProgressBarContentVariant;
}

const defaultDescription =
  "Automate your workflows across tools with no code required. From CRM syncs to AI-powered triggers, FlowSync keeps your operations moving seamlessly.";

export const FullWidthProgressBarSection = ({
  description = defaultDescription,
  title = "FlowSync",
  value,
  variant = "text-top",
}: Omit<FullWidthProgressBarProps, "theme">) => (
  <FullWidthProgressContent
    description={description}
    title={title}
    value={value ?? (variant === "text-top" ? 42 : 33)}
    variant={variant}
  />
);

export const FullWidthProgressBar = ({
  description = defaultDescription,
  theme = defaultTheme,
  title = "FlowSync",
  value,
  variant = "text-top",
}: FullWidthProgressBarProps) => (
  <ProgressEmailShell
    horizontalPadding={64}
    preview="Full width progress bar"
    theme={theme}
    topSpacer={30}
  >
    <FullWidthProgressBarSection
      description={description}
      title={title}
      value={value}
      variant={variant}
    />
  </ProgressEmailShell>
);

FullWidthProgressBar.PreviewProps = {
  description: defaultDescription,
  theme: defaultTheme,
  title: "FlowSync",
  variant: "text-top",
} satisfies FullWidthProgressBarProps;
