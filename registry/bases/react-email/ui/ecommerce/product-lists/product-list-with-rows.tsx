/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
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

export interface ProductListWithRowsProps {
  theme?: TailwindConfig;
  products?: {
    imageUrl?: string;
    name: string;
    price: string;
    href?: string;
  }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const ProductListWithRowsSection = ({
  products = [
    { name: "Product 1", price: "$29.00" },
    { name: "Product 2", price: "$39.00" },
    { name: "Product 3", price: "$49.00" },
  ],
  variant = "default",
}: Omit<ProductListWithRowsProps, "theme">) => {
  const alignClass =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-left";

  return (
    <Section className="py-12">
      {products.map((product, index) => (
        <Row key={`${product.name}-${index}`} className="mb-4">
          <Column className="w-[80px] align-top">
            {product.imageUrl ? (
              <a href={product.href}>
                <Img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-auto max-w-full rounded-md object-cover"
                />
              </a>
            ) : null}
          </Column>
          <Column className="pl-4 align-top">
            <a href={product.href} className="no-underline">
              <Text
                className={`mb-1 text-base font-medium text-foreground ${alignClass}`}
              >
                {product.name}
              </Text>
            </a>
            <Text
              className={`m-0 text-base text-foreground-muted ${alignClass}`}
            >
              {product.price}
            </Text>
          </Column>
        </Row>
      ))}
    </Section>
  );
};

export const ProductListWithRows = ({
  theme = defaultTheme,
  products = [
    { name: "Product 1", price: "$29.00" },
    { name: "Product 2", price: "$39.00" },
    { name: "Product 3", price: "$49.00" },
  ],
  variant = "default",
}: ProductListWithRowsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Products</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ProductListWithRowsSection products={products} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

ProductListWithRows.PreviewProps = {
  products: [
    {
      href: "https://example.com/product1",
      imageUrl: "https://example.com/product1.jpg",
      name: "Wireless Headphones",
      price: "$149.00",
    },
    {
      href: "https://example.com/product2",
      imageUrl: "https://example.com/product2.jpg",
      name: "Leather Backpack",
      price: "$89.00",
    },
    {
      href: "https://example.com/product3",
      imageUrl: "https://example.com/product3.jpg",
      name: "Smart Watch",
      price: "$249.00",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies ProductListWithRowsProps;
