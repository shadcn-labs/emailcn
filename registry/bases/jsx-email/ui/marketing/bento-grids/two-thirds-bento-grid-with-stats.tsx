import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

import {
  BENTO_ASSET_ROOT,
  BentoEmailShell,
  TwoThirdsStatsSection,
} from "./bento-grid-shared";
import type {
  BentoImagePlacementVariant,
  FeatureCardData,
  MiniMetricData,
  StatCardData,
} from "./bento-grid-shared";

export interface TwoThirdsBentoGridWithStatsProps {
  feature?: FeatureCardData;
  imageAlt?: string;
  imageSrc?: string;
  metric?: MiniMetricData;
  stat?: StatCardData;
  theme?: EmailThemeTokens;
  variant?: BentoImagePlacementVariant;
}

const feature: FeatureCardData = {
  description: "API response times under 100ms, 99.99% uptime guaranteed.",
  title: "Low latency. High reliability.",
};
const metric: MiniMetricData = {
  change: "25%",
  period: "/month",
  title: "API Calls",
  value: "55k",
};
const stat: StatCardData = {
  label: "Engine v2",
  suffix: "faster",
  value: "75x",
};

export const TwoThirdsBentoGridWithStatsSection = ({
  feature: featureData = feature,
  imageAlt = "",
  imageSrc = `${BENTO_ASSET_ROOT}/bento-1.jpg`,
  metric: metricData = metric,
  stat: statData = stat,
  variant = "image-top-right",
}: Omit<TwoThirdsBentoGridWithStatsProps, "theme">) => (
  <TwoThirdsStatsSection
    feature={featureData}
    imageAlt={imageAlt}
    imageSrc={imageSrc}
    metric={metricData}
    stat={statData}
    variant={variant}
  />
);

export const TwoThirdsBentoGridWithStats = ({
  feature: featureData = feature,
  imageAlt = "",
  imageSrc = `${BENTO_ASSET_ROOT}/bento-1.jpg`,
  metric: metricData = metric,
  stat: statData = stat,
  theme = defaultTheme,
  variant = "image-top-right",
}: TwoThirdsBentoGridWithStatsProps) => (
  <BentoEmailShell preview="Two thirds bento grid with stats" theme={theme}>
    <TwoThirdsBentoGridWithStatsSection
      feature={featureData}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      metric={metricData}
      stat={statData}
      variant={variant}
    />
  </BentoEmailShell>
);

TwoThirdsBentoGridWithStats.PreviewProps = {
  feature,
  imageAlt: "",
  imageSrc: `${BENTO_ASSET_ROOT}/bento-1.jpg`,
  metric,
  stat,
  theme: defaultTheme,
  variant: "image-top-right",
} satisfies TwoThirdsBentoGridWithStatsProps;
