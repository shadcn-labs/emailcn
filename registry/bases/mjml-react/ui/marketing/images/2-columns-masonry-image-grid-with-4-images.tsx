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

export type ImageCardVariant = "default" | "slanted-left" | "slanted-right";

export interface ImageCardProps {
  theme?: EmailThemeTokens;
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  variant?: ImageCardVariant;
}

const ImageCardSection = ({
  alt,
  description,
  src,
  theme,
  title,
  variant,
}: {
  alt: string;
  description: string;
  src: string;
  theme: EmailThemeTokens;
  title: string;
  variant: ImageCardVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackgroundMuted}
    borderRadius={theme.borderRadius}
    padding="0"
  >
    <MjmlColumn padding="0">
      <MjmlImage align="center" alt={alt} src={src} width={600} padding="0" />
    </MjmlColumn>
    <MjmlColumn padding={`${theme.spacingBase ?? "24px"}`}>
      <MjmlText
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg ?? "16px"}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {title}
      </MjmlText>
      <MjmlText
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase ?? "14px"}
        lineHeight={theme.lineHeightBase}
      >
        {description}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const TwoColumnsMasonryImageGridWith4Images = ({
  theme = defaultTheme,
  src = "https://static.photos/business/600x300/2",
  alt = "card image",
  title = "Image Card Title",
  description = "A description that accompanies the image card.",
  variant = "default",
}: ImageCardProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>image card</MjmlPreview>
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
        <ImageCardSection
          alt={alt}
          description={description}
          src={src}
          theme={theme}
          title={title}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TwoColumnsMasonryImageGridWith4Images.PreviewProps = {
  alt: "card image",
  description:
    "This card layout pairs an image with descriptive text below it.",
  src: "https://static.photos/business/600x300/3",
  theme: defaultTheme,
  title: "Image Card",
  variant: "default",
} satisfies ImageCardProps;
