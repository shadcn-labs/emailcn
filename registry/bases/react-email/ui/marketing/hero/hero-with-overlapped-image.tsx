/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
  Img,
  Row,
  Column,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type HeroWithOverlappedImageVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithOverlappedImageProps {
  theme?: TailwindConfig;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: HeroWithOverlappedImageVariant;
}

export const HeroWithOverlappedImageSection = ({
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  subheading = "Get started with your account",
  imageSrc = "https://static.photos/city/400x500/2",
  imageAlt = "",
  variant = "default",
}: Omit<HeroWithOverlappedImageProps, "theme">) => {
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
    <Section
      className={`relative overflow-visible bg-background py-16 ${getVariantClass()}`}
    >
      <Container className={`mx-auto max-w-container ${getUnskewClass()}`}>
        <Row>
          <Column className="w-1/2 pr-8 align-middle">
            <Text className="m-0 font-bold text-heading leading-snug text-foreground">
              {heading}
            </Text>
            <Text className="mt-4 mb-8 text-lg leading-snug text-foreground-muted">
              {subheading}
            </Text>
            {ctaLabel && ctaHref ? (
              <Button
                href={ctaHref}
                className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-fg no-underline"
              >
                {ctaLabel}
              </Button>
            ) : null}
          </Column>
          <Column className="w-1/2 align-middle">
            <div className="-mr-16">
              <Img
                src={imageSrc}
                alt={imageAlt}
                width="400"
                height="500"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export const HeroWithOverlappedImage = ({
  theme = defaultTheme,
  heading = "Welcome",
  subheading = "Get started with your account",
  ctaLabel = "Get Started",
  ctaHref = "#",
  imageSrc = "https://static.photos/city/400x500/3",
  imageAlt = "",
  variant = "default",
}: HeroWithOverlappedImageProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeroWithOverlappedImageSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          subheading={subheading}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

HeroWithOverlappedImage.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Welcome to Acme",
  imageAlt: "Feature image",
  imageSrc: "https://static.photos/city/400x500/4",
  subheading: "Build faster with the tools you love.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithOverlappedImageProps;
