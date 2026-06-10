/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type StackedStatsVariant = "default" | "slanted-left" | "slanted-right";

export interface StackedStatsProps {
  theme?: TailwindConfig;
  stat1?: string;
  stat1Label?: string;
  stat2?: string;
  stat2Label?: string;
  stat3?: string;
  stat3Label?: string;
  variant?: StackedStatsVariant;
}

export const StackedStatsSection = ({
  stat1 = "99.9%",
  stat1Label = "Uptime",
  stat2 = "10M+",
  stat2Label = "Users",
  stat3 = "150+",
  stat3Label = "Countries",
  variant = "default",
}: Omit<StackedStatsProps, "theme">) => {
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
      <Section
        className={`max-w-container mx-auto text-center ${getUnskewClass()}`}
      >
        <Text className="m-0 mb-6 text-3xl font-bold text-foreground">
          {stat1}
        </Text>
        <Text className="mt-0 mb-8 text-sm uppercase tracking-wider text-foreground-muted">
          {stat1Label}
        </Text>
        <Text className="m-0 mb-6 text-3xl font-bold text-foreground">
          {stat2}
        </Text>
        <Text className="mt-0 mb-8 text-sm uppercase tracking-wider text-foreground-muted">
          {stat2Label}
        </Text>
        <Text className="m-0 text-3xl font-bold text-foreground">{stat3}</Text>
        <Text className="mt-2 mb-0 text-sm uppercase tracking-wider text-foreground-muted">
          {stat3Label}
        </Text>
      </Section>
    </Section>
  );
};

export const StackedStats = ({
  theme = defaultTheme,
  stat1 = "99.9%",
  stat1Label = "Uptime",
  stat2 = "10M+",
  stat2Label = "Users",
  stat3 = "150+",
  stat3Label = "Countries",
  variant = "default",
}: StackedStatsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Stats</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <StackedStatsSection
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

StackedStats.PreviewProps = {
  stat1: "99.9%",
  stat1Label: "Uptime",
  stat2: "10M+",
  stat2Label: "Users",
  stat3: "150+",
  stat3Label: "Countries",
  theme: defaultTheme,
  variant: "default",
} satisfies StackedStatsProps;
