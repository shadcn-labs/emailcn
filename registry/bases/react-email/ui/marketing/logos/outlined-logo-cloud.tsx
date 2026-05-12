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

export type OutlinedLogoCloudVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface OutlinedLogoCloudProps {
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
  variant?: OutlinedLogoCloudVariant;
}

export const OutlinedLogoCloudSection = ({
  heading = "Trusted by",
  logoSrc1 = "https://via.placeholder.com/120x40",
  logoAlt1 = "Logo 1",
  logoSrc2 = "https://via.placeholder.com/120x40",
  logoAlt2 = "Logo 2",
  logoSrc3 = "https://via.placeholder.com/120x40",
  logoAlt3 = "Logo 3",
  logoSrc4 = "https://via.placeholder.com/120x40",
  logoAlt4 = "Logo 4",
  variant = "default",
}: Omit<OutlinedLogoCloudProps, "theme">) => {
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
        <Row>
          <Column className="w-1/4 px-2 align-middle">
            <Section className="rounded-lg border border-border px-6 py-4">
              <Img
                src={logoSrc1}
                alt={logoAlt1}
                width="120"
                height="40"
                className="mx-auto h-auto object-contain"
              />
            </Section>
          </Column>
          <Column className="w-1/4 px-2 align-middle">
            <Section className="rounded-lg border border-border px-6 py-4">
              <Img
                src={logoSrc2}
                alt={logoAlt2}
                width="120"
                height="40"
                className="mx-auto h-auto object-contain"
              />
            </Section>
          </Column>
          <Column className="w-1/4 px-2 align-middle">
            <Section className="rounded-lg border border-border px-6 py-4">
              <Img
                src={logoSrc3}
                alt={logoAlt3}
                width="120"
                height="40"
                className="mx-auto h-auto object-contain"
              />
            </Section>
          </Column>
          <Column className="w-1/4 px-2 align-middle">
            <Section className="rounded-lg border border-border px-6 py-4">
              <Img
                src={logoSrc4}
                alt={logoAlt4}
                width="120"
                height="40"
                className="mx-auto h-auto object-contain"
              />
            </Section>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const OutlinedLogoCloud = ({
  theme = defaultTheme,
  heading = "Trusted by",
  logoSrc1 = "https://via.placeholder.com/120x40",
  logoAlt1 = "Logo 1",
  logoSrc2 = "https://via.placeholder.com/120x40",
  logoAlt2 = "Logo 2",
  logoSrc3 = "https://via.placeholder.com/120x40",
  logoAlt3 = "Logo 3",
  logoSrc4 = "https://via.placeholder.com/120x40",
  logoAlt4 = "Logo 4",
  variant = "default",
}: OutlinedLogoCloudProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <OutlinedLogoCloudSection
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

OutlinedLogoCloud.PreviewProps = {
  heading: "Trusted by",
  logoAlt1: "Company 1",
  logoAlt2: "Company 2",
  logoAlt3: "Company 3",
  logoAlt4: "Company 4",
  logoSrc1: "https://via.placeholder.com/120x40",
  logoSrc2: "https://via.placeholder.com/120x40",
  logoSrc3: "https://via.placeholder.com/120x40",
  logoSrc4: "https://via.placeholder.com/120x40",
  theme: defaultTheme,
  variant: "default",
} satisfies OutlinedLogoCloudProps;
