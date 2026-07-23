import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { ProductDetailWithDetailsSection } from "@/registry/bases/jsx-email/ui/ecommerce/product-detail/product-detail-shared";
import type {
  ProductDetailContentOverrides,
  ProductDetailWithDetailsVariant,
} from "@/registry/bases/jsx-email/ui/ecommerce/product-detail/product-detail-shared";

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
  theme: _theme = defaultTheme,
  ...props
}: ProductDetailThreeImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Product detail</Preview>
    <Body style={{ margin: 0 }}>
      <ProductDetailThreeImagesSection {...props} />
    </Body>
  </Html>
);

ProductDetailThreeImages.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies ProductDetailThreeImagesProps;
