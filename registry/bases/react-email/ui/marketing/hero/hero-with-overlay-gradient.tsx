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

export type HeroWithOverlayGradientVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithOverlayGradientProps {
  theme?: TailwindConfig;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  gradientFrom?: string;
  gradientTo?: string;
  variant?: HeroWithOverlayGradientVariant;
}

export const HeroWithOverlayGradientSection = ({
  ctaHref = "#",
  ctaLabel = "Get Started",
  gradientFrom = "from-black/70",
  gradientTo = "to-black/20",
  heading = "Welcome",
  subheading = "Get started with your account",
  imageSrc = "https://via.placeholder.com/1200x500",
  imageAlt = "",
  variant = "default",
}: Omit<HeroWithOverlayGradientProps, "theme">) => {
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
      <div
        className={`relative w-full bg-gradient-to-b ${gradientFrom} ${gradientTo}`}
      >
        <Img
          src={imageSrc}
          alt={imageAlt}
          width="1200"
          height="500"
          className="w-full h-auto object-cover"
          style={{ mixBlendMode: "overlay" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
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

export const HeroWithOverlayGradient = ({
  ctaHref = "#",
  ctaLabel = "Get Started",
  gradientFrom = "from-black/70",
  gradientTo = "to-black/20",
  heading = "Welcome",
  imageAlt = "",
  imageSrc = "https://via.placeholder.com/1200x500",
  subheading = "Get started with your account",
  theme = defaultTheme,
  variant = "default",
}: HeroWithOverlayGradientProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeroWithOverlayGradientSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          gradientFrom={gradientFrom}
          gradientTo={gradientTo}
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

HeroWithOverlayGradient.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  gradientFrom: "from-black/70",
  gradientTo: "to-black/20",
  heading: "Welcome to Acme",
  imageAlt: "Background image",
  imageSrc: "https://via.placeholder.com/1200x500",
  subheading: "Build faster with the tools you love.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithOverlayGradientProps;
