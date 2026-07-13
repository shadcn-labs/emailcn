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

export type GridStatsVariant = "default" | "slanted-left" | "slanted-right";

export type GridStatsTone = "boxed" | "outlined" | "accent" | "border";

export interface GridStatsProps {
  theme?: TailwindConfig;
  stat1?: string;
  stat1Label?: string;
  stat2?: string;
  stat2Label?: string;
  stat3?: string;
  stat3Label?: string;
  variant?: GridStatsVariant;
  tone?: GridStatsTone;
}

const columnClass = (tone: GridStatsTone, i: number) => {
  switch (tone) {
    case "outlined": {
      return `w-1/3 ${i === 1 ? "mx-4 " : ""}rounded-lg border border-border p-6 text-center align-top`;
    }
    case "accent": {
      return i === 0
        ? "w-1/3 rounded-lg bg-primary p-6 text-center align-top"
        : i === 1
          ? "w-1/3 px-4 py-6 text-center align-top"
          : "w-1/3 py-6 text-center align-top";
    }
    case "border": {
      return i === 0
        ? "w-1/3 border-r border-border py-6 pr-6 text-center align-top"
        : i === 1
          ? "w-1/3 border-r border-border py-6 px-6 text-center align-top"
          : "w-1/3 py-6 pl-6 text-center align-top";
    }
    default: {
      return `w-1/3 ${i === 1 ? "mx-4 " : ""}rounded-lg bg-background-muted p-6 text-center align-top`;
    }
  }
};

const accented = (tone: GridStatsTone, i: number) =>
  tone === "accent" && i === 0;

export const GridStatsSection = ({
  stat1 = "99.9%",
  stat1Label = "Uptime",
  stat2 = "10M+",
  stat2Label = "Users",
  stat3 = "150+",
  stat3Label = "Countries",
  variant = "default",
  tone = "boxed",
}: Omit<GridStatsProps, "theme">) => {
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

  const stats = [
    { label: stat1Label, value: stat1 },
    { label: stat2Label, value: stat2 },
    { label: stat3Label, value: stat3 },
  ];

  return (
    <Section className={`bg-background py-16 ${getVariantClass()}`}>
      <Section className={`max-w-container mx-auto ${getUnskewClass()}`}>
        <Row>
          {stats.map((stat, i) => (
            <Column key={stat.label} className={columnClass(tone, i)}>
              <Text
                className={`m-0 text-3xl font-bold ${accented(tone, i) ? "text-primary-fg" : "text-foreground"}`}
              >
                {stat.value}
              </Text>
              <Text
                className={`mt-2 mb-0 text-sm uppercase tracking-wide ${accented(tone, i) ? "text-primary-fg opacity-80" : "text-foreground-muted"}`}
              >
                {stat.label}
              </Text>
            </Column>
          ))}
        </Row>
      </Section>
    </Section>
  );
};

export const GridStats = ({
  theme = defaultTheme,
  stat1 = "99.9%",
  stat1Label = "Uptime",
  stat2 = "10M+",
  stat2Label = "Users",
  stat3 = "150+",
  stat3Label = "Countries",
  variant = "default",
  tone = "boxed",
}: GridStatsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Stats</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <GridStatsSection
          stat1={stat1}
          stat1Label={stat1Label}
          stat2={stat2}
          stat2Label={stat2Label}
          stat3={stat3}
          stat3Label={stat3Label}
          tone={tone}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

GridStats.PreviewProps = {
  stat1: "99.9%",
  stat1Label: "Uptime",
  stat2: "10M+",
  stat2Label: "Users",
  stat3: "150+",
  stat3Label: "Countries",
  theme: defaultTheme,
  tone: "boxed",
  variant: "default",
} satisfies GridStatsProps;
