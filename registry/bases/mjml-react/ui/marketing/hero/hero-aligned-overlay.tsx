import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  HeroEmailShell,
  NativeBackgroundHero,
} from "@/registry/bases/mjml-react/ui/marketing/hero/hero-shared";

export type HeroAlignedOverlayVariant =
  | "content-left"
  | "content-left-reversed"
  | "content-right"
  | "content-right-reversed";

export interface HeroAlignedOverlayProps {
  theme?: EmailThemeTokens;
  eyebrow?: string;
  headingStart?: string;
  headingEmphasis?: string;
  headingEnd?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: HeroAlignedOverlayVariant;
}

const assetRoot = "https://emailcn.vercel.app/api/email-assets";
const variantImages: Record<HeroAlignedOverlayVariant, string> = {
  "content-left": `${assetRoot}/hero/aligned-overlay-bg-1.png`,
  "content-left-reversed": `${assetRoot}/hero/aligned-overlay-bg-4.png`,
  "content-right": `${assetRoot}/hero/aligned-overlay-bg-2.png`,
  "content-right-reversed": `${assetRoot}/hero/aligned-overlay-bg-3.png`,
};

export const HeroAlignedOverlaySection = ({
  backgroundColor = "#030712",
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Discover now",
  description = "Plan with confidence, explore with ease, and make every journey uniquely yours. Our curated guides, travel tools, and insider tips are designed to inspire your next adventure — all in one spot.",
  eyebrow = "Discover the world your way",
  headingEmphasis = "unforgettable",
  headingEnd = "escape",
  headingStart = "Your next",
  imageSrc,
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = `${assetRoot}/emailcn-logo-light.png`,
  textColor = "#f9fafb",
  variant = "content-left",
}: Omit<HeroAlignedOverlayProps, "theme">) => (
  <NativeBackgroundHero
    backgroundColor={backgroundColor}
    backgroundImageSrc={imageSrc ?? variantImages[variant]}
    buttonBackgroundColor={buttonBackgroundColor}
    buttonTextColor={buttonTextColor}
    contentRight={variant.startsWith("content-right")}
    ctaHref={ctaHref}
    ctaLabel={ctaLabel}
    description={description}
    eyebrow={eyebrow}
    heading={`${headingStart} ${headingEmphasis} ${headingEnd}`}
    logoAlt={logoAlt}
    logoHref={logoHref}
    logoSrc={logoSrc}
    padding="44px"
    subheading=""
    textColor={textColor}
  />
);

export const HeroAlignedOverlay = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeroAlignedOverlayProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Your next unforgettable escape"
    theme={theme}
  >
    <HeroAlignedOverlaySection {...props} />
  </HeroEmailShell>
);

HeroAlignedOverlay.PreviewProps = {
  theme: defaultTheme,
  variant: "content-left",
} satisfies HeroAlignedOverlayProps;
