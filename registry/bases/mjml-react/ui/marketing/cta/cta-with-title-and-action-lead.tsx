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

export type CTASplitVariant = "default" | "slanted-left" | "slanted-right";

export interface CTASplitProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  variant?: CTASplitVariant;
}

const CTASplitSection = ({
  heading,
  primaryCtaHref,
  primaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
  subtext,
  theme,
  variant,
}: {
  heading: string;
  primaryCtaHref: string;
  primaryCtaLabel: string;
  secondaryCtaHref: string;
  secondaryCtaLabel: string;
  subtext: string;
  theme: EmailThemeTokens;
  variant: CTASplitVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
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
      {primaryCtaLabel && primaryCtaHref ? (
        <MjmlButton
          align="center"
          backgroundColor={theme.colorPrimary}
          borderRadius={theme.borderRadius}
          color={theme.colorPrimaryForeground}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "14px"}
          fontWeight={theme.fontWeightMedium}
          href={primaryCtaHref}
          innerPadding={`${theme.button.primary.paddingY} ${theme.button.primary.paddingX}`}
        >
          {primaryCtaLabel}
        </MjmlButton>
      ) : null}
      {secondaryCtaLabel && secondaryCtaHref ? (
        <MjmlButton
          align="center"
          backgroundColor={theme.button.secondary.backgroundColor}
          border={theme.button.secondary.border}
          borderRadius={theme.borderRadius}
          color={theme.button.secondary.color}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "14px"}
          fontWeight={theme.fontWeightMedium}
          href={secondaryCtaHref}
          innerPadding={`${theme.button.secondary.paddingY} ${theme.button.secondary.paddingX}`}
        >
          {secondaryCtaLabel}
        </MjmlButton>
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

export const CtaWithTitleAndActionLead = ({
  theme = defaultTheme,
  heading = "Two Options",
  subtext = "Choose the path that works best for you.",
  primaryCtaLabel = "Get Started",
  primaryCtaHref = "#",
  secondaryCtaLabel = "Learn More",
  secondaryCtaHref = "#",
  variant = "default",
}: CTASplitProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>cta split</MjmlPreview>
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
        <CTASplitSection
          heading={heading}
          primaryCtaHref={primaryCtaHref}
          primaryCtaLabel={primaryCtaLabel}
          secondaryCtaHref={secondaryCtaHref}
          secondaryCtaLabel={secondaryCtaLabel}
          subtext={subtext}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

CtaWithTitleAndActionLead.PreviewProps = {
  heading: "Ready to Begin?",
  primaryCtaHref: "https://example.com/signup",
  primaryCtaLabel: "Sign Up Free",
  secondaryCtaHref: "https://example.com/demo",
  secondaryCtaLabel: "Book a Demo",
  subtext:
    "Start building today with our free tier or book a personalized demo.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTASplitProps;
