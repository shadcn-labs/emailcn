import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
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

export type ProductDetailTwoImagesVariant = Exclude<
  ProductDetailWithDetailsVariant,
  "default"
>;

export interface ProductDetailTwoImagesProps extends Omit<
  ProductDetailContentOverrides,
  "imageUrls"
> {
  theme?: EmailThemeTokens;
  imageUrl1?: string;
  imageUrl2?: string;
  features?: string[];
  variant?: ProductDetailTwoImagesVariant;
}

export const ProductDetailTwoImagesSection = ({
  features: _features,
  imageUrl1,
  imageUrl2,
  variant = "rating-bottom",
  ...props
}: Omit<ProductDetailTwoImagesProps, "theme">) => (
  <ProductDetailWithDetailsSection
    {...props}
    imageUrls={imageUrl1 && imageUrl2 ? [imageUrl1, imageUrl2] : undefined}
    layout="two"
    variant={variant}
  />
);

export const ProductDetailTwoImages = ({
  theme = defaultTheme,
  ...props
}: ProductDetailTwoImagesProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Product detail</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{productDetailResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <div style={{ textAlign: "left" }}>
            <ProductDetailTwoImagesSection {...props} />
          </div>
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ProductDetailTwoImages.PreviewProps = {
  theme: defaultTheme,
  variant: "rating-bottom",
} satisfies ProductDetailTwoImagesProps;
