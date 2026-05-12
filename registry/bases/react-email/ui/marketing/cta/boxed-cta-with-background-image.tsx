/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type BoxedCTAWithBackgroundImageVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BoxedCTAWithBackgroundImageProps {
  theme?: TailwindConfig;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundSrc?: string;
  backgroundAlt?: string;
  variant?: BoxedCTAWithBackgroundImageVariant;
}

export const BoxedCTAWithBackgroundImageSection = ({
  heading = "Special Offer",
  subtext = "Limited time deal just for you.",
  ctaLabel = "Get Deal",
  ctaHref = "#",
  backgroundSrc = "https://via.placeholder.com/600x300/1a1a2e/ffffff",
  backgroundAlt = "",
  variant = "default",
}: Omit<BoxedCTAWithBackgroundImageProps, "theme">) => {
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
        <Section className="rounded-lg border-2 border-border p-8">
          <Section className="relative overflow-hidden rounded-lg">
            <Img
              src={backgroundSrc}
              alt={backgroundAlt}
              width="600"
              height="300"
              className="w-full h-auto object-cover"
            />
            <Section className="absolute inset-0 bg-black/60 p-8 text-center">
              <Text className="m-0 text-2xl font-bold text-heading leading-snug text-white">
                {heading}
              </Text>
              <Text className="mt-3 mb-6 text-base text-white/80">
                {subtext}
              </Text>
              {ctaLabel && ctaHref ? (
                <Button
                  href={ctaHref}
                  className="inline-block rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-fg no-underline"
                >
                  {ctaLabel}
                </Button>
              ) : null}
            </Section>
          </Section>
        </Section>
      </Container>
    </Section>
  );
};

export const BoxedCTAWithBackgroundImage = ({
  theme = defaultTheme,
  heading = "Special Offer",
  subtext = "Limited time deal just for you.",
  ctaLabel = "Get Deal",
  ctaHref = "#",
  backgroundSrc = "https://via.placeholder.com/600x300/1a1a2e/ffffff",
  backgroundAlt = "",
  variant = "default",
}: BoxedCTAWithBackgroundImageProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BoxedCTAWithBackgroundImageSection
          backgroundAlt={backgroundAlt}
          backgroundSrc={backgroundSrc}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          subtext={subtext}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

BoxedCTAWithBackgroundImage.PreviewProps = {
  backgroundAlt: "Background",
  backgroundSrc: "https://via.placeholder.com/600x300/1a1a2e/ffffff",
  ctaHref: "https://example.com",
  ctaLabel: "Get Deal",
  heading: "Special Offer",
  subtext: "Limited time deal just for you.",
  theme: defaultTheme,
  variant: "default",
} satisfies BoxedCTAWithBackgroundImageProps;
