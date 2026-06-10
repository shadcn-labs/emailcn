/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface DividerWithButtonProps {
  theme?: TailwindConfig;
  label?: string;
  href?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const DividerWithButtonSection = ({
  label = "View All",
  href = "#",
  variant = "default",
}: Omit<DividerWithButtonProps, "theme">) => {
  const alignClass =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="py-6">
      <div className="flex items-center">
        <Hr className="flex-1 border-border" />
        <div className="mx-4">
          <Button
            href={href}
            className="inline-block rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-fg no-underline whitespace-nowrap"
          >
            {label}
          </Button>
        </div>
        <Hr className="flex-1 border-border" />
      </div>
    </Section>
  );
};

export const DividerWithButton = ({
  theme = defaultTheme,
  label = "View All",
  href = "#",
  variant = "default",
}: DividerWithButtonProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{label}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <DividerWithButtonSection label={label} href={href} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

DividerWithButton.PreviewProps = {
  href: "https://example.com/shop",
  label: "Shop Now",
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithButtonProps;
