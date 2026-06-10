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

export type ParagraphWithLargePaddingVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface ParagraphWithLargePaddingProps {
  theme?: TailwindConfig;
  text?: string;
  variant?: ParagraphWithLargePaddingVariant;
}

export const ParagraphWithLargePaddingSection = ({
  text = "This is a paragraph with large padding. It is used to present information with more breathing room.",
  variant = "default",
}: Omit<ParagraphWithLargePaddingProps, "theme">) => {
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
    <Section className={`bg-background py-16 ${getVariantClass()}`}>
      <Container
        className={`mx-auto max-w-container text-center ${getUnskewClass()}`}
      >
        <Text className="m-0 text-lg leading-relaxed text-foreground-muted">
          {text}
        </Text>
      </Container>
    </Section>
  );
};

export const ParagraphWithLargePadding = ({
  theme = defaultTheme,
  text = "This is a paragraph with large padding. It is used to present information with more breathing room.",
  variant = "default",
}: ParagraphWithLargePaddingProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Paragraph</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ParagraphWithLargePaddingSection text={text} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

ParagraphWithLargePadding.PreviewProps = {
  text: "This is a paragraph with large padding. It is used to present information with more breathing room.",
  theme: defaultTheme,
  variant: "default",
} satisfies ParagraphWithLargePaddingProps;
