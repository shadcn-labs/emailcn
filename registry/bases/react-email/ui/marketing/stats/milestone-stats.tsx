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

export type MilestoneStatsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface MilestoneStatsProps {
  theme?: TailwindConfig;
  stat1?: string;
  stat1Label?: string;
  stat2?: string;
  stat2Label?: string;
  stat3?: string;
  stat3Label?: string;
  variant?: MilestoneStatsVariant;
}

export const MilestoneStatsSection = ({
  stat1 = "Founded",
  stat1Label = "2020",
  stat2 = "Users",
  stat2Label = "1M+",
  stat3 = "Funding",
  stat3Label = "$50M",
  variant = "default",
}: Omit<MilestoneStatsProps, "theme">) => {
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
          <Column className="w-1/3 text-center align-top">
            <Text className="m-0 text-sm uppercase tracking-wider text-foreground-muted">
              {stat1}
            </Text>
            <Text className="mt-2 mb-0 text-3xl font-bold text-foreground">
              {stat1Label}
            </Text>
          </Column>
          <Column className="w-1/3 text-center align-top">
            <Text className="m-0 text-sm uppercase tracking-wider text-foreground-muted">
              {stat2}
            </Text>
            <Text className="mt-2 mb-0 text-3xl font-bold text-foreground">
              {stat2Label}
            </Text>
          </Column>
          <Column className="w-1/3 text-center align-top">
            <Text className="m-0 text-sm uppercase tracking-wider text-foreground-muted">
              {stat3}
            </Text>
            <Text className="mt-2 mb-0 text-3xl font-bold text-foreground">
              {stat3Label}
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const MilestoneStats = ({
  theme = defaultTheme,
  stat1 = "Founded",
  stat1Label = "2020",
  stat2 = "Users",
  stat2Label = "1M+",
  stat3 = "Funding",
  stat3Label = "$50M",
  variant = "default",
}: MilestoneStatsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Milestones</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <MilestoneStatsSection
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

MilestoneStats.PreviewProps = {
  stat1: "Founded",
  stat1Label: "2020",
  stat2: "Users",
  stat2Label: "1M+",
  stat3: "Funding",
  stat3Label: "$50M",
  theme: defaultTheme,
  variant: "default",
} satisfies MilestoneStatsProps;
