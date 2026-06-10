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

export type HeroOverlayedSplitVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroOverlayedSplitProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlayBackgroundColor?: string;
  overlayTextColor?: string;
  variant?: HeroOverlayedSplitVariant;
}

const OverlayedSplitCta = ({
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
    backgroundColor={theme.colorPrimaryForeground}
    borderRadius={theme.borderRadius}
    color={theme.colorPrimary}
    fontFamily={theme.fontFamily}
    fontSize={theme.fontSizeSm}
    fontWeight={theme.fontWeightMedium}
    href={ctaHref}
    innerPadding={`${theme.button.primary.paddingY} ${theme.button.primary.paddingX}`}
  >
    {ctaLabel}
  </MjmlButton>
);

const HeroOverlayedSplitSection = ({
  ctaHref,
  ctaLabel,
  heading,
  imageAlt,
  imageSrc,
  overlayBackgroundColor,
  overlayTextColor,
  subheading,
  theme,
  variant,
}: {
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  imageAlt: string;
  imageSrc: string;
  overlayBackgroundColor: string;
  overlayTextColor: string;
  subheading: string;
  theme: EmailThemeTokens;
  variant: HeroOverlayedSplitVariant;
}) => (
  <MjmlSection backgroundColor={overlayBackgroundColor} padding="0">
    <MjmlColumn width="50%" padding="0" verticalAlign="middle">
      <MjmlImage
        align="center"
        alt={imageAlt}
        src={imageSrc}
        width="100%"
        padding="0"
      />
    </MjmlColumn>
    <MjmlColumn width="50%" padding="32px" verticalAlign="middle">
      <MjmlText
        align="center"
        color={overlayTextColor}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeHeading}
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase}
      >
        {heading}
      </MjmlText>
      <MjmlText
        align="center"
        color={overlayTextColor}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg}
        lineHeight={theme.lineHeightBase}
        paddingBottom={theme.spacingLg}
      >
        {subheading}
      </MjmlText>
      {ctaLabel && ctaHref ? (
        <OverlayedSplitCta
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          theme={theme}
        />
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

export const HeroOverlayedSplit = ({
  theme = defaultTheme,
  heading = "Overlayed Split",
  subheading = "Text overlays a dark background beside the image.",
  ctaLabel = "Explore",
  ctaHref = "#",
  imageSrc = "https://static.photos/city/600x400/2",
  imageAlt = "overlayed split",
  overlayBackgroundColor = "#111827",
  overlayTextColor = "#ffffff",
  variant = "default",
}: HeroOverlayedSplitProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>hero overlayed split</MjmlPreview>
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
        <HeroOverlayedSplitSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          overlayBackgroundColor={overlayBackgroundColor}
          overlayTextColor={overlayTextColor}
          subheading={subheading}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeroOverlayedSplit.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Learn More",
  heading: "Hero Overlayed Split",
  imageAlt: "overlayed split",
  imageSrc: "https://static.photos/city/600x400/3",
  overlayBackgroundColor: "#111827",
  overlayTextColor: "#ffffff",
  subheading:
    "A split layout where the text overlays a dark background panel beside the image.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroOverlayedSplitProps;
