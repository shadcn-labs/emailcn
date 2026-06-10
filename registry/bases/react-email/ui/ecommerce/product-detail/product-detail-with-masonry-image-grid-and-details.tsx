/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
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

export interface ProductDetailMasonryProps {
  theme?: TailwindConfig;
  images?: string[];
  name?: string;
  price?: string;
  description?: string;
  features?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const ProductDetailMasonrySection = ({
  images = [],
  name = "Product Name",
  price = "$99.00",
  description = "Product description goes here.",
  features = ["Feature 1", "Feature 2", "Feature 3"],
  ctaLabel = "Buy Now",
  ctaHref = "#",
  variant = "default",
}: Omit<ProductDetailMasonryProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="py-12">
      {images.length > 0 ? (
        <Row className="mb-6">
          <Column className="w-1/2 pr-2 align-top">
            {images[0] ? (
              <Img
                src={images[0]}
                alt={`${name} 1`}
                className="mb-2 h-auto max-w-full rounded-md object-cover"
              />
            ) : null}
            {images[2] ? (
              <Img
                src={images[2]}
                alt={`${name} 3`}
                className="h-auto max-w-full rounded-md object-cover"
              />
            ) : null}
          </Column>
          <Column className="w-1/2 pl-2 align-top">
            {images[1] ? (
              <Img
                src={images[1]}
                alt={`${name} 2`}
                className="mb-2 h-auto max-w-full rounded-md object-cover"
              />
            ) : null}
            {images[3] ? (
              <Img
                src={images[3]}
                alt={`${name} 4`}
                className="h-auto max-w-full rounded-md object-cover"
              />
            ) : null}
          </Column>
        </Row>
      ) : null}
      <Text
        className={`mb-2 text-2xl font-semibold text-foreground ${textAlign}`}
      >
        {name}
      </Text>
      <Text className={`mb-4 text-xl font-bold text-foreground ${textAlign}`}>
        {price}
      </Text>
      <Text
        className={`mb-6 text-base leading-snug text-foreground-muted ${textAlign}`}
      >
        {description}
      </Text>
      {features.length > 0 ? (
        <Section className={`mb-6 ${textAlign}`}>
          {features.map((feature, index) => (
            <Text
              key={`${feature}-${index}`}
              className="m-0 mb-1 text-base text-foreground"
            >
              &#10003; {feature}
            </Text>
          ))}
        </Section>
      ) : null}
      {ctaLabel && ctaHref ? (
        <Section className={textAlign}>
          <Button
            href={ctaHref}
            className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-fg no-underline"
          >
            {ctaLabel}
          </Button>
        </Section>
      ) : null}
    </Section>
  );
};

export const ProductDetailMasonry = ({
  theme = defaultTheme,
  images = [],
  name = "Product Name",
  price = "$99.00",
  description = "Product description goes here.",
  features = ["Feature 1", "Feature 2", "Feature 3"],
  ctaLabel = "Buy Now",
  ctaHref = "#",
  variant = "default",
}: ProductDetailMasonryProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{name}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ProductDetailMasonrySection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          description={description}
          features={features}
          images={images}
          name={name}
          price={price}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

ProductDetailMasonry.PreviewProps = {
  ctaHref: "https://example.com/buy",
  ctaLabel: "View Collection",
  description:
    "A carefully curated product captured from every angle in a beautiful masonry layout.",
  features: ["Artisan crafted", "Premium materials", "Lifetime guarantee"],
  images: [
    "https://static.photos/technology/640x640/2",
    "https://static.photos/technology/640x640/3",
    "https://static.photos/technology/640x640/4",
    "https://static.photos/technology/640x640/5",
  ],
  name: "Handcrafted Vase",
  price: "$129.00",
  theme: defaultTheme,
  variant: "default",
} satisfies ProductDetailMasonryProps;
