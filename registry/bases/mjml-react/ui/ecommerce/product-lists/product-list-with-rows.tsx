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
  variant,
}: {
  products: NonNullable<ProductListWithRowsProps["products"]>;
  theme: EmailThemeTokens;
  variant: NonNullable<ProductListWithRowsProps["variant"]>;
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
      {products.map((product) => (
        <MjmlSection
          key={product.name}
          padding={`${theme.spacingBase ?? "16px"} 0`}
        >
          <MjmlColumn width="80px">
            {product.imageUrl ? (
              <MjmlImage
                alt={product.name}
                borderRadius={theme.borderRadius}
                src={product.imageUrl}
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
              paddingBottom={theme.spacingBase ?? "16px"}
            >
              {product.name}
            </MjmlText>
            <MjmlText
              align={alignText}
              color={theme.colorTextMuted}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase ?? "14px"}
            >
              {product.price}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      ))}
    </MjmlWrapper>
  );
};

export const ProductListWithRows = ({
  theme = defaultTheme,
  products = [
    { name: "Product 1", price: "$29.00" },
    { name: "Product 2", price: "$39.00" },
  ],
  variant = "default",
}: ProductListWithRowsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>product-list-rows</MjmlPreview>
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
        <ProductListWithRowsSection
          products={products}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ProductListWithRows.PreviewProps = {
  products: [
    {
      href: "#",
      imageUrl: "https://example.com/p1.jpg",
      name: "Wireless Headphones",
      price: "$129.00",
    },
    {
      href: "#",
      imageUrl: "https://example.com/p2.jpg",
      name: "Leather Wallet",
      price: "$59.00",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies ProductListWithRowsProps;
