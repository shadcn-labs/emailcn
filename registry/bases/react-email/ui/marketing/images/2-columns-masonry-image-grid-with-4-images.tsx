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

export type TwoColumnsMasonryImageGridWith4ImagesVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TwoColumnsMasonryImageGridWith4ImagesProps {
  theme?: TailwindConfig;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  imageSrc4?: string;
  imageAlt4?: string;
  variant?: TwoColumnsMasonryImageGridWith4ImagesVariant;
}

export const TwoColumnsMasonryImageGridWith4ImagesSection = ({
  imageSrc1 = "https://via.placeholder.com/300x250",
  imageAlt1 = "",
  imageSrc2 = "https://via.placeholder.com/300x400",
  imageAlt2 = "",
  imageSrc3 = "https://via.placeholder.com/300x200",
  imageAlt3 = "",
  imageSrc4 = "https://via.placeholder.com/300x300",
  imageAlt4 = "",
  variant = "default",
}: Omit<TwoColumnsMasonryImageGridWith4ImagesProps, "theme">) => {
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
              height="250"
              className="mb-3 w-full h-auto rounded-lg object-cover"
            />
            <Img
              src={imageSrc3}
              alt={imageAlt3}
              width="300"
              height="200"
              className="mb-3 w-full h-auto rounded-lg object-cover"
            />
            <Img
              src={imageSrc4}
              alt={imageAlt4}
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
              height="400"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const TwoColumnsMasonryImageGridWith4Images = ({
  theme = defaultTheme,
  imageSrc1 = "https://via.placeholder.com/300x250",
  imageAlt1 = "",
  imageSrc2 = "https://via.placeholder.com/300x400",
  imageAlt2 = "",
  imageSrc3 = "https://via.placeholder.com/300x200",
  imageAlt3 = "",
  imageSrc4 = "https://via.placeholder.com/300x300",
  imageAlt4 = "",
  variant = "default",
}: TwoColumnsMasonryImageGridWith4ImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Masonry Grid</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TwoColumnsMasonryImageGridWith4ImagesSection
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageAlt3={imageAlt3}
          imageAlt4={imageAlt4}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          imageSrc3={imageSrc3}
          imageSrc4={imageSrc4}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnsMasonryImageGridWith4Images.PreviewProps = {
  imageAlt1: "Image 1",
  imageAlt2: "Image 2",
  imageAlt3: "Image 3",
  imageAlt4: "Image 4",
  imageSrc1: "https://via.placeholder.com/300x250",
  imageSrc2: "https://via.placeholder.com/300x400",
  imageSrc3: "https://via.placeholder.com/300x200",
  imageSrc4: "https://via.placeholder.com/300x300",
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnsMasonryImageGridWith4ImagesProps;
