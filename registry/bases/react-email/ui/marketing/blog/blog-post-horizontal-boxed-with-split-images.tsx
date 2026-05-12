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

export type BlogPostHorizontalBoxedWithSplitImagesVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BlogPostHorizontalBoxedWithSplitImagesProps {
  theme?: TailwindConfig;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  title?: string;
  excerpt?: string;
  variant?: BlogPostHorizontalBoxedWithSplitImagesVariant;
}

export const BlogPostHorizontalBoxedWithSplitImagesSection = ({
  imageSrc1 = "https://via.placeholder.com/150x150",
  imageAlt1 = "",
  imageSrc2 = "https://via.placeholder.com/150x150",
  imageAlt2 = "",
  title = "Blog Post",
  excerpt = "A brief summary of the blog post.",
  variant = "default",
}: Omit<BlogPostHorizontalBoxedWithSplitImagesProps, "theme">) => {
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
              <Row>
                <Column className="w-1/2 pr-1 align-top">
                  <Img
                    src={imageSrc1}
                    alt={imageAlt1}
                    width="150"
                    height="150"
                    className="w-full h-auto rounded object-cover"
                  />
                </Column>
                <Column className="w-1/2 pl-1 align-top">
                  <Img
                    src={imageSrc2}
                    alt={imageAlt2}
                    width="150"
                    height="150"
                    className="w-full h-auto rounded object-cover"
                  />
                </Column>
              </Row>
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

export const BlogPostHorizontalBoxedWithSplitImages = ({
  theme = defaultTheme,
  imageSrc1 = "https://via.placeholder.com/150x150",
  imageAlt1 = "",
  imageSrc2 = "https://via.placeholder.com/150x150",
  imageAlt2 = "",
  title = "Blog Post",
  excerpt = "A brief summary of the blog post.",
  variant = "default",
}: BlogPostHorizontalBoxedWithSplitImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{title}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BlogPostHorizontalBoxedWithSplitImagesSection
          excerpt={excerpt}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          title={title}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

BlogPostHorizontalBoxedWithSplitImages.PreviewProps = {
  excerpt:
    "A photo essay showcasing our team's creative process and workspace.",
  imageAlt1: "Photo 1",
  imageAlt2: "Photo 2",
  imageSrc1: "https://via.placeholder.com/150x150",
  imageSrc2: "https://via.placeholder.com/150x150",
  theme: defaultTheme,
  title: "Behind the Scenes",
  variant: "default",
} satisfies BlogPostHorizontalBoxedWithSplitImagesProps;
