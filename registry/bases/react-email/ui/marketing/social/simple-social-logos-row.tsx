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

export type SimpleSocialLogosRowVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SimpleSocialLogosRowProps {
  theme?: TailwindConfig;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  socialSrc4?: string;
  socialAlt4?: string;
  socialSrc5?: string;
  socialAlt5?: string;
  variant?: SimpleSocialLogosRowVariant;
}

export const SimpleSocialLogosRowSection = ({
  socialSrc1 = "https://via.placeholder.com/24x24",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://via.placeholder.com/24x24",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://via.placeholder.com/24x24",
  socialAlt3 = "Instagram",
  socialSrc4 = "https://via.placeholder.com/24x24",
  socialAlt4 = "LinkedIn",
  socialSrc5 = "https://via.placeholder.com/24x24",
  socialAlt5 = "YouTube",
  variant = "default",
}: Omit<SimpleSocialLogosRowProps, "theme">) => {
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
            <Img
              src={socialSrc1}
              alt={socialAlt1}
              width="24"
              height="24"
              className="inline-block h-auto object-contain"
            />
          </Column>
          <Column className="px-3 text-center align-middle">
            <Img
              src={socialSrc2}
              alt={socialAlt2}
              width="24"
              height="24"
              className="inline-block h-auto object-contain"
            />
          </Column>
          <Column className="px-3 text-center align-middle">
            <Img
              src={socialSrc3}
              alt={socialAlt3}
              width="24"
              height="24"
              className="inline-block h-auto object-contain"
            />
          </Column>
          <Column className="px-3 text-center align-middle">
            <Img
              src={socialSrc4}
              alt={socialAlt4}
              width="24"
              height="24"
              className="inline-block h-auto object-contain"
            />
          </Column>
          <Column className="px-3 text-center align-middle">
            <Img
              src={socialSrc5}
              alt={socialAlt5}
              width="24"
              height="24"
              className="inline-block h-auto object-contain"
            />
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const SimpleSocialLogosRow = ({
  theme = defaultTheme,
  socialSrc1 = "https://via.placeholder.com/24x24",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://via.placeholder.com/24x24",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://via.placeholder.com/24x24",
  socialAlt3 = "Instagram",
  socialSrc4 = "https://via.placeholder.com/24x24",
  socialAlt4 = "LinkedIn",
  socialSrc5 = "https://via.placeholder.com/24x24",
  socialAlt5 = "YouTube",
  variant = "default",
}: SimpleSocialLogosRowProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Social</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <SimpleSocialLogosRowSection
          socialAlt1={socialAlt1}
          socialAlt2={socialAlt2}
          socialAlt3={socialAlt3}
          socialAlt4={socialAlt4}
          socialAlt5={socialAlt5}
          socialSrc1={socialSrc1}
          socialSrc2={socialSrc2}
          socialSrc3={socialSrc3}
          socialSrc4={socialSrc4}
          socialSrc5={socialSrc5}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

SimpleSocialLogosRow.PreviewProps = {
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "Instagram",
  socialAlt4: "LinkedIn",
  socialAlt5: "YouTube",
  socialSrc1: "https://via.placeholder.com/24x24",
  socialSrc2: "https://via.placeholder.com/24x24",
  socialSrc3: "https://via.placeholder.com/24x24",
  socialSrc4: "https://via.placeholder.com/24x24",
  socialSrc5: "https://via.placeholder.com/24x24",
  theme: defaultTheme,
  variant: "default",
} satisfies SimpleSocialLogosRowProps;
