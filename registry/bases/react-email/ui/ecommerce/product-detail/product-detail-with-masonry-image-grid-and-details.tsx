import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { ProductDetailWithDetailsSection } from "@/registry/bases/react-email/ui/ecommerce/product-detail/product-detail-shared";
import type {
  ProductDetailContentOverrides,
  ProductDetailWithDetailsVariant,
} from "@/registry/bases/react-email/ui/ecommerce/product-detail/product-detail-shared";

export type ProductDetailMasonryVariant = Exclude<
  ProductDetailWithDetailsVariant,
  "rating-bottom"
>;

export interface ProductDetailMasonryProps extends Omit<
  ProductDetailContentOverrides,
  "imageUrls"
> {
  theme?: TailwindConfig;
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
  theme = defaultTheme,
  ...props
}: ProductDetailMasonryProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Product detail</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ProductDetailMasonrySection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

ProductDetailMasonry.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies ProductDetailMasonryProps;
