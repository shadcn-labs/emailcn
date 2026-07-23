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

export type ProductDetailThreeImagesVariant = Exclude<
  ProductDetailWithDetailsVariant,
  "rating-bottom"
>;

export interface ProductDetailThreeImagesProps extends Omit<
  ProductDetailContentOverrides,
  "imageUrls"
> {
  theme?: EmailThemeTokens;
  imageUrl1?: string;
  imageUrl2?: string;
  imageUrl3?: string;
  features?: string[];
  variant?: ProductDetailThreeImagesVariant;
}

export const ProductDetailThreeImagesSection = ({
  features: _features,
  imageUrl1,
  imageUrl2,
  imageUrl3,
  variant = "default",
  ...props
}: Omit<ProductDetailThreeImagesProps, "theme">) => (
  <ProductDetailWithDetailsSection
    {...props}
    imageUrls={
      imageUrl1 && imageUrl2 && imageUrl3
        ? [imageUrl1, imageUrl2, imageUrl3]
        : undefined
    }
    layout="three"
    variant={variant}
  />
);

export const ProductDetailThreeImages = ({
  theme = defaultTheme,
  ...props
}: ProductDetailThreeImagesProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Product detail</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{productDetailResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <ProductDetailThreeImagesSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ProductDetailThreeImages.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies ProductDetailThreeImagesProps;
