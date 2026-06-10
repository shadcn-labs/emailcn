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

export type BentoGridWithEvenSplitAndImageStatsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridWithEvenSplitAndImageStatsProps {
  theme?: TailwindConfig;
  heading?: string;
  imageSrc?: string;
  imageAlt?: string;
  statImage1?: string;
  statImageAlt1?: string;
  statImage2?: string;
  statImageAlt2?: string;
  statImage3?: string;
  statImageAlt3?: string;
  variant?: BentoGridWithEvenSplitAndImageStatsVariant;
}

export const BentoGridWithEvenSplitAndImageStatsSection = ({
  heading = "Stats",
  imageSrc = "https://static.photos/city/500x400/2",
  imageAlt = "",
  statImage1 = "https://static.photos/city/200x100/3",
  statImageAlt1 = "Stat 1",
  statImage2 = "https://static.photos/city/200x100/4",
  statImageAlt2 = "Stat 2",
  statImage3 = "https://static.photos/city/200x100/5",
  statImageAlt3 = "Stat 3",
  variant = "default",
}: Omit<BentoGridWithEvenSplitAndImageStatsProps, "theme">) => {
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
          <Column className="w-1/2 pr-4 align-top">
            <Img
              src={imageSrc}
              alt={imageAlt}
              width="500"
              height="400"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
          <Column className="w-1/2 pl-4 align-top">
            <Img
              src={statImage1}
              alt={statImageAlt1}
              width="200"
              height="100"
              className="w-full h-auto rounded-lg object-cover mb-4"
            />
            <Img
              src={statImage2}
              alt={statImageAlt2}
              width="200"
              height="100"
              className="w-full h-auto rounded-lg object-cover mb-4"
            />
            <Img
              src={statImage3}
              alt={statImageAlt3}
              width="200"
              height="100"
              className="w-full h-auto rounded-lg object-cover"
            />
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const BentoGridWithEvenSplitAndImageStats = ({
  theme = defaultTheme,
  heading = "Stats",
  imageSrc = "https://static.photos/city/500x400/6",
  imageAlt = "",
  statImage1 = "https://static.photos/city/200x100/7",
  statImageAlt1 = "Stat 1",
  statImage2 = "https://static.photos/city/200x100/8",
  statImageAlt2 = "Stat 2",
  statImage3 = "https://static.photos/city/200x100/9",
  statImageAlt3 = "Stat 3",
  variant = "default",
}: BentoGridWithEvenSplitAndImageStatsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BentoGridWithEvenSplitAndImageStatsSection
          heading={heading}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
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

BentoGridWithEvenSplitAndImageStats.PreviewProps = {
  heading: "Stats",
  imageAlt: "Feature",
  imageSrc: "https://static.photos/city/500x400/10",
  statImage1: "https://static.photos/city/200x100/11",
  statImage2: "https://static.photos/city/200x100/12",
  statImage3: "https://static.photos/city/200x100/13",
  statImageAlt1: "Chart 1",
  statImageAlt2: "Chart 2",
  statImageAlt3: "Chart 3",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridWithEvenSplitAndImageStatsProps;
