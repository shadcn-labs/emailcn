/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: `${theme.spacingXl ?? "48px"} 0`,
      }}
    >
      <Row>
        {rows.map((row, rowIndex) =>
          row.map((img) => (
            <Column
              key={`${img.src}-${rowIndex}`}
              style={{ padding: "8px", width: "50%" }}
            >
              <Img
                alt={img.alt}
                src={img.src}
                width={280}
                style={{
                  borderRadius: theme.borderRadius,
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "100%",
                }}
              />
            </Column>
          ))
        )}
      </Row>
    </Section>
  );
};

export const ThreeColumnsImageGrid = ({
  theme = defaultTheme,
  images = [
    { alt: "Gallery 1", src: "https://static.photos/technology/400x300/2" },
    { alt: "Gallery 2", src: "https://static.photos/technology/400x300/3" },
    { alt: "Gallery 3", src: "https://static.photos/technology/400x300/4" },
    { alt: "Gallery 4", src: "https://static.photos/technology/400x300/5" },
  ],
  variant = "default",
}: ImageGalleryProps) => (
  <Html>
    <Head />
    <Preview>image gallery</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <ImageGallerySection
            images={images}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

ThreeColumnsImageGrid.PreviewProps = {
  images: [
    {
      alt: "Product Shot 1",
      src: "https://static.photos/technology/400x300/6",
    },
    {
      alt: "Product Shot 2",
      src: "https://static.photos/technology/400x300/7",
    },
    {
      alt: "Product Shot 3",
      src: "https://static.photos/technology/400x300/8",
    },
    {
      alt: "Product Shot 4",
      src: "https://static.photos/technology/400x300/9",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies ImageGalleryProps;
