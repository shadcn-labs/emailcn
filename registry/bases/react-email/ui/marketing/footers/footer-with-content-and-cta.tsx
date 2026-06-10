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
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type FooterWithContentAndCtaVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterWithContentAndCtaProps {
  theme?: TailwindConfig;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: FooterWithContentAndCtaVariant;
}

export const FooterWithContentAndCtaSection = ({
  heading = "Stay in touch",
  subtext = "Subscribe to our newsletter.",
  ctaLabel = "Subscribe",
  ctaHref = "#",
  variant = "default",
}: Omit<FooterWithContentAndCtaProps, "theme">) => {
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
    <Section className={`bg-background py-8 ${getVariantClass()}`}>
      <Container
        className={`mx-auto max-w-container text-center ${getUnskewClass()}`}
      >
        <Text className="m-0 mb-2 text-lg font-medium text-foreground">
          {heading}
        </Text>
        <Text className="m-0 mb-6 text-sm text-foreground-muted">
          {subtext}
        </Text>
        {ctaLabel && ctaHref ? (
          <Button
            href={ctaHref}
            className="inline-block rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-fg no-underline"
          >
            {ctaLabel}
          </Button>
        ) : null}
      </Container>
    </Section>
  );
};

export const FooterWithContentAndCta = ({
  theme = defaultTheme,
  heading = "Stay in touch",
  subtext = "Subscribe to our newsletter.",
  ctaLabel = "Subscribe",
  ctaHref = "#",
  variant = "default",
}: FooterWithContentAndCtaProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FooterWithContentAndCtaSection
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

FooterWithContentAndCta.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Subscribe",
  heading: "Stay in touch",
  subtext: "Subscribe to our newsletter.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterWithContentAndCtaProps;
