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

export type BentoGridWithImagesAndDetailsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridWithImagesAndDetailsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  detailTitle1?: string;
  detailDesc1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  detailTitle2?: string;
  detailDesc2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  detailTitle3?: string;
  detailDesc3?: string;
  variant?: BentoGridWithImagesAndDetailsVariant;
}

const BentoGridWithImagesAndDetailsSection = ({
  detailDesc1,
  detailDesc2,
  detailDesc3,
  detailTitle1,
  detailTitle2,
  detailTitle3,
  heading,
  imageAlt1,
  imageAlt2,
  imageAlt3,
  imageSrc1,
  imageSrc2,
  imageSrc3,
  theme,
  variant,
}: {
  detailDesc1: string;
  detailDesc2: string;
  detailDesc3: string;
  detailTitle1: string;
  detailTitle2: string;
  detailTitle3: string;
  heading: string;
  imageAlt1: string;
  imageAlt2: string;
  imageAlt3: string;
  imageSrc1: string;
  imageSrc2: string;
  imageSrc3: string;
  theme: EmailThemeTokens;
  variant: BentoGridWithImagesAndDetailsVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {heading ? (
      <MjmlColumn>
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeHeading}
          fontWeight={theme.fontWeightBold}
          paddingBottom={theme.spacingXl ?? "48px"}
        >
          {heading}
        </MjmlText>
      </MjmlColumn>
    ) : null}
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
        fontSize={theme.fontSizeLg ?? "16px"}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "24px"}
      >
        {detailTitle1}
      </MjmlText>
      <MjmlText
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase ?? "14px"}
        lineHeight={theme.lineHeightBase}
      >
        {detailDesc1}
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
        fontSize={theme.fontSizeLg ?? "16px"}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "24px"}
      >
        {detailTitle2}
      </MjmlText>
      <MjmlText
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase ?? "14px"}
        lineHeight={theme.lineHeightBase}
      >
        {detailDesc2}
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
        fontSize={theme.fontSizeLg ?? "16px"}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "24px"}
      >
        {detailTitle3}
      </MjmlText>
      <MjmlText
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase ?? "14px"}
        lineHeight={theme.lineHeightBase}
      >
        {detailDesc3}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const BentoGridWith3ColumnsAndFlushImages = ({
  theme = defaultTheme,
  heading = "Features",
  imageSrc1 = "https://placehold.co/400x300?text=Feature+1",
  imageAlt1 = "",
  detailTitle1 = "Feature One",
  detailDesc1 = "Description for feature one.",
  imageSrc2 = "https://placehold.co/400x300?text=Feature+2",
  imageAlt2 = "",
  detailTitle2 = "Feature Two",
  detailDesc2 = "Description for feature two.",
  imageSrc3 = "https://placehold.co/400x300?text=Feature+3",
  imageAlt3 = "",
  detailTitle3 = "Feature Three",
  detailDesc3 = "Description for feature three.",
  variant = "default",
}: BentoGridWithImagesAndDetailsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>bento grid details</MjmlPreview>
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
        <BentoGridWithImagesAndDetailsSection
          detailDesc1={detailDesc1}
          detailDesc2={detailDesc2}
          detailDesc3={detailDesc3}
          detailTitle1={detailTitle1}
          detailTitle2={detailTitle2}
          detailTitle3={detailTitle3}
          heading={heading}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageAlt3={imageAlt3}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          imageSrc3={imageSrc3}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BentoGridWith3ColumnsAndFlushImages.PreviewProps = {
  detailDesc1: "Drag-and-drop builder for rapid email creation.",
  detailDesc2: "Works flawlessly across all major email clients.",
  detailDesc3: "Real-time collaboration for your team.",
  detailTitle1: "Visual Builder",
  detailTitle2: "Responsive",
  detailTitle3: "Collaboration",
  heading: "Features",
  imageAlt1: "Visual Builder",
  imageAlt2: "Responsive",
  imageAlt3: "Collaboration",
  imageSrc1: "https://placehold.co/400x300?text=Visual+Builder",
  imageSrc2: "https://placehold.co/400x300?text=Responsive",
  imageSrc3: "https://placehold.co/400x300?text=Collaboration",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridWithImagesAndDetailsProps;
