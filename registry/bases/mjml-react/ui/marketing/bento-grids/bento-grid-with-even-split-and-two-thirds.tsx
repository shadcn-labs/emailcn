import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

import {
  BENTO_ASSET_ROOT,
  BentoEmailShell,
  EvenSplitTwoThirdsSection,
} from "./bento-grid-shared";
import type { BentoPaddedVariant, ProductTileData } from "./bento-grid-shared";

type Pair = readonly [ProductTileData, ProductTileData];

export interface BentoGridWithEvenSplitAndTwoThirdsProps {
  bottomItems?: Pair;
  theme?: EmailThemeTokens;
  topItems?: Pair;
  variant?: BentoPaddedVariant;
}

const topItems: Pair = [
  {
    description:
      "Innovative design for ultimate\nperformance and battery life.",
    imageAlt: "",
    imageSrc: `${BENTO_ASSET_ROOT}/4-bento-lg-1.jpg`,
    price: "/ from $1099",
    title: "iPhone 17",
  },
  {
    description:
      "Strikingly thin and fast so you can\nwork, play, or create anywhere.",
    imageAlt: "",
    imageSrc: `${BENTO_ASSET_ROOT}/4-bento-lg-2.jpg`,
    price: "/ from $999",
    title: "MacBook Air",
  },
];

const bottomItemsForVariant = (variant: BentoPaddedVariant): Pair => {
  const insetOnBothSides =
    variant.includes("sides") || variant.includes("full");
  const reverse = variant.endsWith("reverse");
  return [
    {
      imageAlt: "",
      imageSrc: `${BENTO_ASSET_ROOT}/4-bento-sm-${insetOnBothSides ? "5" : "4"}.jpg`,
      price: "/ from $799",
      title: "Watch Ultra",
    },
    {
      imageAlt: "",
      imageSrc: `${BENTO_ASSET_ROOT}/4-bento-lg-${insetOnBothSides ? "4" : "3"}.jpg`,
      price: reverse ? "/ from $599" : "/ from $799",
      title: reverse ? "Mac Mini" : "Watch Ultra",
    },
  ];
};

export const BentoGridWithEvenSplitAndTwoThirdsSection = ({
  bottomItems,
  topItems: top = topItems,
  variant = "padded-left",
}: Omit<BentoGridWithEvenSplitAndTwoThirdsProps, "theme">) => {
  const bottom = bottomItems ?? bottomItemsForVariant(variant);
  return (
    <EvenSplitTwoThirdsSection bottom={bottom} top={top} variant={variant} />
  );
};

export const BentoGridWithEvenSplitAndTwoThirds = ({
  bottomItems,
  theme = defaultTheme,
  topItems: top = topItems,
  variant = "padded-left",
}: BentoGridWithEvenSplitAndTwoThirdsProps) => (
  <BentoEmailShell
    preview="Bento grid with even split and two thirds"
    theme={theme}
  >
    <BentoGridWithEvenSplitAndTwoThirdsSection
      bottomItems={bottomItems}
      topItems={top}
      variant={variant}
    />
  </BentoEmailShell>
);

BentoGridWithEvenSplitAndTwoThirds.PreviewProps = {
  bottomItems: bottomItemsForVariant("padded-left"),
  theme: defaultTheme,
  topItems,
  variant: "padded-left",
} satisfies BentoGridWithEvenSplitAndTwoThirdsProps;
