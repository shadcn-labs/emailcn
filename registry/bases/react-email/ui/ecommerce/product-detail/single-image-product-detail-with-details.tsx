import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { ProductDetailWithDetailsSection } from "@/registry/bases/react-email/ui/ecommerce/product-detail/product-detail-shared";
import type {
  ProductDetailContentOverrides,
  ProductDetailWithDetailsVariant,
} from "@/registry/bases/react-email/ui/ecommerce/product-detail/product-detail-shared";

export type SingleImageProductDetailVariant = Exclude<
  ProductDetailWithDetailsVariant,
  "default"
>;

export interface SingleImageProductDetailProps extends Omit<
  ProductDetailContentOverrides,
  "imageUrls"
> {
  theme?: TailwindConfig;
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
  theme = defaultTheme,
  ...props
}: SingleImageProductDetailProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Product detail</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <SingleImageProductDetailSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

SingleImageProductDetail.PreviewProps = {
  theme: defaultTheme,
  variant: "rating-bottom",
} satisfies SingleImageProductDetailProps;
