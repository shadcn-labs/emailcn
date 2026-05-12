/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface PrimaryButtonsProps {
  theme?: TailwindConfig;
  label?: string;
  href?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const PrimaryButtonsSection = ({
  label = "Click Here",
  href = "#",
  variant = "default",
}: Omit<PrimaryButtonsProps, "theme">) => {
  const alignClass =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className={`py-4 ${alignClass}`}>
      <Button
        href={href}
        className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-fg no-underline"
      >
        {label}
      </Button>
    </Section>
  );
};

export const PrimaryButtons = ({
  theme = defaultTheme,
  label = "Click Here",
  href = "#",
  variant = "default",
}: PrimaryButtonsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{label}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <PrimaryButtonsSection label={label} href={href} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

PrimaryButtons.PreviewProps = {
  href: "https://example.com",
  label: "Get Started",
  theme: defaultTheme,
  variant: "default",
} satisfies PrimaryButtonsProps;
