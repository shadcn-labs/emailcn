import {
  AlternatingImageCardsSection,
  BENTO_ASSET_ROOT,
  EvenSplitStatsSection,
  EvenSplitTwoThirdsSection,
  ThreeColumnsFlushSection,
  ThreeColumnStatsSection,
  ThreeColumnsPaddedSection,
  TwoRowsThreeColumnsSection,
  TwoThirdsStatsSection,
} from "./bento-grid-shared";
import type {
  BentoCaptionsVariant,
  BentoDetailsVariant,
  BentoImageCardItem,
  BentoImagePlacementVariant,
  BentoPaddedVariant,
  BentoThreeColumnVariant,
  FeatureCardData,
  MetricCardData,
  MiniMetricData,
  ProductTileData,
  StatCardData,
  ThreeColumnFlushData,
  ThreeColumnPaddedData,
} from "./bento-grid-shared";

type AlternatingImageData = readonly [
  BentoImageCardItem,
  BentoImageCardItem,
  BentoImageCardItem,
  BentoImageCardItem,
];

export type BentoImageGridProps =
  | {
      data?: AlternatingImageData;
      placement?: BentoCaptionsVariant;
      style?: "captions";
      variant?: "alternating";
    }
  | {
      data?: AlternatingImageData;
      placement?: BentoDetailsVariant;
      style: "details";
      variant?: "alternating";
    }
  | {
      data?: ThreeColumnFlushData;
      placement?: BentoThreeColumnVariant;
      style?: "flush";
      variant: "three-column";
    }
  | {
      data?: ThreeColumnPaddedData;
      placement?: BentoThreeColumnVariant;
      style: "padded";
      variant: "three-column";
    };

const imageItem = (
  image: string,
  title: string,
  description?: string
): BentoImageCardItem => ({
  description,
  imageAlt: title,
  imageSrc: `${BENTO_ASSET_ROOT}/${image}.jpg`,
  title,
});

const captionItems: Record<BentoCaptionsVariant, AlternatingImageData> = {
  "captions-bottom": [
    imageItem("1-bento-1", "Monochrome Mood"),
    imageItem("1-bento-2", "Bold moves"),
    imageItem("1-bento-3", "Redux Denim"),
    imageItem("1-bento-4", "Casual Cool"),
  ],
  "captions-bottom-reverse": [
    imageItem("1-bento-2", "Bold moves"),
    imageItem("1-bento-1", "Monochrome Mood"),
    imageItem("1-bento-4", "Casual Cool"),
    imageItem("1-bento-3", "Redux Denim"),
  ],
  "captions-top": [
    imageItem("1-bento-1", "Monochrome Mood"),
    imageItem("1-bento-2", "Bold moves"),
    imageItem("1-bento-3", "Redux Denim"),
    imageItem("1-bento-4", "Casual Cool"),
  ],
  "captions-top-reverse": [
    imageItem("1-bento-2", "Monochrome Mood"),
    imageItem("1-bento-1", "Bold moves"),
    imageItem("1-bento-4", "Redux Denim"),
    imageItem("1-bento-3", "Casual Cool"),
  ],
};

const detail = "A striking solo statement that’s both minimal and bold.";
const detailItems: Record<BentoDetailsVariant, AlternatingImageData> = {
  "captions-bottom": [
    imageItem("2-bento-1", "Monochrome Mood", detail),
    imageItem("2-bento-2", "Bold moves"),
    imageItem("2-bento-3", "Redux Denim"),
    imageItem("2-bento-4", "Casual Cool", detail),
  ],
  "captions-bottom-alt": [
    imageItem("2-bento-5", "Monochrome Mood"),
    imageItem("2-bento-2", "Bold moves", detail),
    imageItem("2-bento-7", "Redux Denim", detail),
    imageItem("2-bento-6", "Casual Cool"),
  ],
  "captions-bottom-alt-reverse": [
    imageItem("2-bento-2", "Bold Moves", detail),
    imageItem("2-bento-5", "Monochrome Mood"),
    imageItem("2-bento-6", "Casual Cool"),
    imageItem("2-bento-7", "Redux Denim", detail),
  ],
  "captions-bottom-reverse": [
    imageItem("2-bento-2", "Back to Basics"),
    imageItem("2-bento-1", "Monochrome Mood", detail),
    imageItem("2-bento-4", "Casual Cool", detail),
    imageItem("2-bento-3", "Redux Denim"),
  ],
  "captions-top": [
    imageItem("2-bento-1", "Monochrome Mood", detail),
    imageItem("2-bento-2", "Bold moves"),
    imageItem("2-bento-3", "Redux Denim"),
    imageItem("2-bento-4", "Casual Cool", detail),
  ],
  "captions-top-alt": [
    imageItem("2-bento-5", "Monochrome Mood"),
    imageItem("2-bento-2", "Bold Moves", detail),
    imageItem("2-bento-3", "Casual Cool", detail),
    imageItem("2-bento-6", "Redux Denim"),
  ],
  "captions-top-alt-reverse": [
    imageItem("2-bento-2", "Monochrome Mood", detail),
    imageItem("2-bento-5", "Bold Moves"),
    imageItem("2-bento-6", "Casual Cool"),
    imageItem("2-bento-3", "Redux Denim", detail),
  ],
  "captions-top-reverse": [
    imageItem("2-bento-2", "Back to Basics"),
    imageItem("2-bento-1", "Monochrome Mood", detail),
    imageItem("2-bento-4", "Casual Cool", detail),
    imageItem("2-bento-3", "Redux Denim"),
  ],
};

const threeColumnItem = (
  image: string,
  title: string,
  description = ""
): ThreeColumnFlushData["left"] => ({
  description,
  imageAlt: title,
  imageSrc: `${BENTO_ASSET_ROOT}/${image}.jpg`,
  title,
});

const promo = {
  description: detail,
  title: "The Kartell Collection",
};

const flushData: Record<BentoThreeColumnVariant, ThreeColumnFlushData> = {
  "captions-bottom": {
    left: threeColumnItem("3-bento-lg-2", "Arco Side Chair", "Ocean Shell"),
    middleImages: [
      threeColumnItem("3-bento-sm-3", ""),
      threeColumnItem("3-bento-sm-1", ""),
    ],
    right: threeColumnItem("3-bento-lg-1", "Arco Side Chair", "Ocean Shell"),
  },
  "captions-bottom-alt": {
    left: threeColumnItem("3-bento-lg-2", "Milo Bar Stool", "Walnut frame"),
    middleImages: [threeColumnItem("3-bento-sm-1", "")],
    promo,
    right: threeColumnItem("3-bento-lg-4", "Clyde Chairs", "Canadian wood"),
  },
  "captions-top": {
    left: threeColumnItem("3-bento-lg-1", "Arco Side Chair", "Ocean Shell"),
    middleImages: [
      threeColumnItem("3-bento-sm-1", ""),
      threeColumnItem("3-bento-sm-2", ""),
    ],
    right: threeColumnItem("3-bento-lg-2", "Arco Side Chair", "Ocean Shell"),
  },
  "captions-top-alt": {
    left: threeColumnItem("3-bento-lg-3", "Walnut Seat", "Tall barstool"),
    middleImages: [threeColumnItem("3-bento-sm-1", "")],
    promo: { ...promo, dark: true },
    right: threeColumnItem("3-bento-lg-2", "Milo Bar Stool", "Walnut frame"),
  },
};

const paddedData: Record<BentoThreeColumnVariant, ThreeColumnPaddedData> = {
  "captions-bottom": {
    left: threeColumnItem("3-bento-lg-2-pad", "Milo Bar Stool", "Walnut frame"),
    middleImages: [
      threeColumnItem("3-bento-sm-3", ""),
      threeColumnItem("3-bento-sm-1", ""),
    ],
    right: threeColumnItem(
      "3-bento-lg-1-pad",
      "Arco Side Chair",
      "Ocean Shell"
    ),
  },
  "captions-bottom-alt": {
    left: threeColumnItem("3-bento-lg-2-pad", "Milo Bar Stool", "Walnut frame"),
    middleImages: [threeColumnItem("3-bento-sm-1", "")],
    promo,
    right: threeColumnItem("3-bento-lg-4-pad", "Clyde Chairs", "Canadian wood"),
  },
  "captions-top": {
    left: threeColumnItem("3-bento-lg-1-pad", "Arco Side Chair", "Ocean Shell"),
    middleImages: [
      threeColumnItem("3-bento-sm-1", ""),
      threeColumnItem("3-bento-sm-2", ""),
    ],
    right: threeColumnItem(
      "3-bento-lg-2-pad",
      "Milo Bar Stool",
      "Walnut frame"
    ),
  },
  "captions-top-alt": {
    left: threeColumnItem("3-bento-lg-3-pad", "Walnut Seat", "Tall barstool"),
    middleImages: [threeColumnItem("3-bento-sm-1", "")],
    promo: { ...promo, dark: true },
    right: threeColumnItem(
      "3-bento-lg-2-pad",
      "Milo Bar Stool",
      "Walnut frame"
    ),
  },
};

const AlternatingImageGrid = (
  props: Extract<BentoImageGridProps, { variant?: "alternating" }>
) => {
  if (props.style === "details") {
    const placement = props.placement ?? "captions-top-alt-reverse";
    return (
      <AlternatingImageCardsSection
        items={props.data ?? detailItems[placement]}
        variant={placement}
      />
    );
  }
  const placement = props.placement ?? "captions-top";
  return (
    <AlternatingImageCardsSection
      items={props.data ?? captionItems[placement]}
      variant={placement}
    />
  );
};

const ThreeColumnImageGrid = (
  props: Extract<BentoImageGridProps, { variant: "three-column" }>
) => {
  if (props.style === "padded") {
    const placement = props.placement ?? "captions-bottom";
    return (
      <ThreeColumnsPaddedSection
        data={props.data ?? paddedData[placement]}
        variant={placement}
      />
    );
  }
  const placement = props.placement ?? "captions-bottom-alt";
  return (
    <ThreeColumnsFlushSection
      data={props.data ?? flushData[placement]}
      variant={placement}
    />
  );
};

export const BentoImageGridSection = (props: BentoImageGridProps) =>
  props.variant === "three-column" ? (
    <ThreeColumnImageGrid {...props} />
  ) : (
    <AlternatingImageGrid {...props} />
  );

type ProductPair = readonly [ProductTileData, ProductTileData];
type ProductTriple = readonly [
  ProductTileData,
  ProductTileData,
  ProductTileData,
];

export type BentoProductGridStyle = "full" | "left" | "right" | "sides";
export type BentoProductGridPlacement = "normal" | "reverse";

export type BentoProductGridProps =
  | {
      data?: { bottom: ProductTriple; top: ProductPair };
      placement?: BentoProductGridPlacement;
      style?: BentoProductGridStyle;
      variant?: "two-row-three-column";
    }
  | {
      data?: { bottom: ProductPair; top: ProductPair };
      placement?: BentoProductGridPlacement;
      style?: BentoProductGridStyle;
      variant: "even-split-two-thirds";
    };

const product = (
  image: string,
  title: string,
  price: string,
  description?: string
): ProductTileData => ({
  description,
  imageAlt: title,
  imageSrc: `${BENTO_ASSET_ROOT}/${image}.jpg`,
  price,
  title,
});

const productTop: ProductPair = [
  product(
    "4-bento-lg-1",
    "iPhone 17",
    "/ from $1099",
    "Innovative design for ultimate\nperformance and battery life."
  ),
  product(
    "4-bento-lg-2",
    "MacBook Air",
    "/ from $999",
    "Strikingly thin and fast so you can\nwork, play, or create anywhere."
  ),
];

const productBottom: ProductTriple = [
  product("4-bento-sm-1", "Watch Ultra", "/ from $799"),
  product("4-bento-sm-2", "Mac Mini", "/ from $599"),
  product("4-bento-sm-3", "AirPods", "/ from $129"),
];

const toPaddedVariant = (
  style: BentoProductGridStyle,
  placement: BentoProductGridPlacement
): BentoPaddedVariant => {
  const reverse = placement === "reverse" ? "-reverse" : "";
  return `padded-${style}${reverse}` as BentoPaddedVariant;
};

const splitProductBottom = (variant: BentoPaddedVariant): ProductPair => {
  const insetOnBothSides =
    variant.includes("sides") || variant.includes("full");
  const reverse = variant.endsWith("reverse");
  return [
    product(
      `4-bento-sm-${insetOnBothSides ? "5" : "4"}`,
      "Watch Ultra",
      "/ from $799"
    ),
    product(
      `4-bento-lg-${insetOnBothSides ? "4" : "3"}`,
      reverse ? "Mac Mini" : "Watch Ultra",
      reverse ? "/ from $599" : "/ from $799"
    ),
  ];
};

const TwoRowProductGrid = (
  props: Extract<BentoProductGridProps, { variant?: "two-row-three-column" }>
) => {
  const style = props.style ?? "full";
  const placement = props.placement ?? "normal";
  const variant = toPaddedVariant(style, placement);
  return (
    <TwoRowsThreeColumnsSection
      bottom={props.data?.bottom ?? productBottom}
      top={props.data?.top ?? productTop}
      variant={variant}
    />
  );
};

const SplitProductGrid = (
  props: Extract<BentoProductGridProps, { variant: "even-split-two-thirds" }>
) => {
  const style = props.style ?? "left";
  const placement = props.placement ?? "normal";
  const variant = toPaddedVariant(style, placement);
  return (
    <EvenSplitTwoThirdsSection
      bottom={props.data?.bottom ?? splitProductBottom(variant)}
      top={props.data?.top ?? productTop}
      variant={variant}
    />
  );
};

export const BentoProductGridSection = (props: BentoProductGridProps) =>
  props.variant === "even-split-two-thirds" ? (
    <SplitProductGrid {...props} />
  ) : (
    <TwoRowProductGrid {...props} />
  );

export type BentoStatsGridProps =
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
  props: Extract<BentoStatsGridProps, { variant?: "two-thirds" }>
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
  props: Extract<BentoStatsGridProps, { variant: "even-split" }>
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
  props: Extract<BentoStatsGridProps, { variant: "three-column" }>
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

export const BentoStatsGridSection = (props: BentoStatsGridProps) => {
  if (props.variant === "even-split") {
    return <EvenSplitStatsGrid {...props} />;
  }
  if (props.variant === "three-column") {
    return <ThreeColumnStatsGrid {...props} />;
  }
  return <TwoThirdsStatsGrid {...props} />;
};
