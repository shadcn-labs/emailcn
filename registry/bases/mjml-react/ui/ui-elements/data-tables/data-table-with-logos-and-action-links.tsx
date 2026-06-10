/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface DataTableLogosActionsProps {
  theme?: EmailThemeTokens;
  headers?: string[];
  rows?: {
    logoUrl?: string;
    name: string;
    actionLabel?: string;
    actionHref?: string;
  }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DataTableLogosActionsSection = ({
  headers,
  rows,
  theme,
}: {
  headers: string[];
  rows: NonNullable<DataTableLogosActionsProps["rows"]>;
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
            {row.logoUrl ? (
              <MjmlImage
                alt={row.name}
                borderRadius="999px"
                height={24}
                src={row.logoUrl}
                width={24}
              />
            ) : (
              <MjmlText
                align="center"
                fontFamily={theme.fontFamily}
                fontSize="14px"
              >
                <span
                  style={{
                    backgroundColor: theme.colorPrimary,
                    borderRadius: "999px",
                    color: theme.colorPrimaryForeground ?? "#ffffff",
                    display: "inline-block",
                    height: 24,
                    lineHeight: "24px",
                    textAlign: "center",
                    width: 24,
                  }}
                >
                  {row.name.charAt(0)}
                </span>
              </MjmlText>
            )}
          </MjmlColumn>
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
            {row.actionLabel && row.actionHref ? (
              <MjmlText
                align="center"
                color={theme.colorTextMuted}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeSm ?? "12px"}
              >
                <a
                  href={row.actionHref}
                  style={{
                    color: theme.colorPrimary,
                    fontFamily: theme.fontFamily,
                    textDecoration: "underline",
                  }}
                >
                  {row.actionLabel}
                </a>
              </MjmlText>
            ) : null}
          </MjmlColumn>
        </MjmlSection>
      ))}
    </MjmlSection>
  );
};

export const DataTableLogosActions = ({
  theme = defaultTheme,
  headers = ["", "App", ""],
  rows = [{ actionHref: "#", actionLabel: "Configure", name: "Slack" }],
  variant = "default",
}: DataTableLogosActionsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>table-logos</MjmlPreview>
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
        <DataTableLogosActionsSection
          headers={headers}
          rows={rows}
          theme={theme}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

DataTableLogosActions.PreviewProps = {
  headers: ["", "Integration", ""],
  rows: [
    {
      actionHref: "#",
      actionLabel: "Configure",
      logoUrl: "https://static.photos/business/320x80/2",
      name: "Slack",
    },
    {
      actionHref: "#",
      actionLabel: "Connect",
      logoUrl: "https://static.photos/business/320x80/3",
      name: "Notion",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableLogosActionsProps;
