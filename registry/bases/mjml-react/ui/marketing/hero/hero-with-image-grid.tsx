/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlButton,
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

export type HeroWithImageGridVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithImageGridProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image1Src?: string;
  image1Alt?: string;
  image2Src?: string;
  image2Alt?: string;
  image3Src?: string;
  image3Alt?: string;
  variant?: HeroWithImageGridVariant;
}

const ImageGridCta = ({
  ctaHref,
  ctaLabel,
  theme,
}: {
  ctaHref: string;
  ctaLabel: string;
  theme: EmailThemeTokens;
}) => (
  <MjmlButton
    align="center"
    backgroundColor={theme.colorPrimary}
    borderRadius={theme.borderRadius}
    color={theme.colorPrimaryForeground}
    fontFamily={theme.fontFamily}
    fontSize={theme.fontSizeSm}
    fontWeight={theme.fontWeightMedium}
    href={ctaHref}
    innerPadding={`${theme.button.primary.paddingY} ${theme.button.primary.paddingX}`}
  >
    {ctaLabel}
  </MjmlButton>
);

const HeroWithImageGridSection = ({
  ctaHref,
  ctaLabel,
  heading,
  image1Alt,
  image1Src,
  image2Alt,
  image2Src,
  image3Alt,
  image3Src,
  subheading,
  theme,
  variant,
}: {
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  image1Alt: string;
  image1Src: string;
  image2Alt: string;
  image2Src: string;
  image3Alt: string;
  image3Src: string;
  subheading: string;
  theme: EmailThemeTokens;
  variant: HeroWithImageGridVariant;
}) => (
  <MjmlSection backgroundColor={theme.colorBackground} padding="48px 0">
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeHeading}
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase}
      >
        {heading}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg}
        lineHeight={theme.lineHeightBase}
        paddingBottom={theme.spacingXl}
      >
        {subheading}
      </MjmlText>
    </MjmlColumn>
    <MjmlColumn width="33.33%" padding="0 8px">
      <MjmlImage
        align="center"
        alt={image1Alt}
        src={image1Src}
        width="100%"
        paddingBottom={theme.spacingBase}
      />
    </MjmlColumn>
    <MjmlColumn width="33.33%" padding="0 8px">
      <MjmlImage
        align="center"
        alt={image2Alt}
        src={image2Src}
        width="100%"
        paddingBottom={theme.spacingBase}
      />
    </MjmlColumn>
    <MjmlColumn width="33.33%" padding="0 8px">
      <MjmlImage
        align="center"
        alt={image3Alt}
        src={image3Src}
        width="100%"
        paddingBottom={theme.spacingBase}
      />
    </MjmlColumn>
    <MjmlColumn>
      {ctaLabel && ctaHref ? (
        <ImageGridCta ctaHref={ctaHref} ctaLabel={ctaLabel} theme={theme} />
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

export const HeroWithImageGrid = ({
  theme = defaultTheme,
  heading = "Image Grid Hero",
  subheading = "A hero heading paired with a grid of images.",
  ctaLabel = "View Gallery",
  ctaHref = "#",
  image1Src = "https://static.photos/city/300x200/2",
  image1Alt = "image 1",
  image2Src = "https://static.photos/city/300x200/3",
  image2Alt = "image 2",
  image3Src = "https://static.photos/city/300x200/4",
  image3Alt = "image 3",
  variant = "default",
}: HeroWithImageGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>hero image grid</MjmlPreview>
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
        <HeroWithImageGridSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          image1Alt={image1Alt}
          image1Src={image1Src}
          image2Alt={image2Alt}
          image2Src={image2Src}
          image3Alt={image3Alt}
          image3Src={image3Src}
          subheading={subheading}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeroWithImageGrid.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Browse Collection",
  heading: "Hero with Image Grid",
  image1Alt: "product 1",
  image1Src: "https://static.photos/city/300x200/5",
  image2Alt: "product 2",
  image2Src: "https://static.photos/city/300x200/6",
  image3Alt: "product 3",
  image3Src: "https://static.photos/city/300x200/7",
  subheading: "A prominent heading followed by a three-column image grid.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithImageGridProps;
