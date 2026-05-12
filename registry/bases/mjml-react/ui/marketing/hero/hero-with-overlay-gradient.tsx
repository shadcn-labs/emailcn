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

export type HeroWithOverlayGradientVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithOverlayGradientProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundColor?: string;
  textColor?: string;
  variant?: HeroWithOverlayGradientVariant;
}

const OverlayGradientCta = ({
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

const HeroWithOverlayGradientSection = ({
  backgroundColor,
  ctaHref,
  ctaLabel,
  heading,
  subheading,
  textColor,
  theme,
  variant,
}: {
  backgroundColor: string;
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  subheading: string;
  textColor: string;
  theme: EmailThemeTokens;
  variant: HeroWithOverlayGradientVariant;
}) => {
  const sectionPadding =
    variant === "slanted-left"
      ? "80px 0 60px"
      : variant === "slanted-right"
        ? "60px 0 80px"
        : "80px 0";

  return (
    <MjmlSection backgroundColor={backgroundColor} padding={sectionPadding}>
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
          <OverlayGradientCta
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            theme={theme}
          />
        ) : null}
      </MjmlColumn>
    </MjmlSection>
  );
};

export const HeroWithOverlayGradient = ({
  theme = defaultTheme,
  heading = "Gradient Overlay Hero",
  subheading = "A solid background color simulating a gradient overlay with light text.",
  ctaLabel = "Discover",
  ctaHref = "#",
  backgroundColor = "#1e3a5f",
  textColor = "#ffffff",
  variant = "default",
}: HeroWithOverlayGradientProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>hero overlay gradient</MjmlPreview>
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
        <HeroWithOverlayGradientSection
          backgroundColor={backgroundColor}
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

HeroWithOverlayGradient.PreviewProps = {
  backgroundColor: "#1e3a5f",
  ctaHref: "https://example.com",
  ctaLabel: "Learn More",
  heading: "Hero with Overlay Gradient",
  subheading:
    "A solid email-safe background color with light text overlay and a prominent CTA.",
  textColor: "#ffffff",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithOverlayGradientProps;
