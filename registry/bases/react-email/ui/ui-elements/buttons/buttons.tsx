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

export interface ButtonsProps {
  theme?: TailwindConfig;
  label?: string;
  href?: string;
  icon?: string;
  variant?: "primary" | "secondary" | "text";
  align?: "left" | "center" | "right";
}

const VARIANT_CLASSES = {
  primary:
    "inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-fg no-underline",
  secondary:
    "inline-block rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground no-underline",
  text: "text-sm font-medium text-primary underline",
} as const;

export const ButtonsSection = ({
  label = "Click Here",
  href = "#",
  icon,
  variant = "primary",
  align = "center",
}: Omit<ButtonsProps, "theme">) => {
  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
        ? "text-right"
        : "text-center";

  const content = icon ? `${icon} ${label}` : label;

  return (
    <Section className={`py-4 ${alignClass}`}>
      {variant === "text" ? (
        <a href={href} className={VARIANT_CLASSES.text}>
          {content}
        </a>
      ) : (
        <Button href={href} className={VARIANT_CLASSES[variant]}>
          {content}
        </Button>
      )}
    </Section>
  );
};

export const Buttons = ({
  theme = defaultTheme,
  label = "Click Here",
  href = "#",
  icon,
  variant = "primary",
  align = "center",
}: ButtonsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{label}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ButtonsSection
          label={label}
          href={href}
          icon={icon}
          variant={variant}
          align={align}
        />
      </Body>
    </Tailwind>
  </Html>
);

Buttons.PreviewProps = {
  align: "center",
  href: "https://example.com",
  label: "Get Started",
  theme: defaultTheme,
  variant: "primary",
} satisfies ButtonsProps;
