import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  HeroEmailShell,
  NativeBackgroundHero,
} from "@/registry/bases/mjml-react/ui/marketing/hero/hero-shared";

export type HeroOverlayedSplitVariant = "overlay-left" | "overlay-right";

export interface HeroOverlayedSplitProps {
  theme?: EmailThemeTokens;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  overlayColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: HeroOverlayedSplitVariant;
}

const assetRoot = "https://emailcn.vercel.app/api/email-assets";

export const HeroOverlayedSplitSection = ({
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Discover now",
  description = "From the first pour to the final sip, coffee is more than a drink — it’s a pause, a rhythm, a story in every cup. Discover how moments of calm begin with Sarina.",
  eyebrow = "Brew Stories",
  heading = "The Art of the Morning Ritual",
  imageSrc = `${assetRoot}/hero/overlayed-split-bg.jpg`,
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = `${assetRoot}/emailcn-logo-light.png`,
  overlayColor = "rgba(3, 7, 18, 0.8)",
  subheading = "January 31, 2025",
  textColor = "#f9fafb",
  variant = "overlay-left",
}: Omit<HeroOverlayedSplitProps, "theme">) => (
  <NativeBackgroundHero
    backgroundColor="#030712"
    backgroundImageSrc={imageSrc}
    buttonBackgroundColor={buttonBackgroundColor}
    buttonTextColor={buttonTextColor}
    contentBackgroundColor={overlayColor}
    contentRight={variant === "overlay-right"}
    ctaHref={ctaHref}
    ctaLabel={ctaLabel}
    description={description}
    eyebrow={eyebrow}
    heading={heading}
    logoAlt={logoAlt}
    logoHref={logoHref}
    logoSrc={logoSrc}
    padding="44px 24px"
    subheading={subheading}
    textColor={textColor}
  />
);

export const HeroOverlayedSplit = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeroOverlayedSplitProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="The Art of the Morning Ritual"
    theme={theme}
  >
    <HeroOverlayedSplitSection {...props} />
  </HeroEmailShell>
);

HeroOverlayedSplit.PreviewProps = {
  theme: defaultTheme,
  variant: "overlay-left",
} satisfies HeroOverlayedSplitProps;
