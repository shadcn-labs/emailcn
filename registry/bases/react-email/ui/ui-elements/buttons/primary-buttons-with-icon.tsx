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

export interface PrimaryButtonsWithIconProps {
  theme?: TailwindConfig;
  label?: string;
  href?: string;
  icon?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const PrimaryButtonsWithIconSection = ({
  label = "Shop Now",
  href = "#",
  icon = "\u279C",
  variant = "default",
}: Omit<PrimaryButtonsWithIconProps, "theme">) => {
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
        {icon} {label}
      </Button>
    </Section>
  );
};

export const PrimaryButtonsWithIcon = ({
  theme = defaultTheme,
  label = "Shop Now",
  href = "#",
  icon = "\u279C",
  variant = "default",
}: PrimaryButtonsWithIconProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{label}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <PrimaryButtonsWithIconSection
          label={label}
          href={href}
          icon={icon}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

PrimaryButtonsWithIcon.PreviewProps = {
  href: "https://example.com/shop",
  icon: "\u279C",
  label: "Shop Now",
  theme: defaultTheme,
  variant: "default",
} satisfies PrimaryButtonsWithIconProps;
