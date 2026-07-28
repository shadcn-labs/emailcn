import { Fragment } from "react";
import type { CSSProperties } from "react";
import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Preview,
  Tailwind,
  Section,
  Row,
  Column,
  Text,
  Heading,
  Link,
  Img,
} from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { createEmailTailwindConfig } from "@/registry/bases/react-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/react-email/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

type OverlapContentHero_HeroWithOverlappedContentVariant =
  | "basic"
  | "reversed"
  | "basic-with-gradient"
  | "reversed-with-gradient";

interface OverlapContentHero_HeroWithOverlappedContentProps {
  theme?: EmailTheme;
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
  backgroundSize: string;
  contentBackgroundColor: string;
  description: string;
  eyebrow: string;
  heading: string;
  imageAlt: string;
  reversedSpacer: number;
  subheading: string;
  textColor: string;
}

const OverlapContentHero_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const OverlapContentHero_variantPresets: Record<
  OverlapContentHero_HeroWithOverlappedContentVariant,
  OverlapContentHero_VariantPreset
> = {
  basic: {
    backgroundImageSrc: emailAsset(`hero/overlapped-content-bg-1.jpg`),
    backgroundPosition: "top",
    backgroundSize: "600px 630px",
    contentBackgroundColor: "#fffffe",
    description:
      "Every vein tells a story of adaptation and survival. Explore the microscopic architecture of leaves — where biology, design, and evolution converge in perfect symmetry.",
    eyebrow: "NATURE COLLECTION",
    heading: "Geometry of life",
    imageAlt: "Microscopic geometry of a leaf",
    reversedSpacer: 0,
    subheading: "Edition No.5",
    textColor: "#030712",
  },
  "basic-with-gradient": {
    backgroundImageSrc: emailAsset(`hero/overlapped-content-bg-3.jpg`),
    backgroundPosition: "top",
    backgroundSize: "600px 630px",
    contentBackgroundColor:
      "linear-gradient(to top, #fffffe 50%, rgba(255, 255, 255, 0))",
    description:
      "Vast golden sands meet rugged mountain peaks — where silence speaks louder than words. Explore landscapes shaped by time, and uncover the raw beauty of the desert wilderness waiting to be found.",
    eyebrow: "Morocco",
    heading: "Into the dunes",
    imageAlt: "Golden dunes and mountain peaks in Morocco",
    reversedSpacer: 0,
    subheading: "Edition No.5",
    textColor: "#030712",
  },
  reversed: {
    backgroundImageSrc: emailAsset(`hero/overlapped-content-bg-2.jpg`),
    backgroundPosition: "bottom",
    backgroundSize: "600px 687px",
    contentBackgroundColor: "#fffffe",
    description:
      "Delve into the intricate world of fungi — the unseen architects of ecosystems. Explore how mycelial networks sustain life, recycle nutrients, and reveal the complexity of Earth’s natural systems.",
    eyebrow: "Microbiology in Motion",
    heading: "Nature’s hidden networks",
    imageAlt: "Fungal network in a forest",
    reversedSpacer: 200,
    subheading: "Edition No.5",
    textColor: "#030712",
  },
  "reversed-with-gradient": {
    backgroundImageSrc: emailAsset(`hero/overlapped-content-bg-4.jpg`),
    backgroundPosition: "bottom",
    backgroundSize: "600px 687px",
    contentBackgroundColor:
      "linear-gradient(to bottom, #030712 32%, rgba(3, 7, 18, 0))",
    description:
      "Step into a world of untouched beauty and icy grandeur. From towering glaciers to vast, silent expanses, explore the last great wilderness on Earth. Begin your Antarctic adventure today.",
    eyebrow: "Journey to the edge of the earth",
    heading: "Antarctica",
    imageAlt: "Glacial wilderness in Antarctica",
    reversedSpacer: 288,
    subheading: "Edition No.5",
    textColor: "#f9fafb",
  },
};

const OverlapContentHero_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .hero-overlapped-content-side {
        width: 28px !important;
      }
    }

    .hero-overlapped-content-cta:hover {
      background-color: #4338ca !important;
    }
  `;

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
    imageAlt,
    logoAlt,
    logoHref,
    logoSrc,
    pageBackgroundColor,
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
    logoSrc: emailAsset(`emailcn-logo-light.png`),
    pageBackgroundColor: "#f1f5f9",
    variant: "basic" as OverlapContentHero_HeroWithOverlappedContentVariant,
    ...props,
  };
  const preset = OverlapContentHero_variantPresets[variant];
  const isReversed = variant.startsWith("reversed");
  const hasGradient = variant.endsWith("with-gradient");
  const resolvedContentBackground =
    contentBackgroundColor ?? preset.contentBackgroundColor;
  const resolvedTextColor = textColor ?? preset.textColor;
  const content = (
    <Section width="100%">
      <Fragment>
        <Row>
          <Column
            style={{
              backgroundColor: hasGradient
                ? undefined
                : resolvedContentBackground,
              backgroundImage: hasGradient
                ? resolvedContentBackground
                : undefined,
              padding: "44px 24px",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                color: resolvedTextColor,
                fontFamily: OverlapContentHero_fontFamily,
                fontSize: "16px",
                fontWeight: 200,
                lineHeight: "24px",
                margin: 0,
              }}
            >
              {eyebrow ?? preset.eyebrow}
            </Text>
            <Heading
              style={{
                color: resolvedTextColor,
                fontFamily: OverlapContentHero_fontFamily,
                fontSize: "48px",
                fontWeight: 500,
                margin: 0,
              }}
              as="h1"
            >
              {heading ?? preset.heading}
            </Heading>
            <Text
              style={{
                color: resolvedTextColor,
                fontFamily: OverlapContentHero_fontFamily,
                fontSize: "18px",
                lineHeight: "28px",
                margin: 0,
              }}
            >
              {subheading ?? preset.subheading}
            </Text>
            <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            <Text
              style={{
                color: resolvedTextColor,
                fontFamily: OverlapContentHero_fontFamily,
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "24px",
                margin: 0,
              }}
            >
              {description ?? preset.description}
            </Text>
            <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
            {ctaLabel && ctaHref ? (
              <Link
                className="hero-overlapped-content-cta"
                href={ctaHref}
                style={{
                  backgroundColor: buttonBackgroundColor,
                  borderRadius: "8px",
                  color: buttonTextColor,
                  display: "inline-block",
                  fontFamily: OverlapContentHero_fontFamily,
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: 1,
                  padding: "14px 20px",
                  textDecoration: "none",
                }}
              >
                <span style={{ marginRight: "8px" }}>{ctaLabel}</span>
                <Img
                  alt=""
                  src={emailAsset(`icon-arrow-right.png`)}
                  style={{
                    display: "inline-block",
                    maxWidth: "100%",
                    verticalAlign: "baseline",
                  }}
                  width="12"
                />
              </Link>
            ) : null}
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
  const logo = (
    <Section style={{ textAlign: "center" }}>
      <Link href={logoHref}>
        <Img
          alt={logoAlt}
          src={logoSrc}
          style={{ maxWidth: "100%", verticalAlign: "middle" }}
          width="165"
        />
      </Link>
    </Section>
  );
  return (
    <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            aria-label={imageAlt ?? preset.imageAlt}
            role="img"
            style={{
              backgroundColor: pageBackgroundColor,
              backgroundImage: `url(${backgroundImageSrc ?? preset.backgroundImageSrc})`,
              backgroundPosition: preset.backgroundPosition,
              backgroundRepeat: "no-repeat",
              backgroundSize: preset.backgroundSize,
              maxWidth: "100%",
              position: "relative",
              width: "600px",
            }}
          >
            {isReversed ? null : (
              <Section style={{ lineHeight: "48px" }}>&zwj;</Section>
            )}
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    className="hero-overlapped-content-side"
                    style={{ width: "48px" }}
                  >
                    &zwj;
                  </Column>
                  <Column>
                    {isReversed ? (
                      <>
                        {content}
                        <Section
                          style={{ lineHeight: `${preset.reversedSpacer}px` }}
                        >
                          &zwj;
                        </Section>
                        {logo}
                        <Section style={{ lineHeight: "48px" }}>&zwj;</Section>
                      </>
                    ) : (
                      <>
                        {logo}
                        <Section style={{ lineHeight: "212px" }}>&zwj;</Section>
                        {content}
                        <Section style={{ lineHeight: "40px" }}>&zwj;</Section>
                      </>
                    )}
                  </Column>
                  <Column
                    className="hero-overlapped-content-side"
                    style={{ width: "48px" }}
                  >
                    &zwj;
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
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
    <Html>
      <EmailHead>
        <DefaultFonts />
        <style
          dangerouslySetInnerHTML={{
            __html: OverlapContentHero_responsiveStyles,
          }}
        />
      </EmailHead>
      <Preview>{props.heading ?? preset.heading}</Preview>
      <Tailwind config={createEmailTailwindConfig(theme)}>
        <Body
          style={{
            backgroundColor: pageBackgroundColor,
            fontFamily: OverlapContentHero_fontFamily,
          }}
          className="m-0"
        >
          <Container className="mx-auto max-w-[600px] w-[600px]">
            <OverlapContentHero_HeroWithOverlappedContentSection
              {...props}
              pageBackgroundColor={pageBackgroundColor}
              variant={variant}
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
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
  theme?: EmailTheme;
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
  mobileTopSpacer: number;
  imageSpacer: number;
  mobileImageSpacer?: number;
}

const OverlapImageHero_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const OverlapImageHero_variantPresets: Record<
  OverlapImageHero_HeroWithOverlappedImageVariant,
  OverlapImageHero_VariantPreset
> = {
  default: {
    backgroundImageSrc: emailAsset(`hero/overlapped-image-bg.jpg`),
    contentBackgroundColor: "#000001",
    description:
      "Born on the curb and rebuilt in premium materials, Vault Old Skool delivers that unmistakable side-stripe style with modern comfort. Clean lines, easy colorways, and proven board feel: a timeless staple ready for your rotation.",
    eyebrow: "VANS",
    heading: "Vault Old Skool",
    imageSpacer: 165,
    imageSrc: emailAsset(`hero/overlapped-image.png`),
    mobileImageSpacer: 128,
    mobileTopSpacer: 144,
    mutedTextColor: "#d1d5db",
    subheading: "Classic skate icon, rebuilt for today.",
    textColor: "#f9fafb",
    topSpacer: 244,
  },
  "slanted-left": {
    backgroundImageSrc: emailAsset(`hero/overlapped-image-2-bg.jpg`),
    contentBackgroundColor: "#fffffe",
    description:
      "From trail to tide, GoPro 9.0 locks in buttery-smooth footage with advanced stabilization and crystal-clear detail. A rugged, waterproof build means fewer worries and more moments captured, while intuitive controls make quick work of clips and time-lapses. Mount it, tap record, and jump in.",
    eyebrow: "Introducing",
    heading: "Hero 9 5K Ultra HD",
    imageSpacer: 96,
    imageSrc: emailAsset(`hero/overlapped-image-2.png`),
    mobileTopSpacer: 144,
    mutedTextColor: "#4b5563",
    subheading: "Stabilized action, simple controls.",
    textColor: "#030712",
    topSpacer: 190,
  },
  "slanted-right": {
    backgroundImageSrc: emailAsset(`hero/overlapped-image-3-bg.jpg`),
    contentBackgroundColor: "#000001",
    description:
      "Hydrate without the hassle. This vacuum-insulated stainless bottle keeps drinks cold for hours and hot through long commutes, with a leak-proof lid that tosses easily into bags. A powder-coat finish resists scratches, the slim profile fits cup holders, and the wide mouth makes cleaning simple.",
    eyebrow: "Made in Sweden",
    heading: "Bluewater",
    imageSpacer: 96,
    imageSrc: emailAsset(`hero/overlapped-image-3.png`),
    mobileTopSpacer: 144,
    mutedTextColor: "#d1d5db",
    subheading: "Insulated bottle for all-day carry.",
    textColor: "#f9fafb",
    topSpacer: 190,
  },
};

const OverlapImageHero_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .hero-overlapped-image-frame {
        background-position: center -100px !important;
      }

      .hero-overlapped-image-content {
        padding-left: 24px !important;
        padding-right: 24px !important;
      }

      .hero-overlapped-image-slant {
        border-left-width: 100vw !important;
      }
    }

    @media only screen and (max-width: 430px) {
      .hero-overlapped-image-top-spacer {
        line-height: var(--mobile-top-spacer) !important;
      }

      .hero-overlapped-image-image-spacer {
        line-height: var(--mobile-image-spacer) !important;
      }
    }

    .hero-overlapped-image-cta:hover {
      background-color: #4338ca !important;
    }
  `;

type OverlapImageHero_SectionProps = Omit<
  OverlapImageHero_HeroWithOverlappedImageProps,
  "theme"
>;

const OverlapImageHero_HeroWithOverlappedImageSection = (
  props: OverlapImageHero_SectionProps
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
    imageAlt,
    imageSrc,
    logoAlt,
    logoHref,
    logoSrc,
    mutedTextColor,
    pageBackgroundColor,
    subheading,
    textColor,
    variant,
  } = {
    buttonBackgroundColor: "#4f46e5",
    buttonTextColor: "#fffffe",
    ctaHref: "https://example.com",
    ctaLabel: "Discover now",
    imageAlt: "Hero image",
    logoAlt: "emailcn",
    logoHref: "https://example.com",
    logoSrc: emailAsset(`emailcn-logo-light.png`),
    pageBackgroundColor: "#f1f5f9",
    variant: "default" as OverlapImageHero_HeroWithOverlappedImageVariant,
    ...props,
  };
  const preset = OverlapImageHero_variantPresets[variant];
  const resolvedBackgroundImageSrc =
    backgroundImageSrc ?? preset.backgroundImageSrc;
  const resolvedContentBackgroundColor =
    contentBackgroundColor ?? preset.contentBackgroundColor;
  const resolvedDescription = description ?? preset.description;
  const resolvedEyebrow = eyebrow ?? preset.eyebrow;
  const resolvedHeading = heading ?? preset.heading;
  const resolvedImageSrc = imageSrc ?? preset.imageSrc;
  const resolvedMutedTextColor = mutedTextColor ?? preset.mutedTextColor;
  const resolvedSubheading = subheading ?? preset.subheading;
  const resolvedTextColor = textColor ?? preset.textColor;
  const mobileImageSpacer = preset.mobileImageSpacer ?? preset.imageSpacer;
  return (
    <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            aria-label={imageAlt || undefined}
            className="hero-overlapped-image-frame"
            role={imageAlt ? "img" : undefined}
            style={{
              backgroundColor: resolvedContentBackgroundColor,
              backgroundImage: `url(${resolvedBackgroundImageSrc})`,
              backgroundPosition: "center -200px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              maxWidth: "100%",
              position: "relative",
              width: "600px",
            }}
          >
            <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            <Section style={{ textAlign: "center" }}>
              <Link href={logoHref}>
                <Img
                  alt={logoAlt}
                  src={logoSrc}
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                  width="165"
                />
              </Link>
            </Section>
            <Section
              className="hero-overlapped-image-top-spacer"
              style={
                {
                  "--mobile-top-spacer": `${preset.mobileTopSpacer}px`,
                  lineHeight: `${preset.topSpacer}px`,
                } as CSSProperties
              }
            >
              &zwj;
            </Section>
            <Section>
              <Section style={{ maxHeight: 0, textAlign: "center" }}>
                <Img
                  alt={imageAlt}
                  src={resolvedImageSrc}
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                  width="455"
                />
              </Section>
              <Section
                className="hero-overlapped-image-image-spacer"
                style={
                  {
                    "--mobile-image-spacer": `${mobileImageSpacer}px`,
                    lineHeight: `${preset.imageSpacer}px`,
                  } as CSSProperties
                }
              >
                &zwj;
              </Section>
              {(() => {
                if (variant === "default") {
                  return (
                    <Section
                      style={{
                        backgroundColor: "rgba(3, 7, 18, 0.3)",
                        height: "40px",
                        lineHeight: "40px",
                      }}
                    >
                      &zwj;
                    </Section>
                  );
                }
                return (
                  <Section
                    className="hero-overlapped-image-slant"
                    style={{
                      borderColor:
                        variant === "slanted-left"
                          ? `transparent transparent ${resolvedContentBackgroundColor}`
                          : `transparent transparent transparent ${resolvedContentBackgroundColor}`,
                      borderStyle: "solid",
                      borderWidth:
                        variant === "slanted-left"
                          ? "0 0 100px 600px"
                          : "100px 0 0 600px",
                      height: 0,
                      width: 0,
                    }}
                  />
                );
              })()}
            </Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    className="hero-overlapped-image-content"
                    style={{
                      backgroundColor: resolvedContentBackgroundColor,
                      padding: "0 48px 44px",
                      textAlign: "center",
                    }}
                  >
                    <Section style={{ lineHeight: "128px" }}>&zwj;</Section>
                    <Section
                      style={{
                        color: resolvedTextColor,
                        fontFamily: OverlapImageHero_fontFamily,
                        fontSize: "16px",
                        fontWeight: 200,
                        lineHeight: "24px",
                      }}
                    >
                      {resolvedEyebrow}
                    </Section>
                    <Heading
                      style={{
                        color: resolvedTextColor,
                        fontFamily: OverlapImageHero_fontFamily,
                        fontSize: "48px",
                        fontWeight: 500,
                        lineHeight: 1,
                        margin: 0,
                      }}
                      as="h1"
                    >
                      {resolvedHeading}
                    </Heading>
                    <Text
                      style={{
                        color: resolvedTextColor,
                        fontFamily: OverlapImageHero_fontFamily,
                        fontSize: "18px",
                        lineHeight: "28px",
                        margin: 0,
                      }}
                    >
                      {resolvedSubheading}
                    </Text>
                    <Text
                      style={{
                        color: resolvedMutedTextColor,
                        fontFamily: OverlapImageHero_fontFamily,
                        fontSize: "16px",
                        fontWeight: 200,
                        lineHeight: "24px",
                        margin: "24px 0 0",
                      }}
                    >
                      {resolvedDescription}
                    </Text>
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                    {ctaLabel && ctaHref ? (
                      <Link
                        className="hero-overlapped-image-cta"
                        href={ctaHref}
                        style={{
                          backgroundColor: buttonBackgroundColor,
                          borderRadius: "8px",
                          color: buttonTextColor,
                          display: "inline-block",
                          fontFamily: OverlapImageHero_fontFamily,
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: 1,
                          padding: "14px 20px",
                          textDecoration: "none",
                        }}
                      >
                        <span style={{ marginRight: "8px" }}>{ctaLabel}</span>
                        <Img
                          alt=""
                          src={emailAsset(`icon-arrow-right.png`)}
                          style={{
                            display: "inline-block",
                            maxWidth: "100%",
                            verticalAlign: "baseline",
                          }}
                          width="12"
                        />
                      </Link>
                    ) : null}
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
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
    <Html>
      <EmailHead>
        <DefaultFonts />
        <style
          dangerouslySetInnerHTML={{
            __html: OverlapImageHero_responsiveStyles,
          }}
        />
      </EmailHead>
      <Preview>{`${props.eyebrow ?? preset.eyebrow} — ${props.heading ?? preset.heading}`}</Preview>
      <Tailwind config={createEmailTailwindConfig(theme)}>
        <Body
          style={{
            backgroundColor: pageBackgroundColor,
            fontFamily: OverlapImageHero_fontFamily,
          }}
          className="m-0"
        >
          <Container className="mx-auto max-w-[600px] w-[600px]">
            <OverlapImageHero_HeroWithOverlappedImageSection
              {...props}
              pageBackgroundColor={pageBackgroundColor}
              variant={variant}
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
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
  variant?:
    | Parameters<typeof __OverlapContentHero>[0]["variant"]
    | Parameters<typeof __OverlapImageHero>[0]["variant"];
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
  variant: variantOverride,
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
        variant={
          (variantOverride ??
            (slanted ? `slanted-${direction}` : "default")) as Parameters<
            typeof __OverlapImageHero
          >[0]["variant"]
        }
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
      variant={
        (variantOverride ??
          `${direction === "right" ? "reversed" : "basic"}${gradient ? "-with-gradient" : ""}`) as Parameters<
          typeof __OverlapContentHero
        >[0]["variant"]
      }
    />
  );
};

OverlapHero.PreviewProps = {
  direction: "left",
  gradient: false,
  slanted: false,
  target: "content",
} satisfies OverlapHeroProps;
