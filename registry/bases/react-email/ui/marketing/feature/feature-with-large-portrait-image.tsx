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

export type FeatureWithLargePortraitImageVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FeatureWithLargePortraitImageProps {
  theme?: TailwindConfig;
  heading?: string;
  body?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: FeatureWithLargePortraitImageVariant;
}

export const FeatureWithLargePortraitImageSection = ({
  heading = "About Us",
  body = "Learn more about our story.",
  imageSrc = "https://via.placeholder.com/400x600",
  imageAlt = "",
  variant = "default",
}: Omit<FeatureWithLargePortraitImageProps, "theme">) => {
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
            <Img
              src={imageSrc}
              alt={imageAlt}
              width="400"
              height="600"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
          <Column className="w-1/2 align-middle">
            <Text className="m-0 text-2xl font-bold text-heading leading-snug text-foreground">
              {heading}
            </Text>
            <Text className="mt-4 mb-0 text-base leading-relaxed text-foreground-muted">
              {body}
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const FeatureWithLargePortraitImage = ({
  theme = defaultTheme,
  heading = "About Us",
  body = "Learn more about our story.",
  imageSrc = "https://via.placeholder.com/400x600",
  imageAlt = "",
  variant = "default",
}: FeatureWithLargePortraitImageProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FeatureWithLargePortraitImageSection
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

FeatureWithLargePortraitImage.PreviewProps = {
  body: "We started with a simple idea: make email beautiful. Today we help thousands of teams create stunning emails that their customers love.",
  heading: "About Us",
  imageAlt: "Portrait",
  imageSrc: "https://via.placeholder.com/400x600",
  theme: defaultTheme,
  variant: "default",
} satisfies FeatureWithLargePortraitImageProps;
