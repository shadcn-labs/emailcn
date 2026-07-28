import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
  MjmlSpacer,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

interface NativeImageCardData {
  alt: string;
  heading: string;
  href: string;
  src: string;
  subtext: string;
}

const ImageGridEmailShell = ({
  backgroundColor,
  children,
  preview,
  theme,
}: {
  backgroundColor: string;
  children: ReactNode;
  preview: string;
  theme: EmailTheme;
}) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{preview}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor={backgroundColor} width={theme.containerWidth}>
      <MjmlWrapper padding="0">{children}</MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

const NativeImageCard = ({
  data,
  headingColor,
  overlay,
  textColor,
  width,
}: {
  data: NativeImageCardData;
  headingColor: string;
  overlay: boolean;
  textColor: string;
  width: number;
}) => (
  <>
    <MjmlImage
      alt={data.alt}
      borderRadius={overlay ? "4px 4px 0 0" : "4px"}
      href={data.href}
      padding="0"
      src={data.src}
      width={`${width}px`}
    />
    {overlay ? (
      <>
        <MjmlText
          backgroundColor="#000001"
          color={headingColor}
          fontFamily={fontFamily}
          fontSize="20px"
          fontWeight="700"
          lineHeight="28px"
          padding="16px 16px 0"
        >
          {data.heading}
        </MjmlText>
        <MjmlText
          backgroundColor="#000001"
          color={textColor}
          fontFamily={fontFamily}
          fontSize="16px"
          lineHeight="24px"
          padding="0 16px 16px"
        >
          {data.subtext}
        </MjmlText>
      </>
    ) : null}
  </>
);

const NativeFeatureImage = ({
  backgroundColor,
  data,
  headingColor,
  overlay,
  padding = "0 24px 24px",
  textColor,
}: {
  backgroundColor: string;
  data: NativeImageCardData;
  headingColor: string;
  overlay: boolean;
  padding?: string;
  textColor: string;
}) => (
  <MjmlSection backgroundColor={backgroundColor} padding={padding}>
    <MjmlColumn padding="0">
      <NativeImageCard
        data={data}
        headingColor={headingColor}
        overlay={overlay}
        textColor={textColor}
        width={552}
      />
    </MjmlColumn>
  </MjmlSection>
);

type TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3ImagesVariant =
  | "stacked-left"
  | "stacked-right"
  | "stacked-left-overlay"
  | "stacked-right-overlay";

interface TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3ImagesProps {
  theme?: EmailTheme;
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
  variant?: TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3ImagesVariant;
}

const TwoColumnMasonryThree_defaults = {
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
  imageSrc1: emailAsset("image-grids/2-col-landscape-5.jpg"),
  imageSrc2: emailAsset("image-grids/2-col-landscape-6.jpg"),
  imageSrc3: emailAsset("image-grids/2-col-portrait-4.jpg"),
  subtext1: "Eco-Friendly",
  subtext2: "Sport & Travel",
  subtext3: "Insulated Steel",
  textColor: "#fffffe",
};

const TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3ImagesSection = (
  props: Omit<
    TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3ImagesProps,
    "theme"
  >
) => {
  const resolved = { ...TwoColumnMasonryThree_defaults, ...props };
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

const TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3Images = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3ImagesProps) => (
  <ImageGridEmailShell
    backgroundColor={pageBackgroundColor}
    preview="Two columns masonry image grid with three images"
    theme={theme}
  >
    <TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3ImagesSection
      {...props}
    />
  </ImageGridEmailShell>
);

TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3Images.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3ImagesProps;

const __TwoColumnMasonryThree =
  TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3Images;

type TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4ImagesVariant =
  | "stacked-left"
  | "stacked-right"
  | "stacked-left-reverse"
  | "stacked-right-reverse"
  | "stacked-left-overlay"
  | "stacked-right-overlay"
  | "stacked-left-overlay-reverse"
  | "stacked-right-overlay-reverse";

interface TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4ImagesProps {
  theme?: EmailTheme;
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
  variant?: TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4ImagesVariant;
}

const TwoColumnMasonryFour_defaults = {
  backgroundColor: "#fffffe",
  featureHeading: "Nemora",
  featureImageAlt: "",
  featureImageHref: "https://example.com",
  featureImageSrc: emailAsset("image-grids/full-width-3.jpg"),
  featureSubtext: "Pants and shirts",
  headingColor: "#fffffe",
  landscapeHeading1: "Reckless",
  landscapeHeading2: "Nike",
  landscapeImageAlt1: "",
  landscapeImageAlt2: "",
  landscapeImageHref1: "https://example.com",
  landscapeImageHref2: "https://example.com",
  landscapeImageSrc1: emailAsset("image-grids/2-col-landscape.jpg"),
  landscapeImageSrc2: emailAsset("image-grids/2-col-landscape-2.jpg"),
  landscapeSubtext1: "Accessories",
  landscapeSubtext2: "Shoes and accessories",
  portraitHeading: "Omakase",
  portraitImageAlt: "",
  portraitImageHref: "https://example.com",
  portraitImageSrc: emailAsset("image-grids/2-col-portrait-3.jpg"),
  portraitSubtext: "T-shirts and sweats",
  textColor: "#fffffe",
};

const TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4ImagesSection = (
  props: Omit<
    TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4ImagesProps,
    "theme"
  >
) => {
  const resolved = { ...TwoColumnMasonryFour_defaults, ...props };
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

const TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4Images = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4ImagesProps) => (
  <ImageGridEmailShell
    backgroundColor={pageBackgroundColor}
    preview="Two columns masonry image grid with four images"
    theme={theme}
  >
    <TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4ImagesSection
      {...props}
    />
  </ImageGridEmailShell>
);

TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4Images.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4ImagesProps;

const __TwoColumnMasonryFour =
  TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4Images;

type ThreeColumnMasonry_ThreeColumnsMasonryImageGridVariant =
  | "stacked-left"
  | "stacked-right"
  | "stacked-left-overlay"
  | "stacked-right-overlay";

interface ThreeColumnMasonry_ThreeColumnsMasonryImageGridProps {
  theme?: EmailTheme;
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
  variant?: ThreeColumnMasonry_ThreeColumnsMasonryImageGridVariant;
}

const ThreeColumnMasonry_defaults = {
  backgroundColor: "#fffffe",
  headingColor: "#fffffe",
  stackHeading1: "Gunkan Duo",
  stackHeading2: "Hamachi",
  stackImageAlt1: "",
  stackImageAlt2: "",
  stackImageHref1: "https://example.com",
  stackImageHref2: "https://example.com",
  stackImageSrc1: emailAsset("image-grids/3-col-masonry-stack.jpg"),
  stackImageSrc2: emailAsset("image-grids/3-col-masonry-stack-2.jpg"),
  stackSubtext1: "Ikura / Citrus Zest",
  stackSubtext2: "Yellowtail / Herb Dressing",
  textColor: "#fffffe",
  wideHeading: "Nigiri Selection",
  wideImageAlt: "",
  wideImageHref: "https://example.com",
  wideImageSrc: emailAsset("image-grids/3-col-masonry.jpg"),
  wideSubtext: "Premium Cuts / Seasonal Fish",
};

const ThreeColumnMasonry_ThreeColumnsMasonryImageGridSection = (
  props: Omit<ThreeColumnMasonry_ThreeColumnsMasonryImageGridProps, "theme">
) => {
  const resolved = { ...ThreeColumnMasonry_defaults, ...props };
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

const ThreeColumnMasonry_ThreeColumnsMasonryImageGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: ThreeColumnMasonry_ThreeColumnsMasonryImageGridProps) => (
  <ImageGridEmailShell
    backgroundColor={pageBackgroundColor}
    preview="Three columns masonry image grid"
    theme={theme}
  >
    <ThreeColumnMasonry_ThreeColumnsMasonryImageGridSection {...props} />
  </ImageGridEmailShell>
);

ThreeColumnMasonry_ThreeColumnsMasonryImageGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies ThreeColumnMasonry_ThreeColumnsMasonryImageGridProps;

const __ThreeColumnMasonry = ThreeColumnMasonry_ThreeColumnsMasonryImageGrid;

type ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeatureVariant =
    | "stacked-left"
    | "stacked-right"
    | "stacked-left-reverse"
    | "stacked-right-reverse"
    | "stacked-left-overlay"
    | "stacked-right-overlay"
    | "stacked-left-overlay-reverse"
    | "stacked-right-overlay-reverse";

interface ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeatureProps {
  theme?: EmailTheme;
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
  variant?: ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeatureVariant;
}

const ThreeColumnMasonryFeature_defaults = {
  backgroundColor: "#fffffe",
  featureHeading: "Slope Lines",
  featureImageAlt: "",
  featureImageHref: "https://example.com",
  featureImageSrc: emailAsset("image-grids/full-width-5.jpg"),
  featureSubtext: "Optical Ski Illustration",
  headingColor: "#fffffe",
  stackHeading1: "Bold",
  stackHeading2: "Wave",
  stackImageAlt1: "",
  stackImageAlt2: "",
  stackImageHref1: "https://example.com",
  stackImageHref2: "https://example.com",
  stackImageSrc1: emailAsset("image-grids/3-col-masonry-stack-3.jpg"),
  stackImageSrc2: emailAsset("image-grids/3-col-masonry-stack-4.jpg"),
  stackSubtext1: "Typography",
  stackSubtext2: "Fluid form",
  textColor: "#fffffe",
  wideHeading: "Mod Blocks",
  wideImageAlt: "",
  wideImageHref: "https://example.com",
  wideImageSrc: emailAsset("image-grids/3-col-masonry-2.jpg"),
  wideSubtext: "Monochrome Geometric Pattern",
};

const ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeatureSection =
  (
    props: Omit<
      ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeatureProps,
      "theme"
    >
  ) => {
    const resolved = { ...ThreeColumnMasonryFeature_defaults, ...props };
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

const ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeature =
  ({
    pageBackgroundColor = "#f1f5f9",
    theme = defaultTheme,
    ...props
  }: ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeatureProps) => (
    <ImageGridEmailShell
      backgroundColor={pageBackgroundColor}
      preview="Three columns masonry image grid with full width feature"
      theme={theme}
    >
      <ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeatureSection
        {...props}
      />
    </ImageGridEmailShell>
  );

ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeature.PreviewProps =
  {
    theme: defaultTheme,
    variant: "stacked-left",
  } satisfies ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeatureProps;

const __ThreeColumnMasonryFeature =
  ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeature;

export interface GalleryImage {
  src: string;
  alt?: string;
  href?: string;
  heading?: string;
  subtext?: string;
}

export interface MasonryImageGridProps {
  theme?: Parameters<typeof __TwoColumnMasonryThree>[0]["theme"];
  images?: GalleryImage[];
  feature?: GalleryImage;
  columns?: 2 | 3;
  stackPosition?: "left" | "right";
  reverse?: boolean;
  overlay?: boolean;
}

const masonryImageGridItem = (image: GalleryImage | undefined) => ({
  alt: image?.alt,
  heading: image?.heading,
  href: image?.href,
  src: image?.src,
  subtext: image?.subtext,
});

export const MasonryImageGrid = ({
  theme,
  images,
  feature,
  columns = 2,
  stackPosition = "left",
  reverse = false,
  overlay = false,
}: MasonryImageGridProps) => {
  const suffix = `${overlay ? "-overlay" : ""}${reverse ? "-reverse" : ""}`;
  const variant = `stacked-${stackPosition}${suffix}`;
  const [first, second, third] = images ?? [];
  const image1 = masonryImageGridItem(first);
  const image2 = masonryImageGridItem(second);
  const image3 = masonryImageGridItem(third);
  if (feature && columns === 3) {
    return (
      <__ThreeColumnMasonryFeature
        featureHeading={feature.heading}
        featureImageAlt={feature.alt}
        featureImageHref={feature.href}
        featureImageSrc={feature.src}
        featureSubtext={feature.subtext}
        stackHeading1={image1.heading}
        stackHeading2={image2.heading}
        stackImageAlt1={image1.alt}
        stackImageAlt2={image2.alt}
        stackImageHref1={image1.href}
        stackImageHref2={image2.href}
        stackImageSrc1={image1.src}
        stackImageSrc2={image2.src}
        stackSubtext1={image1.subtext}
        stackSubtext2={image2.subtext}
        theme={theme}
        variant={
          variant as Parameters<
            typeof __ThreeColumnMasonryFeature
          >[0]["variant"]
        }
        wideHeading={image3.heading}
        wideImageAlt={image3.alt}
        wideImageHref={image3.href}
        wideImageSrc={image3.src}
        wideSubtext={image3.subtext}
      />
    );
  }
  if (feature) {
    return (
      <__TwoColumnMasonryFour
        featureHeading={feature.heading}
        featureImageAlt={feature.alt}
        featureImageHref={feature.href}
        featureImageSrc={feature.src}
        featureSubtext={feature.subtext}
        landscapeHeading1={image1.heading}
        landscapeHeading2={image2.heading}
        landscapeImageAlt1={image1.alt}
        landscapeImageAlt2={image2.alt}
        landscapeImageHref1={image1.href}
        landscapeImageHref2={image2.href}
        landscapeImageSrc1={image1.src}
        landscapeImageSrc2={image2.src}
        landscapeSubtext1={image1.subtext}
        landscapeSubtext2={image2.subtext}
        portraitHeading={image3.heading}
        portraitImageAlt={image3.alt}
        portraitImageHref={image3.href}
        portraitImageSrc={image3.src}
        portraitSubtext={image3.subtext}
        theme={theme}
        variant={
          variant as Parameters<typeof __TwoColumnMasonryFour>[0]["variant"]
        }
      />
    );
  }
  if (columns === 3) {
    return (
      <__ThreeColumnMasonry
        stackHeading1={image1.heading}
        stackHeading2={image2.heading}
        stackImageAlt1={image1.alt}
        stackImageAlt2={image2.alt}
        stackImageHref1={image1.href}
        stackImageHref2={image2.href}
        stackImageSrc1={image1.src}
        stackImageSrc2={image2.src}
        stackSubtext1={image1.subtext}
        stackSubtext2={image2.subtext}
        theme={theme}
        variant={
          variant.replace("-reverse", "") as Parameters<
            typeof __ThreeColumnMasonry
          >[0]["variant"]
        }
        wideHeading={image3.heading}
        wideImageAlt={image3.alt}
        wideImageHref={image3.href}
        wideImageSrc={image3.src}
        wideSubtext={image3.subtext}
      />
    );
  }
  return (
    <__TwoColumnMasonryThree
      imageAlt1={image1.alt}
      imageHref1={image1.href}
      imageSrc1={image1.src}
      heading1={image1.heading}
      subtext1={image1.subtext}
      imageAlt2={image2.alt}
      imageHref2={image2.href}
      imageSrc2={image2.src}
      heading2={image2.heading}
      subtext2={image2.subtext}
      imageAlt3={image3.alt}
      imageHref3={image3.href}
      imageSrc3={image3.src}
      heading3={image3.heading}
      subtext3={image3.subtext}
      theme={theme}
      variant={
        variant.replace("-reverse", "") as Parameters<
          typeof __TwoColumnMasonryThree
        >[0]["variant"]
      }
    />
  );
};

MasonryImageGrid.PreviewProps = {
  columns: 2,
  overlay: false,
  reverse: false,
  stackPosition: "left",
} satisfies MasonryImageGridProps;
