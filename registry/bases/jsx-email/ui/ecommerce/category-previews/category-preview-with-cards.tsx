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
    <Section style={{ padding: `${theme.spacingXl ?? "24px"} 0` }}>
      <Row>
        {categories.slice(0, 3).map((cat) => (
          <Column
            key={cat.name}
            style={{
              padding: theme.spacingBase ?? "16px",
              verticalAlign: "top",
              width: pct,
            }}
          >
            {cat.imageUrl ? (
              <Img
                alt={cat.name}
                height={120}
                src={cat.imageUrl}
                width="100%"
                style={{
                  borderRadius: theme.borderRadius,
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "100%",
                  paddingBottom: theme.spacingBase ?? "16px",
                }}
              />
            ) : (
              <Section
                style={{
                  backgroundColor: theme.colorBackgroundMuted,
                  borderRadius: theme.borderRadius,
                  padding: "60px 0",
                }}
              >
                <Row>
                  <Column>
                    <Text
                      style={{
                        color: theme.colorTextMuted,
                        fontFamily: theme.fontFamily,
                        fontSize: theme.fontSizeSm ?? "12px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      Image
                    </Text>
                  </Column>
                </Row>
              </Section>
            )}
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
        ))}
      </Row>
    </Section>
  );
};

export const CategoryPreviewCards = ({
  theme = defaultTheme,
  categories = [{ name: "Electronics" }, { name: "Fashion" }, { name: "Home" }],
  variant = "default",
}: CategoryPreviewCardsProps) => (
  <Html>
    <Head />
    <Preview>category-cards</Preview>
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
          <CategoryPreviewCardsSection
            categories={categories}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

CategoryPreviewCards.PreviewProps = {
  categories: [
    {
      href: "#",
      imageUrl: "https://static.photos/technology/800x600/2",
      name: "Electronics",
    },
    {
      href: "#",
      imageUrl: "https://static.photos/technology/800x600/3",
      name: "Fashion",
    },
    {
      href: "#",
      imageUrl: "https://static.photos/technology/800x600/4",
      name: "Home",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies CategoryPreviewCardsProps;
