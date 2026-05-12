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

export interface CategoryPreviewCardsProps {
  theme?: EmailThemeTokens;
  categories?: { imageUrl?: string; name: string; href?: string }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const CategoryPreviewCardsSection = ({
  categories,
  theme,
  variant,
}: {
  categories: NonNullable<CategoryPreviewCardsProps["categories"]>;
  theme: EmailThemeTokens;
  variant: NonNullable<CategoryPreviewCardsProps["variant"]>;
}) => {
  const pct = `${100 / Math.min(categories.length, 3)}%`;
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";

  return (
    <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
      {categories.slice(0, 3).map((cat) => (
        <MjmlColumn
          key={cat.name}
          width={pct}
          padding={theme.spacingBase ?? "16px"}
          verticalAlign="top"
        >
          {cat.imageUrl ? (
            <MjmlImage
              alt={cat.name}
              borderRadius={theme.borderRadius}
              height={120}
              paddingBottom={theme.spacingBase ?? "16px"}
              src={cat.imageUrl}
              width="100%"
            />
          ) : (
            <MjmlSection
              backgroundColor={theme.colorBackgroundMuted}
              borderRadius={theme.borderRadius}
              padding="60px 0"
            >
              <MjmlColumn>
                <MjmlText
                  align="center"
                  color={theme.colorTextMuted}
                  fontFamily={theme.fontFamily}
                  fontSize={theme.fontSizeSm ?? "12px"}
                >
                  Image
                </MjmlText>
              </MjmlColumn>
            </MjmlSection>
          )}
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
      ))}
    </MjmlSection>
  );
};

export const CategoryPreviewCards = ({
  theme = defaultTheme,
  categories = [{ name: "Electronics" }, { name: "Fashion" }, { name: "Home" }],
  variant = "default",
}: CategoryPreviewCardsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>category-cards</MjmlPreview>
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
        <CategoryPreviewCardsSection
          categories={categories}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

CategoryPreviewCards.PreviewProps = {
  categories: [
    {
      href: "#",
      imageUrl: "https://example.com/cat1.jpg",
      name: "Electronics",
    },
    { href: "#", imageUrl: "https://example.com/cat2.jpg", name: "Fashion" },
    { href: "#", imageUrl: "https://example.com/cat3.jpg", name: "Home" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies CategoryPreviewCardsProps;
