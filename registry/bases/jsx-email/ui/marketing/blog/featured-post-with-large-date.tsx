import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import {
  BlogContent,
  BlogEmailShell,
} from "@/registry/bases/jsx-email/ui/marketing/blog/blog-shared";

export interface FeaturedPostWithLargeDateProps {
  theme?: EmailThemeTokens;
  date?: string;
  excerpt?: string;
  imageAlt?: string;
  imageSrc?: string;
  month?: string;
  title?: string;
}

export const FeaturedPostWithLargeDateSection = ({
  date = "15",
  excerpt = "A compelling excerpt from the featured article.",
  imageAlt = "Editorial feature",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  month = "MAR",
  title = "Featured article",
}: Omit<FeaturedPostWithLargeDateProps, "theme">) => {
  const posts = [
    {
      date,
      excerpt,
      imageAlt,
      imageSrc,
      month,
      title,
    },
  ];

  return (
    <>
      <BlogContent layout="featured-date" posts={posts} />
    </>
  );
};

export const FeaturedPostWithLargeDate = ({
  theme = defaultTheme,
  date = "15",
  excerpt = "A compelling excerpt from the featured article.",
  imageAlt = "Editorial feature",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  month = "MAR",
  title = "Featured article",
}: FeaturedPostWithLargeDateProps) => (
  <BlogEmailShell preview={title} theme={theme}>
    <FeaturedPostWithLargeDateSection
      date={date}
      excerpt={excerpt}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      month={month}
      title={title}
    />
  </BlogEmailShell>
);

FeaturedPostWithLargeDate.PreviewProps = {
  date: "15",
  excerpt: "A compelling excerpt from the featured article.",
  imageAlt: "Editorial feature",
  imageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  month: "MAR",
  theme: defaultTheme,
  title: "Featured article",
} satisfies FeaturedPostWithLargeDateProps;
