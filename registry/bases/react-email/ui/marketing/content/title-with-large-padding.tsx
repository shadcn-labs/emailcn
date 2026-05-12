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

export type TitleWithLargePaddingVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TitleWithLargePaddingProps {
  theme?: TailwindConfig;
  title?: string;
  variant?: TitleWithLargePaddingVariant;
}

export const TitleWithLargePaddingSection = ({
  title = "Section Title",
  variant = "default",
}: Omit<TitleWithLargePaddingProps, "theme">) => {
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
        <Text className="m-0 text-3xl font-bold text-heading leading-snug text-foreground">
          {title}
        </Text>
      </Container>
    </Section>
  );
};

export const TitleWithLargePadding = ({
  theme = defaultTheme,
  title = "Section Title",
  variant = "default",
}: TitleWithLargePaddingProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{title}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TitleWithLargePaddingSection title={title} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

TitleWithLargePadding.PreviewProps = {
  theme: defaultTheme,
  title: "Section Title",
  variant: "default",
} satisfies TitleWithLargePaddingProps;
