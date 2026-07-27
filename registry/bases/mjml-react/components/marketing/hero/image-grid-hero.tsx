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
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { defaultTheme } from "@/registry/themes/definitions/default";

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
  theme: EmailTheme;
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
  theme?: EmailTheme;
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

const ImageGridHero_regularImages: ImageGridHero_HeroWithImageGridImage[] =
  Array.from({ length: 7 }, (_, index) => ({
    alt: `Image ${index + 1}`,
    src: `https://emailcn.vercel.app/api/email-assets/hero/mosaic-${index + 1}.jpg`,
  }));

const ImageGridHero_offsetImageNumbers = [1, 2, 7, 10, 4, 6, 8, 9, 5, 11];

const ImageGridHero_offsetImages = ImageGridHero_offsetImageNumbers.map(
  (number, index) => ({
    alt: `Image ${index + 1}`,
    src: `https://emailcn.vercel.app/api/email-assets/hero/mosaic-${number}.jpg`,
  })
);

const ImageGridHero_HeroWithImageGridSection = ({
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
  subheading = "The evolution of the sneaker",
  variant = "images-bottom",
}: Omit<ImageGridHero_HeroWithImageGridProps, "theme">) => {
  const offset = variant.startsWith("offset-");
  const defaults = offset
    ? ImageGridHero_offsetImages
    : ImageGridHero_regularImages;
  const resolvedImages = defaults.map((fallback, index) => ({
    ...fallback,
    ...images[index],
  }));
  const gallery = (
    <>
      {[resolvedImages.slice(0, 5), resolvedImages.slice(5)].map(
        (row, rowIndex) => (
          <MjmlSection
            backgroundColor={backgroundColor}
            key={`gallery-row-${rowIndex}`}
            padding="12px 24px"
          >
            {row.map((image, index) => (
              <MjmlColumn
                key={`${image.src}-${index}`}
                padding={
                  offset && index % 2 === 0 ? "20px 6px 0" : "0 6px 20px"
                }
                width={`${100 / row.length}%`}
              >
                <MjmlImage
                  alt={image.alt}
                  borderRadius="4px"
                  padding="0"
                  src={image.src}
                  width={offset ? "91px" : "120px"}
                />
              </MjmlColumn>
            ))}
          </MjmlSection>
        )
      )}
    </>
  );
  const content = (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 64px">
      <MjmlColumn padding="0">
        <HeroCopy
          align="center"
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
          textColor="#030712"
        />
      </MjmlColumn>
    </MjmlSection>
  );
  const imagesFirst = variant.endsWith("-top");
  return (
    <>
      {imagesFirst ? gallery : content}
      {imagesFirst ? content : gallery}
    </>
  );
};

const ImageGridHero_HeroWithImageGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: ImageGridHero_HeroWithImageGridProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview={props.heading ?? "Step into the hype"}
    theme={theme}
  >
    <ImageGridHero_HeroWithImageGridSection {...props} />
  </HeroEmailShell>
);

ImageGridHero_HeroWithImageGrid.PreviewProps = {
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
