/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
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

export type BlogPostHorizontalBoxedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BlogPostHorizontalBoxedProps {
  theme?: TailwindConfig;
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  excerpt?: string;
  variant?: BlogPostHorizontalBoxedVariant;
}

export const BlogPostHorizontalBoxedSection = ({
  imageSrc = "https://static.photos/travel/250x200/2",
  imageAlt = "",
  title = "Blog Post Title",
  excerpt = "A brief summary of the blog post.",
  variant = "default",
}: Omit<BlogPostHorizontalBoxedProps, "theme">) => {
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
        <Section className="rounded-lg border border-border p-4">
          <Row>
            <Column className="w-1/3 pr-4 align-middle">
              <Img
                src={imageSrc}
                alt={imageAlt}
                width="250"
                height="200"
                className="w-full h-auto rounded object-cover"
              />
            </Column>
            <Column className="w-2/3 align-middle">
              <Text className="m-0 mb-2 text-lg font-medium text-foreground">
                {title}
              </Text>
              <Text className="m-0 text-sm leading-snug text-foreground-muted">
                {excerpt}
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>
    </Section>
  );
};

export const BlogPostHorizontalBoxed = ({
  theme = defaultTheme,
  imageSrc = "https://static.photos/travel/250x200/3",
  imageAlt = "",
  title = "Blog Post Title",
  excerpt = "A brief summary of the blog post.",
  variant = "default",
}: BlogPostHorizontalBoxedProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{title}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BlogPostHorizontalBoxedSection
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

BlogPostHorizontalBoxed.PreviewProps = {
  excerpt:
    "Learn how our latest features can help you build better emails faster.",
  imageAlt: "Blog Post",
  imageSrc: "https://static.photos/travel/250x200/4",
  theme: defaultTheme,
  title: "What's New in Version 2.0",
  variant: "default",
} satisfies BlogPostHorizontalBoxedProps;
