import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

import {
  BENTO_ASSET_ROOT,
  BentoEmailShell,
  EvenSplitStatsSection,
} from "./bento-grid-shared";
import type {
  BentoImagePlacementVariant,
  FeatureCardData,
  MetricCardData,
  StatCardData,
} from "./bento-grid-shared";

export interface BentoGridWithEvenSplitAndTextStatsProps {
  feature?: FeatureCardData;
  imageAlt?: string;
  imageSrc?: string;
  metric?: MetricCardData;
  stat?: StatCardData;
  theme?: EmailThemeTokens;
  variant?: BentoImagePlacementVariant;
}

const feature: FeatureCardData = {
  description: "Powering 28,000+ vendors across the Americas and Europe.",
  title: "One API, unlimited potential.",
};
const metric: MetricCardData = {
  change: "10%",
  comparison: "Compared to last month",
  reportHref: "https://example.com",
  reportLabel: "View report",
  title: "API Calls",
  value: "25k",
};
const stat: StatCardData = {
  label: "Engine v2",
  suffix: "faster",
  value: "75x",
};

export const BentoGridWithEvenSplitAndTextStatsSection = ({
  feature: featureData = feature,
  imageAlt = "",
  imageSrc = `${BENTO_ASSET_ROOT}/bento-4.jpg`,
  metric: metricData = metric,
  stat: statData = stat,
  variant = "image-top-right",
}: Omit<BentoGridWithEvenSplitAndTextStatsProps, "theme">) => (
  <EvenSplitStatsSection
    feature={featureData}
    imageAlt={imageAlt}
    imageSrc={imageSrc}
    metric={metricData}
    mode="text"
    stat={statData}
    variant={variant}
  />
);

export const BentoGridWithEvenSplitAndTextStats = ({
  feature: featureData = feature,
  imageAlt = "",
  imageSrc = `${BENTO_ASSET_ROOT}/bento-4.jpg`,
  metric: metricData = metric,
  stat: statData = stat,
  theme = defaultTheme,
  variant = "image-top-right",
}: BentoGridWithEvenSplitAndTextStatsProps) => (
  <BentoEmailShell
    preview="Bento grid with even split and text stats"
    theme={theme}
  >
    <BentoGridWithEvenSplitAndTextStatsSection
      feature={featureData}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      metric={metricData}
      stat={statData}
      variant={variant}
    />
  </BentoEmailShell>
);

BentoGridWithEvenSplitAndTextStats.PreviewProps = {
  feature,
  imageAlt: "",
  imageSrc: `${BENTO_ASSET_ROOT}/bento-4.jpg`,
  metric,
  stat,
  theme: defaultTheme,
  variant: "image-top-right",
} satisfies BentoGridWithEvenSplitAndTextStatsProps;
