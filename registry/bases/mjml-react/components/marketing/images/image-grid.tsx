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

type TwoColumnGrid_TwoColumnsImageGridVariant =
  | "square-images"
  | "portrait-images"
  | "square-overlay"
  | "portrait-overlay";

interface TwoColumnGrid_TwoColumnsImageGridProps {
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
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  variant?: TwoColumnGrid_TwoColumnsImageGridVariant;
}

const TwoColumnGrid_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TwoColumnGrid_variantContent = {
  "portrait-images": {
    imageSrc1: emailAsset("image-grids/2-col-portrait.jpg"),
    imageSrc2: emailAsset("image-grids/2-col-portrait-2.jpg"),
    overlay: false,
  },
  "portrait-overlay": {
    imageSrc1: emailAsset("image-grids/2-col-portrait.jpg"),
    imageSrc2: emailAsset("image-grids/2-col-portrait-2.jpg"),
    overlay: true,
  },
  "square-images": {
    imageSrc1: emailAsset("image-grids/2-col-square.jpg"),
    imageSrc2: emailAsset("image-grids/2-col-square-2.jpg"),
    overlay: false,
  },
  "square-overlay": {
    imageSrc1: emailAsset("image-grids/2-col-square.jpg"),
    imageSrc2: emailAsset("image-grids/2-col-square-2.jpg"),
    overlay: true,
  },
} satisfies Record<
  TwoColumnGrid_TwoColumnsImageGridVariant,
  {
    imageSrc1: string;
    imageSrc2: string;
    overlay: boolean;
  }
>;

const TwoColumnGrid_ImageCard = ({
  alt,
  heading,
  headingColor,
  href,
  overlay,
  src,
  subtext,
  textColor,
}: {
  alt: string;
  heading: string;
  headingColor: string;
  href: string;
  overlay: boolean;
  src: string;
  subtext: string;
  textColor: string;
}) => (
  <>
    <MjmlImage
      alt={alt}
      borderRadius={overlay ? "4px 4px 0 0" : "4px"}
      href={href}
      padding="0"
      src={src}
      width="264px"
    />
    {overlay ? (
      <>
        <MjmlText
          backgroundColor="#000001"
          color={headingColor}
          fontFamily={TwoColumnGrid_fontFamily}
          fontSize="24px"
          fontWeight="700"
          lineHeight="32px"
          padding="16px 16px 0"
        >
          {heading}
        </MjmlText>
        <MjmlText
          backgroundColor="#000001"
          color={textColor}
          fontFamily={TwoColumnGrid_fontFamily}
          fontSize="20px"
          lineHeight="28px"
          padding="0 16px 16px"
        >
          {subtext}
        </MjmlText>
      </>
    ) : null}
  </>
);

const TwoColumnGrid_TwoColumnsImageGridSection = ({
  backgroundColor = "#fffffe",
  heading1 = "The Ordinary.",
  heading2 = "Fleurs.7",
  headingColor = "#fffffe",
  imageAlt1 = "",
  imageAlt2 = "",
  imageHref1 = "https://example.com",
  imageHref2 = "https://example.com",
  imageSrc1,
  imageSrc2,
  subtext1 = "Salicylic Serum",
  subtext2 = "Moisturizing Mist",
  textColor = "#fffffe",
  variant = "square-images",
}: Omit<TwoColumnGrid_TwoColumnsImageGridProps, "theme">) => {
  const content = TwoColumnGrid_variantContent[variant];
  return (
    <MjmlSection backgroundColor={backgroundColor} padding="24px">
      <MjmlColumn padding="0 12px 0 0" verticalAlign="top" width="50%">
        <TwoColumnGrid_ImageCard
          alt={imageAlt1}
          heading={heading1}
          headingColor={headingColor}
          href={imageHref1}
          overlay={content.overlay}
          src={imageSrc1 ?? content.imageSrc1}
          subtext={subtext1}
          textColor={textColor}
        />
      </MjmlColumn>
      <MjmlColumn padding="0 0 0 12px" verticalAlign="top" width="50%">
        <TwoColumnGrid_ImageCard
          alt={imageAlt2}
          heading={heading2}
          headingColor={headingColor}
          href={imageHref2}
          overlay={content.overlay}
          src={imageSrc2 ?? content.imageSrc2}
          subtext={subtext2}
          textColor={textColor}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};

const TwoColumnGrid_TwoColumnsImageGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "square-images",
  ...props
}: TwoColumnGrid_TwoColumnsImageGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Two columns image grid</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <TwoColumnGrid_TwoColumnsImageGridSection
          {...props}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TwoColumnGrid_TwoColumnsImageGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "square-images",
} satisfies TwoColumnGrid_TwoColumnsImageGridProps;

const __TwoColumnGrid = TwoColumnGrid_TwoColumnsImageGrid;

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

type ThreeColumnGrid_ThreeColumnsImageGridVariant =
  | "square-images"
  | "portrait-images"
  | "square-overlay"
  | "portrait-overlay";

interface ThreeColumnGrid_ThreeColumnsImageGridProps {
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
  variant?: ThreeColumnGrid_ThreeColumnsImageGridVariant;
}

const ThreeColumnGrid_squareImages = [
  emailAsset("image-grids/3-col-square.jpg"),
  emailAsset("image-grids/3-col-square-2.jpg"),
  emailAsset("image-grids/3-col-square-3.jpg"),
] as const;

const ThreeColumnGrid_portraitImages = [
  emailAsset("image-grids/3-col-portrait.jpg"),
  emailAsset("image-grids/3-col-portrait-2.jpg"),
  emailAsset("image-grids/3-col-portrait-3.jpg"),
] as const;

const ThreeColumnGrid_variantContent = {
  "portrait-images": {
    headings: ["Boarding Pass", "L’Atelier", "Cultivate"],
    imageSources: ThreeColumnGrid_portraitImages,
    overlay: false,
    subtexts: ["Smooth & Balanced", "Rich & Nutty", "Light & Bright"],
  },
  "portrait-overlay": {
    headings: ["Boarding Pass", "Cultivate", "L’Atelier"],
    imageSources: [
      ThreeColumnGrid_portraitImages[0],
      ThreeColumnGrid_portraitImages[2],
      ThreeColumnGrid_portraitImages[1],
    ],
    overlay: true,
    subtexts: ["Smooth & Balanced", "Light & Bright", "Rich & Nutty"],
  },
  "square-images": {
    headings: ["Aqua Retreat", "Ocean Spa", "Sand Stroll"],
    imageSources: ThreeColumnGrid_squareImages,
    overlay: false,
    subtexts: ["Private pools", "Relax & restore", "Beach freedom"],
  },
  "square-overlay": {
    headings: ["Aqua Retreat", "Ocean Spa", "Sand Stroll"],
    imageSources: ThreeColumnGrid_squareImages,
    overlay: true,
    subtexts: ["Private pools", "Relax & restore", "Beach freedom"],
  },
} as const;

const ThreeColumnGrid_ThreeColumnsImageGridSection = ({
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
}: Omit<ThreeColumnGrid_ThreeColumnsImageGridProps, "theme">) => {
  const content = ThreeColumnGrid_variantContent[variant];
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

const ThreeColumnGrid_ThreeColumnsImageGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: ThreeColumnGrid_ThreeColumnsImageGridProps) => (
  <ImageGridEmailShell
    backgroundColor={pageBackgroundColor}
    preview="Three columns image grid"
    theme={theme}
  >
    <ThreeColumnGrid_ThreeColumnsImageGridSection {...props} />
  </ImageGridEmailShell>
);

ThreeColumnGrid_ThreeColumnsImageGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "square-images",
} satisfies ThreeColumnGrid_ThreeColumnsImageGridProps;

const __ThreeColumnGrid = ThreeColumnGrid_ThreeColumnsImageGrid;

export interface GalleryImage {
  src: string;
  alt?: string;
  href?: string;
  heading?: string;
  subtext?: string;
}

export interface ImageGridProps {
  theme?: Parameters<typeof __TwoColumnGrid>[0]["theme"];
  images?: GalleryImage[];
  columns?: 2 | 3;
  aspect?: "square" | "portrait";
  overlay?: boolean;
}

const imageGridItem = (image: GalleryImage | undefined) => ({
  alt: image?.alt,
  heading: image?.heading,
  href: image?.href,
  src: image?.src,
  subtext: image?.subtext,
});

export const ImageGrid = ({
  theme,
  images,
  columns = 2,
  aspect = "square",
  overlay = false,
}: ImageGridProps) => {
  const Component = columns === 3 ? __ThreeColumnGrid : __TwoColumnGrid;
  const [first, second, third] = images ?? [];
  const image1 = imageGridItem(first);
  const image2 = imageGridItem(second);
  const image3 = imageGridItem(third);
  return (
    <Component
      heading1={image1.heading}
      heading2={image2.heading}
      heading3={image3.heading}
      imageAlt1={image1.alt}
      imageAlt2={image2.alt}
      imageAlt3={image3.alt}
      imageHref1={image1.href}
      imageHref2={image2.href}
      imageHref3={image3.href}
      imageSrc1={image1.src}
      imageSrc2={image2.src}
      imageSrc3={image3.src}
      subtext1={image1.subtext}
      subtext2={image2.subtext}
      subtext3={image3.subtext}
      theme={theme}
      variant={`${aspect}-${overlay ? "overlay" : "images"}`}
    />
  );
};

ImageGrid.PreviewProps = {
  aspect: "square",
  columns: 2,
  overlay: false,
} satisfies ImageGridProps;
