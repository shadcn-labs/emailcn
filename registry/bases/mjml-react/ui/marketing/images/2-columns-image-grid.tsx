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

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type TwoColumnsImageGridVariant =
  | "square-images"
  | "portrait-images"
  | "square-overlay"
  | "portrait-overlay";

export interface TwoColumnsImageGridProps {
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
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  variant?: TwoColumnsImageGridVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const variantContent = {
  "portrait-images": {
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-portrait.jpg",
    imageSrc2:
      "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-portrait-2.jpg",
    overlay: false,
  },
  "portrait-overlay": {
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-portrait.jpg",
    imageSrc2:
      "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-portrait-2.jpg",
    overlay: true,
  },
  "square-images": {
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-square.jpg",
    imageSrc2:
      "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-square-2.jpg",
    overlay: false,
  },
  "square-overlay": {
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-square.jpg",
    imageSrc2:
      "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-square-2.jpg",
    overlay: true,
  },
} satisfies Record<
  TwoColumnsImageGridVariant,
  { imageSrc1: string; imageSrc2: string; overlay: boolean }
>;

const ImageCard = ({
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
          fontFamily={fontFamily}
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
          fontFamily={fontFamily}
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

export const TwoColumnsImageGridSection = ({
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
}: Omit<TwoColumnsImageGridProps, "theme">) => {
  const content = variantContent[variant];

  return (
    <MjmlSection backgroundColor={backgroundColor} padding="24px">
      <MjmlColumn padding="0 12px 0 0" verticalAlign="top" width="50%">
        <ImageCard
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
        <ImageCard
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

export const TwoColumnsImageGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "square-images",
  ...props
}: TwoColumnsImageGridProps) => (
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
        <TwoColumnsImageGridSection {...props} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TwoColumnsImageGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "square-images",
} satisfies TwoColumnsImageGridProps;
