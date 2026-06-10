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

export type HeroWithOverlappedImageVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithOverlappedImageProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  align?: "left" | "center";
  variant?: HeroWithOverlappedImageVariant;
}

const OverlappedImageCta = ({
  ctaHref,
  ctaLabel,
  theme,
}: {
  ctaHref: string;
  ctaLabel: string;
  theme: EmailThemeTokens;
}) => (
  <MjmlButton
    align="left"
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

const HeroWithOverlappedImageSection = ({
  align,
  ctaHref,
  ctaLabel,
  heading,
  imageAlt,
  imageSrc,
  subheading,
  theme,
  variant,
}: {
  align: "center" | "left";
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  imageAlt: string;
  imageSrc: string;
  subheading: string;
  theme: EmailThemeTokens;
  variant: HeroWithOverlappedImageVariant;
}) => (
  <MjmlSection backgroundColor={theme.colorBackground} padding="0">
    <MjmlColumn
      width="50%"
      padding="24px 12px 24px 24px"
      verticalAlign="middle"
    >
      <MjmlText
        align={align}
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeHeading}
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase}
      >
        {heading}
      </MjmlText>
      <MjmlText
        align={align}
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg}
        lineHeight={theme.lineHeightBase}
        paddingBottom={theme.spacingLg}
      >
        {subheading}
      </MjmlText>
      {ctaLabel && ctaHref ? (
        <OverlappedImageCta
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          theme={theme}
        />
      ) : null}
    </MjmlColumn>
    <MjmlColumn width="50%" padding="0" verticalAlign="middle">
      <MjmlImage
        align="center"
        alt={imageAlt}
        src={imageSrc}
        width="100%"
        padding="0"
      />
    </MjmlColumn>
  </MjmlSection>
);

export const HeroWithOverlappedImage = ({
  theme = defaultTheme,
  heading = "Heading with Image",
  subheading = "Text on the left, image overlapping on the right.",
  ctaLabel = "Shop Now",
  ctaHref = "#",
  imageSrc = "https://static.photos/city/600x400/2",
  imageAlt = "featured",
  align = "left",
  variant = "default",
}: HeroWithOverlappedImageProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>hero overlapped image</MjmlPreview>
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
        <HeroWithOverlappedImageSection
          align={align}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          subheading={subheading}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeroWithOverlappedImage.PreviewProps = {
  align: "left",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Hero with Overlapped Image",
  imageAlt: "featured image",
  imageSrc: "https://static.photos/city/600x400/3",
  subheading:
    "Text on the left with an image extending beyond the content area on the right.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithOverlappedImageProps;
