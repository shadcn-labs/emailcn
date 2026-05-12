/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
  MjmlButton,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type BentoGridWithCtaVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridWithCtaProps {
  theme?: EmailThemeTokens;
  heading?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  title1?: string;
  desc1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  title2?: string;
  desc2?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: BentoGridWithCtaVariant;
}

const BentoGridWithCtaSection = ({
  ctaHref,
  ctaLabel,
  desc1,
  desc2,
  heading,
  imageAlt1,
  imageAlt2,
  imageSrc1,
  imageSrc2,
  theme,
  title1,
  title2,
  variant,
}: {
  ctaHref: string;
  ctaLabel: string;
  desc1: string;
  desc2: string;
  heading: string;
  imageAlt1: string;
  imageAlt2: string;
  imageSrc1: string;
  imageSrc2: string;
  theme: EmailThemeTokens;
  title1: string;
  title2: string;
  variant: BentoGridWithCtaVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      {heading ? (
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeHeading}
          fontWeight={theme.fontWeightBold}
          paddingBottom={theme.spacingXl ?? "48px"}
        >
          {heading}
        </MjmlText>
      ) : null}
    </MjmlColumn>
    <MjmlColumn width="50%" padding="8px" verticalAlign="top">
      <MjmlImage
        alt={imageAlt1}
        borderRadius={theme.borderRadius}
        src={imageSrc1}
        width={280}
        paddingBottom={theme.spacingBase ?? "16px"}
      />
      <MjmlText
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "8px"}
      >
        {title1}
      </MjmlText>
      <MjmlText
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase}
        lineHeight={theme.lineHeightBase}
        paddingBottom={theme.spacingBase ?? "8px"}
      >
        {desc1}
      </MjmlText>
    </MjmlColumn>
    <MjmlColumn width="50%" padding="8px" verticalAlign="top">
      <MjmlImage
        alt={imageAlt2}
        borderRadius={theme.borderRadius}
        src={imageSrc2}
        width={280}
        paddingBottom={theme.spacingBase ?? "16px"}
      />
      <MjmlText
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "8px"}
      >
        {title2}
      </MjmlText>
      <MjmlText
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase}
        lineHeight={theme.lineHeightBase}
        paddingBottom={theme.spacingBase ?? "8px"}
      >
        {desc2}
      </MjmlText>
    </MjmlColumn>
    {ctaLabel && ctaHref ? (
      <MjmlColumn>
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
      </MjmlColumn>
    ) : null}
  </MjmlSection>
);

export const BentoGridWithCta = ({
  theme = defaultTheme,
  heading = "Features",
  imageSrc1 = "https://placehold.co/400x250?text=Feature+1",
  imageAlt1 = "",
  title1 = "Feature One",
  desc1 = "Description for feature one.",
  imageSrc2 = "https://placehold.co/400x250?text=Feature+2",
  imageAlt2 = "",
  title2 = "Feature Two",
  desc2 = "Description for feature two.",
  ctaLabel = "View All",
  ctaHref = "#",
  variant = "default",
}: BentoGridWithCtaProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>bento grid cta</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
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
        <BentoGridWithCtaSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          desc1={desc1}
          desc2={desc2}
          heading={heading}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          theme={theme}
          title1={title1}
          title2={title2}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
BentoGridWithCta.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "View All Features",
  desc1: "Powerful features to boost productivity.",
  desc2: "Seamless integration with your tools.",
  heading: "Key Features",
  imageAlt1: "feature 1",
  imageAlt2: "feature 2",
  imageSrc1: "https://placehold.co/400x250?text=Productivity",
  imageSrc2: "https://placehold.co/400x250?text=Integration",
  theme: defaultTheme,
  title1: "Productivity",
  title2: "Integration",
  variant: "default",
} satisfies BentoGridWithCtaProps;
