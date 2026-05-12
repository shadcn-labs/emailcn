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

export type CTAFilledVariant = "default" | "slanted-left" | "slanted-right";

export interface CTAFilledProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: CTAFilledVariant;
}

const CTAFilledSection = ({
  ctaHref,
  ctaLabel,
  heading,
  subtext,
  theme,
  variant,
}: {
  ctaHref: string;
  ctaLabel: string;
  heading: string;
  subtext: string;
  theme: EmailThemeTokens;
  variant: CTAFilledVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorPrimary}
    borderRadius={theme.borderRadius}
    padding={theme.spacingXl ?? "24px"}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorPrimaryForeground}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeXl ?? "20px"}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {heading}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorPrimaryForeground}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase ?? "14px"}
        paddingBottom={theme.spacingLg ?? "24px"}
      >
        {subtext}
      </MjmlText>
      {ctaLabel && ctaHref ? (
        <MjmlButton
          align="center"
          backgroundColor={theme.colorPrimaryForeground}
          borderRadius={theme.borderRadius}
          color={theme.colorPrimary}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "14px"}
          fontWeight={theme.fontWeightMedium}
          href={ctaHref}
          innerPadding={`${theme.spacingBase ?? "16px"} ${theme.spacingLg ?? "24px"}`}
        >
          {ctaLabel}
        </MjmlButton>
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

export const CtaWithShiftedImages = ({
  theme = defaultTheme,
  heading = "Ready to get started?",
  subtext = "Join thousands of happy users.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "default",
}: CTAFilledProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>cta filled</MjmlPreview>
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
        <CTAFilledSection
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

CtaWithShiftedImages.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Start Building Free",
  heading: "Ready to get started?",
  subtext: "Join 10,000+ developers building with our tools.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAFilledProps;
