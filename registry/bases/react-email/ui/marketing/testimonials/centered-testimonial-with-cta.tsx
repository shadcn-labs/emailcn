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

export type CenteredTestimonialWithCtaVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CenteredTestimonialWithCtaProps {
  theme?: TailwindConfig;
  quote?: string;
  author?: string;
  role?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: CenteredTestimonialWithCtaVariant;
}

export const CenteredTestimonialWithCtaSection = ({
  quote = "This product has transformed how we work.",
  author = "Jane Doe",
  role = "CEO, Acme Inc",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "default",
}: Omit<CenteredTestimonialWithCtaProps, "theme">) => {
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
      <Container
        className={`mx-auto max-w-container text-center ${getUnskewClass()}`}
      >
        <Text className="m-0 mb-6 text-xl italic leading-relaxed text-foreground">
          &ldquo;{quote}&rdquo;
        </Text>
        <Text className="m-0 mb-1 text-base font-medium text-foreground">
          {author}
        </Text>
        {role ? (
          <Text className="m-0 mb-8 text-sm text-foreground-muted">{role}</Text>
        ) : null}
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

export const CenteredTestimonialWithCta = ({
  theme = defaultTheme,
  quote = "This product has transformed how we work.",
  author = "Jane Doe",
  role = "CEO, Acme Inc",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "default",
}: CenteredTestimonialWithCtaProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Testimonial</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CenteredTestimonialWithCtaSection
          author={author}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          quote={quote}
          role={role}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

CenteredTestimonialWithCta.PreviewProps = {
  author: "Jane Doe",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  quote:
    "This product has completely transformed how our team collaborates and ships emails.",
  role: "CEO, Acme Inc",
  theme: defaultTheme,
  variant: "default",
} satisfies CenteredTestimonialWithCtaProps;
