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

export type HeroSplitContainedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroSplitContainedProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  align?: "left" | "center";
  variant?: HeroSplitContainedVariant;
}

const SplitContainedCta = ({
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

const HeroSplitContainedSection = ({
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
  variant: HeroSplitContainedVariant;
}) => (
  <MjmlSection backgroundColor={theme.colorBackground} padding="0">
    <MjmlColumn
      width="50%"
      padding="32px 16px 32px 32px"
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
        <SplitContainedCta
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

export const HeroSplitContained = ({
  theme = defaultTheme,
  heading = "Split Contained Hero",
  subheading = "Text on the left, image on the right — evenly split.",
  ctaLabel = "Learn More",
  ctaHref = "#",
  imageSrc = "https://placehold.co/600x400?text=Split+Image",
  imageAlt = "split image",
  align = "left",
  variant = "default",
}: HeroSplitContainedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>hero split contained</MjmlPreview>
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
        <HeroSplitContainedSection
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

HeroSplitContained.PreviewProps = {
  align: "left",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Split Contained",
  imageAlt: "split contained",
  imageSrc: "https://placehold.co/600x400?text=Split+Contained",
  subheading:
    "A balanced split layout with text on the left and an image on the right.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroSplitContainedProps;
