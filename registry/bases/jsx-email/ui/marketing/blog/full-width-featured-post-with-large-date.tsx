import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import {
  BlogContent,
  BlogEmailShell,
} from "@/registry/bases/jsx-email/ui/marketing/blog/blog-shared";

export interface FullWidthFeaturedPostWithLargeDateProps {
  theme?: EmailThemeTokens;
  date?: string;
  excerpt?: string;
  imageAlt?: string;
  imageSrc?: string;
  month?: string;
  title?: string;
}

export const FullWidthFeaturedPostWithLargeDateSection = ({
  date = "15",
  excerpt = "A compelling excerpt from the featured article.",
  imageAlt = "Editorial feature",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-4.jpg",
  month = "MAR",
  title = "Featured article",
}: Omit<FullWidthFeaturedPostWithLargeDateProps, "theme">) => {
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
      <BlogContent layout="featured-date-full" posts={posts} />
    </>
  );
};

export const FullWidthFeaturedPostWithLargeDate = ({
  theme = defaultTheme,
  date = "15",
  excerpt = "A compelling excerpt from the featured article.",
  imageAlt = "Editorial feature",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-4.jpg",
  month = "MAR",
  title = "Featured article",
}: FullWidthFeaturedPostWithLargeDateProps) => (
  <BlogEmailShell preview={title} theme={theme}>
    <FullWidthFeaturedPostWithLargeDateSection
      date={date}
      excerpt={excerpt}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      month={month}
      title={title}
    />
  </BlogEmailShell>
);

FullWidthFeaturedPostWithLargeDate.PreviewProps = {
  date: "15",
  excerpt: "A compelling excerpt from the featured article.",
  imageAlt: "Editorial feature",
  imageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-4.jpg",
  month: "MAR",
  theme: defaultTheme,
  title: "Featured article",
} satisfies FullWidthFeaturedPostWithLargeDateProps;
