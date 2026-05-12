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

export type FeatureWithFullTitleAndTallBackgroundImagesVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FeatureWithFullTitleAndTallBackgroundImagesProps {
  theme?: TailwindConfig;
  title?: string;
  body?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  variant?: FeatureWithFullTitleAndTallBackgroundImagesVariant;
}

export const FeatureWithFullTitleAndTallBackgroundImagesSection = ({
  title = "Our Work",
  body = "Showcasing our best projects.",
  imageSrc1 = "https://via.placeholder.com/300x500",
  imageAlt1 = "",
  imageSrc2 = "https://via.placeholder.com/300x500",
  imageAlt2 = "",
  variant = "default",
}: Omit<FeatureWithFullTitleAndTallBackgroundImagesProps, "theme">) => {
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
        <Text className="m-0 mb-8 text-center text-3xl font-bold text-heading leading-snug text-foreground">
          {title}
        </Text>
        <Text className="mt-0 mb-12 text-center text-lg text-foreground-muted">
          {body}
        </Text>
        <Row>
          <Column className="w-1/2 pr-4 align-top">
            <Img
              src={imageSrc1}
              alt={imageAlt1}
              width="300"
              height="500"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
          <Column className="w-1/2 pl-4 align-top">
            <Img
              src={imageSrc2}
              alt={imageAlt2}
              width="300"
              height="500"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const FeatureWithFullTitleAndTallBackgroundImages = ({
  theme = defaultTheme,
  title = "Our Work",
  body = "Showcasing our best projects.",
  imageSrc1 = "https://via.placeholder.com/300x500",
  imageAlt1 = "",
  imageSrc2 = "https://via.placeholder.com/300x500",
  imageAlt2 = "",
  variant = "default",
}: FeatureWithFullTitleAndTallBackgroundImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{title}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FeatureWithFullTitleAndTallBackgroundImagesSection
          body={body}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          title={title}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FeatureWithFullTitleAndTallBackgroundImages.PreviewProps = {
  body: "Showcasing our best projects from the past year.",
  imageAlt1: "Project 1",
  imageAlt2: "Project 2",
  imageSrc1: "https://via.placeholder.com/300x500",
  imageSrc2: "https://via.placeholder.com/300x500",
  theme: defaultTheme,
  title: "Our Work",
  variant: "default",
} satisfies FeatureWithFullTitleAndTallBackgroundImagesProps;
