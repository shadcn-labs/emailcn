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

export type ImageSplitVariant = "default" | "slanted-left" | "slanted-right";

export interface ImageSplitProps {
  theme?: EmailThemeTokens;
  leftSrc?: string;
  leftAlt?: string;
  rightSrc?: string;
  rightAlt?: string;
  variant?: ImageSplitVariant;
}

const ImageSplitSection = ({
  leftAlt,
  leftSrc,
  rightAlt,
  rightSrc,
  theme,
  variant,
}: {
  leftAlt: string;
  leftSrc: string;
  rightAlt: string;
  rightSrc: string;
  theme: EmailThemeTokens;
  variant: ImageSplitVariant;
}) => (
  <MjmlSection backgroundColor={theme.colorBackground} padding="0">
    <MjmlColumn width="50%" padding="4px">
      <MjmlImage
        alt={leftAlt}
        borderRadius={theme.borderRadius}
        src={leftSrc}
        width={290}
      />
    </MjmlColumn>
    <MjmlColumn width="50%" padding="4px">
      <MjmlImage
        alt={rightAlt}
        borderRadius={theme.borderRadius}
        src={rightSrc}
        width={290}
      />
    </MjmlColumn>
  </MjmlSection>
);

export const ImageSplit = ({
  theme = defaultTheme,
  leftSrc = "https://placehold.co/400x300?text=Left",
  leftAlt = "left",
  rightSrc = "https://placehold.co/400x300?text=Right",
  rightAlt = "right",
  variant = "default",
}: ImageSplitProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>split image</MjmlPreview>
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
        <ImageSplitSection
          leftAlt={leftAlt}
          leftSrc={leftSrc}
          rightAlt={rightAlt}
          rightSrc={rightSrc}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ImageSplit.PreviewProps = {
  leftAlt: "before",
  leftSrc: "https://placehold.co/400x300?text=Before",
  rightAlt: "after",
  rightSrc: "https://placehold.co/400x300?text=After",
  theme: defaultTheme,
  variant: "default",
} satisfies ImageSplitProps;
