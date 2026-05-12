/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type ImageGalleryVariant = "default" | "slanted-left" | "slanted-right";

export interface ImageGalleryProps {
  theme?: EmailThemeTokens;
  images?: { src: string; alt: string }[];
  variant?: ImageGalleryVariant;
}

const ImageGallerySection = ({
  images,
  theme,
  variant,
}: {
  images: ImageGalleryProps["images"];
  theme: EmailThemeTokens;
  variant: ImageGalleryVariant;
}) => {
  const rows: { src: string; alt: string }[][] = [];
  const imgs = images ?? [];
  for (let i = 0; i < imgs.length; i += 2) {
    rows.push(imgs.slice(i, i + 2));
  }

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {rows.map((row, rowIndex) =>
        row.map((img) => (
          <MjmlColumn key={`${img.src}-${rowIndex}`} width="50%" padding="8px">
            <MjmlImage
              alt={img.alt}
              borderRadius={theme.borderRadius}
              src={img.src}
              width={280}
            />
          </MjmlColumn>
        ))
      )}
    </MjmlSection>
  );
};

export const ImageGallery = ({
  theme = defaultTheme,
  images = [
    { alt: "Gallery 1", src: "https://placehold.co/400x300?text=Gallery+1" },
    { alt: "Gallery 2", src: "https://placehold.co/400x300?text=Gallery+2" },
    { alt: "Gallery 3", src: "https://placehold.co/400x300?text=Gallery+3" },
    { alt: "Gallery 4", src: "https://placehold.co/400x300?text=Gallery+4" },
  ],
  variant = "default",
}: ImageGalleryProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>image gallery</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <ImageGallerySection images={images} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ImageGallery.PreviewProps = {
  images: [
    {
      alt: "Product Shot 1",
      src: "https://placehold.co/400x300?text=Product+1",
    },
    {
      alt: "Product Shot 2",
      src: "https://placehold.co/400x300?text=Product+2",
    },
    {
      alt: "Product Shot 3",
      src: "https://placehold.co/400x300?text=Product+3",
    },
    {
      alt: "Product Shot 4",
      src: "https://placehold.co/400x300?text=Product+4",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies ImageGalleryProps;
