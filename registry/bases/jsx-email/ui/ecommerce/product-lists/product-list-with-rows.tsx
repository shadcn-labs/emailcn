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

export interface ProductListWithRowsProps {
  theme?: EmailThemeTokens;
  products?: {
    imageUrl?: string;
    name: string;
    price: string;
    quantity?: number;
    href?: string;
  }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const ProductListWithRowsSection = ({
  products,
  theme,
}: {
  products: NonNullable<ProductListWithRowsProps["products"]>;
  theme: EmailThemeTokens;
}) => (
  <Section
    style={{
      border: `1px solid ${theme.colorBorder ?? "#e5e7eb"}`,
      borderRadius: theme.borderRadius,
      padding: theme.spacingBase ?? "16px",
    }}
  >
    {products.map((product) => (
      <Section
        key={product.name}
        style={{ padding: `${theme.spacingBase ?? "16px"} 0` }}
      >
        <Row>
          <Column style={{ width: "80px" }}>
            {product.imageUrl ? (
              <Img
                alt={product.name}
                src={product.imageUrl}
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
                paddingBottom: theme.spacingBase ?? "16px",
              }}
            >
              {product.name}
            </Text>
            <Text
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeBase ?? "14px",
                margin: 0,
              }}
            >
              {product.price}
            </Text>
          </Column>
        </Row>
      </Section>
    ))}
  </Section>
);

export const ProductListWithRows = ({
  theme = defaultTheme,
  products = [
    { name: "Product 1", price: "$29.00" },
    { name: "Product 2", price: "$39.00" },
  ],
  variant = "default",
}: ProductListWithRowsProps) => (
  <Html>
    <Head />
    <Preview>product-list-rows</Preview>
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
        <ProductListWithRowsSection products={products} theme={theme} />
      </Container>
    </Body>
  </Html>
);

ProductListWithRows.PreviewProps = {
  products: [
    {
      href: "#",
      imageUrl: "https://static.photos/technology/800x600/2",
      name: "Wireless Headphones",
      price: "$129.00",
    },
    {
      href: "#",
      imageUrl: "https://static.photos/technology/800x600/3",
      name: "Leather Wallet",
      price: "$59.00",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies ProductListWithRowsProps;
