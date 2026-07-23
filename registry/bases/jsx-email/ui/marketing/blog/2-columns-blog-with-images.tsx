import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import {
  BlogContent,
  BlogEmailShell,
  BlogHeading,
} from "@/registry/bases/jsx-email/ui/marketing/blog/blog-shared";

export interface TwoColumnsBlogWithImagesProps {
  theme?: EmailThemeTokens;
  heading?: string;
  imageAlt1?: string;
  imageAlt2?: string;
  imageSrc1?: string;
  imageSrc2?: string;
  title1?: string;
  title2?: string;
  excerpt1?: string;
  excerpt2?: string;
}

export const TwoColumnsBlogWithImagesSection = ({
  heading = "Latest posts",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://assets.mailviews.com/images/components/image-grids/2-col-landscape.jpg",
  imageSrc2 = "https://assets.mailviews.com/images/components/image-grids/2-col-landscape-2.jpg",
  title1 = "Designing emails people enjoy",
  title2 = "A better content workflow",
  excerpt1 = "Practical ideas for clearer, more useful email experiences.",
  excerpt2 = "How small systems help teams publish consistently.",
}: Omit<TwoColumnsBlogWithImagesProps, "theme">) => {
  const posts = [
    {
      excerpt: excerpt1,
      imageAlt: imageAlt1,
      imageSrc: imageSrc1,
      title: title1,
    },
    {
      excerpt: excerpt2,
      imageAlt: imageAlt2,
      imageSrc: imageSrc2,
      title: title2,
    },
  ];

  return (
    <>
      {heading ? <BlogHeading>{heading}</BlogHeading> : null}
      <BlogContent layout="two-column-images" posts={posts} />
    </>
  );
};

export const TwoColumnsBlogWithImages = ({
  theme = defaultTheme,
  heading = "Latest posts",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://assets.mailviews.com/images/components/image-grids/2-col-landscape.jpg",
  imageSrc2 = "https://assets.mailviews.com/images/components/image-grids/2-col-landscape-2.jpg",
  title1 = "Designing emails people enjoy",
  title2 = "A better content workflow",
  excerpt1 = "Practical ideas for clearer, more useful email experiences.",
  excerpt2 = "How small systems help teams publish consistently.",
}: TwoColumnsBlogWithImagesProps) => (
  <BlogEmailShell preview={heading} theme={theme}>
    <TwoColumnsBlogWithImagesSection
      heading={heading}
      imageAlt1={imageAlt1}
      imageAlt2={imageAlt2}
      imageSrc1={imageSrc1}
      imageSrc2={imageSrc2}
      title1={title1}
      title2={title2}
      excerpt1={excerpt1}
      excerpt2={excerpt2}
    />
  </BlogEmailShell>
);

TwoColumnsBlogWithImages.PreviewProps = {
  excerpt1: "Practical ideas for clearer, more useful email experiences.",
  excerpt2: "How small systems help teams publish consistently.",
  heading: "Latest posts",
  imageAlt1: "Mountain landscape",
  imageAlt2: "Coastal landscape",
  imageSrc1:
    "https://assets.mailviews.com/images/components/image-grids/2-col-landscape.jpg",
  imageSrc2:
    "https://assets.mailviews.com/images/components/image-grids/2-col-landscape-2.jpg",
  theme: defaultTheme,
  title1: "Designing emails people enjoy",
  title2: "A better content workflow",
} satisfies TwoColumnsBlogWithImagesProps;
