import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

import {
  isPaddedVariant,
  ProgressBarGroupContent,
  ProgressEmailShell,
} from "./progress-bar-shared";
import type {
  ProgressBarItem,
  ProgressBarPaddedVariant,
} from "./progress-bar-shared";

export interface ProgressBarGroupProps {
  description?: string;
  items?: readonly ProgressBarItem[];
  theme?: EmailThemeTokens;
  title?: string;
  variant?: ProgressBarPaddedVariant;
}

const defaultDescription =
  "Automate your workflows across tools with no code required. From CRM syncs to AI-powered triggers, FlowSync keeps your operations moving seamlessly.";

const defaultItems = [
  { color: "#2dd4bf", title: "Ease of use", value: 75 },
  { color: "#fda4af", title: "Cost", value: 50 },
  { color: "#818cf8", title: "Integrations", value: 80 },
] as const satisfies readonly ProgressBarItem[];

export const ProgressBarGroupSection = ({
  description = defaultDescription,
  items = defaultItems,
  title = "FlowSync",
  variant = "text-top",
}: Omit<ProgressBarGroupProps, "theme">) => (
  <ProgressBarGroupContent
    description={description}
    items={items}
    title={title}
    variant={variant}
  />
);

export const ProgressBarGroup = ({
  description = defaultDescription,
  items = defaultItems,
  theme = defaultTheme,
  title = "FlowSync",
  variant = "text-top",
}: ProgressBarGroupProps) => (
  <ProgressEmailShell
    horizontalPadding={isPaddedVariant(variant) ? 64 : 24}
    preview="Progress bar group"
    theme={theme}
    topSpacer={44}
  >
    <ProgressBarGroupSection
      description={description}
      items={items}
      title={title}
      variant={variant}
    />
  </ProgressEmailShell>
);

ProgressBarGroup.PreviewProps = {
  description: defaultDescription,
  items: defaultItems,
  theme: defaultTheme,
  title: "FlowSync",
  variant: "text-top",
} satisfies ProgressBarGroupProps;
