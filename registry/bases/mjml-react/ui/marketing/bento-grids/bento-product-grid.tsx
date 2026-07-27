import {
  Mjml,
  MjmlBody,
  MjmlColumn,
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

import { defaultTheme } from "@/registry/themes/definitions/default";
import type { EmailThemeTokens } from "@/registry/themes/definitions/default";

const BENTO_ASSET_ROOT =
  "https://emailcn.vercel.app/api/email-assets/bento-grids";

type BentoPaddedVariant =
  | "padded-left"
  | "padded-right"
  | "padded-sides"
  | "padded-full"
  | "padded-left-reverse"
  | "padded-right-reverse"
  | "padded-sides-reverse"
  | "padded-full-reverse";

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

interface BentoImageCardItem {
  description?: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
}

interface ProductTileData extends BentoImageCardItem {
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
      {(() => {
        if (item.description) {
          return (
            <MjmlText
              color={dark ? colors.subtle : colors.muted}
              fontFamily={fontFamily}
              fontSize="12px"
              lineHeight="16px"
              padding="12px 16px 0"
            >
              {item.description}
            </MjmlText>
          );
        }
        return null;
      })()}
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

const TwoRowsThreeColumnsSection = ({
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

const EvenSplitTwoThirdsSection = ({
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

type ProductPair = readonly [ProductTileData, ProductTileData];

type ProductTriple = readonly [
  ProductTileData,
  ProductTileData,
  ProductTileData,
];

type BentoProductGridStyle = "full" | "left" | "right" | "sides";

type BentoProductGridPlacement = "normal" | "reverse";

type InternalBentoProductGridProps =
  | {
      data?: {
        bottom: ProductTriple;
        top: ProductPair;
      };
      placement?: BentoProductGridPlacement;
      style?: BentoProductGridStyle;
      variant?: "two-row-three-column";
    }
  | {
      data?: {
        bottom: ProductPair;
        top: ProductPair;
      };
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
  props: Extract<
    InternalBentoProductGridProps,
    {
      variant?: "two-row-three-column";
    }
  >
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
  props: Extract<
    InternalBentoProductGridProps,
    {
      variant: "even-split-two-thirds";
    }
  >
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

const BentoProductGridSection = (props: InternalBentoProductGridProps) =>
  props.variant === "even-split-two-thirds" ? (
    <SplitProductGrid {...props} />
  ) : (
    <TwoRowProductGrid {...props} />
  );

export type BentoProductGridProps = InternalBentoProductGridProps & {
  theme?: typeof defaultTheme;
};

export const BentoProductGrid = ({
  theme = defaultTheme,
  ...props
}: BentoProductGridProps) => (
  <BentoEmailShell preview="Flexible bento product grid" theme={theme}>
    <BentoProductGridSection {...props} />
  </BentoEmailShell>
);

BentoProductGrid.PreviewProps = {
  placement: "normal",
  style: "full",
  variant: "two-row-three-column",
} satisfies BentoProductGridProps;
