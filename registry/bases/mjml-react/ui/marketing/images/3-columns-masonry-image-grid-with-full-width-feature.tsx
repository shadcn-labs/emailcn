import { MjmlColumn, MjmlSection, MjmlSpacer } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  ImageGridEmailShell,
  NativeFeatureImage,
  NativeImageCard,
} from "@/registry/bases/mjml-react/ui/marketing/images/image-grid-shared";

export type ThreeColumnsMasonryImageGridWithFullWidthFeatureVariant =
  | "stacked-left"
  | "stacked-right"
  | "stacked-left-reverse"
  | "stacked-right-reverse"
  | "stacked-left-overlay"
  | "stacked-right-overlay"
  | "stacked-left-overlay-reverse"
  | "stacked-right-overlay-reverse";

export interface ThreeColumnsMasonryImageGridWithFullWidthFeatureProps {
  theme?: EmailThemeTokens;
  featureImageSrc?: string;
  featureImageAlt?: string;
  featureImageHref?: string;
  featureHeading?: string;
  featureSubtext?: string;
  stackImageSrc1?: string;
  stackImageAlt1?: string;
  stackImageHref1?: string;
  stackHeading1?: string;
  stackSubtext1?: string;
  stackImageSrc2?: string;
  stackImageAlt2?: string;
  stackImageHref2?: string;
  stackHeading2?: string;
  stackSubtext2?: string;
  wideImageSrc?: string;
  wideImageAlt?: string;
  wideImageHref?: string;
  wideHeading?: string;
  wideSubtext?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  variant?: ThreeColumnsMasonryImageGridWithFullWidthFeatureVariant;
}

const defaults = {
  backgroundColor: "#fffffe",
  featureHeading: "Slope Lines",
  featureImageAlt: "",
  featureImageHref: "https://example.com",
  featureImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-5.jpg",
  featureSubtext: "Optical Ski Illustration",
  headingColor: "#fffffe",
  stackHeading1: "Bold",
  stackHeading2: "Wave",
  stackImageAlt1: "",
  stackImageAlt2: "",
  stackImageHref1: "https://example.com",
  stackImageHref2: "https://example.com",
  stackImageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry-stack-3.jpg",
  stackImageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry-stack-4.jpg",
  stackSubtext1: "Typography",
  stackSubtext2: "Fluid form",
  textColor: "#fffffe",
  wideHeading: "Mod Blocks",
  wideImageAlt: "",
  wideImageHref: "https://example.com",
  wideImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry-2.jpg",
  wideSubtext: "Monochrome Geometric Pattern",
};

export const ThreeColumnsMasonryImageGridWithFullWidthFeatureSection = (
  props: Omit<ThreeColumnsMasonryImageGridWithFullWidthFeatureProps, "theme">
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
  const stack = (
    <MjmlColumn
      padding={stackedLeft ? "0 12px 0 0" : "0 0 0 12px"}
      verticalAlign="top"
      width="32%"
    >
      <NativeImageCard
        data={{
          alt: resolved.stackImageAlt1,
          heading: resolved.stackHeading1,
          href: resolved.stackImageHref1,
          src: resolved.stackImageSrc1,
          subtext: resolved.stackSubtext1,
        }}
        headingColor={resolved.headingColor}
        overlay={overlay}
        textColor={resolved.textColor}
        width={168}
      />
      <MjmlSpacer height="24px" />
      <NativeImageCard
        data={{
          alt: resolved.stackImageAlt2,
          heading: resolved.stackHeading2,
          href: resolved.stackImageHref2,
          src: resolved.stackImageSrc2,
          subtext: resolved.stackSubtext2,
        }}
        headingColor={resolved.headingColor}
        overlay={overlay}
        textColor={resolved.textColor}
        width={168}
      />
    </MjmlColumn>
  );
  const wide = (
    <MjmlColumn
      padding={stackedLeft ? "0 0 0 12px" : "0 12px 0 0"}
      verticalAlign="top"
      width="68%"
    >
      <NativeImageCard
        data={{
          alt: resolved.wideImageAlt,
          heading: resolved.wideHeading,
          href: resolved.wideImageHref,
          src: resolved.wideImageSrc,
          subtext: resolved.wideSubtext,
        }}
        headingColor={resolved.headingColor}
        overlay={overlay}
        textColor={resolved.textColor}
        width={360}
      />
    </MjmlColumn>
  );
  const masonry = (
    <MjmlSection
      backgroundColor={resolved.backgroundColor}
      padding={reverse ? "24px 24px 12px" : "12px 24px 24px"}
    >
      {stackedLeft ? stack : wide}
      {stackedLeft ? wide : stack}
    </MjmlSection>
  );

  return (
    <>
      {reverse ? masonry : feature}
      {reverse ? feature : masonry}
    </>
  );
};

export const ThreeColumnsMasonryImageGridWithFullWidthFeature = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: ThreeColumnsMasonryImageGridWithFullWidthFeatureProps) => (
  <ImageGridEmailShell
    backgroundColor={pageBackgroundColor}
    preview="Three columns masonry image grid with full width feature"
    theme={theme}
  >
    <ThreeColumnsMasonryImageGridWithFullWidthFeatureSection {...props} />
  </ImageGridEmailShell>
);

ThreeColumnsMasonryImageGridWithFullWidthFeature.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies ThreeColumnsMasonryImageGridWithFullWidthFeatureProps;
