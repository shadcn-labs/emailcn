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

export type BentoGridMasonryVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface BentoGridMasonryProps {
  theme?: EmailThemeTokens;
  images?: { src: string; alt: string; wide?: boolean }[];
  variant?: BentoGridMasonryVariant;
}
const BentoGridMasonrySection = ({
  images,
  theme,
  variant,
}: {
  images: BentoGridMasonryProps["images"];
  theme: EmailThemeTokens;
  variant: BentoGridMasonryVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      {(images ?? []).slice(0, 3).map((img, i) => (
        <Column
          key={img.alt + i}
          style={{
            padding: "4px",
            verticalAlign: "top",
            width: img.wide ? "50%" : "25%",
          }}
        >
          <Img
            alt={img.alt}
            src={img.src}
            width={img.wide ? 290 : 140}
            style={{
              borderRadius: theme.borderRadius,
              display: "block",
              margin: "0 auto",
              maxWidth: "100%",
            }}
          />
        </Column>
      ))}
    </Row>
  </Section>
);
export const BentoGridWithTwoRowsAnd3ColumnSecondRow = ({
  theme = defaultTheme,
  images = [
    {
      alt: "Wide",
      src: "https://static.photos/business/600x300/2",
      wide: true,
    },
    { alt: "Small 1", src: "https://static.photos/technology/300x300/3" },
    { alt: "Small 2", src: "https://static.photos/technology/300x300/4" },
  ],
  variant = "default",
}: BentoGridMasonryProps) => (
  <Html>
    <Head />
    <Preview>bento masonry</Preview>
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
          <BentoGridMasonrySection
            images={images}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
BentoGridWithTwoRowsAnd3ColumnSecondRow.PreviewProps = {
  images: [
    {
      alt: "featured",
      src: "https://static.photos/business/600x300/5",
      wide: true,
    },
    { alt: "item 1", src: "https://static.photos/technology/300x300/6" },
    { alt: "item 2", src: "https://static.photos/technology/300x300/7" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridMasonryProps;
