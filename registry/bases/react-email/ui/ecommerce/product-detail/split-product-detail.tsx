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

export interface SplitProductDetailProps {
  theme?: TailwindConfig;
  imageUrl?: string;
  name?: string;
  price?: string;
  description?: string;
  features?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const SplitProductDetailSection = ({
  imageUrl,
  name = "Product Name",
  price = "$99.00",
  description = "Product description goes here.",
  features = ["Feature 1", "Feature 2", "Feature 3"],
  ctaLabel = "Buy Now",
  ctaHref = "#",
  variant = "default",
}: Omit<SplitProductDetailProps, "theme">) => {
  const imageFirst = variant !== "slanted-right";

  return (
    <Section className="py-12">
      <Row>
        {imageFirst ? (
          <Column className="w-1/2 pr-6 align-top">
            {imageUrl ? (
              <Img
                src={imageUrl}
                alt={name}
                className="h-auto max-w-full rounded-md object-cover"
              />
            ) : null}
          </Column>
        ) : null}
        <Column className="w-1/2 align-top">
          <Text className="mb-2 text-2xl font-semibold text-foreground">
            {name}
          </Text>
          <Text className="mb-4 text-xl font-bold text-foreground">
            {price}
          </Text>
          <Text className="mb-6 text-base leading-snug text-foreground-muted">
            {description}
          </Text>
          {features.length > 0 ? (
            <Section className="mb-6">
              {features.map((feature, index) => (
                <Row key={`${feature}-${index}`} className="mb-2">
                  <Column className="w-[20px]">
                    <Text className="m-0 text-base text-primary">&#10003;</Text>
                  </Column>
                  <Column>
                    <Text className="m-0 text-base text-foreground">
                      {feature}
                    </Text>
                  </Column>
                </Row>
              ))}
            </Section>
          ) : null}
          {ctaLabel && ctaHref ? (
            <Button
              href={ctaHref}
              className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-fg no-underline"
            >
              {ctaLabel}
            </Button>
          ) : null}
        </Column>
        {!imageFirst ? (
          <Column className="w-1/2 pl-6 align-top">
            {imageUrl ? (
              <Img
                src={imageUrl}
                alt={name}
                className="h-auto max-w-full rounded-md object-cover"
              />
            ) : null}
          </Column>
        ) : null}
      </Row>
    </Section>
  );
};

export const SplitProductDetail = ({
  theme = defaultTheme,
  imageUrl,
  name = "Product Name",
  price = "$99.00",
  description = "Product description goes here.",
  features = ["Feature 1", "Feature 2", "Feature 3"],
  ctaLabel = "Buy Now",
  ctaHref = "#",
  variant = "default",
}: SplitProductDetailProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{name}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <SplitProductDetailSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          description={description}
          features={features}
          imageUrl={imageUrl}
          name={name}
          price={price}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

SplitProductDetail.PreviewProps = {
  ctaHref: "https://example.com/buy",
  ctaLabel: "Buy Now",
  description:
    "Crafted from premium materials, this product delivers exceptional quality and comfort for everyday use.",
  features: [
    "Premium quality materials",
    "Designed for durability",
    "30-day satisfaction guarantee",
  ],
  imageUrl: "https://example.com/product-large.jpg",
  name: "Premium Leather Bag",
  price: "$199.00",
  theme: defaultTheme,
  variant: "default",
} satisfies SplitProductDetailProps;
