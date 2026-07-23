import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  HeroEmailShell,
  NativeBackgroundHero,
} from "@/registry/bases/mjml-react/ui/marketing/hero/hero-shared";

export type HeroWithOverlayedContentVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithOverlayedContentProps {
  theme?: EmailThemeTokens;
  eyebrow?: string;
  headingAccent?: string;
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
  slantColor?: string;
  textColor?: string;
  accentColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: HeroWithOverlayedContentVariant;
}

const assetRoot = "https://emailcn.vercel.app/api/email-assets";

export const HeroWithOverlayedContentSection = ({
  accentColor = "#D34A36",
  buttonBackgroundColor = "#D34A36",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Make an offer now",
  description = "Step back into the golden era of hoops style with the iconic Blazer Mid '77 Vintage. A timeless mix of crisp white leather, retro suede accents, and that bold Swoosh, this pair delivers heritage with a modern edge.",
  eyebrow = "Fresh Drop",
  heading = "Mid ‘77 Vintage",
  headingAccent = "Blazer",
  imageSrc = `${assetRoot}/hero/overlayed/hero-overlayed-bg.jpg`,
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = `${assetRoot}/emailcn-insignia-mono.png`,
  slantColor = "#fffffe",
  subheading = "Only One Pair Left",
  textColor = "#030712",
  variant = "default",
}: Omit<HeroWithOverlayedContentProps, "theme">) => (
  <NativeBackgroundHero
    align="center"
    backgroundColor="#fffffe"
    backgroundImageSrc={imageSrc}
    buttonBackgroundColor={buttonBackgroundColor}
    buttonTextColor={buttonTextColor}
    contentBackgroundColor={slantColor}
    contentRight={variant === "slanted-right"}
    ctaHref={ctaHref}
    ctaLabel={ctaLabel}
    description={description}
    eyebrow={eyebrow}
    heading={`${headingAccent} ${heading}`}
    logoAlt={logoAlt}
    logoHref={logoHref}
    logoSrc={logoSrc}
    padding="244px 44px 44px"
    subheading={subheading}
    textColor={variant === "default" ? textColor : accentColor}
  />
);

export const HeroWithOverlayedContent = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeroWithOverlayedContentProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Blazer Mid ‘77 Vintage"
    theme={theme}
  >
    <HeroWithOverlayedContentSection {...props} />
  </HeroEmailShell>
);

HeroWithOverlayedContent.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithOverlayedContentProps;
