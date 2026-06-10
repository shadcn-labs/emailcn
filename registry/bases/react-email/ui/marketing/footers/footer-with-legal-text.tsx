/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
  Hr,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type FooterWithLegalTextVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterWithLegalTextProps {
  theme?: TailwindConfig;
  legalText?: string;
  variant?: FooterWithLegalTextVariant;
}

export const FooterWithLegalTextSection = ({
  legalText = "© 2024 Acme Inc. All rights reserved. This email was sent to you because you signed up for our newsletter.",
  variant = "default",
}: Omit<FooterWithLegalTextProps, "theme">) => {
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
        <Hr className="border-border mb-6" />
        <Text className="m-0 text-center text-xs leading-relaxed text-foreground-subtle">
          {legalText}
        </Text>
      </Section>
    </Section>
  );
};

export const FooterWithLegalText = ({
  theme = defaultTheme,
  legalText = "© 2024 Acme Inc. All rights reserved. This email was sent to you because you signed up for our newsletter.",
  variant = "default",
}: FooterWithLegalTextProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Footer</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FooterWithLegalTextSection legalText={legalText} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

FooterWithLegalText.PreviewProps = {
  legalText:
    "© 2024 Acme Inc. All rights reserved. This email was sent to you because you signed up for our newsletter.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterWithLegalTextProps;
