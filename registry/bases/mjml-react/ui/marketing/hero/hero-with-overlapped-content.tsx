import { MjmlColumn, MjmlImage, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  HeroCopy,
  HeroEmailShell,
} from "@/registry/bases/mjml-react/ui/marketing/hero/hero-shared";

export type HeroWithOverlappedContentVariant =
  | "basic"
  | "reversed"
  | "basic-with-gradient"
  | "reversed-with-gradient";

export interface HeroWithOverlappedContentProps {
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
  contentBackgroundColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: HeroWithOverlappedContentVariant;
}

interface VariantPreset {
  backgroundImageSrc: string;
  backgroundPosition: "bottom" | "top";
  contentBackgroundColor: string;
  description: string;
  eyebrow: string;
  heading: string;
  imageAlt: string;
  subheading: string;
  textColor: string;
}

const assetRoot = "https://emailcn.vercel.app/api/email-assets";

const variantPresets: Record<HeroWithOverlappedContentVariant, VariantPreset> =
  {
    basic: {
      backgroundImageSrc: `${assetRoot}/hero/overlapped-content-bg-1.jpg`,
      backgroundPosition: "top",
      contentBackgroundColor: "#fffffe",
      description:
        "Every vein tells a story of adaptation and survival. Explore the microscopic architecture of leaves — where biology, design, and evolution converge in perfect symmetry.",
      eyebrow: "NATURE COLLECTION",
      heading: "Geometry of life",
      imageAlt: "Microscopic geometry of a leaf",
      subheading: "Edition No.5",
      textColor: "#030712",
    },
    "basic-with-gradient": {
      backgroundImageSrc: `${assetRoot}/hero/overlapped-content-bg-3.jpg`,
      backgroundPosition: "top",
      contentBackgroundColor: "#fffffe",
      description:
        "Vast golden sands meet rugged mountain peaks — where silence speaks louder than words. Explore landscapes shaped by time, and uncover the raw beauty of the desert wilderness waiting to be found.",
      eyebrow: "Morocco",
      heading: "Into the dunes",
      imageAlt: "Golden dunes and mountain peaks in Morocco",
      subheading: "Edition No.5",
      textColor: "#030712",
    },
    reversed: {
      backgroundImageSrc: `${assetRoot}/hero/overlapped-content-bg-2.jpg`,
      backgroundPosition: "bottom",
      contentBackgroundColor: "#fffffe",
      description:
        "Delve into the intricate world of fungi — the unseen architects of ecosystems. Explore how mycelial networks sustain life, recycle nutrients, and reveal the complexity of Earth’s natural systems.",
      eyebrow: "Microbiology in Motion",
      heading: "Nature’s hidden networks",
      imageAlt: "Fungal network in a forest",
      subheading: "Edition No.5",
      textColor: "#030712",
    },
    "reversed-with-gradient": {
      backgroundImageSrc: `${assetRoot}/hero/overlapped-content-bg-4.jpg`,
      backgroundPosition: "bottom",
      contentBackgroundColor: "#030712",
      description:
        "Step into a world of untouched beauty and icy grandeur. From towering glaciers to vast, silent expanses, explore the last great wilderness on Earth. Begin your Antarctic adventure today.",
      eyebrow: "Journey to the edge of the earth",
      heading: "Antarctica",
      imageAlt: "Glacial wilderness in Antarctica",
      subheading: "Edition No.5",
      textColor: "#f9fafb",
    },
  };

type SectionProps = Omit<HeroWithOverlappedContentProps, "theme">;

export const HeroWithOverlappedContentSection = (props: SectionProps) => {
  const {
    backgroundImageSrc,
    buttonBackgroundColor,
    buttonTextColor,
    contentBackgroundColor,
    ctaHref,
    ctaLabel,
    description,
    eyebrow,
    heading,
    imageAlt: _imageAlt,
    logoAlt,
    logoHref,
    logoSrc,
    subheading,
    textColor,
    variant,
  } = {
    buttonBackgroundColor: "#4f46e5",
    buttonTextColor: "#fffffe",
    ctaHref: "https://example.com",
    ctaLabel: "Discover now",
    logoAlt: "emailcn",
    logoHref: "https://example.com",
    logoSrc: `${assetRoot}/emailcn-logo-light.png`,
    variant: "basic" as HeroWithOverlappedContentVariant,
    ...props,
  };

  const preset = variantPresets[variant];
  const isReversed = variant.startsWith("reversed");

  return (
    <>
      {isReversed ? (
        <MjmlSection
          backgroundColor={
            contentBackgroundColor ?? preset.contentBackgroundColor
          }
          padding="44px 48px"
        >
          <MjmlColumn>
            <HeroCopy
              align="center"
              buttonBackgroundColor={buttonBackgroundColor}
              buttonTextColor={buttonTextColor}
              ctaHref={ctaHref}
              ctaLabel={ctaLabel}
              description={description ?? preset.description}
              eyebrow={eyebrow ?? preset.eyebrow}
              heading={heading ?? preset.heading}
              subheading={subheading ?? preset.subheading}
              textColor={textColor ?? preset.textColor}
            />
          </MjmlColumn>
        </MjmlSection>
      ) : null}
      <MjmlSection
        backgroundPosition={preset.backgroundPosition}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundUrl={backgroundImageSrc ?? preset.backgroundImageSrc}
        padding={isReversed ? "244px 48px 40px" : "40px 48px 244px"}
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
        </MjmlColumn>
      </MjmlSection>
      {isReversed ? null : (
        <MjmlSection
          backgroundColor={
            contentBackgroundColor ?? preset.contentBackgroundColor
          }
          padding="44px 48px"
        >
          <MjmlColumn>
            <HeroCopy
              align="center"
              buttonBackgroundColor={buttonBackgroundColor}
              buttonTextColor={buttonTextColor}
              ctaHref={ctaHref}
              ctaLabel={ctaLabel}
              description={description ?? preset.description}
              eyebrow={eyebrow ?? preset.eyebrow}
              heading={heading ?? preset.heading}
              subheading={subheading ?? preset.subheading}
              textColor={textColor ?? preset.textColor}
            />
          </MjmlColumn>
        </MjmlSection>
      )}
    </>
  );
};

export const HeroWithOverlappedContent = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "basic",
  ...props
}: HeroWithOverlappedContentProps) => {
  const preset = variantPresets[variant];

  return (
    <HeroEmailShell
      pageBackgroundColor={pageBackgroundColor}
      preview={props.heading ?? preset.heading}
      theme={theme}
    >
      <HeroWithOverlappedContentSection {...props} variant={variant} />
    </HeroEmailShell>
  );
};

HeroWithOverlappedContent.PreviewProps = {
  theme: defaultTheme,
  variant: "basic",
} satisfies HeroWithOverlappedContentProps;
