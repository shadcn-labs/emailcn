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

export interface ProductDetailThreeImagesProps {
  theme?: TailwindConfig;
  imageUrl1?: string;
  imageUrl2?: string;
  imageUrl3?: string;
  name?: string;
  price?: string;
  description?: string;
  features?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const ProductDetailThreeImagesSection = ({
  imageUrl1,
  imageUrl2,
  imageUrl3,
  name = "Product Name",
  price = "$99.00",
  description = "Product description goes here.",
  features = ["Feature 1", "Feature 2", "Feature 3"],
  ctaLabel = "Buy Now",
  ctaHref = "#",
  variant = "default",
}: Omit<ProductDetailThreeImagesProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="py-12">
      {imageUrl1 ? (
        <Row className="mb-3">
          <Column className="w-full align-top">
            <Img
              src={imageUrl1}
              alt={`${name} primary`}
              className="h-auto max-w-full rounded-md object-cover"
            />
          </Column>
        </Row>
      ) : null}
      {imageUrl2 || imageUrl3 ? (
        <Row className="mb-6">
          <Column className="w-1/2 pr-3 align-top">
            {imageUrl2 ? (
              <Img
                src={imageUrl2}
                alt={`${name} view 2`}
                className="h-auto max-w-full rounded-md object-cover"
              />
            ) : null}
          </Column>
          <Column className="w-1/2 pl-3 align-top">
            {imageUrl3 ? (
              <Img
                src={imageUrl3}
                alt={`${name} view 3`}
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

export const ProductDetailThreeImages = ({
  theme = defaultTheme,
  imageUrl1,
  imageUrl2,
  imageUrl3,
  name = "Product Name",
  price = "$99.00",
  description = "Product description goes here.",
  features = ["Feature 1", "Feature 2", "Feature 3"],
  ctaLabel = "Buy Now",
  ctaHref = "#",
  variant = "default",
}: ProductDetailThreeImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{name}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ProductDetailThreeImagesSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          description={description}
          features={features}
          imageUrl1={imageUrl1}
          imageUrl2={imageUrl2}
          imageUrl3={imageUrl3}
          name={name}
          price={price}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

ProductDetailThreeImages.PreviewProps = {
  ctaHref: "https://example.com/buy",
  ctaLabel: "Explore More",
  description:
    "See every angle of this meticulously crafted item with our three-image detail view.",
  features: ["Timeless design", "Sustainable sourcing", "Gift-ready packaging"],
  imageUrl1: "https://static.photos/technology/640x640/2",
  imageUrl2: "https://static.photos/technology/640x640/3",
  imageUrl3: "https://static.photos/technology/640x640/4",
  name: "Premium Leather Shoes",
  price: "$349.00",
  theme: defaultTheme,
  variant: "default",
} satisfies ProductDetailThreeImagesProps;
