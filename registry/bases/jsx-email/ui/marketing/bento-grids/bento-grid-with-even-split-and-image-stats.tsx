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

export interface BentoGridWithEvenSplitAndImageStatsProps {
  feature?: FeatureCardData;
  imageAlt?: string;
  imageSrc?: string;
  metric?: MetricCardData;
  stat?: StatCardData;
  theme?: EmailThemeTokens;
  variant?: BentoImagePlacementVariant;
}

const feature: FeatureCardData = {
  description: "API response times under 100ms, 99.99% uptime guaranteed.",
  title: "Low latency. High reliability.",
};
const metric: MetricCardData = {
  change: "10% increase",
  reportHref: "https://example.com",
  reportLabel: "View report",
  title: "API Calls",
  value: "25,000",
};
const stat: StatCardData = {
  label: "Engine v2",
  suffix: "faster",
  value: "75x",
};

export const BentoGridWithEvenSplitAndImageStatsSection = ({
  feature: featureData = feature,
  imageAlt = "",
  imageSrc = `${BENTO_ASSET_ROOT}/bento-3.jpg`,
  metric: metricData = metric,
  stat: statData = stat,
  variant = "image-top-right",
}: Omit<BentoGridWithEvenSplitAndImageStatsProps, "theme">) => (
  <EvenSplitStatsSection
    feature={featureData}
    imageAlt={imageAlt}
    imageSrc={imageSrc}
    metric={metricData}
    mode="image"
    stat={statData}
    variant={variant}
  />
);

export const BentoGridWithEvenSplitAndImageStats = ({
  feature: featureData = feature,
  imageAlt = "",
  imageSrc = `${BENTO_ASSET_ROOT}/bento-3.jpg`,
  metric: metricData = metric,
  stat: statData = stat,
  theme = defaultTheme,
  variant = "image-top-right",
}: BentoGridWithEvenSplitAndImageStatsProps) => (
  <BentoEmailShell
    preview="Bento grid with even split and image stats"
    theme={theme}
  >
    <BentoGridWithEvenSplitAndImageStatsSection
      feature={featureData}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      metric={metricData}
      stat={statData}
      variant={variant}
    />
  </BentoEmailShell>
);

BentoGridWithEvenSplitAndImageStats.PreviewProps = {
  feature,
  imageAlt: "",
  imageSrc: `${BENTO_ASSET_ROOT}/bento-3.jpg`,
  metric,
  stat,
  theme: defaultTheme,
  variant: "image-top-right",
} satisfies BentoGridWithEvenSplitAndImageStatsProps;
