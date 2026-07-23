import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import {
  DataTableEmailShell,
  DataTableFrame,
  DataTableLink,
  DataTableLogo,
  DataTableText,
} from "@/registry/bases/react-email/ui/ui-elements/data-tables/data-table-shared";

export interface DataTableLogosActionsProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: {
    actionHref?: string;
    actionLabel?: string;
    logoUrl?: string;
    name: string;
  }[];
}

export const DataTableLogosActionsSection = ({
  headers = ["", "App", ""],
  rows = [{ actionHref: "#", actionLabel: "Configure", name: "Stripe" }],
}: Omit<DataTableLogosActionsProps, "theme">) => (
  <DataTableFrame
    alignments={["left", "left", "right"]}
    columnWidths={["56px", "auto", "112px"]}
    headers={headers}
    rows={rows.map((row) => [
      {
        content: <DataTableLogo name={row.name} src={row.logoUrl} />,
      },
      { content: <DataTableText>{row.name}</DataTableText> },
      {
        content:
          row.actionHref && row.actionLabel ? (
            <DataTableLink href={row.actionHref}>
              {row.actionLabel}
            </DataTableLink>
          ) : null,
      },
    ])}
  />
);

export const DataTableLogosActions = ({
  theme = defaultTheme,
  headers = ["", "App", ""],
  rows = [{ actionHref: "#", actionLabel: "Configure", name: "Stripe" }],
}: DataTableLogosActionsProps) => (
  <DataTableEmailShell
    preview="Integrations data table with logos and actions"
    theme={theme}
  >
    <DataTableLogosActionsSection headers={headers} rows={rows} />
  </DataTableEmailShell>
);

DataTableLogosActions.PreviewProps = {
  headers: ["", "Integration", ""],
  rows: [
    {
      actionHref: "#slack",
      actionLabel: "Configure",
      logoUrl:
        "https://emailcn.vercel.app/api/email-assets/logos/logo-stripe.png",
      name: "Stripe",
    },
    {
      actionHref: "#notion",
      actionLabel: "Connect",
      logoUrl:
        "https://emailcn.vercel.app/api/email-assets/logos/logo-apple-pay.png",
      name: "Apple Pay",
    },
    {
      actionHref: "#figma",
      actionLabel: "Sync",
      logoUrl:
        "https://emailcn.vercel.app/api/email-assets/logos/logo-mastercard.png",
      name: "Mastercard",
    },
  ],
  theme: defaultTheme,
} satisfies DataTableLogosActionsProps;
