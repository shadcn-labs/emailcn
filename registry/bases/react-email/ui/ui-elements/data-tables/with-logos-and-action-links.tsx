/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface DataTableLogosActionsProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: {
    logoUrl?: string;
    name: string;
    actionLabel?: string;
    actionHref?: string;
  }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const DataTableLogosActionsSection = ({
  headers = ["App", "Name", "Action"],
  rows = [{ actionHref: "#", actionLabel: "View", name: "App 1" }],
  variant = "default",
}: Omit<DataTableLogosActionsProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-left";

  return (
    <Section className="py-4">
      <Section className="border border-border rounded-md">
        <Row>
          {headers.map((header, i) => (
            <Column
              key={`h-${i}`}
              className={`bg-foreground-muted/10 px-3 py-2 text-sm font-medium text-foreground ${textAlign}`}
            >
              {header}
            </Column>
          ))}
        </Row>
        {rows.map((row, ri) => (
          <Row key={`r-${ri}`}>
            <Column className="px-3 py-2">
              {row.logoUrl ? (
                <Img
                  src={row.logoUrl}
                  alt={row.name}
                  height={24}
                  width={24}
                  className="rounded-full object-cover"
                />
              ) : (
                <Text className="m-0 h-6 w-6 rounded-full bg-primary text-center text-xs leading-6 text-primary-fg">
                  {row.name.charAt(0)}
                </Text>
              )}
            </Column>
            <Column
              className={`px-3 py-2 text-sm text-foreground ${textAlign}`}
            >
              {row.name}
            </Column>
            <Column className={`px-3 py-2 ${textAlign}`}>
              {row.actionLabel && row.actionHref ? (
                <a
                  href={row.actionHref}
                  className="text-xs font-medium text-primary underline"
                >
                  {row.actionLabel}
                </a>
              ) : null}
            </Column>
          </Row>
        ))}
      </Section>
    </Section>
  );
};

export const DataTableLogosActions = ({
  theme = defaultTheme,
  headers = ["App", "Name", "Action"],
  rows = [{ actionHref: "#", actionLabel: "View", name: "App 1" }],
  variant = "default",
}: DataTableLogosActionsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Logo Table</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <DataTableLogosActionsSection
          headers={headers}
          rows={rows}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

DataTableLogosActions.PreviewProps = {
  headers: ["", "Integration", ""],
  rows: [
    {
      actionHref: "#slack",
      actionLabel: "Configure",
      logoUrl: "https://example.com/logo1.png",
      name: "Slack",
    },
    {
      actionHref: "#notion",
      actionLabel: "Connect",
      logoUrl: "https://example.com/logo2.png",
      name: "Notion",
    },
    {
      actionHref: "#figma",
      actionLabel: "Sync",
      logoUrl: "https://example.com/logo3.png",
      name: "Figma",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableLogosActionsProps;
