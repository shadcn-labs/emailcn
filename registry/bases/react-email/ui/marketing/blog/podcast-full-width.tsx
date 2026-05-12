/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type PodcastFullWidthVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface PodcastFullWidthProps {
  theme?: TailwindConfig;
  imageSrc?: string;
  imageAlt?: string;
  episode?: string;
  title?: string;
  excerpt?: string;
  variant?: PodcastFullWidthVariant;
}

export const PodcastFullWidthSection = ({
  imageSrc = "https://via.placeholder.com/600x300",
  imageAlt = "",
  episode = "Episode 42",
  title = "The Future of Email",
  excerpt = "A deep dive into emerging email trends and technologies.",
  variant = "default",
}: Omit<PodcastFullWidthProps, "theme">) => {
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
        <Img
          src={imageSrc}
          alt={imageAlt}
          width="600"
          height="300"
          className="mb-6 w-full h-auto rounded-lg object-cover"
        />
        <Text className="m-0 mb-2 text-center text-xs font-medium uppercase tracking-wider text-primary">
          {episode}
        </Text>
        <Text className="m-0 mb-4 text-center text-2xl font-bold text-foreground">
          {title}
        </Text>
        <Text className="m-0 text-center text-sm leading-snug text-foreground-muted">
          {excerpt}
        </Text>
      </Section>
    </Section>
  );
};

export const PodcastFullWidth = ({
  theme = defaultTheme,
  imageSrc = "https://via.placeholder.com/600x300",
  imageAlt = "",
  episode = "Episode 42",
  title = "The Future of Email",
  excerpt = "A deep dive into emerging email trends and technologies.",
  variant = "default",
}: PodcastFullWidthProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{title}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <PodcastFullWidthSection
          episode={episode}
          excerpt={excerpt}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          title={title}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

PodcastFullWidth.PreviewProps = {
  episode: "Episode 42",
  excerpt: "A deep dive into emerging email trends and technologies.",
  imageAlt: "Podcast",
  imageSrc: "https://via.placeholder.com/600x300",
  theme: defaultTheme,
  title: "The Future of Email",
  variant: "default",
} satisfies PodcastFullWidthProps;
