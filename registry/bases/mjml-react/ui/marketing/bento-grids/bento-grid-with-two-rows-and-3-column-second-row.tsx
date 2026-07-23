import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

import {
  BENTO_ASSET_ROOT,
  BentoEmailShell,
  TwoRowsThreeColumnsSection,
} from "./bento-grid-shared";
import type { BentoPaddedVariant, ProductTileData } from "./bento-grid-shared";

type TopItems = readonly [ProductTileData, ProductTileData];
type BottomItems = readonly [ProductTileData, ProductTileData, ProductTileData];

export interface BentoGridWithTwoRowsAnd3ColumnSecondRowProps {
  bottomItems?: BottomItems;
  theme?: EmailThemeTokens;
  topItems?: TopItems;
  variant?: BentoPaddedVariant;
}

const topItems: TopItems = [
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

const bottomItems: BottomItems = [
  {
    imageAlt: "",
    imageSrc: `${BENTO_ASSET_ROOT}/4-bento-sm-1.jpg`,
    price: "/ from $799",
    title: "Watch Ultra",
  },
  {
    imageAlt: "",
    imageSrc: `${BENTO_ASSET_ROOT}/4-bento-sm-2.jpg`,
    price: "/ from $599",
    title: "Mac Mini",
  },
  {
    imageAlt: "",
    imageSrc: `${BENTO_ASSET_ROOT}/4-bento-sm-3.jpg`,
    price: "/ from $129",
    title: "AirPods",
  },
];

export const BentoGridWithTwoRowsAnd3ColumnSecondRowSection = ({
  bottomItems: bottom = bottomItems,
  topItems: top = topItems,
  variant = "padded-full",
}: Omit<BentoGridWithTwoRowsAnd3ColumnSecondRowProps, "theme">) => (
  <TwoRowsThreeColumnsSection bottom={bottom} top={top} variant={variant} />
);

export const BentoGridWithTwoRowsAnd3ColumnSecondRow = ({
  bottomItems: bottom = bottomItems,
  theme = defaultTheme,
  topItems: top = topItems,
  variant = "padded-full",
}: BentoGridWithTwoRowsAnd3ColumnSecondRowProps) => (
  <BentoEmailShell
    preview="Bento grid with two rows and 3 column second row"
    theme={theme}
  >
    <BentoGridWithTwoRowsAnd3ColumnSecondRowSection
      bottomItems={bottom}
      topItems={top}
      variant={variant}
    />
  </BentoEmailShell>
);

BentoGridWithTwoRowsAnd3ColumnSecondRow.PreviewProps = {
  bottomItems,
  theme: defaultTheme,
  topItems,
  variant: "padded-full",
} satisfies BentoGridWithTwoRowsAnd3ColumnSecondRowProps;
