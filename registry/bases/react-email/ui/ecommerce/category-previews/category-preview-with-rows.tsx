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

export interface CategoryPreviewRowsProps {
  theme?: TailwindConfig;
  categories?: {
    imageUrl?: string;
    name: string;
    href?: string;
  }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const CategoryPreviewRowsSection = ({
  categories = [
    { name: "Category 1" },
    { name: "Category 2" },
    { name: "Category 3" },
  ],
  variant = "default",
}: Omit<CategoryPreviewRowsProps, "theme">) => {
  const alignClass =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-left";

  return (
    <Section className="py-12">
      {categories.map((category, index) => (
        <Row key={`${category.name}-${index}`} className="mb-4">
          <Column className="w-[80px] align-top">
            {category.imageUrl ? (
              <a href={category.href}>
                <Img
                  src={category.imageUrl}
                  alt={category.name}
                  className="h-auto max-w-full rounded-md object-cover"
                />
              </a>
            ) : null}
          </Column>
          <Column className="pl-4 align-top">
            <a href={category.href} className="no-underline">
              <Text
                className={`m-0 text-base font-medium text-foreground ${alignClass}`}
              >
                {category.name}
              </Text>
            </a>
          </Column>
        </Row>
      ))}
    </Section>
  );
};

export const CategoryPreviewRows = ({
  theme = defaultTheme,
  categories = [
    { name: "Category 1" },
    { name: "Category 2" },
    { name: "Category 3" },
  ],
  variant = "default",
}: CategoryPreviewRowsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Categories</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CategoryPreviewRowsSection categories={categories} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

CategoryPreviewRows.PreviewProps = {
  categories: [
    {
      href: "https://example.com/electronics",
      imageUrl: "https://static.photos/technology/800x600/2",
      name: "Electronics",
    },
    {
      href: "https://example.com/fashion",
      imageUrl: "https://static.photos/fashion/800x600/3",
      name: "Fashion",
    },
    {
      href: "https://example.com/home",
      imageUrl: "https://static.photos/workspace/800x600/4",
      name: "Home & Living",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies CategoryPreviewRowsProps;
