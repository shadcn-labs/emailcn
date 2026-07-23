import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { ProductDetailWithDetailsSection } from "@/registry/bases/jsx-email/ui/ecommerce/product-detail/product-detail-shared";
import type {
  ProductDetailContentOverrides,
  ProductDetailWithDetailsVariant,
} from "@/registry/bases/jsx-email/ui/ecommerce/product-detail/product-detail-shared";

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
  theme: _theme = defaultTheme,
  ...props
}: SingleImageProductDetailProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Product detail</Preview>
    <Body style={{ margin: 0 }}>
      <SingleImageProductDetailSection {...props} />
    </Body>
  </Html>
);

SingleImageProductDetail.PreviewProps = {
  theme: defaultTheme,
  variant: "rating-bottom",
} satisfies SingleImageProductDetailProps;
