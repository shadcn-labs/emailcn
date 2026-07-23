import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  HeroEmailShell,
  NativeBackgroundHero,
} from "@/registry/bases/mjml-react/ui/marketing/hero/hero-shared";

export type HeroBlockOverlayVariant =
  | "left-centered"
  | "left-top"
  | "left-bottom"
  | "left-flush-vertical"
  | "right-centered"
  | "right-top"
  | "right-bottom"
  | "right-flush-vertical";

export interface HeroBlockOverlayProps {
  theme?: EmailThemeTokens;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImageSrc?: string;
  imageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  overlayColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: HeroBlockOverlayVariant;
}

const assetRoot = "https://emailcn.vercel.app/api/email-assets";

export const HeroBlockOverlaySection = (
  props: Omit<HeroBlockOverlayProps, "theme">
) => {
  const {
    backgroundColor,
    backgroundImageSrc,
    buttonBackgroundColor,
    buttonTextColor,
    ctaHref,
    ctaLabel,
    description,
    eyebrow,
    heading,
    logoAlt,
    logoHref,
    logoSrc,
    overlayColor,
    subheading,
    textColor,
    variant,
  } = {
    backgroundColor: "#030712",
    backgroundImageSrc: `${assetRoot}/hero/block-overlay-bg.jpg`,
    buttonBackgroundColor: "#4f46e5",
    buttonTextColor: "#fffffe",
    ctaHref: "https://example.com",
    ctaLabel: "Discover how",
    description:
      "SumUp is a global fintech leader transforming the way businesses accept payments. From mobile card readers to POS systems, we equip over 4 million merchants across 35+ countries with streamlined, secure tools that help them scale.",
    eyebrow: "Transaction fees as low as 0.89%",
    heading: "SumUp",
    logoAlt: "emailcn",
    logoHref: "https://example.com",
    logoSrc: `${assetRoot}/emailcn-logo-light.png`,
    overlayColor: "rgba(3, 7, 18, 0.8)",
    subheading: "Powering Modern Entrepreneurs",
    textColor: "#f9fafb",
    variant: "left-centered",
    ...props,
  };
  const hideLogo =
    variant.endsWith("-top") || variant.endsWith("-flush-vertical");
  let padding = "72px 44px";
  if (variant.endsWith("-top")) {
    padding = "44px";
  } else if (variant.endsWith("-bottom")) {
    padding = "120px 44px 44px";
  }

  return (
    <NativeBackgroundHero
      backgroundColor={backgroundColor}
      backgroundImageSrc={backgroundImageSrc}
      buttonBackgroundColor={buttonBackgroundColor}
      buttonTextColor={buttonTextColor}
      contentBackgroundColor={overlayColor}
      contentRight={variant.startsWith("right-")}
      ctaHref={ctaHref}
      ctaLabel={ctaLabel}
      description={description}
      eyebrow={eyebrow}
      heading={heading}
      logoAlt={logoAlt}
      logoHref={logoHref}
      logoSrc={hideLogo ? undefined : logoSrc}
      padding={padding}
      subheading={subheading}
      textColor={textColor}
    />
  );
};

export const HeroBlockOverlay = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeroBlockOverlayProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="SumUp"
    theme={theme}
  >
    <HeroBlockOverlaySection {...props} />
  </HeroEmailShell>
);

HeroBlockOverlay.PreviewProps = {
  theme: defaultTheme,
  variant: "left-centered",
} satisfies HeroBlockOverlayProps;
