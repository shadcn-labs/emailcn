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

export type HeroAlignedOverlayVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroAlignedOverlayProps {
  theme?: TailwindConfig;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: HeroAlignedOverlayVariant;
}

export const HeroAlignedOverlaySection = ({
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  subheading = "Get started with your account",
  imageSrc = "https://via.placeholder.com/1200x600",
  imageAlt = "",
  variant = "default",
}: Omit<HeroAlignedOverlayProps, "theme">) => {
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
          height="600"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <Container
            className={`mx-auto max-w-container px-6 ${getUnskewClass()}`}
          >
            <div className="flex items-end justify-start h-full pt-48 pb-16">
              <div>
                <Text className="m-0 font-bold text-heading leading-snug text-white text-left">
                  {heading}
                </Text>
                <Text className="mt-4 mb-8 text-lg leading-snug text-white/80 text-left">
                  {subheading}
                </Text>
                {ctaLabel && ctaHref ? (
                  <div className="text-left">
                    <Button
                      href={ctaHref}
                      className="inline-block rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 no-underline"
                    >
                      {ctaLabel}
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  );
};

export const HeroAlignedOverlay = ({
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  imageAlt = "",
  imageSrc = "https://via.placeholder.com/1200x600",
  subheading = "Get started with your account",
  theme = defaultTheme,
  variant = "default",
}: HeroAlignedOverlayProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeroAlignedOverlaySection
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

HeroAlignedOverlay.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Welcome to Acme",
  imageAlt: "Background image",
  imageSrc: "https://via.placeholder.com/1200x600",
  subheading: "Build faster with the tools you love.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroAlignedOverlayProps;
