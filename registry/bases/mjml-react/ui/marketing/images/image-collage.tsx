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

export type ImageCollageVariant = "default" | "slanted-left" | "slanted-right";

export interface ImageCollageProps {
  theme?: EmailThemeTokens;
  largeSrc?: string;
  largeAlt?: string;
  smallSrc1?: string;
  smallAlt1?: string;
  smallSrc2?: string;
  smallAlt2?: string;
  variant?: ImageCollageVariant;
}

const ImageCollageSection = ({
  largeAlt,
  largeSrc,
  smallAlt1,
  smallAlt2,
  smallSrc1,
  smallSrc2,
  theme,
  variant,
}: {
  largeAlt: string;
  largeSrc: string;
  smallAlt1: string;
  smallAlt2: string;
  smallSrc1: string;
  smallSrc2: string;
  theme: EmailThemeTokens;
  variant: ImageCollageVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn width="50%" padding="8px" verticalAlign="middle">
      <MjmlImage
        alt={largeAlt}
        borderRadius={theme.borderRadius}
        src={largeSrc}
        width={280}
      />
    </MjmlColumn>
    <MjmlColumn width="50%" padding="0" verticalAlign="middle">
      <MjmlImage
        alt={smallAlt1}
        borderRadius={theme.borderRadius}
        src={smallSrc1}
        width={280}
        padding="4px"
      />
      <MjmlImage
        alt={smallAlt2}
        borderRadius={theme.borderRadius}
        src={smallSrc2}
        width={280}
        padding="4px"
      />
    </MjmlColumn>
  </MjmlSection>
);

export const ImageCollage = ({
  theme = defaultTheme,
  largeSrc = "https://placehold.co/400x500?text=Large",
  largeAlt = "large",
  smallSrc1 = "https://placehold.co/400x240?text=Small+1",
  smallAlt1 = "small 1",
  smallSrc2 = "https://placehold.co/400x240?text=Small+2",
  smallAlt2 = "small 2",
  variant = "default",
}: ImageCollageProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>image collage</MjmlPreview>
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
        <ImageCollageSection
          largeAlt={largeAlt}
          largeSrc={largeSrc}
          smallAlt1={smallAlt1}
          smallAlt2={smallAlt2}
          smallSrc1={smallSrc1}
          smallSrc2={smallSrc2}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ImageCollage.PreviewProps = {
  largeAlt: "featured",
  largeSrc: "https://placehold.co/400x500?text=Featured",
  smallAlt1: "detail 1",
  smallAlt2: "detail 2",
  smallSrc1: "https://placehold.co/400x240?text=Detail+1",
  smallSrc2: "https://placehold.co/400x240?text=Detail+2",
  theme: defaultTheme,
  variant: "default",
} satisfies ImageCollageProps;
