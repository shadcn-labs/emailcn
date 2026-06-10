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
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type HeroBlockOverlayVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroBlockOverlayProps {
  theme?: TailwindConfig;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlayOpacity?: string;
  variant?: HeroBlockOverlayVariant;
}

export const HeroBlockOverlaySection = ({
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  subheading = "Get started with your account",
  imageSrc = "https://static.photos/business/1200x500/2",
  imageAlt = "",
  overlayOpacity = "bg-black/50",
  variant = "default",
}: Omit<HeroBlockOverlayProps, "theme">) => {
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
    <Section className={`relative overflow-hidden ${getVariantClass()}`}>
      <div className="relative w-full">
        <Img
          src={imageSrc}
          alt={imageAlt}
          width="1200"
          height="500"
          className="w-full h-auto object-cover"
        />
        <div
          className={`absolute inset-0 flex items-center justify-center ${overlayOpacity}`}
        >
          <Container
            className={`mx-auto max-w-container px-6 py-20 ${getUnskewClass()}`}
          >
            <Text className="m-0 text-center font-bold text-heading leading-snug text-white">
              {heading}
            </Text>
            <Text className="mt-4 mb-8 text-center text-lg leading-snug text-white/80">
              {subheading}
            </Text>
            {ctaLabel && ctaHref ? (
              <div className="text-center">
                <Button
                  href={ctaHref}
                  className="inline-block rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 no-underline"
                >
                  {ctaLabel}
                </Button>
              </div>
            ) : null}
          </Container>
        </div>
      </div>
    </Section>
  );
};

export const HeroBlockOverlay = ({
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  imageAlt = "",
  imageSrc = "https://static.photos/business/1200x500/3",
  overlayOpacity = "bg-black/50",
  subheading = "Get started with your account",
  theme = defaultTheme,
  variant = "default",
}: HeroBlockOverlayProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeroBlockOverlaySection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          overlayOpacity={overlayOpacity}
          subheading={subheading}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

HeroBlockOverlay.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Welcome to Acme",
  imageAlt: "Background image",
  imageSrc: "https://static.photos/business/1200x500/4",
  overlayOpacity: "bg-black/50",
  subheading: "Build faster with the tools you love.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroBlockOverlayProps;
