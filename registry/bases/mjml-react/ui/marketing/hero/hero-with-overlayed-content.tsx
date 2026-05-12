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

export type HeroWithOverlayedContentVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithOverlayedContentProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  variant?: HeroWithOverlayedContentVariant;
}

const OverlayedContentCta = ({
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

const HeroWithOverlayedContentSection = ({
  backgroundImage,
  backgroundImageAlt,
  ctaHref,
  ctaLabel,
  heading,
  subheading,
  theme,
  variant,
}: {
  backgroundImage: string;
  backgroundImageAlt: string;
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  subheading: string;
  theme: EmailThemeTokens;
  variant: HeroWithOverlayedContentVariant;
}) => {
  const sectionPadding =
    variant === "slanted-left"
      ? "80px 0 60px"
      : variant === "slanted-right"
        ? "60px 0 80px"
        : "60px 0";

  return (
    <MjmlSection
      backgroundColor={theme.colorBackgroundMuted}
      padding={sectionPadding}
    >
      <MjmlColumn>
        <MjmlImage
          align="center"
          alt={backgroundImageAlt}
          height="200px"
          href="#"
          src={backgroundImage}
          width="100%"
          paddingBottom={theme.spacingBase}
        />
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
        {ctaLabel && ctaHref ? (
          <OverlayedContentCta
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            theme={theme}
          />
        ) : null}
      </MjmlColumn>
    </MjmlSection>
  );
};

export const HeroWithOverlayedContent = ({
  theme = defaultTheme,
  heading = "Large Heading Over Background",
  subheading = "Content layered on top of a background image or color block.",
  ctaLabel = "Learn More",
  ctaHref = "#",
  backgroundImage = "https://placehold.co/600x200?text=Background",
  backgroundImageAlt = "background",
  variant = "default",
}: HeroWithOverlayedContentProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>hero overlayed content</MjmlPreview>
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
        <HeroWithOverlayedContentSection
          backgroundImage={backgroundImage}
          backgroundImageAlt={backgroundImageAlt}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          subheading={subheading}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeroWithOverlayedContent.PreviewProps = {
  backgroundImage: "https://placehold.co/600x200?text=Background",
  backgroundImageAlt: "background",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Hero with Overlayed Content",
  subheading:
    "A large heading overlapping a background image with a call to action.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithOverlayedContentProps;
