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

export type SocialsWithStackedTileLabelsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SocialsWithStackedTileLabelsProps {
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
  variant?: SocialsWithStackedTileLabelsVariant;
}

export const SocialsWithStackedTileLabelsSection = ({
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-socials-with-stacked-tile-labels-tsx-1&size=24",
  socialAlt1 = "Twitter",
  socialLabel1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-socials-with-stacked-tile-labels-tsx-2&size=24",
  socialAlt2 = "Facebook",
  socialLabel2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-socials-with-stacked-tile-labels-tsx-3&size=24",
  socialAlt3 = "Instagram",
  socialLabel3 = "Instagram",
  variant = "default",
}: Omit<SocialsWithStackedTileLabelsProps, "theme">) => {
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
          <Column className="px-3 text-center align-top">
            <Section className="inline-block rounded-lg bg-background-muted px-6 py-4">
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
            </Section>
          </Column>
          <Column className="px-3 text-center align-top">
            <Section className="inline-block rounded-lg bg-background-muted px-6 py-4">
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
            </Section>
          </Column>
          <Column className="px-3 text-center align-top">
            <Section className="inline-block rounded-lg bg-background-muted px-6 py-4">
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
            </Section>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const SocialsWithStackedTileLabels = ({
  theme = defaultTheme,
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-socials-with-stacked-tile-labels-tsx-4&size=24",
  socialAlt1 = "Twitter",
  socialLabel1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-socials-with-stacked-tile-labels-tsx-5&size=24",
  socialAlt2 = "Facebook",
  socialLabel2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-socials-with-stacked-tile-labels-tsx-6&size=24",
  socialAlt3 = "Instagram",
  socialLabel3 = "Instagram",
  variant = "default",
}: SocialsWithStackedTileLabelsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Social</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <SocialsWithStackedTileLabelsSection
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

SocialsWithStackedTileLabels.PreviewProps = {
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "Instagram",
  socialLabel1: "Twitter",
  socialLabel2: "Facebook",
  socialLabel3: "Instagram",
  socialSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-socials-with-stacked-tile-labels-tsx-7&size=24",
  socialSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-socials-with-stacked-tile-labels-tsx-8&size=24",
  socialSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-social-socials-with-stacked-tile-labels-tsx-9&size=24",
  theme: defaultTheme,
  variant: "default",
} satisfies SocialsWithStackedTileLabelsProps;
