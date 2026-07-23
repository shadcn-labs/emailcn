import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  ImageGridEmailShell,
  NativeImageRow,
} from "@/registry/bases/mjml-react/ui/marketing/images/image-grid-shared";

export type ThreeColumnsImageGridVariant =
  | "square-images"
  | "portrait-images"
  | "square-overlay"
  | "portrait-overlay";

export interface ThreeColumnsImageGridProps {
  theme?: EmailThemeTokens;
  imageSrc1?: string;
  imageAlt1?: string;
  imageHref1?: string;
  heading1?: string;
  subtext1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  imageHref2?: string;
  heading2?: string;
  subtext2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  imageHref3?: string;
  heading3?: string;
  subtext3?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  variant?: ThreeColumnsImageGridVariant;
}

const squareImages = [
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-square.jpg",
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-square-2.jpg",
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-square-3.jpg",
] as const;

const portraitImages = [
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-portrait.jpg",
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-portrait-2.jpg",
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-portrait-3.jpg",
] as const;

const variantContent = {
  "portrait-images": {
    headings: ["Boarding Pass", "L’Atelier", "Cultivate"],
    imageSources: portraitImages,
    overlay: false,
    subtexts: ["Smooth & Balanced", "Rich & Nutty", "Light & Bright"],
  },
  "portrait-overlay": {
    headings: ["Boarding Pass", "Cultivate", "L’Atelier"],
    imageSources: [portraitImages[0], portraitImages[2], portraitImages[1]],
    overlay: true,
    subtexts: ["Smooth & Balanced", "Light & Bright", "Rich & Nutty"],
  },
  "square-images": {
    headings: ["Aqua Retreat", "Ocean Spa", "Sand Stroll"],
    imageSources: squareImages,
    overlay: false,
    subtexts: ["Private pools", "Relax & restore", "Beach freedom"],
  },
  "square-overlay": {
    headings: ["Aqua Retreat", "Ocean Spa", "Sand Stroll"],
    imageSources: squareImages,
    overlay: true,
    subtexts: ["Private pools", "Relax & restore", "Beach freedom"],
  },
} as const;

export const ThreeColumnsImageGridSection = ({
  backgroundColor = "#fffffe",
  headingColor = "#fffffe",
  imageAlt1 = "",
  imageAlt2 = "",
  imageAlt3 = "",
  imageHref1 = "https://example.com",
  imageHref2 = "https://example.com",
  imageHref3 = "https://example.com",
  imageSrc1,
  imageSrc2,
  imageSrc3,
  heading1,
  heading2,
  heading3,
  subtext1,
  subtext2,
  subtext3,
  textColor = "#fffffe",
  variant = "square-images",
}: Omit<ThreeColumnsImageGridProps, "theme">) => {
  const content = variantContent[variant];

  return (
    <NativeImageRow
      backgroundColor={backgroundColor}
      cards={[
        {
          alt: imageAlt1,
          heading: heading1 ?? content.headings[0],
          href: imageHref1,
          src: imageSrc1 ?? content.imageSources[0],
          subtext: subtext1 ?? content.subtexts[0],
        },
        {
          alt: imageAlt2,
          heading: heading2 ?? content.headings[1],
          href: imageHref2,
          src: imageSrc2 ?? content.imageSources[1],
          subtext: subtext2 ?? content.subtexts[1],
        },
        {
          alt: imageAlt3,
          heading: heading3 ?? content.headings[2],
          href: imageHref3,
          src: imageSrc3 ?? content.imageSources[2],
          subtext: subtext3 ?? content.subtexts[2],
        },
      ]}
      headingColor={headingColor}
      overlay={content.overlay}
      padding="24px"
      textColor={textColor}
      widths={[168, 168, 168]}
    />
  );
};

export const ThreeColumnsImageGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: ThreeColumnsImageGridProps) => (
  <ImageGridEmailShell
    backgroundColor={pageBackgroundColor}
    preview="Three columns image grid"
    theme={theme}
  >
    <ThreeColumnsImageGridSection {...props} />
  </ImageGridEmailShell>
);

ThreeColumnsImageGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "square-images",
} satisfies ThreeColumnsImageGridProps;
