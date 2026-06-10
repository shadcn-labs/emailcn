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

export type HeaderWithLogoAndFinanceStatsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithLogoAndFinanceStatsProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  stat1?: string;
  stat1Label?: string;
  stat2?: string;
  stat2Label?: string;
  variant?: HeaderWithLogoAndFinanceStatsVariant;
}

export const HeaderWithLogoAndFinanceStatsSection = ({
  logoSrc = "https://static.photos/business/120x30/2",
  logoAlt = "Logo",
  stat1 = "$12,450",
  stat1Label = "Balance",
  stat2 = "+5.2%",
  stat2Label = "Change",
  variant = "default",
}: Omit<HeaderWithLogoAndFinanceStatsProps, "theme">) => {
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
    <Section className={`bg-background py-6 ${getVariantClass()}`}>
      <Section className={`max-w-container mx-auto ${getUnskewClass()}`}>
        <Row>
          <Column className="w-1/2 align-middle">
            <Img
              src={logoSrc}
              alt={logoAlt}
              width="120"
              height="30"
              className="h-auto object-contain"
            />
          </Column>
          <Column className="w-1/2 align-middle text-right">
            <Row>
              <Column className="pr-6 text-right align-middle">
                <Text className="m-0 text-xs text-foreground-muted">
                  {stat1Label}
                </Text>
                <Text className="m-0 text-sm font-bold text-foreground">
                  {stat1}
                </Text>
              </Column>
              <Column className="text-right align-middle">
                <Text className="m-0 text-xs text-foreground-muted">
                  {stat2Label}
                </Text>
                <Text className="m-0 text-sm font-bold text-green-600">
                  {stat2}
                </Text>
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const HeaderWithLogoAndFinanceStats = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/3",
  logoAlt = "Logo",
  stat1 = "$12,450",
  stat1Label = "Balance",
  stat2 = "+5.2%",
  stat2Label = "Change",
  variant = "default",
}: HeaderWithLogoAndFinanceStatsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Header</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeaderWithLogoAndFinanceStatsSection
          logoAlt={logoAlt}
          logoSrc={logoSrc}
          stat1={stat1}
          stat1Label={stat1Label}
          stat2={stat2}
          stat2Label={stat2Label}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

HeaderWithLogoAndFinanceStats.PreviewProps = {
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/4",
  stat1: "$12,450",
  stat1Label: "Balance",
  stat2: "+5.2%",
  stat2Label: "Change",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderWithLogoAndFinanceStatsProps;
