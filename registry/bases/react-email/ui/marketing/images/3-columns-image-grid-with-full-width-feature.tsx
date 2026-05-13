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

export type ThreeColumnsImageGridWithFullWidthFeatureVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface ThreeColumnsImageGridWithFullWidthFeatureProps {
  theme?: TailwindConfig;
  featureImageSrc?: string;
  featureImageAlt?: string;
  featureCaption?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  variant?: ThreeColumnsImageGridWithFullWidthFeatureVariant;
}

export const ThreeColumnsImageGridWithFullWidthFeatureSection = ({
  featureImageSrc = "https://static.photos/business/600x250/2",
  featureImageAlt = "",
  featureCaption = "Featured",
  imageSrc1 = "https://static.photos/nature/200x300/3",
  imageAlt1 = "",
  imageSrc2 = "https://static.photos/nature/200x300/4",
  imageAlt2 = "",
  imageSrc3 = "https://static.photos/nature/200x300/5",
  imageAlt3 = "",
  variant = "default",
}: Omit<ThreeColumnsImageGridWithFullWidthFeatureProps, "theme">) => {
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
          <Column className="w-1/3 pr-3 align-top">
            <Img
              src={imageSrc1}
              alt={imageAlt1}
              width="200"
              height="300"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
          <Column className="w-1/3 px-3 align-top">
            <Img
              src={imageSrc2}
              alt={imageAlt2}
              width="200"
              height="300"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
          <Column className="w-1/3 pl-3 align-top">
            <Img
              src={imageSrc3}
              alt={imageAlt3}
              width="200"
              height="300"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const ThreeColumnsImageGridWithFullWidthFeature = ({
  theme = defaultTheme,
  featureImageSrc = "https://static.photos/business/600x250/6",
  featureImageAlt = "",
  featureCaption = "Featured",
  imageSrc1 = "https://static.photos/nature/200x300/7",
  imageAlt1 = "",
  imageSrc2 = "https://static.photos/nature/200x300/8",
  imageAlt2 = "",
  imageSrc3 = "https://static.photos/nature/200x300/9",
  imageAlt3 = "",
  variant = "default",
}: ThreeColumnsImageGridWithFullWidthFeatureProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{featureCaption}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ThreeColumnsImageGridWithFullWidthFeatureSection
          featureCaption={featureCaption}
          featureImageAlt={featureImageAlt}
          featureImageSrc={featureImageSrc}
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

ThreeColumnsImageGridWithFullWidthFeature.PreviewProps = {
  featureCaption: "Featured Collection",
  featureImageAlt: "Featured",
  featureImageSrc: "https://static.photos/business/600x250/10",
  imageAlt1: "Image 1",
  imageAlt2: "Image 2",
  imageAlt3: "Image 3",
  imageSrc1: "https://static.photos/nature/200x300/11",
  imageSrc2: "https://static.photos/nature/200x300/12",
  imageSrc3: "https://static.photos/nature/200x300/13",
  theme: defaultTheme,
  variant: "default",
} satisfies ThreeColumnsImageGridWithFullWidthFeatureProps;
