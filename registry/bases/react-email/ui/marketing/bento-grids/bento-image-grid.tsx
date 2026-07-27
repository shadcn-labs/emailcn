import type { CSSProperties, ReactNode } from "react";
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
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
const BENTO_ASSET_ROOT =
  "https://emailcn.vercel.app/api/email-assets/bento-grids";
type BentoCaptionsVariant =
  | "captions-top"
  | "captions-top-reverse"
  | "captions-bottom"
  | "captions-bottom-reverse";
type BentoDetailsVariant =
  | BentoCaptionsVariant
  | "captions-top-alt"
  | "captions-top-alt-reverse"
  | "captions-bottom-alt"
  | "captions-bottom-alt-reverse";
type BentoThreeColumnVariant =
  | "captions-top"
  | "captions-bottom"
  | "captions-top-alt"
  | "captions-bottom-alt";
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
  theme: TailwindConfig;
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
  <Section style={{ fontSize: 0, height: "24px", lineHeight: "24px" }}>
    &zwj;
  </Section>
);
interface BentoImageCardItem {
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
const AlternatingImageCardsSection = ({
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
interface ThreeColumnFlushData {
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
type ThreeColumnPaddedData = ThreeColumnFlushData;
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
  const image = (() => {
    if (padded) {
      return (
        <Section
          style={{
            backgroundColor: colors.light,
            borderRadius:
              captionPosition === "top" ? "0 0 4px 4px" : "4px 4px 0 0",
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
      );
    }
    return (
      <Img
        alt={item.imageAlt}
        src={item.imageSrc}
        width={168}
        style={{
          borderRadius:
            captionPosition === "top" ? "0 0 4px 4px" : "4px 4px 0 0",
          display: "block",
          width: "100%",
        }}
      />
    );
  })();
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
  let lowerMiddle: ReactNode = (
    <ThreeColumnMiddleImage
      item={data.middleImages[1] ?? data.middleImages[0]}
    />
  );
  if (alt && captionPosition === "bottom") {
    lowerMiddle = <ThreeColumnMiddleImage item={data.middleImages[0]} />;
  }
  if (alt && captionPosition === "top") {
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
const ThreeColumnsFlushSection = ({
  data,
  variant,
}: {
  data: ThreeColumnFlushData;
  variant: BentoThreeColumnVariant;
}) => (
  <ThreeColumnsImagesSection data={data} padded={false} variant={variant} />
);
const ThreeColumnsPaddedSection = ({
  data,
  variant,
}: {
  data: ThreeColumnPaddedData;
  variant: BentoThreeColumnVariant;
}) => <ThreeColumnsImagesSection data={data} padded variant={variant} />;
type AlternatingImageData = readonly [
  BentoImageCardItem,
  BentoImageCardItem,
  BentoImageCardItem,
  BentoImageCardItem,
];
type InternalBentoImageGridProps =
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
  props: Extract<
    InternalBentoImageGridProps,
    {
      variant?: "alternating";
    }
  >
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
  props: Extract<
    InternalBentoImageGridProps,
    {
      variant: "three-column";
    }
  >
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
const BentoImageGridSection = (props: InternalBentoImageGridProps) =>
  props.variant === "three-column" ? (
    <ThreeColumnImageGrid {...props} />
  ) : (
    <AlternatingImageGrid {...props} />
  );
export type BentoImageGridProps = InternalBentoImageGridProps & {
  theme?: typeof defaultTheme;
};
export const BentoImageGrid = ({
  theme = defaultTheme,
  ...props
}: BentoImageGridProps) => (
  <BentoEmailShell preview="Flexible bento image grid" theme={theme}>
    <BentoImageGridSection {...props} />
  </BentoEmailShell>
);
BentoImageGrid.PreviewProps = {
  placement: "captions-top",
  style: "captions",
  variant: "alternating",
} satisfies BentoImageGridProps;
