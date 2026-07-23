import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  HeroEmailShell,
  NativeBackgroundHero,
} from "@/registry/bases/mjml-react/ui/marketing/hero/hero-shared";

export type HeroWithOverlayGradientVariant =
  | "split-with-logo"
  | "split-no-logo"
  | "unified-with-logo"
  | "unified-no-logo";

export interface HeroWithOverlayGradientProps {
  theme?: EmailThemeTokens;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  price?: string;
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
  variant?: HeroWithOverlayGradientVariant;
}

const assetRoot = "https://emailcn.vercel.app/api/email-assets";

export const HeroWithOverlayGradientSection = ({
  backgroundColor = "#030712",
  backgroundImageSrc = `${assetRoot}/hero/overlay-gradient-bg.jpg`,
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Shop now",
  description = "Inspired by the granite giants of Yosemite, our latest pack is made for those who roam. Durable, weather-ready, and crafted for every climb, it’s built to carry your story, wherever the trail leads.",
  eyebrow = "Yosemite Collection",
  heading = "Forclaz 50L",
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = `${assetRoot}/emailcn-logo-light.png`,
  overlayColor = "rgba(3, 7, 18, 0.6)",
  price = "Starts at $129.99",
  subheading = "Easyfit Version",
  textColor = "#f9fafb",
  variant = "split-with-logo",
}: Omit<HeroWithOverlayGradientProps, "theme">) => (
  <NativeBackgroundHero
    align="center"
    backgroundColor={backgroundColor}
    backgroundImageSrc={backgroundImageSrc}
    buttonBackgroundColor={buttonBackgroundColor}
    buttonTextColor={buttonTextColor}
    contentBackgroundColor={
      variant.startsWith("split-") ? overlayColor : undefined
    }
    ctaHref={ctaHref}
    ctaLabel={ctaLabel}
    description={description}
    eyebrow={eyebrow}
    heading={heading}
    logoAlt={logoAlt}
    logoHref={logoHref}
    logoSrc={variant.endsWith("with-logo") ? logoSrc : undefined}
    padding="72px 44px"
    subheading={`${subheading} · ${price}`}
    textColor={textColor}
  />
);

export const HeroWithOverlayGradient = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeroWithOverlayGradientProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Forclaz 50L"
    theme={theme}
  >
    <HeroWithOverlayGradientSection {...props} />
  </HeroEmailShell>
);

HeroWithOverlayGradient.PreviewProps = {
  theme: defaultTheme,
  variant: "split-with-logo",
} satisfies HeroWithOverlayGradientProps;
