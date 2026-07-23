import {
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  HeroCopy,
  HeroEmailShell,
} from "@/registry/bases/mjml-react/ui/marketing/hero/hero-shared";

export type HeroWithOverlappedImageVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithOverlappedImageProps {
  theme?: EmailThemeTokens;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImageSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  contentBackgroundColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: HeroWithOverlappedImageVariant;
}

interface VariantPreset {
  backgroundImageSrc: string;
  contentBackgroundColor: string;
  description: string;
  eyebrow: string;
  heading: string;
  imageSrc: string;
  mutedTextColor: string;
  subheading: string;
  textColor: string;
  topSpacer: number;
}

const assetRoot = "https://emailcn.vercel.app/api/email-assets";

const variantPresets: Record<HeroWithOverlappedImageVariant, VariantPreset> = {
  default: {
    backgroundImageSrc: `${assetRoot}/hero/overlapped-image-bg.jpg`,
    contentBackgroundColor: "#000001",
    description:
      "Born on the curb and rebuilt in premium materials, Vault Old Skool delivers that unmistakable side-stripe style with modern comfort. Clean lines, easy colorways, and proven board feel: a timeless staple ready for your rotation.",
    eyebrow: "VANS",
    heading: "Vault Old Skool",
    imageSrc: `${assetRoot}/hero/overlapped-image.png`,
    mutedTextColor: "#d1d5db",
    subheading: "Classic skate icon, rebuilt for today.",
    textColor: "#f9fafb",
    topSpacer: 220,
  },
  "slanted-left": {
    backgroundImageSrc: `${assetRoot}/hero/overlapped-image-2-bg.jpg`,
    contentBackgroundColor: "#fffffe",
    description:
      "From trail to tide, GoPro 9.0 locks in buttery-smooth footage with advanced stabilization and crystal-clear detail. A rugged, waterproof build means fewer worries and more moments captured, while intuitive controls make quick work of clips and time-lapses. Mount it, tap record, and jump in.",
    eyebrow: "Introducing",
    heading: "Hero 9 5K Ultra HD",
    imageSrc: `${assetRoot}/hero/overlapped-image-2.png`,
    mutedTextColor: "#4b5563",
    subheading: "Stabilized action, simple controls.",
    textColor: "#030712",
    topSpacer: 180,
  },
  "slanted-right": {
    backgroundImageSrc: `${assetRoot}/hero/overlapped-image-3-bg.jpg`,
    contentBackgroundColor: "#000001",
    description:
      "Hydrate without the hassle. This vacuum-insulated stainless bottle keeps drinks cold for hours and hot through long commutes, with a leak-proof lid that tosses easily into bags. A powder-coat finish resists scratches, the slim profile fits cup holders, and the wide mouth makes cleaning simple.",
    eyebrow: "Made in Sweden",
    heading: "Bluewater",
    imageSrc: `${assetRoot}/hero/overlapped-image-3.png`,
    mutedTextColor: "#d1d5db",
    subheading: "Insulated bottle for all-day carry.",
    textColor: "#f9fafb",
    topSpacer: 180,
  },
};

type SectionProps = Omit<HeroWithOverlappedImageProps, "theme">;

export const HeroWithOverlappedImageSection = ({
  backgroundImageSrc,
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  contentBackgroundColor,
  ctaHref = "https://example.com",
  ctaLabel = "Discover now",
  description,
  eyebrow,
  heading,
  imageAlt = "Hero image",
  imageSrc,
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = `${assetRoot}/emailcn-logo-light.png`,
  mutedTextColor,
  subheading,
  textColor,
  variant = "default",
}: SectionProps) => {
  const preset = variantPresets[variant];
  const resolvedContentBackgroundColor =
    contentBackgroundColor ?? preset.contentBackgroundColor;

  return (
    <>
      <MjmlSection
        backgroundPosition="center top"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundUrl={backgroundImageSrc ?? preset.backgroundImageSrc}
        padding="40px 48px 0"
      >
        <MjmlColumn>
          <MjmlImage
            align="center"
            alt={logoAlt}
            href={logoHref}
            padding="0"
            src={logoSrc}
            width="165px"
          />
          <MjmlSpacer height={`${preset.topSpacer}px`} />
          <MjmlImage
            align="center"
            alt={imageAlt}
            padding="0"
            src={imageSrc ?? preset.imageSrc}
            width="455px"
          />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection
        backgroundColor={resolvedContentBackgroundColor}
        padding="40px 48px 44px"
      >
        <MjmlColumn>
          <HeroCopy
            align="center"
            buttonBackgroundColor={buttonBackgroundColor}
            buttonTextColor={buttonTextColor}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            description={description ?? preset.description}
            descriptionColor={mutedTextColor ?? preset.mutedTextColor}
            eyebrow={eyebrow ?? preset.eyebrow}
            heading={heading ?? preset.heading}
            subheading={subheading ?? preset.subheading}
            textColor={textColor ?? preset.textColor}
          />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};

export const HeroWithOverlappedImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: HeroWithOverlappedImageProps) => {
  const preset = variantPresets[variant];

  return (
    <HeroEmailShell
      pageBackgroundColor={pageBackgroundColor}
      preview={`${props.eyebrow ?? preset.eyebrow} — ${props.heading ?? preset.heading}`}
      theme={theme}
    >
      <HeroWithOverlappedImageSection {...props} variant={variant} />
    </HeroEmailShell>
  );
};

HeroWithOverlappedImage.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithOverlappedImageProps;
