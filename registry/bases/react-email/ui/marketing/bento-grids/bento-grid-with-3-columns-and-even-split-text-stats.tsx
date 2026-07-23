import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";

import {
  BENTO_ASSET_ROOT,
  BentoEmailShell,
  ThreeColumnStatsSection,
} from "./bento-grid-shared";
import type {
  BentoImagePlacementVariant,
  MetricCardData,
  StatCardData,
} from "./bento-grid-shared";

type Stats = readonly [StatCardData, StatCardData, StatCardData];

export interface BentoGridWith3ColumnsAndEvenSplitTextStatsProps {
  imageAlt?: string;
  imageSrc?: string;
  metric?: MetricCardData;
  stats?: Stats;
  theme?: TailwindConfig;
  variant?: BentoImagePlacementVariant;
}

const metric: MetricCardData = {
  change: "10%",
  comparison: "Compared to last month",
  reportHref: "https://example.com",
  reportLabel: "View report",
  title: "API Calls",
  value: "25k",
};
const stats: Stats = [
  { label: "Engine v2", suffix: "faster", value: "75x" },
  { label: "Cost reduction", suffix: "faster", value: "50%" },
  { label: "Load time", suffix: "faster", value: "75x" },
];

export const BentoGridWith3ColumnsAndEvenSplitTextStatsSection = ({
  imageAlt = "",
  imageSrc = `${BENTO_ASSET_ROOT}/bento-5.jpg`,
  metric: metricData = metric,
  stats: statItems = stats,
  variant = "image-top-right",
}: Omit<BentoGridWith3ColumnsAndEvenSplitTextStatsProps, "theme">) => (
  <ThreeColumnStatsSection
    imageAlt={imageAlt}
    imageSrc={imageSrc}
    metric={metricData}
    mode="text"
    stats={statItems}
    variant={variant}
  />
);

export const BentoGridWith3ColumnsAndEvenSplitTextStats = ({
  imageAlt = "",
  imageSrc = `${BENTO_ASSET_ROOT}/bento-5.jpg`,
  metric: metricData = metric,
  stats: statItems = stats,
  theme = defaultTheme,
  variant = "image-top-right",
}: BentoGridWith3ColumnsAndEvenSplitTextStatsProps) => (
  <BentoEmailShell
    preview="Bento grid with 3 columns and even split text stats"
    theme={theme}
  >
    <BentoGridWith3ColumnsAndEvenSplitTextStatsSection
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      metric={metricData}
      stats={statItems}
      variant={variant}
    />
  </BentoEmailShell>
);

BentoGridWith3ColumnsAndEvenSplitTextStats.PreviewProps = {
  imageAlt: "",
  imageSrc: `${BENTO_ASSET_ROOT}/bento-5.jpg`,
  metric,
  stats,
  theme: defaultTheme,
  variant: "image-top-right",
} satisfies BentoGridWith3ColumnsAndEvenSplitTextStatsProps;
