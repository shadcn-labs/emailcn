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
  productDetailResponsiveStyles,
  ProductDetailWithDetailsSection,
} from "@/registry/bases/mjml-react/ui/ecommerce/product-detail/product-detail-shared";
import type {
  ProductDetailContentOverrides,
  ProductDetailWithDetailsVariant,
} from "@/registry/bases/mjml-react/ui/ecommerce/product-detail/product-detail-shared";

export type ProductDetailMasonryVariant = Exclude<
  ProductDetailWithDetailsVariant,
  "rating-bottom"
>;

export interface ProductDetailMasonryProps extends Omit<
  ProductDetailContentOverrides,
  "imageUrls"
> {
  theme?: EmailThemeTokens;
  images?: string[];
  features?: string[];
  variant?: ProductDetailMasonryVariant;
}

export const ProductDetailMasonrySection = ({
  features: _features,
  images,
  variant = "default",
  ...props
}: Omit<ProductDetailMasonryProps, "theme">) => (
  <ProductDetailWithDetailsSection
    {...props}
    imageUrls={images?.length === 4 ? images : undefined}
    layout="masonry"
    variant={variant}
  />
);

export const ProductDetailMasonry = ({
  theme = defaultTheme,
  ...props
}: ProductDetailMasonryProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Product detail</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{productDetailResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <ProductDetailMasonrySection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ProductDetailMasonry.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies ProductDetailMasonryProps;
