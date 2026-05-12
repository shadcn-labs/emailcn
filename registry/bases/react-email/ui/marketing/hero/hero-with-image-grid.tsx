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

export type HeroWithImageGridVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithImageGridProps {
  theme?: TailwindConfig;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  variant?: HeroWithImageGridVariant;
}

export const HeroWithImageGridSection = ({
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  subheading = "Get started with your account",
  imageSrc1 = "https://via.placeholder.com/300x200",
  imageAlt1 = "",
  imageSrc2 = "https://via.placeholder.com/300x200",
  imageAlt2 = "",
  imageSrc3 = "https://via.placeholder.com/300x200",
  imageAlt3 = "",
  variant = "default",
}: Omit<HeroWithImageGridProps, "theme">) => {
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
    <Section className={`bg-background py-16 ${getVariantClass()}`}>
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
            <Row>
              <Column className="w-1/2 pr-2 align-top">
                <Img
                  src={imageSrc1}
                  alt={imageAlt1}
                  width="300"
                  height="200"
                  className="w-full h-auto rounded-lg object-cover mb-2"
                />
                <Img
                  src={imageSrc3}
                  alt={imageAlt3}
                  width="300"
                  height="200"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </Column>
              <Column className="w-1/2 pl-2 align-top">
                <Img
                  src={imageSrc2}
                  alt={imageAlt2}
                  width="300"
                  height="200"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export const HeroWithImageGrid = ({
  theme = defaultTheme,
  heading = "Welcome",
  subheading = "Get started with your account",
  ctaLabel = "Get Started",
  ctaHref = "#",
  imageSrc1 = "https://via.placeholder.com/300x200",
  imageAlt1 = "",
  imageSrc2 = "https://via.placeholder.com/300x200",
  imageAlt2 = "",
  imageSrc3 = "https://via.placeholder.com/300x200",
  imageAlt3 = "",
  variant = "default",
}: HeroWithImageGridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeroWithImageGridSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageAlt3={imageAlt3}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          imageSrc3={imageSrc3}
          subheading={subheading}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

HeroWithImageGrid.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Welcome to Acme",
  imageAlt1: "Gallery image 1",
  imageAlt2: "Gallery image 2",
  imageAlt3: "Gallery image 3",
  imageSrc1: "https://via.placeholder.com/300x200",
  imageSrc2: "https://via.placeholder.com/300x200",
  imageSrc3: "https://via.placeholder.com/300x200",
  subheading: "Build faster with the tools you love.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithImageGridProps;
