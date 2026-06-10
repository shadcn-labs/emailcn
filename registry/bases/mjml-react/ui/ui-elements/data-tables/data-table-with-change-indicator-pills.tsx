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

export interface DataTableChangeIndicatorProps {
  theme?: EmailThemeTokens;
  headers?: string[];
  rows?: {
    name: string;
    value: string;
    change: string;
    direction: "up" | "down";
  }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DataTableChangeIndicatorSection = ({
  headers,
  rows,
  theme,
}: {
  headers: string[];
  rows: NonNullable<DataTableChangeIndicatorProps["rows"]>;
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
      {rows.map((row, ri) => {
        const isUp = row.direction === "up";
        return (
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
              <MjmlText
                color={theme.colorText}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeBase ?? "14px"}
                padding="0"
              >
                {row.value}
              </MjmlText>
            </MjmlColumn>
            <MjmlColumn width={cellWidth}>
              <MjmlSection
                backgroundColor={theme.colorBackgroundMuted}
                border={`1px solid ${isUp ? (theme.colorSuccess ?? "#10b981") : (theme.colorDanger ?? "#ef4444")}`}
                borderRadius={theme.borderRadius}
                padding="2px 8px"
              >
                <MjmlColumn>
                  <MjmlText
                    align="center"
                    color={
                      isUp
                        ? (theme.colorSuccess ?? "#10b981")
                        : (theme.colorDanger ?? "#ef4444")
                    }
                    fontFamily={theme.fontFamily}
                    fontSize="10px"
                    fontWeight={theme.fontWeightMedium ?? "500"}
                    padding="0"
                  >
                    {isUp ? "\u2191" : "\u2193"} {row.change}
                  </MjmlText>
                </MjmlColumn>
              </MjmlSection>
            </MjmlColumn>
          </MjmlSection>
        );
      })}
    </MjmlSection>
  );
};

export const DataTableChangeIndicator = ({
  theme = defaultTheme,
  headers = ["Metric", "Value", "Change"],
  rows = [
    { change: "+8.2%", direction: "up", name: "Revenue", value: "$12.5K" },
  ],
  variant = "default",
}: DataTableChangeIndicatorProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>table-change</MjmlPreview>
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
        <DataTableChangeIndicatorSection
          headers={headers}
          rows={rows}
          theme={theme}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

DataTableChangeIndicator.PreviewProps = {
  headers: ["Metric", "Value", "Change"],
  rows: [
    { change: "+8.2%", direction: "up", name: "Revenue", value: "$12.5K" },
    { change: "-1.5%", direction: "down", name: "Churn", value: "3.1%" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableChangeIndicatorProps;
