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
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type HeroVariant = "default" | "slanted-left" | "slanted-right";

export interface HeroProps {
  theme?: TailwindConfig;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "center";
  variant?: HeroVariant;
}

export const HeroSection = ({
  align = "center",
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  subheading = "Get started with your account",
  variant = "default",
}: Omit<HeroProps, "theme">) => {
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
    if (variant === "slanted-left") {
      return "skew-x-[10deg]";
    }
    if (variant === "slanted-right") {
      return "skew-x-[-10deg]";
    }
    return "";
  };

  return (
    <Section className={`bg-background py-12 ${getVariantClass()}`}>
      <Container
        align={align}
        className={`mx-auto max-w-container ${getUnskewClass()}`}
      >
        <Text
          className={`m-0 font-bold text-heading leading-snug text-foreground ${alignClass}`}
        >
          {heading}
        </Text>
        <Text
          className={`mt-6 mb-8 text-lg leading-snug text-foreground-muted ${alignClass}`}
        >
          {subheading}
        </Text>
        {ctaLabel && ctaHref ? (
          <div className={alignClass}>
            <Button
              href={ctaHref}
              className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-fg no-underline"
            >
              {ctaLabel}
            </Button>
          </div>
        ) : null}
      </Container>
    </Section>
  );
};

export const Hero = ({
  theme = defaultTheme,
  heading = "Welcome",
  subheading = "Get started with your account",
  ctaLabel = "Get Started",
  ctaHref = "#",
  align = "center",
  variant = "default",
}: HeroProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeroSection
          align={align}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          subheading={subheading}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

Hero.PreviewProps = {
  align: "center",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Welcome to Acme",
  subheading: "Build faster with the tools you love.",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroProps;
