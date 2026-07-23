/* eslint-disable @next/next/no-img-element, complexity, no-nested-ternary */
import { Fragment } from "react";
import type { CSSProperties, ReactNode } from "react";

export type SplitProductDetailVariant =
  | "stacked-left"
  | "stacked-right"
  | "image-left"
  | "image-right"
  | "rating-left"
  | "rating-right"
  | "bleed-left"
  | "bleed-right";

export type ProductDetailWithDetailsVariant =
  | "rating-bottom"
  | "default"
  | "rating-top"
  | "header-top"
  | "rating-aside"
  | "rating-aside-top";

export type ProductDetailImageLayout = "single" | "two" | "three" | "masonry";

type RatingIcon = "solid" | "half" | "outline";

interface ProductDetailData {
  name: string;
  price: string;
  description: string;
  imageUrls: string[];
  colors: string[];
  sizes: string[];
  ratingIcons: RatingIcon[];
}

export interface ProductDetailContentOverrides {
  name?: string;
  price?: string;
  description?: string;
  imageUrls?: string[];
  colors?: string[];
  sizes?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

const ASSET_ROOT = "https://assets.mailviews.com/images/components";
const PRODUCT_ASSET_ROOT = `${ASSET_ROOT}/product-detail`;
const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const productDetailResponsiveStyles = `
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

const Spacer = ({
  className,
  height,
}: {
  className?: string;
  height: number;
}) => (
  <div className={className} style={{ lineHeight: `${height}px` }}>
    &zwj;
  </div>
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
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ backgroundColor: "#f1f5f9", width: "100%" }}
    >
      <tbody>
        <tr>
          <td>&zwj;</td>
          <td
            style={{
              backgroundColor: "#fffffe",
              maxWidth: "100%",
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              style={{ width: "100%" }}
            >
              <tbody>
                <tr>
                  <td style={{ padding }}>
                    <Spacer height={44} />
                    {children}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  </>
);

const ProductHeader = ({ name, price }: { name: string; price: string }) => (
  <>
    <h2
      style={{
        ...textStyle,
        color: "#030712",
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "28px",
      }}
    >
      {name}
    </h2>
    <Spacer height={12} />
    <p
      style={{
        ...textStyle,
        color: "#030712",
        fontSize: "30px",
        lineHeight: "36px",
      }}
    >
      {price}
    </p>
  </>
);

const Description = ({ children }: { children: ReactNode }) => (
  <p
    style={{
      ...textStyle,
      color: "#4b5563",
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: "24px",
    }}
  >
    {children}
  </p>
);

const Star = ({ icon }: { icon: RatingIcon }) => (
  <td style={{ paddingRight: "4px" }}>
    <img
      alt=""
      src={`${ASSET_ROOT}/icon-star-${icon}.png`}
      style={{ display: "block" }}
      width="16"
    />
  </td>
);

const Stars = ({ icons }: { icons: RatingIcon[] }) => (
  <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
    <tbody>
      <tr>
        {icons.map((icon, index) => (
          <Star icon={icon} key={`${icon}-${index}`} />
        ))}
      </tr>
    </tbody>
  </table>
);

const Rating = ({
  icons,
  reviewLabel = "(18 reviews)",
}: {
  icons: RatingIcon[];
  reviewLabel?: string;
}) => (
  <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
    <tbody>
      <tr>
        {icons.map((icon, index) => (
          <Star icon={icon} key={`${icon}-${index}`} />
        ))}
        <td style={{ fontSize: 0, paddingLeft: "4px" }}>
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
        </td>
      </tr>
    </tbody>
  </table>
);

const CallToAction = ({ href, label }: { href: string; label: string }) => (
  <div>
    <a
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
        <img
          alt=""
          src={`${ASSET_ROOT}/icon-arrow-right.png`}
          style={{ maxWidth: "100%", verticalAlign: "baseline" }}
          width="12"
        />
      </span>
    </a>
  </div>
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
    <img
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

  return href ? <a href={href}>{image}</a> : image;
};

const Divider = ({ bottom, top }: { bottom: number; top: number }) => (
  <div
    style={{
      backgroundColor: "#d1d5db",
      height: "1px",
      lineHeight: "1px",
      margin: `${top}px 0 ${bottom}px`,
    }}
  >
    &zwj;
  </div>
);

const ProductOptions = ({
  colors,
  sizes,
}: {
  colors: string[];
  sizes: string[];
}) => (
  <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
    <tbody>
      <tr>
        <td className="product-detail-option" style={{ paddingRight: "36px" }}>
          <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
            <tbody>
              <tr>
                <td
                  style={{
                    color: "#4b5563",
                    fontFamily,
                    fontSize: "14px",
                    lineHeight: "20px",
                    paddingRight: "8px",
                  }}
                >
                  Colors:
                </td>
                <td>
                  <div style={{ fontSize: 0 }}>
                    {colors.map((color) => (
                      <span
                        key={color}
                        style={{ display: "inline-block", maxWidth: "12px" }}
                      >
                        <span
                          style={{
                            backgroundColor: color,
                            borderRadius: "9999px",
                            display: "inline-block",
                            height: "16px",
                            width: "16px",
                          }}
                        />
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <td className="product-detail-option">
          <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
            <tbody>
              <tr>
                <td
                  style={{
                    color: "#4b5563",
                    fontFamily,
                    fontSize: "14px",
                    lineHeight: "20px",
                    paddingRight: "8px",
                  }}
                >
                  Sizes:
                </td>
                <td
                  style={{
                    color: "#4b5563",
                    fontFamily,
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  {sizes.map((size, index) => (
                    <span key={size}>
                      {`${size}${index < sizes.length - 1 ? ", " : ""}`}
                    </span>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
);

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
    <div className="product-stacked-image">
      <ProductImage
        className="product-responsive-image"
        href="https://example.com"
        src={imageUrls[0]}
        style={{ width: "100%" }}
        width={254}
      />
    </div>
    <Spacer className="product-stacked-gap" height={26} />
    <div className="product-stacked-image">
      <ProductImage
        className="product-responsive-image"
        href="https://example.com"
        src={imageUrls[1]}
        style={{ width: "100%" }}
        width={254}
      />
    </div>
  </>
);

const SplitImageColumn = ({
  data,
  kind,
  side,
}: {
  data: ProductDetailData;
  kind: "stacked" | "image" | "rating" | "bleed";
  side: "left" | "right";
}) => {
  if (kind === "stacked") {
    return <StackedImages imageUrls={data.imageUrls} />;
  }

  return (
    <>
      <ProductImage
        borderRadius={
          kind === "bleed"
            ? side === "left"
              ? "0 4px 4px 0"
              : "4px 0 0 4px"
            : "4px"
        }
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
          <p
            style={{
              ...textStyle,
              color: "#030712",
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: "16px",
            }}
          >
            Based on 456 ratings
          </p>
        </>
      ) : null}
    </>
  );
};

export const SplitProductDetailSection = ({
  ctaHref = "https://example.com",
  ctaLabel = "Shop now",
  variant = "stacked-left",
  ...overrides
}: ProductDetailContentOverrides & {
  variant?: SplitProductDetailVariant;
}) => {
  const data = mergeData(splitData(variant), overrides);
  const side = variant.endsWith("right") ? "right" : "left";
  const kind = variant.startsWith("stacked")
    ? "stacked"
    : variant.startsWith("rating")
      ? "rating"
      : variant.startsWith("bleed")
        ? "bleed"
        : "image";
  const isBleed = kind === "bleed";
  const imageCell = (
    <td
      className={
        side === "left" ? "product-split-stack" : "product-split-mobile-header"
      }
      style={{ verticalAlign: "top", width: isBleed ? "266px" : "254px" }}
    >
      <SplitImageColumn data={data} kind={kind} side={side} />
    </td>
  );
  const copyCell = (
    <td
      className={
        side === "left" ? "product-split-stack" : "product-split-mobile-footer"
      }
      style={{ verticalAlign: "top", width: isBleed ? "266px" : "254px" }}
    >
      <div
        className={isBleed ? "product-bleed-copy" : undefined}
        style={
          isBleed
            ? side === "left"
              ? { padding: "0 24px" }
              : { paddingRight: "24px" }
            : undefined
        }
      >
        <SplitCopy
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          data={data}
          showRating={kind !== "rating"}
        />
      </div>
    </td>
  );
  const gapCell = (
    <td
      className={
        side === "left" ? "product-split-stack" : "product-split-mobile-footer"
      }
      style={{ lineHeight: "24px", width: "44px" }}
    >
      &zwj;
    </td>
  );

  return (
    <EmailShell
      padding={
        isBleed ? (side === "left" ? "0 24px 0 0" : "0 0 0 24px") : "0 24px"
      }
    >
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        style={{ width: "100%" }}
      >
        <tbody>
          <tr>
            {side === "left" ? imageCell : copyCell}
            {gapCell}
            {side === "left" ? copyCell : imageCell}
          </tr>
        </tbody>
      </table>
    </EmailShell>
  );
};

const detailData: Record<ProductDetailImageLayout, ProductDetailData> = {
  masonry: {
    colors: ["#FACC15", "#030712"],
    description:
      "A statement piece from the iconic collaboration between Off-White™ and Nike. Featuring signature zip-tie detailing, industrial text graphics, and a bold metallic Swoosh — these sneakers redefine street luxury with precision and attitude.",
    imageUrls: [1, 2, 3, 4].map(
      (index) => `${PRODUCT_ASSET_ROOT}/four-images-${index}.jpg`
    ),
    name: "Off-White™ Air Force 1 - Yellow",
    price: "$249.00",
    ratingIcons: ["solid", "solid", "solid", "solid", "outline"],
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  single: {
    colors: ["#030712", "#e5e7eb"],
    description:
      "Crafted from a soft bamboo-linen blend, this shirt combines breathability, comfort, and effortless style. Naturally hypoallergenic and eco-friendly, it’s designed for everyday wear with a refined, minimal edge.",
    imageUrls: [`${PRODUCT_ASSET_ROOT}/single-landscape.jpg`],
    name: "Bio Bamboo Indigo Shirt",
    price: "$59.99",
    ratingIcons: ["solid", "solid", "solid", "solid", "outline"],
    sizes: ["S", "M", "L", "XL"],
  },
  three: {
    colors: ["#030712", "#ED5845", "#FCC045"],
    description:
      "Built for performance and style, this shell delivers GORE-TEX protection, bold color blocking, and all-weather versatility. Designed to handle mountain conditions — and look good doing it.",
    imageUrls: [1, 2, 3].map(
      (index) => `${PRODUCT_ASSET_ROOT}/three-images-${index}.jpg`
    ),
    name: "Men's Summit Series Mountain GORE-TEX®",
    price: "$59.99",
    ratingIcons: ["solid", "solid", "solid", "solid", "outline"],
    sizes: ["S", "M", "L", "XL"],
  },
  two: {
    colors: ["#030712", "#e5e7eb"],
    description:
      "Inspired by Vietnamese heritage, this premium cotton tee blends minimalist design with cultural typography. Soft, breathable, and built for everyday comfort, a refined staple for modern wardrobes.",
    imageUrls: [1, 2].map(
      (index) => `${PRODUCT_ASSET_ROOT}/two-images-${index}.jpg`
    ),
    name: "Omakase - Tay Sơn Graphic Tee",
    price: "$39.99",
    ratingIcons: ["solid", "solid", "solid", "solid", "outline"],
    sizes: ["S", "M", "L", "XL"],
  },
};

const SingleImage = ({ data }: { data: ProductDetailData }) => (
  <ProductImage
    className="product-responsive-image"
    src={data.imageUrls[0]}
    style={{ width: "100%" }}
    width={552}
  />
);

const TwoImages = ({ data }: { data: ProductDetailData }) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    style={{ width: "100%" }}
  >
    <tbody>
      <tr>
        {data.imageUrls.map((src, index) => (
          <Fragment key={src}>
            {index > 0 ? (
              <td
                className="product-detail-column"
                key={`gap-${src}`}
                style={{ lineHeight: "24px", width: "24px" }}
              >
                &zwj;
              </td>
            ) : null}
            <td
              className="product-detail-column"
              key={src}
              style={{ verticalAlign: "top", width: "264px" }}
            >
              <div className="product-desktop-image">
                <ProductImage
                  className="product-responsive-image"
                  src={src}
                  style={{ width: "100%" }}
                  width={264}
                />
              </div>
              <div
                className="product-mobile-image"
                style={{
                  backgroundImage: `url('${src}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "4px",
                  display: "none",
                }}
              >
                <Spacer height={388} />
              </div>
            </td>
          </Fragment>
        ))}
      </tr>
    </tbody>
  </table>
);

const ThreeImages = ({ data }: { data: ProductDetailData }) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    style={{ width: "100%" }}
  >
    <tbody>
      <tr>
        <td
          className="product-three-column"
          style={{ verticalAlign: "top", width: "264px" }}
        >
          <ProductImage
            className="product-responsive-image"
            src={data.imageUrls[0]}
            style={{ width: "100%" }}
            width={264}
          />
        </td>
        <td
          className="product-three-column"
          style={{ lineHeight: "24px", width: "24px" }}
        >
          &zwj;
        </td>
        <td
          className="product-three-column product-three-secondary"
          style={{ fontSize: 0, verticalAlign: "top", width: "264px" }}
        >
          <div className="product-three-secondary-item">
            <ProductImage
              className="product-three-secondary-image"
              src={data.imageUrls[1]}
              style={{ objectFit: "cover", width: "100%" }}
              width={264}
            />
          </div>
          <Spacer className="product-three-gap" height={24} />
          <div className="product-three-secondary-item">
            <ProductImage
              className="product-three-secondary-image"
              src={data.imageUrls[2]}
              style={{ objectFit: "cover", width: "100%" }}
              width={264}
            />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
);

const MasonryImages = ({ data }: { data: ProductDetailData }) => (
  <>
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      className="product-masonry-desktop"
      role="presentation"
      style={{ width: "100%" }}
    >
      <tbody>
        <tr>
          {[data.imageUrls.slice(0, 2), data.imageUrls.slice(2, 4)].map(
            (column, index) => (
              <Fragment key={column[0]}>
                {index > 0 ? (
                  <td
                    key={`gap-${column[0]}`}
                    style={{ lineHeight: "24px", width: "24px" }}
                  >
                    &zwj;
                  </td>
                ) : null}
                <td
                  key={column[0]}
                  style={{ verticalAlign: "top", width: "264px" }}
                >
                  <ProductImage src={column[0]} width={264} />
                  <Spacer height={24} />
                  <ProductImage src={column[1]} width={264} />
                </td>
              </Fragment>
            )
          )}
        </tr>
      </tbody>
    </table>
    <div
      className="product-masonry-mobile"
      style={{ display: "none", msoHide: "all" } as CSSProperties}
    >
      <ProductImage src={data.imageUrls[0]} width={430} />
      <Spacer height={24} />
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ display: "inline-block" }}>
          <ProductImage
            src={data.imageUrls[1]}
            style={{ aspectRatio: "4/3", objectFit: "cover" }}
            width={180}
          />
        </div>
        <div style={{ minWidth: "24px" }}>&zwj;</div>
        <div style={{ display: "inline-block" }}>
          <ProductImage
            src={data.imageUrls[2]}
            style={{ aspectRatio: "4/3", objectFit: "cover" }}
            width={180}
          />
        </div>
      </div>
      <Spacer height={24} />
      <ProductImage src={data.imageUrls[3]} width={430} />
    </div>
  </>
);

const ProductImages = ({
  data,
  layout,
}: {
  data: ProductDetailData;
  layout: ProductDetailImageLayout;
}) => {
  if (layout === "single") {
    return <SingleImage data={data} />;
  }
  if (layout === "two") {
    return <TwoImages data={data} />;
  }
  if (layout === "three") {
    return <ThreeImages data={data} />;
  }
  return <MasonryImages data={data} />;
};

const AsideHeader = ({ data }: { data: ProductDetailData }) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    style={{ width: "100%" }}
  >
    <tbody>
      <tr>
        <td
          className="product-aside-column product-aside-copy"
          style={{ paddingRight: "24px", verticalAlign: "top" }}
        >
          <ProductHeader name={data.name} price={data.price} />
        </td>
        <td
          className="product-aside-column product-aside-rating"
          style={{ paddingTop: "4px", verticalAlign: "top", width: "100px" }}
        >
          <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
            <tbody>
              <tr>
                <td>
                  <Stars icons={data.ratingIcons} />
                </td>
                <td
                  className="product-aside-inline-review"
                  style={{ display: "none", paddingLeft: "8px" }}
                >
                  <p
                    style={{
                      ...textStyle,
                      color: "#4b5563",
                      fontSize: "12px",
                      lineHeight: "16px",
                      marginTop: "1px",
                    }}
                  >
                    (18 reviews)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            className="product-aside-block-review"
            style={{
              ...textStyle,
              color: "#4b5563",
              fontSize: "12px",
              lineHeight: "16px",
              marginTop: "8px",
            }}
          >
            (18 reviews)
          </p>
        </td>
      </tr>
    </tbody>
  </table>
);

const DetailBody = ({ data }: { data: ProductDetailData }) => (
  <>
    <Description>{data.description}</Description>
    <Divider bottom={8} top={28} />
    <ProductOptions colors={data.colors} sizes={data.sizes} />
    <Divider bottom={0} top={8} />
  </>
);

export const ProductDetailWithDetailsSection = ({
  ctaHref = "https://example.com",
  ctaLabel = "Shop now",
  layout,
  variant,
  ...overrides
}: ProductDetailContentOverrides & {
  layout: ProductDetailImageLayout;
  variant: ProductDetailWithDetailsVariant;
}) => {
  const data = mergeData(detailData[layout], overrides);
  const normalizedVariant = variant === "default" ? "rating-bottom" : variant;
  const imageBlock = <ProductImages data={data} layout={layout} />;
  const headerBlock = <ProductHeader name={data.name} price={data.price} />;
  return (
    <EmailShell>
      {normalizedVariant === "header-top" ||
      normalizedVariant === "rating-aside-top" ? (
        <>
          {normalizedVariant === "header-top" ? (
            <>
              <Rating icons={data.ratingIcons} />
              <Spacer height={12} />
              {headerBlock}
            </>
          ) : (
            <AsideHeader data={data} />
          )}
          <Spacer height={44} />
          {imageBlock}
          <Spacer height={44} />
        </>
      ) : (
        <>
          {imageBlock}
          <Spacer height={44} />
          {normalizedVariant === "rating-top" ? (
            <>
              <Rating icons={data.ratingIcons} />
              <Spacer height={12} />
              {headerBlock}
            </>
          ) : normalizedVariant === "rating-aside" ? (
            <AsideHeader data={data} />
          ) : (
            headerBlock
          )}
          <Spacer height={24} />
        </>
      )}
      <DetailBody data={data} />
      {normalizedVariant === "rating-bottom" ||
      normalizedVariant === "rating-aside" ? (
        <>
          <Spacer height={28} />
          <Rating icons={data.ratingIcons} />
        </>
      ) : null}
      <Spacer height={28} />
      <CallToAction href={ctaHref} label={ctaLabel} />
    </EmailShell>
  );
};
