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

export interface DataTableWithProgressProps {
  theme?: EmailThemeTokens;
  headers?: string[];
  rows?: { label: string; progress: number; value: string }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DataTableWithProgressSection = ({
  headers,
  rows,
  theme,
}: {
  headers: string[];
  rows: NonNullable<DataTableWithProgressProps["rows"]>;
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
              {row.label}
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width={cellWidth}>
            <MjmlSection
              backgroundColor={theme.colorBackgroundSubtle ?? "#f3f4f6"}
              borderRadius={theme.borderRadius}
              padding="0"
            >
              {row.progress > 0 ? (
                <MjmlColumn
                  backgroundColor={theme.colorPrimary}
                  borderRadius={theme.borderRadius}
                  width={`${row.progress}%`}
                  padding="4px 0"
                >
                  <MjmlText
                    align="center"
                    color={theme.colorPrimaryForeground}
                    fontFamily={theme.fontFamily}
                    fontSize="10px"
                    fontWeight={theme.fontWeightBold ?? "600"}
                    padding="0"
                  >
                    {row.progress}%
                  </MjmlText>
                </MjmlColumn>
              ) : null}
              {row.progress < 100 ? (
                <MjmlColumn width={`${100 - row.progress}%`} padding="0" />
              ) : null}
            </MjmlSection>
          </MjmlColumn>
          <MjmlColumn width={cellWidth}>
            <MjmlText
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase ?? "14px"}
              padding="0"
            >
              {row.value}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      ))}
    </MjmlSection>
  );
};

export const DataTableWithProgress = ({
  theme = defaultTheme,
  headers = ["Item", "Progress", "Value"],
  rows = [{ label: "Task 1", progress: 75, value: "$1.TwoK" }],
  variant = "default",
}: DataTableWithProgressProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>table-progress</MjmlPreview>
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
        <DataTableWithProgressSection
          headers={headers}
          rows={rows}
          theme={theme}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

DataTableWithProgress.PreviewProps = {
  headers: ["Project", "Progress", "Budget"],
  rows: [
    { label: "Web Redesign", progress: 90, value: "$1TwoK" },
    { label: "Mobile App", progress: 60, value: "$8.5K" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableWithProgressProps;
