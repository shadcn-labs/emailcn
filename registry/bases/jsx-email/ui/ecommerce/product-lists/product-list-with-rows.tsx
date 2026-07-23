import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { ProductListWithRowsSection as SharedProductListWithRowsSection } from "@/registry/bases/jsx-email/ui/ecommerce/product-lists/product-list-with-rows-shared";
import type {
  ProductListItem,
  ProductListWithRowsVariant,
} from "@/registry/bases/jsx-email/ui/ecommerce/product-lists/product-list-with-rows-shared";

export interface ProductListWithRowsProps {
  theme?: EmailThemeTokens;
  products?: ProductListItem[];
  variant?: ProductListWithRowsVariant;
}

export const ProductListWithRowsSection = ({
  products,
  variant = "basic",
}: Omit<ProductListWithRowsProps, "theme">) => (
  <SharedProductListWithRowsSection products={products} variant={variant} />
);

export const ProductListWithRows = ({
  theme: _theme = defaultTheme,
  ...props
}: ProductListWithRowsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Product list</Preview>
    <Body style={{ margin: 0 }}>
      <ProductListWithRowsSection {...props} />
    </Body>
  </Html>
);

ProductListWithRows.PreviewProps = {
  theme: defaultTheme,
  variant: "basic",
} satisfies ProductListWithRowsProps;
