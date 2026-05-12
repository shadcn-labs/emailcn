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

export type SimpleFooterWithSocialIconsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SimpleFooterWithSocialIconsProps {
  theme?: TailwindConfig;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  variant?: SimpleFooterWithSocialIconsVariant;
}

export const SimpleFooterWithSocialIconsSection = ({
  socialSrc1 = "https://via.placeholder.com/20x20",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://via.placeholder.com/20x20",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://via.placeholder.com/20x20",
  socialAlt3 = "LinkedIn",
  variant = "default",
}: Omit<SimpleFooterWithSocialIconsProps, "theme">) => {
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
          <Column className="text-center">
            <Img
              src={socialSrc1}
              alt={socialAlt1}
              width="20"
              height="20"
              className="inline-block mx-3 h-auto object-contain"
            />
            <Img
              src={socialSrc2}
              alt={socialAlt2}
              width="20"
              height="20"
              className="inline-block mx-3 h-auto object-contain"
            />
            <Img
              src={socialSrc3}
              alt={socialAlt3}
              width="20"
              height="20"
              className="inline-block mx-3 h-auto object-contain"
            />
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const SimpleFooterWithSocialIcons = ({
  theme = defaultTheme,
  socialSrc1 = "https://via.placeholder.com/20x20",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://via.placeholder.com/20x20",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://via.placeholder.com/20x20",
  socialAlt3 = "LinkedIn",
  variant = "default",
}: SimpleFooterWithSocialIconsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Footer</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <SimpleFooterWithSocialIconsSection
          socialAlt1={socialAlt1}
          socialAlt2={socialAlt2}
          socialAlt3={socialAlt3}
          socialSrc1={socialSrc1}
          socialSrc2={socialSrc2}
          socialSrc3={socialSrc3}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

SimpleFooterWithSocialIcons.PreviewProps = {
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "LinkedIn",
  socialSrc1: "https://via.placeholder.com/20x20",
  socialSrc2: "https://via.placeholder.com/20x20",
  socialSrc3: "https://via.placeholder.com/20x20",
  theme: defaultTheme,
  variant: "default",
} satisfies SimpleFooterWithSocialIconsProps;
