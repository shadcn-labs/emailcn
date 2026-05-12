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

export type BentoGridWithEvenSplitAndTwoThirdsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridWithEvenSplitAndTwoThirdsProps {
  theme?: TailwindConfig;
  heading?: string;
  largeImageSrc?: string;
  largeImageAlt?: string;
  largeTitle?: string;
  largeDesc?: string;
  smallImageSrc?: string;
  smallImageAlt?: string;
  smallTitle?: string;
  smallDesc?: string;
  variant?: BentoGridWithEvenSplitAndTwoThirdsVariant;
}

export const BentoGridWithEvenSplitAndTwoThirdsSection = ({
  heading = "Features",
  largeImageSrc = "https://via.placeholder.com/600x400",
  largeImageAlt = "",
  largeTitle = "Main Feature",
  largeDesc = "Description of the main feature.",
  smallImageSrc = "https://via.placeholder.com/300x400",
  smallImageAlt = "",
  smallTitle = "Secondary",
  smallDesc = "Description of the secondary feature.",
  variant = "default",
}: Omit<BentoGridWithEvenSplitAndTwoThirdsProps, "theme">) => {
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
          <Column className="w-2/3 pr-4 align-top">
            <Img
              src={largeImageSrc}
              alt={largeImageAlt}
              width="600"
              height="400"
              className="w-full h-auto rounded-lg object-cover"
            />
            <Text className="mt-4 mb-1 text-xl font-bold text-foreground">
              {largeTitle}
            </Text>
            <Text className="m-0 text-base text-foreground-muted">
              {largeDesc}
            </Text>
          </Column>
          <Column className="w-1/3 pl-4 align-top">
            <Img
              src={smallImageSrc}
              alt={smallImageAlt}
              width="300"
              height="400"
              className="w-full h-auto rounded-lg object-cover"
            />
            <Text className="mt-4 mb-1 text-lg font-medium text-foreground">
              {smallTitle}
            </Text>
            <Text className="m-0 text-base text-foreground-muted">
              {smallDesc}
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const BentoGridWithEvenSplitAndTwoThirds = ({
  theme = defaultTheme,
  heading = "Features",
  largeImageSrc = "https://via.placeholder.com/600x400",
  largeImageAlt = "",
  largeTitle = "Main Feature",
  largeDesc = "Description of the main feature.",
  smallImageSrc = "https://via.placeholder.com/300x400",
  smallImageAlt = "",
  smallTitle = "Secondary",
  smallDesc = "Description of the secondary feature.",
  variant = "default",
}: BentoGridWithEvenSplitAndTwoThirdsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BentoGridWithEvenSplitAndTwoThirdsSection
          heading={heading}
          largeDesc={largeDesc}
          largeImageAlt={largeImageAlt}
          largeImageSrc={largeImageSrc}
          largeTitle={largeTitle}
          smallDesc={smallDesc}
          smallImageAlt={smallImageAlt}
          smallImageSrc={smallImageSrc}
          smallTitle={smallTitle}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

BentoGridWithEvenSplitAndTwoThirds.PreviewProps = {
  heading: "Features",
  largeDesc:
    "Our powerful dashboard gives you complete control over your workflow.",
  largeImageAlt: "Dashboard",
  largeImageSrc: "https://via.placeholder.com/600x400",
  largeTitle: "Powerful Dashboard",
  smallDesc: "Track key metrics at a glance.",
  smallImageAlt: "Analytics",
  smallImageSrc: "https://via.placeholder.com/300x400",
  smallTitle: "Analytics",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridWithEvenSplitAndTwoThirdsProps;
