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

export interface CategoryPreviewRowsProps {
  theme?: EmailThemeTokens;
  categories?: { imageUrl?: string; name: string; href?: string }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const CategoryPreviewRowsSection = ({
  categories,
  theme,
  variant,
}: {
  categories: NonNullable<CategoryPreviewRowsProps["categories"]>;
  theme: EmailThemeTokens;
  variant: NonNullable<CategoryPreviewRowsProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "left";

  return (
    <MjmlWrapper
      border={`1px solid ${theme.colorBorder ?? "#e5e7eb"}`}
      borderRadius={theme.borderRadius}
      padding={theme.spacingBase ?? "16px"}
    >
      {categories.map((cat) => (
        <MjmlSection
          key={cat.name}
          padding={`${theme.spacingBase ?? "16px"} 0`}
        >
          <MjmlColumn width="80px">
            {cat.imageUrl ? (
              <MjmlImage
                alt={cat.name}
                borderRadius={theme.borderRadius}
                src={cat.imageUrl}
                width={64}
              />
            ) : null}
          </MjmlColumn>
          <MjmlColumn>
            <MjmlText
              align={alignText}
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase ?? "14px"}
              fontWeight={theme.fontWeightMedium ?? "500"}
            >
              {cat.name}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      ))}
    </MjmlWrapper>
  );
};

export const CategoryPreviewRows = ({
  theme = defaultTheme,
  categories = [{ name: "Electronics" }, { name: "Fashion" }, { name: "Home" }],
  variant = "default",
}: CategoryPreviewRowsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>category-rows</MjmlPreview>
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
        <CategoryPreviewRowsSection
          categories={categories}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

CategoryPreviewRows.PreviewProps = {
  categories: [
    { imageUrl: "https://example.com/row1.jpg", name: "Electronics" },
    { imageUrl: "https://example.com/row2.jpg", name: "Fashion" },
    { imageUrl: "https://example.com/row3.jpg", name: "Home & Living" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies CategoryPreviewRowsProps;
