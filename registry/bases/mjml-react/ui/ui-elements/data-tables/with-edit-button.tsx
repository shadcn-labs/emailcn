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

export interface DataTableEditButtonProps {
  theme?: EmailThemeTokens;
  headers?: string[];
  rows?: { name: string; role: string; editHref?: string }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DataTableEditButtonSection = ({
  headers,
  rows,
  theme,
}: {
  headers: string[];
  rows: NonNullable<DataTableEditButtonProps["rows"]>;
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
            <MjmlText
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase ?? "14px"}
              padding="0"
            >
              {row.role}
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width={cellWidth}>
            {row.editHref ? (
              <MjmlText
                align="center"
                color={theme.colorTextMuted}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeSm ?? "12px"}
              >
                <a
                  href={row.editHref}
                  style={{
                    color: theme.colorPrimary,
                    fontFamily: theme.fontFamily,
                    textDecoration: "underline",
                  }}
                >
                  Edit
                </a>
              </MjmlText>
            ) : null}
          </MjmlColumn>
        </MjmlSection>
      ))}
    </MjmlSection>
  );
};

export const DataTableEditButton = ({
  theme = defaultTheme,
  headers = ["Name", "Role", ""],
  rows = [{ editHref: "#", name: "Alice", role: "Admin" }],
  variant = "default",
}: DataTableEditButtonProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>table-edit</MjmlPreview>
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
        <DataTableEditButtonSection
          headers={headers}
          rows={rows}
          theme={theme}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

DataTableEditButton.PreviewProps = {
  headers: ["User", "Dept", ""],
  rows: [
    { editHref: "#", name: "Alice Johnson", role: "Engineering" },
    { editHref: "#", name: "Bob Smith", role: "Marketing" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableEditButtonProps;
