import { Button, Container, Section, Tailwind, Text } from "react-email";

import type { EmailTheme } from "@/registry/themes/default";
import { theme as defaultTheme } from "@/registry/themes/default";

export interface CTABannerProps {
  theme?: EmailTheme;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "filled" | "outline";
}

export const CTABanner = ({
  theme = defaultTheme,
  heading = "Get Started",
  subtext = "Join thousands of happy users.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "filled",
}: CTABannerProps) => {
  const isFilled = variant === "filled";

  return (
    <Tailwind config={theme}>
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
    </Tailwind>
  );
};

CTABanner.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Start Building Free",
  heading: "Ready to get started?",
  subtext: "Join 10,000+ developers building with our tools.",
  theme: defaultTheme,
  variant: "filled",
} satisfies CTABannerProps;

export default CTABanner;
