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

export type FeatureWithDoubleTallBackgroundImagesVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FeatureWithDoubleTallBackgroundImagesProps {
  theme?: TailwindConfig;
  heading?: string;
  body?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  variant?: FeatureWithDoubleTallBackgroundImagesVariant;
}

export const FeatureWithDoubleTallBackgroundImagesSection = ({
  heading = "Our Studio",
  body = "Where creativity happens.",
  imageSrc1 = "https://static.photos/city/300x500/2",
  imageAlt1 = "",
  imageSrc2 = "https://static.photos/city/300x500/3",
  imageAlt2 = "",
  variant = "default",
}: Omit<FeatureWithDoubleTallBackgroundImagesProps, "theme">) => {
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
            <Row>
              <Column className="w-1/2 pr-2 align-top">
                <Img
                  src={imageSrc1}
                  alt={imageAlt1}
                  width="300"
                  height="500"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </Column>
              <Column className="w-1/2 pl-2 align-top">
                <Img
                  src={imageSrc2}
                  alt={imageAlt2}
                  width="300"
                  height="500"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </Column>
            </Row>
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

export const FeatureWithDoubleTallBackgroundImages = ({
  theme = defaultTheme,
  heading = "Our Studio",
  body = "Where creativity happens.",
  imageSrc1 = "https://static.photos/city/300x500/4",
  imageAlt1 = "",
  imageSrc2 = "https://static.photos/city/300x500/5",
  imageAlt2 = "",
  variant = "default",
}: FeatureWithDoubleTallBackgroundImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FeatureWithDoubleTallBackgroundImagesSection
          body={body}
          heading={heading}
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

FeatureWithDoubleTallBackgroundImages.PreviewProps = {
  body: "Our studio is designed to inspire creativity and collaboration among our team members.",
  heading: "Our Studio",
  imageAlt1: "Studio 1",
  imageAlt2: "Studio 2",
  imageSrc1: "https://static.photos/city/300x500/6",
  imageSrc2: "https://static.photos/city/300x500/7",
  theme: defaultTheme,
  variant: "default",
} satisfies FeatureWithDoubleTallBackgroundImagesProps;
