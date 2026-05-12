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

export type FeatureRightImageVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FeatureRightImageProps {
  theme?: EmailThemeTokens;
  imageSrc?: string;
  imageAlt?: string;
  heading?: string;
  body?: string;
  variant?: FeatureRightImageVariant;
}

const FeatureRightImageSection = ({
  body,
  heading,
  imageAlt,
  imageSrc,
  theme,
  variant,
}: {
  body: string;
  heading: string;
  imageAlt: string;
  imageSrc: string;
  theme: EmailThemeTokens;
  variant: FeatureRightImageVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn width="60%" padding="0 12px" verticalAlign="middle">
      <MjmlText
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeXl ?? "20px"}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {heading}
      </MjmlText>
      <MjmlText
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase ?? "14px"}
        lineHeight={theme.lineHeightBase}
      >
        {body}
      </MjmlText>
    </MjmlColumn>
    <MjmlColumn width="40%" padding="0 12px" verticalAlign="middle">
      <MjmlImage
        alt={imageAlt}
        borderRadius={theme.borderRadius}
        src={imageSrc}
        width={220}
      />
    </MjmlColumn>
  </MjmlSection>
);

export const FeatureWithProductImage = ({
  theme = defaultTheme,
  imageSrc = "https://placehold.co/400x300?text=Feature",
  imageAlt = "feature",
  heading = "Feature Title",
  body = "Description of the feature shown on the right side.",
  variant = "default",
}: FeatureRightImageProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>feature right image</MjmlPreview>
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
        <FeatureRightImageSection
          body={body}
          heading={heading}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FeatureWithProductImage.PreviewProps = {
  body: "Image displayed on the right with supporting text on the left.",
  heading: "Feature with Right Image",
  imageAlt: "feature",
  imageSrc: "https://placehold.co/400x300?text=Right+Feature",
  theme: defaultTheme,
  variant: "default",
} satisfies FeatureRightImageProps;
