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
  SplitProductDetailSection as SharedSplitProductDetailSection,
} from "@/registry/bases/mjml-react/ui/ecommerce/product-detail/product-detail-shared";
import type {
  ProductDetailContentOverrides,
  SplitProductDetailVariant,
} from "@/registry/bases/mjml-react/ui/ecommerce/product-detail/product-detail-shared";

export interface SplitProductDetailProps extends Omit<
  ProductDetailContentOverrides,
  "imageUrls"
> {
  theme?: EmailThemeTokens;
  imageUrl?: string;
  imageUrls?: string[];
  features?: string[];
  variant?: SplitProductDetailVariant;
}

export const SplitProductDetailSection = ({
  features: _features,
  imageUrl,
  imageUrls,
  variant = "stacked-left",
  ...props
}: Omit<SplitProductDetailProps, "theme">) => (
  <SharedSplitProductDetailSection
    {...props}
    imageUrls={imageUrls ?? (imageUrl ? [imageUrl] : undefined)}
    variant={variant}
  />
);

export const SplitProductDetail = ({
  theme = defaultTheme,
  ...props
}: SplitProductDetailProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Product detail</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{productDetailResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <SplitProductDetailSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

SplitProductDetail.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies SplitProductDetailProps;
