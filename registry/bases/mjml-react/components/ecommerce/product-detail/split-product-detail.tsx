import {
  MjmlButton,
  MjmlColumn,
  MjmlDivider,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { defaultTheme } from "@/registry/themes/definitions/default";

type SplitProductDetailVariant =
  | "stacked-left"
  | "stacked-right"
  | "image-left"
  | "image-right"
  | "rating-left"
  | "rating-right"
  | "bleed-left"
  | "bleed-right";

type ProductDetailImageLayout = "single" | "two" | "three" | "masonry";

interface ProductDetailContentOverrides {
  name?: string;
  price?: string;
  description?: string;
  imageUrls?: string[];
  colors?: string[];
  sizes?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

const PRODUCT_ASSET_ROOT =
  "https://emailcn.vercel.app/api/email-assets/product-detail";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const productDetailResponsiveStyles = "";

const detailDefaults: Record<
  ProductDetailImageLayout,
  Required<
    Pick<
      ProductDetailContentOverrides,
      "colors" | "description" | "imageUrls" | "name" | "price" | "sizes"
    >
  >
> = {
  masonry: {
    colors: ["Yellow", "Black"],
    description:
      "A statement piece featuring signature detailing and a bold finish that redefines street luxury.",
    imageUrls: [1, 2, 3, 4].map(
      (index) => `${PRODUCT_ASSET_ROOT}/four-images-${index}.jpg`
    ),
    name: "Off-White™ Air Force 1 - Yellow",
    price: "$249.00",
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  single: {
    colors: ["Black", "White", "Gray"],
    description:
      "A refined everyday essential crafted for comfort, durability, and a clean modern silhouette.",
    imageUrls: [`${PRODUCT_ASSET_ROOT}/single-image.jpg`],
    name: "Minimal Everyday Sneaker",
    price: "$149.00",
    sizes: ["7", "8", "9", "10", "11"],
  },
  three: {
    colors: ["White", "Gray"],
    description:
      "A balanced mix of comfort and statement styling, designed for effortless daily wear.",
    imageUrls: [1, 2, 3].map(
      (index) => `${PRODUCT_ASSET_ROOT}/three-images-${index}.jpg`
    ),
    name: "Signature Runner",
    price: "$219.00",
    sizes: ["7", "8", "9", "10", "11"],
  },
  two: {
    colors: ["Black", "White"],
    description:
      "Premium materials and considered detailing bring a modern finish to this versatile design.",
    imageUrls: [1, 2].map(
      (index) => `${PRODUCT_ASSET_ROOT}/two-images-${index}.jpg`
    ),
    name: "Premium Low Sneaker",
    price: "$189.00",
    sizes: ["7", "8", "9", "10", "11"],
  },
};

const resolveData = (
  layout: ProductDetailImageLayout,
  overrides: ProductDetailContentOverrides
) => {
  const defaults = detailDefaults[layout];
  return {
    ...overrides,
    colors: overrides.colors ?? defaults.colors,
    description: overrides.description ?? defaults.description,
    imageUrls: overrides.imageUrls ?? defaults.imageUrls,
    name: overrides.name ?? defaults.name,
    price: overrides.price ?? defaults.price,
    sizes: overrides.sizes ?? defaults.sizes,
  };
};

const ProductCopy = ({
  ctaHref,
  ctaLabel,
  data,
  showRating = true,
}: {
  ctaHref: string;
  ctaLabel: string;
  data: ReturnType<typeof resolveData>;
  showRating?: boolean;
}) => (
  <>
    {showRating ? (
      <>
        <MjmlText
          color="#f59e0b"
          fontFamily={fontFamily}
          fontSize="18px"
          lineHeight="24px"
          padding="0 0 12px"
        >
          ★ ★ ★ ★ ☆ &nbsp; (18 reviews)
        </MjmlText>
      </>
    ) : null}
    <MjmlText
      color="#030712"
      fontFamily={fontFamily}
      fontSize="24px"
      fontWeight="600"
      lineHeight="32px"
      padding="0"
    >
      {data.name}
    </MjmlText>
    <MjmlText
      color="#030712"
      fontFamily={fontFamily}
      fontSize="20px"
      fontWeight="500"
      lineHeight="28px"
      padding="8px 0 0"
    >
      {data.price}
    </MjmlText>
    <MjmlSpacer height="24px" />
    <MjmlText
      color="#4b5563"
      fontFamily={fontFamily}
      fontSize="16px"
      lineHeight="24px"
      padding="0"
    >
      {data.description}
    </MjmlText>
    <MjmlDivider borderColor="#d1d5db" borderWidth="1px" padding="28px 0 8px" />
    <MjmlText
      color="#4b5563"
      fontFamily={fontFamily}
      fontSize="14px"
      lineHeight="20px"
      padding="0"
    >
      Colors: {data.colors.join(", ")} · Sizes: {data.sizes.join(", ")}
    </MjmlText>
    <MjmlDivider borderColor="#d1d5db" borderWidth="1px" padding="8px 0 28px" />
    <MjmlButton
      align="left"
      backgroundColor="#4f46e5"
      borderRadius="8px"
      color="#fffffe"
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="500"
      href={ctaHref}
      innerPadding="14px 20px"
      lineHeight="16px"
      padding="0"
    >
      {ctaLabel}
    </MjmlButton>
  </>
);

const SplitProductDetailSection = ({
  ctaHref = "https://example.com",
  ctaLabel = "Shop now",
  variant = "stacked-left",
  ...overrides
}: ProductDetailContentOverrides & {
  variant?: SplitProductDetailVariant;
}) => {
  const data = resolveData("single", {
    ...overrides,
    imageUrls: overrides.imageUrls ?? [
      `${PRODUCT_ASSET_ROOT}/split-product.jpg`,
    ],
  });
  const imageRight = variant.endsWith("right");
  const image = (
    <MjmlColumn padding="0" verticalAlign="top" width="50%">
      <MjmlImage
        alt={data.name}
        borderRadius={variant.startsWith("bleed") ? "0" : "8px"}
        padding="0"
        src={data.imageUrls[0]}
      />
      {variant.startsWith("rating") ? (
        <MjmlText
          color="#f59e0b"
          fontFamily={fontFamily}
          fontSize="18px"
          lineHeight="24px"
          padding="24px 0 0"
        >
          ★ ★ ★ ★ ☆ &nbsp; Based on 456 ratings
        </MjmlText>
      ) : null}
    </MjmlColumn>
  );
  const copy = (
    <MjmlColumn
      padding={imageRight ? "0 44px 0 0" : "0 0 0 44px"}
      verticalAlign="top"
      width="50%"
    >
      <ProductCopy
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        data={data}
        showRating={!variant.startsWith("rating")}
      />
    </MjmlColumn>
  );
  return (
    <MjmlSection backgroundColor="#fffffe" padding="44px 24px">
      {imageRight ? copy : image}
      {imageRight ? image : copy}
    </MjmlSection>
  );
};

const ProductDetail_SharedSplitProductDetailSection = SplitProductDetailSection;

interface ProductDetail_SplitProductDetailProps extends Omit<
  ProductDetailContentOverrides,
  "imageUrls"
> {
  theme?: EmailTheme;
  imageUrl?: string;
  imageUrls?: string[];
  features?: string[];
  variant?: SplitProductDetailVariant;
}

const ProductDetail_SplitProductDetailSectionWrapper = ({
  features: _features,
  imageUrl,
  imageUrls,
  variant = "stacked-left",
  ...props
}: Omit<ProductDetail_SplitProductDetailProps, "theme">) => (
  <ProductDetail_SharedSplitProductDetailSection
    {...props}
    imageUrls={imageUrls ?? (imageUrl ? [imageUrl] : undefined)}
    variant={variant}
  />
);

const ProductDetail_SplitProductDetail = ({
  theme = defaultTheme,
  ...props
}: ProductDetail_SplitProductDetailProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Product detail</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{productDetailResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <ProductDetail_SplitProductDetailSectionWrapper {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ProductDetail_SplitProductDetail.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies ProductDetail_SplitProductDetailProps;

const __ProductDetail = ProductDetail_SplitProductDetail;

export interface ProductDetails {
  name?: string;
  price?: string;
  description?: string;
  features?: string[];
  colors?: string[];
  sizes?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface SplitProductDetailProps {
  theme?: Parameters<typeof __ProductDetail>[0]["theme"];
  product?: ProductDetails;
  images?: {
    src: string;
    alt?: string;
  }[];
  treatment?: "stacked" | "side" | "rating" | "bleed";
  placement?: "left" | "right";
}

const splitVariant = (
  treatment: SplitProductDetailProps["treatment"] = "stacked",
  placement: SplitProductDetailProps["placement"] = "left"
) => {
  if (treatment === "bleed") {
    return `bleed-${placement}` as const;
  }
  if (treatment === "rating") {
    return `rating-${placement}` as const;
  }
  if (treatment === "side") {
    return `image-${placement}` as const;
  }
  return `stacked-${placement}` as const;
};

export const SplitProductDetail = ({
  theme,
  product,
  images,
  treatment,
  placement,
}: SplitProductDetailProps) => (
  <__ProductDetail
    colors={product?.colors}
    ctaHref={product?.ctaHref}
    ctaLabel={product?.ctaLabel}
    description={product?.description}
    features={product?.features}
    imageUrl={images?.[0]?.src}
    imageUrls={images?.map(({ src }) => src)}
    variant={splitVariant(treatment, placement)}
    name={product?.name}
    price={product?.price}
    sizes={product?.sizes}
    theme={theme}
  />
);

SplitProductDetail.PreviewProps = {
  placement: "left",
  treatment: "stacked",
} satisfies SplitProductDetailProps;
