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

export type ContentGridTwoColumnVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface ContentGridTwoColumnProps {
  theme?: EmailThemeTokens;
  columns?: { iconUrl?: string; title: string; description: string }[];
  variant?: ContentGridTwoColumnVariant;
}

const ContentGridTwoColumnSection = ({
  columns,
  theme,
  variant,
}: {
  columns: ContentGridTwoColumnProps["columns"];
  theme: EmailThemeTokens;
  variant: ContentGridTwoColumnVariant;
}) => {
  const items = columns ?? [];

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {items.slice(0, 2).map((col, i) => (
        <MjmlColumn
          key={col.title + i}
          width="50%"
          padding={theme.spacingBase ?? "24px"}
          verticalAlign="top"
        >
          {col.iconUrl ? (
            <MjmlImage
              align="center"
              alt={col.title}
              src={col.iconUrl}
              width={48}
              paddingBottom={theme.spacingBase ?? "24px"}
            />
          ) : null}
          <MjmlText
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeLg ?? "16px"}
            fontWeight={theme.fontWeightMedium}
            paddingBottom={theme.spacingBase ?? "16px"}
          >
            {col.title}
          </MjmlText>
          <MjmlText
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase ?? "14px"}
            lineHeight={theme.lineHeightBase}
          >
            {col.description}
          </MjmlText>
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const TitleWithLargePadding = ({
  theme = defaultTheme,
  columns = [
    { description: "Description for feature 1", title: "Feature 1" },
    { description: "Description for feature 2", title: "Feature 2" },
  ],
  variant = "default",
}: ContentGridTwoColumnProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>content 2-col</MjmlPreview>
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
        <ContentGridTwoColumnSection
          columns={columns}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TitleWithLargePadding.PreviewProps = {
  columns: [
    {
      description: "Lightning-fast load times for your emails.",
      iconUrl:
        "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fcontent%2Ftitle-with-large-padding.tsx-1&size=48",
      title: "Fast Performance",
    },
    {
      description: "Simple API to get started in minutes.",
      iconUrl:
        "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fcontent%2Ftitle-with-large-padding.tsx-2&size=48",
      title: "Easy Integration",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies ContentGridTwoColumnProps;
