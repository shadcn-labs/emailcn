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
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface DividerWithIconButtonProps {
  theme?: TailwindConfig;
  icon?: string;
  label?: string;
  href?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const DividerWithIconButtonSection = ({
  icon = "\u279C",
  label = "Learn More",
  href = "#",
  variant = "default",
}: Omit<DividerWithIconButtonProps, "theme">) => {
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
        <div className={`mx-4 flex items-center gap-2 ${textAlign}`}>
          <Text className="m-0 text-lg">{icon}</Text>
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

export const DividerWithIconButton = ({
  theme = defaultTheme,
  icon = "\u279C",
  label = "Learn More",
  href = "#",
  variant = "default",
}: DividerWithIconButtonProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{label}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <DividerWithIconButtonSection
          icon={icon}
          label={label}
          href={href}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

DividerWithIconButton.PreviewProps = {
  href: "https://example.com/discover",
  icon: "\u279C",
  label: "Discover",
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithIconButtonProps;
