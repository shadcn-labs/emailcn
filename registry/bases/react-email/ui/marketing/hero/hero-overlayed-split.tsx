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

export type HeroOverlayedSplitVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroOverlayedSplitProps {
  theme?: TailwindConfig;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: HeroOverlayedSplitVariant;
}

export const HeroOverlayedSplitSection = ({
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  subheading = "Get started with your account",
  imageSrc = "https://via.placeholder.com/600x500",
  imageAlt = "",
  variant = "default",
}: Omit<HeroOverlayedSplitProps, "theme">) => {
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
      className={`relative overflow-hidden bg-background ${getVariantClass()}`}
    >
      <Row>
        <Column className="w-1/2 align-top">
          <Img
            src={imageSrc}
            alt={imageAlt}
            width="600"
            height="500"
            className="w-full h-auto object-cover"
          />
        </Column>
        <Column className="relative w-1/2 align-middle px-10 py-16">
          <div className={`relative z-10 ${getUnskewClass()}`}>
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
          </div>
        </Column>
      </Row>
    </Section>
  );
};

export const HeroOverlayedSplit = ({
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  imageAlt = "",
  imageSrc = "https://via.placeholder.com/600x500",
  subheading = "Get started with your account",
  theme = defaultTheme,
  variant = "default",
}: HeroOverlayedSplitProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeroOverlayedSplitSection
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

HeroOverlayedSplit.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Welcome to Acme",
  imageAlt: "Split image",
  imageSrc: "https://via.placeholder.com/600x500",
  subheading: "Build faster with the tools you love.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroOverlayedSplitProps;
