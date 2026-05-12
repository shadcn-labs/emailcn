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

export type ContentGridMixedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface ContentGridMixedProps {
  theme?: EmailThemeTokens;
  columns?: {
    imageUrl?: string;
    imageAlt?: string;
    title: string;
    description: string;
  }[];
  variant?: ContentGridMixedVariant;
}
const ContentGridMixedSection = ({
  columns,
  theme,
  variant,
}: {
  columns: ContentGridMixedProps["columns"];
  theme: EmailThemeTokens;
  variant: ContentGridMixedVariant;
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
        {col.imageUrl ? (
          <MjmlImage
            alt={col.imageAlt ?? col.title}
            borderRadius={theme.borderRadius}
            src={col.imageUrl}
            width={260}
            paddingBottom={theme.spacingBase ?? "16px"}
          />
        ) : null}
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
export const Paragraph2ColumnsWithRegularPadding = ({
  theme = defaultTheme,
  columns = [
    { description: "Description 1", title: "Feature 1" },
    { description: "Description 2", title: "Feature 2" },
  ],
  variant = "default",
}: ContentGridMixedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>content mixed</MjmlPreview>
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
        <ContentGridMixedSection
          columns={columns}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
Paragraph2ColumnsWithRegularPadding.PreviewProps = {
  columns: [
    {
      description: "Beautiful design meets powerful functionality.",
      imageAlt: "design",
      imageUrl: "https://placehold.co/400x250?text=Design",
      title: "Beautiful Design",
    },
    {
      description: "Built for performance and reliability.",
      imageAlt: "performance",
      imageUrl: "https://placehold.co/400x250?text=Performance",
      title: "Fast Performance",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies ContentGridMixedProps;
