/* eslint-disable @next/next/no-img-element, complexity */
import { Body, Container, Head, Html, Preview } from "jsx-email";
import type { CSSProperties } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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
  mobileTopSpacer: number;
  imageSpacer: number;
  mobileImageSpacer?: number;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const assetRoot = "https://emailcn.vercel.app/api/email-assets";

const variantPresets: Record<HeroWithOverlappedImageVariant, VariantPreset> = {
  default: {
    backgroundImageSrc: `${assetRoot}/hero/overlapped-image-bg.jpg`,
    contentBackgroundColor: "#000001",
    description:
      "Born on the curb and rebuilt in premium materials, Vault Old Skool delivers that unmistakable side-stripe style with modern comfort. Clean lines, easy colorways, and proven board feel: a timeless staple ready for your rotation.",
    eyebrow: "VANS",
    heading: "Vault Old Skool",
    imageSpacer: 165,
    imageSrc: `${assetRoot}/hero/overlapped-image.png`,
    mobileImageSpacer: 128,
    mobileTopSpacer: 144,
    mutedTextColor: "#d1d5db",
    subheading: "Classic skate icon, rebuilt for today.",
    textColor: "#f9fafb",
    topSpacer: 244,
  },
  "slanted-left": {
    backgroundImageSrc: `${assetRoot}/hero/overlapped-image-2-bg.jpg`,
    contentBackgroundColor: "#fffffe",
    description:
      "From trail to tide, GoPro 9.0 locks in buttery-smooth footage with advanced stabilization and crystal-clear detail. A rugged, waterproof build means fewer worries and more moments captured, while intuitive controls make quick work of clips and time-lapses. Mount it, tap record, and jump in.",
    eyebrow: "Introducing",
    heading: "Hero 9 5K Ultra HD",
    imageSpacer: 96,
    imageSrc: `${assetRoot}/hero/overlapped-image-2.png`,
    mobileTopSpacer: 144,
    mutedTextColor: "#4b5563",
    subheading: "Stabilized action, simple controls.",
    textColor: "#030712",
    topSpacer: 190,
  },
  "slanted-right": {
    backgroundImageSrc: `${assetRoot}/hero/overlapped-image-3-bg.jpg`,
    contentBackgroundColor: "#000001",
    description:
      "Hydrate without the hassle. This vacuum-insulated stainless bottle keeps drinks cold for hours and hot through long commutes, with a leak-proof lid that tosses easily into bags. A powder-coat finish resists scratches, the slim profile fits cup holders, and the wide mouth makes cleaning simple.",
    eyebrow: "Made in Sweden",
    heading: "Bluewater",
    imageSpacer: 96,
    imageSrc: `${assetRoot}/hero/overlapped-image-3.png`,
    mobileTopSpacer: 144,
    mutedTextColor: "#d1d5db",
    subheading: "Insulated bottle for all-day carry.",
    textColor: "#f9fafb",
    topSpacer: 190,
  },
};

const responsiveStyles = `
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
  pageBackgroundColor = "#f1f5f9",
  subheading,
  textColor,
  variant = "default",
}: SectionProps) => {
  const preset = variantPresets[variant];
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
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ backgroundColor: pageBackgroundColor }}
      width="100%"
    >
      <tbody>
        <tr>
          <td>&zwj;</td>
          <td
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
            <div style={{ lineHeight: "44px" }}>&zwj;</div>
            <div style={{ textAlign: "center" }}>
              <a href={logoHref}>
                <img
                  alt={logoAlt}
                  src={logoSrc}
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                  width="165"
                />
              </a>
            </div>
            <div
              className="hero-overlapped-image-top-spacer"
              style={
                {
                  "--mobile-top-spacer": `${preset.mobileTopSpacer}px`,
                  lineHeight: `${preset.topSpacer}px`,
                } as CSSProperties
              }
            >
              &zwj;
            </div>
            <div>
              <div style={{ maxHeight: 0, textAlign: "center" }}>
                <img
                  alt={imageAlt}
                  src={resolvedImageSrc}
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                  width="455"
                />
              </div>
              <div
                className="hero-overlapped-image-image-spacer"
                style={
                  {
                    "--mobile-image-spacer": `${mobileImageSpacer}px`,
                    lineHeight: `${preset.imageSpacer}px`,
                  } as CSSProperties
                }
              >
                &zwj;
              </div>
              {variant === "default" ? (
                <div
                  style={{
                    backgroundColor: "rgba(3, 7, 18, 0.3)",
                    height: "40px",
                    lineHeight: "40px",
                  }}
                >
                  &zwj;
                </div>
              ) : (
                <div
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
              )}
            </div>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              width="100%"
            >
              <tbody>
                <tr>
                  <td
                    className="hero-overlapped-image-content"
                    style={{
                      backgroundColor: resolvedContentBackgroundColor,
                      padding: "0 48px 44px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ lineHeight: "128px" }}>&zwj;</div>
                    <div
                      style={{
                        color: resolvedTextColor,
                        fontFamily,
                        fontSize: "16px",
                        fontWeight: 200,
                        lineHeight: "24px",
                      }}
                    >
                      {resolvedEyebrow}
                    </div>
                    <h1
                      style={{
                        color: resolvedTextColor,
                        fontFamily,
                        fontSize: "48px",
                        fontWeight: 500,
                        lineHeight: 1,
                        margin: 0,
                      }}
                    >
                      {resolvedHeading}
                    </h1>
                    <p
                      style={{
                        color: resolvedTextColor,
                        fontFamily,
                        fontSize: "18px",
                        lineHeight: "28px",
                        margin: 0,
                      }}
                    >
                      {resolvedSubheading}
                    </p>
                    <p
                      style={{
                        color: resolvedMutedTextColor,
                        fontFamily,
                        fontSize: "16px",
                        fontWeight: 200,
                        lineHeight: "24px",
                        margin: "24px 0 0",
                      }}
                    >
                      {resolvedDescription}
                    </p>
                    <div style={{ lineHeight: "24px" }}>&zwj;</div>
                    {ctaLabel && ctaHref ? (
                      <a
                        className="hero-overlapped-image-cta"
                        href={ctaHref}
                        style={{
                          backgroundColor: buttonBackgroundColor,
                          borderRadius: "8px",
                          color: buttonTextColor,
                          display: "inline-block",
                          fontFamily,
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: 1,
                          padding: "14px 20px",
                          textDecoration: "none",
                        }}
                      >
                        <span style={{ marginRight: "8px" }}>{ctaLabel}</span>
                        <img
                          alt=""
                          src={`${assetRoot}/icon-arrow-right.png`}
                          style={{
                            maxWidth: "100%",
                            verticalAlign: "baseline",
                          }}
                          width="12"
                        />
                      </a>
                    ) : null}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
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
    <Html>
      <Head>
        <DefaultFonts />
        <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
      </Head>
      <Preview>{`${props.eyebrow ?? preset.eyebrow} — ${props.heading ?? preset.heading}`}</Preview>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          color: theme.colorText,
          fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <HeroWithOverlappedImageSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Html>
  );
};

HeroWithOverlappedImage.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithOverlappedImageProps;
