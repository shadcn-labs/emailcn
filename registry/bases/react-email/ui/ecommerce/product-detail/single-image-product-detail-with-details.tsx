/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
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

export interface SingleImageProductDetailProps {
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

export const SingleImageProductDetailSection = ({
  imageUrl,
  name = "Product Name",
  price = "$99.00",
  description = "Product description goes here.",
  features = ["Feature 1", "Feature 2", "Feature 3"],
  ctaLabel = "Buy Now",
  ctaHref = "#",
  variant = "default",
}: Omit<SingleImageProductDetailProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="py-12">
      <Section className="text-center">
        {imageUrl ? (
          <Img
            src={imageUrl}
            alt={name}
            className="mx-auto mb-6 h-auto max-w-full rounded-md object-cover"
          />
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
          <Button
            href={ctaHref}
            className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-fg no-underline"
          >
            {ctaLabel}
          </Button>
        ) : null}
      </Section>
    </Section>
  );
};

export const SingleImageProductDetail = ({
  theme = defaultTheme,
  imageUrl,
  name = "Product Name",
  price = "$99.00",
  description = "Product description goes here.",
  features = ["Feature 1", "Feature 2", "Feature 3"],
  ctaLabel = "Buy Now",
  ctaHref = "#",
  variant = "default",
}: SingleImageProductDetailProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{name}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <SingleImageProductDetailSection
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

SingleImageProductDetail.PreviewProps = {
  ctaHref: "https://example.com/buy",
  ctaLabel: "Shop Now",
  description:
    "A stunning product designed with elegance and functionality in mind.",
  features: [
    "Handcrafted quality",
    "Eco-friendly materials",
    "Limited edition",
  ],
  imageUrl: "https://static.photos/technology/640x640/2",
  name: "Artisan Watch",
  price: "$299.00",
  theme: defaultTheme,
  variant: "default",
} satisfies SingleImageProductDetailProps;
