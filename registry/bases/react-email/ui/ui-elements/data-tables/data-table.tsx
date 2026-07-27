import { Fragment } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  Body,
  Head as EmailHead,
  Html,
  Preview,
  Tailwind,
  Section,
  Row,
  Column,
  Img,
  Link,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/react-email/themes/theme-default";

const colors = {
  border: "#e5e7eb",
  canvas: "#f1f5f9",
  danger: "#b91c1c",
  dangerBackground: "#fef2f2",
  dangerBorder: "#fecaca",
  dark: "#030712",
  header: "#f9fafb",
  muted: "#6b7280",
  success: "#047857",
  successBackground: "#ecfdf5",
  successBorder: "#a7f3d0",
  surface: "#fffffe",
  track: "#f3f4f6",
  warning: "#b45309",
  warningBackground: "#fffbeb",
  warningBorder: "#fde68a",
  white: "#fffffe",
} as const;

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const tableStyle: CSSProperties = {
  borderCollapse: "separate",
  borderSpacing: 0,
  width: "100%",
};

type DataTableAlignment = "center" | "left" | "right";

interface DataTableCell {
  align?: DataTableAlignment;
  content: ReactNode;
}

const cellWidth = (
  columnWidths: readonly string[] | undefined,
  index: number
) => columnWidths?.[index];

const DataTableFrame = ({
  alignments,
  columnWidths,
  headers,
  rows,
}: {
  alignments?: readonly DataTableAlignment[];
  columnWidths?: readonly string[];
  headers: readonly string[];
  rows: readonly (readonly DataTableCell[])[];
}) => (
  <Section
    style={{
      ...tableStyle,
      border: `1px solid ${colors.border}`,
      borderRadius: "8px",
      overflow: "hidden",
      tableLayout: "fixed",
    }}
  >
    <Fragment>
      <Row>
        {headers.map((header, index) => (
          <Column
            key={`${header}-${index}`}
            role="columnheader"
            width={cellWidth(columnWidths, index)}
            style={{
              backgroundColor: colors.header,
              borderBottom: `1px solid ${colors.border}`,
              color: colors.muted,
              fontFamily,
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: "16px",
              padding: "12px 16px",
              textAlign: alignments?.[index] ?? "left",
              verticalAlign: "middle",
              width: cellWidth(columnWidths, index),
            }}
          >
            {header}
          </Column>
        ))}
      </Row>
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Column
              key={cellIndex}
              width={cellWidth(columnWidths, cellIndex)}
              style={{
                borderTop:
                  rowIndex === 0 ? undefined : `1px solid ${colors.border}`,
                color: colors.dark,
                fontFamily,
                fontSize: "14px",
                lineHeight: "20px",
                padding: "14px 16px",
                textAlign:
                  cell.align ?? alignments?.[cellIndex] ?? ("left" as const),
                verticalAlign: "middle",
                width: cellWidth(columnWidths, cellIndex),
              }}
            >
              {cell.content}
            </Column>
          ))}
        </Row>
      ))}
    </Fragment>
  </Section>
);

const DataTableText = ({
  children,
  muted = false,
}: {
  children: ReactNode;
  muted?: boolean;
}) => (
  <span style={{ color: muted ? colors.muted : colors.dark }}>{children}</span>
);

const DataTableEmailShell = ({
  children,
  preview,
  theme,
}: {
  children: ReactNode;
  preview: string;
  theme: TailwindConfig;
}) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>{preview}</Preview>
    <Tailwind config={theme}>
      <Body style={{ backgroundColor: colors.canvas, fontFamily, margin: 0 }}>
        <Section style={{ ...tableStyle, backgroundColor: colors.canvas }}>
          <Fragment>
            <Row>
              <Column>&zwj;</Column>
              <Column
                width={600}
                style={{
                  backgroundColor: colors.surface,
                  maxWidth: "100%",
                  padding: "44px 24px",
                  width: "600px",
                }}
              >
                {children}
              </Column>
              <Column>&zwj;</Column>
            </Row>
          </Fragment>
        </Section>
      </Body>
    </Tailwind>
  </Html>
);

interface BasicTable_DataTableBasicProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: string[][];
}

const BasicTable_DataTableBasicSection = ({
  headers = ["Column 1", "Column 2"],
  rows = [["Row 1 Data", "Row 1 Data"]],
}: Omit<BasicTable_DataTableBasicProps, "theme">) => (
  <DataTableFrame
    headers={headers}
    rows={rows.map((row) =>
      headers.map((_, index) => ({
        content: <DataTableText>{row[index] ?? ""}</DataTableText>,
      }))
    )}
  />
);

const BasicTable_DataTableBasic = ({
  theme = defaultTheme,
  headers = ["Column 1", "Column 2"],
  rows = [["Row 1 Data", "Row 1 Data"]],
}: BasicTable_DataTableBasicProps) => (
  <DataTableEmailShell preview="Product data table" theme={theme}>
    <BasicTable_DataTableBasicSection headers={headers} rows={rows} />
  </DataTableEmailShell>
);

BasicTable_DataTableBasic.PreviewProps = {
  headers: ["Product", "Price", "Quantity"],
  rows: [
    ["Widget A", "$29.00", "2"],
    ["Widget B", "$49.00", "1"],
    ["Widget C", "$19.00", "4"],
  ],
  theme: defaultTheme,
} satisfies BasicTable_DataTableBasicProps;

export type DataTableStatusVariant =
  | "active"
  | "cancelled"
  | "draft"
  | "pending";

const statusPalette = {
  active: {
    background: colors.successBackground,
    border: colors.successBorder,
    text: colors.success,
  },
  cancelled: {
    background: colors.dangerBackground,
    border: colors.dangerBorder,
    text: colors.danger,
  },
  draft: {
    background: colors.track,
    border: colors.border,
    text: colors.muted,
  },
  pending: {
    background: colors.warningBackground,
    border: colors.warningBorder,
    text: colors.warning,
  },
} as const;

const DataTablePill = ({
  children,
  variant,
}: {
  children: ReactNode;
  variant: DataTableStatusVariant;
}) => {
  const palette = statusPalette[variant];

  return (
    <span
      style={{
        backgroundColor: palette.background,
        border: `1px solid ${palette.border}`,
        borderRadius: "9999px",
        color: palette.text,
        display: "inline-block",
        fontFamily,
        fontSize: "11px",
        fontWeight: 500,
        lineHeight: "16px",
        padding: "2px 8px",
      }}
    >
      {children}
    </span>
  );
};

const DataTableChangePill = ({
  change,
  direction,
}: {
  change: string;
  direction: "down" | "up";
}) => (
  <DataTablePill variant={direction === "up" ? "active" : "cancelled"}>
    {direction === "up" ? "↑" : "↓"}&nbsp; {change}
  </DataTablePill>
);

const DataTableLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    style={{
      color: colors.dark,
      fontFamily,
      fontSize: "12px",
      fontWeight: 500,
      textDecoration: "underline",
    }}
  >
    {children}
  </Link>
);

const DataTableLogo = ({ name, src }: { name: string; src?: string }) =>
  src ? (
    <Img
      alt={name}
      height={24}
      src={src}
      width={24}
      style={{
        border: "none",
        borderRadius: "9999px",
        display: "block",
        height: "24px",
        objectFit: "cover",
        outline: "none",
        textDecoration: "none",
        width: "24px",
      }}
    />
  ) : (
    <span
      style={{
        backgroundColor: colors.dark,
        borderRadius: "9999px",
        color: colors.white,
        display: "inline-block",
        fontFamily,
        fontSize: "12px",
        fontWeight: 600,
        height: "24px",
        lineHeight: "24px",
        textAlign: "center",
        width: "24px",
      }}
    >
      {name.charAt(0)}
    </span>
  );

const clamp = (value: number) => Math.min(100, Math.max(0, value));

const DataTableProgress = ({ value }: { value: number }) => {
  const progress = clamp(value);

  return (
    <Section
      style={{
        ...tableStyle,
        backgroundColor: colors.track,
        borderRadius: "9999px",
        overflow: "hidden",
        tableLayout: "fixed",
      }}
    >
      <Fragment>
        <Row>
          {progress > 0 ? (
            <Column
              width={`${progress}%`}
              style={{
                backgroundColor: colors.dark,
                borderRadius: "9999px",
                color: colors.white,
                fontFamily,
                fontSize: "10px",
                fontWeight: 600,
                height: "20px",
                lineHeight: "20px",
                textAlign: "center",
                width: `${progress}%`,
              }}
            >
              {progress}%
            </Column>
          ) : null}
          {progress < 100 ? (
            <Column
              width={`${100 - progress}%`}
              style={{
                backgroundColor: colors.track,
                height: "20px",
                lineHeight: "20px",
                width: `${100 - progress}%`,
              }}
            >
              &zwj;
            </Column>
          ) : null}
        </Row>
      </Fragment>
    </Section>
  );
};

interface DataTable4ColumnsProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: string[][];
}

const DataTable4ColumnsSection = ({
  headers = ["Name", "Type", "Status", "Value"],
  rows = [["Item A", "Standard", "Active", "$100"]],
}: Omit<DataTable4ColumnsProps, "theme">) => (
  <DataTableFrame
    headers={headers}
    rows={rows.map((row) =>
      headers.map((_, index) => ({
        content: <DataTableText>{row[index] ?? ""}</DataTableText>,
      }))
    )}
  />
);

interface DataTableChangeIndicatorProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: {
    change: string;
    direction: "down" | "up";
    name: string;
    value: string;
  }[];
}

const DataTableChangeIndicatorSection = ({
  headers = ["Metric", "Value", "Change"],
  rows = [
    { change: "+8.2%", direction: "up", name: "Revenue", value: "$12.5K" },
  ],
}: Omit<DataTableChangeIndicatorProps, "theme">) => (
  <DataTableFrame
    alignments={["left", "left", "right"]}
    columnWidths={["40%", "30%", "30%"]}
    headers={headers}
    rows={rows.map((row) => [
      { content: <DataTableText>{row.name}</DataTableText> },
      { content: <DataTableText>{row.value}</DataTableText> },
      {
        content: (
          <DataTableChangePill change={row.change} direction={row.direction} />
        ),
      },
    ])}
  />
);

interface DataTableEditButtonProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: { editHref?: string; name: string; role: string }[];
}

const DataTableEditButtonSection = ({
  headers = ["Name", "Role", ""],
  rows = [{ editHref: "#", name: "Alice", role: "Admin" }],
}: Omit<DataTableEditButtonProps, "theme">) => (
  <DataTableFrame
    alignments={["left", "left", "right"]}
    columnWidths={["40%", "40%", "20%"]}
    headers={headers}
    rows={rows.map((row) => [
      { content: <DataTableText>{row.name}</DataTableText> },
      { content: <DataTableText muted>{row.role}</DataTableText> },
      {
        content: row.editHref ? (
          <DataTableLink href={row.editHref}>Edit</DataTableLink>
        ) : null,
      },
    ])}
  />
);

interface DataTableLogosActionsProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: {
    actionHref?: string;
    actionLabel?: string;
    logoUrl?: string;
    name: string;
  }[];
}

const DataTableLogosActionsSection = ({
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

interface DataTableWithPillsProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: {
    name: string;
    status: string;
    statusVariant: DataTableStatusVariant;
  }[];
}

const DataTableWithPillsSection = ({
  headers = ["Name", "Status"],
  rows = [{ name: "Alice", status: "Active", statusVariant: "active" }],
}: Omit<DataTableWithPillsProps, "theme">) => (
  <DataTableFrame
    alignments={["left", "right"]}
    columnWidths={["64%", "36%"]}
    headers={headers}
    rows={rows.map((row) => [
      { content: <DataTableText>{row.name}</DataTableText> },
      {
        content: (
          <DataTablePill variant={row.statusVariant}>
            {row.status}
          </DataTablePill>
        ),
      },
    ])}
  />
);

interface DataTableWithProgressProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: { label: string; progress: number; value: string }[];
}

const DataTableWithProgressSection = ({
  headers = ["Item", "Progress", "Value"],
  rows = [{ label: "Task 1", progress: 75, value: "$1,200" }],
}: Omit<DataTableWithProgressProps, "theme">) => (
  <DataTableFrame
    alignments={["left", "left", "right"]}
    columnWidths={["30%", "45%", "25%"]}
    headers={headers}
    rows={rows.map((row) => [
      { content: <DataTableText>{row.label}</DataTableText> },
      { content: <DataTableProgress value={row.progress} /> },
      { content: <DataTableText>{row.value}</DataTableText> },
    ])}
  />
);

const __BasicTable = BasicTable_DataTableBasic;

export interface DataTableColumn<Row> {
  header: string;
  key?: keyof Row;
  align?: "left" | "center" | "right";
  width?: string;
  cell?: (row: Row, index: number) => ReactNode;
}

interface DataTableThemeProps {
  theme?: Parameters<typeof __BasicTable>[0]["theme"];
}

export interface DataTableBasicProps<
  Row extends object,
> extends DataTableThemeProps {
  variant?: "basic";
  columns: DataTableColumn<Row>[];
  rows: Row[];
}

export interface DataTableFourColumnsProps extends DataTableThemeProps {
  variant: "four-columns";
  headers?: string[];
  rows?: string[][];
}

export interface DataTableChangeRow {
  change: string;
  direction: "down" | "up";
  name: string;
  value: string;
}

export interface DataTableChangeIndicatorsProps extends DataTableThemeProps {
  variant: "change-indicators";
  headers?: string[];
  rows?: DataTableChangeRow[];
}

export interface DataTableEditRow {
  editHref?: string;
  name: string;
  role: string;
}

export interface DataTableEditActionsProps extends DataTableThemeProps {
  variant: "edit-actions";
  headers?: string[];
  rows?: DataTableEditRow[];
}

export interface DataTableLogoActionRow {
  actionHref?: string;
  actionLabel?: string;
  logoUrl?: string;
  name: string;
}

export interface DataTableLogoActionsProps extends DataTableThemeProps {
  variant: "logo-actions";
  headers?: string[];
  rows?: DataTableLogoActionRow[];
}

export interface DataTableStatusRow {
  name: string;
  status: string;
  statusVariant: DataTableStatusVariant;
}

export interface DataTableStatusPillsProps extends DataTableThemeProps {
  variant: "status-pills";
  headers?: string[];
  rows?: DataTableStatusRow[];
}

export interface DataTableProgressRow {
  label: string;
  progress: number;
  value: string;
}

export interface DataTableProgressProps extends DataTableThemeProps {
  variant: "progress";
  headers?: string[];
  rows?: DataTableProgressRow[];
}

export type DataTableProps<Row extends object = Record<string, ReactNode>> =
  | DataTableBasicProps<Row>
  | DataTableFourColumnsProps
  | DataTableChangeIndicatorsProps
  | DataTableEditActionsProps
  | DataTableLogoActionsProps
  | DataTableStatusPillsProps
  | DataTableProgressProps;

export const DataTable = <Row extends object = Record<string, ReactNode>>(
  props: DataTableProps<Row>
) => {
  const theme = props.theme ?? defaultTheme;

  if (props.variant === "four-columns") {
    return (
      <DataTableEmailShell
        preview="Four-column product data table"
        theme={theme}
      >
        <DataTable4ColumnsSection headers={props.headers} rows={props.rows} />
      </DataTableEmailShell>
    );
  }
  if (props.variant === "change-indicators") {
    return (
      <DataTableEmailShell
        preview="Metrics data table with change indicators"
        theme={theme}
      >
        <DataTableChangeIndicatorSection
          headers={props.headers}
          rows={props.rows}
        />
      </DataTableEmailShell>
    );
  }
  if (props.variant === "edit-actions") {
    return (
      <DataTableEmailShell
        preview="Team data table with edit actions"
        theme={theme}
      >
        <DataTableEditButtonSection headers={props.headers} rows={props.rows} />
      </DataTableEmailShell>
    );
  }
  if (props.variant === "logo-actions") {
    return (
      <DataTableEmailShell
        preview="Integrations data table with logos and actions"
        theme={theme}
      >
        <DataTableLogosActionsSection
          headers={props.headers}
          rows={props.rows}
        />
      </DataTableEmailShell>
    );
  }
  if (props.variant === "status-pills") {
    return (
      <DataTableEmailShell
        preview="User data table with status pills"
        theme={theme}
      >
        <DataTableWithPillsSection headers={props.headers} rows={props.rows} />
      </DataTableEmailShell>
    );
  }
  if (props.variant === "progress") {
    return (
      <DataTableEmailShell
        preview="Projects data table with progress bars"
        theme={theme}
      >
        <DataTableWithProgressSection
          headers={props.headers}
          rows={props.rows}
        />
      </DataTableEmailShell>
    );
  }

  const basicProps = props as DataTableBasicProps<Row>;
  return (
    <DataTableEmailShell preview="Product data table" theme={theme}>
      <DataTableFrame
        alignments={basicProps.columns.map(({ align }) => align ?? "left")}
        columnWidths={basicProps.columns.map(({ width }) => width ?? "")}
        headers={basicProps.columns.map(({ header }) => header)}
        rows={basicProps.rows.map((row, rowIndex) =>
          basicProps.columns.map(({ align, cell, key }) => ({
            align,
            content: (() => {
              if (cell) {
                return cell(row, rowIndex);
              }
              if (key) {
                return String(row[key] ?? "");
              }
              return "";
            })(),
          }))
        )}
      />
    </DataTableEmailShell>
  );
};

DataTable.PreviewProps = {
  columns: [
    { header: "Name", key: "name" },
    { header: "Role", key: "role" },
  ],
  rows: [
    { name: "Ada Lovelace", role: "Engineer" },
    { name: "Grace Hopper", role: "Admiral" },
  ],
  variant: "basic",
} satisfies DataTableProps<{
  name: string;
  role: string;
}>;
