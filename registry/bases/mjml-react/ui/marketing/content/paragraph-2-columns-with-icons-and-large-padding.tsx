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

export type ContentGridBorderedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface ContentGridBorderedProps {
  theme?: EmailThemeTokens;
  columns?: { title: string; description: string }[];
  variant?: ContentGridBorderedVariant;
}
const ContentGridBorderedSection = ({
  columns,
  theme,
  variant,
}: {
  columns: ContentGridBorderedProps["columns"];
  theme: EmailThemeTokens;
  variant: ContentGridBorderedVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {(columns ?? []).slice(0, 2).map((col, i) => (
      <MjmlColumn
        key={col.title + i}
        width="50%"
        padding={theme.spacingBase ?? "16px"}
        verticalAlign="top"
      >
        <MjmlSection
          backgroundColor={theme.colorBackgroundMuted}
          border={`1px solid ${theme.colorBorder}`}
          borderRadius={theme.borderRadius}
          padding={theme.spacingBase ?? "16px"}
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
        </MjmlSection>
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const Paragraph2ColumnsWithIconsAndLargePadding = ({
  theme = defaultTheme,
  columns = [
    { description: "Description 1", title: "Feature 1" },
    { description: "Description 2", title: "Feature 2" },
  ],
  variant = "default",
}: ContentGridBorderedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>content bordered</MjmlPreview>
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
        <ContentGridBorderedSection
          columns={columns}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
Paragraph2ColumnsWithIconsAndLargePadding.PreviewProps = {
  columns: [
    {
      description:
        "Build responsive emails quickly with our drag-and-drop builder.",
      title: "Visual Builder",
    },
    {
      description:
        "Seamlessly integrates with your existing tools and workflows.",
      title: "Easy Integration",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies ContentGridBorderedProps;
