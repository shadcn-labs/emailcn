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

export type TwoColumnsMasonryBlogWithBoxedContentVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TwoColumnsMasonryBlogWithBoxedContentProps {
  theme?: TailwindConfig;
  heading?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  title1?: string;
  excerpt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  title2?: string;
  excerpt2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  title3?: string;
  excerpt3?: string;
  variant?: TwoColumnsMasonryBlogWithBoxedContentVariant;
}

export const TwoColumnsMasonryBlogWithBoxedContentSection = ({
  heading = "Blog",
  imageSrc1 = "https://via.placeholder.com/300x200",
  imageAlt1 = "",
  title1 = "Post One",
  excerpt1 = "Short excerpt for post one.",
  imageSrc2 = "https://via.placeholder.com/300x300",
  imageAlt2 = "",
  title2 = "Post Two",
  excerpt2 = "Short excerpt for post two.",
  imageSrc3 = "https://via.placeholder.com/300x250",
  imageAlt3 = "",
  title3 = "Post Three",
  excerpt3 = "Short excerpt for post three.",
  variant = "default",
}: Omit<TwoColumnsMasonryBlogWithBoxedContentProps, "theme">) => {
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
        {heading ? (
          <Text className="m-0 mb-8 text-center text-2xl font-bold text-foreground">
            {heading}
          </Text>
        ) : null}
        <Row>
          <Column className="w-1/2 pr-4 align-top">
            <Section className="mb-6 rounded-lg border border-border">
              <Img
                src={imageSrc1}
                alt={imageAlt1}
                width="300"
                height="200"
                className="w-full h-auto rounded-t-lg object-cover"
              />
              <Section className="p-4">
                <Text className="m-0 mb-1 text-base font-medium text-foreground">
                  {title1}
                </Text>
                <Text className="m-0 text-sm text-foreground-muted">
                  {excerpt1}
                </Text>
              </Section>
            </Section>
            <Section className="rounded-lg border border-border">
              <Img
                src={imageSrc3}
                alt={imageAlt3}
                width="300"
                height="250"
                className="w-full h-auto rounded-t-lg object-cover"
              />
              <Section className="p-4">
                <Text className="m-0 mb-1 text-base font-medium text-foreground">
                  {title3}
                </Text>
                <Text className="m-0 text-sm text-foreground-muted">
                  {excerpt3}
                </Text>
              </Section>
            </Section>
          </Column>
          <Column className="w-1/2 pl-4 align-top">
            <Section className="rounded-lg border border-border">
              <Img
                src={imageSrc2}
                alt={imageAlt2}
                width="300"
                height="300"
                className="w-full h-auto rounded-t-lg object-cover"
              />
              <Section className="p-4">
                <Text className="m-0 mb-1 text-base font-medium text-foreground">
                  {title2}
                </Text>
                <Text className="m-0 text-sm text-foreground-muted">
                  {excerpt2}
                </Text>
              </Section>
            </Section>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const TwoColumnsMasonryBlogWithBoxedContent = ({
  theme = defaultTheme,
  heading = "Blog",
  imageSrc1 = "https://via.placeholder.com/300x200",
  imageAlt1 = "",
  title1 = "Post One",
  excerpt1 = "Short excerpt for post one.",
  imageSrc2 = "https://via.placeholder.com/300x300",
  imageAlt2 = "",
  title2 = "Post Two",
  excerpt2 = "Short excerpt for post two.",
  imageSrc3 = "https://via.placeholder.com/300x250",
  imageAlt3 = "",
  title3 = "Post Three",
  excerpt3 = "Short excerpt for post three.",
  variant = "default",
}: TwoColumnsMasonryBlogWithBoxedContentProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TwoColumnsMasonryBlogWithBoxedContentSection
          excerpt1={excerpt1}
          excerpt2={excerpt2}
          excerpt3={excerpt3}
          heading={heading}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageAlt3={imageAlt3}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          imageSrc3={imageSrc3}
          title1={title1}
          title2={title2}
          title3={title3}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnsMasonryBlogWithBoxedContent.PreviewProps = {
  excerpt1: "A comprehensive guide to getting started.",
  excerpt2: "Tips and tricks for power users.",
  excerpt3: "What's new in our latest release.",
  heading: "Blog",
  imageAlt1: "Post 1",
  imageAlt2: "Post 2",
  imageAlt3: "Post 3",
  imageSrc1: "https://via.placeholder.com/300x200",
  imageSrc2: "https://via.placeholder.com/300x300",
  imageSrc3: "https://via.placeholder.com/300x250",
  theme: defaultTheme,
  title1: "Getting Started Guide",
  title2: "Pro Tips",
  title3: "Release Notes",
  variant: "default",
} satisfies TwoColumnsMasonryBlogWithBoxedContentProps;
