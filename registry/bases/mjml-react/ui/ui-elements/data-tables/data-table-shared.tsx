import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlColumn,
  MjmlSection,
  MjmlTable,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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

export type DataTableAlignment = "center" | "left" | "right";

export interface DataTableCell {
  align?: DataTableAlignment;
  content: ReactNode;
}

export type DataTableStatusVariant =
  | "active"
  | "cancelled"
  | "draft"
  | "pending";

const cellWidth = (
  columnWidths: readonly string[] | undefined,
  index: number
) => columnWidths?.[index];

export const DataTableFrame = ({
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
  <MjmlTable
    border={`1px solid ${colors.border}`}
    cellpadding="0"
    cellspacing="0"
    fontFamily={fontFamily}
    fontSize="14px"
    lineHeight="20px"
    padding="0"
    role="presentation"
    tableLayout="fixed"
    width="100%"
  >
    <tbody>
      <tr>
        {headers.map((header, index) => (
          <td
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
          </td>
        ))}
      </tr>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td
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
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </MjmlTable>
);

export const DataTableText = ({
  children,
  muted = false,
}: {
  children: ReactNode;
  muted?: boolean;
}) => (
  <span style={{ color: muted ? colors.muted : colors.dark }}>{children}</span>
);

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

export const DataTablePill = ({
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

export const DataTableChangePill = ({
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

export const DataTableLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => (
  <a
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
  </a>
);

export const DataTableLogo = ({ name, src }: { name: string; src?: string }) =>
  src ? (
    <img
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

export const DataTableProgress = ({ value }: { value: number }) => {
  const progress = clamp(value);

  return (
    <MjmlTable
      cellpadding="0"
      cellspacing="0"
      fontFamily={fontFamily}
      fontSize="10px"
      fontWeight="600"
      lineHeight="20px"
      padding="0"
      role="presentation"
      tableLayout="fixed"
      width="100%"
    >
      <tbody>
        <tr>
          {progress > 0 ? (
            <td
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
            </td>
          ) : null}
          {progress < 100 ? (
            <td
              width={`${100 - progress}%`}
              style={{
                backgroundColor: colors.track,
                height: "20px",
                lineHeight: "20px",
                width: `${100 - progress}%`,
              }}
            >
              &zwj;
            </td>
          ) : null}
        </tr>
      </tbody>
    </MjmlTable>
  );
};

export const DataTableEmailShell = ({
  children,
  preview,
  theme,
}: {
  children: ReactNode;
  preview: string;
  theme: EmailThemeTokens;
}) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{preview}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor={colors.canvas} width={theme.containerWidth}>
      <MjmlWrapper backgroundColor={colors.surface} padding="44px 24px">
        <MjmlSection padding="0">
          <MjmlColumn padding="0">{children}</MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
