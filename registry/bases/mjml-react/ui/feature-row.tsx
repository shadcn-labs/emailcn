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

export interface FeatureRowProps {
  theme?: EmailThemeTokens;
  imageSrc?: string;
  imageAlt?: string;
  heading?: string;
  body?: string;
  imagePosition?: "left" | "right";
}

const FeatureRowSection = ({
  body,
  heading,
  imageAlt,
  imagePosition,
  imageSrc,
  theme,
}: {
  body: string;
  heading: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  imageSrc?: string;
  theme: EmailThemeTokens;
}) => {
  const imageCol = imageSrc ? (
    <MjmlColumn width="40%">
      <MjmlImage
        alt={imageAlt}
        borderRadius={theme.borderRadius}
        src={imageSrc}
        width={220}
      />
    </MjmlColumn>
  ) : null;

  const textCol = (
    <MjmlColumn width={imageSrc ? "60%" : "100%"}>
      <MjmlText
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeXl ?? "20px"}
        fontWeight={theme.fontWeightMedium ?? "500"}
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
  );

  return (
    <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
      {imagePosition === "left" ? (
        <>
          {imageCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {imageCol}
        </>
      )}
    </MjmlSection>
  );
};

export const FeatureRow = ({
  theme = defaultTheme,
  imageSrc,
  imageAlt = "Feature",
  heading = "Feature",
  body = "Description of the feature.",
  imagePosition = "left",
}: FeatureRowProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>feature-row</MjmlPreview>
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
        <FeatureRowSection
          body={body}
          heading={heading}
          imageAlt={imageAlt}
          imagePosition={imagePosition}
          imageSrc={imageSrc}
          theme={theme}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FeatureRow.PreviewProps = {
  body: "Everything you need to build amazing emails.",
  heading: "Powerful Features",
  imageAlt: "Feature Image",
  imagePosition: "left",
  imageSrc: "https://example.com/feature.png",
  theme: defaultTheme,
} satisfies FeatureRowProps;
