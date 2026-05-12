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

export interface CategoryPreviewCardsProps {
  theme?: TailwindConfig;
  categories?: {
    imageUrl?: string;
    name: string;
    href?: string;
  }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const CategoryPreviewCardsSection = ({
  categories = [
    { name: "Category 1" },
    { name: "Category 2" },
    { name: "Category 3" },
  ],
  variant = "default",
}: Omit<CategoryPreviewCardsProps, "theme">) => {
  const alignClass =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="py-12">
      <Row>
        {categories.map((category, index) => (
          <Column
            key={`${category.name}-${index}`}
            className="w-1/3 align-top pr-4"
          >
            {category.imageUrl ? (
              <a href={category.href}>
                <Img
                  src={category.imageUrl}
                  alt={category.name}
                  className="mb-3 h-auto max-w-full rounded-md object-cover"
                />
              </a>
            ) : (
              <Section className="mb-3 h-[120px] rounded-md bg-background-muted" />
            )}
            <a href={category.href} className="no-underline">
              <Text
                className={`m-0 text-sm font-medium text-foreground ${alignClass}`}
              >
                {category.name}
              </Text>
            </a>
          </Column>
        ))}
      </Row>
    </Section>
  );
};

export const CategoryPreviewCards = ({
  theme = defaultTheme,
  categories = [
    { name: "Category 1" },
    { name: "Category 2" },
    { name: "Category 3" },
  ],
  variant = "default",
}: CategoryPreviewCardsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Categories</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CategoryPreviewCardsSection
          categories={categories}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

CategoryPreviewCards.PreviewProps = {
  categories: [
    {
      href: "https://example.com/electronics",
      imageUrl: "https://example.com/cat-electronics.jpg",
      name: "Electronics",
    },
    {
      href: "https://example.com/fashion",
      imageUrl: "https://example.com/cat-fashion.jpg",
      name: "Fashion",
    },
    {
      href: "https://example.com/home",
      imageUrl: "https://example.com/cat-home.jpg",
      name: "Home & Living",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies CategoryPreviewCardsProps;
