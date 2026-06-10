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

export type HeroAlignedOverlayVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroAlignedOverlayProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  backgroundColor?: string;
  textColor?: string;
  align?: "left" | "center";
  variant?: HeroAlignedOverlayVariant;
}

const AlignedOverlayCta = ({
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

const HeroAlignedOverlaySection = ({
  align,
  backgroundImage,
  backgroundImageAlt,
  ctaHref,
  ctaLabel,
  heading,
  subheading,
  textColor,
  theme,
  variant,
}: {
  align: "center" | "left";
  backgroundImage: string;
  backgroundImageAlt: string;
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  subheading: string;
  textColor: string;
  theme: EmailThemeTokens;
  variant: HeroAlignedOverlayVariant;
}) => (
  <MjmlSection backgroundColor={theme.colorBackgroundMuted} padding="48px 0">
    <MjmlColumn>
      <MjmlImage
        align={align}
        alt={backgroundImageAlt}
        src={backgroundImage}
        width="100%"
        paddingBottom={theme.spacingBase}
      />
      <MjmlText
        align={align}
        color={textColor}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeHeading}
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase}
      >
        {heading}
      </MjmlText>
      <MjmlText
        align={align}
        color={textColor}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg}
        lineHeight={theme.lineHeightBase}
        paddingBottom={theme.spacingXl}
      >
        {subheading}
      </MjmlText>
      {ctaLabel && ctaHref ? (
        <AlignedOverlayCta
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          theme={theme}
        />
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

export const HeroAlignedOverlay = ({
  theme = defaultTheme,
  heading = "Aligned Overlay",
  subheading = "Background image with left-aligned text overlay.",
  ctaLabel = "Shop Now",
  ctaHref = "#",
  backgroundImage = "https://static.photos/business/600x250/2",
  backgroundImageAlt = "background",
  backgroundColor = "#f9fafb",
  textColor = "#111827",
  align = "left",
  variant = "default",
}: HeroAlignedOverlayProps) => {
  void backgroundColor;

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>hero aligned overlay</MjmlPreview>
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
          <HeroAlignedOverlaySection
            align={align}
            backgroundImage={backgroundImage}
            backgroundImageAlt={backgroundImageAlt}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            heading={heading}
            subheading={subheading}
            textColor={textColor}
            theme={theme}
            variant={variant}
          />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

HeroAlignedOverlay.PreviewProps = {
  align: "left",
  backgroundColor: "#f9fafb",
  backgroundImage: "https://static.photos/business/600x250/3",
  backgroundImageAlt: "background image",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Hero Aligned Overlay",
  subheading:
    "A background image with left-aligned heading, subheading, and CTA overlaid on top.",
  textColor: "#111827",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroAlignedOverlayProps;
