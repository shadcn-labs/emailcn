/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Head, Html, Preview, Section, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface TextLinkButtonsProps {
  theme?: TailwindConfig;
  label?: string;
  href?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const TextLinkButtonsSection = ({
  label = "Click Here",
  href = "#",
  variant = "default",
}: Omit<TextLinkButtonsProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className={`py-4 ${textAlign}`}>
      <a href={href} className="text-sm font-medium text-primary underline">
        {label}
      </a>
    </Section>
  );
};

export const TextLinkButtons = ({
  theme = defaultTheme,
  label = "Click Here",
  href = "#",
  variant = "default",
}: TextLinkButtonsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{label}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TextLinkButtonsSection label={label} href={href} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

TextLinkButtons.PreviewProps = {
  href: "https://example.com",
  label: "Unsubscribe",
  theme: defaultTheme,
  variant: "default",
} satisfies TextLinkButtonsProps;
