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

export type FeatureWithMultipleProductImagesVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FeatureWithMultipleProductImagesProps {
  theme?: TailwindConfig;
  heading?: string;
  body?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  variant?: FeatureWithMultipleProductImagesVariant;
}

export const FeatureWithMultipleProductImagesSection = ({
  heading = "Product Collection",
  body = "Browse our latest collection.",
  imageSrc1 = "https://via.placeholder.com/200x200",
  imageAlt1 = "",
  imageSrc2 = "https://via.placeholder.com/200x200",
  imageAlt2 = "",
  imageSrc3 = "https://via.placeholder.com/200x200",
  imageAlt3 = "",
  variant = "default",
}: Omit<FeatureWithMultipleProductImagesProps, "theme">) => {
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
        <Row>
          <Column className="w-1/2 pr-8 align-middle">
            <Text className="m-0 text-2xl font-bold text-heading leading-snug text-foreground">
              {heading}
            </Text>
            <Text className="mt-4 mb-0 text-base leading-relaxed text-foreground-muted">
              {body}
            </Text>
          </Column>
          <Column className="w-1/2 align-middle">
            <Row>
              <Column className="w-1/3 pr-2 align-top">
                <Img
                  src={imageSrc1}
                  alt={imageAlt1}
                  width="200"
                  height="200"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </Column>
              <Column className="w-1/3 px-2 align-top">
                <Img
                  src={imageSrc2}
                  alt={imageAlt2}
                  width="200"
                  height="200"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </Column>
              <Column className="w-1/3 pl-2 align-top">
                <Img
                  src={imageSrc3}
                  alt={imageAlt3}
                  width="200"
                  height="200"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const FeatureWithMultipleProductImages = ({
  theme = defaultTheme,
  heading = "Product Collection",
  body = "Browse our latest collection.",
  imageSrc1 = "https://via.placeholder.com/200x200",
  imageAlt1 = "",
  imageSrc2 = "https://via.placeholder.com/200x200",
  imageAlt2 = "",
  imageSrc3 = "https://via.placeholder.com/200x200",
  imageAlt3 = "",
  variant = "default",
}: FeatureWithMultipleProductImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FeatureWithMultipleProductImagesSection
          body={body}
          heading={heading}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageAlt3={imageAlt3}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          imageSrc3={imageSrc3}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FeatureWithMultipleProductImages.PreviewProps = {
  body: "Browse our latest collection of premium products designed for modern living.",
  heading: "Product Collection",
  imageAlt1: "Product 1",
  imageAlt2: "Product 2",
  imageAlt3: "Product 3",
  imageSrc1: "https://via.placeholder.com/200x200",
  imageSrc2: "https://via.placeholder.com/200x200",
  imageSrc3: "https://via.placeholder.com/200x200",
  theme: defaultTheme,
  variant: "default",
} satisfies FeatureWithMultipleProductImagesProps;
