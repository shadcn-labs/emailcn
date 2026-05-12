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

export type HeroBlockOverlayVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroBlockOverlayProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  overlayColor?: string;
  textColor?: string;
  variant?: HeroBlockOverlayVariant;
}

const BlockOverlayCta = ({
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

const HeroBlockOverlaySection = ({
  ctaHref,
  ctaLabel,
  heading,
  overlayColor,
  subheading,
  textColor,
  theme,
  variant,
}: {
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  overlayColor: string;
  subheading: string;
  textColor: string;
  theme: EmailThemeTokens;
  variant: HeroBlockOverlayVariant;
}) => (
  <MjmlSection backgroundColor={overlayColor} padding="80px 0">
    <MjmlColumn>
      <MjmlText
        align="center"
        color={textColor}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeHeading}
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase}
      >
        {heading}
      </MjmlText>
      <MjmlText
        align="center"
        color={textColor}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg}
        lineHeight={theme.lineHeightBase}
        paddingBottom={theme.spacingXl}
      >
        {subheading}
      </MjmlText>
      {ctaLabel && ctaHref ? (
        <BlockOverlayCta ctaHref={ctaHref} ctaLabel={ctaLabel} theme={theme} />
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

export const HeroBlockOverlay = ({
  theme = defaultTheme,
  heading = "Block Overlay Hero",
  subheading = "Dark background section with light text overlaid.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  overlayColor = "#111827",
  textColor = "#ffffff",
  variant = "default",
}: HeroBlockOverlayProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>hero block overlay</MjmlPreview>
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
        <HeroBlockOverlaySection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          overlayColor={overlayColor}
          subheading={subheading}
          textColor={textColor}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeroBlockOverlay.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Learn More",
  heading: "Hero Block Overlay",
  overlayColor: "#111827",
  subheading:
    "A dark overlay section with light text and a contrasting call-to-action button.",
  textColor: "#ffffff",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroBlockOverlayProps;
