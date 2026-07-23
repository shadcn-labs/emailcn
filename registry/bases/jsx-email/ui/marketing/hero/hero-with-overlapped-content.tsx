/* eslint-disable @next/next/no-img-element, complexity */
import { Body, Container, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const assetRoot = "https://emailcn.vercel.app/api/email-assets";

const variantPresets: Record<HeroWithOverlappedContentVariant, VariantPreset> =
  {
    basic: {
      backgroundImageSrc: `${assetRoot}/hero/overlapped-content-bg-1.jpg`,
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
      backgroundImageSrc: `${assetRoot}/hero/overlapped-content-bg-3.jpg`,
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
      backgroundImageSrc: `${assetRoot}/hero/overlapped-content-bg-2.jpg`,
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
      backgroundImageSrc: `${assetRoot}/hero/overlapped-content-bg-4.jpg`,
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

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .hero-overlapped-content-side {
      width: 28px !important;
    }
  }

  .hero-overlapped-content-cta:hover {
    background-color: #4338ca !important;
  }
`;

type SectionProps = Omit<HeroWithOverlappedContentProps, "theme">;

export const HeroWithOverlappedContentSection = ({
  backgroundImageSrc,
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  contentBackgroundColor,
  ctaHref = "https://example.com",
  ctaLabel = "Discover now",
  description,
  eyebrow,
  heading,
  imageAlt,
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = `${assetRoot}/emailcn-logo-light.png`,
  pageBackgroundColor = "#f1f5f9",
  subheading,
  textColor,
  variant = "basic",
}: SectionProps) => {
  const preset = variantPresets[variant];
  const isReversed = variant.startsWith("reversed");
  const hasGradient = variant.endsWith("with-gradient");
  const resolvedContentBackground =
    contentBackgroundColor ?? preset.contentBackgroundColor;
  const resolvedTextColor = textColor ?? preset.textColor;

  const content = (
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
            <p
              style={{
                color: resolvedTextColor,
                fontFamily,
                fontSize: "16px",
                fontWeight: 200,
                lineHeight: "24px",
                margin: 0,
              }}
            >
              {eyebrow ?? preset.eyebrow}
            </p>
            <h1
              style={{
                color: resolvedTextColor,
                fontFamily,
                fontSize: "48px",
                fontWeight: 500,
                margin: 0,
              }}
            >
              {heading ?? preset.heading}
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
              {subheading ?? preset.subheading}
            </p>
            <div style={{ lineHeight: "44px" }}>&zwj;</div>
            <p
              style={{
                color: resolvedTextColor,
                fontFamily,
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "24px",
                margin: 0,
              }}
            >
              {description ?? preset.description}
            </p>
            <div style={{ lineHeight: "24px" }}>&zwj;</div>
            {ctaLabel && ctaHref ? (
              <a
                className="hero-overlapped-content-cta"
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
                  style={{ maxWidth: "100%", verticalAlign: "baseline" }}
                  width="12"
                />
              </a>
            ) : null}
          </td>
        </tr>
      </tbody>
    </table>
  );

  const logo = (
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
  );

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
              <div style={{ lineHeight: "48px" }}>&zwj;</div>
            )}
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
                    className="hero-overlapped-content-side"
                    style={{ width: "48px" }}
                  >
                    &zwj;
                  </td>
                  <td>
                    {isReversed ? (
                      <>
                        {content}
                        <div
                          style={{ lineHeight: `${preset.reversedSpacer}px` }}
                        >
                          &zwj;
                        </div>
                        {logo}
                        <div style={{ lineHeight: "48px" }}>&zwj;</div>
                      </>
                    ) : (
                      <>
                        {logo}
                        <div style={{ lineHeight: "212px" }}>&zwj;</div>
                        {content}
                        <div style={{ lineHeight: "40px" }}>&zwj;</div>
                      </>
                    )}
                  </td>
                  <td
                    className="hero-overlapped-content-side"
                    style={{ width: "48px" }}
                  >
                    &zwj;
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

export const HeroWithOverlappedContent = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "basic",
  ...props
}: HeroWithOverlappedContentProps) => {
  const preset = variantPresets[variant];

  return (
    <Html>
      <Head>
        <DefaultFonts />
        <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
      </Head>
      <Preview>{props.heading ?? preset.heading}</Preview>
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
          <HeroWithOverlappedContentSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Html>
  );
};

HeroWithOverlappedContent.PreviewProps = {
  theme: defaultTheme,
  variant: "basic",
} satisfies HeroWithOverlappedContentProps;
