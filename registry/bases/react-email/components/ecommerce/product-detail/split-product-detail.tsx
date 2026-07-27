import { Fragment } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link,
  Img,
  Body,
  Head as EmailHead,
  Html,
  Preview,
  Tailwind,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/react-email/themes/theme-default";

type SplitProductDetailVariant =
  | "stacked-left"
  | "stacked-right"
  | "image-left"
  | "image-right"
  | "rating-left"
  | "rating-right"
  | "bleed-left"
  | "bleed-right";

type RatingIcon = "solid" | "half" | "outline";

type SplitProductKind = "stacked" | "image" | "rating" | "bleed";

interface ProductDetailData {
  name: string;
  price: string;
  description: string;
  imageUrls: string[];
  colors: string[];
  sizes: string[];
  ratingIcons: RatingIcon[];
}

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

const ASSET_ROOT = "https://emailcn.vercel.app/api/email-assets";

const PRODUCT_ASSET_ROOT = `${ASSET_ROOT}/product-detail`;

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const productDetailResponsiveStyles = `
  @media only screen and (max-width: 599px) {
    .product-split-stack { display: block !important; width: 100% !important; }
    .product-split-mobile-footer { display: table-footer-group !important; width: 100% !important; }
    .product-split-mobile-header { display: table-header-group !important; width: 100% !important; }
    .product-stacked-image { display: table-cell !important; width: auto !important; }
    .product-stacked-gap { display: table-cell !important; width: 24px !important; }
    .product-three-column { display: block !important; width: 100% !important; }
    .product-three-secondary { display: flex !important; width: 100% !important; }
    .product-three-secondary-item { display: inline-block !important; }
    .product-three-gap { display: inline-block !important; width: 24px !important; }
    .product-three-secondary-image { aspect-ratio: 1 / 1 !important; object-fit: cover !important; width: 100% !important; }
    .product-responsive-image { width: 100% !important; }
    .product-bleed-copy { padding-left: 24px !important; padding-right: 24px !important; }
  }
  @media only screen and (max-width: 430px) {
    .product-stacked-image { display: block !important; width: 100% !important; }
    .product-stacked-gap { display: block !important; width: 100% !important; }
    .product-detail-column { display: block !important; width: 100% !important; }
    .product-desktop-image { display: none !important; }
    .product-mobile-image { display: block !important; width: 100% !important; }
    .product-aside-column { display: block !important; width: 100% !important; }
    .product-aside-copy { padding-right: 0 !important; }
    .product-aside-rating { padding-top: 12px !important; }
    .product-aside-inline-review { display: table-cell !important; }
    .product-aside-block-review { display: none !important; }
    .product-masonry-desktop { display: none !important; }
    .product-masonry-mobile { display: block !important; width: 100% !important; }
    .product-detail-option { display: inline-block !important; }
  }
`;

const textStyle = { fontFamily, margin: 0 } as const;

const getSplitProductKind = (
  variant: SplitProductDetailVariant
): SplitProductKind => {
  if (variant.startsWith("stacked")) {
    return "stacked";
  }
  if (variant.startsWith("rating")) {
    return "rating";
  }
  if (variant.startsWith("bleed")) {
    return "bleed";
  }
  return "image";
};

const getSplitImageRadius = (
  kind: SplitProductKind,
  side: "left" | "right"
) => {
  if (kind !== "bleed") {
    return "4px";
  }
  return side === "left" ? "0 4px 4px 0" : "4px 0 0 4px";
};

const getBleedCopyStyle = (
  isBleed: boolean,
  side: "left" | "right"
): CSSProperties | undefined => {
  if (!isBleed) {
    return undefined;
  }
  return side === "left" ? { padding: "0 24px" } : { paddingRight: "24px" };
};

const getSplitShellPadding = (isBleed: boolean, side: "left" | "right") => {
  if (!isBleed) {
    return "0 24px";
  }
  return side === "left" ? "0 24px 0 0" : "0 0 0 24px";
};

const Spacer = ({
  className,
  height,
}: {
  className?: string;
  height: number;
}) => (
  <Section className={className} style={{ lineHeight: `${height}px` }}>
    &zwj;
  </Section>
);

const EmailShell = ({
  children,
  padding = "0 24px",
}: {
  children: ReactNode;
  padding?: string;
}) => (
  <>
    <style>{productDetailResponsiveStyles}</style>
    <Section style={{ backgroundColor: "#f1f5f9", width: "100%" }}>
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: "#fffffe",
              maxWidth: "100%",
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            <Section style={{ width: "100%" }}>
              <Fragment>
                <Row>
                  <Column style={{ padding }}>
                    <Spacer height={44} />
                    {children}
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  </>
);

const ProductHeader = ({ name, price }: { name: string; price: string }) => (
  <>
    <Heading
      style={{
        ...textStyle,
        color: "#030712",
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "28px",
      }}
      as="h2"
    >
      {name}
    </Heading>
    <Spacer height={12} />
    <Text
      style={{
        ...textStyle,
        color: "#030712",
        fontSize: "30px",
        lineHeight: "36px",
      }}
    >
      {price}
    </Text>
  </>
);

const Description = ({ children }: { children: ReactNode }) => (
  <Text
    style={{
      ...textStyle,
      color: "#4b5563",
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: "24px",
    }}
  >
    {children}
  </Text>
);

const Star = ({ icon }: { icon: RatingIcon }) => (
  <Column style={{ paddingRight: "4px" }}>
    <Img
      alt=""
      src={`${ASSET_ROOT}/icon-star-${icon}.png`}
      style={{ display: "block" }}
      width="16"
    />
  </Column>
);

const Stars = ({ icons }: { icons: RatingIcon[] }) => (
  <Section>
    <Fragment>
      <Row>
        {icons.map((icon, index) => (
          <Star icon={icon} key={`${icon}-${index}`} />
        ))}
      </Row>
    </Fragment>
  </Section>
);

const Rating = ({
  icons,
  reviewLabel = "(18 reviews)",
}: {
  icons: RatingIcon[];
  reviewLabel?: string;
}) => (
  <Section>
    <Fragment>
      <Row>
        {icons.map((icon, index) => (
          <Star icon={icon} key={`${icon}-${index}`} />
        ))}
        <Column style={{ fontSize: 0, paddingLeft: "4px" }}>
          <span
            style={{
              color: "#4b5563",
              display: "inline-block",
              fontFamily,
              fontSize: "12px",
              lineHeight: "16px",
            }}
          >
            {reviewLabel}
          </span>
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const CallToAction = ({ href, label }: { href: string; label: string }) => (
  <Section>
    <Link
      href={href}
      style={{
        backgroundColor: "#4f46e5",
        borderRadius: "8px",
        color: "#fffffe",
        display: "inline-block",
        fontFamily,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: 1,
        padding: "14px 20px",
        textDecoration: "none",
      }}
    >
      <span style={{ marginRight: "8px" }}>{label}</span>
      <span>
        <Img
          alt=""
          src={`${ASSET_ROOT}/icon-arrow-right.png`}
          style={{ maxWidth: "100%", verticalAlign: "baseline" }}
          width="12"
        />
      </span>
    </Link>
  </Section>
);

const ProductImage = ({
  borderRadius = "4px",
  className,
  href,
  src,
  style,
  width,
}: {
  borderRadius?: string;
  className?: string;
  href?: string;
  src: string;
  style?: CSSProperties;
  width: number;
}) => {
  const image = (
    <Img
      alt=""
      className={className}
      src={src}
      style={{
        borderRadius,
        maxWidth: "100%",
        verticalAlign: "middle",
        ...style,
      }}
      width={width}
    />
  );
  return href ? <Link href={href}>{image}</Link> : image;
};

const splitData = (variant: SplitProductDetailVariant): ProductDetailData => {
  if (variant.startsWith("stacked")) {
    return {
      colors: [],
      description:
        "A statement piece from the iconic collaboration between Off-White™ and Nike. Featuring signature zip-tie detailing and industrial text graphics.",
      imageUrls: [
        `${PRODUCT_ASSET_ROOT}/stacked-1.jpg`,
        `${PRODUCT_ASSET_ROOT}/${variant === "stacked-left" ? "stacked-2" : "stacked-3"}.jpg`,
      ],
      name: "Off-White™ Air Force 1 - Yellow",
      price: "$240",
      ratingIcons:
        variant === "stacked-left"
          ? ["solid", "solid", "solid", "solid", "half"]
          : ["solid", "solid", "solid", "solid", "outline"],
      sizes: [],
    };
  }
  if (variant.startsWith("bleed")) {
    return {
      colors: [],
      description:
        "Inspired by Vietnamese heritage, this premium cotton tee blends minimalist design with cultural typography. Soft, breathable, and built for everyday comfort.",
      imageUrls: [`${PRODUCT_ASSET_ROOT}/single-portrait-bleed.jpg`],
      name: "Omakase - Tay Sơn Graphic Tee",
      price: "$39.99",
      ratingIcons: ["solid", "solid", "solid", "half", "outline"],
      sizes: [],
    };
  }
  return {
    colors: [],
    description:
      "Made from a bamboo-linen blend, this shirt is breathable, eco-friendly, and effortlessly refined for everyday wear. Hand made in France.",
    imageUrls: [
      `${PRODUCT_ASSET_ROOT}/${variant.startsWith("rating") ? "rating-below" : "single-portrait"}.jpg`,
    ],
    name: "Hand-made Bio Bamboo Shirt",
    price: "$59.99",
    ratingIcons: ["solid", "solid", "solid", "solid", "outline"],
    sizes: [],
  };
};

const mergeData = (
  data: ProductDetailData,
  overrides: ProductDetailContentOverrides
): ProductDetailData => ({
  ...data,
  colors: overrides.colors ?? data.colors,
  description: overrides.description ?? data.description,
  imageUrls: overrides.imageUrls ?? data.imageUrls,
  name: overrides.name ?? data.name,
  price: overrides.price ?? data.price,
  sizes: overrides.sizes ?? data.sizes,
});

const SplitCopy = ({
  ctaHref,
  ctaLabel,
  data,
  showRating = true,
}: {
  ctaHref: string;
  ctaLabel: string;
  data: ProductDetailData;
  showRating?: boolean;
}) => (
  <>
    <ProductHeader name={data.name} price={data.price} />
    <Spacer height={44} />
    <Description>{data.description}</Description>
    {showRating ? (
      <>
        <Spacer height={28} />
        <Rating icons={data.ratingIcons} />
      </>
    ) : null}
    <Spacer height={28} />
    <CallToAction href={ctaHref} label={ctaLabel} />
  </>
);

const StackedImages = ({ imageUrls }: { imageUrls: string[] }) => (
  <>
    <Section className="product-stacked-image">
      <ProductImage
        className="product-responsive-image"
        href="https://example.com"
        src={imageUrls[0]}
        style={{ width: "100%" }}
        width={254}
      />
    </Section>
    <Spacer className="product-stacked-gap" height={26} />
    <Section className="product-stacked-image">
      <ProductImage
        className="product-responsive-image"
        href="https://example.com"
        src={imageUrls[1]}
        style={{ width: "100%" }}
        width={254}
      />
    </Section>
  </>
);

const SplitImageColumn = ({
  data,
  kind,
  side,
}: {
  data: ProductDetailData;
  kind: SplitProductKind;
  side: "left" | "right";
}) => {
  if (kind === "stacked") {
    return <StackedImages imageUrls={data.imageUrls} />;
  }
  return (
    <>
      <ProductImage
        borderRadius={getSplitImageRadius(kind, side)}
        className="product-responsive-image"
        href="https://example.com"
        src={data.imageUrls[0]}
        style={{ width: "100%" }}
        width={kind === "bleed" ? 266 : 254}
      />
      {kind === "rating" ? (
        <>
          <Spacer height={24} />
          <Stars icons={data.ratingIcons} />
          <Spacer height={12} />
          <Text
            style={{
              ...textStyle,
              color: "#030712",
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: "16px",
            }}
          >
            Based on 456 ratings
          </Text>
        </>
      ) : null}
    </>
  );
};

const SplitProductDetailSection = ({
  ctaHref = "https://example.com",
  ctaLabel = "Shop now",
  variant = "stacked-left",
  ...overrides
}: ProductDetailContentOverrides & {
  variant?: SplitProductDetailVariant;
}) => {
  const data = mergeData(splitData(variant), overrides);
  const side = variant.endsWith("right") ? "right" : "left";
  const kind = getSplitProductKind(variant);
  const isBleed = kind === "bleed";
  const imageCell = (
    <Column
      className={
        side === "left" ? "product-split-stack" : "product-split-mobile-header"
      }
      style={{ verticalAlign: "top", width: isBleed ? "266px" : "254px" }}
    >
      <SplitImageColumn data={data} kind={kind} side={side} />
    </Column>
  );
  const copyCell = (
    <Column
      className={
        side === "left" ? "product-split-stack" : "product-split-mobile-footer"
      }
      style={{ verticalAlign: "top", width: isBleed ? "266px" : "254px" }}
    >
      <Section
        className={isBleed ? "product-bleed-copy" : undefined}
        style={getBleedCopyStyle(isBleed, side)}
      >
        <SplitCopy
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          data={data}
          showRating={kind !== "rating"}
        />
      </Section>
    </Column>
  );
  const gapCell = (
    <Column
      className={
        side === "left" ? "product-split-stack" : "product-split-mobile-footer"
      }
      style={{ lineHeight: "24px", width: "44px" }}
    >
      &zwj;
    </Column>
  );
  return (
    <EmailShell padding={getSplitShellPadding(isBleed, side)}>
      <Section style={{ width: "100%" }}>
        <Fragment>
          <Row>
            {side === "left" ? imageCell : copyCell}
            {gapCell}
            {side === "left" ? copyCell : imageCell}
          </Row>
        </Fragment>
      </Section>
    </EmailShell>
  );
};

const ProductDetail_SharedSplitProductDetailSection = SplitProductDetailSection;

interface ProductDetail_SplitProductDetailProps extends Omit<
  ProductDetailContentOverrides,
  "imageUrls"
> {
  theme?: TailwindConfig;
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
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Product detail</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ProductDetail_SplitProductDetailSectionWrapper {...props} />
      </Body>
    </Tailwind>
  </Html>
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
