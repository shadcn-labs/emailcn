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

export interface HeroProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "center";
}

const HeroPrimaryCta = ({
  align,
  ctaHref,
  ctaLabel,
  theme,
}: {
  align: "center" | "left";
  ctaHref: string;
  ctaLabel: string;
  theme: EmailThemeTokens;
}) => (
  <MjmlButton
    align={align}
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

const HeroSection = ({
  align,
  ctaHref,
  ctaLabel,
  heading,
  py,
  subheading,
  theme,
}: {
  align: "center" | "left";
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  py: string;
  subheading: string;
  theme: EmailThemeTokens;
}) => (
  <MjmlSection backgroundColor={theme.colorBackground} padding={`${py} 0`}>
    <MjmlColumn>
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
        paddingBottom={theme.spacingXl}
      >
        {subheading}
      </MjmlText>
      {ctaLabel && ctaHref ? (
        <HeroPrimaryCta
          align={align}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          theme={theme}
        />
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

export const Hero = ({
  theme = defaultTheme,
  heading = "Welcome",
  subheading = "Get started with your account",
  ctaLabel = "Get Started",
  ctaHref = "#",
  align = "center",
}: HeroProps) => {
  const py = theme.spacingXl;

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>hero</MjmlPreview>
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
          <HeroSection
            align={align}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            heading={heading}
            py={py}
            subheading={subheading}
            theme={theme}
          />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

Hero.PreviewProps = {
  align: "center",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Welcome to Acme",
  subheading: "Build faster with the tools you love.",
  theme: defaultTheme,
} satisfies HeroProps;
