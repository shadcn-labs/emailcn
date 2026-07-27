import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlDivider,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

const BENTO_ASSET_ROOT =
  "https://emailcn.vercel.app/api/email-assets/bento-grids";

const TREND_CHART_URL =
  "https://emailcn.vercel.app/email-assets/bento-grids/trend.png";

type BentoImagePlacementVariant =
  | "image-top-right"
  | "image-top-left"
  | "image-bottom-right"
  | "image-bottom-left";

const colors = {
  border: "#d1d5db",
  canvas: "#f1f5f9",
  dark: "#030712",
  light: "#f3f4f6",
  muted: "#6b7280",
  mutedDark: "#d1d5db",
  subtle: "#9ca3af",
  surface: "#fffffe",
  surfaceMuted: "#f9fafb",
  white: "#fffffe",
} as const;

const fontFamily =
  "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif";

interface BentoEmailShellProps {
  children: ReactNode;
  preview: string;
  theme: EmailThemeTokens;
}

const BentoEmailShell = ({
  children,
  preview,
  theme,
}: BentoEmailShellProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{preview}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor={colors.canvas} width={theme.containerWidth}>
      <MjmlWrapper backgroundColor={colors.surface} padding="44px 24px">
        {children}
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

const VerticalGap = () => (
  <MjmlSection padding="0">
    <MjmlColumn padding="0">
      <MjmlSpacer height="24px" />
    </MjmlColumn>
  </MjmlSection>
);

interface MetricCardData {
  change: string;
  comparison?: string;
  reportHref: string;
  reportLabel: string;
  title: string;
  value: string;
}

const MetricCopy = ({
  data,
  image,
}: {
  data: MetricCardData;
  image: boolean;
}) => (
  <>
    <MjmlText
      color={colors.dark}
      fontFamily={fontFamily}
      fontSize="14px"
      fontWeight="500"
      lineHeight="20px"
      padding="16px 16px 0"
    >
      {data.title}
    </MjmlText>
    <MjmlSpacer height={image ? "42px" : "26px"} />
    <MjmlText
      color={colors.dark}
      fontFamily={fontFamily}
      fontSize={image ? "24px" : "36px"}
      fontWeight="700"
      lineHeight={image ? "32px" : "40px"}
      padding="0 16px"
    >
      {data.value}
    </MjmlText>
    <MjmlText
      color={colors.muted}
      fontFamily={fontFamily}
      fontSize="12px"
      lineHeight="16px"
      padding="0 16px"
    >
      ↗&nbsp; {data.change}
    </MjmlText>
    {data.comparison ? (
      <MjmlText
        color={colors.muted}
        fontFamily={fontFamily}
        fontSize="12px"
        lineHeight="16px"
        padding="8px 16px 0"
      >
        {data.comparison}
      </MjmlText>
    ) : null}
  </>
);

const MetricCard = ({
  data,
  image,
}: {
  data: MetricCardData;
  image: boolean;
}) => (
  <>
    <MetricCopy data={data} image={image} />
    {image ? (
      <MjmlImage
        alt="Trend chart"
        padding="12px 16px"
        src={TREND_CHART_URL}
        width="240px"
      />
    ) : null}
    <MjmlDivider
      borderColor={colors.border}
      borderWidth="1px"
      padding="12px 16px 0"
    />
    <MjmlButton
      align="left"
      backgroundColor="transparent"
      color="#4f46e5"
      fontFamily={fontFamily}
      fontSize="12px"
      fontWeight="500"
      href={data.reportHref}
      innerPadding="0"
      lineHeight="16px"
      padding="12px 16px 16px"
    >
      {data.reportLabel}
    </MjmlButton>
  </>
);

interface FeatureCardData {
  description: string;
  title: string;
}

const FeatureCard = ({
  dark = false,
  data,
  width = "66%",
}: {
  dark?: boolean;
  data: FeatureCardData;
  width?: string;
}) => (
  <MjmlColumn
    backgroundColor={dark ? colors.dark : colors.surfaceMuted}
    borderRadius="8px"
    padding="44px 16px"
    verticalAlign="middle"
    width={width}
  >
    <MjmlText
      color={dark ? colors.white : colors.dark}
      fontFamily={fontFamily}
      fontSize="20px"
      fontWeight="600"
      lineHeight="28px"
      padding="0"
    >
      {data.title}
    </MjmlText>
    <MjmlText
      color={dark ? colors.subtle : colors.dark}
      fontFamily={fontFamily}
      fontSize="18px"
      lineHeight="28px"
      padding="12px 0 0"
    >
      {data.description}
    </MjmlText>
  </MjmlColumn>
);

interface StatCardData {
  label: string;
  suffix: string;
  value: string;
}

const StatCard = ({
  background = colors.surfaceMuted,
  dark = false,
  data,
  width = "34%",
}: {
  background?: string;
  dark?: boolean;
  data: StatCardData;
  width?: string;
}) => (
  <MjmlColumn
    backgroundColor={dark ? colors.dark : background}
    borderRadius="8px"
    padding="44px 0"
    verticalAlign="middle"
    width={width}
  >
    <MjmlText
      align="center"
      color={dark ? colors.white : colors.dark}
      fontFamily={fontFamily}
      fontSize="14px"
      fontWeight="600"
      padding="0"
    >
      {data.label}
    </MjmlText>
    <MjmlText
      align="center"
      color={dark ? colors.white : colors.dark}
      fontFamily={fontFamily}
      fontSize="48px"
      fontWeight="500"
      padding="0"
    >
      {data.value}
    </MjmlText>
    <MjmlText
      align="center"
      color={colors.muted}
      fontFamily={fontFamily}
      fontSize="12px"
      fontWeight="500"
      padding="0"
    >
      {data.suffix}
    </MjmlText>
  </MjmlColumn>
);

interface MiniMetricData {
  change: string;
  period: string;
  title: string;
  value: string;
}

const MiniMetricCard = ({
  data,
  width = "34%",
}: {
  data: MiniMetricData;
  width?: string;
}) => (
  <MjmlColumn
    border="1px solid #d1fae5"
    borderRadius="8px"
    padding="16px"
    verticalAlign="top"
    width={width}
  >
    <MjmlText
      color={colors.dark}
      fontFamily={fontFamily}
      fontSize="14px"
      fontWeight="500"
      padding="0"
    >
      {data.title}
    </MjmlText>
    <MjmlText
      color={colors.subtle}
      fontFamily={fontFamily}
      fontSize="14px"
      padding="0"
    >
      {data.period}
    </MjmlText>
    <MjmlText
      color={colors.dark}
      fontFamily={fontFamily}
      fontSize="48px"
      fontWeight="600"
      padding="28px 0 0"
    >
      {data.value}
    </MjmlText>
    <MjmlText
      color="#059669"
      fontFamily={fontFamily}
      fontSize="12px"
      fontWeight="500"
      padding="8px 0 0"
    >
      {data.change} ↗
    </MjmlText>
  </MjmlColumn>
);

const ImageCard = ({
  alt,
  src,
  width,
}: {
  alt: string;
  src: string;
  width: string;
}) => (
  <MjmlColumn padding="0" verticalAlign="top" width={width}>
    <MjmlImage alt={alt} borderRadius="8px" padding="0" src={src} />
  </MjmlColumn>
);

const MetricColumn = ({
  data,
  image,
  width = "50%",
}: {
  data: MetricCardData;
  image: boolean;
  width?: string;
}) => (
  <MjmlColumn
    border={`1px solid ${colors.border}`}
    borderRadius="8px"
    padding="0"
    verticalAlign="top"
    width={width}
  >
    <MetricCard data={data} image={image} />
  </MjmlColumn>
);

const TwoThirdsStatsSection = ({
  feature,
  imageAlt,
  imageSrc,
  metric,
  stat,
  variant,
}: {
  feature: FeatureCardData;
  imageAlt: string;
  imageSrc: string;
  metric: MiniMetricData;
  stat: StatCardData;
  variant: BentoImagePlacementVariant;
}) => {
  const imageLeft = variant.endsWith("left");
  const imageBottom = variant.includes("bottom");
  const imageRow = (
    <MjmlSection padding="0">
      {imageLeft ? (
        <>
          <ImageCard alt={imageAlt} src={imageSrc} width="66%" />
          <MiniMetricCard data={metric} />
        </>
      ) : (
        <>
          <MiniMetricCard data={metric} />
          <ImageCard alt={imageAlt} src={imageSrc} width="66%" />
        </>
      )}
    </MjmlSection>
  );
  const supportRow = (
    <MjmlSection padding="0">
      {imageLeft ? (
        <>
          <StatCard dark data={stat} />
          <FeatureCard data={feature} />
        </>
      ) : (
        <>
          <FeatureCard data={feature} />
          <StatCard dark data={stat} />
        </>
      )}
    </MjmlSection>
  );
  return (
    <>
      {imageBottom ? supportRow : imageRow}
      <VerticalGap />
      {imageBottom ? imageRow : supportRow}
    </>
  );
};

const EvenSplitStatsSection = ({
  feature,
  imageAlt,
  imageSrc,
  metric,
  mode,
  stat,
  variant,
}: {
  feature: FeatureCardData;
  imageAlt: string;
  imageSrc: string;
  metric: MetricCardData;
  mode: "image" | "text";
  stat: StatCardData;
  variant: BentoImagePlacementVariant;
}) => {
  const imageLeft = variant.endsWith("left");
  const imageBottom = variant.includes("bottom");
  const metricCard = (
    <MetricColumn data={metric} image={mode === "image"} width="50%" />
  );
  const imageCard = <ImageCard alt={imageAlt} src={imageSrc} width="50%" />;
  const imageRow = (
    <MjmlSection padding="0">
      {imageLeft ? imageCard : metricCard}
      {imageLeft ? metricCard : imageCard}
    </MjmlSection>
  );
  const supportRow = (
    <MjmlSection padding="0">
      {imageLeft ? (
        <>
          <StatCard dark={mode === "image"} data={stat} width="34%" />
          <FeatureCard dark={mode === "text"} data={feature} width="66%" />
        </>
      ) : (
        <>
          <FeatureCard dark={mode === "text"} data={feature} width="66%" />
          <StatCard dark={mode === "image"} data={stat} width="34%" />
        </>
      )}
    </MjmlSection>
  );
  return (
    <>
      {imageBottom ? supportRow : imageRow}
      <VerticalGap />
      {imageBottom ? imageRow : supportRow}
    </>
  );
};

const ThreeColumnStatsSection = ({
  imageAlt,
  imageSrc,
  metric,
  mode,
  stats,
  variant,
}: {
  imageAlt: string;
  imageSrc: string;
  metric: MetricCardData;
  mode: "image" | "text";
  stats: readonly [StatCardData, StatCardData, StatCardData];
  variant: BentoImagePlacementVariant;
}) => {
  const imageLeft = variant.endsWith("left");
  const imageBottom = variant.includes("bottom");
  const metricCard = (
    <MetricColumn data={metric} image={mode === "image"} width="50%" />
  );
  const imageCard = <ImageCard alt={imageAlt} src={imageSrc} width="50%" />;
  const imageRow = (
    <MjmlSection padding="0">
      {imageLeft ? imageCard : metricCard}
      {imageLeft ? metricCard : imageCard}
    </MjmlSection>
  );
  const statsRow = (
    <MjmlSection padding="0">
      <StatCard background={colors.surfaceMuted} data={stats[0]} width="33%" />
      <StatCard background={colors.light} data={stats[1]} width="34%" />
      <StatCard background={colors.surface} data={stats[2]} width="33%" />
    </MjmlSection>
  );
  return (
    <>
      {imageBottom ? statsRow : imageRow}
      <VerticalGap />
      {imageBottom ? imageRow : statsRow}
    </>
  );
};

type InternalBentoStatsGridProps =
  | {
      data?: {
        feature: FeatureCardData;
        imageAlt: string;
        imageSrc: string;
        metric: MiniMetricData;
        stat: StatCardData;
      };
      placement?: BentoImagePlacementVariant;
      style?: "compact";
      variant?: "two-thirds";
    }
  | {
      data?: {
        feature: FeatureCardData;
        imageAlt: string;
        imageSrc: string;
        metric: MetricCardData;
        stat: StatCardData;
      };
      placement?: BentoImagePlacementVariant;
      style?: "chart" | "text";
      variant: "even-split";
    }
  | {
      data?: {
        imageAlt: string;
        imageSrc: string;
        metric: MetricCardData;
        stats: readonly [StatCardData, StatCardData, StatCardData];
      };
      placement?: BentoImagePlacementVariant;
      style?: "chart" | "text";
      variant: "three-column";
    };

const defaultStat: StatCardData = {
  label: "Engine v2",
  suffix: "faster",
  value: "75x",
};

const chartMetric: MetricCardData = {
  change: "10% increase",
  reportHref: "https://example.com",
  reportLabel: "View report",
  title: "API Calls",
  value: "25,000",
};

const textMetric: MetricCardData = {
  change: "10%",
  comparison: "Compared to last month",
  reportHref: "https://example.com",
  reportLabel: "View report",
  title: "API Calls",
  value: "25k",
};

const threeStats = [
  defaultStat,
  { label: "Cost reduction", suffix: "faster", value: "50%" },
  { label: "Load time", suffix: "faster", value: "75x" },
] as const satisfies readonly [StatCardData, StatCardData, StatCardData];

const TwoThirdsStatsGrid = (
  props: Extract<
    InternalBentoStatsGridProps,
    {
      variant?: "two-thirds";
    }
  >
) => {
  const defaults = {
    feature: {
      description: "API response times under 100ms, 99.99% uptime guaranteed.",
      title: "Low latency. High reliability.",
    },
    imageAlt: "",
    imageSrc: `${BENTO_ASSET_ROOT}/bento-1.jpg`,
    metric: {
      change: "25%",
      period: "/month",
      title: "API Calls",
      value: "55k",
    },
    stat: defaultStat,
  };
  const data = { ...defaults, ...props.data };
  return (
    <TwoThirdsStatsSection
      feature={data.feature}
      imageAlt={data.imageAlt}
      imageSrc={data.imageSrc}
      metric={data.metric}
      stat={data.stat}
      variant={props.placement ?? "image-top-right"}
    />
  );
};

const EvenSplitStatsGrid = (
  props: Extract<
    InternalBentoStatsGridProps,
    {
      variant: "even-split";
    }
  >
) => {
  const text = props.style === "text";
  const defaults = {
    feature: text
      ? {
          description:
            "Powering 28,000+ vendors across the Americas and Europe.",
          title: "One API, unlimited potential.",
        }
      : {
          description:
            "API response times under 100ms, 99.99% uptime guaranteed.",
          title: "Low latency. High reliability.",
        },
    imageAlt: "",
    imageSrc: `${BENTO_ASSET_ROOT}/${text ? "bento-4" : "bento-3"}.jpg`,
    metric: text ? textMetric : chartMetric,
    stat: defaultStat,
  };
  const data = { ...defaults, ...props.data };
  return (
    <EvenSplitStatsSection
      feature={data.feature}
      imageAlt={data.imageAlt}
      imageSrc={data.imageSrc}
      metric={data.metric}
      mode={text ? "text" : "image"}
      stat={data.stat}
      variant={props.placement ?? "image-top-right"}
    />
  );
};

const ThreeColumnStatsGrid = (
  props: Extract<
    InternalBentoStatsGridProps,
    {
      variant: "three-column";
    }
  >
) => {
  const text = props.style === "text";
  const defaults = {
    imageAlt: "",
    imageSrc: `${BENTO_ASSET_ROOT}/${text ? "bento-5" : "bento-2"}.jpg`,
    metric: text ? textMetric : chartMetric,
    stats: threeStats,
  };
  const data = { ...defaults, ...props.data };
  return (
    <ThreeColumnStatsSection
      imageAlt={data.imageAlt}
      imageSrc={data.imageSrc}
      metric={data.metric}
      mode={text ? "text" : "image"}
      stats={data.stats}
      variant={props.placement ?? "image-top-right"}
    />
  );
};

const BentoStatsGridSection = (props: InternalBentoStatsGridProps) => {
  if (props.variant === "even-split") {
    return <EvenSplitStatsGrid {...props} />;
  }
  if (props.variant === "three-column") {
    return <ThreeColumnStatsGrid {...props} />;
  }
  return <TwoThirdsStatsGrid {...props} />;
};

export type BentoStatsGridProps = InternalBentoStatsGridProps & {
  theme?: typeof defaultTheme;
};

export const BentoStatsGrid = ({
  theme = defaultTheme,
  ...props
}: BentoStatsGridProps) => (
  <BentoEmailShell preview="Flexible bento stats grid" theme={theme}>
    <BentoStatsGridSection {...props} />
  </BentoEmailShell>
);

BentoStatsGrid.PreviewProps = {
  placement: "image-top-right",
  style: "compact",
  variant: "two-thirds",
} satisfies BentoStatsGridProps;
