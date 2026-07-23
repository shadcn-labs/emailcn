import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

import {
  AlternatingImageCardsSection,
  BENTO_ASSET_ROOT,
  BentoEmailShell,
} from "./bento-grid-shared";
import type {
  BentoCaptionsVariant,
  BentoImageCardItem,
} from "./bento-grid-shared";

type Items = readonly [
  BentoImageCardItem,
  BentoImageCardItem,
  BentoImageCardItem,
  BentoImageCardItem,
];

export interface BentoGridWithImagesAndCaptionsProps {
  items?: Items;
  theme?: EmailThemeTokens;
  variant?: BentoCaptionsVariant;
}

const captionsTopItems: Items = [
  {
    imageAlt: "Monochrome Mood",
    imageSrc: `${BENTO_ASSET_ROOT}/1-bento-1.jpg`,
    title: "Monochrome Mood",
  },
  {
    imageAlt: "Bold Moves",
    imageSrc: `${BENTO_ASSET_ROOT}/1-bento-2.jpg`,
    title: "Bold moves",
  },
  {
    imageAlt: "Redux Denim",
    imageSrc: `${BENTO_ASSET_ROOT}/1-bento-3.jpg`,
    title: "Redux Denim",
  },
  {
    imageAlt: "Casual Cool",
    imageSrc: `${BENTO_ASSET_ROOT}/1-bento-4.jpg`,
    title: "Casual Cool",
  },
];

const captionsTopReverseItems: Items = [
  {
    imageAlt: "Bold Moves",
    imageSrc: `${BENTO_ASSET_ROOT}/1-bento-2.jpg`,
    title: "Monochrome Mood",
  },
  {
    imageAlt: "Monochrome Mood",
    imageSrc: `${BENTO_ASSET_ROOT}/1-bento-1.jpg`,
    title: "Bold moves",
  },
  {
    imageAlt: "Casual Cool",
    imageSrc: `${BENTO_ASSET_ROOT}/1-bento-4.jpg`,
    title: "Redux Denim",
  },
  {
    imageAlt: "Redux Denim",
    imageSrc: `${BENTO_ASSET_ROOT}/1-bento-3.jpg`,
    title: "Casual Cool",
  },
];

const captionsBottomReverseItems: Items = [
  {
    imageAlt: "Bold Moves",
    imageSrc: `${BENTO_ASSET_ROOT}/1-bento-2.jpg`,
    title: "Bold moves",
  },
  {
    imageAlt: "Monochrome Mood",
    imageSrc: `${BENTO_ASSET_ROOT}/1-bento-1.jpg`,
    title: "Monochrome Mood",
  },
  {
    imageAlt: "Casual Cool",
    imageSrc: `${BENTO_ASSET_ROOT}/1-bento-4.jpg`,
    title: "Casual Cool",
  },
  {
    imageAlt: "Redux Denim",
    imageSrc: `${BENTO_ASSET_ROOT}/1-bento-3.jpg`,
    title: "Redux Denim",
  },
];

const defaultItemsByVariant = {
  "captions-bottom": captionsTopItems,
  "captions-bottom-reverse": captionsBottomReverseItems,
  "captions-top": captionsTopItems,
  "captions-top-reverse": captionsTopReverseItems,
} satisfies Record<BentoCaptionsVariant, Items>;

export const BentoGridWithImagesAndCaptionsSection = ({
  items,
  variant = "captions-top",
}: Omit<BentoGridWithImagesAndCaptionsProps, "theme">) => (
  <AlternatingImageCardsSection
    items={items ?? defaultItemsByVariant[variant]}
    variant={variant}
  />
);

export const BentoGridWithImagesAndCaptions = ({
  items,
  theme = defaultTheme,
  variant = "captions-top",
}: BentoGridWithImagesAndCaptionsProps) => (
  <BentoEmailShell preview="Bento grid with images and captions" theme={theme}>
    <BentoGridWithImagesAndCaptionsSection items={items} variant={variant} />
  </BentoEmailShell>
);

BentoGridWithImagesAndCaptions.PreviewProps = {
  items: defaultItemsByVariant["captions-top"],
  theme: defaultTheme,
  variant: "captions-top",
} satisfies BentoGridWithImagesAndCaptionsProps;
