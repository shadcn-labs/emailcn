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

export type FeaturedPostWithLargeDateVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FeaturedPostWithLargeDateProps {
  theme?: TailwindConfig;
  imageSrc?: string;
  imageAlt?: string;
  date?: string;
  month?: string;
  title?: string;
  excerpt?: string;
  variant?: FeaturedPostWithLargeDateVariant;
}

export const FeaturedPostWithLargeDateSection = ({
  imageSrc = "https://via.placeholder.com/500x300",
  imageAlt = "",
  date = "15",
  month = "MAR",
  title = "Article Title",
  excerpt = "A brief excerpt of the article.",
  variant = "default",
}: Omit<FeaturedPostWithLargeDateProps, "theme">) => {
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
          <Column className="w-1/4 pr-6 text-center align-middle">
            <Text className="m-0 text-4xl font-bold text-foreground">
              {date}
            </Text>
            <Text className="m-0 text-sm font-medium uppercase tracking-wider text-foreground-muted">
              {month}
            </Text>
          </Column>
          <Column className="w-1/2 pr-6 align-middle">
            <Img
              src={imageSrc}
              alt={imageAlt}
              width="500"
              height="300"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
          <Column className="w-1/4 align-middle">
            <Text className="m-0 mb-2 text-lg font-bold text-foreground">
              {title}
            </Text>
            <Text className="m-0 text-sm text-foreground-muted">{excerpt}</Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const FeaturedPostWithLargeDate = ({
  theme = defaultTheme,
  imageSrc = "https://via.placeholder.com/500x300",
  imageAlt = "",
  date = "15",
  month = "MAR",
  title = "Article Title",
  excerpt = "A brief excerpt of the article.",
  variant = "default",
}: FeaturedPostWithLargeDateProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{title}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FeaturedPostWithLargeDateSection
          date={date}
          excerpt={excerpt}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          month={month}
          title={title}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FeaturedPostWithLargeDate.PreviewProps = {
  date: "15",
  excerpt: "Exploring the latest trends in email design and development.",
  imageAlt: "Article",
  imageSrc: "https://via.placeholder.com/500x300",
  month: "MAR",
  theme: defaultTheme,
  title: "Email Design Trends 2024",
  variant: "default",
} satisfies FeaturedPostWithLargeDateProps;
