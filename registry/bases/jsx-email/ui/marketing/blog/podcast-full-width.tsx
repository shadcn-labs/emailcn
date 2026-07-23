import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import {
  BlogContent,
  BlogEmailShell,
} from "@/registry/bases/jsx-email/ui/marketing/blog/blog-shared";

export interface PodcastFullWidthProps {
  theme?: EmailThemeTokens;
  episode?: string;
  excerpt?: string;
  imageAlt?: string;
  imageSrc?: string;
  title?: string;
}

export const PodcastFullWidthSection = ({
  episode = "Episode 42",
  excerpt = "A conversation about emerging email trends and technologies.",
  imageAlt = "Podcast studio",
  imageSrc = "https://assets.mailviews.com/images/components/image-grids/full-width-3.jpg",
  title = "The future of email",
}: Omit<PodcastFullWidthProps, "theme">) => {
  const posts = [
    {
      episode,
      excerpt,
      imageAlt,
      imageSrc,
      title,
    },
  ];

  return (
    <>
      <BlogContent layout="podcast-full" posts={posts} />
    </>
  );
};

export const PodcastFullWidth = ({
  theme = defaultTheme,
  episode = "Episode 42",
  excerpt = "A conversation about emerging email trends and technologies.",
  imageAlt = "Podcast studio",
  imageSrc = "https://assets.mailviews.com/images/components/image-grids/full-width-3.jpg",
  title = "The future of email",
}: PodcastFullWidthProps) => (
  <BlogEmailShell preview={title} theme={theme}>
    <PodcastFullWidthSection
      episode={episode}
      excerpt={excerpt}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      title={title}
    />
  </BlogEmailShell>
);

PodcastFullWidth.PreviewProps = {
  episode: "Episode 42",
  excerpt: "A conversation about emerging email trends and technologies.",
  imageAlt: "Podcast studio",
  imageSrc:
    "https://assets.mailviews.com/images/components/image-grids/full-width-3.jpg",
  theme: defaultTheme,
  title: "The future of email",
} satisfies PodcastFullWidthProps;
