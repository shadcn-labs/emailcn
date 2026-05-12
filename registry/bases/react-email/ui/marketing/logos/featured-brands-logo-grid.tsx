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

export type FeaturedBrandsLogoGridVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FeaturedBrandsLogoGridProps {
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
  variant?: FeaturedBrandsLogoGridVariant;
}

export const FeaturedBrandsLogoGridSection = ({
  heading = "Featured Brands",
  logoSrc1 = "https://via.placeholder.com/160x60",
  logoAlt1 = "Brand 1",
  logoSrc2 = "https://via.placeholder.com/160x60",
  logoAlt2 = "Brand 2",
  logoSrc3 = "https://via.placeholder.com/160x60",
  logoAlt3 = "Brand 3",
  logoSrc4 = "https://via.placeholder.com/160x60",
  logoAlt4 = "Brand 4",
  variant = "default",
}: Omit<FeaturedBrandsLogoGridProps, "theme">) => {
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
          <Text className="m-0 mb-8 text-center text-lg font-medium text-foreground">
            {heading}
          </Text>
        ) : null}
        <Row>
          <Column className="w-1/4 rounded-lg bg-background-muted p-8 text-center align-middle">
            <Img
              src={logoSrc1}
              alt={logoAlt1}
              width="160"
              height="60"
              className="mx-auto h-auto object-contain"
            />
          </Column>
          <Column className="w-1/4 rounded-lg bg-background-muted p-8 text-center align-middle">
            <Img
              src={logoSrc2}
              alt={logoAlt2}
              width="160"
              height="60"
              className="mx-auto h-auto object-contain"
            />
          </Column>
          <Column className="w-1/4 rounded-lg bg-background-muted p-8 text-center align-middle">
            <Img
              src={logoSrc3}
              alt={logoAlt3}
              width="160"
              height="60"
              className="mx-auto h-auto object-contain"
            />
          </Column>
          <Column className="w-1/4 rounded-lg bg-background-muted p-8 text-center align-middle">
            <Img
              src={logoSrc4}
              alt={logoAlt4}
              width="160"
              height="60"
              className="mx-auto h-auto object-contain"
            />
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const FeaturedBrandsLogoGrid = ({
  theme = defaultTheme,
  heading = "Featured Brands",
  logoSrc1 = "https://via.placeholder.com/160x60",
  logoAlt1 = "Brand 1",
  logoSrc2 = "https://via.placeholder.com/160x60",
  logoAlt2 = "Brand 2",
  logoSrc3 = "https://via.placeholder.com/160x60",
  logoAlt3 = "Brand 3",
  logoSrc4 = "https://via.placeholder.com/160x60",
  logoAlt4 = "Brand 4",
  variant = "default",
}: FeaturedBrandsLogoGridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FeaturedBrandsLogoGridSection
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

FeaturedBrandsLogoGrid.PreviewProps = {
  heading: "Featured Brands",
  logoAlt1: "Brand 1",
  logoAlt2: "Brand 2",
  logoAlt3: "Brand 3",
  logoAlt4: "Brand 4",
  logoSrc1: "https://via.placeholder.com/160x60",
  logoSrc2: "https://via.placeholder.com/160x60",
  logoSrc3: "https://via.placeholder.com/160x60",
  logoSrc4: "https://via.placeholder.com/160x60",
  theme: defaultTheme,
  variant: "default",
} satisfies FeaturedBrandsLogoGridProps;
