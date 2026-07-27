import {
  Body,
  Column,
  Container,
  Head as EmailHead,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";
import type { CSSProperties, ReactNode } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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
  theme: EmailThemeTokens;
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
    <Body style={{ backgroundColor: colors.canvas, margin: 0 }}>
      <Container
        style={{
          backgroundColor: colors.surface,
          margin: "0 auto",
          maxWidth: theme.containerWidth,
        }}
      >
        <Section style={{ padding: "44px 24px" }}>{children}</Section>
      </Container>
    </Body>
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
        {(() => {
          if (item.description) {
            return (
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
            );
          }
          return null;
        })()}
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
