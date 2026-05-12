/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface ProgressBarColumnsProps {
  theme?: TailwindConfig;
  values?: number[];
  labels?: string[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const ProgressBarColumnsSection = ({
  values = [80, 60, 40],
  labels = ["Design", "Dev", "QA"],
  variant = "default",
}: Omit<ProgressBarColumnsProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="py-4">
      <Row>
        {values.slice(0, 4).map((val, index) => (
          <Column key={`pbc-${index}`} className="w-1/3 align-top px-2">
            {labels[index] ? (
              <Text className={`mb-2 text-sm text-foreground ${textAlign}`}>
                {labels[index]}
              </Text>
            ) : null}
            <Section className="rounded-full bg-foreground-muted/10">
              <Section
                style={{ width: `${Math.min(100, Math.max(0, val))}%` }}
                className="rounded-full bg-primary py-2"
              >
                <Text className="m-0 text-center text-xs font-medium text-primary-fg">
                  {val}%
                </Text>
              </Section>
            </Section>
          </Column>
        ))}
      </Row>
    </Section>
  );
};

export const ProgressBarColumns = ({
  theme = defaultTheme,
  values = [80, 60, 40],
  labels = ["Design", "Dev", "QA"],
  variant = "default",
}: ProgressBarColumnsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Progress Columns</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ProgressBarColumnsSection
          values={values}
          labels={labels}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

ProgressBarColumns.PreviewProps = {
  labels: ["Design", "Development", "Testing"],
  theme: defaultTheme,
  values: [90, 65, 40],
  variant: "default",
} satisfies ProgressBarColumnsProps;
