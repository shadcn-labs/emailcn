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
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type TwoColumnsImageGridVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TwoColumnsImageGridProps {
  theme?: TailwindConfig;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  variant?: TwoColumnsImageGridVariant;
}

export const TwoColumnsImageGridSection = ({
  imageSrc1 = "https://static.photos/nature/300x400/2",
  imageAlt1 = "",
  imageSrc2 = "https://static.photos/nature/300x400/3",
  imageAlt2 = "",
  variant = "default",
}: Omit<TwoColumnsImageGridProps, "theme">) => {
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
        <Row>
          <Column className="w-1/2 pr-3 align-top">
            <Img
              src={imageSrc1}
              alt={imageAlt1}
              width="300"
              height="400"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
          <Column className="w-1/2 pl-3 align-top">
            <Img
              src={imageSrc2}
              alt={imageAlt2}
              width="300"
              height="400"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const TwoColumnsImageGrid = ({
  theme = defaultTheme,
  imageSrc1 = "https://static.photos/nature/300x400/4",
  imageAlt1 = "",
  imageSrc2 = "https://static.photos/nature/300x400/5",
  imageAlt2 = "",
  variant = "default",
}: TwoColumnsImageGridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Image Grid</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TwoColumnsImageGridSection
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

TwoColumnsImageGrid.PreviewProps = {
  imageAlt1: "Image 1",
  imageAlt2: "Image 2",
  imageSrc1: "https://static.photos/nature/300x400/6",
  imageSrc2: "https://static.photos/nature/300x400/7",
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnsImageGridProps;
