/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
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

export type FullWidthTestimonialWithOverlappingAvatarVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FullWidthTestimonialWithOverlappingAvatarProps {
  theme?: TailwindConfig;
  avatarSrc?: string;
  avatarAlt?: string;
  quote?: string;
  author?: string;
  role?: string;
  variant?: FullWidthTestimonialWithOverlappingAvatarVariant;
}

export const FullWidthTestimonialWithOverlappingAvatarSection = ({
  avatarSrc = "https://via.placeholder.com/80x80",
  avatarAlt = "",
  quote = "This product has transformed how we work.",
  author = "Jane Doe",
  role = "CEO, Acme Inc",
  variant = "default",
}: Omit<FullWidthTestimonialWithOverlappingAvatarProps, "theme">) => {
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
        <Img
          src={avatarSrc}
          alt={avatarAlt}
          width="80"
          height="80"
          className="mx-auto -mb-10 h-auto rounded-full border-4 border-background-muted object-cover"
        />
        <Section className="rounded-lg bg-background p-8 pt-14">
          <Text className="m-0 mb-6 text-xl italic leading-relaxed text-foreground">
            &ldquo;{quote}&rdquo;
          </Text>
          <Text className="m-0 mb-1 text-base font-medium text-foreground">
            {author}
          </Text>
          {role ? (
            <Text className="m-0 text-sm text-foreground-muted">{role}</Text>
          ) : null}
        </Section>
      </Container>
    </Section>
  );
};

export const FullWidthTestimonialWithOverlappingAvatar = ({
  theme = defaultTheme,
  avatarSrc = "https://via.placeholder.com/80x80",
  avatarAlt = "",
  quote = "This product has transformed how we work.",
  author = "Jane Doe",
  role = "CEO, Acme Inc",
  variant = "default",
}: FullWidthTestimonialWithOverlappingAvatarProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Testimonial</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FullWidthTestimonialWithOverlappingAvatarSection
          author={author}
          avatarAlt={avatarAlt}
          avatarSrc={avatarSrc}
          quote={quote}
          role={role}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FullWidthTestimonialWithOverlappingAvatar.PreviewProps = {
  author: "Jane Doe",
  avatarAlt: "Jane Doe",
  avatarSrc: "https://via.placeholder.com/80x80",
  quote:
    "This product has completely transformed how our team collaborates and ships emails.",
  role: "CEO, Acme Inc",
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthTestimonialWithOverlappingAvatarProps;
