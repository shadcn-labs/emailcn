/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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
    <Section
      style={{
        border: `1px solid ${theme.colorBorder ?? "#e5e7eb"}`,
        borderRadius: theme.borderRadius,
        padding: theme.spacingBase ?? "16px",
      }}
    >
      {categories.map((cat) => (
        <Section
          key={cat.name}
          style={{ padding: `${theme.spacingBase ?? "16px"} 0` }}
        >
          <Row>
            <Column style={{ width: "80px" }}>
              {cat.imageUrl ? (
                <Img
                  alt={cat.name}
                  src={cat.imageUrl}
                  width={64}
                  style={{
                    borderRadius: theme.borderRadius,
                    display: "block",
                    margin: "0 auto",
                    maxWidth: "100%",
                  }}
                />
              ) : null}
            </Column>
            <Column>
              <Text
                style={{
                  color: theme.colorText,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeBase ?? "14px",
                  fontWeight: theme.fontWeightMedium ?? "500",
                  margin: 0,
                  textAlign: alignText,
                }}
              >
                {cat.name}
              </Text>
            </Column>
          </Row>
        </Section>
      ))}
    </Section>
  );
};

export const CategoryPreviewRows = ({
  theme = defaultTheme,
  categories = [{ name: "Electronics" }, { name: "Fashion" }, { name: "Home" }],
  variant = "default",
}: CategoryPreviewRowsProps) => (
  <Html>
    <Head />
    <Preview>category-rows</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <CategoryPreviewRowsSection
            categories={categories}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

CategoryPreviewRows.PreviewProps = {
  categories: [
    {
      imageUrl: "https://static.photos/technology/800x600/2",
      name: "Electronics",
    },
    { imageUrl: "https://static.photos/technology/800x600/3", name: "Fashion" },
    {
      imageUrl: "https://static.photos/technology/800x600/4",
      name: "Home & Living",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies CategoryPreviewRowsProps;
