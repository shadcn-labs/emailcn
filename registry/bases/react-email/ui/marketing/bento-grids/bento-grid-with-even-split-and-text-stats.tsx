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

export type BentoGridWithEvenSplitAndTextStatsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridWithEvenSplitAndTextStatsProps {
  theme?: TailwindConfig;
  heading?: string;
  imageSrc?: string;
  imageAlt?: string;
  stat1?: string;
  stat1Label?: string;
  stat2?: string;
  stat2Label?: string;
  stat3?: string;
  stat3Label?: string;
  variant?: BentoGridWithEvenSplitAndTextStatsVariant;
}

export const BentoGridWithEvenSplitAndTextStatsSection = ({
  heading = "By the Numbers",
  imageSrc = "https://via.placeholder.com/500x400",
  imageAlt = "",
  stat1 = "99.9%",
  stat1Label = "Uptime",
  stat2 = "10M+",
  stat2Label = "Users",
  stat3 = "150+",
  stat3Label = "Countries",
  variant = "default",
}: Omit<BentoGridWithEvenSplitAndTextStatsProps, "theme">) => {
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
            <Text className="m-0 mb-2 text-center text-3xl font-bold text-primary">
              {stat1}
            </Text>
            <Text className="m-0 mb-6 text-center text-base text-foreground-muted">
              {stat1Label}
            </Text>
            <Text className="m-0 mb-2 text-center text-3xl font-bold text-primary">
              {stat2}
            </Text>
            <Text className="m-0 mb-6 text-center text-base text-foreground-muted">
              {stat2Label}
            </Text>
            <Text className="m-0 mb-2 text-center text-3xl font-bold text-primary">
              {stat3}
            </Text>
            <Text className="m-0 text-center text-base text-foreground-muted">
              {stat3Label}
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const BentoGridWithEvenSplitAndTextStats = ({
  theme = defaultTheme,
  heading = "By the Numbers",
  imageSrc = "https://via.placeholder.com/500x400",
  imageAlt = "",
  stat1 = "99.9%",
  stat1Label = "Uptime",
  stat2 = "10M+",
  stat2Label = "Users",
  stat3 = "150+",
  stat3Label = "Countries",
  variant = "default",
}: BentoGridWithEvenSplitAndTextStatsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BentoGridWithEvenSplitAndTextStatsSection
          heading={heading}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
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

BentoGridWithEvenSplitAndTextStats.PreviewProps = {
  heading: "By the Numbers",
  imageAlt: "Company",
  imageSrc: "https://via.placeholder.com/500x400",
  stat1: "99.9%",
  stat1Label: "Uptime",
  stat2: "10M+",
  stat2Label: "Users",
  stat3: "150+",
  stat3Label: "Countries",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridWithEvenSplitAndTextStatsProps;
