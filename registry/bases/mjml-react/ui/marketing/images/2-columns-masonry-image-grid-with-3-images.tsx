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

export type ImageBannerVariant = "default" | "slanted-left" | "slanted-right";

export interface ImageBannerProps {
  theme?: EmailThemeTokens;
  src?: string;
  alt?: string;
  overlayText?: string;
  variant?: ImageBannerVariant;
}

const ImageBannerSection = ({
  alt,
  overlayText,
  src,
  theme,
  variant,
}: {
  alt: string;
  overlayText: string;
  src: string;
  theme: EmailThemeTokens;
  variant: ImageBannerVariant;
}) => (
  <MjmlSection backgroundColor={theme.colorBackgroundMuted} padding="0">
    <MjmlColumn padding="0">
      <MjmlImage align="center" alt={alt} src={src} width={600} padding="0" />
    </MjmlColumn>
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeXl ?? "20px"}
        fontWeight={theme.fontWeightBold}
        padding={`${theme.spacingBase ?? "24px"} ${theme.spacingBase ?? "24px"}`}
      >
        {overlayText}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const TwoColumnsMasonryImageGridWith3Images = ({
  theme = defaultTheme,
  src = "https://static.photos/business/600x200/2",
  alt = "banner",
  overlayText = "Banner Text",
  variant = "default",
}: ImageBannerProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>image banner</MjmlPreview>
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
        <ImageBannerSection
          alt={alt}
          overlayText={overlayText}
          src={src}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TwoColumnsMasonryImageGridWith3Images.PreviewProps = {
  alt: "promotional banner",
  overlayText: "Seasonal Sale — Up to 50% Off",
  src: "https://static.photos/business/600x200/3",
  theme: defaultTheme,
  variant: "default",
} satisfies ImageBannerProps;
