import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";

import {
  ProductDetailWithDetailsSection,
  productDetailResponsiveStyles,
} from "@/registry/bases/mjml-react/components/ecommerce/product-detail/product-detail-shared";
import type {
  ProductDetailContentOverrides,
  ProductDetailWithDetailsVariant,
} from "@/registry/bases/mjml-react/components/ecommerce/product-detail/product-detail-shared";
import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { defaultTheme } from "@/registry/themes/default";

interface TwoImageProductDetailComponentProps extends ProductDetailContentOverrides {
  features?: string[];
  theme?: EmailTheme;
  variant?: Exclude<ProductDetailWithDetailsVariant, "default">;
}

const TwoImageProductDetailEmail = ({
  features: _features,
  theme = defaultTheme,
  variant = "rating-bottom",
  ...props
}: TwoImageProductDetailComponentProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Product detail</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{productDetailResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <ProductDetailWithDetailsSection
          {...props}
          layout="two"
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

export interface ProductDetails {
  colors?: string[];
  ctaHref?: string;
  ctaLabel?: string;
  description?: string;
  features?: string[];
  name?: string;
  price?: string;
  sizes?: string[];
}

export interface TwoImageProductDetailProps {
  headerPosition?: "default" | "top";
  images?: {
    alt?: string;
    src: string;
  }[];
  product?: ProductDetails;
  ratingPosition?: "top" | "bottom" | "aside";
  theme?: Parameters<typeof TwoImageProductDetailEmail>[0]["theme"];
}

const detailVariant = (
  ratingPosition: TwoImageProductDetailProps["ratingPosition"] = "bottom",
  headerPosition: TwoImageProductDetailProps["headerPosition"] = "default"
) => {
  if (headerPosition === "top" && ratingPosition === "aside") {
    return "rating-aside-top" as const;
  }
  if (headerPosition === "top") {
    return "header-top" as const;
  }
  if (ratingPosition === "top") {
    return "rating-top" as const;
  }
  if (ratingPosition === "aside") {
    return "rating-aside" as const;
  }
  return "rating-bottom" as const;
};

export const TwoImageProductDetail = ({
  headerPosition,
  images,
  product,
  ratingPosition,
  theme,
}: TwoImageProductDetailProps) => (
  <TwoImageProductDetailEmail
    colors={product?.colors}
    ctaHref={product?.ctaHref}
    ctaLabel={product?.ctaLabel}
    description={product?.description}
    features={product?.features}
    imageUrls={images?.map(({ src }) => src)}
    name={product?.name}
    price={product?.price}
    sizes={product?.sizes}
    theme={theme}
    variant={detailVariant(ratingPosition, headerPosition)}
  />
);

TwoImageProductDetail.PreviewProps = {} satisfies TwoImageProductDetailProps;
