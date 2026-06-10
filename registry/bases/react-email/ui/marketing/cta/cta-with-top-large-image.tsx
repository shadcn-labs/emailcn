/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
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
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type CTAWithTopLargeImageVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CTAWithTopLargeImageProps {
  theme?: TailwindConfig;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: CTAWithTopLargeImageVariant;
}

export const CTAWithTopLargeImageSection = ({
  heading = "New Collection",
  subtext = "Explore our latest arrivals.",
  ctaLabel = "Shop Now",
  ctaHref = "#",
  imageSrc = "https://static.photos/city/600x300/2",
  imageAlt = "",
  variant = "default",
}: Omit<CTAWithTopLargeImageProps, "theme">) => {
  const getVariantClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[-10deg]";
      }
      case "slanted-right": {
        return "skew-x-[10deg]";
      }
      default: {
        return "";
      }
    }
  };

  const getUnskewClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[10deg]";
      }
      case "slanted-right": {
        return "skew-x-[-10deg]";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <Section className={`bg-background py-16 ${getVariantClass()}`}>
      <Container
        className={`mx-auto max-w-container text-center ${getUnskewClass()}`}
      >
        <Img
          src={imageSrc}
          alt={imageAlt}
          width="600"
          height="300"
          className="mb-8 w-full h-auto rounded-lg object-cover"
        />
        <Text className="m-0 text-3xl font-bold text-heading leading-snug text-foreground">
          {heading}
        </Text>
        <Text className="mt-4 mb-8 text-lg text-foreground-muted">
          {subtext}
        </Text>
        {ctaLabel && ctaHref ? (
          <Button
            href={ctaHref}
            className="inline-block rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-fg no-underline"
          >
            {ctaLabel}
          </Button>
        ) : null}
      </Container>
    </Section>
  );
};

export const CTAWithTopLargeImage = ({
  theme = defaultTheme,
  heading = "New Collection",
  subtext = "Explore our latest arrivals.",
  ctaLabel = "Shop Now",
  ctaHref = "#",
  imageSrc = "https://static.photos/city/600x300/3",
  imageAlt = "",
  variant = "default",
}: CTAWithTopLargeImageProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CTAWithTopLargeImageSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          subtext={subtext}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

CTAWithTopLargeImage.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Shop Now",
  heading: "New Collection",
  imageAlt: "Collection",
  imageSrc: "https://static.photos/city/600x300/4",
  subtext: "Explore our latest arrivals.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAWithTopLargeImageProps;
