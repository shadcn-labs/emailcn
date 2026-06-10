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

export type LogosGridVariant = "default" | "slanted-left" | "slanted-right";

export interface LogosGridProps {
  theme?: TailwindConfig;
  heading?: string;
  logoSrc1?: string;
  logoAlt1?: string;
  logoSrc2?: string;
  logoAlt2?: string;
  logoSrc3?: string;
  logoAlt3?: string;
  logoSrc4?: string;
  logoAlt4?: string;
  logoSrc5?: string;
  logoAlt5?: string;
  logoSrc6?: string;
  logoAlt6?: string;
  variant?: LogosGridVariant;
}

export const LogosGridSection = ({
  heading = "Trusted by",
  logoSrc1 = "https://static.photos/business/120x40/2",
  logoAlt1 = "Logo 1",
  logoSrc2 = "https://static.photos/business/120x40/3",
  logoAlt2 = "Logo 2",
  logoSrc3 = "https://static.photos/business/120x40/4",
  logoAlt3 = "Logo 3",
  logoSrc4 = "https://static.photos/business/120x40/5",
  logoAlt4 = "Logo 4",
  logoSrc5 = "https://static.photos/business/120x40/6",
  logoAlt5 = "Logo 5",
  logoSrc6 = "https://static.photos/business/120x40/7",
  logoAlt6 = "Logo 6",
  variant = "default",
}: Omit<LogosGridProps, "theme">) => {
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
    <Section className={`bg-background py-12 ${getVariantClass()}`}>
      <Section
        className={`max-w-container mx-auto text-center ${getUnskewClass()}`}
      >
        {heading ? (
          <Text className="m-0 mb-8 text-sm uppercase tracking-wider text-foreground-muted">
            {heading}
          </Text>
        ) : null}
        <Row className="mb-4">
          <Column className="w-1/3 px-3 align-middle">
            <Img
              src={logoSrc1}
              alt={logoAlt1}
              width="120"
              height="40"
              className="mx-auto h-auto object-contain"
            />
          </Column>
          <Column className="w-1/3 px-3 align-middle">
            <Img
              src={logoSrc2}
              alt={logoAlt2}
              width="120"
              height="40"
              className="mx-auto h-auto object-contain"
            />
          </Column>
          <Column className="w-1/3 px-3 align-middle">
            <Img
              src={logoSrc3}
              alt={logoAlt3}
              width="120"
              height="40"
              className="mx-auto h-auto object-contain"
            />
          </Column>
        </Row>
        <Row>
          <Column className="w-1/3 px-3 align-middle">
            <Img
              src={logoSrc4}
              alt={logoAlt4}
              width="120"
              height="40"
              className="mx-auto h-auto object-contain"
            />
          </Column>
          <Column className="w-1/3 px-3 align-middle">
            <Img
              src={logoSrc5}
              alt={logoAlt5}
              width="120"
              height="40"
              className="mx-auto h-auto object-contain"
            />
          </Column>
          <Column className="w-1/3 px-3 align-middle">
            <Img
              src={logoSrc6}
              alt={logoAlt6}
              width="120"
              height="40"
              className="mx-auto h-auto object-contain"
            />
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const LogosGrid = ({
  theme = defaultTheme,
  heading = "Trusted by",
  logoSrc1 = "https://static.photos/business/120x40/8",
  logoAlt1 = "Logo 1",
  logoSrc2 = "https://static.photos/business/120x40/9",
  logoAlt2 = "Logo 2",
  logoSrc3 = "https://static.photos/business/120x40/10",
  logoAlt3 = "Logo 3",
  logoSrc4 = "https://static.photos/business/120x40/11",
  logoAlt4 = "Logo 4",
  logoSrc5 = "https://static.photos/business/120x40/12",
  logoAlt5 = "Logo 5",
  logoSrc6 = "https://static.photos/business/120x40/13",
  logoAlt6 = "Logo 6",
  variant = "default",
}: LogosGridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <LogosGridSection
          heading={heading}
          logoAlt1={logoAlt1}
          logoAlt2={logoAlt2}
          logoAlt3={logoAlt3}
          logoAlt4={logoAlt4}
          logoAlt5={logoAlt5}
          logoAlt6={logoAlt6}
          logoSrc1={logoSrc1}
          logoSrc2={logoSrc2}
          logoSrc3={logoSrc3}
          logoSrc4={logoSrc4}
          logoSrc5={logoSrc5}
          logoSrc6={logoSrc6}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

LogosGrid.PreviewProps = {
  heading: "Trusted by",
  logoAlt1: "Company 1",
  logoAlt2: "Company 2",
  logoAlt3: "Company 3",
  logoAlt4: "Company 4",
  logoAlt5: "Company 5",
  logoAlt6: "Company 6",
  logoSrc1: "https://static.photos/business/120x40/14",
  logoSrc2: "https://static.photos/business/120x40/15",
  logoSrc3: "https://static.photos/business/120x40/16",
  logoSrc4: "https://static.photos/business/120x40/17",
  logoSrc5: "https://static.photos/business/120x40/18",
  logoSrc6: "https://static.photos/business/120x40/19",
  theme: defaultTheme,
  variant: "default",
} satisfies LogosGridProps;
