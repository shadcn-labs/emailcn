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

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

export const BENTO_ASSET_ROOT =
  "https://emailcn.vercel.app/api/email-assets/bento-grids";
export const BENTO_CHART_SRC =
  "https://emailcn.vercel.app/email-assets/bento-grids/trend.png";

export type BentoImagePlacementVariant =
  | "image-top-right"
  | "image-top-left"
  | "image-bottom-right"
  | "image-bottom-left";

export interface MetricCardData {
  change: string;
  reportHref: string;
  reportLabel: string;
  title: string;
  value: string;
}

export interface StatCardData {
  label: string;
  suffix: string;
  value: string;
}

type Stats = readonly [StatCardData, StatCardData, StatCardData];

export interface BentoGridWith3ColumnsAndEvenSplitImageStatsProps {
  imageAlt?: string;
  imageSrc?: string;
  metric?: MetricCardData;
  stats?: Stats;
  theme?: EmailThemeTokens;
  variant?: BentoImagePlacementVariant;
}

const colors = {
  border: "#d1d5db",
  canvas: "#f1f5f9",
  dark: "#030712",
  light: "#f3f4f6",
  muted: "#6b7280",
  surface: "#fffffe",
  surfaceMuted: "#f9fafb",
} as const;

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

const HorizontalGap = () => (
  <MjmlColumn padding="0" width="24px">
    <MjmlSpacer height="1px" padding="0" />
  </MjmlColumn>
);

const VerticalGap = () => (
  <MjmlSection padding="0">
    <MjmlColumn padding="0">
      <MjmlSpacer height="24px" padding="0" />
    </MjmlColumn>
  </MjmlSection>
);

const MetricCard = ({
  data,
  theme,
}: {
  data: MetricCardData;
  theme: EmailThemeTokens;
}) => (
  <MjmlColumn
    innerBorder={`1px solid ${colors.border}`}
    innerBorderRadius="8px"
    padding="0"
    verticalAlign="top"
    width="264px"
  >
    <MjmlText
      align="left"
      color={colors.dark}
      fontFamily={theme.fontFamily}
      fontSize="14px"
      fontWeight="500"
      lineHeight="20px"
      padding="16px 16px 0"
    >
      {data.title}
    </MjmlText>
    <MjmlSpacer height="20px" padding="0" />
    <MjmlText
      align="left"
      color={colors.dark}
      fontFamily={theme.fontFamily}
      fontSize="24px"
      fontWeight="700"
      lineHeight="32px"
      padding="0 16px"
    >
      {data.value}
    </MjmlText>
    <MjmlText
      align="left"
      color={colors.muted}
      fontFamily={theme.fontFamily}
      fontSize="12px"
      lineHeight="16px"
      padding="0 16px"
    >
      ↗&nbsp; {data.change}
    </MjmlText>
    <MjmlImage
      align="right"
      alt=""
      padding="4px 16px 0"
      src={BENTO_CHART_SRC}
      width="120px"
    />
    <MjmlDivider
      align="left"
      borderColor={colors.border}
      borderStyle="solid"
      borderWidth="1px"
      padding="8px 16px 0"
      width="100%"
    />
    <MjmlButton
      align="left"
      backgroundColor="transparent"
      color="#4f46e5"
      fontFamily={theme.fontFamily}
      fontSize="12px"
      fontWeight="500"
      href={data.reportHref}
      innerPadding="0"
      lineHeight="16px"
      padding="8px 16px 12px"
      textDecoration="none"
    >
      {data.reportLabel}
    </MjmlButton>
  </MjmlColumn>
);

const ImageCard = ({
  imageAlt,
  imageSrc,
}: {
  imageAlt: string;
  imageSrc: string;
}) => (
  <MjmlColumn padding="0" verticalAlign="top" width="264px">
    <MjmlImage
      alt={imageAlt}
      borderRadius="8px"
      padding="0"
      src={imageSrc}
      width="264px"
    />
  </MjmlColumn>
);

const StatCard = ({
  backgroundColor,
  data,
  theme,
}: {
  backgroundColor: string;
  data: StatCardData;
  theme: EmailThemeTokens;
}) => (
  <MjmlColumn
    innerBackgroundColor={backgroundColor}
    innerBorderRadius="8px"
    padding="0"
    verticalAlign="middle"
    width="168px"
  >
    <MjmlText
      align="center"
      color={colors.dark}
      fontFamily={theme.fontFamily}
      fontSize="14px"
      fontWeight="600"
      lineHeight="24px"
      padding="44px 8px 0"
    >
      {data.label}
    </MjmlText>
    <MjmlText
      align="center"
      color={colors.dark}
      fontFamily={theme.fontFamily}
      fontSize="48px"
      fontWeight="500"
      lineHeight="56px"
      padding="0 8px"
    >
      {data.value}
    </MjmlText>
    <MjmlText
      align="center"
      color={colors.muted}
      fontFamily={theme.fontFamily}
      fontSize="12px"
      fontWeight="500"
      lineHeight="20px"
      padding="0 8px 44px"
    >
      {data.suffix}
    </MjmlText>
  </MjmlColumn>
);

const ImageRow = ({
  imageAlt,
  imageLeft,
  imageSrc,
  metricData,
  theme,
}: {
  imageAlt: string;
  imageLeft: boolean;
  imageSrc: string;
  metricData: MetricCardData;
  theme: EmailThemeTokens;
}) => {
  const imageCard = <ImageCard imageAlt={imageAlt} imageSrc={imageSrc} />;
  const metricCard = <MetricCard data={metricData} theme={theme} />;

  return (
    <MjmlSection padding="0">
      {imageLeft ? imageCard : metricCard}
      <HorizontalGap />
      {imageLeft ? metricCard : imageCard}
    </MjmlSection>
  );
};

const StatsRow = ({
  stats: statItems,
  theme,
}: {
  stats: Stats;
  theme: EmailThemeTokens;
}) => (
  <MjmlSection padding="0">
    <StatCard
      backgroundColor={colors.surfaceMuted}
      data={statItems[0]}
      theme={theme}
    />
    <HorizontalGap />
    <StatCard
      backgroundColor={colors.light}
      data={statItems[1]}
      theme={theme}
    />
    <HorizontalGap />
    <StatCard
      backgroundColor={colors.surface}
      data={statItems[2]}
      theme={theme}
    />
  </MjmlSection>
);

export const BentoGridWith3ColumnsAndEvenSplitImageStatsSection = ({
  imageAlt = "",
  imageSrc = `${BENTO_ASSET_ROOT}/bento-2.jpg`,
  metric: metricData = metric,
  stats: statItems = stats,
  theme = defaultTheme,
  variant = "image-top-right",
}: BentoGridWith3ColumnsAndEvenSplitImageStatsProps) => {
  const imageLeft = variant.endsWith("left");
  const imageBottom = variant.includes("bottom");
  const imageRow = (
    <ImageRow
      imageAlt={imageAlt}
      imageLeft={imageLeft}
      imageSrc={imageSrc}
      metricData={metricData}
      theme={theme}
    />
  );
  const statsRow = <StatsRow stats={statItems} theme={theme} />;

  return (
    <>
      {imageBottom ? statsRow : imageRow}
      <VerticalGap />
      {imageBottom ? imageRow : statsRow}
    </>
  );
};

export const BentoGridWith3ColumnsAndEvenSplitImageStats = ({
  imageAlt = "",
  imageSrc = `${BENTO_ASSET_ROOT}/bento-2.jpg`,
  metric: metricData = metric,
  stats: statItems = stats,
  theme = defaultTheme,
  variant = "image-top-right",
}: BentoGridWith3ColumnsAndEvenSplitImageStatsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>
        Bento grid with 3 columns and even split image stats
      </MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor={colors.canvas} width={theme.containerWidth}>
      <MjmlWrapper backgroundColor={colors.surface} padding="44px 24px">
        <BentoGridWith3ColumnsAndEvenSplitImageStatsSection
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          metric={metricData}
          stats={statItems}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BentoGridWith3ColumnsAndEvenSplitImageStats.PreviewProps = {
  imageAlt: "",
  imageSrc: `${BENTO_ASSET_ROOT}/bento-2.jpg`,
  metric,
  stats,
  theme: defaultTheme,
  variant: "image-top-right",
} satisfies BentoGridWith3ColumnsAndEvenSplitImageStatsProps;
