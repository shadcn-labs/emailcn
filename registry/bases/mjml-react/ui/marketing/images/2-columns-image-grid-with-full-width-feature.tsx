import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  ImageGridEmailShell,
  NativeFeatureImage,
  NativeImageRow,
} from "@/registry/bases/mjml-react/ui/marketing/images/image-grid-shared";

export type TwoColumnsImageGridWithFullWidthFeatureVariant =
  | "full-width-top"
  | "full-width-bottom"
  | "full-width-top-overlay"
  | "full-width-bottom-overlay";

export interface TwoColumnsImageGridWithFullWidthFeatureProps {
  theme?: EmailThemeTokens;
  featureImageSrc?: string;
  featureImageAlt?: string;
  featureImageHref?: string;
  featureHeading?: string;
  featureSubtext?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageHref1?: string;
  imageHeading1?: string;
  imageSubtext1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  imageHref2?: string;
  imageHeading2?: string;
  imageSubtext2?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  variant?: TwoColumnsImageGridWithFullWidthFeatureVariant;
}

const defaults = {
  backgroundColor: "#fffffe",
  featureHeading: "Arlo Bar Chair",
  featureImageAlt: "",
  featureImageHref: "https://example.com",
  featureImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-4.jpg",
  featureSubtext: "Wood / Upholstered Seat",
  headingColor: "#fffffe",
  imageAlt1: "",
  imageAlt2: "",
  imageHeading1: "Milo Lounge Pair",
  imageHeading2: "Nova Dining Chair",
  imageHref1: "https://example.com",
  imageHref2: "https://example.com",
  imageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-3.jpg",
  imageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-4.jpg",
  imageSubtext1: "Velvet / Solid Wood Frame",
  imageSubtext2: "Curved Wood / Fabric Seat",
  textColor: "#fffffe",
};

export const TwoColumnsImageGridWithFullWidthFeatureSection = (
  props: Omit<TwoColumnsImageGridWithFullWidthFeatureProps, "theme">
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
          heading: resolved.imageHeading1,
          href: resolved.imageHref1,
          src: resolved.imageSrc1,
          subtext: resolved.imageSubtext1,
        },
        {
          alt: resolved.imageAlt2,
          heading: resolved.imageHeading2,
          href: resolved.imageHref2,
          src: resolved.imageSrc2,
          subtext: resolved.imageSubtext2,
        },
      ]}
      headingColor={resolved.headingColor}
      overlay={overlay}
      padding={variant.includes("top") ? "12px 24px 24px" : "24px 24px 12px"}
      textColor={resolved.textColor}
      widths={[264, 264]}
    />
  );

  return (
    <>
      {variant.includes("top") ? feature : grid}
      {variant.includes("top") ? grid : feature}
    </>
  );
};

export const TwoColumnsImageGridWithFullWidthFeature = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: TwoColumnsImageGridWithFullWidthFeatureProps) => (
  <ImageGridEmailShell
    backgroundColor={pageBackgroundColor}
    preview="Two columns image grid with full width feature"
    theme={theme}
  >
    <TwoColumnsImageGridWithFullWidthFeatureSection {...props} />
  </ImageGridEmailShell>
);

TwoColumnsImageGridWithFullWidthFeature.PreviewProps = {
  theme: defaultTheme,
  variant: "full-width-top",
} satisfies TwoColumnsImageGridWithFullWidthFeatureProps;
