import { MjmlColumn, MjmlSection, MjmlSpacer } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  ImageGridEmailShell,
  NativeImageCard,
} from "@/registry/bases/mjml-react/ui/marketing/images/image-grid-shared";

export type TwoColumnsMasonryImageGridWith3ImagesVariant =
  | "stacked-left"
  | "stacked-right"
  | "stacked-left-overlay"
  | "stacked-right-overlay";

export interface TwoColumnsMasonryImageGridWith3ImagesProps {
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
  variant?: TwoColumnsMasonryImageGridWith3ImagesVariant;
}

const defaults = {
  backgroundColor: "#fffffe",
  heading1: "White Glass",
  heading2: "Flow White",
  heading3: "Hydra Blue",
  headingColor: "#fffffe",
  imageAlt1: "",
  imageAlt2: "",
  imageAlt3: "",
  imageHref1: "https://example.com",
  imageHref2: "https://example.com",
  imageHref3: "https://example.com",
  imageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-5.jpg",
  imageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-6.jpg",
  imageSrc3:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-portrait-4.jpg",
  subtext1: "Eco-Friendly",
  subtext2: "Sport & Travel",
  subtext3: "Insulated Steel",
  textColor: "#fffffe",
};

export const TwoColumnsMasonryImageGridWith3ImagesSection = (
  props: Omit<TwoColumnsMasonryImageGridWith3ImagesProps, "theme">
) => {
  const resolved = { ...defaults, ...props };
  const variant = resolved.variant ?? "stacked-left";
  const overlay = variant.endsWith("overlay");
  const stackedLeft = variant.startsWith("stacked-left");
  const stackedColumn = (
    <MjmlColumn
      padding={stackedLeft ? "0 12px 0 0" : "0 0 0 12px"}
      verticalAlign="top"
      width="50%"
    >
      <NativeImageCard
        data={{
          alt: resolved.imageAlt1,
          heading: resolved.heading1,
          href: resolved.imageHref1,
          src: resolved.imageSrc1,
          subtext: resolved.subtext1,
        }}
        headingColor={resolved.headingColor}
        overlay={overlay}
        textColor={resolved.textColor}
        width={264}
      />
      <MjmlSpacer height="24px" />
      <NativeImageCard
        data={{
          alt: resolved.imageAlt2,
          heading: resolved.heading2,
          href: resolved.imageHref2,
          src: resolved.imageSrc2,
          subtext: resolved.subtext2,
        }}
        headingColor={resolved.headingColor}
        overlay={overlay}
        textColor={resolved.textColor}
        width={264}
      />
    </MjmlColumn>
  );
  const portraitColumn = (
    <MjmlColumn
      padding={stackedLeft ? "0 0 0 12px" : "0 12px 0 0"}
      verticalAlign="top"
      width="50%"
    >
      <NativeImageCard
        data={{
          alt: resolved.imageAlt3,
          heading: resolved.heading3,
          href: resolved.imageHref3,
          src: resolved.imageSrc3,
          subtext: resolved.subtext3,
        }}
        headingColor={resolved.headingColor}
        overlay={overlay}
        textColor={resolved.textColor}
        width={264}
      />
    </MjmlColumn>
  );

  return (
    <MjmlSection backgroundColor={resolved.backgroundColor} padding="24px">
      {stackedLeft ? stackedColumn : portraitColumn}
      {stackedLeft ? portraitColumn : stackedColumn}
    </MjmlSection>
  );
};

export const TwoColumnsMasonryImageGridWith3Images = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: TwoColumnsMasonryImageGridWith3ImagesProps) => (
  <ImageGridEmailShell
    backgroundColor={pageBackgroundColor}
    preview="Two columns masonry image grid with three images"
    theme={theme}
  >
    <TwoColumnsMasonryImageGridWith3ImagesSection {...props} />
  </ImageGridEmailShell>
);

TwoColumnsMasonryImageGridWith3Images.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies TwoColumnsMasonryImageGridWith3ImagesProps;
