import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";

import { BentoStatsGridSection } from "./bento-grid-layouts";
import type { BentoStatsGridProps as BentoStatsGridSectionProps } from "./bento-grid-layouts";
import { BentoEmailShell } from "./bento-grid-shared";

export type BentoStatsGridProps = BentoStatsGridSectionProps & {
  theme?: TailwindConfig;
};

export const BentoStatsGrid = (props: BentoStatsGridProps) => (
  <BentoEmailShell
    preview="Flexible bento stats grid"
    theme={props.theme ?? defaultTheme}
  >
    <BentoStatsGridSection {...props} />
  </BentoEmailShell>
);

BentoStatsGrid.PreviewProps = {
  placement: "image-top-right",
  style: "compact",
  theme: defaultTheme,
  variant: "two-thirds",
} satisfies BentoStatsGridProps;
