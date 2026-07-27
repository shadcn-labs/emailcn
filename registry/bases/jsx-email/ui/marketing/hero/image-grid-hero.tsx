import {
  Body,
  Button,
  Container,
  Head as EmailHead,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Heading,
  Link,
} from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/themes/definitions/default";
import type { EmailThemeTokens } from "@/registry/themes/definitions/default";

type ImageGridHero_HeroWithImageGridVariant =
  | "images-bottom"
  | "images-top"
  | "offset-images-bottom"
  | "offset-images-top";

interface ImageGridHero_HeroWithImageGridImage {
  alt: string;
  src: string;
}

interface ImageGridHero_HeroWithImageGridProps {
  theme?: EmailThemeTokens;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  images?: ImageGridHero_HeroWithImageGridImage[];
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: ImageGridHero_HeroWithImageGridVariant;
}

const ImageGridHero_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const ImageGridHero_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .hero-image-grid-container {
        width: 100% !important;
      }

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

const ImageGridHero_regularImages: ImageGridHero_HeroWithImageGridImage[] =
  Array.from({ length: 7 }, (_, index) => ({
    alt: `Image ${index + 1}`,
    src: `https://emailcn.vercel.app/api/email-assets/hero/mosaic-${index + 1}.jpg`,
  }));

const ImageGridHero_offsetImageNumbers = [1, 2, 7, 10, 4, 6, 8, 9, 5, 11];

const ImageGridHero_offsetImages: ImageGridHero_HeroWithImageGridImage[] =
  ImageGridHero_offsetImageNumbers.map((imageNumber, index) => ({
    alt: `Image ${index + 1}`,
    src: `https://emailcn.vercel.app/api/email-assets/hero/mosaic-${imageNumber}.jpg`,
  }));

const ImageGridHero_Spacer = ({ height }: { height: number }) => (
  <Section style={{ fontSize: 0, height, lineHeight: `${height}px` }}>
    &zwj;
  </Section>
);

const ImageGridHero_ImageGallery = ({
  images,
  offset,
}: {
  images: ImageGridHero_HeroWithImageGridImage[];
  offset: boolean;
}) => {
  const defaults = offset
    ? ImageGridHero_offsetImages
    : ImageGridHero_regularImages;
  const resolvedImages = defaults.map((fallback, index) =>
    images[index] ? { ...fallback, ...images[index] } : fallback
  );
  const imageWidth = offset ? 91 : 120;
  const wrapAfter = offset ? 4 : 3;
  return (
    <Section style={{ fontSize: 0, textAlign: "center" }}>
      {resolvedImages.map((image, index) => (
        <span key={`${image.src}-${index}`}>
          <Img
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
    </Section>
  );
};

type ImageGridHero_SectionProps = Required<
  Omit<ImageGridHero_HeroWithImageGridProps, "theme" | "variant">
> & {
  variant: ImageGridHero_HeroWithImageGridVariant;
};

const ImageGridHero_HeroWithImageGridSection = ({
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
}: ImageGridHero_SectionProps) => {
  const imagesFirst = variant.endsWith("-top");
  const offset = variant.startsWith("offset-");
  const gallery = (
    <ImageGridHero_ImageGallery images={images} offset={offset} />
  );
  const content = (
    <Section style={{ padding: "0 24px", textAlign: "center" }}>
      <ImageGridHero_Spacer height={imagesFirst ? 20 : 44} />
      <Text
        style={{
          color: "#030712",
          fontFamily: ImageGridHero_fontFamily,
          fontSize: "16px",
          fontWeight: 200,
          lineHeight: "24px",
          margin: 0,
        }}
      >
        {eyebrow}
      </Text>
      <Heading
        className="hero-image-grid-heading"
        style={{
          color: "#030712",
          fontFamily: ImageGridHero_fontFamily,
          fontSize: "48px",
          fontWeight: 500,
          lineHeight: "58px",
          margin: 0,
        }}
        as="h1"
      >
        {heading}
      </Heading>
      <Text
        style={{
          color: "#030712",
          fontFamily: ImageGridHero_fontFamily,
          fontSize: "18px",
          lineHeight: "28px",
          margin: 0,
        }}
      >
        {subheading}
      </Text>
      <Text
        style={{
          color: "#4b5563",
          fontFamily: ImageGridHero_fontFamily,
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: "24px",
          margin: "44px 0 0",
        }}
      >
        {description}
      </Text>
    </Section>
  );
  return (
    <Section style={{ backgroundColor, padding: "44px 0" }}>
      <Section style={{ textAlign: "center" }}>
        <Link href={logoHref}>
          <Img
            alt={logoAlt}
            src={logoSrc}
            width="165"
            style={{ display: "inline-block", maxWidth: "100%" }}
          />
        </Link>
      </Section>
      {imagesFirst ? (
        <>
          <ImageGridHero_Spacer height={44} />
          {gallery}
          {content}
        </>
      ) : (
        <>
          {content}
          <ImageGridHero_Spacer height={44} />
          {gallery}
        </>
      )}
      <ImageGridHero_Spacer height={44} />
      <Section style={{ textAlign: "center" }}>
        {ctaLabel && ctaHref ? (
          <Button
            align="center"
            height={44}
            href={ctaHref}
            width={166}
            style={{
              backgroundColor: buttonBackgroundColor,
              borderRadius: "8px",
              color: buttonTextColor,
              display: "inline-block",
              fontFamily: ImageGridHero_fontFamily,
              fontSize: "16px",
              fontWeight: 500,
              height: "auto",
              lineHeight: 1,
              padding: "14px 20px",
              textDecoration: "none",
              width: "auto",
            }}
          >
            <span style={{ marginRight: "8px" }}>{ctaLabel}</span>
            <Img
              alt=""
              src="https://emailcn.vercel.app/api/email-assets/icon-arrow-right.png"
              width="12"
              style={{
                display: "inline-block",
                maxWidth: "100%",
                verticalAlign: "baseline",
              }}
            />
          </Button>
        ) : null}
      </Section>
    </Section>
  );
};

const ImageGridHero_HeroWithImageGrid = ({
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
}: ImageGridHero_HeroWithImageGridProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: ImageGridHero_responsiveStyles }}
      />
    </EmailHead>
    <Preview>{`${heading} — ${subheading}`}</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        color: theme.colorText,
        fontFamily: ImageGridHero_fontFamily,
        margin: 0,
      }}
    >
      <Container
        className="hero-image-grid-container"
        style={{
          backgroundColor,
          margin: "0 auto",
          maxWidth: "600px",
          width: "600px",
        }}
      >
        <ImageGridHero_HeroWithImageGridSection
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
      </Container>
    </Body>
  </Html>
);

ImageGridHero_HeroWithImageGrid.PreviewProps = {
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
} satisfies ImageGridHero_HeroWithImageGridProps;

const __ImageGridHero = ImageGridHero_HeroWithImageGrid;

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

export interface ImageGridHeroProps {
  theme?: Parameters<typeof __ImageGridHero>[0]["theme"];
  content?: HeroContent;
  images?: HeroImage[];
  brand?: HeroBrand;
  imagePosition?: "top" | "bottom";
  offset?: boolean;
}

export const ImageGridHero = ({
  theme,
  content,
  images,
  brand,
  imagePosition = "bottom",
  offset = false,
}: ImageGridHeroProps) => (
  <__ImageGridHero
    ctaHref={content?.actions?.[0]?.href}
    ctaLabel={content?.actions?.[0]?.label}
    description={content?.description}
    eyebrow={content?.eyebrow}
    heading={content?.heading}
    subheading={content?.subheading}
    images={images?.map((image) => ({ ...image, alt: image.alt ?? "" }))}
    logoAlt={brand?.logo.alt}
    logoHref={brand?.href}
    logoSrc={brand?.logo.src}
    theme={theme}
    variant={`${offset ? "offset-" : ""}images-${imagePosition}`}
  />
);

ImageGridHero.PreviewProps = {
  imagePosition: "bottom",
  offset: false,
} satisfies ImageGridHeroProps;
