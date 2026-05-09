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

export interface CTABannerProps {
  theme?: TailwindConfig;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "filled" | "outline";
}

export const CTABannerSection = ({
  heading = "Get Started",
  subtext = "Join thousands of happy users.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "filled",
}: Omit<CTABannerProps, "theme">) => {
  const isFilled = variant === "filled";

  return (
    <Section
      className={
        isFilled
          ? "rounded-md bg-primary p-8"
          : "rounded-md border border-border bg-transparent p-8"
      }
    >
      <Container align="center">
        <Text
          className={
            isFilled
              ? "mb-2 text-center text-xl font-medium text-primary-fg"
              : "mb-2 text-center text-xl font-medium text-foreground"
          }
        >
          {heading}
        </Text>
        <Text
          className={
            isFilled
              ? "mb-6 text-center text-base text-primary-fg opacity-90"
              : "mb-6 text-center text-base text-foreground-muted"
          }
        >
          {subtext}
        </Text>
        {ctaLabel && ctaHref ? (
          <Button
            href={ctaHref}
            className={
              isFilled
                ? "block rounded-md bg-primary-fg px-6 py-3 text-center text-sm font-medium text-primary no-underline"
                : "block rounded-md bg-primary px-6 py-3 text-center text-sm font-medium text-primary-fg no-underline"
            }
          >
            {ctaLabel}
          </Button>
        ) : null}
      </Container>
    </Section>
  );
};

export const CTABanner = ({
  theme = defaultTheme,
  heading = "Get Started",
  subtext = "Join thousands of happy users.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "filled",
}: CTABannerProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CTABannerSection
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

CTABanner.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Start Building Free",
  heading: "Ready to get started?",
  subtext: "Join 10,000+ developers building with our tools.",
  theme: defaultTheme,
  variant: "filled",
} satisfies CTABannerProps;
