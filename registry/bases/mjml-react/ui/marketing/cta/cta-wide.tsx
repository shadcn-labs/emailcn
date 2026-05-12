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

export type CTAWideVariant = "default" | "slanted-left" | "slanted-right";

export interface CTAWideProps {
  theme?: EmailThemeTokens;
  heading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: CTAWideVariant;
}

const CTAWideSection = ({
  ctaHref,
  ctaLabel,
  heading,
  theme,
  variant,
}: {
  ctaHref: string;
  ctaLabel: string;
  heading: string;
  theme: EmailThemeTokens;
  variant: CTAWideVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackgroundMuted}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeHeading}
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingLg ?? "32px"}
      >
        {heading}
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

export const CTAWide = ({
  theme = defaultTheme,
  heading = "Start Building Today",
  ctaLabel = "Get Started Free",
  ctaHref = "#",
  variant = "default",
}: CTAWideProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>cta wide</MjmlPreview>
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
        <CTAWideSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

CTAWide.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Get Started Free",
  heading: "Start Building Today",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAWideProps;
