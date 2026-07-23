import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";
import type { CSSProperties } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

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

const textBase: CSSProperties = {
  fontFamily:
    "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
  margin: 0,
};

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

const VerticalGap = ({ height = 24 }: { height?: number }) => (
  <Section
    style={{
      fontSize: 0,
      height: `${height}px`,
      lineHeight: `${height}px`,
    }}
  >
    &zwj;
  </Section>
);

const MetricCard = ({ data }: { data: MetricCardData }) => (
  <Column
    className="bento-column"
    width={264}
    style={{ verticalAlign: "top", width: "264px" }}
  >
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
      <VerticalGap height={42} />
      <Row>
        <Column style={{ textAlign: "left", verticalAlign: "top" }}>
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
        <Column style={{ textAlign: "right", verticalAlign: "bottom" }}>
          <Img
            alt=""
            src={BENTO_CHART_SRC}
            width={120}
            style={{
              display: "inline-block",
              maxWidth: "100%",
              verticalAlign: "middle",
            }}
          />
        </Column>
      </Row>
      <Hr
        style={{
          borderColor: colors.border,
          borderTopWidth: "1px",
          margin: "12px 0 0",
        }}
      />
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
          style={{
            color: "#4f46e5",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          {data.reportLabel}
        </Link>
      </Text>
    </Section>
  </Column>
);

const ImageCard = ({
  imageAlt,
  imageSrc,
}: {
  imageAlt: string;
  imageSrc: string;
}) => (
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

const StatCard = ({
  backgroundColor,
  data,
}: {
  backgroundColor: string;
  data: StatCardData;
}) => (
  <Column
    className="bento-column"
    width={168}
    style={{
      backgroundColor,
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
        color: colors.dark,
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "24px",
      }}
    >
      {data.label}
    </Text>
    <Text
      style={{
        ...textBase,
        color: colors.dark,
        fontSize: "48px",
        fontWeight: 500,
        lineHeight: "56px",
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
        lineHeight: "20px",
      }}
    >
      {data.suffix}
    </Text>
  </Column>
);

export const BentoGridWith3ColumnsAndEvenSplitImageStatsSection = ({
  imageAlt = "",
  imageSrc = `${BENTO_ASSET_ROOT}/bento-2.jpg`,
  metric: metricData = metric,
  stats: statItems = stats,
  variant = "image-top-right",
}: Omit<BentoGridWith3ColumnsAndEvenSplitImageStatsProps, "theme">) => {
  const imageLeft = variant.endsWith("left");
  const imageBottom = variant.includes("bottom");
  const imageCard = <ImageCard imageAlt={imageAlt} imageSrc={imageSrc} />;
  const metricCard = <MetricCard data={metricData} />;
  const imageRow = (
    <Row>
      {imageLeft ? imageCard : metricCard}
      <HorizontalGap />
      {imageLeft ? metricCard : imageCard}
    </Row>
  );
  const statsRow = (
    <Row>
      <StatCard backgroundColor={colors.surfaceMuted} data={statItems[0]} />
      <HorizontalGap />
      <StatCard backgroundColor={colors.light} data={statItems[1]} />
      <HorizontalGap />
      <StatCard backgroundColor={colors.surface} data={statItems[2]} />
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

export const BentoGridWith3ColumnsAndEvenSplitImageStats = ({
  imageAlt = "",
  imageSrc = `${BENTO_ASSET_ROOT}/bento-2.jpg`,
  metric: metricData = metric,
  stats: statItems = stats,
  theme = defaultTheme,
  variant = "image-top-right",
}: BentoGridWith3ColumnsAndEvenSplitImageStatsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media only screen and (max-width: 599px) {
              .bento-column { display: block !important; width: 100% !important; }
              .bento-gap { display: block !important; width: 100% !important; min-width: 100% !important; max-width: 100% !important; height: 24px !important; line-height: 24px !important; }
            }
          `,
        }}
      />
    </Head>
    <Preview>Bento grid with 3 columns and even split image stats</Preview>
    <Body style={{ backgroundColor: colors.canvas, margin: 0 }}>
      <Container
        style={{
          backgroundColor: colors.surface,
          margin: "0 auto",
          maxWidth: theme.containerWidth,
        }}
      >
        <Section style={{ padding: "44px 24px" }}>
          <BentoGridWith3ColumnsAndEvenSplitImageStatsSection
            imageAlt={imageAlt}
            imageSrc={imageSrc}
            metric={metricData}
            stats={statItems}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

BentoGridWith3ColumnsAndEvenSplitImageStats.PreviewProps = {
  imageAlt: "",
  imageSrc: `${BENTO_ASSET_ROOT}/bento-2.jpg`,
  metric,
  stats,
  theme: defaultTheme,
  variant: "image-top-right",
} satisfies BentoGridWith3ColumnsAndEvenSplitImageStatsProps;
