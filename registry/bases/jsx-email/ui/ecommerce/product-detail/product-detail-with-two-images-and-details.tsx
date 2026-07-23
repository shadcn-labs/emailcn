import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { ProductDetailWithDetailsSection } from "@/registry/bases/jsx-email/ui/ecommerce/product-detail/product-detail-shared";
import type {
  ProductDetailContentOverrides,
  ProductDetailWithDetailsVariant,
} from "@/registry/bases/jsx-email/ui/ecommerce/product-detail/product-detail-shared";

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
  theme: _theme = defaultTheme,
  ...props
}: ProductDetailTwoImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Product detail</Preview>
    <Body style={{ margin: 0 }}>
      <ProductDetailTwoImagesSection {...props} />
    </Body>
  </Html>
);

ProductDetailTwoImages.PreviewProps = {
  theme: defaultTheme,
  variant: "rating-bottom",
} satisfies ProductDetailTwoImagesProps;
