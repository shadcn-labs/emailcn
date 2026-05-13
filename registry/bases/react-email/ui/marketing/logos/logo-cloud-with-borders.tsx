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

export type LogoCloudWithBordersVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface LogoCloudWithBordersProps {
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
  variant?: LogoCloudWithBordersVariant;
}

export const LogoCloudWithBordersSection = ({
  heading = "Trusted by",
  logoSrc1 = "https://static.photos/business/120x40/2",
  logoAlt1 = "Logo 1",
  logoSrc2 = "https://static.photos/business/120x40/3",
  logoAlt2 = "Logo 2",
  logoSrc3 = "https://static.photos/business/120x40/4",
  logoAlt3 = "Logo 3",
  logoSrc4 = "https://static.photos/business/120x40/5",
  logoAlt4 = "Logo 4",
  variant = "default",
}: Omit<LogoCloudWithBordersProps, "theme">) => {
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
      <Section className={`max-w-container mx-auto ${getUnskewClass()}`}>
        {heading ? (
          <Text className="m-0 mb-8 text-center text-sm uppercase tracking-wider text-foreground-muted">
            {heading}
          </Text>
        ) : null}
        <Row>
          <Column className="w-1/4 border border-border p-6 text-center align-middle">
            <Img
              src={logoSrc1}
              alt={logoAlt1}
              width="120"
              height="40"
              className="mx-auto h-auto object-contain"
            />
          </Column>
          <Column className="w-1/4 border border-border p-6 text-center align-middle">
            <Img
              src={logoSrc2}
              alt={logoAlt2}
              width="120"
              height="40"
              className="mx-auto h-auto object-contain"
            />
          </Column>
          <Column className="w-1/4 border border-border p-6 text-center align-middle">
            <Img
              src={logoSrc3}
              alt={logoAlt3}
              width="120"
              height="40"
              className="mx-auto h-auto object-contain"
            />
          </Column>
          <Column className="w-1/4 border border-border p-6 text-center align-middle">
            <Img
              src={logoSrc4}
              alt={logoAlt4}
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

export const LogoCloudWithBorders = ({
  theme = defaultTheme,
  heading = "Trusted by",
  logoSrc1 = "https://static.photos/business/120x40/6",
  logoAlt1 = "Logo 1",
  logoSrc2 = "https://static.photos/business/120x40/7",
  logoAlt2 = "Logo 2",
  logoSrc3 = "https://static.photos/business/120x40/8",
  logoAlt3 = "Logo 3",
  logoSrc4 = "https://static.photos/business/120x40/9",
  logoAlt4 = "Logo 4",
  variant = "default",
}: LogoCloudWithBordersProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <LogoCloudWithBordersSection
          heading={heading}
          logoAlt1={logoAlt1}
          logoAlt2={logoAlt2}
          logoAlt3={logoAlt3}
          logoAlt4={logoAlt4}
          logoSrc1={logoSrc1}
          logoSrc2={logoSrc2}
          logoSrc3={logoSrc3}
          logoSrc4={logoSrc4}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

LogoCloudWithBorders.PreviewProps = {
  heading: "Trusted by",
  logoAlt1: "Company 1",
  logoAlt2: "Company 2",
  logoAlt3: "Company 3",
  logoAlt4: "Company 4",
  logoSrc1: "https://static.photos/business/120x40/10",
  logoSrc2: "https://static.photos/business/120x40/11",
  logoSrc3: "https://static.photos/business/120x40/12",
  logoSrc4: "https://static.photos/business/120x40/13",
  theme: defaultTheme,
  variant: "default",
} satisfies LogoCloudWithBordersProps;
