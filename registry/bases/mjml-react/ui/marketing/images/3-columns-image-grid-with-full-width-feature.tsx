import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  ImageGridEmailShell,
  NativeFeatureImage,
  NativeImageRow,
} from "@/registry/bases/mjml-react/ui/marketing/images/image-grid-shared";

export type ThreeColumnsImageGridWithFullWidthFeatureVariant =
  | "full-width-top"
  | "full-width-bottom"
  | "full-width-top-overlay"
  | "full-width-bottom-overlay";

export interface ThreeColumnsImageGridWithFullWidthFeatureProps {
  theme?: EmailThemeTokens;
  featureImageSrc?: string;
  featureImageAlt?: string;
  featureImageHref?: string;
  featureHeading?: string;
  featureSubtext?: string;
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
  variant?: ThreeColumnsImageGridWithFullWidthFeatureVariant;
}

const defaults = {
  backgroundColor: "#fffffe",
  featureHeading: "Island Escape",
  featureImageAlt: "",
  featureImageHref: "https://example.com",
  featureImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-6.jpg",
  featureSubtext: "Private Paradise",
  heading1: "Aqua Retreat",
  heading2: "Ocean Spa",
  heading3: "Sand Stroll",
  headingColor: "#fffffe",
  imageAlt1: "",
  imageAlt2: "",
  imageAlt3: "",
  imageHref1: "https://example.com",
  imageHref2: "https://example.com",
  imageHref3: "https://example.com",
  imageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-square-4.jpg",
  imageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-square-5.jpg",
  imageSrc3:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-square-6.jpg",
  subtext1: "Private pools",
  subtext2: "Relax & restore",
  subtext3: "Beach freedom",
  textColor: "#fffffe",
};

export const ThreeColumnsImageGridWithFullWidthFeatureSection = (
  props: Omit<ThreeColumnsImageGridWithFullWidthFeatureProps, "theme">
) => {
  const resolved = { ...defaults, ...props };
  const variant = resolved.variant ?? "full-width-top";
  const overlay = variant.endsWith("overlay");
  const feature = (
    <NativeFeatureImage
      backgroundColor={resolved.backgroundColor}
      data={{
        alt: resolved.featureImageAlt,
        heading: resolved.featureHeading,
        href: resolved.featureImageHref,
        src: resolved.featureImageSrc,
        subtext: resolved.featureSubtext,
      }}
      headingColor={resolved.headingColor}
      overlay={overlay}
      padding={variant.includes("top") ? "24px 24px 12px" : "12px 24px 24px"}
      textColor={resolved.textColor}
    />
  );
  const grid = (
    <NativeImageRow
      backgroundColor={resolved.backgroundColor}
      cards={[
        {
          alt: resolved.imageAlt1,
          heading: resolved.heading1,
          href: resolved.imageHref1,
          src: resolved.imageSrc1,
          subtext: resolved.subtext1,
        },
        {
          alt: resolved.imageAlt2,
          heading: resolved.heading2,
          href: resolved.imageHref2,
          src: resolved.imageSrc2,
          subtext: resolved.subtext2,
        },
        {
          alt: resolved.imageAlt3,
          heading: resolved.heading3,
          href: resolved.imageHref3,
          src: resolved.imageSrc3,
          subtext: resolved.subtext3,
        },
      ]}
      headingColor={resolved.headingColor}
      overlay={overlay}
      padding={variant.includes("top") ? "12px 24px 24px" : "24px 24px 12px"}
      textColor={resolved.textColor}
      widths={[168, 168, 168]}
    />
  );

  return (
    <>
      {variant.includes("top") ? feature : grid}
      {variant.includes("top") ? grid : feature}
    </>
  );
};

export const ThreeColumnsImageGridWithFullWidthFeature = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: ThreeColumnsImageGridWithFullWidthFeatureProps) => (
  <ImageGridEmailShell
    backgroundColor={pageBackgroundColor}
    preview="Three columns image grid with full width feature"
    theme={theme}
  >
    <ThreeColumnsImageGridWithFullWidthFeatureSection {...props} />
  </ImageGridEmailShell>
);

ThreeColumnsImageGridWithFullWidthFeature.PreviewProps = {
  theme: defaultTheme,
  variant: "full-width-top",
} satisfies ThreeColumnsImageGridWithFullWidthFeatureProps;
