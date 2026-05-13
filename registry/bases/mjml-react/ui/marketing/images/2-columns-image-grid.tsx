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

export type ImageGridVariant = "default" | "slanted-left" | "slanted-right";

export interface ImageGridProps {
  theme?: EmailThemeTokens;
  images?: { src: string; alt: string }[];
  columns?: 2 | 3;
  variant?: ImageGridVariant;
}

const ImageGridSection = ({
  columns,
  images,
  theme,
  variant,
}: {
  columns: 2 | 3;
  images: ImageGridProps["images"];
  theme: EmailThemeTokens;
  variant: ImageGridVariant;
}) => {
  const slice = (images ?? []).slice(0, columns);
  const widthPct = `${100 / columns}%`;

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {slice.length > 0 ? (
        slice.map((img) => (
          <MjmlColumn
            key={img.src}
            width={widthPct}
            padding={theme.spacingBase ?? "24px"}
          >
            <MjmlImage
              alt={img.alt}
              borderRadius={theme.borderRadius}
              src={img.src}
              width={260}
            />
          </MjmlColumn>
        ))
      ) : (
        <MjmlColumn>
          <MjmlText
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase}
          >
            No images to display.
          </MjmlText>
        </MjmlColumn>
      )}
    </MjmlSection>
  );
};

export const TwoColumnsImageGrid = ({
  theme = defaultTheme,
  images = [
    { alt: "Image 1", src: "https://static.photos/technology/400x300/2" },
    { alt: "Image 2", src: "https://static.photos/technology/400x300/3" },
  ],
  columns = 2,
  variant = "default",
}: ImageGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>image grid</MjmlPreview>
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
        <ImageGridSection
          columns={columns}
          images={images}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TwoColumnsImageGrid.PreviewProps = {
  columns: 2,
  images: [
    {
      alt: "Screenshot 1",
      src: "https://static.photos/technology/400x300/4",
    },
    {
      alt: "Screenshot 2",
      src: "https://static.photos/technology/400x300/5",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies ImageGridProps;
