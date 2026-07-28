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

const NativeImageRow = ({
  backgroundColor,
  cards,
  headingColor,
  overlay,
  padding = "0 24px 24px",
  textColor,
  widths,
}: {
  backgroundColor: string;
  cards: readonly NativeImageCardData[];
  headingColor: string;
  overlay: boolean;
  padding?: string;
  textColor: string;
  widths: readonly number[];
}) => {
  const getPadding = (index: number) => {
    if (index === 0) {
      return "0 8px 0 0";
    }
    return index === cards.length - 1 ? "0 0 0 8px" : "0 8px";
  };
  return (
    <MjmlSection backgroundColor={backgroundColor} padding={padding}>
      {cards.map((card, index) => (
        <MjmlColumn
          key={`${card.src}-${index}`}
          padding={getPadding(index)}
          verticalAlign="top"
          width={`${(widths[index] / widths.reduce((sum, width) => sum + width, 0)) * 100}%`}
        >
          <NativeImageCard
            data={card}
            headingColor={headingColor}
            overlay={overlay}
            textColor={textColor}
            width={widths[index]}
          />
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

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

type TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeatureVariant =
  | "full-width-top"
  | "full-width-bottom"
  | "full-width-top-overlay"
  | "full-width-bottom-overlay";

interface TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeatureProps {
  theme?: EmailTheme;
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
  variant?: TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeatureVariant;
}

const TwoColumnFeatureGrid_defaults = {
  backgroundColor: "#fffffe",
  featureHeading: "Arlo Bar Chair",
  featureImageAlt: "",
  featureImageHref: "https://example.com",
  featureImageSrc: emailAsset("image-grids/full-width-4.jpg"),
  featureSubtext: "Wood / Upholstered Seat",
  headingColor: "#fffffe",
  imageAlt1: "",
  imageAlt2: "",
  imageHeading1: "Milo Lounge Pair",
  imageHeading2: "Nova Dining Chair",
  imageHref1: "https://example.com",
  imageHref2: "https://example.com",
  imageSrc1: emailAsset("image-grids/2-col-landscape-3.jpg"),
  imageSrc2: emailAsset("image-grids/2-col-landscape-4.jpg"),
  imageSubtext1: "Velvet / Solid Wood Frame",
  imageSubtext2: "Curved Wood / Fabric Seat",
  textColor: "#fffffe",
};

const TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeatureSection = (
  props: Omit<
    TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeatureProps,
    "theme"
  >
) => {
  const resolved = { ...TwoColumnFeatureGrid_defaults, ...props };
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

const TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeature = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeatureProps) => (
  <ImageGridEmailShell
    backgroundColor={pageBackgroundColor}
    preview="Two columns image grid with full width feature"
    theme={theme}
  >
    <TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeatureSection
      {...props}
    />
  </ImageGridEmailShell>
);

TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeature.PreviewProps = {
  theme: defaultTheme,
  variant: "full-width-top",
} satisfies TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeatureProps;

const __TwoColumnFeatureGrid =
  TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeature;

type ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeatureVariant =
  | "full-width-top"
  | "full-width-bottom"
  | "full-width-top-overlay"
  | "full-width-bottom-overlay";

interface ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeatureProps {
  theme?: EmailTheme;
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
  variant?: ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeatureVariant;
}

const ThreeColumnFeatureGrid_defaults = {
  backgroundColor: "#fffffe",
  featureHeading: "Island Escape",
  featureImageAlt: "",
  featureImageHref: "https://example.com",
  featureImageSrc: emailAsset("image-grids/full-width-6.jpg"),
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
  imageSrc1: emailAsset("image-grids/3-col-square-4.jpg"),
  imageSrc2: emailAsset("image-grids/3-col-square-5.jpg"),
  imageSrc3: emailAsset("image-grids/3-col-square-6.jpg"),
  subtext1: "Private pools",
  subtext2: "Relax & restore",
  subtext3: "Beach freedom",
  textColor: "#fffffe",
};

const ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeatureSection =
  (
    props: Omit<
      ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeatureProps,
      "theme"
    >
  ) => {
    const resolved = { ...ThreeColumnFeatureGrid_defaults, ...props };
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

const ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeature = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeatureProps) => (
  <ImageGridEmailShell
    backgroundColor={pageBackgroundColor}
    preview="Three columns image grid with full width feature"
    theme={theme}
  >
    <ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeatureSection
      {...props}
    />
  </ImageGridEmailShell>
);

ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeature.PreviewProps =
  {
    theme: defaultTheme,
    variant: "full-width-top",
  } satisfies ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeatureProps;

const __ThreeColumnFeatureGrid =
  ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeature;

export interface GalleryImage {
  src: string;
  alt?: string;
  href?: string;
  heading?: string;
  subtext?: string;
}

export interface FeaturedImageGridProps {
  theme?: Parameters<typeof __TwoColumnFeatureGrid>[0]["theme"];
  images?: GalleryImage[];
  feature?: GalleryImage;
  columns?: 2 | 3;
  featurePosition?: "top" | "bottom";
  overlay?: boolean;
}

const featuredImageGridItem = (image: GalleryImage | undefined) => ({
  alt: image?.alt,
  heading: image?.heading,
  href: image?.href,
  src: image?.src,
  subtext: image?.subtext,
});

export const FeaturedImageGrid = ({
  theme,
  images,
  feature,
  columns = 2,
  featurePosition = "top",
  overlay = false,
}: FeaturedImageGridProps) => {
  const Component =
    columns === 3 ? __ThreeColumnFeatureGrid : __TwoColumnFeatureGrid;
  const [first, second, third] = images ?? [];
  const featureItem = featuredImageGridItem(feature);
  const image1 = featuredImageGridItem(first);
  const image2 = featuredImageGridItem(second);
  const image3 = featuredImageGridItem(third);
  return (
    <Component
      featureHeading={featureItem.heading}
      featureImageAlt={featureItem.alt}
      featureImageHref={featureItem.href}
      featureImageSrc={featureItem.src}
      featureSubtext={featureItem.subtext}
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
      variant={`full-width-${featurePosition}${overlay ? "-overlay" : ""}`}
    />
  );
};

FeaturedImageGrid.PreviewProps = {
  columns: 2,
  featurePosition: "top",
  overlay: false,
} satisfies FeaturedImageGridProps;
