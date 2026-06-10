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

export type HeroBlockWithBleedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroBlockWithBleedProps {
  theme?: TailwindConfig;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  bgColor?: string;
  variant?: HeroBlockWithBleedVariant;
}

export const HeroBlockWithBleedSection = ({
  bgColor = "#111827",
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  subheading = "Get started with your account",
  imageSrc = "https://static.photos/city/400x300/2",
  imageAlt = "",
  variant = "default",
}: Omit<HeroBlockWithBleedProps, "theme">) => {
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
      className={`${getVariantClass()}`}
      style={{ backgroundColor: bgColor }}
    >
      <Container
        className={`mx-auto max-w-container py-16 ${getUnskewClass()}`}
      >
        <Row>
          <Column className="w-1/2 pr-10 align-middle">
            <Text className="m-0 font-bold text-heading leading-snug text-white">
              {heading}
            </Text>
            <Text className="mt-4 mb-8 text-lg leading-snug text-white/80">
              {subheading}
            </Text>
            {ctaLabel && ctaHref ? (
              <Button
                href={ctaHref}
                className="inline-block rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 no-underline"
              >
                {ctaLabel}
              </Button>
            ) : null}
          </Column>
          <Column className="w-1/2 align-middle">
            <div className="-mr-4 sm:-mr-8 lg:-mr-16">
              <Img
                src={imageSrc}
                alt={imageAlt}
                width="400"
                height="300"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export const HeroBlockWithBleed = ({
  bgColor = "#111827",
  ctaHref = "https://example.com",
  ctaLabel = "Get Started",
  heading = "Welcome",
  imageAlt = "",
  imageSrc = "https://static.photos/city/400x300/3",
  subheading = "Get started with your account",
  theme = defaultTheme,
  variant = "default",
}: HeroBlockWithBleedProps) => (
  <Html>
    <Tailwind config={theme}>
      <Head>
        <DefaultFonts />
      </Head>
      <Preview>{heading}</Preview>
      <Body className="m-0 bg-background font-sans">
        <HeroBlockWithBleedSection
          bgColor={bgColor}
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

HeroBlockWithBleed.PreviewProps = {
  bgColor: "#111827",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Welcome to Acme",
  imageAlt: "Bleed image",
  imageSrc: "https://static.photos/city/400x300/4",
  subheading: "Build faster with the tools you love.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroBlockWithBleedProps;
