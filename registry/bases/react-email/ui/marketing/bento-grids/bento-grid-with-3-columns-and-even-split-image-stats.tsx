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

export type BentoGridWith3ColumnsAndEvenSplitImageStatsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridWith3ColumnsAndEvenSplitImageStatsProps {
  theme?: TailwindConfig;
  heading?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  statImage1?: string;
  statImageAlt1?: string;
  statImage2?: string;
  statImageAlt2?: string;
  statImage3?: string;
  statImageAlt3?: string;
  variant?: BentoGridWith3ColumnsAndEvenSplitImageStatsVariant;
}

export const BentoGridWith3ColumnsAndEvenSplitImageStatsSection = ({
  heading = "Features",
  imageSrc1 = "https://static.photos/city/400x300/2",
  imageAlt1 = "",
  imageSrc2 = "https://static.photos/city/400x300/3",
  imageAlt2 = "",
  imageSrc3 = "https://static.photos/city/400x300/4",
  imageAlt3 = "",
  statImage1 = "https://static.photos/city/150x80/5",
  statImageAlt1 = "Stat 1",
  statImage2 = "https://static.photos/city/150x80/6",
  statImageAlt2 = "Stat 2",
  statImage3 = "https://static.photos/city/150x80/7",
  statImageAlt3 = "Stat 3",
  variant = "default",
}: Omit<BentoGridWith3ColumnsAndEvenSplitImageStatsProps, "theme">) => {
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
              width="400"
              height="300"
              className="w-full h-auto rounded-lg object-cover mb-4"
            />
            <Img
              src={statImage1}
              alt={statImageAlt1}
              width="150"
              height="80"
              className="w-full h-auto rounded object-cover"
            />
          </Column>
          <Column className="w-1/3 px-3 align-top">
            <Img
              src={imageSrc2}
              alt={imageAlt2}
              width="400"
              height="300"
              className="w-full h-auto rounded-lg object-cover mb-4"
            />
            <Img
              src={statImage2}
              alt={statImageAlt2}
              width="150"
              height="80"
              className="w-full h-auto rounded object-cover"
            />
          </Column>
          <Column className="w-1/3 pl-3 align-top">
            <Img
              src={imageSrc3}
              alt={imageAlt3}
              width="400"
              height="300"
              className="w-full h-auto rounded-lg object-cover mb-4"
            />
            <Img
              src={statImage3}
              alt={statImageAlt3}
              width="150"
              height="80"
              className="w-full h-auto rounded object-cover"
            />
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const BentoGridWith3ColumnsAndEvenSplitImageStats = ({
  theme = defaultTheme,
  heading = "Features",
  imageSrc1 = "https://static.photos/city/400x300/8",
  imageAlt1 = "",
  imageSrc2 = "https://static.photos/city/400x300/9",
  imageAlt2 = "",
  imageSrc3 = "https://static.photos/city/400x300/10",
  imageAlt3 = "",
  statImage1 = "https://static.photos/city/150x80/11",
  statImageAlt1 = "Stat 1",
  statImage2 = "https://static.photos/city/150x80/12",
  statImageAlt2 = "Stat 2",
  statImage3 = "https://static.photos/city/150x80/13",
  statImageAlt3 = "Stat 3",
  variant = "default",
}: BentoGridWith3ColumnsAndEvenSplitImageStatsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BentoGridWith3ColumnsAndEvenSplitImageStatsSection
          heading={heading}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageAlt3={imageAlt3}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          imageSrc3={imageSrc3}
          statImage1={statImage1}
          statImage2={statImage2}
          statImage3={statImage3}
          statImageAlt1={statImageAlt1}
          statImageAlt2={statImageAlt2}
          statImageAlt3={statImageAlt3}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

BentoGridWith3ColumnsAndEvenSplitImageStats.PreviewProps = {
  heading: "Features",
  imageAlt1: "Feature 1",
  imageAlt2: "Feature 2",
  imageAlt3: "Feature 3",
  imageSrc1: "https://static.photos/city/400x300/14",
  imageSrc2: "https://static.photos/city/400x300/15",
  imageSrc3: "https://static.photos/city/400x300/16",
  statImage1: "https://static.photos/city/150x80/17",
  statImage2: "https://static.photos/city/150x80/18",
  statImage3: "https://static.photos/city/150x80/19",
  statImageAlt1: "Chart 1",
  statImageAlt2: "Chart 2",
  statImageAlt3: "Chart 3",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridWith3ColumnsAndEvenSplitImageStatsProps;
