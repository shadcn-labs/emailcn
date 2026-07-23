import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { ProductListWithRowsSection as SharedProductListWithRowsSection } from "@/registry/bases/react-email/ui/ecommerce/product-lists/product-list-with-rows-shared";
import type {
  ProductListItem,
  ProductListWithRowsVariant,
} from "@/registry/bases/react-email/ui/ecommerce/product-lists/product-list-with-rows-shared";

export interface ProductListWithRowsProps {
  theme?: TailwindConfig;
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
  theme = defaultTheme,
  ...props
}: ProductListWithRowsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Product list</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ProductListWithRowsSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

ProductListWithRows.PreviewProps = {
  theme: defaultTheme,
  variant: "basic",
} satisfies ProductListWithRowsProps;
