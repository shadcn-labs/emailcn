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

export type FullWidthFeaturedPostWithLargeDateVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FullWidthFeaturedPostWithLargeDateProps {
  theme?: TailwindConfig;
  imageSrc?: string;
  imageAlt?: string;
  date?: string;
  month?: string;
  title?: string;
  excerpt?: string;
  variant?: FullWidthFeaturedPostWithLargeDateVariant;
}

export const FullWidthFeaturedPostWithLargeDateSection = ({
  imageSrc = "https://via.placeholder.com/600x250",
  imageAlt = "",
  date = "15",
  month = "MAR",
  title = "Featured Article",
  excerpt = "A compelling excerpt from the featured article.",
  variant = "default",
}: Omit<FullWidthFeaturedPostWithLargeDateProps, "theme">) => {
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
        <Section className="relative overflow-hidden rounded-lg">
          <Img
            src={imageSrc}
            alt={imageAlt}
            width="600"
            height="250"
            className="w-full h-auto object-cover"
          />
        </Section>
        <Section className="mt-4 text-center">
          <Text className="m-0 text-4xl font-bold text-foreground">{date}</Text>
          <Text className="m-0 mb-4 text-sm font-medium uppercase tracking-wider text-foreground-muted">
            {month}
          </Text>
          <Text className="m-0 mb-2 text-2xl font-bold text-foreground">
            {title}
          </Text>
          <Text className="m-0 text-base text-foreground-muted">{excerpt}</Text>
        </Section>
      </Section>
    </Section>
  );
};

export const FullWidthFeaturedPostWithLargeDate = ({
  theme = defaultTheme,
  imageSrc = "https://via.placeholder.com/600x250",
  imageAlt = "",
  date = "15",
  month = "MAR",
  title = "Featured Article",
  excerpt = "A compelling excerpt from the featured article.",
  variant = "default",
}: FullWidthFeaturedPostWithLargeDateProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{title}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FullWidthFeaturedPostWithLargeDateSection
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

FullWidthFeaturedPostWithLargeDate.PreviewProps = {
  date: "15",
  excerpt: "Exploring the latest trends in email design and development.",
  imageAlt: "Featured",
  imageSrc: "https://via.placeholder.com/600x250",
  month: "MAR",
  theme: defaultTheme,
  title: "Email Design Trends 2024",
  variant: "default",
} satisfies FullWidthFeaturedPostWithLargeDateProps;
