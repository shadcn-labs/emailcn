import { MjmlColumn, MjmlSection, MjmlSpacer } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  ImageGridEmailShell,
  NativeFeatureImage,
  NativeImageCard,
} from "@/registry/bases/mjml-react/ui/marketing/images/image-grid-shared";

export type TwoColumnsMasonryImageGridWith4ImagesVariant =
  | "stacked-left"
  | "stacked-right"
  | "stacked-left-reverse"
  | "stacked-right-reverse"
  | "stacked-left-overlay"
  | "stacked-right-overlay"
  | "stacked-left-overlay-reverse"
  | "stacked-right-overlay-reverse";

export interface TwoColumnsMasonryImageGridWith4ImagesProps {
  theme?: EmailThemeTokens;
  featureImageSrc?: string;
  featureImageAlt?: string;
  featureImageHref?: string;
  featureHeading?: string;
  featureSubtext?: string;
  landscapeImageSrc1?: string;
  landscapeImageAlt1?: string;
  landscapeImageHref1?: string;
  landscapeHeading1?: string;
  landscapeSubtext1?: string;
  landscapeImageSrc2?: string;
  landscapeImageAlt2?: string;
  landscapeImageHref2?: string;
  landscapeHeading2?: string;
  landscapeSubtext2?: string;
  portraitImageSrc?: string;
  portraitImageAlt?: string;
  portraitImageHref?: string;
  portraitHeading?: string;
  portraitSubtext?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  variant?: TwoColumnsMasonryImageGridWith4ImagesVariant;
}

const defaults = {
  backgroundColor: "#fffffe",
  featureHeading: "Nemora",
  featureImageAlt: "",
  featureImageHref: "https://example.com",
  featureImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-3.jpg",
  featureSubtext: "Pants and shirts",
  headingColor: "#fffffe",
  landscapeHeading1: "Reckless",
  landscapeHeading2: "Nike",
  landscapeImageAlt1: "",
  landscapeImageAlt2: "",
  landscapeImageHref1: "https://example.com",
  landscapeImageHref2: "https://example.com",
  landscapeImageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  landscapeImageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  landscapeSubtext1: "Accessories",
  landscapeSubtext2: "Shoes and accessories",
  portraitHeading: "Omakase",
  portraitImageAlt: "",
  portraitImageHref: "https://example.com",
  portraitImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-portrait-3.jpg",
  portraitSubtext: "T-shirts and sweats",
  textColor: "#fffffe",
};

export const TwoColumnsMasonryImageGridWith4ImagesSection = (
  props: Omit<TwoColumnsMasonryImageGridWith4ImagesProps, "theme">
) => {
  const resolved = { ...defaults, ...props };
  const variant = resolved.variant ?? "stacked-left";
  const overlay = variant.includes("overlay");
  const reverse = variant.endsWith("reverse");
  const stackedLeft = variant.startsWith("stacked-left");
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
      padding={reverse ? "12px 24px 24px" : "24px 24px 12px"}
      textColor={resolved.textColor}
    />
  );
  const landscape = (
    <MjmlColumn
      padding={stackedLeft ? "0 12px 0 0" : "0 0 0 12px"}
      verticalAlign="top"
      width="50%"
    >
      <NativeImageCard
        data={{
          alt: resolved.landscapeImageAlt1,
          heading: resolved.landscapeHeading1,
          href: resolved.landscapeImageHref1,
          src: resolved.landscapeImageSrc1,
          subtext: resolved.landscapeSubtext1,
        }}
        headingColor={resolved.headingColor}
        overlay={overlay}
        textColor={resolved.textColor}
        width={264}
      />
      <MjmlSpacer height="24px" />
      <NativeImageCard
        data={{
          alt: resolved.landscapeImageAlt2,
          heading: resolved.landscapeHeading2,
          href: resolved.landscapeImageHref2,
          src: resolved.landscapeImageSrc2,
          subtext: resolved.landscapeSubtext2,
        }}
        headingColor={resolved.headingColor}
        overlay={overlay}
        textColor={resolved.textColor}
        width={264}
      />
    </MjmlColumn>
  );
  const portrait = (
    <MjmlColumn
      padding={stackedLeft ? "0 0 0 12px" : "0 12px 0 0"}
      verticalAlign="top"
      width="50%"
    >
      <NativeImageCard
        data={{
          alt: resolved.portraitImageAlt,
          heading: resolved.portraitHeading,
          href: resolved.portraitImageHref,
          src: resolved.portraitImageSrc,
          subtext: resolved.portraitSubtext,
        }}
        headingColor={resolved.headingColor}
        overlay={overlay}
        textColor={resolved.textColor}
        width={264}
      />
    </MjmlColumn>
  );
  const masonry = (
    <MjmlSection
      backgroundColor={resolved.backgroundColor}
      padding={reverse ? "24px 24px 12px" : "12px 24px 24px"}
    >
      {stackedLeft ? landscape : portrait}
      {stackedLeft ? portrait : landscape}
    </MjmlSection>
  );

  return (
    <>
      {reverse ? masonry : feature}
      {reverse ? feature : masonry}
    </>
  );
};

export const TwoColumnsMasonryImageGridWith4Images = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: TwoColumnsMasonryImageGridWith4ImagesProps) => (
  <ImageGridEmailShell
    backgroundColor={pageBackgroundColor}
    preview="Two columns masonry image grid with four images"
    theme={theme}
  >
    <TwoColumnsMasonryImageGridWith4ImagesSection {...props} />
  </ImageGridEmailShell>
);

TwoColumnsMasonryImageGridWith4Images.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies TwoColumnsMasonryImageGridWith4ImagesProps;
