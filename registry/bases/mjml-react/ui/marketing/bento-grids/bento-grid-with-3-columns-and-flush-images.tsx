import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

import {
  BENTO_ASSET_ROOT,
  BentoEmailShell,
  ThreeColumnsFlushSection,
} from "./bento-grid-shared";
import type {
  BentoThreeColumnVariant,
  ThreeColumnFlushData,
} from "./bento-grid-shared";

export interface BentoGridWith3ColumnsAndFlushImagesProps {
  data?: ThreeColumnFlushData;
  theme?: EmailThemeTokens;
  variant?: BentoThreeColumnVariant;
}

const item = (
  image: string,
  title: string,
  description = ""
): ThreeColumnFlushData["left"] => ({
  description,
  imageAlt: "",
  imageSrc: `${BENTO_ASSET_ROOT}/${image}.jpg`,
  title,
});

const promo = {
  description: "A striking solo statement that’s both minimal and bold.",
  title: "The Kartell Collection",
};

const defaultData: Record<BentoThreeColumnVariant, ThreeColumnFlushData> = {
  "captions-bottom": {
    left: item("3-bento-lg-2", "Arco Side Chair", "Ocean Shell"),
    middleImages: [item("3-bento-sm-3", ""), item("3-bento-sm-1", "")],
    right: item("3-bento-lg-1", "Arco Side Chair", "Ocean Shell"),
  },
  "captions-bottom-alt": {
    left: item("3-bento-lg-2", "Milo Bar Stool", "Walnut frame"),
    middleImages: [item("3-bento-sm-1", "")],
    promo,
    right: item("3-bento-lg-4", "Clyde Chairs", "Canadian wood"),
  },
  "captions-top": {
    left: item("3-bento-lg-1", "Arco Side Chair", "Ocean Shell"),
    middleImages: [item("3-bento-sm-1", ""), item("3-bento-sm-2", "")],
    right: item("3-bento-lg-2", "Arco Side Chair", "Ocean Shell"),
  },
  "captions-top-alt": {
    left: item("3-bento-lg-3", "Walnut Seat", "Tall barstool"),
    middleImages: [item("3-bento-sm-1", "")],
    promo: { ...promo, dark: true },
    right: item("3-bento-lg-2", "Milo Bar Stool", "Walnut frame"),
  },
};

export const BentoGridWith3ColumnsAndFlushImagesSection = ({
  data,
  variant = "captions-bottom-alt",
}: Omit<BentoGridWith3ColumnsAndFlushImagesProps, "theme">) => {
  const resolvedData = data ?? defaultData[variant];
  return <ThreeColumnsFlushSection data={resolvedData} variant={variant} />;
};

export const BentoGridWith3ColumnsAndFlushImages = ({
  data,
  theme = defaultTheme,
  variant = "captions-bottom-alt",
}: BentoGridWith3ColumnsAndFlushImagesProps) => (
  <BentoEmailShell
    preview="Bento grid with 3 columns and flush images"
    theme={theme}
  >
    <BentoGridWith3ColumnsAndFlushImagesSection data={data} variant={variant} />
  </BentoEmailShell>
);

BentoGridWith3ColumnsAndFlushImages.PreviewProps = {
  data: defaultData["captions-bottom-alt"],
  theme: defaultTheme,
  variant: "captions-bottom-alt",
} satisfies BentoGridWith3ColumnsAndFlushImagesProps;
