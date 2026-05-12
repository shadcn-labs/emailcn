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

export type BentoGridWith3ColumnsAndEvenSplitTextStatsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridWith3ColumnsAndEvenSplitTextStatsProps {
  theme?: TailwindConfig;
  heading?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  stat1?: string;
  stat1Label?: string;
  stat2?: string;
  stat2Label?: string;
  stat3?: string;
  stat3Label?: string;
  variant?: BentoGridWith3ColumnsAndEvenSplitTextStatsVariant;
}

export const BentoGridWith3ColumnsAndEvenSplitTextStatsSection = ({
  heading = "Features",
  imageSrc1 = "https://via.placeholder.com/400x300",
  imageAlt1 = "",
  imageSrc2 = "https://via.placeholder.com/400x300",
  imageAlt2 = "",
  imageSrc3 = "https://via.placeholder.com/400x300",
  imageAlt3 = "",
  stat1 = "99.9%",
  stat1Label = "Uptime",
  stat2 = "10M+",
  stat2Label = "Users",
  stat3 = "150+",
  stat3Label = "Countries",
  variant = "default",
}: Omit<BentoGridWith3ColumnsAndEvenSplitTextStatsProps, "theme">) => {
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
            <Text className="m-0 text-center text-2xl font-bold text-primary">
              {stat1}
            </Text>
            <Text className="m-0 text-center text-sm text-foreground-muted">
              {stat1Label}
            </Text>
          </Column>
          <Column className="w-1/3 px-3 align-top">
            <Img
              src={imageSrc2}
              alt={imageAlt2}
              width="400"
              height="300"
              className="w-full h-auto rounded-lg object-cover mb-4"
            />
            <Text className="m-0 text-center text-2xl font-bold text-primary">
              {stat2}
            </Text>
            <Text className="m-0 text-center text-sm text-foreground-muted">
              {stat2Label}
            </Text>
          </Column>
          <Column className="w-1/3 pl-3 align-top">
            <Img
              src={imageSrc3}
              alt={imageAlt3}
              width="400"
              height="300"
              className="w-full h-auto rounded-lg object-cover mb-4"
            />
            <Text className="m-0 text-center text-2xl font-bold text-primary">
              {stat3}
            </Text>
            <Text className="m-0 text-center text-sm text-foreground-muted">
              {stat3Label}
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const BentoGridWith3ColumnsAndEvenSplitTextStats = ({
  theme = defaultTheme,
  heading = "Features",
  imageSrc1 = "https://via.placeholder.com/400x300",
  imageAlt1 = "",
  imageSrc2 = "https://via.placeholder.com/400x300",
  imageAlt2 = "",
  imageSrc3 = "https://via.placeholder.com/400x300",
  imageAlt3 = "",
  stat1 = "99.9%",
  stat1Label = "Uptime",
  stat2 = "10M+",
  stat2Label = "Users",
  stat3 = "150+",
  stat3Label = "Countries",
  variant = "default",
}: BentoGridWith3ColumnsAndEvenSplitTextStatsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BentoGridWith3ColumnsAndEvenSplitTextStatsSection
          heading={heading}
          imageAlt1={imageAlt1}
          imageAlt2={imageAlt2}
          imageAlt3={imageAlt3}
          imageSrc1={imageSrc1}
          imageSrc2={imageSrc2}
          imageSrc3={imageSrc3}
          stat1={stat1}
          stat1Label={stat1Label}
          stat2={stat2}
          stat2Label={stat2Label}
          stat3={stat3}
          stat3Label={stat3Label}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

BentoGridWith3ColumnsAndEvenSplitTextStats.PreviewProps = {
  heading: "Features",
  imageAlt1: "Feature 1",
  imageAlt2: "Feature 2",
  imageAlt3: "Feature 3",
  imageSrc1: "https://via.placeholder.com/400x300",
  imageSrc2: "https://via.placeholder.com/400x300",
  imageSrc3: "https://via.placeholder.com/400x300",
  stat1: "99.9%",
  stat1Label: "Uptime",
  stat2: "10M+",
  stat2Label: "Users",
  stat3: "150+",
  stat3Label: "Countries",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridWith3ColumnsAndEvenSplitTextStatsProps;
