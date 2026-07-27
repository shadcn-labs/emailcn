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

const NativeBackgroundHero = ({
  align = "left",
  backgroundColor,
  backgroundImageSrc,
  buttonBackgroundColor,
  buttonTextColor,
  contentBackgroundColor,
  contentRight = false,
  ctaHref,
  ctaLabel,
  description,
  eyebrow,
  heading,
  logoAlt,
  logoHref,
  logoSrc,
  padding = "64px 44px",
  subheading,
  textColor,
}: {
  align?: "center" | "left" | "right";
  backgroundColor: string;
  backgroundImageSrc: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  contentBackgroundColor?: string;
  contentRight?: boolean;
  ctaHref: string;
  ctaLabel: string;
  description: string;
  eyebrow: string;
  heading: string;
  logoAlt?: string;
  logoHref?: string;
  logoSrc?: string;
  padding?: string;
  subheading: string;
  textColor: string;
}) => (
  <MjmlSection
    backgroundColor={backgroundColor}
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    backgroundUrl={backgroundImageSrc}
    direction={contentRight ? "rtl" : "ltr"}
    padding={padding}
  >
    {contentRight ? (
      <MjmlColumn padding="0" width="34%">
        <MjmlSpacer height="1px" />
      </MjmlColumn>
    ) : null}
    <MjmlColumn
      backgroundColor={contentBackgroundColor}
      borderRadius={contentBackgroundColor ? "8px" : "0"}
      direction="ltr"
      padding={contentBackgroundColor ? "36px" : "0"}
      verticalAlign="middle"
      width="66%"
    >
      <HeroCopy
        align={align}
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
    {contentRight ? null : (
      <MjmlColumn padding="0" width="34%">
        <MjmlSpacer height="1px" />
      </MjmlColumn>
    )}
  </MjmlSection>
);

type AlignedHero_HeroAlignedOverlayVariant =
  | "content-left"
  | "content-left-reversed"
  | "content-right"
  | "content-right-reversed";

interface AlignedHero_HeroAlignedOverlayProps {
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
  variant?: AlignedHero_HeroAlignedOverlayVariant;
}

const AlignedHero_assetRoot = "https://emailcn.vercel.app/api/email-assets";

const AlignedHero_variantImages: Record<
  AlignedHero_HeroAlignedOverlayVariant,
  string
> = {
  "content-left": `${AlignedHero_assetRoot}/hero/aligned-overlay-bg-1.png`,
  "content-left-reversed": `${AlignedHero_assetRoot}/hero/aligned-overlay-bg-4.png`,
  "content-right": `${AlignedHero_assetRoot}/hero/aligned-overlay-bg-2.png`,
  "content-right-reversed": `${AlignedHero_assetRoot}/hero/aligned-overlay-bg-3.png`,
};

const AlignedHero_HeroAlignedOverlaySection = ({
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
  logoSrc = `${AlignedHero_assetRoot}/emailcn-logo-light.png`,
  textColor = "#f9fafb",
  variant = "content-left",
}: Omit<AlignedHero_HeroAlignedOverlayProps, "theme">) => (
  <NativeBackgroundHero
    backgroundColor={backgroundColor}
    backgroundImageSrc={imageSrc ?? AlignedHero_variantImages[variant]}
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

const AlignedHero_HeroAlignedOverlay = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: AlignedHero_HeroAlignedOverlayProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Your next unforgettable escape"
    theme={theme}
  >
    <AlignedHero_HeroAlignedOverlaySection {...props} />
  </HeroEmailShell>
);

AlignedHero_HeroAlignedOverlay.PreviewProps = {
  theme: defaultTheme,
  variant: "content-left",
} satisfies AlignedHero_HeroAlignedOverlayProps;

const __AlignedHero = AlignedHero_HeroAlignedOverlay;

type BlockHero_HeroBlockOverlayVariant =
  | "left-centered"
  | "left-top"
  | "left-bottom"
  | "left-flush-vertical"
  | "right-centered"
  | "right-top"
  | "right-bottom"
  | "right-flush-vertical";

interface BlockHero_HeroBlockOverlayProps {
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
  variant?: BlockHero_HeroBlockOverlayVariant;
}

const BlockHero_assetRoot = "https://emailcn.vercel.app/api/email-assets";

const BlockHero_HeroBlockOverlaySection = (
  props: Omit<BlockHero_HeroBlockOverlayProps, "theme">
) => {
  const {
    backgroundColor,
    backgroundImageSrc,
    buttonBackgroundColor,
    buttonTextColor,
    ctaHref,
    ctaLabel,
    description,
    eyebrow,
    heading,
    logoAlt,
    logoHref,
    logoSrc,
    overlayColor,
    subheading,
    textColor,
    variant,
  } = {
    backgroundColor: "#030712",
    backgroundImageSrc: `${BlockHero_assetRoot}/hero/block-overlay-bg.jpg`,
    buttonBackgroundColor: "#4f46e5",
    buttonTextColor: "#fffffe",
    ctaHref: "https://example.com",
    ctaLabel: "Discover how",
    description:
      "SumUp is a global fintech leader transforming the way businesses accept payments. From mobile card readers to POS systems, we equip over 4 million merchants across 35+ countries with streamlined, secure tools that help them scale.",
    eyebrow: "Transaction fees as low as 0.89%",
    heading: "SumUp",
    logoAlt: "emailcn",
    logoHref: "https://example.com",
    logoSrc: `${BlockHero_assetRoot}/emailcn-logo-light.png`,
    overlayColor: "rgba(3, 7, 18, 0.8)",
    subheading: "Powering Modern Entrepreneurs",
    textColor: "#f9fafb",
    variant: "left-centered",
    ...props,
  };
  const hideLogo =
    variant.endsWith("-top") || variant.endsWith("-flush-vertical");
  let padding = "72px 44px";
  if (variant.endsWith("-top")) {
    padding = "44px";
  } else if (variant.endsWith("-bottom")) {
    padding = "120px 44px 44px";
  }
  return (
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
      logoSrc={hideLogo ? undefined : logoSrc}
      padding={padding}
      subheading={subheading}
      textColor={textColor}
    />
  );
};

const BlockHero_HeroBlockOverlay = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: BlockHero_HeroBlockOverlayProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="SumUp"
    theme={theme}
  >
    <BlockHero_HeroBlockOverlaySection {...props} />
  </HeroEmailShell>
);

BlockHero_HeroBlockOverlay.PreviewProps = {
  theme: defaultTheme,
  variant: "left-centered",
} satisfies BlockHero_HeroBlockOverlayProps;

const __BlockHero = BlockHero_HeroBlockOverlay;

type BlockBleedHero_HeroBlockWithBleedVariant =
  | "left-centered"
  | "left-top"
  | "left-bottom"
  | "left-flush-vertical"
  | "right-centered"
  | "right-top"
  | "right-bottom"
  | "right-flush-vertical";

interface BlockBleedHero_HeroBlockWithBleedProps {
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
  variant?: BlockBleedHero_HeroBlockWithBleedVariant;
}

const BlockBleedHero_assetRoot = "https://emailcn.vercel.app/api/email-assets";

const BlockBleedHero_HeroBlockWithBleedSection = ({
  backgroundColor = "#030712",
  backgroundImageSrc = `${BlockBleedHero_assetRoot}/hero/block-with-bleed-bg.jpg`,
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Discover how",
  description = "Where golden dunes meet the distant peaks, nature speaks in silence. These fragile landscapes remind us how balance sustains beauty — and how every action we take can help protect it.",
  eyebrow = "Lush oasis, Our Wonderworld.",
  heading = "Preserve the planet we share",
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = `${BlockBleedHero_assetRoot}/emailcn-logo-light.png`,
  overlayColor = "rgba(3, 7, 18, 0.8)",
  subheading = "Take action today.",
  textColor = "#f9fafb",
  variant = "left-centered",
}: Omit<BlockBleedHero_HeroBlockWithBleedProps, "theme">) => (
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

const BlockBleedHero_HeroBlockWithBleed = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: BlockBleedHero_HeroBlockWithBleedProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Preserve the planet we share"
    theme={theme}
  >
    <BlockBleedHero_HeroBlockWithBleedSection {...props} />
  </HeroEmailShell>
);

BlockBleedHero_HeroBlockWithBleed.PreviewProps = {
  theme: defaultTheme,
  variant: "left-centered",
} satisfies BlockBleedHero_HeroBlockWithBleedProps;

const __BlockBleedHero = BlockBleedHero_HeroBlockWithBleed;

type GradientHero_HeroWithOverlayGradientVariant =
  | "split-with-logo"
  | "split-no-logo"
  | "unified-with-logo"
  | "unified-no-logo";

interface GradientHero_HeroWithOverlayGradientProps {
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
  variant?: GradientHero_HeroWithOverlayGradientVariant;
}

const GradientHero_assetRoot = "https://emailcn.vercel.app/api/email-assets";

const GradientHero_HeroWithOverlayGradientSection = ({
  backgroundColor = "#030712",
  backgroundImageSrc = `${GradientHero_assetRoot}/hero/overlay-gradient-bg.jpg`,
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Shop now",
  description = "Inspired by the granite giants of Yosemite, our latest pack is made for those who roam. Durable, weather-ready, and crafted for every climb, it’s built to carry your story, wherever the trail leads.",
  eyebrow = "Yosemite Collection",
  heading = "Forclaz 50L",
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = `${GradientHero_assetRoot}/emailcn-logo-light.png`,
  overlayColor = "rgba(3, 7, 18, 0.6)",
  price = "Starts at $129.99",
  subheading = "Easyfit Version",
  textColor = "#f9fafb",
  variant = "split-with-logo",
}: Omit<GradientHero_HeroWithOverlayGradientProps, "theme">) => (
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

const GradientHero_HeroWithOverlayGradient = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: GradientHero_HeroWithOverlayGradientProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Forclaz 50L"
    theme={theme}
  >
    <GradientHero_HeroWithOverlayGradientSection {...props} />
  </HeroEmailShell>
);

GradientHero_HeroWithOverlayGradient.PreviewProps = {
  theme: defaultTheme,
  variant: "split-with-logo",
} satisfies GradientHero_HeroWithOverlayGradientProps;

const __GradientHero = GradientHero_HeroWithOverlayGradient;

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

export interface OverlayHeroProps {
  theme?: Parameters<typeof __BlockHero>[0]["theme"];
  content?: HeroContent;
  backgroundImage?: HeroImage;
  brand?: HeroBrand;
  treatment?: "aligned" | "block" | "gradient" | "content-card";
  position?:
    | "top-left"
    | "center-left"
    | "bottom-left"
    | "top-right"
    | "center-right"
    | "bottom-right";
  bleed?: boolean;
  reverse?: boolean;
}

const blockPosition = (position: NonNullable<OverlayHeroProps["position"]>) => {
  const [vertical, horizontal] = position.split("-");
  return `${horizontal}-${vertical === "center" ? "centered" : vertical}`;
};

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

export const OverlayHero = ({
  theme,
  content,
  backgroundImage,
  brand,
  treatment = "block",
  position = "center-left",
  bleed = false,
  reverse = false,
}: OverlayHeroProps) => {
  const contentValues = heroContentValues(content);
  const backgroundValues = heroImageValues(backgroundImage);
  const brandValues = heroBrandValues(brand);
  const side = position.endsWith("right") ? "right" : "left";
  if (treatment === "aligned") {
    return (
      <__AlignedHero
        ctaHref={contentValues.ctaHref}
        ctaLabel={contentValues.ctaLabel}
        description={contentValues.description}
        eyebrow={contentValues.eyebrow}
        headingEmphasis={content?.emphasis}
        headingStart={contentValues.heading}
        imageAlt={backgroundValues.alt}
        imageSrc={backgroundValues.src}
        logoAlt={brandValues.logoAlt}
        logoHref={brandValues.logoHref}
        logoSrc={brandValues.logoSrc}
        theme={theme}
        variant={`content-${side}${reverse ? "-reversed" : ""}`}
      />
    );
  }
  if (treatment === "gradient") {
    return (
      <__GradientHero
        ctaHref={contentValues.ctaHref}
        ctaLabel={contentValues.ctaLabel}
        description={contentValues.description}
        eyebrow={contentValues.eyebrow}
        heading={contentValues.heading}
        price={content?.price}
        subheading={contentValues.subheading}
        backgroundImageSrc={backgroundValues.src}
        imageAlt={backgroundValues.alt}
        logoAlt={brandValues.logoAlt}
        logoHref={brandValues.logoHref}
        logoSrc={brandValues.logoSrc}
        theme={theme}
        variant={`${side === "left" ? "split" : "unified"}-${brand ? "with-logo" : "no-logo"}`}
      />
    );
  }
  const Component = bleed ? __BlockBleedHero : __BlockHero;
  return (
    <Component
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
      variant={
        blockPosition(position) as Parameters<typeof Component>[0]["variant"]
      }
    />
  );
};

OverlayHero.PreviewProps = {
  bleed: false,
  position: "center-left",
  reverse: false,
  treatment: "block",
} satisfies OverlayHeroProps;
