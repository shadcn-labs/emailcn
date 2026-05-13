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

export type ContentGridThreeColumnVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface ContentGridThreeColumnProps {
  theme?: EmailThemeTokens;
  columns?: { iconUrl?: string; title: string; description: string }[];
  variant?: ContentGridThreeColumnVariant;
}

const ContentGridThreeColumnSection = ({
  columns,
  theme,
  variant,
}: {
  columns: ContentGridThreeColumnProps["columns"];
  theme: EmailThemeTokens;
  variant: ContentGridThreeColumnVariant;
}) => {
  const items = columns ?? [];

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {items.slice(0, 3).map((col, i) => (
        <MjmlColumn
          key={col.title + i}
          width="33.33%"
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
            align="center"
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeLg ?? "16px"}
            fontWeight={theme.fontWeightMedium}
            paddingBottom={theme.spacingBase ?? "16px"}
          >
            {col.title}
          </MjmlText>
          <MjmlText
            align="center"
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

export const ParagraphWithRegularPadding = ({
  theme = defaultTheme,
  columns = [
    { description: "Description for item 1", title: "Item 1" },
    { description: "Description for item 2", title: "Item 2" },
    { description: "Description for item 3", title: "Item 3" },
  ],
  variant = "default",
}: ContentGridThreeColumnProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>content 3-col</MjmlPreview>
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
        <ContentGridThreeColumnSection
          columns={columns}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ParagraphWithRegularPadding.PreviewProps = {
  columns: [
    {
      description: "Lightning-fast email rendering.",
      iconUrl:
        "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fcontent%2Fparagraph-with-regular-padding.tsx-1&size=48",
      title: "Fast",
    },
    {
      description: "Works across all email clients.",
      iconUrl:
        "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fcontent%2Fparagraph-with-regular-padding.tsx-2&size=48",
      title: "Reliable",
    },
    {
      description: "Your data is always protected.",
      iconUrl:
        "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Fcontent%2Fparagraph-with-regular-padding.tsx-3&size=48",
      title: "Secure",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies ContentGridThreeColumnProps;
