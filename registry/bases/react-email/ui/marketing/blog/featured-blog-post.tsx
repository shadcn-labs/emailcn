/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
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

export type FeaturedBlogPostVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FeaturedBlogPostProps {
  theme?: TailwindConfig;
  imageSrc?: string;
  imageAlt?: string;
  badge?: string;
  title?: string;
  excerpt?: string;
  author?: string;
  variant?: FeaturedBlogPostVariant;
}

export const FeaturedBlogPostSection = ({
  imageSrc = "https://via.placeholder.com/600x300",
  imageAlt = "",
  badge = "Featured",
  title = "Featured Article Title",
  excerpt = "A compelling excerpt from the featured article.",
  author = "John Doe",
  variant = "default",
}: Omit<FeaturedBlogPostProps, "theme">) => {
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
      <Section className={`max-w-container mx-auto ${getUnskewClass()}`}>
        <Section className="relative overflow-hidden rounded-lg">
          <Img
            src={imageSrc}
            alt={imageAlt}
            width="600"
            height="300"
            className="w-full h-auto object-cover"
          />
          <Section className="p-6">
            {badge ? (
              <Section className="mb-3 inline-block rounded-full bg-primary px-3 py-1">
                <Text className="m-0 text-xs font-medium text-primary-fg">
                  {badge}
                </Text>
              </Section>
            ) : null}
            <Text className="m-0 mb-2 text-xl font-bold text-foreground">
              {title}
            </Text>
            <Text className="m-0 mb-3 text-sm text-foreground-muted">
              {excerpt}
            </Text>
            {author ? (
              <Text className="m-0 text-xs text-foreground-subtle">
                By {author}
              </Text>
            ) : null}
          </Section>
        </Section>
      </Section>
    </Section>
  );
};

export const FeaturedBlogPost = ({
  theme = defaultTheme,
  imageSrc = "https://via.placeholder.com/600x300",
  imageAlt = "",
  badge = "Featured",
  title = "Featured Article Title",
  excerpt = "A compelling excerpt from the featured article.",
  author = "John Doe",
  variant = "default",
}: FeaturedBlogPostProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{title}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FeaturedBlogPostSection
          author={author}
          badge={badge}
          excerpt={excerpt}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          title={title}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FeaturedBlogPost.PreviewProps = {
  author: "John Doe",
  badge: "Featured",
  excerpt:
    "Our comprehensive guide to building modern email templates that work everywhere.",
  imageAlt: "Featured Article",
  imageSrc: "https://via.placeholder.com/600x300",
  theme: defaultTheme,
  title: "The Ultimate Guide to Email Templates",
  variant: "default",
} satisfies FeaturedBlogPostProps;
