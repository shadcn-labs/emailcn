/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type SimpleGridStatsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SimpleGridStatsProps {
  theme?: TailwindConfig;
  stat1?: string;
  stat1Label?: string;
  stat2?: string;
  stat2Label?: string;
  stat3?: string;
  stat3Label?: string;
  stat4?: string;
  stat4Label?: string;
  variant?: SimpleGridStatsVariant;
}

export const SimpleGridStatsSection = ({
  stat1 = "99.9%",
  stat1Label = "Uptime",
  stat2 = "10M+",
  stat2Label = "Users",
  stat3 = "150+",
  stat3Label = "Countries",
  stat4 = "24/7",
  stat4Label = "Support",
  variant = "default",
}: Omit<SimpleGridStatsProps, "theme">) => {
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
          <Column className="w-1/4 p-4 text-center align-top">
            <Text className="m-0 text-3xl font-bold text-foreground">
              {stat1}
            </Text>
            <Text className="mt-2 mb-0 text-sm uppercase tracking-wide text-foreground-muted">
              {stat1Label}
            </Text>
          </Column>
          <Column className="w-1/4 p-4 text-center align-top">
            <Text className="m-0 text-3xl font-bold text-foreground">
              {stat2}
            </Text>
            <Text className="mt-2 mb-0 text-sm uppercase tracking-wide text-foreground-muted">
              {stat2Label}
            </Text>
          </Column>
          <Column className="w-1/4 p-4 text-center align-top">
            <Text className="m-0 text-3xl font-bold text-foreground">
              {stat3}
            </Text>
            <Text className="mt-2 mb-0 text-sm uppercase tracking-wide text-foreground-muted">
              {stat3Label}
            </Text>
          </Column>
          <Column className="w-1/4 p-4 text-center align-top">
            <Text className="m-0 text-3xl font-bold text-foreground">
              {stat4}
            </Text>
            <Text className="mt-2 mb-0 text-sm uppercase tracking-wide text-foreground-muted">
              {stat4Label}
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const SimpleGridStats = ({
  theme = defaultTheme,
  stat1 = "99.9%",
  stat1Label = "Uptime",
  stat2 = "10M+",
  stat2Label = "Users",
  stat3 = "150+",
  stat3Label = "Countries",
  stat4 = "24/7",
  stat4Label = "Support",
  variant = "default",
}: SimpleGridStatsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Stats</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <SimpleGridStatsSection
          stat1={stat1}
          stat1Label={stat1Label}
          stat2={stat2}
          stat2Label={stat2Label}
          stat3={stat3}
          stat3Label={stat3Label}
          stat4={stat4}
          stat4Label={stat4Label}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

SimpleGridStats.PreviewProps = {
  stat1: "99.9%",
  stat1Label: "Uptime",
  stat2: "10M+",
  stat2Label: "Users",
  stat3: "150+",
  stat3Label: "Countries",
  stat4: "24/7",
  stat4Label: "Support",
  theme: defaultTheme,
  variant: "default",
} satisfies SimpleGridStatsProps;
