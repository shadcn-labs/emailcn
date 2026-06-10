/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
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

export type FullWidthTestimonialVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FullWidthTestimonialProps {
  theme?: TailwindConfig;
  quote?: string;
  author?: string;
  role?: string;
  variant?: FullWidthTestimonialVariant;
}

export const FullWidthTestimonialSection = ({
  quote = "This product has transformed how we work.",
  author = "Jane Doe",
  role = "CEO, Acme Inc",
  variant = "default",
}: Omit<FullWidthTestimonialProps, "theme">) => {
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
    <Section className={`bg-background-muted py-16 ${getVariantClass()}`}>
      <Container
        className={`mx-auto max-w-container text-center ${getUnskewClass()}`}
      >
        <Text className="m-0 mb-6 text-2xl italic leading-relaxed text-foreground">
          &ldquo;{quote}&rdquo;
        </Text>
        <Text className="m-0 mb-1 text-base font-medium text-foreground">
          {author}
        </Text>
        {role ? (
          <Text className="m-0 text-sm text-foreground-muted">{role}</Text>
        ) : null}
      </Container>
    </Section>
  );
};

export const FullWidthTestimonial = ({
  theme = defaultTheme,
  quote = "This product has transformed how we work.",
  author = "Jane Doe",
  role = "CEO, Acme Inc",
  variant = "default",
}: FullWidthTestimonialProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Testimonial</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FullWidthTestimonialSection
          author={author}
          quote={quote}
          role={role}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FullWidthTestimonial.PreviewProps = {
  author: "Jane Doe",
  quote:
    "This product has completely transformed how our team collaborates and ships emails. Highly recommended!",
  role: "CEO, Acme Inc",
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthTestimonialProps;
