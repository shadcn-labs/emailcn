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

export type PillStatusVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info";

export interface BasicPillsStatusColorsProps {
  theme?: TailwindConfig;
  pills?: { label: string; variant: PillStatusVariant }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const pillVariantClasses: Record<PillStatusVariant, string> = {
  danger: "bg-red-100 text-red-800",
  default: "bg-foreground-muted/10 text-foreground",
  info: "bg-blue-100 text-blue-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
};

export const BasicPillsStatusColorsSection = ({
  pills = [
    { label: "Default", variant: "default" },
    { label: "Success", variant: "success" },
    { label: "Warning", variant: "warning" },
    { label: "Danger", variant: "danger" },
    { label: "Info", variant: "info" },
  ],
  variant = "default",
}: Omit<BasicPillsStatusColorsProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className={`py-4 ${textAlign}`}>
      {pills.map((pill, index) => (
        <Text
          key={`${pill.label}-${index}`}
          className={`inline-block rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2 ${pillVariantClasses[pill.variant]}`}
        >
          {pill.label}
        </Text>
      ))}
    </Section>
  );
};

export const BasicPillsStatusColors = ({
  theme = defaultTheme,
  pills = [
    { label: "Default", variant: "default" },
    { label: "Success", variant: "success" },
    { label: "Warning", variant: "warning" },
    { label: "Danger", variant: "danger" },
    { label: "Info", variant: "info" },
  ],
  variant = "default",
}: BasicPillsStatusColorsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Pills</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BasicPillsStatusColorsSection pills={pills} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

BasicPillsStatusColors.PreviewProps = {
  pills: [
    { label: "Active", variant: "success" },
    { label: "Pending", variant: "warning" },
    { label: "Cancelled", variant: "danger" },
    { label: "New", variant: "info" },
    { label: "Draft", variant: "default" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BasicPillsStatusColorsProps;
