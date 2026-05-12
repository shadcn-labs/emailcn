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

export type HeroWithOverlappedContentVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithOverlappedContentProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  contentBackgroundColor?: string;
  contentTextColor?: string;
  variant?: HeroWithOverlappedContentVariant;
}

const OverlappedContentCta = ({
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

const HeroWithOverlappedContentSection = ({
  contentBackgroundColor,
  contentTextColor,
  ctaHref,
  ctaLabel,
  heading,
  imageAlt,
  imageSrc,
  subheading,
  theme,
  variant,
}: {
  contentBackgroundColor: string;
  contentTextColor: string;
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  imageAlt: string;
  imageSrc: string;
  subheading: string;
  theme: EmailThemeTokens;
  variant: HeroWithOverlappedContentVariant;
}) => (
  <MjmlSection backgroundColor={theme.colorBackground} padding="0">
    <MjmlColumn padding="0">
      <MjmlImage
        align="center"
        alt={imageAlt}
        src={imageSrc}
        width="100%"
        padding="0"
      />
    </MjmlColumn>
    <MjmlColumn
      backgroundColor={contentBackgroundColor}
      padding="32px"
      paddingTop="24px"
    >
      <MjmlText
        align="center"
        color={contentTextColor}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeHeading}
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase}
      >
        {heading}
      </MjmlText>
      <MjmlText
        align="center"
        color={contentTextColor}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg}
        lineHeight={theme.lineHeightBase}
        paddingBottom={theme.spacingLg}
      >
        {subheading}
      </MjmlText>
      {ctaLabel && ctaHref ? (
        <OverlappedContentCta
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          theme={theme}
        />
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

export const HeroWithOverlappedContent = ({
  theme = defaultTheme,
  heading = "Overlapped Content",
  subheading = "A content box overlaps the image below with a distinct background.",
  ctaLabel = "Read More",
  ctaHref = "#",
  imageSrc = "https://placehold.co/600x250?text=Top+Image",
  imageAlt = "top image",
  contentBackgroundColor = "#ffffff",
  contentTextColor = "#111827",
  variant = "default",
}: HeroWithOverlappedContentProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>hero overlapped content</MjmlPreview>
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
        <HeroWithOverlappedContentSection
          contentBackgroundColor={contentBackgroundColor}
          contentTextColor={contentTextColor}
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

HeroWithOverlappedContent.PreviewProps = {
  contentBackgroundColor: "#ffffff",
  contentTextColor: "#111827",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Hero with Overlapped Content",
  imageAlt: "top image",
  imageSrc: "https://placehold.co/600x250?text=Top+Image",
  subheading:
    "An image at the top with a content box that visually overlaps it using padding adjustments.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithOverlappedContentProps;
