/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type SplitTestimonialWithCtaVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SplitTestimonialWithCtaProps {
  theme?: TailwindConfig;
  avatarSrc?: string;
  avatarAlt?: string;
  quote?: string;
  author?: string;
  role?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: SplitTestimonialWithCtaVariant;
}

export const SplitTestimonialWithCtaSection = ({
  avatarSrc = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-testimonials-split-testimonial-with-cta-tsx-1&size=300",
  avatarAlt = "",
  quote = "This product has transformed how we work.",
  author = "Jane Doe",
  role = "CEO, Acme Inc",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "default",
}: Omit<SplitTestimonialWithCtaProps, "theme">) => {
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
            <Img
              src={avatarSrc}
              alt={avatarAlt}
              width="300"
              height="300"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
          <Column className="w-1/2 align-middle">
            <Text className="m-0 mb-4 text-xl italic leading-relaxed text-foreground">
              &ldquo;{quote}&rdquo;
            </Text>
            <Text className="m-0 mb-1 text-base font-medium text-foreground">
              {author}
            </Text>
            {role ? (
              <Text className="m-0 mb-6 text-sm text-foreground-muted">
                {role}
              </Text>
            ) : null}
            {ctaLabel && ctaHref ? (
              <Button
                href={ctaHref}
                className="inline-block rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-fg no-underline"
              >
                {ctaLabel}
              </Button>
            ) : null}
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export const SplitTestimonialWithCta = ({
  theme = defaultTheme,
  avatarSrc = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-testimonials-split-testimonial-with-cta-tsx-2&size=300",
  avatarAlt = "",
  quote = "This product has transformed how we work.",
  author = "Jane Doe",
  role = "CEO, Acme Inc",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "default",
}: SplitTestimonialWithCtaProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Testimonial</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <SplitTestimonialWithCtaSection
          author={author}
          avatarAlt={avatarAlt}
          avatarSrc={avatarSrc}
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

SplitTestimonialWithCta.PreviewProps = {
  author: "Jane Doe",
  avatarAlt: "Jane Doe",
  avatarSrc:
    "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-testimonials-split-testimonial-with-cta-tsx-3&size=300",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  quote:
    "This product has completely transformed how our team collaborates and ships emails.",
  role: "CEO, Acme Inc",
  theme: defaultTheme,
  variant: "default",
} satisfies SplitTestimonialWithCtaProps;
