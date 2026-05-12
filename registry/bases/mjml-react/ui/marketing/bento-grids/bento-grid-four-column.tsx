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

export type BentoGridFourColumnVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface BentoGridFourColumnProps {
  theme?: EmailThemeTokens;
  heading?: string;
  images?: { src: string; alt: string; caption: string }[];
  variant?: BentoGridFourColumnVariant;
}
const BentoGridFourColumnSection = ({
  heading,
  images,
  theme,
  variant,
}: {
  heading: string;
  images: BentoGridFourColumnProps["images"];
  theme: EmailThemeTokens;
  variant: BentoGridFourColumnVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {heading ? (
      <MjmlColumn>
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeHeading}
          fontWeight={theme.fontWeightBold}
          paddingBottom={theme.spacingXl ?? "48px"}
        >
          {heading}
        </MjmlText>
      </MjmlColumn>
    ) : null}
    {(images ?? []).slice(0, 4).map((img, i) => (
      <MjmlColumn
        key={img.alt + i}
        width="25%"
        padding="8px"
        verticalAlign="top"
      >
        <MjmlImage
          alt={img.alt}
          borderRadius={theme.borderRadius}
          src={img.src}
          width={135}
          paddingBottom={theme.spacingBase ?? "8px"}
        />
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm}
          fontWeight={theme.fontWeightMedium}
        >
          {img.caption}
        </MjmlText>
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const BentoGridFourColumn = ({
  theme = defaultTheme,
  heading = "Gallery",
  images = [
    {
      alt: "Item 1",
      caption: "Item 1",
      src: "https://placehold.co/300x200?text=1",
    },
    {
      alt: "Item 2",
      caption: "Item 2",
      src: "https://placehold.co/300x200?text=2",
    },
    {
      alt: "Item 3",
      caption: "Item 3",
      src: "https://placehold.co/300x200?text=3",
    },
    {
      alt: "Item 4",
      caption: "Item 4",
      src: "https://placehold.co/300x200?text=4",
    },
  ],
  variant = "default",
}: BentoGridFourColumnProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>bento 4-col</MjmlPreview>
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
        <BentoGridFourColumnSection
          heading={heading}
          images={images}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
BentoGridFourColumn.PreviewProps = {
  heading: "Gallery",
  images: [
    {
      alt: "Photo 1",
      caption: "Sunset",
      src: "https://placehold.co/300x200?text=Sunset",
    },
    {
      alt: "Photo 2",
      caption: "Mountains",
      src: "https://placehold.co/300x200?text=Mountains",
    },
    {
      alt: "Photo 3",
      caption: "Ocean",
      src: "https://placehold.co/300x200?text=Ocean",
    },
    {
      alt: "Photo 4",
      caption: "Forest",
      src: "https://placehold.co/300x200?text=Forest",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridFourColumnProps;
