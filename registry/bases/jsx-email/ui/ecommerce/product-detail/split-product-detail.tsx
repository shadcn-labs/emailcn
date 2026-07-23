import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { SplitProductDetailSection as SharedSplitProductDetailSection } from "@/registry/bases/jsx-email/ui/ecommerce/product-detail/product-detail-shared";
import type {
  ProductDetailContentOverrides,
  SplitProductDetailVariant,
} from "@/registry/bases/jsx-email/ui/ecommerce/product-detail/product-detail-shared";

export interface SplitProductDetailProps extends Omit<
  ProductDetailContentOverrides,
  "imageUrls"
> {
  theme?: EmailThemeTokens;
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
  theme: _theme = defaultTheme,
  ...props
}: SplitProductDetailProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Product detail</Preview>
    <Body style={{ margin: 0 }}>
      <SplitProductDetailSection {...props} />
    </Body>
  </Html>
);

SplitProductDetail.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies SplitProductDetailProps;
