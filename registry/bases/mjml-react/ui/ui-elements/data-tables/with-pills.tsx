/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface DataTableWithPillsProps {
  theme?: EmailThemeTokens;
  headers?: string[];
  rows?: { name: string; status: string; statusVariant: string }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const pillStatusColor = (v: string, theme: EmailThemeTokens) => {
  switch (v) {
    case "active": {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorSuccess ?? "#10b981",
        text: theme.colorSuccess ?? "#10b981",
      };
    }
    case "pending": {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorWarning ?? "#f59e0b",
        text: theme.colorWarning ?? "#f59e0b",
      };
    }
    case "cancelled": {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorDanger ?? "#ef4444",
        text: theme.colorDanger ?? "#ef4444",
      };
    }
    default: {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorBorder ?? "#e5e7eb",
        text: theme.colorTextMuted,
      };
    }
  }
};

const DataTableWithPillsSection = ({
  headers,
  rows,
  theme,
}: {
  headers: string[];
  rows: NonNullable<DataTableWithPillsProps["rows"]>;
  theme: EmailThemeTokens;
}) => {
  const cellWidth = `${100 / headers.length}%`;
  return (
    <MjmlSection
      border={`1px solid ${theme.colorBorder ?? "#e5e7eb"}`}
      borderRadius={theme.borderRadius}
      padding="0"
    >
      <MjmlSection
        backgroundColor={theme.colorBackgroundMuted}
        padding={`${theme.spacingBase ?? "16px"} ${theme.spacingBase ?? "16px"}`}
      >
        {headers.map((h) => (
          <MjmlColumn key={h} width={cellWidth}>
            <MjmlText
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase ?? "14px"}
              fontWeight={theme.fontWeightBold ?? "600"}
              padding="0"
            >
              {h}
            </MjmlText>
          </MjmlColumn>
        ))}
      </MjmlSection>
      {rows.map((row, ri) => (
        <MjmlSection
          key={ri}
          padding={`${theme.spacingBase ?? "16px"} ${theme.spacingBase ?? "16px"}`}
        >
          <MjmlColumn width={cellWidth}>
            <MjmlText
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase ?? "14px"}
              padding="0"
            >
              {row.name}
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width={cellWidth}>
            <MjmlSection
              backgroundColor={pillStatusColor(row.statusVariant, theme).bg}
              border={`1px solid ${pillStatusColor(row.statusVariant, theme).border}`}
              borderRadius={theme.borderRadius}
              padding="Twopx 8px"
            >
              <MjmlColumn>
                <MjmlText
                  align="center"
                  color={pillStatusColor(row.statusVariant, theme).text}
                  fontFamily={theme.fontFamily}
                  fontSize="10px"
                  fontWeight={theme.fontWeightMedium ?? "500"}
                  padding="0"
                >
                  {row.status}
                </MjmlText>
              </MjmlColumn>
            </MjmlSection>
          </MjmlColumn>
        </MjmlSection>
      ))}
    </MjmlSection>
  );
};

export const DataTableWithPills = ({
  theme = defaultTheme,
  headers = ["Name", "Status"],
  rows = [{ name: "Alice", status: "Active", statusVariant: "active" }],
  variant = "default",
}: DataTableWithPillsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>table-pills</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <DataTableWithPillsSection
          headers={headers}
          rows={rows}
          theme={theme}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

DataTableWithPills.PreviewProps = {
  headers: ["User", "Status"],
  rows: [
    { name: "Alice", status: "Active", statusVariant: "active" },
    { name: "Bob", status: "Pending", statusVariant: "pending" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableWithPillsProps;
