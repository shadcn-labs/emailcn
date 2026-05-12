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

export type BentoGridWith3ColumnsAndPaddedImagesVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridWith3ColumnsAndPaddedImagesProps {
  theme?: TailwindConfig;
  heading?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  variant?: BentoGridWith3ColumnsAndPaddedImagesVariant;
}

export const BentoGridWith3ColumnsAndPaddedImagesSection = ({
  heading = "Gallery",
  imageSrc1 = "https://via.placeholder.com/350x450",
  imageAlt1 = "",
  imageSrc2 = "https://via.placeholder.com/350x450",
  imageAlt2 = "",
  imageSrc3 = "https://via.placeholder.com/350x450",
  imageAlt3 = "",
  variant = "default",
}: Omit<BentoGridWith3ColumnsAndPaddedImagesProps, "theme">) => {
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
        <Row>
          <Column className="w-1/3 pr-3 align-top">
            <Img
              src={imageSrc1}
              alt={imageAlt1}
              width="350"
              height="450"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
          <Column className="w-1/3 px-3 align-top">
            <Img
              src={imageSrc2}
              alt={imageAlt2}
              width="350"
              height="450"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
          <Column className="w-1/3 pl-3 align-top">
            <Img
              src={imageSrc3}
              alt={imageAlt3}
              width="350"
              height="450"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const BentoGridWith3ColumnsAndPaddedImages = ({
  theme = defaultTheme,
  heading = "Gallery",
  imageSrc1 = "https://via.placeholder.com/350x450",
  imageAlt1 = "",
  imageSrc2 = "https://via.placeholder.com/350x450",
  imageAlt2 = "",
  imageSrc3 = "https://via.placeholder.com/350x450",
  imageAlt3 = "",
  variant = "default",
}: BentoGridWith3ColumnsAndPaddedImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BentoGridWith3ColumnsAndPaddedImagesSection
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

BentoGridWith3ColumnsAndPaddedImages.PreviewProps = {
  heading: "Gallery",
  imageAlt1: "Image 1",
  imageAlt2: "Image 2",
  imageAlt3: "Image 3",
  imageSrc1: "https://via.placeholder.com/350x450",
  imageSrc2: "https://via.placeholder.com/350x450",
  imageSrc3: "https://via.placeholder.com/350x450",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridWith3ColumnsAndPaddedImagesProps;
