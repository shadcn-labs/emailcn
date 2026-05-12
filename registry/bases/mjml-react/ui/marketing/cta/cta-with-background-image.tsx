/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type CTAAnnouncementVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CTAAnnouncementProps {
  theme?: EmailThemeTokens;
  badge?: string;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: CTAAnnouncementVariant;
}

const CTAAnnouncementSection = ({
  badge,
  ctaHref,
  ctaLabel,
  heading,
  subtext,
  theme,
  variant,
}: {
  badge: string;
  ctaHref: string;
  ctaLabel: string;
  heading: string;
  subtext: string;
  theme: EmailThemeTokens;
  variant: CTAAnnouncementVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorPrimary}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {badge}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeXl ?? "20px"}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {heading}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase ?? "14px"}
        paddingBottom={theme.spacingLg ?? "24px"}
      >
        {subtext}
      </MjmlText>
      {ctaLabel && ctaHref ? (
        <MjmlButton
          align="center"
          backgroundColor={theme.colorPrimary}
          borderRadius={theme.borderRadius}
          color={theme.colorPrimaryForeground}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "14px"}
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

export const CtaWithBackgroundImage = ({
  theme = defaultTheme,
  badge = "NEW",
  heading = "Introducing Our Latest Feature",
  subtext = "Built to help you move faster and ship better.",
  ctaLabel = "Learn More",
  ctaHref = "#",
  variant = "default",
}: CTAAnnouncementProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>cta announcement</MjmlPreview>
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
        <CTAAnnouncementSection
          badge={badge}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          subtext={subtext}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

CtaWithBackgroundImage.PreviewProps = {
  badge: "NEW",
  ctaHref: "https://example.com/feature",
  ctaLabel: "Learn More",
  heading: "Introducing Our Latest Feature",
  subtext: "Built to help you move faster and ship better.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAAnnouncementProps;
