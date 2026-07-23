import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import {
  BlogContent,
  BlogEmailShell,
  BlogHeading,
} from "@/registry/bases/react-email/ui/marketing/blog/blog-shared";

export interface TwoColumnsBlogWithImagesAndBoxedContentProps {
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
}

export const TwoColumnsBlogWithImagesAndBoxedContentSection = ({
  heading = "Latest posts",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://assets.mailviews.com/images/components/image-grids/2-col-landscape.jpg",
  imageSrc2 = "https://assets.mailviews.com/images/components/image-grids/2-col-landscape-2.jpg",
  title1 = "Designing emails people enjoy",
  title2 = "A better content workflow",
  excerpt1 = "Practical ideas for clearer, more useful email experiences.",
  excerpt2 = "How small systems help teams publish consistently.",
}: Omit<TwoColumnsBlogWithImagesAndBoxedContentProps, "theme">) => {
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
      <BlogContent layout="two-column-boxed" posts={posts} />
    </>
  );
};

export const TwoColumnsBlogWithImagesAndBoxedContent = ({
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
}: TwoColumnsBlogWithImagesAndBoxedContentProps) => (
  <BlogEmailShell preview={heading} theme={theme}>
    <TwoColumnsBlogWithImagesAndBoxedContentSection
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

TwoColumnsBlogWithImagesAndBoxedContent.PreviewProps = {
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
} satisfies TwoColumnsBlogWithImagesAndBoxedContentProps;
