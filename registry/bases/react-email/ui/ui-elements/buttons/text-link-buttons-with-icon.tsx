/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Head, Html, Preview, Section, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface TextLinkButtonsWithIconProps {
  theme?: TailwindConfig;
  label?: string;
  href?: string;
  icon?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const TextLinkButtonsWithIconSection = ({
  label = "Learn More",
  href = "#",
  icon = "\u2192",
  variant = "default",
}: Omit<TextLinkButtonsWithIconProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className={`py-4 ${textAlign}`}>
      <a href={href} className="text-sm font-medium text-primary underline">
        {icon} {label}
      </a>
    </Section>
  );
};

export const TextLinkButtonsWithIcon = ({
  theme = defaultTheme,
  label = "Learn More",
  href = "#",
  icon = "\u2192",
  variant = "default",
}: TextLinkButtonsWithIconProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{label}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TextLinkButtonsWithIconSection
          label={label}
          href={href}
          icon={icon}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

TextLinkButtonsWithIcon.PreviewProps = {
  href: "https://example.com",
  icon: "\u2192",
  label: "View Details",
  theme: defaultTheme,
  variant: "default",
} satisfies TextLinkButtonsWithIconProps;
