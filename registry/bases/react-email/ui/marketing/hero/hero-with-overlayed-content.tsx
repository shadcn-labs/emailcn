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

export type HeroWithOverlayedContentVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithOverlayedContentProps {
  theme?: TailwindConfig;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  align?: "left" | "center";
  variant?: HeroWithOverlayedContentVariant;
}

export const HeroWithOverlayedContentSection = ({
  align = "center",
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  subheading = "Get started with your account",
  imageSrc = "https://via.placeholder.com/1200x600",
  imageAlt = "",
  variant = "default",
}: Omit<HeroWithOverlayedContentProps, "theme">) => {
  const alignClass = align === "center" ? "text-center" : "text-left";

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

  const getOverlayClass = () => {
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
      className={`relative overflow-hidden bg-background ${getVariantClass()}`}
    >
      <div className="relative w-full">
        <Img
          src={imageSrc}
          alt={imageAlt}
          width="1200"
          height="600"
          className="w-full h-auto object-cover"
        />
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/40 ${getOverlayClass()}`}
        >
          <Container
            align={align}
            className={`mx-auto max-w-container px-6 py-16 ${getUnskewClass()}`}
          >
            <Text
              className={`m-0 font-bold text-heading leading-snug text-white ${alignClass}`}
            >
              {heading}
            </Text>
            <Text
              className={`mt-6 mb-8 text-lg leading-snug text-white/80 ${alignClass}`}
            >
              {subheading}
            </Text>
            {ctaLabel && ctaHref ? (
              <div className={alignClass}>
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

export const HeroWithOverlayedContent = ({
  theme = defaultTheme,
  heading = "Welcome",
  subheading = "Get started with your account",
  ctaLabel = "Get Started",
  ctaHref = "#",
  imageSrc = "https://via.placeholder.com/1200x600",
  imageAlt = "",
  align = "center",
  variant = "default",
}: HeroWithOverlayedContentProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeroWithOverlayedContentSection
          align={align}
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

HeroWithOverlayedContent.PreviewProps = {
  align: "center",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Welcome to Acme",
  imageAlt: "Hero background",
  imageSrc: "https://via.placeholder.com/1200x600",
  subheading: "Build faster with the tools you love.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithOverlayedContentProps;
