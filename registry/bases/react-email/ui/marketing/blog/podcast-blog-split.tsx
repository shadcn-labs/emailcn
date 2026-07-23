import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import {
  BlogContent,
  BlogEmailShell,
} from "@/registry/bases/react-email/ui/marketing/blog/blog-shared";

export interface PodcastBlogSplitProps {
  theme?: TailwindConfig;
  episode?: string;
  excerpt?: string;
  host?: string;
  imageAlt?: string;
  imageSrc?: string;
  title?: string;
}

export const PodcastBlogSplitSection = ({
  episode = "Episode 42",
  excerpt = "A conversation about emerging email trends and technologies.",
  host = "Jane Smith",
  imageAlt = "Podcast studio",
  imageSrc = "https://assets.mailviews.com/images/components/hero/mosaic-1.jpg",
  title = "The future of email",
}: Omit<PodcastBlogSplitProps, "theme">) => {
  const posts = [
    {
      episode,
      excerpt,
      host,
      imageAlt,
      imageSrc,
      title,
    },
  ];

  return (
    <>
      <BlogContent layout="podcast-split" posts={posts} />
    </>
  );
};

export const PodcastBlogSplit = ({
  theme = defaultTheme,
  episode = "Episode 42",
  excerpt = "A conversation about emerging email trends and technologies.",
  host = "Jane Smith",
  imageAlt = "Podcast studio",
  imageSrc = "https://assets.mailviews.com/images/components/hero/mosaic-1.jpg",
  title = "The future of email",
}: PodcastBlogSplitProps) => (
  <BlogEmailShell preview={title} theme={theme}>
    <PodcastBlogSplitSection
      episode={episode}
      excerpt={excerpt}
      host={host}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      title={title}
    />
  </BlogEmailShell>
);

PodcastBlogSplit.PreviewProps = {
  episode: "Episode 42",
  excerpt: "A conversation about emerging email trends and technologies.",
  host: "Jane Smith",
  imageAlt: "Podcast studio",
  imageSrc: "https://assets.mailviews.com/images/components/hero/mosaic-1.jpg",
  theme: defaultTheme,
  title: "The future of email",
} satisfies PodcastBlogSplitProps;
