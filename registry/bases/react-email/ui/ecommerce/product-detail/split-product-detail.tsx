import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { SplitProductDetailSection as SharedSplitProductDetailSection } from "@/registry/bases/react-email/ui/ecommerce/product-detail/product-detail-shared";
import type {
  ProductDetailContentOverrides,
  SplitProductDetailVariant,
} from "@/registry/bases/react-email/ui/ecommerce/product-detail/product-detail-shared";

export interface SplitProductDetailProps extends Omit<
  ProductDetailContentOverrides,
  "imageUrls"
> {
  theme?: TailwindConfig;
  imageUrl?: string;
  imageUrls?: string[];
  features?: string[];
  variant?: SplitProductDetailVariant;
}

export const SplitProductDetailSection = ({
  features: _features,
  imageUrl,
  imageUrls,
  variant = "stacked-left",
  ...props
}: Omit<SplitProductDetailProps, "theme">) => (
  <SharedSplitProductDetailSection
    {...props}
    imageUrls={imageUrls ?? (imageUrl ? [imageUrl] : undefined)}
    variant={variant}
  />
);

export const SplitProductDetail = ({
  theme = defaultTheme,
  ...props
}: SplitProductDetailProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Product detail</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <SplitProductDetailSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

SplitProductDetail.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies SplitProductDetailProps;
