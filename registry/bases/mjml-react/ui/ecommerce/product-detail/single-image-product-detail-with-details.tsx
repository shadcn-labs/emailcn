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

export type SingleImageProductDetailVariant = Exclude<
  ProductDetailWithDetailsVariant,
  "default"
>;

export interface SingleImageProductDetailProps extends Omit<
  ProductDetailContentOverrides,
  "imageUrls"
> {
  theme?: EmailThemeTokens;
  imageUrl?: string;
  features?: string[];
  variant?: SingleImageProductDetailVariant;
}

export const SingleImageProductDetailSection = ({
  features: _features,
  imageUrl,
  variant = "rating-bottom",
  ...props
}: Omit<SingleImageProductDetailProps, "theme">) => (
  <ProductDetailWithDetailsSection
    {...props}
    imageUrls={imageUrl ? [imageUrl] : undefined}
    layout="single"
    variant={variant}
  />
);

export const SingleImageProductDetail = ({
  theme = defaultTheme,
  ...props
}: SingleImageProductDetailProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Product detail</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{productDetailResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <SingleImageProductDetailSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

SingleImageProductDetail.PreviewProps = {
  theme: defaultTheme,
  variant: "rating-bottom",
} satisfies SingleImageProductDetailProps;
