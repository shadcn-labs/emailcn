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

export interface DataTable4ColumnsProps {
  theme?: EmailThemeTokens;
  headers?: string[];
  rows?: string[][];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DataTable4ColumnsSection = ({
  headers,
  rows,
  theme,
}: {
  headers: string[];
  rows: string[][];
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
          {headers.map((_, ci) => (
            <MjmlColumn key={ci} width={cellWidth}>
              <MjmlText
                color={theme.colorText}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeBase ?? "14px"}
                padding="0"
              >
                {row[ci] ?? ""}
              </MjmlText>
            </MjmlColumn>
          ))}
        </MjmlSection>
      ))}
    </MjmlSection>
  );
};

export const DataTable4Columns = ({
  theme = defaultTheme,
  headers = ["Name", "Type", "Status", "Val"],
  rows = [["A", "Std", "Active", "$100"]],
  variant = "default",
}: DataTable4ColumnsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>table-Fourcol</MjmlPreview>
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
        <DataTable4ColumnsSection headers={headers} rows={rows} theme={theme} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

DataTable4Columns.PreviewProps = {
  headers: ["Product", "Category", "Stock", "Price"],
  rows: [
    ["Widget A", "Electronics", "In Stock", "$29"],
    ["Widget B", "Accessories", "Low", "$49"],
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTable4ColumnsProps;
