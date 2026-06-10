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

export interface ProgressBarGroupProps {
  theme?: TailwindConfig;
  items?: { label: string; value: number }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const ProgressBarGroupSection = ({
  items = [
    { label: "Task 1", value: 80 },
    { label: "Task 2", value: 60 },
    { label: "Task 3", value: 40 },
  ],
  variant = "default",
}: Omit<ProgressBarGroupProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-left";

  return (
    <Section className="py-4">
      {items.map((item, index) => (
        <Section key={`${item.label}-${index}`} className="mb-4">
          <Text className={`mb-1 text-sm text-foreground ${textAlign}`}>
            {item.label}
          </Text>
          <Section className="rounded-full bg-foreground-muted/10">
            <Section
              style={{ width: `${Math.min(100, Math.max(0, item.value))}%` }}
              className="rounded-full bg-primary py-2"
            >
              <Text className="m-0 text-center text-xs font-medium text-primary-fg">
                {item.value}%
              </Text>
            </Section>
          </Section>
        </Section>
      ))}
    </Section>
  );
};

export const ProgressBarGroup = ({
  theme = defaultTheme,
  items = [
    { label: "Task 1", value: 80 },
    { label: "Task 2", value: 60 },
    { label: "Task 3", value: 40 },
  ],
  variant = "default",
}: ProgressBarGroupProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Progress Group</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ProgressBarGroupSection items={items} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

ProgressBarGroup.PreviewProps = {
  items: [
    { label: "Research", value: 100 },
    { label: "Design", value: 75 },
    { label: "Development", value: 50 },
    { label: "Testing", value: 25 },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies ProgressBarGroupProps;
