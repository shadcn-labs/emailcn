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
  productDetailResponsiveStyles,
  SplitProductDetailSection as SharedSplitProductDetailSection,
} from "@/registry/bases/mjml-react/components/ecommerce/product-detail/product-detail-shared";
import type {
  ProductDetailContentOverrides,
  SplitProductDetailVariant,
} from "@/registry/bases/mjml-react/components/ecommerce/product-detail/product-detail-shared";
import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { defaultTheme } from "@/registry/themes/default";

interface SplitProductDetailComponentProps extends Omit<
  ProductDetailContentOverrides,
  "imageUrls"
> {
  features?: string[];
  imageUrl?: string;
  imageUrls?: string[];
  theme?: EmailTheme;
  variant?: SplitProductDetailVariant;
}

const SplitProductDetailSection = ({
  features: _features,
  imageUrl,
  imageUrls,
  variant = "stacked-left",
  ...props
}: Omit<SplitProductDetailComponentProps, "theme">) => (
  <SharedSplitProductDetailSection
    {...props}
    imageUrls={imageUrls ?? (imageUrl ? [imageUrl] : undefined)}
    variant={variant}
  />
);

const SplitProductDetailEmail = ({
  theme = defaultTheme,
  ...props
}: SplitProductDetailComponentProps) => (
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

export interface SplitProductDetailProps {
  images?: {
    alt?: string;
    src: string;
  }[];
  placement?: "left" | "right";
  product?: ProductDetails;
  theme?: Parameters<typeof SplitProductDetailEmail>[0]["theme"];
  treatment?: "stacked" | "side" | "rating" | "bleed";
}

const splitVariant = (
  treatment: SplitProductDetailProps["treatment"] = "stacked",
  placement: SplitProductDetailProps["placement"] = "left"
) => {
  if (treatment === "bleed") {
    return `bleed-${placement}` as const;
  }
  if (treatment === "rating") {
    return `rating-${placement}` as const;
  }
  if (treatment === "side") {
    return `image-${placement}` as const;
  }
  return `stacked-${placement}` as const;
};

export const SplitProductDetail = ({
  images,
  placement,
  product,
  theme,
  treatment,
}: SplitProductDetailProps) => (
  <SplitProductDetailEmail
    colors={product?.colors}
    ctaHref={product?.ctaHref}
    ctaLabel={product?.ctaLabel}
    description={product?.description}
    features={product?.features}
    imageUrl={images?.[0]?.src}
    imageUrls={images?.map(({ src }) => src)}
    name={product?.name}
    price={product?.price}
    sizes={product?.sizes}
    theme={theme}
    variant={splitVariant(treatment, placement)}
  />
);

SplitProductDetail.PreviewProps = {
  placement: "left",
  treatment: "stacked",
} satisfies SplitProductDetailProps;
