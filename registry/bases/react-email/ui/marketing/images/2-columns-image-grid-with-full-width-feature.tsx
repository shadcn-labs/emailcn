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

export type TwoColumnsImageGridWithFullWidthFeatureVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TwoColumnsImageGridWithFullWidthFeatureProps {
  theme?: TailwindConfig;
  featureImageSrc?: string;
  featureImageAlt?: string;
  featureCaption?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  variant?: TwoColumnsImageGridWithFullWidthFeatureVariant;
}

export const TwoColumnsImageGridWithFullWidthFeatureSection = ({
  featureImageSrc = "https://static.photos/business/600x250/2",
  featureImageAlt = "",
  featureCaption = "Featured",
  imageSrc1 = "https://static.photos/nature/300x300/3",
  imageAlt1 = "",
  imageSrc2 = "https://static.photos/nature/300x300/4",
  imageAlt2 = "",
  variant = "default",
}: Omit<TwoColumnsImageGridWithFullWidthFeatureProps, "theme">) => {
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
    <Section className={`bg-background py-8 ${getVariantClass()}`}>
      <Section className={`max-w-container mx-auto ${getUnskewClass()}`}>
        <Section className="mb-4">
          <Img
            src={featureImageSrc}
            alt={featureImageAlt}
            width="600"
            height="250"
            className="w-full h-auto rounded-lg object-cover"
          />
          {featureCaption ? (
            <Text className="m-0 mt-2 text-center text-lg font-medium text-foreground">
              {featureCaption}
            </Text>
          ) : null}
        </Section>
        <Row>
          <Column className="w-1/2 pr-3 align-top">
            <Img
              src={imageSrc1}
              alt={imageAlt1}
              width="300"
              height="300"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
          <Column className="w-1/2 pl-3 align-top">
            <Img
              src={imageSrc2}
              alt={imageAlt2}
              width="300"
              height="300"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const TwoColumnsImageGridWithFullWidthFeature = ({
  theme = defaultTheme,
  featureImageSrc = "https://static.photos/business/600x250/5",
  featureImageAlt = "",
  featureCaption = "Featured",
  imageSrc1 = "https://static.photos/nature/300x300/6",
  imageAlt1 = "",
  imageSrc2 = "https://static.photos/nature/300x300/7",
  imageAlt2 = "",
  variant = "default",
}: TwoColumnsImageGridWithFullWidthFeatureProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{featureCaption}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TwoColumnsImageGridWithFullWidthFeatureSection
          featureCaption={featureCaption}
          featureImageAlt={featureImageAlt}
          featureImageSrc={featureImageSrc}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnsImageGridWithFullWidthFeature.PreviewProps = {
  featureCaption: "Featured Collection",
  featureImageAlt: "Featured",
  featureImageSrc: "https://static.photos/business/600x250/8",
  imageAlt1: "Image 1",
  imageAlt2: "Image 2",
  imageSrc1: "https://static.photos/nature/300x300/9",
  imageSrc2: "https://static.photos/nature/300x300/10",
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnsImageGridWithFullWidthFeatureProps;
