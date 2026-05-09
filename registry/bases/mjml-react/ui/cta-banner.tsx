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

export interface CTABannerProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "filled" | "outline";
}

const ctaBannerStyles = (isFilled: boolean, theme: EmailThemeTokens) => {
  const primaryFg = theme.colorPrimaryForeground ?? "#ffffff";
  const border = theme.colorBorder ?? "#e5e7eb";
  return {
    boxBg: isFilled ? theme.colorPrimary : "transparent",
    boxBorder: isFilled ? "none" : `1px solid ${border}`,
    btnBg: isFilled ? primaryFg : theme.colorPrimary,
    btnFg: isFilled ? theme.colorPrimary : primaryFg,
    subColor: isFilled ? primaryFg : theme.colorTextMuted,
    titleColor: isFilled ? primaryFg : theme.colorText,
  };
};

const CTABannerSection = ({
  ctaHref,
  ctaLabel,
  heading,
  s,
  subtext,
  theme,
}: {
  ctaHref: string;
  ctaLabel: string;
  heading: string;
  s: ReturnType<typeof ctaBannerStyles>;
  subtext: string;
  theme: EmailThemeTokens;
}) => (
  <MjmlSection
    backgroundColor={s.boxBg}
    border={s.boxBorder}
    borderRadius={theme.borderRadius}
    padding={theme.spacingXl ?? "24px"}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={s.titleColor}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeXl ?? "20px"}
        fontWeight={theme.fontWeightMedium ?? "500"}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {heading}
      </MjmlText>
      <MjmlText
        align="center"
        color={s.subColor}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase ?? "14px"}
        paddingBottom={theme.spacingLg ?? "24px"}
      >
        {subtext}
      </MjmlText>
      {ctaLabel && ctaHref ? (
        <MjmlButton
          align="center"
          backgroundColor={s.btnBg}
          borderRadius={theme.borderRadius}
          color={s.btnFg}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "14px"}
          fontWeight={theme.fontWeightMedium ?? "500"}
          href={ctaHref}
          innerPadding={`${theme.spacingBase ?? "16px"} ${theme.spacingLg ?? "24px"}`}
        >
          {ctaLabel}
        </MjmlButton>
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

export const CTABanner = ({
  theme = defaultTheme,
  heading = "Get Started",
  subtext = "Join thousands of happy users.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "filled",
}: CTABannerProps) => {
  const isFilled = variant === "filled";
  const s = ctaBannerStyles(isFilled, theme);

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>cta-banner</MjmlPreview>
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
          <CTABannerSection
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            heading={heading}
            s={s}
            subtext={subtext}
            theme={theme}
          />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

CTABanner.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Start Building Free",
  heading: "Ready to get started?",
  subtext: "Join 10,000+ developers building with our tools.",
  theme: defaultTheme,
  variant: "filled",
} satisfies CTABannerProps;
