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

export type TwoColumnsBlogWithImagesVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TwoColumnsBlogWithImagesProps {
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
  variant?: TwoColumnsBlogWithImagesVariant;
}

export const TwoColumnsBlogWithImagesSection = ({
  heading = "Latest Posts",
  imageSrc1 = "https://static.photos/travel/300x200/2",
  imageAlt1 = "",
  title1 = "Blog Post One",
  excerpt1 = "Brief description of the first blog post.",
  imageSrc2 = "https://static.photos/travel/300x200/3",
  imageAlt2 = "",
  title2 = "Blog Post Two",
  excerpt2 = "Brief description of the second blog post.",
  variant = "default",
}: Omit<TwoColumnsBlogWithImagesProps, "theme">) => {
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
            <Img
              src={imageSrc1}
              alt={imageAlt1}
              width="300"
              height="200"
              className="mb-4 w-full h-auto rounded-lg object-cover"
            />
            <Text className="m-0 mb-2 text-lg font-medium text-foreground">
              {title1}
            </Text>
            <Text className="m-0 text-sm leading-snug text-foreground-muted">
              {excerpt1}
            </Text>
          </Column>
          <Column className="w-1/2 pl-4 align-top">
            <Img
              src={imageSrc2}
              alt={imageAlt2}
              width="300"
              height="200"
              className="mb-4 w-full h-auto rounded-lg object-cover"
            />
            <Text className="m-0 mb-2 text-lg font-medium text-foreground">
              {title2}
            </Text>
            <Text className="m-0 text-sm leading-snug text-foreground-muted">
              {excerpt2}
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const TwoColumnsBlogWithImages = ({
  theme = defaultTheme,
  heading = "Latest Posts",
  imageSrc1 = "https://static.photos/travel/300x200/4",
  imageAlt1 = "",
  title1 = "Blog Post One",
  excerpt1 = "Brief description of the first blog post.",
  imageSrc2 = "https://static.photos/travel/300x200/5",
  imageAlt2 = "",
  title2 = "Blog Post Two",
  excerpt2 = "Brief description of the second blog post.",
  variant = "default",
}: TwoColumnsBlogWithImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TwoColumnsBlogWithImagesSection
          excerpt1={excerpt1}
          excerpt2={excerpt2}
          heading={heading}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          title1={title1}
          title2={title2}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnsBlogWithImages.PreviewProps = {
  excerpt1: "Learn how to build beautiful emails with our step-by-step guide.",
  excerpt2: "Discover the best practices for email marketing in 2024.",
  heading: "Latest Posts",
  imageAlt1: "Blog 1",
  imageAlt2: "Blog 2",
  imageSrc1: "https://static.photos/travel/300x200/6",
  imageSrc2: "https://static.photos/travel/300x200/7",
  theme: defaultTheme,
  title1: "Getting Started with Email Design",
  title2: "Email Marketing Best Practices",
  variant: "default",
} satisfies TwoColumnsBlogWithImagesProps;
