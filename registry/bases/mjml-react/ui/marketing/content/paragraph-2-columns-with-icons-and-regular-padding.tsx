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

export type ContentGridDarkVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface ContentGridDarkProps {
  theme?: EmailThemeTokens;
  columns?: { title: string; description: string }[];
  variant?: ContentGridDarkVariant;
}
const ContentGridDarkSection = ({
  columns,
  theme,
  variant,
}: {
  columns: ContentGridDarkProps["columns"];
  theme: EmailThemeTokens;
  variant: ContentGridDarkVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorText}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {(columns ?? []).slice(0, 2).map((col, i) => (
      <MjmlColumn
        key={col.title + i}
        width="50%"
        padding={theme.spacingBase ?? "16px"}
        verticalAlign="top"
      >
        <MjmlText
          color={theme.colorBackground}
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
export const Paragraph2ColumnsWithIconsAndRegularPadding = ({
  theme = defaultTheme,
  columns = [
    { description: "Description 1", title: "Feature 1" },
    { description: "Description 2", title: "Feature 2" },
  ],
  variant = "default",
}: ContentGridDarkProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>content dark</MjmlPreview>
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
        <ContentGridDarkSection
          columns={columns}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
Paragraph2ColumnsWithIconsAndRegularPadding.PreviewProps = {
  columns: [
    {
      description: "Lightning-fast email rendering for all clients.",
      title: "Fast Performance",
    },
    {
      description: "Simple API to get started in minutes.",
      title: "Easy Integration",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies ContentGridDarkProps;
