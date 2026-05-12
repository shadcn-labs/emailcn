/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
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

export interface FullWidthProgressBarProps {
  theme?: TailwindConfig;
  value?: number;
  label?: string;
  showLabel?: boolean;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const FullWidthProgressBarSection = ({
  value = 50,
  label,
  showLabel = true,
  variant = "default",
}: Omit<FullWidthProgressBarProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="py-4">
      {label ? (
        <Text className={`mb-2 text-sm text-foreground ${textAlign}`}>
          {label}
        </Text>
      ) : null}
      <Section className="rounded-full bg-foreground-muted/10">
        <Section
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
          className="rounded-full bg-primary py-2"
        >
          {showLabel ? (
            <Text className="m-0 text-center text-xs font-medium text-primary-fg">
              {value}%
            </Text>
          ) : null}
        </Section>
      </Section>
    </Section>
  );
};

export const FullWidthProgressBar = ({
  theme = defaultTheme,
  value = 50,
  label,
  showLabel = true,
  variant = "default",
}: FullWidthProgressBarProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{`Progress ${value}%`}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FullWidthProgressBarSection
          label={label}
          showLabel={showLabel}
          value={value}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FullWidthProgressBar.PreviewProps = {
  label: "Completion",
  showLabel: true,
  theme: defaultTheme,
  value: 65,
  variant: "default",
} satisfies FullWidthProgressBarProps;
