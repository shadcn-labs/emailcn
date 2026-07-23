import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  HeroEmailShell,
  NativeBackgroundHero,
} from "@/registry/bases/mjml-react/ui/marketing/hero/hero-shared";

export type HeroBlockWithBleedVariant =
  | "left-centered"
  | "left-top"
  | "left-bottom"
  | "left-flush-vertical"
  | "right-centered"
  | "right-top"
  | "right-bottom"
  | "right-flush-vertical";

export interface HeroBlockWithBleedProps {
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
  variant?: HeroBlockWithBleedVariant;
}

const assetRoot = "https://emailcn.vercel.app/api/email-assets";

export const HeroBlockWithBleedSection = ({
  backgroundColor = "#030712",
  backgroundImageSrc = `${assetRoot}/hero/block-with-bleed-bg.jpg`,
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Discover how",
  description = "Where golden dunes meet the distant peaks, nature speaks in silence. These fragile landscapes remind us how balance sustains beauty — and how every action we take can help protect it.",
  eyebrow = "Lush oasis, Our Wonderworld.",
  heading = "Preserve the planet we share",
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = `${assetRoot}/emailcn-logo-light.png`,
  overlayColor = "rgba(3, 7, 18, 0.8)",
  subheading = "Take action today.",
  textColor = "#f9fafb",
  variant = "left-centered",
}: Omit<HeroBlockWithBleedProps, "theme">) => (
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
    logoSrc={
      variant.endsWith("-top") || variant.endsWith("-flush-vertical")
        ? undefined
        : logoSrc
    }
    padding={variant.endsWith("-bottom") ? "160px 24px 24px" : "44px 24px"}
    subheading={subheading}
    textColor={textColor}
  />
);

export const HeroBlockWithBleed = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeroBlockWithBleedProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Preserve the planet we share"
    theme={theme}
  >
    <HeroBlockWithBleedSection {...props} />
  </HeroEmailShell>
);

HeroBlockWithBleed.PreviewProps = {
  theme: defaultTheme,
  variant: "left-centered",
} satisfies HeroBlockWithBleedProps;
