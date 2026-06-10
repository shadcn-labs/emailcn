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
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: `${theme.spacingXl ?? "48px"} 0`,
      }}
    >
      <Row>
        {slice.length > 0 ? (
          slice.map((img) => (
            <Column
              key={img.src}
              style={{ padding: theme.spacingBase ?? "24px", width: widthPct }}
            >
              <Img
                alt={img.alt}
                src={img.src}
                width={260}
                style={{
                  borderRadius: theme.borderRadius,
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "100%",
                }}
              />
            </Column>
          ))
        ) : (
          <Column>
            <Text
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeBase,
                margin: 0,
              }}
            >
              No images to display.
            </Text>
          </Column>
        )}
      </Row>
    </Section>
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
  <Html>
    <Head />
    <Preview>image grid</Preview>
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
          <ImageGridSection
            columns={columns}
            images={images}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
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
