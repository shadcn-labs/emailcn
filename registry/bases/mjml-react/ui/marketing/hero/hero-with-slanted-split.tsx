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

export type HeroWithSlantedSplitVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithSlantedSplitProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  textBackgroundColor?: string;
  decorativeColor?: string;
  variant?: HeroWithSlantedSplitVariant;
}

const SlantedSplitCta = ({
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

const HeroWithSlantedSplitSection = ({
  ctaHref,
  ctaLabel,
  decorativeColor,
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
  decorativeColor: string;
  heading: string;
  imageAlt: string;
  imageSrc: string;
  subheading: string;
  textBackgroundColor: string;
  theme: EmailThemeTokens;
  variant: HeroWithSlantedSplitVariant;
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
        <SlantedSplitCta ctaHref={ctaHref} ctaLabel={ctaLabel} theme={theme} />
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
    {variant !== "default" ? (
      <MjmlColumn padding="0">
        <MjmlSection backgroundColor={decorativeColor} padding="4px 0" />
      </MjmlColumn>
    ) : null}
  </MjmlSection>
);

export const HeroWithSlantedSplit = ({
  theme = defaultTheme,
  heading = "Slanted Split",
  subheading = "Split layout with an angled decorative divider.",
  ctaLabel = "Discover",
  ctaHref = "#",
  imageSrc = "https://placehold.co/600x400?text=Angled+Split",
  imageAlt = "angled split",
  textBackgroundColor = "#f9fafb",
  decorativeColor = "#111827",
  variant = "default",
}: HeroWithSlantedSplitProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>hero slanted split</MjmlPreview>
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
        <HeroWithSlantedSplitSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          decorativeColor={decorativeColor}
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

HeroWithSlantedSplit.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Learn More",
  decorativeColor: "#111827",
  heading: "Hero with Slanted Split",
  imageAlt: "angled split",
  imageSrc: "https://placehold.co/600x400?text=Angled+Split",
  subheading:
    "A split layout with an angled decorative divider accent between text and image panels.",
  textBackgroundColor: "#f9fafb",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithSlantedSplitProps;
