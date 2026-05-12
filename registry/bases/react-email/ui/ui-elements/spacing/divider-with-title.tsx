/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface DividerWithTitleProps {
  theme?: TailwindConfig;
  title?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const DividerWithTitleSection = ({
  title = "Section Title",
  variant = "default",
}: Omit<DividerWithTitleProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="py-6">
      <div className="flex items-center">
        <Hr className="flex-1 border-border" />
        <Text
          className={`mx-4 m-0 text-sm font-medium text-foreground whitespace-nowrap ${textAlign}`}
        >
          {title}
        </Text>
        <Hr className="flex-1 border-border" />
      </div>
    </Section>
  );
};

export const DividerWithTitle = ({
  theme = defaultTheme,
  title = "Section Title",
  variant = "default",
}: DividerWithTitleProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{title}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <DividerWithTitleSection title={title} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

DividerWithTitle.PreviewProps = {
  theme: defaultTheme,
  title: "Featured Products",
  variant: "default",
} satisfies DividerWithTitleProps;
