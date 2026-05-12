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

export type FeatureLeftImageVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FeatureLeftImageProps {
  theme?: EmailThemeTokens;
  imageSrc?: string;
  imageAlt?: string;
  heading?: string;
  body?: string;
  variant?: FeatureLeftImageVariant;
}

const FeatureLeftImageSection = ({
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
  variant: FeatureLeftImageVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn width="40%" padding="0 12px" verticalAlign="middle">
      <MjmlImage
        alt={imageAlt}
        borderRadius={theme.borderRadius}
        src={imageSrc}
        width={220}
      />
    </MjmlColumn>
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
  </MjmlSection>
);

export const FeatureWithLargePortraitImage = ({
  theme = defaultTheme,
  imageSrc = "https://placehold.co/400x300?text=Feature",
  imageAlt = "feature",
  heading = "Feature Title",
  body = "Description of the feature shown on the left side.",
  variant = "default",
}: FeatureLeftImageProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>feature left image</MjmlPreview>
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
        <FeatureLeftImageSection
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

FeatureWithLargePortraitImage.PreviewProps = {
  body: "Image displayed on the left with supporting text on the right.",
  heading: "Feature with Left Image",
  imageAlt: "feature",
  imageSrc: "https://placehold.co/400x300?text=Left+Feature",
  theme: defaultTheme,
  variant: "default",
} satisfies FeatureLeftImageProps;
