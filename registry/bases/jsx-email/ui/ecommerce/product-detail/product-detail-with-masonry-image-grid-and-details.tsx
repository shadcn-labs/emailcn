import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { ProductDetailWithDetailsSection } from "@/registry/bases/jsx-email/ui/ecommerce/product-detail/product-detail-shared";
import type {
  ProductDetailContentOverrides,
  ProductDetailWithDetailsVariant,
} from "@/registry/bases/jsx-email/ui/ecommerce/product-detail/product-detail-shared";

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
  theme: _theme = defaultTheme,
  ...props
}: ProductDetailMasonryProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Product detail</Preview>
    <Body style={{ margin: 0 }}>
      <ProductDetailMasonrySection {...props} />
    </Body>
  </Html>
);

ProductDetailMasonry.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies ProductDetailMasonryProps;
