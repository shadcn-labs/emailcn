import { MjmlColumn, MjmlImage, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  HeroCopy,
  HeroEmailShell,
} from "@/registry/bases/mjml-react/ui/marketing/hero/hero-shared";

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

const regularImages: HeroWithImageGridImage[] = Array.from(
  { length: 7 },
  (_, index) => ({
    alt: `Image ${index + 1}`,
    src: `https://emailcn.vercel.app/api/email-assets/hero/mosaic-${index + 1}.jpg`,
  })
);
const offsetImageNumbers = [1, 2, 7, 10, 4, 6, 8, 9, 5, 11];
const offsetImages = offsetImageNumbers.map((number, index) => ({
  alt: `Image ${index + 1}`,
  src: `https://emailcn.vercel.app/api/email-assets/hero/mosaic-${number}.jpg`,
}));

export const HeroWithImageGridSection = ({
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
}: Omit<HeroWithImageGridProps, "theme">) => {
  const offset = variant.startsWith("offset-");
  const defaults = offset ? offsetImages : regularImages;
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

export const HeroWithImageGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeroWithImageGridProps) => (
  <HeroEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview={props.heading ?? "Step into the hype"}
    theme={theme}
  >
    <HeroWithImageGridSection {...props} />
  </HeroEmailShell>
);

HeroWithImageGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "images-bottom",
} satisfies HeroWithImageGridProps;
