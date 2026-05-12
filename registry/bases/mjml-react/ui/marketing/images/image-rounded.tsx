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

export type ImageRoundedVariant = "default" | "slanted-left" | "slanted-right";

export interface ImageRoundedProps {
  theme?: EmailThemeTokens;
  src?: string;
  alt?: string;
  size?: number;
  variant?: ImageRoundedVariant;
}

const ImageRoundedSection = ({
  alt,
  size,
  src,
  theme,
  variant,
}: {
  alt: string;
  size: number;
  src: string;
  theme: EmailThemeTokens;
  variant: ImageRoundedVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      <MjmlImage
        align="center"
        alt={alt}
        borderRadius="50%"
        src={src}
        width={size}
        height={size}
      />
    </MjmlColumn>
  </MjmlSection>
);

export const ImageRounded = ({
  theme = defaultTheme,
  src = "https://placehold.co/200x200?text=Avatar",
  alt = "avatar",
  size = 200,
  variant = "default",
}: ImageRoundedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>rounded image</MjmlPreview>
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
        <ImageRoundedSection
          alt={alt}
          size={size}
          src={src}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ImageRounded.PreviewProps = {
  alt: "profile photo",
  size: 200,
  src: "https://placehold.co/200x200?text=Profile",
  theme: defaultTheme,
  variant: "default",
} satisfies ImageRoundedProps;
