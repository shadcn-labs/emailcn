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

export type ContentGridTextOnlyVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface ContentGridTextOnlyProps {
  theme?: EmailThemeTokens;
  columns?: { title: string; description: string }[];
  columnCount?: 2 | 3;
  variant?: ContentGridTextOnlyVariant;
}
const ContentGridTextOnlySection = ({
  columnCount,
  columns,
  theme,
  variant,
}: {
  columnCount: 2 | 3;
  columns: ContentGridTextOnlyProps["columns"];
  theme: EmailThemeTokens;
  variant: ContentGridTextOnlyVariant;
}) => {
  const colWidth = columnCount === 2 ? "50%" : "33.33%";
  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {(columns ?? []).slice(0, columnCount).map((col, i) => (
        <MjmlColumn
          key={col.title + i}
          width={colWidth}
          padding={theme.spacingBase ?? "16px"}
          verticalAlign="top"
        >
          <MjmlText
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeLg}
            fontWeight={theme.fontWeightMedium}
            paddingBottom={theme.spacingBase ?? "8px"}
          >
            {col.title}
          </MjmlText>
          <MjmlText
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase}
            lineHeight={theme.lineHeightBase}
          >
            {col.description}
          </MjmlText>
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};
export const ContentGridTextOnly = ({
  theme = defaultTheme,
  columns = [
    { description: "Description 1", title: "Feature 1" },
    { description: "Description 2", title: "Feature 2" },
  ],
  columnCount = 2,
  variant = "default",
}: ContentGridTextOnlyProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>content text</MjmlPreview>
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
        <ContentGridTextOnlySection
          columnCount={columnCount}
          columns={columns}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
ContentGridTextOnly.PreviewProps = {
  columnCount: 2,
  columns: [
    {
      description: "Everything you need to build amazing emails.",
      title: "Powerful Features",
    },
    {
      description: "Simple API to get started in minutes.",
      title: "Easy Integration",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies ContentGridTextOnlyProps;
