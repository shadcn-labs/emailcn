/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type PodcastBlogSplitVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface PodcastBlogSplitProps {
  theme?: TailwindConfig;
  imageSrc?: string;
  imageAlt?: string;
  episode?: string;
  title?: string;
  excerpt?: string;
  host?: string;
  variant?: PodcastBlogSplitVariant;
}

export const PodcastBlogSplitSection = ({
  imageSrc = "https://static.photos/city/300x300/2",
  imageAlt = "",
  episode = "Episode 42",
  title = "The Future of Email",
  excerpt = "A deep dive into emerging email trends and technologies.",
  host = "Jane Smith",
  variant = "default",
}: Omit<PodcastBlogSplitProps, "theme">) => {
  const getVariantClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[-10deg]";
      }
      case "slanted-right": {
        return "skew-x-[10deg]";
      }
      default: {
        return "";
      }
    }
  };

  const getUnskewClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[10deg]";
      }
      case "slanted-right": {
        return "skew-x-[-10deg]";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <Section className={`bg-background py-16 ${getVariantClass()}`}>
      <Section className={`max-w-container mx-auto ${getUnskewClass()}`}>
        <Row>
          <Column className="w-1/2 pr-6 align-middle">
            <Img
              src={imageSrc}
              alt={imageAlt}
              width="300"
              height="300"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
          <Column className="w-1/2 align-middle">
            <Text className="m-0 mb-1 text-xs font-medium uppercase tracking-wider text-primary">
              {episode}
            </Text>
            <Text className="m-0 mb-3 text-xl font-bold text-foreground">
              {title}
            </Text>
            <Text className="m-0 mb-4 text-sm leading-snug text-foreground-muted">
              {excerpt}
            </Text>
            {host ? (
              <Text className="m-0 text-xs text-foreground-subtle">
                Hosted by {host}
              </Text>
            ) : null}
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const PodcastBlogSplit = ({
  theme = defaultTheme,
  imageSrc = "https://static.photos/city/300x300/3",
  imageAlt = "",
  episode = "Episode 42",
  title = "The Future of Email",
  excerpt = "A deep dive into emerging email trends and technologies.",
  host = "Jane Smith",
  variant = "default",
}: PodcastBlogSplitProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{title}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <PodcastBlogSplitSection
          episode={episode}
          excerpt={excerpt}
          host={host}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          title={title}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

PodcastBlogSplit.PreviewProps = {
  episode: "Episode 42",
  excerpt: "A deep dive into emerging email trends and technologies.",
  host: "Jane Smith",
  imageAlt: "Podcast",
  imageSrc: "https://static.photos/city/300x300/4",
  theme: defaultTheme,
  title: "The Future of Email",
  variant: "default",
} satisfies PodcastBlogSplitProps;
