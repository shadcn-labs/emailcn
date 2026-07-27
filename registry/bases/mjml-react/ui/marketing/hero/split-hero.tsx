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
  MjmlAll,
  MjmlAttributes,
  MjmlStyle,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/themes/definitions/default";
import type { EmailThemeTokens } from "@/registry/themes/definitions/default";

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

type OverlaySplitHero_HeroOverlayedSplitVariant =
  | "overlay-left"
  | "overlay-right";

interface OverlaySplitHero_HeroOverlayedSplitProps {
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
  variant?: OverlaySplitHero_HeroOverlayedSplitVariant;
}

const OverlaySplitHero_assetRoot =
  "https://emailcn.vercel.app/api/email-assets";

const OverlaySplitHero_HeroOverlayedSplitSection = ({
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Discover now",
  description = "From the first pour to the final sip, coffee is more than a drink — it’s a pause, a rhythm, a story in every cup. Discover how moments of calm begin with Sarina.",
  eyebrow = "Brew Stories",
  heading = "The Art of the Morning Ritual",
  imageSrc = `${OverlaySplitHero_assetRoot}/hero/overlayed-split-bg.jpg`,
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = `${OverlaySplitHero_assetRoot}/emailcn-logo-light.png`,
  overlayColor = "rgba(3, 7, 18, 0.8)",
  subheading = "January 31, 2025",
  textColor = "#f9fafb",
  variant = "overlay-left",
}: Omit<OverlaySplitHero_HeroOverlayedSplitProps, "theme">) => (
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

const OverlaySplitHero_HeroOverlayedSplit = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: OverlaySplitHero_HeroOverlayedSplitProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="The Art of the Morning Ritual"
    theme={theme}
  >
    <OverlaySplitHero_HeroOverlayedSplitSection {...props} />
  </HeroEmailShell>
);

OverlaySplitHero_HeroOverlayedSplit.PreviewProps = {
  theme: defaultTheme,
  variant: "overlay-left",
} satisfies OverlaySplitHero_HeroOverlayedSplitProps;

const __OverlaySplitHero = OverlaySplitHero_HeroOverlayedSplit;

type ContainedSplitHero_HeroSplitContainedVariant =
  | "single-image-left"
  | "single-image-right"
  | "square-images-left"
  | "square-images-right"
  | "portrait-top-left"
  | "portrait-top-right"
  | "portrait-bottom-left"
  | "portrait-bottom-right";

interface ContainedSplitHero_HeroSplitContainedProps {
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
  variant?: ContainedSplitHero_HeroSplitContainedVariant;
}

const ContainedSplitHero_assetRoot =
  "https://emailcn.vercel.app/api/email-assets";

const ContainedSplitHero_presets = {
  portraitBottom: {
    backgroundColor: "#030712",
    ctaLabel: "Book a table now",
    description:
      "Fluffy steamed buns filled with rich, savory flavors and made fresh daily. A taste of authentic street food, crafted with passion and served with warmth, right in the heart of London.",
    eyebrow: "Taiwanese Steamed Shop",
    heading: "Gua Bao",
    logoSrc: `${ContainedSplitHero_assetRoot}/emailcn-logo-light.png`,
    primaryImageSrc: `${ContainedSplitHero_assetRoot}/hero/split-contained-landscape-top.jpg`,
    secondaryImageSrc: `${ContainedSplitHero_assetRoot}/hero/split-contained-portrait-bottom.jpg`,
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
    logoSrc: `${ContainedSplitHero_assetRoot}/emailcn-logo.png`,
    primaryImageSrc: `${ContainedSplitHero_assetRoot}/hero/split-contained-portrait-top.jpg`,
    secondaryImageSrc: `${ContainedSplitHero_assetRoot}/hero/split-contained-landscape-bottom.jpg`,
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
    logoSrc: `${ContainedSplitHero_assetRoot}/emailcn-logo.png`,
    primaryImageSrc: `${ContainedSplitHero_assetRoot}/hero/split-contained-bg.jpg`,
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
    logoSrc: `${ContainedSplitHero_assetRoot}/emailcn-logo-light.png`,
    primaryImageSrc: `${ContainedSplitHero_assetRoot}/hero/split-contained-square-1.jpg`,
    secondaryImageSrc: `${ContainedSplitHero_assetRoot}/hero/split-contained-square-2.jpg`,
    subheading: "For blemish-prone skin",
    textColor: "#f9fafb",
  },
};

const ContainedSplitHero_getPreset = (
  variant: ContainedSplitHero_HeroSplitContainedVariant
) => {
  if (variant.startsWith("single-")) {
    return ContainedSplitHero_presets.single;
  }
  if (variant.startsWith("square-")) {
    return ContainedSplitHero_presets.square;
  }
  return variant.startsWith("portrait-bottom-")
    ? ContainedSplitHero_presets.portraitBottom
    : ContainedSplitHero_presets.portraitTop;
};

const ContainedSplitHero_HeroSplitContainedSection = (
  props: Omit<ContainedSplitHero_HeroSplitContainedProps, "theme">
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
    variant:
      "single-image-left" as ContainedSplitHero_HeroSplitContainedVariant,
    ...props,
  };
  const preset = ContainedSplitHero_getPreset(variant);
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

const ContainedSplitHero_HeroSplitContained = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: ContainedSplitHero_HeroSplitContainedProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview={props.heading ?? "Salt."}
    theme={theme}
  >
    <ContainedSplitHero_HeroSplitContainedSection {...props} />
  </HeroEmailShell>
);

ContainedSplitHero_HeroSplitContained.PreviewProps = {
  theme: defaultTheme,
  variant: "single-image-left",
} satisfies ContainedSplitHero_HeroSplitContainedProps;

const __ContainedSplitHero = ContainedSplitHero_HeroSplitContained;

type FullBleedSplitHero_HeroSplitFullBleedVariant =
  | "image-left"
  | "image-right";

interface FullBleedSplitHero_HeroSplitFullBleedProps {
  theme?: EmailThemeTokens;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  price?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  textBackgroundColor?: string;
  pageBackgroundColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: FullBleedSplitHero_HeroSplitFullBleedVariant;
}

const FullBleedSplitHero_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

type FullBleedSplitHero_SectionProps = Required<
  Omit<FullBleedSplitHero_HeroSplitFullBleedProps, "theme" | "variant">
> & {
  theme: EmailThemeTokens;
  variant: FullBleedSplitHero_HeroSplitFullBleedVariant;
};

const FullBleedSplitHero_HeroImageColumn = ({
  logoAlt,
  logoSrc,
}: Pick<FullBleedSplitHero_SectionProps, "logoAlt" | "logoSrc">) => (
  <MjmlColumn
    cssClass="hero-split-column hero-split-image"
    direction="ltr"
    padding="0"
    verticalAlign="top"
    width="256px"
  >
    <MjmlImage
      align="center"
      alt={logoAlt}
      cssClass="hero-split-logo"
      padding="44px 24px 0"
      src={logoSrc}
      width="165px"
    />
  </MjmlColumn>
);

const FullBleedSplitHero_HeroSpacerColumn = () => (
  <MjmlColumn
    cssClass="hero-split-column hero-split-spacer"
    direction="ltr"
    padding="0"
    width="24px"
  >
    <MjmlSpacer height="1px" />
  </MjmlColumn>
);

const FullBleedSplitHero_HeroTextColumn = ({
  buttonBackgroundColor,
  buttonTextColor,
  ctaHref,
  ctaLabel,
  description,
  eyebrow,
  heading,
  price,
  subheading,
  textBackgroundColor,
}: Pick<
  FullBleedSplitHero_SectionProps,
  | "buttonBackgroundColor"
  | "buttonTextColor"
  | "ctaHref"
  | "ctaLabel"
  | "description"
  | "eyebrow"
  | "heading"
  | "price"
  | "subheading"
  | "textBackgroundColor"
>) => (
  <MjmlColumn
    backgroundColor={textBackgroundColor}
    cssClass="hero-split-column hero-split-text"
    direction="ltr"
    padding="0 24px"
    verticalAlign="bottom"
    width="320px"
  >
    <MjmlText
      align="left"
      color="#030712"
      fontFamily={FullBleedSplitHero_fontFamily}
      fontSize="16px"
      fontWeight="200"
      lineHeight="24px"
      padding="0"
    >
      {eyebrow}
    </MjmlText>
    <MjmlText
      align="left"
      color="#030712"
      fontFamily={FullBleedSplitHero_fontFamily}
      fontSize="48px"
      fontWeight="500"
      lineHeight="58px"
      padding="0"
    >
      {heading}
    </MjmlText>
    <MjmlText
      align="left"
      color="#030712"
      fontFamily={FullBleedSplitHero_fontFamily}
      fontSize="18px"
      lineHeight="28px"
      padding="0"
    >
      {subheading}
    </MjmlText>
    <MjmlSpacer height="48px" />
    <MjmlText
      align="left"
      color="#4b5563"
      fontFamily={FullBleedSplitHero_fontFamily}
      fontSize="16px"
      fontWeight="300"
      lineHeight="24px"
      padding="0"
    >
      {description}
      {price ? (
        <>
          <br />
          <br />
          <span style={{ fontWeight: 700 }}>{price}</span>
        </>
      ) : null}
    </MjmlText>
    <MjmlSpacer height="24px" />
    {ctaLabel && ctaHref ? (
      <MjmlButton
        align="left"
        backgroundColor={buttonBackgroundColor}
        borderRadius="8px"
        color={buttonTextColor}
        fontFamily={FullBleedSplitHero_fontFamily}
        fontSize="16px"
        fontWeight="500"
        href={ctaHref}
        innerPadding="14px 20px"
        lineHeight="16px"
        padding="0"
      >
        {ctaLabel} →
      </MjmlButton>
    ) : null}
    <MjmlSpacer height="44px" />
  </MjmlColumn>
);

const FullBleedSplitHero_HeroSplitFullBleedSection = (
  props: FullBleedSplitHero_SectionProps
) => (
  <MjmlSection
    backgroundColor={props.textBackgroundColor}
    direction={props.variant === "image-right" ? "rtl" : "ltr"}
    padding="0"
  >
    <FullBleedSplitHero_HeroImageColumn {...props} />
    <FullBleedSplitHero_HeroSpacerColumn />
    <FullBleedSplitHero_HeroTextColumn {...props} />
  </MjmlSection>
);

const FullBleedSplitHero_HeroSplitFullBleed = ({
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Discover now",
  description = "Handcrafted in small batches, Sarina blends the boldness of Americano with the brightness of grapefruit. A modern roast for those who crave flavor with edge and energy in every sip.",
  eyebrow = "Coffee",
  heading = "Sarina",
  imageAlt = "Sarina coffee bottle",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/hero/split-full-bleed-bg.jpg",
  logoAlt = "emailcn",
  logoSrc = "https://emailcn.vercel.app/api/email-assets/emailcn-logo.png",
  pageBackgroundColor = "#f1f5f9",
  price = "From $14.99",
  subheading = "Americano Grape Fruit",
  textBackgroundColor = "#fffffe",
  theme = defaultTheme,
  variant = "image-left",
}: FullBleedSplitHero_HeroSplitFullBleedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{`${heading} — ${subheading}`}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{`
          .hero-split-image,
          .hero-split-image > table,
          .hero-split-image > table > tbody > tr > td {
            background-image: url(${JSON.stringify(imageSrc)}) !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-size: cover !important;
            height: 600px !important;
          }

          @media only screen and (max-width: 599px) {
            .hero-split-column {
              width: 100% !important;
            }

            .hero-split-image,
            .hero-split-image > table,
            .hero-split-image > table > tbody > tr > td {
              height: 388px !important;
            }

            .hero-split-spacer,
            .hero-split-spacer > table,
            .hero-split-spacer > table > tbody > tr > td {
              height: 44px !important;
              line-height: 44px !important;
            }

            .hero-split-logo table {
              margin-left: 0 !important;
              margin-right: auto !important;
            }
          }
        `}</MjmlStyle>
      <MjmlAttributes>
        <MjmlAll color="#030712" fontFamily={FullBleedSplitHero_fontFamily} />
        <MjmlText fontSize="16px" lineHeight="24px" />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody backgroundColor={pageBackgroundColor} width="600px">
      <FullBleedSplitHero_HeroSplitFullBleedSection
        buttonBackgroundColor={buttonBackgroundColor}
        buttonTextColor={buttonTextColor}
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        description={description}
        eyebrow={eyebrow}
        heading={heading}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        logoAlt={logoAlt}
        logoSrc={logoSrc}
        pageBackgroundColor={pageBackgroundColor}
        price={price}
        subheading={subheading}
        textBackgroundColor={textBackgroundColor}
        theme={theme}
        variant={variant}
      />
    </MjmlBody>
  </Mjml>
);

FullBleedSplitHero_HeroSplitFullBleed.PreviewProps = {
  buttonBackgroundColor: "#4f46e5",
  buttonTextColor: "#fffffe",
  ctaHref: "https://example.com",
  ctaLabel: "Discover now",
  description:
    "Handcrafted in small batches, Sarina blends the boldness of Americano with the brightness of grapefruit. A modern roast for those who crave flavor with edge and energy in every sip.",
  eyebrow: "Coffee",
  heading: "Sarina",
  imageAlt: "Sarina coffee bottle",
  imageSrc:
    "https://emailcn.vercel.app/api/email-assets/hero/split-full-bleed-bg.jpg",
  logoAlt: "emailcn",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/emailcn-logo.png",
  pageBackgroundColor: "#f1f5f9",
  price: "From $14.99",
  subheading: "Americano Grape Fruit",
  textBackgroundColor: "#fffffe",
  theme: defaultTheme,
  variant: "image-left",
} satisfies FullBleedSplitHero_HeroSplitFullBleedProps;

const __FullBleedSplitHero = FullBleedSplitHero_HeroSplitFullBleed;

type OverlayContentHeroBundle_HeroWithOverlayedContentVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

interface OverlayContentHeroBundle_HeroWithOverlayedContentProps {
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
  variant?: OverlayContentHeroBundle_HeroWithOverlayedContentVariant;
}

const OverlayContentHeroBundle_assetRoot =
  "https://emailcn.vercel.app/api/email-assets";

const OverlayContentHeroBundle_HeroWithOverlayedContentSection = ({
  accentColor = "#D34A36",
  buttonBackgroundColor = "#D34A36",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Make an offer now",
  description = "Step back into the golden era of hoops style with the iconic Blazer Mid '77 Vintage. A timeless mix of crisp white leather, retro suede accents, and that bold Swoosh, this pair delivers heritage with a modern edge.",
  eyebrow = "Fresh Drop",
  heading = "Mid ‘77 Vintage",
  headingAccent = "Blazer",
  imageSrc = `${OverlayContentHeroBundle_assetRoot}/hero/overlayed/hero-overlayed-bg.jpg`,
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = `${OverlayContentHeroBundle_assetRoot}/emailcn-insignia-mono.png`,
  slantColor = "#fffffe",
  subheading = "Only One Pair Left",
  textColor = "#030712",
  variant = "default",
}: Omit<OverlayContentHeroBundle_HeroWithOverlayedContentProps, "theme">) => (
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

const OverlayContentHeroBundle_HeroWithOverlayedContent = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: OverlayContentHeroBundle_HeroWithOverlayedContentProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Blazer Mid ‘77 Vintage"
    theme={theme}
  >
    <OverlayContentHeroBundle_HeroWithOverlayedContentSection {...props} />
  </HeroEmailShell>
);

OverlayContentHeroBundle_HeroWithOverlayedContent.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies OverlayContentHeroBundle_HeroWithOverlayedContentProps;

const __OverlayContentHeroBundle = {
  Component: OverlayContentHeroBundle_HeroWithOverlayedContent,
  __SplitHeroSection: OverlayContentHeroBundle_HeroWithOverlayedContentSection,
};

const __OverlayContentHero = __OverlayContentHeroBundle.Component;

const { __SplitHeroSection } = __OverlayContentHeroBundle;

type SlantedSplitHero_HeroWithSlantedSplitVariant =
  | "left-slanted-down"
  | "left-slanted-up"
  | "right-slanted-down"
  | "right-slanted-up";

interface SlantedSplitHero_HeroWithSlantedSplitProps {
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
  variant?: SlantedSplitHero_HeroWithSlantedSplitVariant;
}

const SlantedSplitHero_assetRoot =
  "https://emailcn.vercel.app/api/email-assets";

const SlantedSplitHero_HeroWithSlantedSplitSection = ({
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  contentBackgroundColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Discover now",
  description = "Celebrating creativity, community, and culture in every edition. Bob Cut brings stories to life through design and narrative — a modern take on the timeless power of print.",
  eyebrow = "Independent Publishing",
  heading = "Bob Cut",
  imageAlt = "Independent publishing photography",
  imageSrc = `${SlantedSplitHero_assetRoot}/hero/split-slanted-bg.jpg`,
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = `${SlantedSplitHero_assetRoot}/emailcn-logo-light.png`,
  subheading = "January Edition",
  textColor = "#030712",
  variant = "left-slanted-down",
}: Omit<SlantedSplitHero_HeroWithSlantedSplitProps, "theme">) => {
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

const SlantedSplitHero_HeroWithSlantedSplit = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: SlantedSplitHero_HeroWithSlantedSplitProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Bob Cut"
    theme={theme}
  >
    <SlantedSplitHero_HeroWithSlantedSplitSection {...props} />
  </HeroEmailShell>
);

SlantedSplitHero_HeroWithSlantedSplit.PreviewProps = {
  theme: defaultTheme,
  variant: "left-slanted-down",
} satisfies SlantedSplitHero_HeroWithSlantedSplitProps;

const __SlantedSplitHero = SlantedSplitHero_HeroWithSlantedSplit;

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

export interface SplitHeroProps {
  theme?: Parameters<typeof __ContainedSplitHero>[0]["theme"];
  content?: HeroContent;
  images?: HeroImage[];
  brand?: HeroBrand;
  treatment?: "contained" | "full-bleed" | "overlay" | "slanted";
  imagePosition?: "left" | "right";
  slant?: "up" | "down";
  overlayContent?: boolean;
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

export const SplitHero = ({
  theme,
  content,
  images,
  brand,
  treatment = "contained",
  imagePosition = "right",
  slant = "down",
  overlayContent = false,
}: SplitHeroProps) => {
  const contentValues = heroContentValues(content);
  const [image] = images ?? [];
  const imageValues = heroImageValues(image);
  const brandValues = heroBrandValues(brand);
  if (overlayContent) {
    return (
      <__OverlayContentHero
        ctaHref={contentValues.ctaHref}
        ctaLabel={contentValues.ctaLabel}
        description={contentValues.description}
        eyebrow={contentValues.eyebrow}
        heading={contentValues.heading}
        subheading={contentValues.subheading}
        headingAccent={content?.emphasis}
        imageAlt={imageValues.alt}
        imageSrc={imageValues.src}
        logoAlt={brandValues.logoAlt}
        logoHref={brandValues.logoHref}
        logoSrc={brandValues.logoSrc}
        theme={theme}
        variant={
          treatment === "slanted" ? `slanted-${imagePosition}` : "default"
        }
      />
    );
  }
  if (treatment === "overlay") {
    return (
      <__OverlaySplitHero
        ctaHref={contentValues.ctaHref}
        ctaLabel={contentValues.ctaLabel}
        description={contentValues.description}
        eyebrow={contentValues.eyebrow}
        heading={contentValues.heading}
        subheading={contentValues.subheading}
        imageAlt={imageValues.alt}
        imageSrc={imageValues.src}
        logoAlt={brandValues.logoAlt}
        logoHref={brandValues.logoHref}
        logoSrc={brandValues.logoSrc}
        theme={theme}
        variant={`overlay-${imagePosition}`}
      />
    );
  }
  if (treatment === "full-bleed") {
    return (
      <__FullBleedSplitHero
        ctaHref={contentValues.ctaHref}
        ctaLabel={contentValues.ctaLabel}
        description={contentValues.description}
        eyebrow={contentValues.eyebrow}
        heading={contentValues.heading}
        price={content?.price}
        subheading={contentValues.subheading}
        imageAlt={imageValues.alt}
        imageSrc={imageValues.src}
        logoAlt={brandValues.logoAlt}
        logoSrc={brandValues.logoSrc}
        theme={theme}
        variant={`image-${imagePosition}`}
      />
    );
  }
  if (treatment === "slanted") {
    return (
      <__SlantedSplitHero
        ctaHref={contentValues.ctaHref}
        ctaLabel={contentValues.ctaLabel}
        description={contentValues.description}
        eyebrow={contentValues.eyebrow}
        heading={contentValues.heading}
        subheading={contentValues.subheading}
        imageAlt={imageValues.alt}
        imageSrc={imageValues.src}
        logoAlt={brandValues.logoAlt}
        logoHref={brandValues.logoHref}
        logoSrc={brandValues.logoSrc}
        theme={theme}
        variant={`${imagePosition}-slanted-${slant}`}
      />
    );
  }
  return (
    <__ContainedSplitHero
      ctaHref={contentValues.ctaHref}
      ctaLabel={contentValues.ctaLabel}
      description={contentValues.description}
      eyebrow={contentValues.eyebrow}
      heading={contentValues.heading}
      price={content?.price}
      subheading={contentValues.subheading}
      logoAlt={brandValues.logoAlt}
      logoSrc={brandValues.logoSrc}
      primaryImageAlt={imageValues.alt}
      primaryImageSrc={imageValues.src}
      secondaryImageAlt={images?.[1]?.alt}
      secondaryImageSrc={images?.[1]?.src}
      theme={theme}
      variant={
        images && images.length > 1
          ? `square-images-${imagePosition}`
          : `single-image-${imagePosition}`
      }
    />
  );
};

export const SplitHeroSection = __SplitHeroSection;

SplitHero.PreviewProps = {
  imagePosition: "right",
  overlayContent: false,
  slant: "down",
  treatment: "contained",
} satisfies SplitHeroProps;
