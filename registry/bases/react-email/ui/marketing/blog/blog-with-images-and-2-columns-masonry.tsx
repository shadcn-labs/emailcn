import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import {
  BlogContent,
  BlogEmailShell,
  BlogHeading,
} from "@/registry/bases/react-email/ui/marketing/blog/blog-shared";

export interface BlogWithImagesAnd2ColumnsMasonryProps {
  theme?: TailwindConfig;
  heading?: string;
  imageAlt1?: string;
  imageAlt2?: string;
  imageSrc1?: string;
  imageSrc2?: string;
  title1?: string;
  title2?: string;
  excerpt1?: string;
  excerpt2?: string;
  imageAlt3?: string;
  imageSrc3?: string;
  title3?: string;
  excerpt3?: string;
}

export const BlogWithImagesAnd2ColumnsMasonrySection = ({
  heading = "From the blog",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://assets.mailviews.com/images/components/image-grids/2-col-landscape.jpg",
  imageSrc2 = "https://assets.mailviews.com/images/components/image-grids/2-col-landscape-2.jpg",
  title1 = "Designing emails people enjoy",
  title2 = "A better content workflow",
  excerpt1 = "Practical ideas for clearer, more useful email experiences.",
  excerpt2 = "How small systems help teams publish consistently.",
  imageAlt3 = "Modern city",
  imageSrc3 = "https://assets.mailviews.com/images/components/image-grids/3-col-masonry.jpg",
  title3 = "What we learned this month",
  excerpt3 = "Notes, experiments, and lessons from our latest work.",
}: Omit<BlogWithImagesAnd2ColumnsMasonryProps, "theme">) => {
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
    {
      excerpt: excerpt3,
      imageAlt: imageAlt3,
      imageSrc: imageSrc3,
      title: title3,
    },
  ];

  return (
    <>
      {heading ? <BlogHeading>{heading}</BlogHeading> : null}
      <BlogContent layout="masonry" posts={posts} />
    </>
  );
};

export const BlogWithImagesAnd2ColumnsMasonry = ({
  theme = defaultTheme,
  heading = "From the blog",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://assets.mailviews.com/images/components/image-grids/2-col-landscape.jpg",
  imageSrc2 = "https://assets.mailviews.com/images/components/image-grids/2-col-landscape-2.jpg",
  title1 = "Designing emails people enjoy",
  title2 = "A better content workflow",
  excerpt1 = "Practical ideas for clearer, more useful email experiences.",
  excerpt2 = "How small systems help teams publish consistently.",
  imageAlt3 = "Modern city",
  imageSrc3 = "https://assets.mailviews.com/images/components/image-grids/3-col-masonry.jpg",
  title3 = "What we learned this month",
  excerpt3 = "Notes, experiments, and lessons from our latest work.",
}: BlogWithImagesAnd2ColumnsMasonryProps) => (
  <BlogEmailShell preview={heading} theme={theme}>
    <BlogWithImagesAnd2ColumnsMasonrySection
      heading={heading}
      imageAlt1={imageAlt1}
      imageAlt2={imageAlt2}
      imageSrc1={imageSrc1}
      imageSrc2={imageSrc2}
      title1={title1}
      title2={title2}
      excerpt1={excerpt1}
      excerpt2={excerpt2}
      imageAlt3={imageAlt3}
      imageSrc3={imageSrc3}
      title3={title3}
      excerpt3={excerpt3}
    />
  </BlogEmailShell>
);

BlogWithImagesAnd2ColumnsMasonry.PreviewProps = {
  excerpt1: "Practical ideas for clearer, more useful email experiences.",
  excerpt2: "How small systems help teams publish consistently.",
  excerpt3: "Notes, experiments, and lessons from our latest work.",
  heading: "From the blog",
  imageAlt1: "Mountain landscape",
  imageAlt2: "Coastal landscape",
  imageAlt3: "Modern city",
  imageSrc1:
    "https://assets.mailviews.com/images/components/image-grids/2-col-landscape.jpg",
  imageSrc2:
    "https://assets.mailviews.com/images/components/image-grids/2-col-landscape-2.jpg",
  imageSrc3:
    "https://assets.mailviews.com/images/components/image-grids/3-col-masonry.jpg",
  theme: defaultTheme,
  title1: "Designing emails people enjoy",
  title2: "A better content workflow",
  title3: "What we learned this month",
} satisfies BlogWithImagesAnd2ColumnsMasonryProps;
