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

export type ImageHeroVariant = "default" | "slanted-left" | "slanted-right";

export interface ImageHeroProps {
  theme?: EmailThemeTokens;
  src?: string;
  alt?: string;
  caption?: string;
  variant?: ImageHeroVariant;
}

const ImageHeroSection = ({
  alt,
  caption,
  src,
  theme,
  variant,
}: {
  alt: string;
  caption: string;
  src: string;
  theme: EmailThemeTokens;
  variant: ImageHeroVariant;
}) => (
  <MjmlSection backgroundColor={theme.colorBackground} padding="0">
    <MjmlColumn padding="0">
      <MjmlImage align="center" alt={alt} src={src} width={600} padding="0" />
    </MjmlColumn>
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
        paddingTop={theme.spacingBase ?? "24px"}
      >
        {caption}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const ThreeColumnsMasonryImageGridWithFullWidthFeature = ({
  theme = defaultTheme,
  src = "https://placehold.co/600x400?text=Hero+Image",
  alt = "hero image",
  caption = "Image caption goes here.",
  variant = "default",
}: ImageHeroProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>hero image</MjmlPreview>
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
        <ImageHeroSection
          alt={alt}
          caption={caption}
          src={src}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ThreeColumnsMasonryImageGridWithFullWidthFeature.PreviewProps = {
  alt: "hero image",
  caption: "A beautiful hero image showcasing the product.",
  src: "https://placehold.co/600x400?text=Hero+Image",
  theme: defaultTheme,
  variant: "default",
} satisfies ImageHeroProps;
