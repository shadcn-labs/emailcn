import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { ProductDetailWithDetailsSection } from "@/registry/bases/react-email/ui/ecommerce/product-detail/product-detail-shared";
import type {
  ProductDetailContentOverrides,
  ProductDetailWithDetailsVariant,
} from "@/registry/bases/react-email/ui/ecommerce/product-detail/product-detail-shared";

export type ProductDetailTwoImagesVariant = Exclude<
  ProductDetailWithDetailsVariant,
  "default"
>;

export interface ProductDetailTwoImagesProps extends Omit<
  ProductDetailContentOverrides,
  "imageUrls"
> {
  theme?: TailwindConfig;
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
  theme = defaultTheme,
  ...props
}: ProductDetailTwoImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Product detail</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ProductDetailTwoImagesSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

ProductDetailTwoImages.PreviewProps = {
  theme: defaultTheme,
  variant: "rating-bottom",
} satisfies ProductDetailTwoImagesProps;
