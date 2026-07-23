import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import {
  BlogContent,
  BlogEmailShell,
} from "@/registry/bases/jsx-email/ui/marketing/blog/blog-shared";

export interface SinglePostHorizontalProps {
  theme?: EmailThemeTokens;
  author?: string;
  excerpt?: string;
  imageAlt?: string;
  imageSrc?: string;
  title?: string;
}

export const SinglePostHorizontalSection = ({
  author = "John Doe",
  excerpt = "A concise summary of the ideas explored in this article.",
  imageAlt = "Mountain landscape",
  imageSrc = "https://assets.mailviews.com/images/components/image-grids/2-col-landscape.jpg",
  title = "A practical guide to better email",
}: Omit<SinglePostHorizontalProps, "theme">) => {
  const posts = [
    {
      author,
      excerpt,
      imageAlt,
      imageSrc,
      title,
    },
  ];

  return (
    <>
      <BlogContent layout="single-horizontal" posts={posts} />
    </>
  );
};

export const SinglePostHorizontal = ({
  theme = defaultTheme,
  author = "John Doe",
  excerpt = "A concise summary of the ideas explored in this article.",
  imageAlt = "Mountain landscape",
  imageSrc = "https://assets.mailviews.com/images/components/image-grids/2-col-landscape.jpg",
  title = "A practical guide to better email",
}: SinglePostHorizontalProps) => (
  <BlogEmailShell preview={title} theme={theme}>
    <SinglePostHorizontalSection
      author={author}
      excerpt={excerpt}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      title={title}
    />
  </BlogEmailShell>
);

SinglePostHorizontal.PreviewProps = {
  author: "John Doe",
  excerpt: "A concise summary of the ideas explored in this article.",
  imageAlt: "Mountain landscape",
  imageSrc:
    "https://assets.mailviews.com/images/components/image-grids/2-col-landscape.jpg",
  theme: defaultTheme,
  title: "A practical guide to better email",
} satisfies SinglePostHorizontalProps;
