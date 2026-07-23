import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
  Heading,
  Link,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

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
  theme?: TailwindConfig;
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
  <Section style={{ fontSize: 0, height, lineHeight: `${height}px` }}>
    &zwj;
  </Section>
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
    <Section style={{ padding: "0 24px", textAlign: "center" }}>
      <Spacer height={imagesFirst ? 20 : 44} />
      <Text
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
      </Text>
      <Heading
        className="hero-image-grid-heading"
        style={{
          color: "#030712",
          fontFamily,
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
          fontFamily,
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
          fontFamily,
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
      <Section style={{ textAlign: "center" }}>
        {ctaLabel && ctaHref ? (
          <Button
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
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>{`${heading} — ${subheading}`}</Preview>
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
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
        </Container>
      </Body>
    </Tailwind>
  </Html>
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
