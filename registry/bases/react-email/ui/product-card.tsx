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

export interface ProductCardProps {
  theme?: TailwindConfig;
  imageUrl?: string;
  name?: string;
  price?: string;
  quantity?: number;
  ctaLabel?: string;
  ctaHref?: string;
}

export const ProductCardSection = ({
  imageUrl,
  name = "Product Name",
  price = "$99.00",
  quantity = 1,
  ctaLabel = "View Details",
  ctaHref = "#",
}: Omit<ProductCardProps, "theme">) => (
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
);

export const ProductCard = ({
  theme = defaultTheme,
  imageUrl,
  name = "Product Name",
  price = "$99.00",
  quantity = 1,
  ctaLabel = "View Details",
  ctaHref = "#",
}: ProductCardProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{name}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ProductCardSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          imageUrl={imageUrl}
          name={name}
          price={price}
          quantity={quantity}
        />
      </Body>
    </Tailwind>
  </Html>
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
