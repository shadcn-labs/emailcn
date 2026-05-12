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

export type ImageFullWidthVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface ImageFullWidthProps {
  theme?: EmailThemeTokens;
  src?: string;
  alt?: string;
  variant?: ImageFullWidthVariant;
}

const ImageFullWidthSection = ({
  alt,
  src,
  theme,
  variant,
}: {
  alt: string;
  src: string;
  theme: EmailThemeTokens;
  variant: ImageFullWidthVariant;
}) => (
  <MjmlSection backgroundColor={theme.colorBackground} padding="0">
    <MjmlColumn padding="0">
      <MjmlImage align="center" alt={alt} src={src} width={600} padding="0" />
    </MjmlColumn>
  </MjmlSection>
);

export const ImageFullWidth = ({
  theme = defaultTheme,
  src = "https://placehold.co/600x300?text=Full+Width",
  alt = "full width image",
  variant = "default",
}: ImageFullWidthProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>full width image</MjmlPreview>
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
        <ImageFullWidthSection
          alt={alt}
          src={src}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ImageFullWidth.PreviewProps = {
  alt: "full width banner",
  src: "https://placehold.co/600x300?text=Full+Width+Banner",
  theme: defaultTheme,
  variant: "default",
} satisfies ImageFullWidthProps;
