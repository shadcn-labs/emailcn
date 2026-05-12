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

export type HeroSplitFullBleedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroSplitFullBleedProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  textBackgroundColor?: string;
  variant?: HeroSplitFullBleedVariant;
}

const SplitFullBleedCta = ({
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

const HeroSplitFullBleedSection = ({
  ctaHref,
  ctaLabel,
  heading,
  imageAlt,
  imageSrc,
  subheading,
  textBackgroundColor,
  theme,
  variant,
}: {
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  imageAlt: string;
  imageSrc: string;
  subheading: string;
  textBackgroundColor: string;
  theme: EmailThemeTokens;
  variant: HeroSplitFullBleedVariant;
}) => (
  <MjmlSection backgroundColor={textBackgroundColor} padding="0">
    <MjmlColumn width="50%" padding="32px" verticalAlign="middle">
      <MjmlText
        align="left"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeHeading}
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase}
      >
        {heading}
      </MjmlText>
      <MjmlText
        align="left"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg}
        lineHeight={theme.lineHeightBase}
        paddingBottom={theme.spacingLg}
      >
        {subheading}
      </MjmlText>
      {ctaLabel && ctaHref ? (
        <SplitFullBleedCta
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

export const HeroSplitFullBleed = ({
  theme = defaultTheme,
  heading = "Full Bleed Split",
  subheading = "Full-width split layout: image bleeds on the right, text on the left.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  imageSrc = "https://placehold.co/600x400?text=Full+Bleed",
  imageAlt = "full bleed",
  textBackgroundColor = "#f9fafb",
  variant = "default",
}: HeroSplitFullBleedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>hero split full bleed</MjmlPreview>
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
        <HeroSplitFullBleedSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          subheading={subheading}
          textBackgroundColor={textBackgroundColor}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeroSplitFullBleed.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Learn More",
  heading: "Hero Split Full Bleed",
  imageAlt: "full bleed image",
  imageSrc: "https://placehold.co/600x400?text=Full+Bleed",
  subheading:
    "A full-bleed split layout with a text panel on the left and a zero-padding image on the right.",
  textBackgroundColor: "#f9fafb",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroSplitFullBleedProps;
