import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";

import {
  BENTO_ASSET_ROOT,
  BentoEmailShell,
  ThreeColumnsPaddedSection,
} from "./bento-grid-shared";
import type {
  BentoThreeColumnVariant,
  ThreeColumnPaddedData,
} from "./bento-grid-shared";

export interface BentoGridWith3ColumnsAndPaddedImagesProps {
  data?: ThreeColumnPaddedData;
  theme?: TailwindConfig;
  variant?: BentoThreeColumnVariant;
}

const item = (
  image: string,
  title: string,
  description = ""
): ThreeColumnPaddedData["left"] => ({
  description,
  imageAlt: "",
  imageSrc: `${BENTO_ASSET_ROOT}/${image}.jpg`,
  title,
});

const promo = {
  description: "A striking solo statement that’s both minimal and bold.",
  title: "The Kartell Collection",
};

const defaultData: Record<BentoThreeColumnVariant, ThreeColumnPaddedData> = {
  "captions-bottom": {
    left: item("3-bento-lg-2-pad", "Milo Bar Stool", "Walnut frame"),
    middleImages: [item("3-bento-sm-3", ""), item("3-bento-sm-1", "")],
    right: item("3-bento-lg-1-pad", "Arco Side Chair", "Ocean Shell"),
  },
  "captions-bottom-alt": {
    left: item("3-bento-lg-2-pad", "Milo Bar Stool", "Walnut frame"),
    middleImages: [item("3-bento-sm-1", "")],
    promo,
    right: item("3-bento-lg-4-pad", "Clyde Chairs", "Canadian wood"),
  },
  "captions-top": {
    left: item("3-bento-lg-1-pad", "Arco Side Chair", "Ocean Shell"),
    middleImages: [item("3-bento-sm-1", ""), item("3-bento-sm-2", "")],
    right: item("3-bento-lg-2-pad", "Milo Bar Stool", "Walnut frame"),
  },
  "captions-top-alt": {
    left: item("3-bento-lg-3-pad", "Walnut Seat", "Tall barstool"),
    middleImages: [item("3-bento-sm-1", "")],
    promo: { ...promo, dark: true },
    right: item("3-bento-lg-2-pad", "Milo Bar Stool", "Walnut frame"),
  },
};

export const BentoGridWith3ColumnsAndPaddedImagesSection = ({
  data,
  variant = "captions-bottom",
}: Omit<BentoGridWith3ColumnsAndPaddedImagesProps, "theme">) => {
  const resolvedData = data ?? defaultData[variant];
  return <ThreeColumnsPaddedSection data={resolvedData} variant={variant} />;
};

export const BentoGridWith3ColumnsAndPaddedImages = ({
  data,
  theme = defaultTheme,
  variant = "captions-bottom",
}: BentoGridWith3ColumnsAndPaddedImagesProps) => (
  <BentoEmailShell
    preview="Bento grid with 3 columns and padded images"
    theme={theme}
  >
    <BentoGridWith3ColumnsAndPaddedImagesSection
      data={data}
      variant={variant}
    />
  </BentoEmailShell>
);

BentoGridWith3ColumnsAndPaddedImages.PreviewProps = {
  data: defaultData["captions-bottom"],
  theme: defaultTheme,
  variant: "captions-bottom",
} satisfies BentoGridWith3ColumnsAndPaddedImagesProps;
