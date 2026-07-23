import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

import {
  getContentVariant,
  isPaddedVariant,
  ProgressBarColumnsContent,
  ProgressEmailShell,
} from "./progress-bar-shared";
import type {
  ProgressBarColumnsVariant,
  ProgressBarItem,
} from "./progress-bar-shared";

export interface ProgressBarColumnsProps {
  items?: readonly [ProgressBarItem, ProgressBarItem];
  theme?: EmailThemeTokens;
  variant?: ProgressBarColumnsVariant;
}

const flowSyncDescription =
  "Automate your workflows across tools with no code required. From CRM syncs to AI-powered triggers, FlowSync keeps your operations moving seamlessly.";

const insightDescription =
  "Turn raw data into instant clarity. InsightIQ combines analytics, AI summaries, and interactive reporting to help teams make better decisions faster.";

const getDefaultItems = (
  variant: ProgressBarColumnsVariant
): readonly [ProgressBarItem, ProgressBarItem] => {
  const textTop = getContentVariant(variant) === "text-top";

  return [
    {
      color: "#2dd4bf",
      description: flowSyncDescription,
      title: "FlowSync",
      value: 33,
    },
    {
      color: "#818cf8",
      description: textTop ? flowSyncDescription : insightDescription,
      title: "InsightIQ",
      value: 50,
    },
  ];
};

export const ProgressBarColumnsSection = ({
  items,
  variant = "with-text",
}: Omit<ProgressBarColumnsProps, "theme">) => (
  <ProgressBarColumnsContent
    items={items ?? getDefaultItems(variant)}
    variant={variant}
  />
);

export const ProgressBarColumns = ({
  items,
  theme = defaultTheme,
  variant = "with-text",
}: ProgressBarColumnsProps) => (
  <ProgressEmailShell
    horizontalPadding={isPaddedVariant(variant) ? 64 : 24}
    preview="Progress bar columns"
    theme={theme}
    topSpacer={30}
  >
    <ProgressBarColumnsSection items={items} variant={variant} />
  </ProgressEmailShell>
);

ProgressBarColumns.PreviewProps = {
  theme: defaultTheme,
  variant: "with-text",
} satisfies ProgressBarColumnsProps;
