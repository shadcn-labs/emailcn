import { Column, Img, Row, Section, Tailwind, Text } from "react-email";

import type { EmailTheme } from "@/registry/themes/default";
import { theme as defaultTheme } from "@/registry/themes/default";

export interface ProductCardProps {
  theme?: EmailTheme;
  imageUrl?: string;
  name?: string;
  price?: string;
  quantity?: number;
  ctaLabel?: string;
  ctaHref?: string;
}

export const ProductCard = ({
  theme = defaultTheme,
  imageUrl,
  name = "Product Name",
  price = "$99.00",
  quantity = 1,
  ctaLabel = "View Details",
  ctaHref = "#",
}: ProductCardProps) => (
  <Tailwind config={theme}>
    <Section className="rounded-md border border-border bg-background p-6">
      <Row>
        <Column className="w-[100px] align-top">
          {imageUrl ? (
            <Img
              src={imageUrl}
              alt={name}
              width={100}
              className="h-auto max-w-full rounded-md object-cover"
            />
          ) : null}
        </Column>
        <Column className="pl-6 align-top">
          <Text className="mb-2 text-base font-medium text-foreground">
            {name}
          </Text>
          <Text className="text-lg font-bold text-foreground">
            {price}
            {quantity > 1 ? (
              <span className="ml-2 text-sm text-foreground-muted">
                {" "}
                x {quantity}
              </span>
            ) : null}
          </Text>
          {ctaLabel ? (
            <Text className="mt-2">
              <a
                href={ctaHref}
                className="inline-block text-sm text-primary no-underline"
              >
                {ctaLabel}
              </a>
            </Text>
          ) : null}
        </Column>
      </Row>
    </Section>
  </Tailwind>
);

ProductCard.PreviewProps = {
  ctaHref: "https://example.com/product",
  ctaLabel: "View Details",
  imageUrl: "https://example.com/product.jpg",
  name: "Premium Sneakers",
  price: "$149.00",
  quantity: 1,
  theme: defaultTheme,
} satisfies ProductCardProps;

export default ProductCard;
