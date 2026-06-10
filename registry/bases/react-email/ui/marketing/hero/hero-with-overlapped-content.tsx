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

export type HeroWithOverlappedContentVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithOverlappedContentProps {
  theme?: TailwindConfig;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  boxBgColor?: string;
  variant?: HeroWithOverlappedContentVariant;
}

export const HeroWithOverlappedContentSection = ({
  boxBgColor = "#ffffff",
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  subheading = "Get started with your account",
  imageSrc = "https://static.photos/city/800x400/2",
  imageAlt = "",
  variant = "default",
}: Omit<HeroWithOverlappedContentProps, "theme">) => {
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
      className={`relative overflow-visible bg-background ${getVariantClass()}`}
    >
      <Container className={`mx-auto max-w-container ${getUnskewClass()}`}>
        <Img
          src={imageSrc}
          alt={imageAlt}
          width="800"
          height="400"
          className="w-full h-auto object-cover rounded-t-lg"
        />
        <div
          className="relative -mt-16 mx-8 rounded-lg shadow-lg px-8 py-10"
          style={{ backgroundColor: boxBgColor }}
        >
          <Text className="m-0 text-center font-bold text-heading leading-snug text-foreground">
            {heading}
          </Text>
          <Text className="mt-4 mb-8 text-center text-lg leading-snug text-foreground-muted">
            {subheading}
          </Text>
          {ctaLabel && ctaHref ? (
            <div className="text-center">
              <Button
                href={ctaHref}
                className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-fg no-underline"
              >
                {ctaLabel}
              </Button>
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
};

export const HeroWithOverlappedContent = ({
  boxBgColor = "#ffffff",
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  imageAlt = "",
  imageSrc = "https://static.photos/city/800x400/3",
  subheading = "Get started with your account",
  theme = defaultTheme,
  variant = "default",
}: HeroWithOverlappedContentProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeroWithOverlappedContentSection
          boxBgColor={boxBgColor}
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

HeroWithOverlappedContent.PreviewProps = {
  boxBgColor: "#ffffff",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Welcome to Acme",
  imageAlt: "Hero image",
  imageSrc: "https://static.photos/city/800x400/4",
  subheading: "Build faster with the tools you love.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithOverlappedContentProps;
