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
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type CircleTilesSocialLogosVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CircleTilesSocialLogosProps {
  theme?: TailwindConfig;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  socialSrc4?: string;
  socialAlt4?: string;
  variant?: CircleTilesSocialLogosVariant;
}

export const CircleTilesSocialLogosSection = ({
  socialSrc1 = "https://via.placeholder.com/24x24",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://via.placeholder.com/24x24",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://via.placeholder.com/24x24",
  socialAlt3 = "Instagram",
  socialSrc4 = "https://via.placeholder.com/24x24",
  socialAlt4 = "LinkedIn",
  variant = "default",
}: Omit<CircleTilesSocialLogosProps, "theme">) => {
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
    <Section className={`bg-background py-8 ${getVariantClass()}`}>
      <Section
        className={`max-w-container mx-auto text-center ${getUnskewClass()}`}
      >
        <Row>
          <Column className="px-3 text-center align-middle">
            <Section className="inline-block rounded-full bg-background-muted p-3">
              <Img
                src={socialSrc1}
                alt={socialAlt1}
                width="24"
                height="24"
                className="h-auto object-contain"
              />
            </Section>
          </Column>
          <Column className="px-3 text-center align-middle">
            <Section className="inline-block rounded-full bg-background-muted p-3">
              <Img
                src={socialSrc2}
                alt={socialAlt2}
                width="24"
                height="24"
                className="h-auto object-contain"
              />
            </Section>
          </Column>
          <Column className="px-3 text-center align-middle">
            <Section className="inline-block rounded-full bg-background-muted p-3">
              <Img
                src={socialSrc3}
                alt={socialAlt3}
                width="24"
                height="24"
                className="h-auto object-contain"
              />
            </Section>
          </Column>
          <Column className="px-3 text-center align-middle">
            <Section className="inline-block rounded-full bg-background-muted p-3">
              <Img
                src={socialSrc4}
                alt={socialAlt4}
                width="24"
                height="24"
                className="h-auto object-contain"
              />
            </Section>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const CircleTilesSocialLogos = ({
  theme = defaultTheme,
  socialSrc1 = "https://via.placeholder.com/24x24",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://via.placeholder.com/24x24",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://via.placeholder.com/24x24",
  socialAlt3 = "Instagram",
  socialSrc4 = "https://via.placeholder.com/24x24",
  socialAlt4 = "LinkedIn",
  variant = "default",
}: CircleTilesSocialLogosProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Social</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CircleTilesSocialLogosSection
          socialAlt1={socialAlt1}
          socialAlt2={socialAlt2}
          socialAlt3={socialAlt3}
          socialAlt4={socialAlt4}
          socialSrc1={socialSrc1}
          socialSrc2={socialSrc2}
          socialSrc3={socialSrc3}
          socialSrc4={socialSrc4}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

CircleTilesSocialLogos.PreviewProps = {
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "Instagram",
  socialAlt4: "LinkedIn",
  socialSrc1: "https://via.placeholder.com/24x24",
  socialSrc2: "https://via.placeholder.com/24x24",
  socialSrc3: "https://via.placeholder.com/24x24",
  socialSrc4: "https://via.placeholder.com/24x24",
  theme: defaultTheme,
  variant: "default",
} satisfies CircleTilesSocialLogosProps;
