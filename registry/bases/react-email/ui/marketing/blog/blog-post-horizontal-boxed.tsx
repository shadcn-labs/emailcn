import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import {
  BlogContent,
  BlogEmailShell,
} from "@/registry/bases/react-email/ui/marketing/blog/blog-shared";

export interface BlogPostHorizontalBoxedProps {
  theme?: TailwindConfig;
  excerpt?: string;
  imageAlt?: string;
  imageSrc?: string;
  title?: string;
}

export const BlogPostHorizontalBoxedSection = ({
  excerpt = "A concise summary of the ideas explored in this article.",
  imageAlt = "Mountain landscape",
  imageSrc = "https://assets.mailviews.com/images/components/image-grids/2-col-landscape.jpg",
  title = "A practical guide to better email",
}: Omit<BlogPostHorizontalBoxedProps, "theme">) => {
  const posts = [
    {
      excerpt,
      imageAlt,
      imageSrc,
      title,
    },
  ];

  return (
    <>
      <BlogContent layout="horizontal-boxed" posts={posts} />
    </>
  );
};

export const BlogPostHorizontalBoxed = ({
  theme = defaultTheme,
  excerpt = "A concise summary of the ideas explored in this article.",
  imageAlt = "Mountain landscape",
  imageSrc = "https://assets.mailviews.com/images/components/image-grids/2-col-landscape.jpg",
  title = "A practical guide to better email",
}: BlogPostHorizontalBoxedProps) => (
  <BlogEmailShell preview={title} theme={theme}>
    <BlogPostHorizontalBoxedSection
      excerpt={excerpt}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      title={title}
    />
  </BlogEmailShell>
);

BlogPostHorizontalBoxed.PreviewProps = {
  excerpt: "A concise summary of the ideas explored in this article.",
  imageAlt: "Mountain landscape",
  imageSrc:
    "https://assets.mailviews.com/images/components/image-grids/2-col-landscape.jpg",
  theme: defaultTheme,
  title: "A practical guide to better email",
} satisfies BlogPostHorizontalBoxedProps;
