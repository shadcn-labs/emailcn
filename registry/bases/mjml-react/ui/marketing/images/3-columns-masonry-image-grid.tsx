import { MjmlColumn, MjmlSection, MjmlSpacer } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  ImageGridEmailShell,
  NativeImageCard,
} from "@/registry/bases/mjml-react/ui/marketing/images/image-grid-shared";

export type ThreeColumnsMasonryImageGridVariant =
  | "stacked-left"
  | "stacked-right"
  | "stacked-left-overlay"
  | "stacked-right-overlay";

export interface ThreeColumnsMasonryImageGridProps {
  theme?: EmailThemeTokens;
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
  variant?: ThreeColumnsMasonryImageGridVariant;
}

const defaults = {
  backgroundColor: "#fffffe",
  headingColor: "#fffffe",
  stackHeading1: "Gunkan Duo",
  stackHeading2: "Hamachi",
  stackImageAlt1: "",
  stackImageAlt2: "",
  stackImageHref1: "https://example.com",
  stackImageHref2: "https://example.com",
  stackImageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry-stack.jpg",
  stackImageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry-stack-2.jpg",
  stackSubtext1: "Ikura / Citrus Zest",
  stackSubtext2: "Yellowtail / Herb Dressing",
  textColor: "#fffffe",
  wideHeading: "Nigiri Selection",
  wideImageAlt: "",
  wideImageHref: "https://example.com",
  wideImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry.jpg",
  wideSubtext: "Premium Cuts / Seasonal Fish",
};

export const ThreeColumnsMasonryImageGridSection = (
  props: Omit<ThreeColumnsMasonryImageGridProps, "theme">
) => {
  const resolved = { ...defaults, ...props };
  const variant = resolved.variant ?? "stacked-left";
  const overlay = variant.endsWith("overlay");
  const stackedLeft = variant.startsWith("stacked-left");
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

  return (
    <MjmlSection backgroundColor={resolved.backgroundColor} padding="24px">
      {stackedLeft ? stack : wide}
      {stackedLeft ? wide : stack}
    </MjmlSection>
  );
};

export const ThreeColumnsMasonryImageGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: ThreeColumnsMasonryImageGridProps) => (
  <ImageGridEmailShell
    backgroundColor={pageBackgroundColor}
    preview="Three columns masonry image grid"
    theme={theme}
  >
    <ThreeColumnsMasonryImageGridSection {...props} />
  </ImageGridEmailShell>
);

ThreeColumnsMasonryImageGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies ThreeColumnsMasonryImageGridProps;
