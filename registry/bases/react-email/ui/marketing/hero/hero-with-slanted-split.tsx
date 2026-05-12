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

export type HeroWithSlantedSplitVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithSlantedSplitProps {
  theme?: TailwindConfig;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: HeroWithSlantedSplitVariant;
}

export const HeroWithSlantedSplitSection = ({
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  subheading = "Get started with your account",
  imageSrc = "https://via.placeholder.com/500x400",
  imageAlt = "",
  variant = "default",
}: Omit<HeroWithSlantedSplitProps, "theme">) => {
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

  const getSectionSlant = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[-10deg] origin-left";
      }
      case "slanted-right": {
        return "skew-x-[10deg] origin-right";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <Section
      className={`relative overflow-hidden bg-background ${getSectionSlant()}`}
    >
      <Row>
        <Column className="relative w-1/2 px-10 py-16 align-middle bg-background">
          <div className={getUnskewClass()}>
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
        <Column className="w-1/2 align-top">
          <Img
            src={imageSrc}
            alt={imageAlt}
            width="500"
            height="400"
            className="w-full h-auto object-cover"
          />
        </Column>
      </Row>
    </Section>
  );
};

export const HeroWithSlantedSplit = ({
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  imageAlt = "",
  imageSrc = "https://via.placeholder.com/500x400",
  subheading = "Get started with your account",
  theme = defaultTheme,
  variant = "default",
}: HeroWithSlantedSplitProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeroWithSlantedSplitSection
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

HeroWithSlantedSplit.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Welcome to Acme",
  imageAlt: "Split image",
  imageSrc: "https://via.placeholder.com/500x400",
  subheading: "Build faster with the tools you love.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithSlantedSplitProps;
