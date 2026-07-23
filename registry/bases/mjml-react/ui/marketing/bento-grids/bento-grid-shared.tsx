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

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export const BENTO_ASSET_ROOT =
  "https://emailcn.vercel.app/api/email-assets/bento-grids";

const TREND_CHART_URL =
  "https://emailcn.vercel.app/email-assets/bento-grids/trend.png";

export type BentoCaptionsVariant =
  | "captions-top"
  | "captions-top-reverse"
  | "captions-bottom"
  | "captions-bottom-reverse";

export type BentoDetailsVariant =
  | BentoCaptionsVariant
  | "captions-top-alt"
  | "captions-top-alt-reverse"
  | "captions-bottom-alt"
  | "captions-bottom-alt-reverse";

export type BentoThreeColumnVariant =
  | "captions-top"
  | "captions-bottom"
  | "captions-top-alt"
  | "captions-bottom-alt";

export type BentoPaddedVariant =
  | "padded-left"
  | "padded-right"
  | "padded-sides"
  | "padded-full"
  | "padded-left-reverse"
  | "padded-right-reverse"
  | "padded-sides-reverse"
  | "padded-full-reverse";

export type BentoImagePlacementVariant =
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

export interface BentoEmailShellProps {
  children: ReactNode;
  preview: string;
  theme: EmailThemeTokens;
}

export const BentoEmailShell = ({
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

const Image = ({
  alt,
  src,
  width,
}: {
  alt: string;
  src: string;
  width: number;
}) => (
  <MjmlImage
    alt={alt}
    borderRadius="8px"
    padding="0"
    src={src}
    width={`${width}px`}
  />
);

export interface BentoImageCardItem {
  description?: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
}

const CardCaption = ({
  dark,
  item,
}: {
  dark: boolean;
  item: BentoImageCardItem;
}) => (
  <>
    <MjmlText
      color={dark ? colors.white : colors.dark}
      fontFamily={fontFamily}
      fontSize="14px"
      fontWeight="600"
      lineHeight="20px"
      padding="16px 16px 0"
    >
      {item.title}
    </MjmlText>
    {item.description ? (
      <MjmlText
        color={dark ? colors.mutedDark : colors.muted}
        fontFamily={fontFamily}
        fontSize="12px"
        lineHeight="16px"
        padding="12px 16px 16px"
      >
        {item.description}
      </MjmlText>
    ) : (
      <MjmlSpacer height="16px" />
    )}
  </>
);

const HeaderImageCard = ({
  captionPosition,
  item,
  tone,
  width,
}: {
  captionPosition: "bottom" | "top";
  item: BentoImageCardItem;
  tone: "dark" | "light";
  width: 168 | 360;
}) => {
  const dark = tone === "dark";
  const caption = <CardCaption dark={dark} item={item} />;
  const image = <Image alt={item.imageAlt} src={item.imageSrc} width={width} />;

  return (
    <MjmlColumn
      backgroundColor={dark ? colors.dark : colors.light}
      borderRadius="8px"
      padding="0"
      verticalAlign="top"
      width={`${width}px`}
    >
      {captionPosition === "top" ? caption : image}
      {captionPosition === "top" ? image : caption}
    </MjmlColumn>
  );
};

export const AlternatingImageCardsSection = ({
  items,
  variant,
}: {
  items: readonly [
    BentoImageCardItem,
    BentoImageCardItem,
    BentoImageCardItem,
    BentoImageCardItem,
  ];
  variant: BentoCaptionsVariant | BentoDetailsVariant;
}) => {
  const reverse = variant.endsWith("reverse");
  const captionPosition = variant.includes("bottom") ? "bottom" : "top";
  const topWidths = reverse ? ([360, 168] as const) : ([168, 360] as const);
  const bottomWidths = reverse ? ([168, 360] as const) : ([360, 168] as const);
  const tone = reverse ? "dark" : "light";

  return (
    <>
      <MjmlSection padding="0">
        <HeaderImageCard
          captionPosition={captionPosition}
          item={items[0]}
          tone={tone}
          width={topWidths[0]}
        />
        <MjmlColumn padding="0" width="24px">
          <MjmlSpacer height="1px" />
        </MjmlColumn>
        <HeaderImageCard
          captionPosition={captionPosition}
          item={items[1]}
          tone={tone}
          width={topWidths[1]}
        />
      </MjmlSection>
      <VerticalGap />
      <MjmlSection padding="0">
        <HeaderImageCard
          captionPosition={captionPosition}
          item={items[2]}
          tone={tone}
          width={bottomWidths[0]}
        />
        <MjmlColumn padding="0" width="24px">
          <MjmlSpacer height="1px" />
        </MjmlColumn>
        <HeaderImageCard
          captionPosition={captionPosition}
          item={items[3]}
          tone={tone}
          width={bottomWidths[1]}
        />
      </MjmlSection>
    </>
  );
};

export interface ThreeColumnFlushData {
  left: BentoImageCardItem;
  middleImages:
    | readonly [BentoImageCardItem]
    | readonly [BentoImageCardItem, BentoImageCardItem];
  promo?: {
    dark?: boolean;
    description: string;
    title: string;
  };
  right: BentoImageCardItem;
}

export type ThreeColumnPaddedData = ThreeColumnFlushData;

const ThreeColumnOuterCard = ({
  captionPosition,
  item,
  padded,
}: {
  captionPosition: "bottom" | "top";
  item: BentoImageCardItem;
  padded: boolean;
}) => (
  <MjmlColumn
    backgroundColor={colors.light}
    borderRadius="8px"
    padding="0"
    verticalAlign="top"
    width="31%"
  >
    {captionPosition === "top" ? (
      <CardCaption dark={false} item={item} />
    ) : null}
    <MjmlImage
      alt={item.imageAlt}
      borderRadius="8px"
      padding={padded ? "0 0 0 16px" : "0"}
      src={item.imageSrc}
    />
    {captionPosition === "bottom" ? (
      <CardCaption dark={false} item={item} />
    ) : null}
  </MjmlColumn>
);

const MiddleContent = ({
  data,
  variant,
}: {
  data: ThreeColumnFlushData;
  variant: BentoThreeColumnVariant;
}) => {
  const alt = variant.endsWith("alt");
  const captionBottom = variant.includes("bottom");
  const { promo } = data;
  const promoFirst = alt && captionBottom;

  return (
    <MjmlColumn padding="0" verticalAlign="top" width="31%">
      {promoFirst && promo ? (
        <CardCaption
          dark={Boolean(promo.dark)}
          item={{ ...promo, imageAlt: "", imageSrc: "" }}
        />
      ) : (
        <Image
          alt={data.middleImages[0].imageAlt}
          src={data.middleImages[0].imageSrc}
          width={168}
        />
      )}
      <MjmlSpacer height="24px" />
      {alt && !captionBottom && promo ? (
        <CardCaption
          dark={Boolean(promo.dark)}
          item={{ ...promo, imageAlt: "", imageSrc: "" }}
        />
      ) : (
        <Image
          alt={(data.middleImages[1] ?? data.middleImages[0]).imageAlt}
          src={(data.middleImages[1] ?? data.middleImages[0]).imageSrc}
          width={168}
        />
      )}
    </MjmlColumn>
  );
};

const ThreeColumnsImagesSection = ({
  data,
  padded,
  variant,
}: {
  data: ThreeColumnFlushData;
  padded: boolean;
  variant: BentoThreeColumnVariant;
}) => {
  const captionPosition = variant.includes("bottom") ? "bottom" : "top";

  return (
    <MjmlSection padding="0">
      <ThreeColumnOuterCard
        captionPosition={captionPosition}
        item={data.left}
        padded={padded}
      />
      <MjmlColumn padding="0" width="3.5%">
        <MjmlSpacer height="1px" />
      </MjmlColumn>
      <MiddleContent data={data} variant={variant} />
      <MjmlColumn padding="0" width="3.5%">
        <MjmlSpacer height="1px" />
      </MjmlColumn>
      <ThreeColumnOuterCard
        captionPosition={captionPosition}
        item={data.right}
        padded={padded}
      />
    </MjmlSection>
  );
};

export const ThreeColumnsFlushSection = ({
  data,
  variant,
}: {
  data: ThreeColumnFlushData;
  variant: BentoThreeColumnVariant;
}) => (
  <ThreeColumnsImagesSection data={data} padded={false} variant={variant} />
);

export const ThreeColumnsPaddedSection = ({
  data,
  variant,
}: {
  data: ThreeColumnPaddedData;
  variant: BentoThreeColumnVariant;
}) => <ThreeColumnsImagesSection data={data} padded variant={variant} />;

export interface ProductTileData extends BentoImageCardItem {
  price: string;
}

const ProductTile = ({
  dark = false,
  item,
  padding,
  width,
}: {
  dark?: boolean;
  imageInsetOverride?: 16 | 32;
  item: ProductTileData;
  padding: "full" | "left" | "right" | "sides";
  width: 168 | 264 | 360;
}) => {
  const imagePadding = {
    full: "16px",
    left: "16px 0 0 16px",
    right: "16px 16px 0 0",
    sides: "16px 16px 0",
  }[padding];

  return (
    <MjmlColumn
      backgroundColor={dark ? colors.dark : colors.light}
      borderRadius="8px"
      padding="0"
      verticalAlign="top"
      width={`${width}px`}
    >
      <MjmlText
        color={dark ? colors.white : colors.dark}
        fontFamily={fontFamily}
        fontSize="14px"
        fontWeight="600"
        lineHeight="20px"
        padding="16px 16px 0"
      >
        {item.title} · {item.price}
      </MjmlText>
      {item.description ? (
        <MjmlText
          color={dark ? colors.subtle : colors.muted}
          fontFamily={fontFamily}
          fontSize="12px"
          lineHeight="16px"
          padding="12px 16px 0"
        >
          {item.description}
        </MjmlText>
      ) : null}
      <MjmlImage
        alt={item.imageAlt}
        borderRadius="8px"
        padding={imagePadding}
        src={item.imageSrc}
      />
    </MjmlColumn>
  );
};

const ProductRow = ({
  darkIndexes,
  items,
  padding,
  widths,
}: {
  darkIndexes: readonly number[];
  items: readonly ProductTileData[];
  padding: "full" | "left" | "right" | "sides";
  widths: readonly (168 | 264 | 360)[];
}) => (
  <MjmlSection padding="0">
    {items.map((item, index) => (
      <ProductTile
        dark={darkIndexes.includes(index)}
        item={item}
        key={`${item.title}-${index}`}
        padding={padding}
        width={widths[index]}
      />
    ))}
  </MjmlSection>
);

export const TwoRowsThreeColumnsSection = ({
  bottom,
  top,
  variant,
}: {
  bottom: readonly [ProductTileData, ProductTileData, ProductTileData];
  top: readonly [ProductTileData, ProductTileData];
  variant: BentoPaddedVariant;
}) => {
  const padding = variant.replace("padded-", "").replace("-reverse", "") as
    | "full"
    | "left"
    | "right"
    | "sides";
  const reverse = variant.endsWith("reverse");
  const topRow = (
    <ProductRow
      darkIndexes={[0]}
      items={top}
      padding={padding}
      widths={[264, 264]}
    />
  );
  const bottomRow = (
    <ProductRow
      darkIndexes={[1]}
      items={bottom}
      padding={padding}
      widths={[168, 168, 168]}
    />
  );

  return (
    <>
      {reverse ? bottomRow : topRow}
      <VerticalGap />
      {reverse ? topRow : bottomRow}
    </>
  );
};

export const EvenSplitTwoThirdsSection = ({
  bottom,
  top,
  variant,
}: {
  bottom: readonly [ProductTileData, ProductTileData];
  top: readonly [ProductTileData, ProductTileData];
  variant: BentoPaddedVariant;
}) => {
  const padding = variant.replace("padded-", "").replace("-reverse", "") as
    | "full"
    | "left"
    | "right"
    | "sides";
  const reverse = variant.endsWith("reverse");
  const topRow = (
    <ProductRow
      darkIndexes={[0]}
      items={top}
      padding={padding}
      widths={[264, 264]}
    />
  );
  const bottomRow = (
    <ProductRow
      darkIndexes={[1]}
      items={bottom}
      padding={padding}
      widths={[168, 360]}
    />
  );

  return (
    <>
      {reverse ? bottomRow : topRow}
      <VerticalGap />
      {reverse ? topRow : bottomRow}
    </>
  );
};

export interface MetricCardData {
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

export interface FeatureCardData {
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

export interface StatCardData {
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

export interface MiniMetricData {
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

export const TwoThirdsStatsSection = ({
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

export const EvenSplitStatsSection = ({
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

export const ThreeColumnStatsSection = ({
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
