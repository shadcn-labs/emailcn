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

export type FeatureWithProductImageVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FeatureWithProductImageProps {
  theme?: TailwindConfig;
  heading?: string;
  body?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: FeatureWithProductImageVariant;
}

export const FeatureWithProductImageSection = ({
  heading = "Product Feature",
  body = "Description of the product feature.",
  imageSrc = "https://via.placeholder.com/400x400",
  imageAlt = "",
  variant = "default",
}: Omit<FeatureWithProductImageProps, "theme">) => {
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
            <Img
              src={imageSrc}
              alt={imageAlt}
              width="400"
              height="400"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const FeatureWithProductImage = ({
  theme = defaultTheme,
  heading = "Product Feature",
  body = "Description of the product feature.",
  imageSrc = "https://via.placeholder.com/400x400",
  imageAlt = "",
  variant = "default",
}: FeatureWithProductImageProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FeatureWithProductImageSection
          body={body}
          heading={heading}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FeatureWithProductImage.PreviewProps = {
  body: "Our flagship product combines cutting-edge technology with elegant design to deliver an unmatched experience.",
  heading: "Product Feature",
  imageAlt: "Product",
  imageSrc: "https://via.placeholder.com/400x400",
  theme: defaultTheme,
  variant: "default",
} satisfies FeatureWithProductImageProps;
