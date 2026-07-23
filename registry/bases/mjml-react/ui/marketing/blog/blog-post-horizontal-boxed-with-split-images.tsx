import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  BlogContent,
  BlogEmailShell,
} from "@/registry/bases/mjml-react/ui/marketing/blog/blog-shared";

export interface BlogPostHorizontalBoxedWithSplitImagesProps {
  theme?: EmailThemeTokens;
  excerpt?: string;
  imageAlt1?: string;
  imageAlt2?: string;
  imageSrc1?: string;
  imageSrc2?: string;
  title?: string;
}

export const BlogPostHorizontalBoxedWithSplitImagesSection = ({
  excerpt = "A thoughtful look at the places and ideas shaping our work.",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://emailcn.vercel.app/api/email-assets/bento-grids/bento-1.jpg",
  imageSrc2 = "https://emailcn.vercel.app/api/email-assets/bento-grids/bento-2.jpg",
  title = "Two perspectives, one story",
}: Omit<BlogPostHorizontalBoxedWithSplitImagesProps, "theme">) => {
  const posts = [
    {
      excerpt,
      imageAlt: imageAlt1,
      imageAlt2,
      imageSrc: imageSrc1,
      imageSrc2,
      title,
    },
  ];

  return (
    <>
      <BlogContent layout="horizontal-split-images" posts={posts} />
    </>
  );
};

export const BlogPostHorizontalBoxedWithSplitImages = ({
  theme = defaultTheme,
  excerpt = "A thoughtful look at the places and ideas shaping our work.",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://emailcn.vercel.app/api/email-assets/bento-grids/bento-1.jpg",
  imageSrc2 = "https://emailcn.vercel.app/api/email-assets/bento-grids/bento-2.jpg",
  title = "Two perspectives, one story",
}: BlogPostHorizontalBoxedWithSplitImagesProps) => (
  <BlogEmailShell preview={title} theme={theme}>
    <BlogPostHorizontalBoxedWithSplitImagesSection
      excerpt={excerpt}
      imageAlt1={imageAlt1}
      imageAlt2={imageAlt2}
      imageSrc1={imageSrc1}
      imageSrc2={imageSrc2}
      title={title}
    />
  </BlogEmailShell>
);

BlogPostHorizontalBoxedWithSplitImages.PreviewProps = {
  excerpt: "A thoughtful look at the places and ideas shaping our work.",
  imageAlt1: "Mountain landscape",
  imageAlt2: "Coastal landscape",
  imageSrc1:
    "https://emailcn.vercel.app/api/email-assets/bento-grids/bento-1.jpg",
  imageSrc2:
    "https://emailcn.vercel.app/api/email-assets/bento-grids/bento-2.jpg",
  theme: defaultTheme,
  title: "Two perspectives, one story",
} satisfies BlogPostHorizontalBoxedWithSplitImagesProps;
