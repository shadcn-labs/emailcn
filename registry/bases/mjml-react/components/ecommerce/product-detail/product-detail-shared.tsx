import {
  MjmlColumn,
  MjmlDivider,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
  MjmlTable,
  MjmlText,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { emailAsset } from "@/registry/email-assets";

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
  colors: string[];
  description: string;
  imageUrls: string[];
  name: string;
  price: string;
  ratingIcons: RatingIcon[];
  sizes: string[];
}

export interface ProductDetailContentOverrides {
  colors?: string[];
  ctaHref?: string;
  ctaLabel?: string;
  description?: string;
  imageUrls?: string[];
  name?: string;
  price?: string;
  sizes?: string[];
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const productDetailResponsiveStyles = `
  .product-detail-full-table table { width: 100% !important; }
`;

const Rating = ({
  icons,
  reviewLabel = "(18 reviews)",
}: {
  icons: RatingIcon[];
  reviewLabel?: string;
}) => (
  <MjmlTable
    align="left"
    cellpadding="0"
    cellspacing="0"
    padding="0"
    role="presentation"
    width="184px"
  >
    <tbody>
      <tr>
        {icons.map((icon, index) => (
          <td
            key={`${icon}-${index}`}
            style={{ paddingRight: "4px", width: "16px" }}
          >
            <img
              alt=""
              src={emailAsset(`icon-star-${icon}.png`)}
              style={{ display: "block" }}
              width="16"
            />
          </td>
        ))}
        <td
          style={{
            color: "#4b5563",
            fontFamily,
            fontSize: "12px",
            lineHeight: "16px",
            paddingLeft: "4px",
            whiteSpace: "nowrap",
          }}
        >
          {reviewLabel}
        </td>
      </tr>
    </tbody>
  </MjmlTable>
);

const Stars = ({ icons }: { icons: RatingIcon[] }) => (
  <MjmlTable
    align="left"
    cellpadding="0"
    cellspacing="0"
    padding="0"
    role="presentation"
    width="100px"
  >
    <tbody>
      <tr>
        {icons.map((icon, index) => (
          <td
            key={`${icon}-${index}`}
            style={{ paddingRight: "4px", width: "16px" }}
          >
            <img
              alt=""
              src={emailAsset(`icon-star-${icon}.png`)}
              style={{ display: "block" }}
              width="16"
            />
          </td>
        ))}
      </tr>
    </tbody>
  </MjmlTable>
);

const ProductHeader = ({ name, price }: { name: string; price: string }) => (
  <>
    <MjmlText
      color="#030712"
      fontFamily={fontFamily}
      fontSize="20px"
      fontWeight="600"
      lineHeight="28px"
      padding="0"
    >
      {name}
    </MjmlText>
    <MjmlSpacer height="12px" />
    <MjmlText
      color="#030712"
      fontFamily={fontFamily}
      fontSize="30px"
      lineHeight="36px"
      padding="0"
    >
      {price}
    </MjmlText>
  </>
);

const Description = ({ children }: { children: ReactNode }) => (
  <MjmlText
    color="#4b5563"
    fontFamily={fontFamily}
    fontSize="16px"
    fontWeight="300"
    lineHeight="24px"
    padding="0"
  >
    {children}
  </MjmlText>
);

const CallToAction = ({ href, label }: { href: string; label: string }) => (
  <MjmlTable
    align="left"
    cellpadding="0"
    cellspacing="0"
    padding="0"
    role="presentation"
    width="136px"
  >
    <tbody>
      <tr>
        <td
          style={{
            backgroundColor: "#4f46e5",
            borderRadius: "8px",
            fontFamily,
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "16px",
            textAlign: "center",
          }}
        >
          <a
            href={href}
            style={{
              color: "#fffffe",
              display: "inline-block",
              padding: "14px 20px",
              textDecoration: "none",
            }}
          >
            <span style={{ marginRight: "8px" }}>{label}</span>
            <img
              alt=""
              src={emailAsset("icon-arrow-right.png")}
              style={{
                display: "inline-block",
                verticalAlign: "baseline",
              }}
              width="12"
            />
          </a>
        </td>
      </tr>
    </tbody>
  </MjmlTable>
);

const splitData = (variant: SplitProductDetailVariant): ProductDetailData => {
  if (variant.startsWith("stacked")) {
    const secondImage = variant === "stacked-left" ? "stacked-2" : "stacked-3";
    return {
      colors: [],
      description:
        "A statement piece from the iconic collaboration between Off-White™ and Nike. Featuring signature zip-tie detailing and industrial text graphics.",
      imageUrls: [
        emailAsset("product-detail/stacked-1.jpg"),
        emailAsset(`product-detail/${secondImage}.jpg`),
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
      imageUrls: [emailAsset("product-detail/single-portrait-bleed.jpg")],
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
      emailAsset(
        `product-detail/${
          variant.startsWith("rating") ? "rating-below" : "single-portrait"
        }.jpg`
      ),
    ],
    name: "Hand-made Bio Bamboo Shirt",
    price: "$59.99",
    ratingIcons: ["solid", "solid", "solid", "solid", "outline"],
    sizes: [],
  };
};

const detailData: Record<ProductDetailImageLayout, ProductDetailData> = {
  masonry: {
    colors: ["#FACC15", "#030712"],
    description:
      "A statement piece from the iconic collaboration between Off-White™ and Nike. Featuring signature zip-tie detailing, industrial text graphics, and a bold metallic Swoosh — these sneakers redefine street luxury with precision and attitude.",
    imageUrls: [1, 2, 3, 4].map((index) =>
      emailAsset(`product-detail/four-images-${index}.jpg`)
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
    imageUrls: [emailAsset("product-detail/single-landscape.jpg")],
    name: "Bio Bamboo Indigo Shirt",
    price: "$59.99",
    ratingIcons: ["solid", "solid", "solid", "solid", "outline"],
    sizes: ["S", "M", "L", "XL"],
  },
  three: {
    colors: ["#030712", "#ED5845", "#FCC045"],
    description:
      "Built for performance and style, this shell delivers GORE-TEX protection, bold color blocking, and all-weather versatility. Designed to handle mountain conditions — and look good doing it.",
    imageUrls: [1, 2, 3].map((index) =>
      emailAsset(`product-detail/three-images-${index}.jpg`)
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
    imageUrls: [1, 2].map((index) =>
      emailAsset(`product-detail/two-images-${index}.jpg`)
    ),
    name: "Omakase - Tay Sơn Graphic Tee",
    price: "$39.99",
    ratingIcons: ["solid", "solid", "solid", "solid", "outline"],
    sizes: ["S", "M", "L", "XL"],
  },
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
  showRating,
}: {
  ctaHref: string;
  ctaLabel: string;
  data: ProductDetailData;
  showRating: boolean;
}) => (
  <>
    <ProductHeader name={data.name} price={data.price} />
    <MjmlSpacer height="44px" />
    <Description>{data.description}</Description>
    {showRating ? (
      <>
        <MjmlSpacer height="28px" />
        <Rating icons={data.ratingIcons} />
      </>
    ) : null}
    <MjmlSpacer height="28px" />
    <CallToAction href={ctaHref} label={ctaLabel} />
  </>
);

const SplitImages = ({
  data,
  variant,
}: {
  data: ProductDetailData;
  variant: SplitProductDetailVariant;
}) => {
  if (variant.startsWith("stacked")) {
    return (
      <>
        <MjmlImage
          alt=""
          borderRadius="4px"
          padding="0"
          src={data.imageUrls[0]}
          width="254px"
        />
        <MjmlSpacer height="26px" />
        <MjmlImage
          alt=""
          borderRadius="4px"
          padding="0"
          src={data.imageUrls[1]}
          width="254px"
        />
      </>
    );
  }

  return (
    <>
      <MjmlImage
        alt=""
        borderRadius={variant.startsWith("bleed") ? "0" : "4px"}
        padding="0"
        src={data.imageUrls[0]}
        width={variant.startsWith("bleed") ? "266px" : "254px"}
      />
      {variant.startsWith("rating") ? (
        <>
          <MjmlSpacer height="24px" />
          <Stars icons={data.ratingIcons} />
          <MjmlSpacer height="12px" />
          <MjmlText
            color="#030712"
            fontFamily={fontFamily}
            fontSize="12px"
            fontWeight="600"
            lineHeight="16px"
            padding="0"
          >
            Based on 456 ratings
          </MjmlText>
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
  const isBleed = variant.startsWith("bleed");
  const imageColumn = (
    <MjmlColumn
      padding="0"
      verticalAlign="top"
      width={isBleed ? "266px" : "254px"}
    >
      <SplitImages data={data} variant={variant} />
    </MjmlColumn>
  );
  const copyColumn = (
    <MjmlColumn
      padding="0"
      verticalAlign="top"
      width={isBleed ? "266px" : "254px"}
    >
      <SplitCopy
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        data={data}
        showRating={!variant.startsWith("rating")}
      />
    </MjmlColumn>
  );
  const gapColumn = <MjmlColumn padding="0" width="44px" />;

  return (
    <MjmlSection backgroundColor="#fffffe" padding="44px 24px">
      {side === "left" ? imageColumn : copyColumn}
      {gapColumn}
      {side === "left" ? copyColumn : imageColumn}
    </MjmlSection>
  );
};

const ColorSwatches = ({ colors }: { colors: string[] }) => (
  <>
    {colors.map((color) => (
      <span key={color} style={{ display: "inline-block", maxWidth: "12px" }}>
        <span
          style={{
            backgroundColor: color,
            borderRadius: "9999px",
            display: "inline-block",
            height: "16px",
            verticalAlign: "middle",
            width: "16px",
          }}
        />
      </span>
    ))}
  </>
);

const ProductOptions = ({
  colors,
  sizes,
}: {
  colors: string[];
  sizes: string[];
}) => (
  <MjmlTable
    align="left"
    cellpadding="0"
    cellspacing="0"
    color="#4b5563"
    fontFamily={fontFamily}
    fontSize="14px"
    lineHeight="20px"
    padding="0"
    role="presentation"
    width="auto"
  >
    <tbody>
      <tr>
        <td style={{ paddingRight: "36px", whiteSpace: "nowrap" }}>
          <span style={{ marginRight: "8px" }}>Colors:</span>
          <ColorSwatches colors={colors} />
        </td>
        <td style={{ whiteSpace: "nowrap" }}>
          <span style={{ marginRight: "8px" }}>Sizes:</span>
          {sizes.join(", ")}
        </td>
      </tr>
    </tbody>
  </MjmlTable>
);

const ProductImages = ({
  data,
  layout,
}: {
  data: ProductDetailData;
  layout: ProductDetailImageLayout;
}) => {
  if (layout === "single") {
    return (
      <MjmlSection backgroundColor="#fffffe" padding="44px 24px 0">
        <MjmlColumn padding="0" width="552px">
          <MjmlImage
            alt=""
            borderRadius="4px"
            padding="0"
            src={data.imageUrls[0]}
            width="552px"
          />
        </MjmlColumn>
      </MjmlSection>
    );
  }

  const firstColumn = (
    <MjmlColumn padding="0 12px 0 0" verticalAlign="top" width="276px">
      <MjmlImage
        alt=""
        borderRadius="4px"
        padding="0"
        src={data.imageUrls[0]}
        width="264px"
      />
      {layout === "masonry" ? (
        <>
          <MjmlSpacer height="24px" />
          <MjmlImage
            alt=""
            borderRadius="4px"
            padding="0"
            src={data.imageUrls[1]}
            width="264px"
          />
        </>
      ) : null}
    </MjmlColumn>
  );
  const secondColumn = (
    <MjmlColumn padding="0 0 0 12px" verticalAlign="top" width="276px">
      <MjmlImage
        alt=""
        borderRadius="4px"
        padding="0"
        src={data.imageUrls[layout === "masonry" ? 2 : 1]}
        width="264px"
      />
      {layout === "three" || layout === "masonry" ? (
        <>
          <MjmlSpacer height="24px" />
          <MjmlImage
            alt=""
            borderRadius="4px"
            padding="0"
            src={data.imageUrls[layout === "masonry" ? 3 : 2]}
            width="264px"
          />
        </>
      ) : null}
    </MjmlColumn>
  );

  return (
    <MjmlSection backgroundColor="#fffffe" padding="44px 24px 0">
      {firstColumn}
      {secondColumn}
    </MjmlSection>
  );
};

const HeaderWithRating = ({
  data,
  variant,
}: {
  data: ProductDetailData;
  variant: ProductDetailWithDetailsVariant;
}) => {
  if (variant === "rating-top" || variant === "header-top") {
    return (
      <>
        <Rating icons={data.ratingIcons} />
        <MjmlSpacer height="12px" />
        <ProductHeader name={data.name} price={data.price} />
      </>
    );
  }

  if (variant === "rating-aside" || variant === "rating-aside-top") {
    return (
      <MjmlTable
        cellpadding="0"
        cssClass="product-detail-full-table"
        cellspacing="0"
        padding="0"
        role="presentation"
        tableLayout="fixed"
        width="100%"
      >
        <tbody>
          <tr>
            <td style={{ paddingRight: "24px", verticalAlign: "top" }}>
              <ProductHeader name={data.name} price={data.price} />
            </td>
            <td style={{ paddingTop: "4px", width: "100px" }}>
              <Stars icons={data.ratingIcons} />
              <div
                style={{
                  color: "#4b5563",
                  fontFamily,
                  fontSize: "12px",
                  lineHeight: "16px",
                  marginTop: "8px",
                }}
              >
                (18 reviews)
              </div>
            </td>
          </tr>
        </tbody>
      </MjmlTable>
    );
  }

  return <ProductHeader name={data.name} price={data.price} />;
};

const ProductDetails = ({
  ctaHref,
  ctaLabel,
  data,
  includeHeader,
  variant,
}: {
  ctaHref: string;
  ctaLabel: string;
  data: ProductDetailData;
  includeHeader: boolean;
  variant: ProductDetailWithDetailsVariant;
}) => (
  <>
    {includeHeader ? (
      <>
        <HeaderWithRating data={data} variant={variant} />
        <MjmlSpacer height="24px" />
      </>
    ) : null}
    <Description>{data.description}</Description>
    <MjmlDivider borderColor="#d1d5db" borderWidth="1px" padding="28px 0 8px" />
    <ProductOptions colors={data.colors} sizes={data.sizes} />
    <MjmlDivider borderColor="#d1d5db" borderWidth="1px" padding="8px 0 0" />
    {variant === "rating-bottom" || variant === "rating-aside" ? (
      <>
        <MjmlSpacer height="28px" />
        <Rating icons={data.ratingIcons} />
      </>
    ) : null}
    <MjmlSpacer height="28px" />
    <CallToAction href={ctaHref} label={ctaLabel} />
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
  const headerTop =
    normalizedVariant === "header-top" ||
    normalizedVariant === "rating-aside-top";

  return (
    <>
      {headerTop ? (
        <MjmlSection backgroundColor="#fffffe" padding="44px 24px 0">
          <MjmlColumn padding="0">
            <HeaderWithRating data={data} variant={normalizedVariant} />
          </MjmlColumn>
        </MjmlSection>
      ) : null}
      <ProductImages data={data} layout={layout} />
      <MjmlSection backgroundColor="#fffffe" padding="44px 24px">
        <MjmlColumn padding="0">
          <ProductDetails
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            data={data}
            includeHeader={!headerTop}
            variant={normalizedVariant}
          />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};
