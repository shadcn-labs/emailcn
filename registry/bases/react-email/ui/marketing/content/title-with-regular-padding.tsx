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

export type TitleWithRegularPaddingVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TitleWithRegularPaddingProps {
  theme?: TailwindConfig;
  title?: string;
  variant?: TitleWithRegularPaddingVariant;
}

export const TitleWithRegularPaddingSection = ({
  title = "Section Title",
  variant = "default",
}: Omit<TitleWithRegularPaddingProps, "theme">) => {
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
        <Text className="m-0 text-2xl font-bold text-heading leading-snug text-foreground">
          {title}
        </Text>
      </Container>
    </Section>
  );
};

export const TitleWithRegularPadding = ({
  theme = defaultTheme,
  title = "Section Title",
  variant = "default",
}: TitleWithRegularPaddingProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{title}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TitleWithRegularPaddingSection title={title} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

TitleWithRegularPadding.PreviewProps = {
  theme: defaultTheme,
  title: "Section Title",
  variant: "default",
} satisfies TitleWithRegularPaddingProps;
