import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const HeroEmailShell = ({
  children,
  pageBackgroundColor,
  preview,
  theme,
}: {
  children: ReactNode;
  pageBackgroundColor: string;
  preview: string;
  theme: EmailThemeTokens;
}) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{preview}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">{children}</MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
const HeroCopy = ({
  align = "left",
  buttonBackgroundColor,
  buttonTextColor,
  ctaHref,
  ctaLabel,
  description,
  descriptionColor,
  eyebrow,
  heading,
  logoAlt,
  logoHref,
  logoSrc,
  subheading,
  textColor,
}: {
  align?: "center" | "left" | "right";
  buttonBackgroundColor: string;
  buttonTextColor: string;
  ctaHref: string;
  ctaLabel: string;
  description: string;
  descriptionColor?: string;
  eyebrow: string;
  heading: string;
  logoAlt?: string;
  logoHref?: string;
  logoSrc?: string;
  subheading: string;
  textColor: string;
}) => (
  <>
    {logoSrc ? (
      <MjmlImage
        align={align}
        alt={logoAlt}
        href={logoHref}
        padding="0 0 32px"
        src={logoSrc}
        width="165px"
      />
    ) : null}
    <MjmlText
      align={align}
      color={textColor}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="500"
      lineHeight="24px"
      padding="0"
      textTransform="uppercase"
    >
      {eyebrow}
    </MjmlText>
    <MjmlText
      align={align}
      color={textColor}
      fontFamily={fontFamily}
      fontSize="48px"
      fontWeight="600"
      lineHeight="52px"
      padding="8px 0 0"
    >
      {heading}
    </MjmlText>
    <MjmlText
      align={align}
      color={textColor}
      fontFamily={fontFamily}
      fontSize="20px"
      fontWeight="500"
      lineHeight="28px"
      padding="8px 0 0"
    >
      {subheading}
    </MjmlText>
    <MjmlText
      align={align}
      color={descriptionColor ?? textColor}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="300"
      lineHeight="24px"
      padding="20px 0 0"
    >
      {description}
    </MjmlText>
    <MjmlButton
      align={align}
      backgroundColor={buttonBackgroundColor}
      borderRadius="8px"
      color={buttonTextColor}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="500"
      href={ctaHref}
      innerPadding="10px 22px"
      lineHeight="24px"
      padding="28px 0 0"
    >
      {ctaLabel}
    </MjmlButton>
  </>
);
type OverlapContentHero_HeroWithOverlappedContentVariant =
  | "basic"
  | "reversed"
  | "basic-with-gradient"
  | "reversed-with-gradient";
interface OverlapContentHero_HeroWithOverlappedContentProps {
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
  variant?: OverlapContentHero_HeroWithOverlappedContentVariant;
}
interface OverlapContentHero_VariantPreset {
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
const OverlapContentHero_assetRoot =
  "https://emailcn.vercel.app/api/email-assets";
const OverlapContentHero_variantPresets: Record<
  OverlapContentHero_HeroWithOverlappedContentVariant,
  OverlapContentHero_VariantPreset
> = {
  basic: {
    backgroundImageSrc: `${OverlapContentHero_assetRoot}/hero/overlapped-content-bg-1.jpg`,
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
    backgroundImageSrc: `${OverlapContentHero_assetRoot}/hero/overlapped-content-bg-3.jpg`,
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
    backgroundImageSrc: `${OverlapContentHero_assetRoot}/hero/overlapped-content-bg-2.jpg`,
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
    backgroundImageSrc: `${OverlapContentHero_assetRoot}/hero/overlapped-content-bg-4.jpg`,
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
type OverlapContentHero_SectionProps = Omit<
  OverlapContentHero_HeroWithOverlappedContentProps,
  "theme"
>;
const OverlapContentHero_HeroWithOverlappedContentSection = (
  props: OverlapContentHero_SectionProps
) => {
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
    logoSrc: `${OverlapContentHero_assetRoot}/emailcn-logo-light.png`,
    variant: "basic" as OverlapContentHero_HeroWithOverlappedContentVariant,
    ...props,
  };
  const preset = OverlapContentHero_variantPresets[variant];
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
const OverlapContentHero_HeroWithOverlappedContent = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "basic",
  ...props
}: OverlapContentHero_HeroWithOverlappedContentProps) => {
  const preset = OverlapContentHero_variantPresets[variant];
  return (
    <HeroEmailShell
      pageBackgroundColor={pageBackgroundColor}
      preview={props.heading ?? preset.heading}
      theme={theme}
    >
      <OverlapContentHero_HeroWithOverlappedContentSection
        {...props}
        variant={variant}
      />
    </HeroEmailShell>
  );
};
OverlapContentHero_HeroWithOverlappedContent.PreviewProps = {
  theme: defaultTheme,
  variant: "basic",
} satisfies OverlapContentHero_HeroWithOverlappedContentProps;
const __OverlapContentHero = OverlapContentHero_HeroWithOverlappedContent;
type OverlapImageHero_HeroWithOverlappedImageVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
interface OverlapImageHero_HeroWithOverlappedImageProps {
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
  variant?: OverlapImageHero_HeroWithOverlappedImageVariant;
}
interface OverlapImageHero_VariantPreset {
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
const OverlapImageHero_assetRoot =
  "https://emailcn.vercel.app/api/email-assets";
const OverlapImageHero_variantPresets: Record<
  OverlapImageHero_HeroWithOverlappedImageVariant,
  OverlapImageHero_VariantPreset
> = {
  default: {
    backgroundImageSrc: `${OverlapImageHero_assetRoot}/hero/overlapped-image-bg.jpg`,
    contentBackgroundColor: "#000001",
    description:
      "Born on the curb and rebuilt in premium materials, Vault Old Skool delivers that unmistakable side-stripe style with modern comfort. Clean lines, easy colorways, and proven board feel: a timeless staple ready for your rotation.",
    eyebrow: "VANS",
    heading: "Vault Old Skool",
    imageSrc: `${OverlapImageHero_assetRoot}/hero/overlapped-image.png`,
    mutedTextColor: "#d1d5db",
    subheading: "Classic skate icon, rebuilt for today.",
    textColor: "#f9fafb",
    topSpacer: 220,
  },
  "slanted-left": {
    backgroundImageSrc: `${OverlapImageHero_assetRoot}/hero/overlapped-image-2-bg.jpg`,
    contentBackgroundColor: "#fffffe",
    description:
      "From trail to tide, GoPro 9.0 locks in buttery-smooth footage with advanced stabilization and crystal-clear detail. A rugged, waterproof build means fewer worries and more moments captured, while intuitive controls make quick work of clips and time-lapses. Mount it, tap record, and jump in.",
    eyebrow: "Introducing",
    heading: "Hero 9 5K Ultra HD",
    imageSrc: `${OverlapImageHero_assetRoot}/hero/overlapped-image-2.png`,
    mutedTextColor: "#4b5563",
    subheading: "Stabilized action, simple controls.",
    textColor: "#030712",
    topSpacer: 180,
  },
  "slanted-right": {
    backgroundImageSrc: `${OverlapImageHero_assetRoot}/hero/overlapped-image-3-bg.jpg`,
    contentBackgroundColor: "#000001",
    description:
      "Hydrate without the hassle. This vacuum-insulated stainless bottle keeps drinks cold for hours and hot through long commutes, with a leak-proof lid that tosses easily into bags. A powder-coat finish resists scratches, the slim profile fits cup holders, and the wide mouth makes cleaning simple.",
    eyebrow: "Made in Sweden",
    heading: "Bluewater",
    imageSrc: `${OverlapImageHero_assetRoot}/hero/overlapped-image-3.png`,
    mutedTextColor: "#d1d5db",
    subheading: "Insulated bottle for all-day carry.",
    textColor: "#f9fafb",
    topSpacer: 180,
  },
};
type OverlapImageHero_SectionProps = Omit<
  OverlapImageHero_HeroWithOverlappedImageProps,
  "theme"
>;
const OverlapImageHero_HeroWithOverlappedImageSection = ({
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
  logoSrc = `${OverlapImageHero_assetRoot}/emailcn-logo-light.png`,
  mutedTextColor,
  subheading,
  textColor,
  variant = "default",
}: OverlapImageHero_SectionProps) => {
  const preset = OverlapImageHero_variantPresets[variant];
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
const OverlapImageHero_HeroWithOverlappedImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: OverlapImageHero_HeroWithOverlappedImageProps) => {
  const preset = OverlapImageHero_variantPresets[variant];
  return (
    <HeroEmailShell
      pageBackgroundColor={pageBackgroundColor}
      preview={`${props.eyebrow ?? preset.eyebrow} — ${props.heading ?? preset.heading}`}
      theme={theme}
    >
      <OverlapImageHero_HeroWithOverlappedImageSection
        {...props}
        variant={variant}
      />
    </HeroEmailShell>
  );
};
OverlapImageHero_HeroWithOverlappedImage.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies OverlapImageHero_HeroWithOverlappedImageProps;
const __OverlapImageHero = OverlapImageHero_HeroWithOverlappedImage;
export interface HeroContent {
  eyebrow?: string;
  heading?: string;
  emphasis?: string;
  subheading?: string;
  description?: string;
  price?: string;
  actions?: {
    href: string;
    label: string;
  }[];
}
export interface HeroImage {
  src: string;
  alt?: string;
}
export interface HeroBrand {
  logo: HeroImage;
  href?: string;
}
export interface OverlapHeroProps {
  theme?: Parameters<typeof __OverlapContentHero>[0]["theme"];
  content?: HeroContent;
  images?: HeroImage[];
  backgroundImage?: HeroImage;
  brand?: HeroBrand;
  target?: "content" | "image";
  direction?: "left" | "right";
  gradient?: boolean;
  slanted?: boolean;
}
const heroContentValues = (content: HeroContent | undefined) => {
  const { actions, description, eyebrow, heading, subheading } = content ?? {};
  const [action] = actions ?? [];
  return {
    ctaHref: action?.href,
    ctaLabel: action?.label,
    description,
    eyebrow,
    heading,
    subheading,
  };
};
const heroImageValues = (image: HeroImage | undefined) => ({
  alt: image?.alt,
  src: image?.src,
});
const heroBrandValues = (brand: HeroBrand | undefined) => {
  const { href, logo } = brand ?? {};
  return {
    logoAlt: logo?.alt,
    logoHref: href,
    logoSrc: logo?.src,
  };
};
export const OverlapHero = ({
  theme,
  content,
  images,
  backgroundImage,
  brand,
  target = "content",
  direction = "left",
  gradient = false,
  slanted = false,
}: OverlapHeroProps) => {
  const contentValues = heroContentValues(content);
  const [image] = images ?? [];
  const imageValues = heroImageValues(image);
  const backgroundValues = heroImageValues(backgroundImage);
  const brandValues = heroBrandValues(brand);
  if (target === "image") {
    return (
      <__OverlapImageHero
        ctaHref={contentValues.ctaHref}
        ctaLabel={contentValues.ctaLabel}
        description={contentValues.description}
        eyebrow={contentValues.eyebrow}
        heading={contentValues.heading}
        subheading={contentValues.subheading}
        backgroundImageSrc={backgroundValues.src}
        imageAlt={imageValues.alt}
        imageSrc={imageValues.src}
        logoAlt={brandValues.logoAlt}
        logoHref={brandValues.logoHref}
        logoSrc={brandValues.logoSrc}
        theme={theme}
        variant={slanted ? `slanted-${direction}` : "default"}
      />
    );
  }
  return (
    <__OverlapContentHero
      ctaHref={contentValues.ctaHref}
      ctaLabel={contentValues.ctaLabel}
      description={contentValues.description}
      eyebrow={contentValues.eyebrow}
      heading={contentValues.heading}
      subheading={contentValues.subheading}
      backgroundImageSrc={backgroundValues.src}
      imageAlt={backgroundValues.alt}
      logoAlt={brandValues.logoAlt}
      logoHref={brandValues.logoHref}
      logoSrc={brandValues.logoSrc}
      theme={theme}
      variant={`${direction === "right" ? "reversed" : "basic"}${gradient ? "-with-gradient" : ""}`}
    />
  );
};
OverlapHero.PreviewProps = {
  direction: "left",
  gradient: false,
  slanted: false,
  target: "content",
} satisfies OverlapHeroProps;
