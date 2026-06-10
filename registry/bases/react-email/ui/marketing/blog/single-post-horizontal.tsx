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

export type SinglePostHorizontalVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SinglePostHorizontalProps {
  theme?: TailwindConfig;
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  excerpt?: string;
  author?: string;
  variant?: SinglePostHorizontalVariant;
}

export const SinglePostHorizontalSection = ({
  imageSrc = "https://static.photos/travel/300x200/2",
  imageAlt = "",
  title = "Featured Post",
  excerpt = "A brief summary of the featured blog post content.",
  author = "John Doe",
  variant = "default",
}: Omit<SinglePostHorizontalProps, "theme">) => {
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
              height="200"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
          <Column className="w-1/2 align-middle">
            <Text className="m-0 mb-2 text-xl font-bold text-foreground">
              {title}
            </Text>
            <Text className="m-0 mb-4 text-sm leading-snug text-foreground-muted">
              {excerpt}
            </Text>
            {author ? (
              <Text className="m-0 text-xs text-foreground-subtle">
                By {author}
              </Text>
            ) : null}
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const SinglePostHorizontal = ({
  theme = defaultTheme,
  imageSrc = "https://static.photos/travel/300x200/3",
  imageAlt = "",
  title = "Featured Post",
  excerpt = "A brief summary of the featured blog post content.",
  author = "John Doe",
  variant = "default",
}: SinglePostHorizontalProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{title}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <SinglePostHorizontalSection
          author={author}
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

SinglePostHorizontal.PreviewProps = {
  author: "John Doe",
  excerpt:
    "Discover the top 10 strategies for growing your email list in 2024.",
  imageAlt: "Featured Post",
  imageSrc: "https://static.photos/travel/300x200/4",
  theme: defaultTheme,
  title: "How to Grow Your Email List",
  variant: "default",
} satisfies SinglePostHorizontalProps;
