/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Container,
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

export type ChangelogBoxedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface ChangelogBoxedProps {
  theme?: TailwindConfig;
  heading?: string;
  version1?: string;
  date1?: string;
  change1?: string;
  version2?: string;
  date2?: string;
  change2?: string;
  version3?: string;
  date3?: string;
  change3?: string;
  variant?: ChangelogBoxedVariant;
}

export const ChangelogBoxedSection = ({
  heading = "Changelog",
  version1 = "v2.0.0",
  date1 = "March 15, 2024",
  change1 = "Major update with new features.",
  version2 = "v1.5.0",
  date2 = "Feb 1, 2024",
  change2 = "Performance improvements.",
  version3 = "v1.4.0",
  date3 = "Jan 10, 2024",
  change3 = "New analytics dashboard.",
  variant = "default",
}: Omit<ChangelogBoxedProps, "theme">) => {
  const getVariantClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[-10deg]";
      }
      case "slanted-right": {
        return "skew-x-[10deg]";
      }
      default: {
        return "";
      }
    }
  };

  const getUnskewClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[10deg]";
      }
      case "slanted-right": {
        return "skew-x-[-10deg]";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <Section className={`bg-background py-16 ${getVariantClass()}`}>
      <Container className={`mx-auto max-w-container ${getUnskewClass()}`}>
        {heading ? (
          <Text className="m-0 mb-8 text-center text-2xl font-bold text-foreground">
            {heading}
          </Text>
        ) : null}
        <Section className="mb-4 rounded-lg border border-border p-6">
          <Text className="m-0 mb-1 text-base font-bold text-foreground">
            {version1}
          </Text>
          <Text className="m-0 mb-2 text-xs text-foreground-subtle">
            {date1}
          </Text>
          <Text className="m-0 text-sm text-foreground-muted">{change1}</Text>
        </Section>
        <Section className="mb-4 rounded-lg border border-border p-6">
          <Text className="m-0 mb-1 text-base font-bold text-foreground">
            {version2}
          </Text>
          <Text className="m-0 mb-2 text-xs text-foreground-subtle">
            {date2}
          </Text>
          <Text className="m-0 text-sm text-foreground-muted">{change2}</Text>
        </Section>
        <Section className="rounded-lg border border-border p-6">
          <Text className="m-0 mb-1 text-base font-bold text-foreground">
            {version3}
          </Text>
          <Text className="m-0 mb-2 text-xs text-foreground-subtle">
            {date3}
          </Text>
          <Text className="m-0 text-sm text-foreground-muted">{change3}</Text>
        </Section>
      </Container>
    </Section>
  );
};

export const ChangelogBoxed = ({
  theme = defaultTheme,
  heading = "Changelog",
  version1 = "v2.0.0",
  date1 = "March 15, 2024",
  change1 = "Major update with new features.",
  version2 = "v1.5.0",
  date2 = "Feb 1, 2024",
  change2 = "Performance improvements.",
  version3 = "v1.4.0",
  date3 = "Jan 10, 2024",
  change3 = "New analytics dashboard.",
  variant = "default",
}: ChangelogBoxedProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ChangelogBoxedSection
          change1={change1}
          change2={change2}
          change3={change3}
          date1={date1}
          date2={date2}
          date3={date3}
          heading={heading}
          variant={variant}
          version1={version1}
          version2={version2}
          version3={version3}
        />
      </Body>
    </Tailwind>
  </Html>
);

ChangelogBoxed.PreviewProps = {
  change1:
    "Introducing the new template editor with drag-and-drop functionality.",
  change2: "Performance improvements and bug fixes across the platform.",
  change3: "New analytics dashboard with real-time metrics.",
  date1: "March 15, 2024",
  date2: "Feb 1, 2024",
  date3: "Jan 10, 2024",
  heading: "Changelog",
  theme: defaultTheme,
  variant: "default",
  version1: "v2.0.0",
  version2: "v1.5.0",
  version3: "v1.4.0",
} satisfies ChangelogBoxedProps;
