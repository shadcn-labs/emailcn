/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type ParagraphWithRegularPaddingVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface ParagraphWithRegularPaddingProps {
  theme?: TailwindConfig;
  text?: string;
  variant?: ParagraphWithRegularPaddingVariant;
}

export const ParagraphWithRegularPaddingSection = ({
  text = "This is a regular paragraph with standard padding. It is used to present information in a clear and readable way.",
  variant = "default",
}: Omit<ParagraphWithRegularPaddingProps, "theme">) => {
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
      <Container
        className={`mx-auto max-w-container text-center ${getUnskewClass()}`}
      >
        <Text className="m-0 text-base leading-relaxed text-foreground-muted">
          {text}
        </Text>
      </Container>
    </Section>
  );
};

export const ParagraphWithRegularPadding = ({
  theme = defaultTheme,
  text = "This is a regular paragraph with standard padding. It is used to present information in a clear and readable way.",
  variant = "default",
}: ParagraphWithRegularPaddingProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Paragraph</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ParagraphWithRegularPaddingSection text={text} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

ParagraphWithRegularPadding.PreviewProps = {
  text: "This is a regular paragraph with standard padding. It is used to present information in a clear and readable way.",
  theme: defaultTheme,
  variant: "default",
} satisfies ParagraphWithRegularPaddingProps;
