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

export type BentoGridWithTwoRowsAnd3ColumnSecondRowVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridWithTwoRowsAnd3ColumnSecondRowProps {
  theme?: TailwindConfig;
  heading?: string;
  featureImageSrc?: string;
  featureImageAlt?: string;
  featureHeading?: string;
  featureDesc?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  caption1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  caption2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  caption3?: string;
  variant?: BentoGridWithTwoRowsAnd3ColumnSecondRowVariant;
}

export const BentoGridWithTwoRowsAnd3ColumnSecondRowSection = ({
  heading = "Our Platform",
  featureImageSrc = "https://static.photos/nature/800x400/2",
  featureImageAlt = "",
  featureHeading = "Featured",
  featureDesc = "Highlighted content description.",
  imageSrc1 = "https://static.photos/nature/400x300/3",
  imageAlt1 = "",
  caption1 = "Item One",
  imageSrc2 = "https://static.photos/nature/400x300/4",
  imageAlt2 = "",
  caption2 = "Item Two",
  imageSrc3 = "https://static.photos/nature/400x300/5",
  imageAlt3 = "",
  caption3 = "Item Three",
  variant = "default",
}: Omit<BentoGridWithTwoRowsAnd3ColumnSecondRowProps, "theme">) => {
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
        {heading ? (
          <Text className="m-0 mb-8 text-center font-bold text-heading leading-snug text-foreground">
            {heading}
          </Text>
        ) : null}
        <Section className="mb-8">
          <Row>
            <Column className="w-2/3 pr-4 align-top">
              <Img
                src={featureImageSrc}
                alt={featureImageAlt}
                width="800"
                height="400"
                className="w-full h-auto rounded-lg object-cover"
              />
            </Column>
            <Column className="w-1/3 align-top">
              <Text className="m-0 text-2xl font-bold text-foreground">
                {featureHeading}
              </Text>
              <Text className="mt-2 mb-0 text-base text-foreground-muted">
                {featureDesc}
              </Text>
            </Column>
          </Row>
        </Section>
        <Row>
          <Column className="w-1/3 pr-3 align-top">
            <Img
              src={imageSrc1}
              alt={imageAlt1}
              width="400"
              height="300"
              className="w-full h-auto rounded-lg object-cover"
            />
            <Text className="mt-3 mb-0 text-base font-medium text-foreground">
              {caption1}
            </Text>
          </Column>
          <Column className="w-1/3 px-3 align-top">
            <Img
              src={imageSrc2}
              alt={imageAlt2}
              width="400"
              height="300"
              className="w-full h-auto rounded-lg object-cover"
            />
            <Text className="mt-3 mb-0 text-base font-medium text-foreground">
              {caption2}
            </Text>
          </Column>
          <Column className="w-1/3 pl-3 align-top">
            <Img
              src={imageSrc3}
              alt={imageAlt3}
              width="400"
              height="300"
              className="w-full h-auto rounded-lg object-cover"
            />
            <Text className="mt-3 mb-0 text-base font-medium text-foreground">
              {caption3}
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const BentoGridWithTwoRowsAnd3ColumnSecondRow = ({
  theme = defaultTheme,
  heading = "Our Platform",
  featureImageSrc = "https://static.photos/nature/800x400/6",
  featureImageAlt = "",
  featureHeading = "Featured",
  featureDesc = "Highlighted content description.",
  imageSrc1 = "https://static.photos/nature/400x300/7",
  imageAlt1 = "",
  caption1 = "Item One",
  imageSrc2 = "https://static.photos/nature/400x300/8",
  imageAlt2 = "",
  caption2 = "Item Two",
  imageSrc3 = "https://static.photos/nature/400x300/9",
  imageAlt3 = "",
  caption3 = "Item Three",
  variant = "default",
}: BentoGridWithTwoRowsAnd3ColumnSecondRowProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BentoGridWithTwoRowsAnd3ColumnSecondRowSection
          caption1={caption1}
          caption2={caption2}
          caption3={caption3}
          featureDesc={featureDesc}
          featureHeading={featureHeading}
          featureImageAlt={featureImageAlt}
          featureImageSrc={featureImageSrc}
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

BentoGridWithTwoRowsAnd3ColumnSecondRow.PreviewProps = {
  caption1: "Analytics",
  caption2: "Reports",
  caption3: "Dashboard",
  featureDesc:
    "Get a complete overview of your business performance with our powerful dashboard.",
  featureHeading: "Powerful Dashboard",
  featureImageAlt: "Dashboard Preview",
  featureImageSrc: "https://static.photos/nature/800x400/10",
  heading: "Our Platform",
  imageAlt1: "Analytics",
  imageAlt2: "Reports",
  imageAlt3: "Dashboard",
  imageSrc1: "https://static.photos/nature/400x300/11",
  imageSrc2: "https://static.photos/nature/400x300/12",
  imageSrc3: "https://static.photos/nature/400x300/13",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridWithTwoRowsAnd3ColumnSecondRowProps;
