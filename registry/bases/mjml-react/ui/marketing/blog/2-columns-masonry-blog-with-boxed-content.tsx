/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
  MjmlButton,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type BlogCtaBannerVariant = "default" | "slanted-left" | "slanted-right";
export interface BlogCtaBannerProps {
  theme?: EmailThemeTokens;
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: BlogCtaBannerVariant;
}
const BlogCtaBannerSection = ({
  ctaHref,
  ctaLabel,
  description,
  heading,
  theme,
  variant,
}: {
  ctaHref: string;
  ctaLabel: string;
  description: string;
  heading: string;
  theme: EmailThemeTokens;
  variant: BlogCtaBannerVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackgroundMuted}
    borderRadius={theme.borderRadius}
    padding={theme.spacingXl ?? "24px"}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorPrimary}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm}
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase ?? "8px"}
      >
        {heading}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "8px"}
      >
        {description}
      </MjmlText>
      {ctaLabel && ctaHref ? (
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
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);
export const TwoColumnsMasonryBlogWithBoxedContent = ({
  theme = defaultTheme,
  heading = "Subscribe",
  description = "Get the latest posts delivered to your inbox.",
  ctaLabel = "Subscribe Now",
  ctaHref = "#",
  variant = "default",
}: BlogCtaBannerProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>blog cta banner</MjmlPreview>
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
        <BlogCtaBannerSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          description={description}
          heading={heading}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
TwoColumnsMasonryBlogWithBoxedContent.PreviewProps = {
  ctaHref: "https://example.com/subscribe",
  ctaLabel: "Subscribe Now",
  description: "Get the latest posts delivered to your inbox every week.",
  heading: "NEWSLETTER",
  theme: defaultTheme,
  variant: "default",
} satisfies BlogCtaBannerProps;
