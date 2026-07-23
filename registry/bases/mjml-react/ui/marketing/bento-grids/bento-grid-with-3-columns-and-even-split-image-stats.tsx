import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

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

export interface BentoGridWith3ColumnsAndEvenSplitImageStatsProps {
  imageAlt?: string;
  imageSrc?: string;
  metric?: MetricCardData;
  stats?: Stats;
  theme?: EmailThemeTokens;
  variant?: BentoImagePlacementVariant;
}

const metric: MetricCardData = {
  change: "10% increase",
  reportHref: "https://example.com",
  reportLabel: "View report",
  title: "API Calls",
  value: "25,000",
};
const stats: Stats = [
  { label: "Engine v2", suffix: "faster", value: "75x" },
  { label: "Cost reduction", suffix: "faster", value: "50%" },
  { label: "Load time", suffix: "faster", value: "75x" },
];

export const BentoGridWith3ColumnsAndEvenSplitImageStatsSection = ({
  imageAlt = "",
  imageSrc = `${BENTO_ASSET_ROOT}/bento-2.jpg`,
  metric: metricData = metric,
  stats: statItems = stats,
  variant = "image-top-right",
}: Omit<BentoGridWith3ColumnsAndEvenSplitImageStatsProps, "theme">) => (
  <ThreeColumnStatsSection
    imageAlt={imageAlt}
    imageSrc={imageSrc}
    metric={metricData}
    mode="image"
    stats={statItems}
    variant={variant}
  />
);

export const BentoGridWith3ColumnsAndEvenSplitImageStats = ({
  imageAlt = "",
  imageSrc = `${BENTO_ASSET_ROOT}/bento-2.jpg`,
  metric: metricData = metric,
  stats: statItems = stats,
  theme = defaultTheme,
  variant = "image-top-right",
}: BentoGridWith3ColumnsAndEvenSplitImageStatsProps) => (
  <BentoEmailShell
    preview="Bento grid with 3 columns and even split image stats"
    theme={theme}
  >
    <BentoGridWith3ColumnsAndEvenSplitImageStatsSection
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      metric={metricData}
      stats={statItems}
      variant={variant}
    />
  </BentoEmailShell>
);

BentoGridWith3ColumnsAndEvenSplitImageStats.PreviewProps = {
  imageAlt: "",
  imageSrc: `${BENTO_ASSET_ROOT}/bento-2.jpg`,
  metric,
  stats,
  theme: defaultTheme,
  variant: "image-top-right",
} satisfies BentoGridWith3ColumnsAndEvenSplitImageStatsProps;
