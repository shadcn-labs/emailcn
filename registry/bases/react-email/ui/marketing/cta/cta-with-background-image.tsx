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

export type CTAWithBackgroundImageVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CTAWithBackgroundImageProps {
  theme?: TailwindConfig;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundSrc?: string;
  backgroundAlt?: string;
  variant?: CTAWithBackgroundImageVariant;
}

export const CTAWithBackgroundImageSection = ({
  heading = "Limited Offer",
  subtext = "Get 50% off your first month.",
  ctaLabel = "Claim Offer",
  ctaHref = "#",
  backgroundSrc = "https://static.photos/city/600x400/2",
  backgroundAlt = "",
  variant = "default",
}: Omit<CTAWithBackgroundImageProps, "theme">) => {
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
        <Section className="relative overflow-hidden rounded-lg">
          <Img
            src={backgroundSrc}
            alt={backgroundAlt}
            width="600"
            height="400"
            className="w-full h-auto object-cover"
          />
          <Section className="absolute inset-0 bg-black/50 p-12 text-center">
            <Text className="m-0 text-3xl font-bold text-heading leading-snug text-white">
              {heading}
            </Text>
            <Text className="mt-4 mb-8 text-lg text-white/80">{subtext}</Text>
            {ctaLabel && ctaHref ? (
              <Button
                href={ctaHref}
                className="inline-block rounded-md bg-white px-8 py-3 text-base font-medium text-gray-900 no-underline"
              >
                {ctaLabel}
              </Button>
            ) : null}
          </Section>
        </Section>
      </Container>
    </Section>
  );
};

export const CTAWithBackgroundImage = ({
  theme = defaultTheme,
  heading = "Limited Offer",
  subtext = "Get 50% off your first month.",
  ctaLabel = "Claim Offer",
  ctaHref = "#",
  backgroundSrc = "https://static.photos/city/600x400/3",
  backgroundAlt = "",
  variant = "default",
}: CTAWithBackgroundImageProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CTAWithBackgroundImageSection
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

CTAWithBackgroundImage.PreviewProps = {
  backgroundAlt: "Background",
  backgroundSrc: "https://static.photos/city/600x400/4",
  ctaHref: "https://example.com",
  ctaLabel: "Claim Offer",
  heading: "Limited Offer",
  subtext: "Get 50% off your first month.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAWithBackgroundImageProps;
