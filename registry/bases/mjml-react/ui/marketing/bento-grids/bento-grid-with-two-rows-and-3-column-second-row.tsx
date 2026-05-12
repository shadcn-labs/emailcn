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
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {(images ?? []).slice(0, 3).map((img, i) => (
      <MjmlColumn
        key={img.alt + i}
        width={img.wide ? "50%" : "25%"}
        padding="Fourpx"
        verticalAlign="top"
      >
        <MjmlImage
          alt={img.alt}
          borderRadius={theme.borderRadius}
          src={img.src}
          width={img.wide ? 290 : 140}
        />
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const BentoGridWithTwoRowsAnd3ColumnSecondRow = ({
  theme = defaultTheme,
  images = [
    { alt: "Wide", src: "https://placehold.co/600x300?text=Wide", wide: true },
    { alt: "Small 1", src: "https://placehold.co/300x300?text=1" },
    { alt: "Small 2", src: "https://placehold.co/300x300?text=2" },
  ],
  variant = "default",
}: BentoGridMasonryProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>bento masonry</MjmlPreview>
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
        <BentoGridMasonrySection
          images={images}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
BentoGridWithTwoRowsAnd3ColumnSecondRow.PreviewProps = {
  images: [
    {
      alt: "featured",
      src: "https://placehold.co/600x300?text=Featured",
      wide: true,
    },
    { alt: "item 1", src: "https://placehold.co/300x300?text=Item+1" },
    { alt: "item 2", src: "https://placehold.co/300x300?text=Item+2" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridMasonryProps;
