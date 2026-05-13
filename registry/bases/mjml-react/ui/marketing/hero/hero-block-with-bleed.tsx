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

export type HeroBlockWithBleedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroBlockWithBleedProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  backgroundColor?: string;
  variant?: HeroBlockWithBleedVariant;
}

const BlockBleedCta = ({
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

const HeroBlockWithBleedSection = ({
  backgroundColor,
  ctaHref,
  ctaLabel,
  heading,
  imageAlt,
  imageSrc,
  subheading,
  theme,
  variant,
}: {
  backgroundColor: string;
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  imageAlt: string;
  imageSrc: string;
  subheading: string;
  theme: EmailThemeTokens;
  variant: HeroBlockWithBleedVariant;
}) => (
  <MjmlSection backgroundColor={backgroundColor} padding="48px 0">
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorPrimaryForeground}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeHeading}
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase}
      >
        {heading}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorPrimaryForeground}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg}
        lineHeight={theme.lineHeightBase}
        paddingBottom={theme.spacingXl}
      >
        {subheading}
      </MjmlText>
      {ctaLabel && ctaHref ? (
        <BlockBleedCta ctaHref={ctaHref} ctaLabel={ctaLabel} theme={theme} />
      ) : null}
    </MjmlColumn>
    <MjmlColumn padding="24px 0 0">
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

export const HeroBlockWithBleed = ({
  theme = defaultTheme,
  heading = "Block with Bleed",
  subheading = "Full-width background with an image that bleeds to the edges.",
  ctaLabel = "Explore",
  ctaHref = "#",
  imageSrc = "https://static.photos/business/600x300/2",
  imageAlt = "bleed image",
  backgroundColor = "#111827",
  variant = "default",
}: HeroBlockWithBleedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>hero block bleed</MjmlPreview>
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
        <HeroBlockWithBleedSection
          backgroundColor={backgroundColor}
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

HeroBlockWithBleed.PreviewProps = {
  backgroundColor: "#111827",
  ctaHref: "https://example.com",
  ctaLabel: "Shop Now",
  heading: "Hero Block with Bleed",
  imageAlt: "bleed image",
  imageSrc: "https://static.photos/business/600x300/3",
  subheading:
    "A full-width dark background section with a heading and a bleeding image below.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroBlockWithBleedProps;
