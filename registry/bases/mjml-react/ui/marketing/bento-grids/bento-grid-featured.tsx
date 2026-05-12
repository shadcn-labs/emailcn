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

export type BentoGridFeaturedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridFeaturedProps {
  theme?: EmailThemeTokens;
  heading?: string;
  featuredImage?: string;
  featuredAlt?: string;
  featuredTitle?: string;
  featuredDesc?: string;
  smallImage1?: string;
  smallAlt1?: string;
  smallTitle1?: string;
  smallImage2?: string;
  smallAlt2?: string;
  smallTitle2?: string;
  variant?: BentoGridFeaturedVariant;
}

const BentoGridFeaturedSection = ({
  heading,
  featuredImage,
  featuredAlt,
  featuredTitle,
  featuredDesc,
  smallImage1,
  smallAlt1,
  smallTitle1,
  smallImage2,
  smallAlt2,
  smallTitle2,
  theme,
  variant,
}: {
  heading: string;
  featuredImage: string;
  featuredAlt: string;
  featuredTitle: string;
  featuredDesc: string;
  smallImage1: string;
  smallAlt1: string;
  smallTitle1: string;
  smallImage2: string;
  smallAlt2: string;
  smallTitle2: string;
  theme: EmailThemeTokens;
  variant: BentoGridFeaturedVariant;
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
    <MjmlColumn width="60%" padding="8px" verticalAlign="top">
      <MjmlImage
        alt={featuredAlt}
        borderRadius={theme.borderRadius}
        src={featuredImage}
        width={340}
        paddingBottom={theme.spacingBase ?? "16px"}
      />
      <MjmlText
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeXl}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "8px"}
      >
        {featuredTitle}
      </MjmlText>
      <MjmlText
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase}
        lineHeight={theme.lineHeightBase}
      >
        {featuredDesc}
      </MjmlText>
    </MjmlColumn>
    <MjmlColumn width="40%" padding="8px" verticalAlign="top">
      <MjmlImage
        alt={smallAlt1}
        borderRadius={theme.borderRadius}
        src={smallImage1}
        width={220}
        paddingBottom={theme.spacingBase ?? "16px"}
      />
      <MjmlText
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "8px"}
      >
        {smallTitle1}
      </MjmlText>
      <MjmlImage
        alt={smallAlt2}
        borderRadius={theme.borderRadius}
        src={smallImage2}
        width={220}
        paddingBottom={theme.spacingBase ?? "16px"}
      />
      <MjmlText
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg}
        fontWeight={theme.fontWeightMedium}
      >
        {smallTitle2}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const BentoGridFeatured = ({
  theme = defaultTheme,
  heading = "Featured",
  featuredImage = "https://placehold.co/600x350?text=Featured",
  featuredAlt = "",
  featuredTitle = "Featured Content",
  featuredDesc = "Main featured item with larger visual space.",
  smallImage1 = "https://placehold.co/300x150?text=Item+1",
  smallAlt1 = "",
  smallTitle1 = "Item One",
  smallImage2 = "https://placehold.co/300x150?text=Item+2",
  smallAlt2 = "",
  smallTitle2 = "Item Two",
  variant = "default",
}: BentoGridFeaturedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>bento featured</MjmlPreview>
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
        <BentoGridFeaturedSection
          featuredDesc={featuredDesc}
          featuredImage={featuredImage}
          featuredAlt={featuredAlt}
          featuredTitle={featuredTitle}
          heading={heading}
          smallAlt1={smallAlt1}
          smallAlt2={smallAlt2}
          smallImage1={smallImage1}
          smallImage2={smallImage2}
          smallTitle1={smallTitle1}
          smallTitle2={smallTitle2}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
BentoGridFeatured.PreviewProps = {
  featuredAlt: "featured",
  featuredDesc: "Highlight your main content with this bento grid layout.",
  featuredImage: "https://placehold.co/600x350?text=Main+Feature",
  featuredTitle: "Main Feature",
  heading: "Featured Content",
  smallAlt1: "item 1",
  smallAlt2: "item 2",
  smallImage1: "https://placehold.co/300x150?text=Secondary+1",
  smallImage2: "https://placehold.co/300x150?text=Secondary+2",
  smallTitle1: "Secondary Item 1",
  smallTitle2: "Secondary Item 2",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridFeaturedProps;
