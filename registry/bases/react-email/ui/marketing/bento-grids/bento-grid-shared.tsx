import type { CSSProperties, ReactNode } from "react";
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";

export const BENTO_ASSET_ROOT =
  "https://emailcn.vercel.app/api/email-assets/bento-grids";

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

const textBase: CSSProperties = {
  fontFamily:
    "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
  fontSize: "14px",
  lineHeight: "24px",
  margin: 0,
};

export interface BentoEmailShellProps {
  children: ReactNode;
  preview: string;
  theme: TailwindConfig;
}

export const BentoEmailShell = ({
  children,
  preview,
  theme,
}: BentoEmailShellProps) => (
  <Html>
    <Head>
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
    </Head>
    <Preview>{preview}</Preview>
    <Tailwind config={theme}>
      <Body style={{ backgroundColor: colors.canvas, margin: 0 }}>
        <Container
          style={{
            backgroundColor: colors.surface,
            margin: "0 auto",
            maxWidth: "600px",
          }}
        >
          <Section style={{ padding: "44px 24px" }}>{children}</Section>
        </Container>
      </Body>
    </Tailwind>
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
  <div style={{ fontSize: 0, height: "24px", lineHeight: "24px" }}>&zwj;</div>
);

const Multiline = ({ value }: { value: string }) => (
  <>
    {value.split("\n").map((line, index) => (
      <span key={`${line}-${index}`}>
        {index > 0 ? <br /> : null}
        {line}
      </span>
    ))}
  </>
);

export interface BentoImageCardItem {
  description?: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
}

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
  const caption = (
    <Section
      style={{
        backgroundColor: dark ? colors.dark : colors.light,
        borderRadius: captionPosition === "top" ? "4px 4px 0 0" : "0 0 4px 4px",
        padding: "16px",
      }}
    >
      <Text
        style={{
          ...textBase,
          color: dark ? colors.white : colors.dark,
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "20px",
        }}
      >
        {item.title}
      </Text>
      {item.description ? (
        <Text
          style={{
            ...textBase,
            color: dark ? colors.mutedDark : colors.muted,
            fontSize: "12px",
            lineHeight: "16px",
            marginTop: "12px",
          }}
        >
          {item.description}
        </Text>
      ) : null}
    </Section>
  );
  const image = (
    <Img
      alt={item.imageAlt}
      src={item.imageSrc}
      width={width}
      style={{
        borderRadius: captionPosition === "top" ? "0 0 4px 4px" : "4px 4px 0 0",
        display: "block",
        height: "auto",
        width: "100%",
      }}
    />
  );
  return (
    <Column
      className="bento-column"
      width={width}
      style={{ verticalAlign: "top", width: `${width}px` }}
    >
      {captionPosition === "top" ? caption : image}
      {captionPosition === "top" ? image : caption}
    </Column>
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
      <Row>
        <HeaderImageCard
          captionPosition={captionPosition}
          item={items[0]}
          tone={tone}
          width={topWidths[0]}
        />
        <Gap />
        <HeaderImageCard
          captionPosition={captionPosition}
          item={items[1]}
          tone={tone}
          width={topWidths[1]}
        />
      </Row>
      <VerticalGap />
      <Row>
        <HeaderImageCard
          captionPosition={captionPosition}
          item={items[2]}
          tone={tone}
          width={bottomWidths[0]}
        />
        <Gap />
        <HeaderImageCard
          captionPosition={captionPosition}
          item={items[3]}
          tone={tone}
          width={bottomWidths[1]}
        />
      </Row>
    </>
  );
};

const ProductDetails = ({
  description,
  position,
  title,
}: {
  description: string;
  position: "bottom" | "top";
  title: string;
}) => (
  <Section
    style={{
      backgroundColor: colors.light,
      borderRadius: position === "top" ? "4px 4px 0 0" : "0 0 4px 4px",
      padding: "16px",
    }}
  >
    <Text
      style={{
        ...textBase,
        color: colors.dark,
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
      }}
    >
      {title}
    </Text>
    <Text
      style={{
        ...textBase,
        color: "#4b5563",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
      }}
    >
      {description}
    </Text>
  </Section>
);

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
}) => {
  const details = (
    <ProductDetails
      description={item.description ?? ""}
      position={captionPosition}
      title={item.title}
    />
  );
  const image = padded ? (
    <Section
      style={{
        backgroundColor: colors.light,
        borderRadius: captionPosition === "top" ? "0 0 4px 4px" : "4px 4px 0 0",
        paddingLeft: "16px",
      }}
    >
      <Img
        alt={item.imageAlt}
        src={item.imageSrc}
        width={152}
        style={{
          borderRadius:
            captionPosition === "top" ? "4px 0 4px 0" : "0 4px 0 4px",
          display: "block",
          width: "100%",
        }}
      />
    </Section>
  ) : (
    <Img
      alt={item.imageAlt}
      src={item.imageSrc}
      width={168}
      style={{
        borderRadius: captionPosition === "top" ? "0 0 4px 4px" : "4px 4px 0 0",
        display: "block",
        width: "100%",
      }}
    />
  );
  return (
    <Column
      className="bento-column"
      width={168}
      style={{ verticalAlign: "top" }}
    >
      {captionPosition === "top" ? details : image}
      {captionPosition === "top" ? image : details}
    </Column>
  );
};

const ThreeColumnPromo = ({
  dark = false,
  description,
  title,
}: {
  dark?: boolean;
  description: string;
  title: string;
}) => (
  <Section
    style={{
      backgroundColor: dark ? colors.dark : colors.light,
      borderRadius: "4px",
      padding: "32px 16px",
    }}
  >
    <Text
      style={{
        ...textBase,
        color: dark ? colors.white : colors.dark,
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
      }}
    >
      {title}
    </Text>
    <Text
      style={{
        ...textBase,
        color: dark ? colors.mutedDark : "#4b5563",
        fontSize: "12px",
        lineHeight: "16px",
        marginTop: "16px",
      }}
    >
      {description}
    </Text>
  </Section>
);

const ThreeColumnMiddleImage = ({ item }: { item: BentoImageCardItem }) => (
  <Img
    alt={item.imageAlt}
    src={item.imageSrc}
    width={168}
    style={{ borderRadius: "4px", display: "block", width: "100%" }}
  />
);

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
  const alt = variant.endsWith("alt");
  const promo = data.promo ? <ThreeColumnPromo {...data.promo} /> : null;
  const upperMiddle =
    alt && captionPosition === "bottom" ? (
      promo
    ) : (
      <ThreeColumnMiddleImage item={data.middleImages[0]} />
    );
  let lowerMiddle: ReactNode;
  if (!alt) {
    lowerMiddle = (
      <ThreeColumnMiddleImage
        item={data.middleImages[1] ?? data.middleImages[0]}
      />
    );
  } else if (captionPosition === "bottom") {
    lowerMiddle = <ThreeColumnMiddleImage item={data.middleImages[0]} />;
  } else {
    lowerMiddle = promo;
  }
  return (
    <Row>
      <ThreeColumnOuterCard
        captionPosition={captionPosition}
        item={data.left}
        padded={padded}
      />
      <Gap />
      <Column
        className="bento-column"
        width={168}
        style={{ verticalAlign: "top" }}
      >
        {upperMiddle}
        <VerticalGap />
        {lowerMiddle}
      </Column>
      <Gap />
      <ThreeColumnOuterCard
        captionPosition={captionPosition}
        item={data.right}
        padded={padded}
      />
    </Row>
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
  imageInsetOverride,
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
  const inset =
    imageInsetOverride ?? (padding === "left" || padding === "right" ? 16 : 32);
  const imageWidth = width - inset;
  const imagePadding = {
    full: "16px",
    left: "16px 0 0 16px",
    right: "16px 16px 0 0",
    sides: "16px 16px 0",
  }[padding];
  const imageRadius = {
    full: "4px",
    left: "4px 0 4px 0",
    right: "0 4px 0 4px",
    sides: "4px 4px 0 0",
  }[padding];
  return (
    <Column
      className="bento-column"
      width={width}
      style={{
        backgroundColor: dark ? colors.dark : colors.light,
        borderRadius: "4px",
        verticalAlign: "top",
        width: `${width}px`,
      }}
    >
      <Section style={{ padding: "16px 16px 0" }}>
        <Text style={{ ...textBase, lineHeight: "20px" }}>
          <span
            style={{
              color: dark ? colors.white : colors.dark,
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            {item.title}
          </span>{" "}
          <span
            style={{
              color: dark ? colors.subtle : "#4b5563",
              fontSize: "12px",
              fontWeight: 300,
            }}
          >
            {item.price}
          </span>
        </Text>
        {item.description ? (
          <Text
            style={{
              ...textBase,
              color: dark ? colors.subtle : "#4b5563",
              fontSize: "12px",
              fontWeight: 300,
              lineHeight: "16px",
              marginTop: "12px",
            }}
          >
            <Multiline value={item.description} />
          </Text>
        ) : null}
      </Section>
      <Section style={{ padding: imagePadding }}>
        <Img
          alt={item.imageAlt}
          src={item.imageSrc}
          width={imageWidth}
          style={{ borderRadius: imageRadius, display: "block", width: "100%" }}
        />
      </Section>
    </Column>
  );
};

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
  const imageInsetOverride =
    variant === "padded-sides-reverse" ? (16 as const) : undefined;
  const topRow = (
    <Row>
      <ProductTile
        dark
        imageInsetOverride={imageInsetOverride}
        item={top[0]}
        padding={padding}
        width={264}
      />
      <Gap />
      <ProductTile
        imageInsetOverride={imageInsetOverride}
        item={top[1]}
        padding={padding}
        width={264}
      />
    </Row>
  );
  const bottomRow = (
    <Row>
      <ProductTile
        imageInsetOverride={imageInsetOverride}
        item={bottom[0]}
        padding={padding}
        width={168}
      />
      <Gap />
      <ProductTile
        dark
        imageInsetOverride={imageInsetOverride}
        item={bottom[1]}
        padding={padding}
        width={168}
      />
      <Gap />
      <ProductTile
        imageInsetOverride={imageInsetOverride}
        item={bottom[2]}
        padding={padding}
        width={168}
      />
    </Row>
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
    <Row>
      <ProductTile dark item={top[0]} padding={padding} width={264} />
      <Gap />
      <ProductTile item={top[1]} padding={padding} width={264} />
    </Row>
  );
  const bottomRow = (
    <Row>
      <ProductTile item={bottom[0]} padding={padding} width={168} />
      <Gap />
      <ProductTile dark item={bottom[1]} padding={padding} width={360} />
    </Row>
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

const Divider = () => (
  <div
    style={{ backgroundColor: colors.border, height: "1px", lineHeight: "1px" }}
  >
    &zwj;
  </div>
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
    <div style={{ height: "42px", lineHeight: "42px" }}>&zwj;</div>
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
          src={`${BENTO_ASSET_ROOT}/trend.png`}
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
          src={`${BENTO_ASSET_ROOT}/trend-sm.png`}
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
    <div style={{ height: "26px", lineHeight: "26px" }}>&zwj;</div>
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
    <div style={{ marginTop: "12px" }}>
      <Divider />
    </div>
    <ReportLink data={data} />
  </Section>
);

export interface FeatureCardData {
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

export interface StatCardData {
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

export interface MiniMetricData {
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
