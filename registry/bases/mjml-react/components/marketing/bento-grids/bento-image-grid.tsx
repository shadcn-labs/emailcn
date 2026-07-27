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

import { defaultTheme } from "@/registry/bases/mjml-react/themes/theme-default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/theme-default";

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

interface BentoImageCardItem {
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
    {(() => {
      if (item.description) {
        return (
          <MjmlText
            color={dark ? colors.mutedDark : colors.muted}
            fontFamily={fontFamily}
            fontSize="12px"
            lineHeight="16px"
            padding="12px 16px 16px"
          >
            {item.description}
          </MjmlText>
        );
      }
      return <MjmlSpacer height="16px" />;
    })()}
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
