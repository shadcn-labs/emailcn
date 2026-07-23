import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { CSSProperties, ReactNode } from "react";

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export const BENTO_ASSET_ROOT =
  "https://assets.mailviews.com/images/components/bento-grids";

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
      <MjmlStyle>{`
        table { border-spacing: 0; }
        td { padding: 0; }
        img { max-width: 100%; vertical-align: middle; }
        @media only screen and (max-width: 599px) {
          .bento-column { display: block !important; width: 100% !important; }
          .bento-gap { display: block !important; width: 100% !important; min-width: 100% !important; max-width: 100% !important; height: 24px !important; line-height: 24px !important; }
          .bento-chart-desktop { display: none !important; }
          .bento-chart-mobile { display: block !important; width: 100% !important; }
        }
      `}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor={colors.canvas} width={theme.containerWidth}>
      <MjmlWrapper backgroundColor={colors.surface} padding="44px 24px">
        <MjmlRaw>
          <div style={{ textAlign: "left" }}>{children}</div>
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

const Table = ({ children }: { children: ReactNode }) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    width="100%"
  >
    <tbody>{children}</tbody>
  </table>
);

const Section = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    style={{ borderCollapse: "separate", borderSpacing: 0, ...style }}
    width="100%"
  >
    <tbody>
      <tr>
        <td style={{ textAlign: "left" }}>{children}</td>
      </tr>
    </tbody>
  </table>
);

const Cell = ({
  children,
  className = "bento-column",
  style,
  width,
}: {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  width?: number;
}) => (
  <td className={className} style={style} width={width}>
    {children}
  </td>
);

const Gap = () => (
  <Cell
    className="bento-gap"
    style={{
      fontSize: 0,
      height: "1px",
      lineHeight: "1px",
      maxWidth: "24px",
      minWidth: "24px",
      width: "24px",
    }}
    width={24}
  >
    &zwj;
  </Cell>
);

const VerticalGap = () => (
  <div style={{ fontSize: 0, height: "24px", lineHeight: "24px" }}>&zwj;</div>
);

const Image = ({
  alt,
  className,
  src,
  style,
  width,
}: {
  alt: string;
  className?: string;
  src: string;
  style?: CSSProperties;
  width: number;
}) => (
  <img
    alt={alt}
    className={className}
    src={src}
    style={{
      border: "none",
      display: "block",
      outline: "none",
      textDecoration: "none",
      ...style,
    }}
    width={width}
  />
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
      <p
        style={{
          ...textBase,
          color: dark ? colors.white : colors.dark,
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "20px",
        }}
      >
        {item.title}
      </p>
      {item.description ? (
        <p
          style={{
            ...textBase,
            color: dark ? colors.mutedDark : colors.muted,
            fontSize: "12px",
            lineHeight: "16px",
            marginTop: "12px",
          }}
        >
          {item.description}
        </p>
      ) : null}
    </Section>
  );
  const image = (
    <Image
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
    <Cell style={{ verticalAlign: "top", width: `${width}px` }} width={width}>
      {captionPosition === "top" ? caption : image}
      {captionPosition === "top" ? image : caption}
    </Cell>
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
      <Table>
        <tr>
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
        </tr>
      </Table>
      <VerticalGap />
      <Table>
        <tr>
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
        </tr>
      </Table>
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
    <p
      style={{
        ...textBase,
        color: colors.dark,
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
      }}
    >
      {title}
    </p>
    <p
      style={{
        ...textBase,
        color: "#4b5563",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
      }}
    >
      {description}
    </p>
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
      <Image
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
    <Image
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
    <Cell style={{ verticalAlign: "top" }} width={168}>
      {captionPosition === "top" ? details : image}
      {captionPosition === "top" ? image : details}
    </Cell>
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
    <p
      style={{
        ...textBase,
        color: dark ? colors.white : colors.dark,
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
      }}
    >
      {title}
    </p>
    <p
      style={{
        ...textBase,
        color: dark ? colors.mutedDark : "#4b5563",
        fontSize: "12px",
        lineHeight: "16px",
        marginTop: "16px",
      }}
    >
      {description}
    </p>
  </Section>
);

const ThreeColumnMiddleImage = ({ item }: { item: BentoImageCardItem }) => (
  <Image
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
    <Table>
      <tr>
        <ThreeColumnOuterCard
          captionPosition={captionPosition}
          item={data.left}
          padded={padded}
        />
        <Gap />
        <Cell style={{ verticalAlign: "top" }} width={168}>
          {upperMiddle}
          <VerticalGap />
          {lowerMiddle}
        </Cell>
        <Gap />
        <ThreeColumnOuterCard
          captionPosition={captionPosition}
          item={data.right}
          padded={padded}
        />
      </tr>
    </Table>
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
    <Cell
      style={{
        backgroundColor: dark ? colors.dark : colors.light,
        borderRadius: "4px",
        verticalAlign: "top",
        width: `${width}px`,
      }}
      width={width}
    >
      <Section style={{ padding: "16px 16px 0" }}>
        <p style={{ ...textBase, lineHeight: "20px" }}>
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
        </p>
        {item.description ? (
          <p
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
          </p>
        ) : null}
      </Section>
      <Section style={{ padding: imagePadding }}>
        <Image
          alt={item.imageAlt}
          src={item.imageSrc}
          width={imageWidth}
          style={{
            borderRadius: imageRadius,
            display: "block",
            width: "100%",
          }}
        />
      </Section>
    </Cell>
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
    <Table>
      <tr>
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
      </tr>
    </Table>
  );
  const bottomRow = (
    <Table>
      <tr>
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
      </tr>
    </Table>
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
    <Table>
      <tr>
        <ProductTile dark item={top[0]} padding={padding} width={264} />
        <Gap />
        <ProductTile item={top[1]} padding={padding} width={264} />
      </tr>
    </Table>
  );
  const bottomRow = (
    <Table>
      <tr>
        <ProductTile item={bottom[0]} padding={padding} width={168} />
        <Gap />
        <ProductTile dark item={bottom[1]} padding={padding} width={360} />
      </tr>
    </Table>
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
  <p
    style={{
      ...textBase,
      fontSize: "12px",
      lineHeight: "16px",
      marginTop: "12px",
      textAlign: "left",
    }}
  >
    <a
      href={data.reportHref}
      style={{ color: "#4f46e5", fontWeight: 500, textDecoration: "none" }}
    >
      {data.reportLabel}
    </a>
  </p>
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
    <p
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
    </p>
    <div style={{ height: "42px", lineHeight: "42px" }}>&zwj;</div>
    <Table>
      <tr>
        <Cell style={{ textAlign: "left", verticalAlign: "top" }}>
          <p
            style={{
              ...textBase,
              color: colors.dark,
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "32px",
            }}
          >
            {data.value}
          </p>
          <p
            style={{
              ...textBase,
              color: colors.muted,
              fontSize: "12px",
              lineHeight: "16px",
            }}
          >
            ↗&nbsp; {data.change}
          </p>
        </Cell>
        <Cell style={{ textAlign: "right", verticalAlign: "bottom" }}>
          <Image
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
          <Image
            alt=""
            className="bento-chart-mobile"
            src={`${BENTO_ASSET_ROOT}/trend-sm.png`}
            width={210}
            style={{
              display: "none",
              maxWidth: "100%",
              verticalAlign: "middle",
            }}
          />
        </Cell>
      </tr>
    </Table>
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
    <p
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
    </p>
    <div style={{ height: "26px", lineHeight: "26px" }}>&zwj;</div>
    <p style={{ ...textBase, lineHeight: "40px" }}>
      <span style={{ color: colors.dark, fontSize: "36px", fontWeight: 700 }}>
        {data.value}
      </span>
      <span style={{ color: colors.muted, fontSize: "12px" }}>
        &nbsp;&nbsp;↗&nbsp; {data.change}
      </span>
    </p>
    {data.comparison ? (
      <p
        style={{
          ...textBase,
          color: colors.muted,
          fontSize: "12px",
          lineHeight: "16px",
          marginTop: "8px",
        }}
      >
        {data.comparison}
      </p>
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
}: {
  dark?: boolean;
  data: FeatureCardData;
}) => (
  <Cell
    style={{
      backgroundColor: dark ? colors.dark : colors.surfaceMuted,
      borderRadius: "8px",
      padding: "44px 16px",
      verticalAlign: "middle",
      width: "360px",
    }}
    width={360}
  >
    <p
      style={{
        ...textBase,
        color: dark ? colors.white : colors.dark,
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "28px",
      }}
    >
      {data.title}
    </p>
    <p
      style={{
        ...textBase,
        color: dark ? colors.subtle : colors.dark,
        fontSize: "18px",
        lineHeight: "28px",
        marginTop: "12px",
      }}
    >
      {data.description}
    </p>
  </Cell>
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
  <Cell
    style={{
      backgroundColor: dark ? colors.dark : background,
      borderRadius: "8px",
      padding: "44px 0",
      textAlign: "center",
      verticalAlign: "middle",
      width: "168px",
    }}
    width={168}
  >
    <p
      style={{
        ...textBase,
        color: dark ? colors.white : colors.dark,
        fontSize: "14px",
        fontWeight: 600,
      }}
    >
      {data.label}
    </p>
    <p
      style={{
        ...textBase,
        color: dark ? colors.white : colors.dark,
        fontSize: "48px",
        fontWeight: 500,
      }}
    >
      {data.value}
    </p>
    <p
      style={{
        ...textBase,
        color: colors.muted,
        fontSize: "12px",
        fontWeight: 500,
      }}
    >
      {data.suffix}
    </p>
  </Cell>
);

export interface MiniMetricData {
  change: string;
  period: string;
  title: string;
  value: string;
}

const MiniMetricCard = ({ data }: { data: MiniMetricData }) => (
  <Cell style={{ verticalAlign: "top", width: "168px" }} width={168}>
    <Section
      style={{
        border: "1px solid #d1fae5",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <p
        style={{
          ...textBase,
          color: colors.dark,
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        {data.title}
      </p>
      <p style={{ ...textBase, color: colors.subtle, fontSize: "14px" }}>
        {data.period}
      </p>
      <p
        style={{
          ...textBase,
          color: colors.dark,
          fontSize: "48px",
          fontWeight: 600,
          marginTop: "28px",
        }}
      >
        {data.value}
      </p>
      <p
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
      </p>
    </Section>
  </Cell>
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
    <Cell style={{ verticalAlign: "top", width: "360px" }} width={360}>
      <Image
        alt={imageAlt}
        src={imageSrc}
        width={360}
        style={{ borderRadius: "8px", display: "block", width: "100%" }}
      />
    </Cell>
  );
  const imageRow = (
    <Table>
      <tr>
        {imageLeft ? imageCard : metricCard}
        <Gap />
        {imageLeft ? metricCard : imageCard}
      </tr>
    </Table>
  );
  const supportRow = (
    <Table>
      <tr>
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
      </tr>
    </Table>
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
    <Cell style={{ verticalAlign: "top", width: "264px" }} width={264}>
      {mode === "image" ? (
        <ImageMetricCard data={metric} />
      ) : (
        <TextMetricCard data={metric} />
      )}
    </Cell>
  );
  const imageCard = (
    <Cell style={{ verticalAlign: "top", width: "264px" }} width={264}>
      <Image
        alt={imageAlt}
        src={imageSrc}
        width={264}
        style={{ borderRadius: "8px", display: "block", width: "100%" }}
      />
    </Cell>
  );
  const imageRow = (
    <Table>
      <tr>
        {imageLeft ? imageCard : metricCard}
        <Gap />
        {imageLeft ? metricCard : imageCard}
      </tr>
    </Table>
  );
  const supportRow = (
    <Table>
      <tr>
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
      </tr>
    </Table>
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
    <Cell style={{ verticalAlign: "top", width: "264px" }} width={264}>
      {mode === "image" ? (
        <ImageMetricCard data={metric} />
      ) : (
        <TextMetricCard data={metric} />
      )}
    </Cell>
  );
  const imageCard = (
    <Cell style={{ verticalAlign: "top", width: "264px" }} width={264}>
      <Image
        alt={imageAlt}
        src={imageSrc}
        width={264}
        style={{ borderRadius: "8px", display: "block", width: "100%" }}
      />
    </Cell>
  );
  const imageRow = (
    <Table>
      <tr>
        {imageLeft ? imageCard : metricCard}
        <Gap />
        {imageLeft ? metricCard : imageCard}
      </tr>
    </Table>
  );
  const statsRow = (
    <Table>
      <tr>
        <StatCard background={colors.surfaceMuted} data={stats[0]} />
        <Gap />
        <StatCard background={colors.light} data={stats[1]} />
        <Gap />
        <StatCard background={colors.surface} data={stats[2]} />
      </tr>
    </Table>
  );
  return (
    <>
      {imageBottom ? statsRow : imageRow}
      <VerticalGap />
      {imageBottom ? imageRow : statsRow}
    </>
  );
};
