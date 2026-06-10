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

export interface SecondaryButtonsProps {
  theme?: TailwindConfig;
  label?: string;
  href?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const SecondaryButtonsSection = ({
  label = "Learn More",
  href = "#",
  variant = "default",
}: Omit<SecondaryButtonsProps, "theme">) => {
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
        className="inline-block rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground no-underline"
      >
        {label}
      </Button>
    </Section>
  );
};

export const SecondaryButtons = ({
  theme = defaultTheme,
  label = "Learn More",
  href = "#",
  variant = "default",
}: SecondaryButtonsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{label}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <SecondaryButtonsSection label={label} href={href} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

SecondaryButtons.PreviewProps = {
  href: "https://example.com/learn",
  label: "Learn More",
  theme: defaultTheme,
  variant: "default",
} satisfies SecondaryButtonsProps;
