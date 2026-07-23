import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

import {
  AlternatingImageCardsSection,
  BENTO_ASSET_ROOT,
  BentoEmailShell,
} from "./bento-grid-shared";
import type {
  BentoDetailsVariant,
  BentoImageCardItem,
} from "./bento-grid-shared";

type Items = readonly [
  BentoImageCardItem,
  BentoImageCardItem,
  BentoImageCardItem,
  BentoImageCardItem,
];

export interface BentoGridWithImagesAndDetailsProps {
  items?: Items;
  theme?: EmailThemeTokens;
  variant?: BentoDetailsVariant;
}

const detail = "A striking solo statement that’s both minimal and bold.";

const card = (
  image: number,
  imageAlt: string,
  title: string,
  description?: string
): BentoImageCardItem => ({
  description,
  imageAlt,
  imageSrc: `${BENTO_ASSET_ROOT}/2-bento-${image}.jpg`,
  title,
});

const captionsTopItems: Items = [
  card(1, "Monochrome Mood", "Monochrome Mood", detail),
  card(2, "Bold Moves", "Bold moves"),
  card(3, "Redux Denim", "Redux Denim"),
  card(4, "Casual Cool", "Casual Cool", detail),
];

const captionsTopReverseItems: Items = [
  card(2, "Bold Moves", "Back to Basics"),
  card(1, "Monochrome Mood", "Monochrome Mood", detail),
  card(4, "Casual Cool", "Casual Cool", detail),
  card(3, "Redux Denim", "Redux Denim"),
];

const captionsTopAltItems: Items = [
  card(5, "Monochrome Mood", "Monochrome Mood"),
  card(2, "Bold Moves", "Bold Moves", detail),
  card(3, "Redux Denim", "Casual Cool", detail),
  card(6, "Casual Cool", "Redux Denim"),
];

const captionsTopAltReverseItems: Items = [
  card(2, "Bold Moves", "Monochrome Mood", detail),
  card(5, "Monochrome Mood", "Bold Moves"),
  card(6, "Casual Cool", "Casual Cool"),
  card(3, "Redux Denim", "Redux Denim", detail),
];

const captionsBottomAltItems: Items = [
  card(5, "Monochrome Mood", "Monochrome Mood"),
  card(2, "Bold Moves", "Bold moves", detail),
  card(7, "Redux Denim", "Redux Denim", detail),
  card(6, "Casual Cool", "Casual Cool"),
];

const captionsBottomAltReverseItems: Items = [
  card(2, "Bold Moves", "Bold Moves", detail),
  card(5, "Monochrome Mood", "Monochrome Mood"),
  card(6, "Casual Cool", "Casual Cool"),
  card(7, "Redux Denim", "Redux Denim", detail),
];

const defaultItemsByVariant = {
  "captions-bottom": captionsTopItems,
  "captions-bottom-alt": captionsBottomAltItems,
  "captions-bottom-alt-reverse": captionsBottomAltReverseItems,
  "captions-bottom-reverse": captionsTopReverseItems,
  "captions-top": captionsTopItems,
  "captions-top-alt": captionsTopAltItems,
  "captions-top-alt-reverse": captionsTopAltReverseItems,
  "captions-top-reverse": captionsTopReverseItems,
} satisfies Record<BentoDetailsVariant, Items>;

export const BentoGridWithImagesAndDetailsSection = ({
  items,
  variant = "captions-top-alt-reverse",
}: Omit<BentoGridWithImagesAndDetailsProps, "theme">) => (
  <AlternatingImageCardsSection
    items={items ?? defaultItemsByVariant[variant]}
    variant={variant}
  />
);

export const BentoGridWithImagesAndDetails = ({
  items,
  theme = defaultTheme,
  variant = "captions-top-alt-reverse",
}: BentoGridWithImagesAndDetailsProps) => (
  <BentoEmailShell preview="Bento grid with images and details" theme={theme}>
    <BentoGridWithImagesAndDetailsSection items={items} variant={variant} />
  </BentoEmailShell>
);

BentoGridWithImagesAndDetails.PreviewProps = {
  theme: defaultTheme,
  variant: "captions-top-alt-reverse",
} satisfies BentoGridWithImagesAndDetailsProps;
