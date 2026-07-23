/* eslint-disable @next/next/no-img-element */
import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type HeroWithImageGridVariant =
  | "images-bottom"
  | "images-top"
  | "offset-images-bottom"
  | "offset-images-top";

export interface HeroWithImageGridImage {
  alt: string;
  src: string;
}

export interface HeroWithImageGridProps {
  theme?: EmailThemeTokens;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  images?: HeroWithImageGridImage[];
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: HeroWithImageGridVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .hero-image-grid-heading {
      font-size: 36px !important;
      line-height: 40px !important;
    }

    .hero-image-grid-image {
      margin: 0 12px 24px !important;
      max-width: 96px !important;
    }

    .hero-image-grid-gap {
      display: none !important;
    }
  }
`;

const regularImages: HeroWithImageGridImage[] = Array.from(
  { length: 7 },
  (_, index) => ({
    alt: `Image ${index + 1}`,
    src: `https://emailcn.vercel.app/api/email-assets/hero/mosaic-${index + 1}.jpg`,
  })
);

const offsetImageNumbers = [1, 2, 7, 10, 4, 6, 8, 9, 5, 11];

const offsetImages: HeroWithImageGridImage[] = offsetImageNumbers.map(
  (imageNumber, index) => ({
    alt: `Image ${index + 1}`,
    src: `https://emailcn.vercel.app/api/email-assets/hero/mosaic-${imageNumber}.jpg`,
  })
);

const Spacer = ({ height }: { height: number }) => (
  <div style={{ fontSize: 0, height, lineHeight: `${height}px` }}>&zwj;</div>
);

const ImageGallery = ({
  images,
  offset,
}: {
  images: HeroWithImageGridImage[];
  offset: boolean;
}) => {
  const defaults = offset ? offsetImages : regularImages;
  const resolvedImages = defaults.map((fallback, index) =>
    images[index] ? { ...fallback, ...images[index] } : fallback
  );
  const imageWidth = offset ? 91 : 120;
  const wrapAfter = offset ? 4 : 3;

  return (
    <div style={{ fontSize: 0, textAlign: "center" }}>
      {resolvedImages.map((image, index) => (
        <span key={`${image.src}-${index}`}>
          <img
            alt={image.alt}
            className="hero-image-grid-image"
            src={image.src}
            width={imageWidth}
            style={{
              borderRadius: "4px",
              display: "inline-block",
              marginBottom: "48px",
              marginTop: offset && index % 2 === 0 ? "24px" : 0,
              maxWidth: "100%",
              verticalAlign: "middle",
            }}
          />
          {index < resolvedImages.length - 1 && index !== wrapAfter ? (
            <span
              className="hero-image-grid-gap"
              style={{ display: "inline-block", width: "24px" }}
            >
              &nbsp;
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
};

type SectionProps = Required<
  Omit<HeroWithImageGridProps, "theme" | "variant">
> & {
  variant: HeroWithImageGridVariant;
};

export const HeroWithImageGridSection = ({
  backgroundColor,
  buttonBackgroundColor,
  buttonTextColor,
  ctaHref,
  ctaLabel,
  description,
  eyebrow,
  heading,
  images,
  logoAlt,
  logoHref,
  logoSrc,
  subheading,
  variant,
}: SectionProps) => {
  const imagesFirst = variant.endsWith("-top");
  const offset = variant.startsWith("offset-");
  const gallery = <ImageGallery images={images} offset={offset} />;
  const content = (
    <div style={{ padding: "0 24px", textAlign: "center" }}>
      <Spacer height={imagesFirst ? 20 : 44} />
      <p
        style={{
          color: "#030712",
          fontFamily,
          fontSize: "16px",
          fontWeight: 200,
          lineHeight: "24px",
          margin: 0,
        }}
      >
        {eyebrow}
      </p>
      <h1
        className="hero-image-grid-heading"
        style={{
          color: "#030712",
          fontFamily,
          fontSize: "48px",
          fontWeight: 500,
          lineHeight: "58px",
          margin: 0,
        }}
      >
        {heading}
      </h1>
      <p
        style={{
          color: "#030712",
          fontFamily,
          fontSize: "18px",
          lineHeight: "28px",
          margin: 0,
        }}
      >
        {subheading}
      </p>
      <p
        style={{
          color: "#4b5563",
          fontFamily,
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: "24px",
          margin: "44px 0 0",
        }}
      >
        {description}
      </p>
    </div>
  );

  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ backgroundColor }}
      width="100%"
    >
      <tbody>
        <tr>
          <td style={{ padding: "44px 0", textAlign: "center" }}>
            <div style={{ textAlign: "center" }}>
              <a href={logoHref}>
                <img
                  alt={logoAlt}
                  src={logoSrc}
                  width="165"
                  style={{
                    display: "inline-block",
                    maxWidth: "100%",
                    verticalAlign: "middle",
                  }}
                />
              </a>
            </div>
            {imagesFirst ? (
              <>
                <Spacer height={44} />
                {gallery}
                {content}
              </>
            ) : (
              <>
                {content}
                <Spacer height={44} />
                {gallery}
              </>
            )}
            <Spacer height={44} />
            {ctaLabel && ctaHref ? (
              <a
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
                  src="https://emailcn.vercel.app/api/email-assets/icon-arrow-right.png"
                  width="12"
                  style={{ maxWidth: "100%", verticalAlign: "baseline" }}
                />
              </a>
            ) : null}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const HeroWithImageGrid = ({
  backgroundColor = "#fffffe",
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Discover now",
  description = "A curated look at design, culture, and creativity in motion. From classics reborn to boundary-pushing silhouettes — see what's shaping the streets today.",
  eyebrow = "NEW ARRIVALS",
  heading = "Step into the hype",
  images = [],
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = "https://emailcn.vercel.app/api/email-assets/emailcn-logo.png",
  pageBackgroundColor = "#f1f5f9",
  subheading = "The evolution of the sneaker",
  theme = defaultTheme,
  variant = "images-bottom",
}: HeroWithImageGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{`${heading} — ${subheading}`}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper backgroundColor={backgroundColor} padding="0">
        <MjmlRaw>
          <HeroWithImageGridSection
            backgroundColor={backgroundColor}
            buttonBackgroundColor={buttonBackgroundColor}
            buttonTextColor={buttonTextColor}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            description={description}
            eyebrow={eyebrow}
            heading={heading}
            images={images}
            logoAlt={logoAlt}
            logoHref={logoHref}
            logoSrc={logoSrc}
            pageBackgroundColor={pageBackgroundColor}
            subheading={subheading}
            variant={variant}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeroWithImageGrid.PreviewProps = {
  backgroundColor: "#fffffe",
  buttonBackgroundColor: "#4f46e5",
  buttonTextColor: "#fffffe",
  ctaHref: "https://example.com",
  ctaLabel: "Discover now",
  description:
    "A curated look at design, culture, and creativity in motion. From classics reborn to boundary-pushing silhouettes — see what's shaping the streets today.",
  eyebrow: "NEW ARRIVALS",
  heading: "Step into the hype",
  images: [],
  logoAlt: "emailcn",
  logoHref: "https://example.com",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/emailcn-logo.png",
  pageBackgroundColor: "#f1f5f9",
  subheading: "The evolution of the sneaker",
  theme: defaultTheme,
  variant: "images-bottom",
} satisfies HeroWithImageGridProps;
