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

export type BentoGridWithImagesAndCaptionsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridWithImagesAndCaptionsProps {
  theme?: TailwindConfig;
  heading?: string;
  subheading?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  caption1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  caption2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  caption3?: string;
  variant?: BentoGridWithImagesAndCaptionsVariant;
}

export const BentoGridWithImagesAndCaptionsSection = ({
  heading = "Our Work",
  subheading = "A selection of our recent projects.",
  imageSrc1 = "https://via.placeholder.com/400x300",
  imageAlt1 = "",
  caption1 = "Project Alpha",
  imageSrc2 = "https://via.placeholder.com/400x300",
  imageAlt2 = "",
  caption2 = "Project Beta",
  imageSrc3 = "https://via.placeholder.com/400x300",
  imageAlt3 = "",
  caption3 = "Project Gamma",
  variant = "default",
}: Omit<BentoGridWithImagesAndCaptionsProps, "theme">) => {
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
        {subheading ? (
          <Text className="mt-0 mb-12 text-center text-lg text-foreground-muted">
            {subheading}
          </Text>
        ) : null}
        <Row>
          <Column className="w-1/3 px-3 align-top">
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
          <Column className="w-1/3 px-3 align-top">
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

export const BentoGridWithImagesAndCaptions = ({
  theme = defaultTheme,
  heading = "Our Work",
  subheading = "A selection of our recent projects.",
  imageSrc1 = "https://via.placeholder.com/400x300",
  imageAlt1 = "",
  caption1 = "Project Alpha",
  imageSrc2 = "https://via.placeholder.com/400x300",
  imageAlt2 = "",
  caption2 = "Project Beta",
  imageSrc3 = "https://via.placeholder.com/400x300",
  imageAlt3 = "",
  caption3 = "Project Gamma",
  variant = "default",
}: BentoGridWithImagesAndCaptionsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BentoGridWithImagesAndCaptionsSection
          caption1={caption1}
          caption2={caption2}
          caption3={caption3}
          heading={heading}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageAlt3={imageAlt3}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          imageSrc3={imageSrc3}
          subheading={subheading}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

BentoGridWithImagesAndCaptions.PreviewProps = {
  caption1: "Project Alpha",
  caption2: "Project Beta",
  caption3: "Project Gamma",
  heading: "Our Work",
  imageAlt1: "Project Alpha",
  imageAlt2: "Project Beta",
  imageAlt3: "Project Gamma",
  imageSrc1: "https://via.placeholder.com/400x300",
  imageSrc2: "https://via.placeholder.com/400x300",
  imageSrc3: "https://via.placeholder.com/400x300",
  subheading: "A selection of our recent projects.",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridWithImagesAndCaptionsProps;
