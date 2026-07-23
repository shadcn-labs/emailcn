import { MjmlColumn, MjmlImage, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  HeroCopy,
  HeroEmailShell,
} from "@/registry/bases/mjml-react/ui/marketing/hero/hero-shared";

export type HeroWithSlantedSplitVariant =
  | "left-slanted-down"
  | "left-slanted-up"
  | "right-slanted-down"
  | "right-slanted-up";

export interface HeroWithSlantedSplitProps {
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
  imageBackgroundColor?: string;
  contentBackgroundColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: HeroWithSlantedSplitVariant;
}

const assetRoot = "https://emailcn.vercel.app/api/email-assets";

export const HeroWithSlantedSplitSection = ({
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  contentBackgroundColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Discover now",
  description = "Celebrating creativity, community, and culture in every edition. Bob Cut brings stories to life through design and narrative — a modern take on the timeless power of print.",
  eyebrow = "Independent Publishing",
  heading = "Bob Cut",
  imageAlt = "Independent publishing photography",
  imageSrc = `${assetRoot}/hero/split-slanted-bg.jpg`,
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = `${assetRoot}/emailcn-logo-light.png`,
  subheading = "January Edition",
  textColor = "#030712",
  variant = "left-slanted-down",
}: Omit<HeroWithSlantedSplitProps, "theme">) => {
  const imageLeft = variant.startsWith("left-");
  const image = (
    <MjmlColumn padding="0" verticalAlign="middle" width="48%">
      <MjmlImage alt={imageAlt} padding="0" src={imageSrc} width="288px" />
    </MjmlColumn>
  );
  const copy = (
    <MjmlColumn
      backgroundColor={contentBackgroundColor}
      padding="44px 24px"
      verticalAlign="middle"
      width="52%"
    >
      <HeroCopy
        buttonBackgroundColor={buttonBackgroundColor}
        buttonTextColor={buttonTextColor}
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        description={description}
        eyebrow={eyebrow}
        heading={heading}
        logoAlt={logoAlt}
        logoHref={logoHref}
        logoSrc={logoSrc}
        subheading={subheading}
        textColor={textColor}
      />
    </MjmlColumn>
  );

  return (
    <MjmlSection backgroundColor={contentBackgroundColor} padding="0">
      {imageLeft ? image : copy}
      {imageLeft ? copy : image}
    </MjmlSection>
  );
};

export const HeroWithSlantedSplit = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeroWithSlantedSplitProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Bob Cut"
    theme={theme}
  >
    <HeroWithSlantedSplitSection {...props} />
  </HeroEmailShell>
);

HeroWithSlantedSplit.PreviewProps = {
  theme: defaultTheme,
  variant: "left-slanted-down",
} satisfies HeroWithSlantedSplitProps;
