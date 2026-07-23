import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  productListResponsiveStyles,
  ProductListWithRowsSection as SharedProductListWithRowsSection,
} from "@/registry/bases/mjml-react/ui/ecommerce/product-lists/product-list-with-rows-shared";
import type {
  ProductListItem,
  ProductListWithRowsVariant,
} from "@/registry/bases/mjml-react/ui/ecommerce/product-lists/product-list-with-rows-shared";

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
  theme = defaultTheme,
  ...props
}: ProductListWithRowsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Product list</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{productListResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <ProductListWithRowsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ProductListWithRows.PreviewProps = {
  theme: defaultTheme,
  variant: "basic",
} satisfies ProductListWithRowsProps;
