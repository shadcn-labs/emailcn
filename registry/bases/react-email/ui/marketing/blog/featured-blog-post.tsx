import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import {
  BlogContent,
  BlogEmailShell,
} from "@/registry/bases/react-email/ui/marketing/blog/blog-shared";

export interface FeaturedBlogPostProps {
  theme?: TailwindConfig;
  author?: string;
  badge?: string;
  excerpt?: string;
  imageAlt?: string;
  imageSrc?: string;
  title?: string;
}

export const FeaturedBlogPostSection = ({
  author = "John Doe",
  badge = "Featured",
  excerpt = "A compelling excerpt from the featured article.",
  imageAlt = "Editorial feature",
  imageSrc = "https://assets.mailviews.com/images/components/image-grids/full-width.jpg",
  title = "Featured article",
}: Omit<FeaturedBlogPostProps, "theme">) => {
  const posts = [
    {
      author,
      badge,
      excerpt,
      imageAlt,
      imageSrc,
      title,
    },
  ];

  return (
    <>
      <BlogContent layout="featured" posts={posts} />
    </>
  );
};

export const FeaturedBlogPost = ({
  theme = defaultTheme,
  author = "John Doe",
  badge = "Featured",
  excerpt = "A compelling excerpt from the featured article.",
  imageAlt = "Editorial feature",
  imageSrc = "https://assets.mailviews.com/images/components/image-grids/full-width.jpg",
  title = "Featured article",
}: FeaturedBlogPostProps) => (
  <BlogEmailShell preview={title} theme={theme}>
    <FeaturedBlogPostSection
      author={author}
      badge={badge}
      excerpt={excerpt}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      title={title}
    />
  </BlogEmailShell>
);

FeaturedBlogPost.PreviewProps = {
  author: "John Doe",
  badge: "Featured",
  excerpt: "A compelling excerpt from the featured article.",
  imageAlt: "Editorial feature",
  imageSrc:
    "https://assets.mailviews.com/images/components/image-grids/full-width.jpg",
  theme: defaultTheme,
  title: "Featured article",
} satisfies FeaturedBlogPostProps;
