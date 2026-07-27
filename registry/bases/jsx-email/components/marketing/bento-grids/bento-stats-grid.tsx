import {
  Body,
  Column,
  Container,
  Head as EmailHead,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";
import type { CSSProperties, ReactNode } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { EmailTailwind } from "@/registry/bases/jsx-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/jsx-email/themes/email-theme";
import { defaultTheme } from "@/registry/themes/definitions/default";

const BENTO_ASSET_ROOT =
  "https://emailcn.vercel.app/api/email-assets/bento-grids";

const BENTO_CHART_ROOT = "https://emailcn.vercel.app/email-assets/bento-grids";

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

const textBase: CSSProperties = {
  fontFamily:
    "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
  fontSize: "14px",
  lineHeight: "24px",
  margin: 0,
};

interface BentoEmailShellProps {
  children: ReactNode;
  preview: string;
  theme: EmailTheme;
}

const BentoEmailShell = ({
  children,
  preview,
  theme,
}: BentoEmailShellProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media only screen and (max-width: 599px) {
              .bento-column { display: block !important; width: 100% !important; }
            .bento-gap { display: block !important; width: 100% !important; min-width: 100% !important; max-width: 100% !important; height: 24px !important; line-height: 24px !important; }
              .bento-chart-desktop { display: none !important; }
              .bento-chart-mobile { display: block !important; width: 100% !important; }
            }
          `,
        }}
      />
    </EmailHead>
    <Preview>{preview}</Preview>
    <EmailTailwind theme={theme}>
      <Body style={{ backgroundColor: colors.canvas }} className="m-0">
        <Container
          style={{
            backgroundColor: colors.surface,
          }}
          className="mx-auto max-w-email"
        >
          <Section style={{ padding: "44px 24px" }}>{children}</Section>
        </Container>
      </Body>
    </EmailTailwind>
  </Html>
);

const Gap = () => (
  <Column
    className="bento-gap"
    width={24}
    style={{
      fontSize: 0,
      height: "1px",
      lineHeight: "1px",
      maxWidth: "24px",
      minWidth: "24px",
      width: "24px",
    }}
  >
    &zwj;
  </Column>
);

const VerticalGap = () => (
  <Section style={{ fontSize: 0, height: "24px", lineHeight: "24px" }}>
    &zwj;
  </Section>
);

interface MetricCardData {
  change: string;
  comparison?: string;
  reportHref: string;
  reportLabel: string;
  title: string;
  value: string;
}

const Divider = () => (
  <Section
    style={{ backgroundColor: colors.border, height: "1px", lineHeight: "1px" }}
  >
    &zwj;
  </Section>
);

const ReportLink = ({ data }: { data: MetricCardData }) => (
  <Text
    style={{
      ...textBase,
      fontSize: "12px",
      lineHeight: "16px",
      marginTop: "12px",
      textAlign: "left",
    }}
  >
    <Link
      href={data.reportHref}
      style={{ color: "#4f46e5", fontWeight: 500, textDecoration: "none" }}
    >
      {data.reportLabel}
    </Link>
  </Text>
);

const ImageMetricCard = ({ data }: { data: MetricCardData }) => (
  <Section
    style={{
      border: `1px solid ${colors.border}`,
      borderRadius: "8px",
      padding: "16px",
      textAlign: "left",
    }}
  >
    <Text
      style={{
        ...textBase,
        color: colors.dark,
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "20px",
        textAlign: "left",
      }}
    >
      {data.title}
    </Text>
    <Section style={{ height: "42px", lineHeight: "42px" }}>&zwj;</Section>
    <Row>
      <Column
        className="bento-column"
        style={{ textAlign: "left", verticalAlign: "top" }}
      >
        <Text
          style={{
            ...textBase,
            color: colors.dark,
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "32px",
          }}
        >
          {data.value}
        </Text>
        <Text
          style={{
            ...textBase,
            color: colors.muted,
            fontSize: "12px",
            lineHeight: "16px",
          }}
        >
          ↗&nbsp; {data.change}
        </Text>
      </Column>
      <Column
        className="bento-column"
        style={{ textAlign: "right", verticalAlign: "bottom" }}
      >
        <Img
          alt=""
          className="bento-chart-desktop"
          src={`${BENTO_CHART_ROOT}/trend.png`}
          width={120}
          style={{
            display: "inline-block",
            maxWidth: "100%",
            verticalAlign: "middle",
          }}
        />
        <Img
          alt=""
          className="bento-chart-mobile"
          src={`${BENTO_CHART_ROOT}/trend-sm.png`}
          width={210}
          style={{ display: "none", maxWidth: "100%", verticalAlign: "middle" }}
        />
      </Column>
    </Row>
    <Divider />
    <ReportLink data={data} />
  </Section>
);

const TextMetricCard = ({ data }: { data: MetricCardData }) => (
  <Section
    style={{
      border: `1px solid ${colors.border}`,
      borderRadius: "8px",
      padding: "16px",
      textAlign: "left",
    }}
  >
    <Text
      style={{
        ...textBase,
        color: colors.dark,
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "20px",
        textAlign: "left",
      }}
    >
      {data.title}
    </Text>
    <Section style={{ height: "26px", lineHeight: "26px" }}>&zwj;</Section>
    <Text style={{ ...textBase, lineHeight: "40px" }}>
      <span style={{ color: colors.dark, fontSize: "36px", fontWeight: 700 }}>
        {data.value}
      </span>
      <span style={{ color: colors.muted, fontSize: "12px" }}>
        &nbsp;&nbsp;↗&nbsp; {data.change}
      </span>
    </Text>
    {data.comparison ? (
      <Text
        style={{
          ...textBase,
          color: colors.muted,
          fontSize: "12px",
          lineHeight: "16px",
          marginTop: "8px",
        }}
      >
        {data.comparison}
      </Text>
    ) : null}
    <Section style={{ marginTop: "12px" }}>
      <Divider />
    </Section>
    <ReportLink data={data} />
  </Section>
);

interface FeatureCardData {
  description: string;
  title: string;
}

const FeatureCard = ({
  dark = false,
  data,
  width = 360,
}: {
  dark?: boolean;
  data: FeatureCardData;
  width?: 360;
}) => (
  <Column
    className="bento-column"
    width={width}
    style={{
      backgroundColor: dark ? colors.dark : colors.surfaceMuted,
      borderRadius: "8px",
      padding: "44px 16px",
      verticalAlign: "middle",
      width: `${width}px`,
    }}
  >
    <Text
      style={{
        ...textBase,
        color: dark ? colors.white : colors.dark,
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "28px",
      }}
    >
      {data.title}
    </Text>
    <Text
      style={{
        ...textBase,
        color: dark ? colors.subtle : colors.dark,
        fontSize: "18px",
        lineHeight: "28px",
        marginTop: "12px",
      }}
    >
      {data.description}
    </Text>
  </Column>
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
}: {
  background?: string;
  dark?: boolean;
  data: StatCardData;
}) => (
  <Column
    className="bento-column"
    width={168}
    style={{
      backgroundColor: dark ? colors.dark : background,
      borderRadius: "8px",
      padding: "44px 0",
      textAlign: "center",
      verticalAlign: "middle",
      width: "168px",
    }}
  >
    <Text
      style={{
        ...textBase,
        color: dark ? colors.white : colors.dark,
        fontSize: "14px",
        fontWeight: 600,
      }}
    >
      {data.label}
    </Text>
    <Text
      style={{
        ...textBase,
        color: dark ? colors.white : colors.dark,
        fontSize: "48px",
        fontWeight: 500,
      }}
    >
      {data.value}
    </Text>
    <Text
      style={{
        ...textBase,
        color: colors.muted,
        fontSize: "12px",
        fontWeight: 500,
      }}
    >
      {data.suffix}
    </Text>
  </Column>
);

interface MiniMetricData {
  change: string;
  period: string;
  title: string;
  value: string;
}

const MiniMetricCard = ({ data }: { data: MiniMetricData }) => (
  <Column
    className="bento-column"
    width={168}
    style={{ verticalAlign: "top", width: "168px" }}
  >
    <Section
      style={{
        border: "1px solid #d1fae5",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <Text
        style={{
          ...textBase,
          color: colors.dark,
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        {data.title}
      </Text>
      <Text style={{ ...textBase, color: colors.subtle, fontSize: "14px" }}>
        {data.period}
      </Text>
      <Text
        style={{
          ...textBase,
          color: colors.dark,
          fontSize: "48px",
          fontWeight: 600,
          marginTop: "28px",
        }}
      >
        {data.value}
      </Text>
      <Text
        style={{
          ...textBase,
          backgroundColor: "#ecfdf5",
          border: "1px solid #d1fae5",
          borderRadius: "9999px",
          color: "#059669",
          display: "inline-block",
          fontSize: "12px",
          fontWeight: 500,
          marginTop: "8px",
          padding: "2px 8px",
        }}
      >
        {data.change} ↗
      </Text>
    </Section>
  </Column>
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
  const metricCard = <MiniMetricCard data={metric} />;
  const imageCard = (
    <Column
      className="bento-column"
      width={360}
      style={{ verticalAlign: "top", width: "360px" }}
    >
      <Img
        alt={imageAlt}
        src={imageSrc}
        width={360}
        style={{ borderRadius: "8px", display: "block", width: "100%" }}
      />
    </Column>
  );
  const imageRow = (
    <Row>
      {imageLeft ? imageCard : metricCard}
      <Gap />
      {imageLeft ? metricCard : imageCard}
    </Row>
  );
  const supportRow = (
    <Row>
      {imageLeft ? (
        <StatCard dark data={stat} />
      ) : (
        <FeatureCard data={feature} />
      )}
      <Gap />
      {imageLeft ? (
        <FeatureCard data={feature} />
      ) : (
        <StatCard dark data={stat} />
      )}
    </Row>
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
    <Column
      className="bento-column"
      width={264}
      style={{ verticalAlign: "top", width: "264px" }}
    >
      {mode === "image" ? (
        <ImageMetricCard data={metric} />
      ) : (
        <TextMetricCard data={metric} />
      )}
    </Column>
  );
  const imageCard = (
    <Column
      className="bento-column"
      width={264}
      style={{ verticalAlign: "top", width: "264px" }}
    >
      <Img
        alt={imageAlt}
        src={imageSrc}
        width={264}
        style={{ borderRadius: "8px", display: "block", width: "100%" }}
      />
    </Column>
  );
  const imageRow = (
    <Row>
      {imageLeft ? imageCard : metricCard}
      <Gap />
      {imageLeft ? metricCard : imageCard}
    </Row>
  );
  const supportRow = (
    <Row>
      {imageLeft ? (
        <StatCard dark={mode === "image"} data={stat} />
      ) : (
        <FeatureCard dark={mode === "text"} data={feature} />
      )}
      <Gap />
      {imageLeft ? (
        <FeatureCard dark={mode === "text"} data={feature} />
      ) : (
        <StatCard dark={mode === "image"} data={stat} />
      )}
    </Row>
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
    <Column
      className="bento-column"
      width={264}
      style={{ verticalAlign: "top", width: "264px" }}
    >
      {mode === "image" ? (
        <ImageMetricCard data={metric} />
      ) : (
        <TextMetricCard data={metric} />
      )}
    </Column>
  );
  const imageCard = (
    <Column
      className="bento-column"
      width={264}
      style={{ verticalAlign: "top", width: "264px" }}
    >
      <Img
        alt={imageAlt}
        src={imageSrc}
        width={264}
        style={{ borderRadius: "8px", display: "block", width: "100%" }}
      />
    </Column>
  );
  const imageRow = (
    <Row>
      {imageLeft ? imageCard : metricCard}
      <Gap />
      {imageLeft ? metricCard : imageCard}
    </Row>
  );
  const statsRow = (
    <Row>
      <StatCard background={colors.surfaceMuted} data={stats[0]} />
      <Gap />
      <StatCard background={colors.light} data={stats[1]} />
      <Gap />
      <StatCard background={colors.surface} data={stats[2]} />
    </Row>
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
