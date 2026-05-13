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

export type BentoGridWithImagesAndCaptionsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridWithImagesAndCaptionsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  caption1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  caption2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  caption3?: string;
  variant?: BentoGridWithImagesAndCaptionsVariant;
}

const BentoGridWithImagesAndCaptionsSection = ({
  caption1,
  caption2,
  caption3,
  heading,
  imageAlt1,
  imageAlt2,
  imageAlt3,
  imageSrc1,
  imageSrc2,
  imageSrc3,
  subheading,
  theme,
  variant,
}: {
  caption1: string;
  caption2: string;
  caption3: string;
  heading: string;
  imageAlt1: string;
  imageAlt2: string;
  imageAlt3: string;
  imageSrc1: string;
  imageSrc2: string;
  imageSrc3: string;
  subheading: string;
  theme: EmailThemeTokens;
  variant: BentoGridWithImagesAndCaptionsVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      {heading ? (
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeHeading}
          fontWeight={theme.fontWeightBold}
          paddingBottom={theme.spacingBase ?? "24px"}
        >
          {heading}
        </MjmlText>
      ) : null}
      {subheading ? (
        <MjmlText
          align="center"
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeLg}
          lineHeight={theme.lineHeightBase}
          paddingBottom={theme.spacingXl ?? "48px"}
        >
          {subheading}
        </MjmlText>
      ) : null}
    </MjmlColumn>
    <MjmlColumn width="33.33%" padding="0 8px" verticalAlign="top">
      <MjmlImage
        alt={imageAlt1}
        borderRadius={theme.borderRadius}
        src={imageSrc1}
        width={260}
        paddingBottom={theme.spacingBase ?? "24px"}
      />
      <MjmlText
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase}
        fontWeight={theme.fontWeightMedium}
      >
        {caption1}
      </MjmlText>
    </MjmlColumn>
    <MjmlColumn width="33.33%" padding="0 8px" verticalAlign="top">
      <MjmlImage
        alt={imageAlt2}
        borderRadius={theme.borderRadius}
        src={imageSrc2}
        width={260}
        paddingBottom={theme.spacingBase ?? "24px"}
      />
      <MjmlText
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase}
        fontWeight={theme.fontWeightMedium}
      >
        {caption2}
      </MjmlText>
    </MjmlColumn>
    <MjmlColumn width="33.33%" padding="0 8px" verticalAlign="top">
      <MjmlImage
        alt={imageAlt3}
        borderRadius={theme.borderRadius}
        src={imageSrc3}
        width={260}
        paddingBottom={theme.spacingBase ?? "24px"}
      />
      <MjmlText
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase}
        fontWeight={theme.fontWeightMedium}
      >
        {caption3}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const BentoGridWithImagesAndCaptions = ({
  theme = defaultTheme,
  heading = "Our Work",
  subheading = "A selection of our recent projects.",
  imageSrc1 = "https://static.photos/technology/400x300/2",
  imageAlt1 = "",
  caption1 = "Project Alpha",
  imageSrc2 = "https://static.photos/technology/400x300/3",
  imageAlt2 = "",
  caption2 = "Project Beta",
  imageSrc3 = "https://static.photos/technology/400x300/4",
  imageAlt3 = "",
  caption3 = "Project Gamma",
  variant = "default",
}: BentoGridWithImagesAndCaptionsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>bento grid captions</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorText} fontFamily={theme.fontFamily} />
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
        <BentoGridWithImagesAndCaptionsSection
          caption1={caption1}
          caption2={caption2}
          caption3={caption3}
          heading={heading}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageAlt3={imageAlt3}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          imageSrc3={imageSrc3}
          subheading={subheading}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BentoGridWithImagesAndCaptions.PreviewProps = {
  caption1: "Project Alpha",
  caption2: "Project Beta",
  caption3: "Project Gamma",
  heading: "Our Work",
  imageAlt1: "Project Alpha",
  imageAlt2: "Project Beta",
  imageAlt3: "Project Gamma",
  imageSrc1: "https://static.photos/technology/400x300/5",
  imageSrc2: "https://static.photos/technology/400x300/6",
  imageSrc3: "https://static.photos/technology/400x300/7",
  subheading: "A selection of our recent projects.",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridWithImagesAndCaptionsProps;
