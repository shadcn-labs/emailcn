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

export type HeroSplitFullBleedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroSplitFullBleedProps {
  theme?: TailwindConfig;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  bgColor?: string;
  variant?: HeroSplitFullBleedVariant;
}

export const HeroSplitFullBleedSection = ({
  bgColor = "#f9fafb",
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  subheading = "Get started with your account",
  imageSrc = "https://via.placeholder.com/600x500",
  imageAlt = "",
  variant = "default",
}: Omit<HeroSplitFullBleedProps, "theme">) => {
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
    <Row className={`w-full ${getVariantClass()}`}>
      <Column
        className="w-1/2 px-10 py-16 align-middle"
        style={{ backgroundColor: bgColor }}
      >
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
          width="600"
          height="500"
          className="w-full h-auto object-cover"
        />
      </Column>
    </Row>
  );
};

export const HeroSplitFullBleed = ({
  bgColor = "#f9fafb",
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  imageAlt = "",
  imageSrc = "https://via.placeholder.com/600x500",
  subheading = "Get started with your account",
  theme = defaultTheme,
  variant = "default",
}: HeroSplitFullBleedProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <Section className="w-full">
          <HeroSplitFullBleedSection
            bgColor={bgColor}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            heading={heading}
            imageAlt={imageAlt}
            imageSrc={imageSrc}
            subheading={subheading}
            variant={variant}
          />
        </Section>
      </Body>
    </Tailwind>
  </Html>
);

HeroSplitFullBleed.PreviewProps = {
  bgColor: "#f9fafb",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Welcome to Acme",
  imageAlt: "Full bleed image",
  imageSrc: "https://via.placeholder.com/600x500",
  subheading: "Build faster with the tools you love.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroSplitFullBleedProps;
