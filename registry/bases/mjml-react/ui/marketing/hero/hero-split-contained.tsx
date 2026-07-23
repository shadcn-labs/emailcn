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

export type HeroSplitContainedVariant =
  | "single-image-left"
  | "single-image-right"
  | "square-images-left"
  | "square-images-right"
  | "portrait-top-left"
  | "portrait-top-right"
  | "portrait-bottom-left"
  | "portrait-bottom-right";

export interface HeroSplitContainedProps {
  theme?: EmailThemeTokens;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  price?: string;
  ctaLabel?: string;
  ctaHref?: string;
  primaryImageSrc?: string;
  primaryImageAlt?: string;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: HeroSplitContainedVariant;
}

const assetRoot = "https://emailcn.vercel.app/api/email-assets";

const presets = {
  portraitBottom: {
    backgroundColor: "#030712",
    ctaLabel: "Book a table now",
    description:
      "Fluffy steamed buns filled with rich, savory flavors and made fresh daily. A taste of authentic street food, crafted with passion and served with warmth, right in the heart of London.",
    eyebrow: "Taiwanese Steamed Shop",
    heading: "Gua Bao",
    logoSrc: `${assetRoot}/emailcn-logo-light.png`,
    primaryImageSrc: `${assetRoot}/hero/split-contained-landscape-top.jpg`,
    secondaryImageSrc: `${assetRoot}/hero/split-contained-portrait-bottom.jpg`,
    subheading: "53 Lexington St. London",
    textColor: "#f9fafb",
  },
  portraitTop: {
    backgroundColor: "#fffffe",
    ctaLabel: "Discover now",
    description:
      "Handcrafted blends made with care, bottled to preserve freshness and flavor. A perfect balance of tradition and quality, designed to bring a touch of refinement to your everyday rituals.",
    eyebrow: "Es Kopi Susu",
    heading: "Sarina",
    logoSrc: `${assetRoot}/emailcn-logo.png`,
    primaryImageSrc: `${assetRoot}/hero/split-contained-portrait-top.jpg`,
    secondaryImageSrc: `${assetRoot}/hero/split-contained-landscape-bottom.jpg`,
    subheading: "Americano Grape Fruit",
    textColor: "#030712",
  },
  single: {
    backgroundColor: "#fffffe",
    ctaLabel: "Starts at $12.99",
    description:
      "A refreshing blend of cooling salt and soothing vanilla, this toothpaste brings a clean, calming experience to your everyday ritual. Gentle yet effective, it's designed to leave your smile brighter.",
    eyebrow: "Toothpaste",
    heading: "Salt.",
    logoSrc: `${assetRoot}/emailcn-logo.png`,
    primaryImageSrc: `${assetRoot}/hero/split-contained-bg.jpg`,
    secondaryImageSrc: "",
    subheading: "Dusk | French Vanilla",
    textColor: "#030712",
  },
  square: {
    backgroundColor: "#030712",
    ctaLabel: "Discover now",
    description:
      "A targeted solution that works deep to unclog pores, reduce excess oil, and calm irritation. Lightweight and powerful, this formula supports clearer, healthier-looking skin",
    eyebrow: "THE",
    heading: "Ordinary.",
    logoSrc: `${assetRoot}/emailcn-logo-light.png`,
    primaryImageSrc: `${assetRoot}/hero/split-contained-square-1.jpg`,
    secondaryImageSrc: `${assetRoot}/hero/split-contained-square-2.jpg`,
    subheading: "For blemish-prone skin",
    textColor: "#f9fafb",
  },
};

const getPreset = (variant: HeroSplitContainedVariant) => {
  if (variant.startsWith("single-")) {
    return presets.single;
  }
  if (variant.startsWith("square-")) {
    return presets.square;
  }
  return variant.startsWith("portrait-bottom-")
    ? presets.portraitBottom
    : presets.portraitTop;
};

export const HeroSplitContainedSection = (
  props: Omit<HeroSplitContainedProps, "theme">
) => {
  const {
    backgroundColor,
    buttonBackgroundColor,
    buttonTextColor,
    ctaHref,
    ctaLabel,
    description,
    eyebrow,
    heading,
    logoAlt,
    logoSrc,
    primaryImageAlt,
    primaryImageSrc,
    secondaryImageAlt,
    secondaryImageSrc,
    subheading,
    textColor,
    variant,
  } = {
    buttonBackgroundColor: "#4f46e5",
    buttonTextColor: "#fffffe",
    ctaHref: "https://example.com",
    logoAlt: "emailcn",
    primaryImageAlt: "",
    secondaryImageAlt: "",
    variant: "single-image-left" as HeroSplitContainedVariant,
    ...props,
  };

  const preset = getPreset(variant);
  const imageLeft = variant.endsWith("-left");
  const resolvedBackground = backgroundColor ?? preset.backgroundColor;
  const image = (
    <MjmlColumn padding="0" verticalAlign="top" width="50%">
      <MjmlImage
        alt={primaryImageAlt}
        borderRadius="4px"
        padding="0"
        src={primaryImageSrc ?? preset.primaryImageSrc}
        width="264px"
      />
      {(secondaryImageSrc ?? preset.secondaryImageSrc) ? (
        <>
          <MjmlSpacer height="24px" />
          <MjmlImage
            alt={secondaryImageAlt}
            borderRadius="4px"
            padding="0"
            src={secondaryImageSrc ?? preset.secondaryImageSrc}
            width="264px"
          />
        </>
      ) : null}
    </MjmlColumn>
  );
  const content = (
    <MjmlColumn padding="24px" verticalAlign="middle" width="50%">
      <HeroCopy
        buttonBackgroundColor={buttonBackgroundColor}
        buttonTextColor={buttonTextColor}
        ctaHref={ctaHref}
        ctaLabel={ctaLabel ?? preset.ctaLabel}
        description={description ?? preset.description}
        eyebrow={eyebrow ?? preset.eyebrow}
        heading={heading ?? preset.heading}
        logoAlt={logoAlt}
        logoSrc={logoSrc ?? preset.logoSrc}
        subheading={subheading ?? preset.subheading}
        textColor={textColor ?? preset.textColor}
      />
    </MjmlColumn>
  );

  return (
    <MjmlSection backgroundColor={resolvedBackground} padding="24px">
      {imageLeft ? image : content}
      {imageLeft ? content : image}
    </MjmlSection>
  );
};

export const HeroSplitContained = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeroSplitContainedProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview={props.heading ?? "Salt."}
    theme={theme}
  >
    <HeroSplitContainedSection {...props} />
  </HeroEmailShell>
);

HeroSplitContained.PreviewProps = {
  theme: defaultTheme,
  variant: "single-image-left",
} satisfies HeroSplitContainedProps;
