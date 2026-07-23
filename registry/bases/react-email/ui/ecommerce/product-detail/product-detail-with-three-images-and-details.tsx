import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { ProductDetailWithDetailsSection } from "@/registry/bases/react-email/ui/ecommerce/product-detail/product-detail-shared";
import type {
  ProductDetailContentOverrides,
  ProductDetailWithDetailsVariant,
} from "@/registry/bases/react-email/ui/ecommerce/product-detail/product-detail-shared";

export type ProductDetailThreeImagesVariant = Exclude<
  ProductDetailWithDetailsVariant,
  "rating-bottom"
>;

export interface ProductDetailThreeImagesProps extends Omit<
  ProductDetailContentOverrides,
  "imageUrls"
> {
  theme?: TailwindConfig;
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
  theme = defaultTheme,
  ...props
}: ProductDetailThreeImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Product detail</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ProductDetailThreeImagesSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

ProductDetailThreeImages.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies ProductDetailThreeImagesProps;
