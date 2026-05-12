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

export type SocialsWithLabelsStackedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SocialsWithLabelsStackedProps {
  theme?: TailwindConfig;
  socialSrc1?: string;
  socialAlt1?: string;
  socialLabel1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialLabel2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  socialLabel3?: string;
  variant?: SocialsWithLabelsStackedVariant;
}

export const SocialsWithLabelsStackedSection = ({
  socialSrc1 = "https://via.placeholder.com/24x24",
  socialAlt1 = "Twitter",
  socialLabel1 = "Follow us on Twitter",
  socialSrc2 = "https://via.placeholder.com/24x24",
  socialAlt2 = "Facebook",
  socialLabel2 = "Like us on Facebook",
  socialSrc3 = "https://via.placeholder.com/24x24",
  socialAlt3 = "Instagram",
  socialLabel3 = "Follow us on Instagram",
  variant = "default",
}: Omit<SocialsWithLabelsStackedProps, "theme">) => {
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
      <Section className={`max-w-container mx-auto ${getUnskewClass()}`}>
        <Row className="mb-4">
          <Column className="w-1/3 text-center align-middle">
            <Img
              src={socialSrc1}
              alt={socialAlt1}
              width="24"
              height="24"
              className="mx-auto mb-2 h-auto object-contain"
            />
            <Text className="m-0 text-xs text-foreground-muted">
              {socialLabel1}
            </Text>
          </Column>
          <Column className="w-1/3 text-center align-middle">
            <Img
              src={socialSrc2}
              alt={socialAlt2}
              width="24"
              height="24"
              className="mx-auto mb-2 h-auto object-contain"
            />
            <Text className="m-0 text-xs text-foreground-muted">
              {socialLabel2}
            </Text>
          </Column>
          <Column className="w-1/3 text-center align-middle">
            <Img
              src={socialSrc3}
              alt={socialAlt3}
              width="24"
              height="24"
              className="mx-auto mb-2 h-auto object-contain"
            />
            <Text className="m-0 text-xs text-foreground-muted">
              {socialLabel3}
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const SocialsWithLabelsStacked = ({
  theme = defaultTheme,
  socialSrc1 = "https://via.placeholder.com/24x24",
  socialAlt1 = "Twitter",
  socialLabel1 = "Follow us on Twitter",
  socialSrc2 = "https://via.placeholder.com/24x24",
  socialAlt2 = "Facebook",
  socialLabel2 = "Like us on Facebook",
  socialSrc3 = "https://via.placeholder.com/24x24",
  socialAlt3 = "Instagram",
  socialLabel3 = "Follow us on Instagram",
  variant = "default",
}: SocialsWithLabelsStackedProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Social</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <SocialsWithLabelsStackedSection
          socialAlt1={socialAlt1}
          socialAlt2={socialAlt2}
          socialAlt3={socialAlt3}
          socialLabel1={socialLabel1}
          socialLabel2={socialLabel2}
          socialLabel3={socialLabel3}
          socialSrc1={socialSrc1}
          socialSrc2={socialSrc2}
          socialSrc3={socialSrc3}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

SocialsWithLabelsStacked.PreviewProps = {
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "Instagram",
  socialLabel1: "Follow us on Twitter",
  socialLabel2: "Like us on Facebook",
  socialLabel3: "Follow us on Instagram",
  socialSrc1: "https://via.placeholder.com/24x24",
  socialSrc2: "https://via.placeholder.com/24x24",
  socialSrc3: "https://via.placeholder.com/24x24",
  theme: defaultTheme,
  variant: "default",
} satisfies SocialsWithLabelsStackedProps;
