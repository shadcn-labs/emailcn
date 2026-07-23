import {
  MjmlButton,
  MjmlColumn,
  MjmlDivider,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
} from "@faire/mjml-react";
import { Fragment } from "react";

export type ProductListWithRowsVariant =
  | "basic"
  | "reviews-top"
  | "with-description"
  | "with-intro"
  | "with-details"
  | "details-reviews-top"
  | "full-details"
  | "full-reviews-top";

export interface ProductListItem {
  imageUrl?: string;
  name: string;
  price: string;
  quantity?: number;
  description?: string;
  details?: string;
  reviewCount?: number;
  href?: string;
}

const ASSET_ROOT = "https://emailcn.vercel.app/api/email-assets";
const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const productListResponsiveStyles = "";

const defaultProducts: ProductListItem[] = [
  {
    description:
      "Crafted from a soft bamboo-linen blend, this shirt combines breathability, comfort...",
    details: "Black, White, Gray +5 more | S,M,L,XL",
    href: "https://example.com/thsirts",
    imageUrl: `${ASSET_ROOT}/product-lists/product-list-1.jpg`,
    name: "Stark Graphic T",
    price: "$9.99",
    reviewCount: 18,
  },
  {
    details: "Black, White, Gray +5 more | S,M,L,XL",
    href: "https://example.com",
    imageUrl: `${ASSET_ROOT}/product-lists/product-list-2.jpg`,
    name: "Intricate Lifestyle Cotton T",
    price: "$9.99",
    reviewCount: 42,
  },
];

const Rating = ({ count }: { count: number }) => (
  <MjmlText
    color="#4b5563"
    fontFamily={fontFamily}
    fontSize="12px"
    lineHeight="16px"
    padding="0"
  >
    ★ ★ ★ ★ ★ &nbsp;({count} reviews)
  </MjmlText>
);

const Copy = ({ children }: { children?: string }) =>
  children ? (
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
  ) : null;

const ProductOptionsBlock = ({
  detailsVariant,
  fullDetails,
  item,
}: {
  detailsVariant: boolean;
  fullDetails: boolean;
  item: ProductListItem;
}) => {
  if (fullDetails) {
    return (
      <>
        <Copy>{item.description}</Copy>
        <MjmlDivider
          borderColor="#d1d5db"
          borderWidth="1px"
          padding="24px 0 8px"
        />
        <Copy>Colors: Black, White, Gray · Sizes: S, M, L, XL</Copy>
        <MjmlDivider
          borderColor="#d1d5db"
          borderWidth="1px"
          padding="8px 0 6px"
        />
      </>
    );
  }
  if (detailsVariant) {
    return <Copy>Colors: Black, White, Gray · Sizes: S, M, L, XL</Copy>;
  }
  return null;
};

const ProductContent = ({
  item,
  variant,
}: {
  item: ProductListItem;
  variant: ProductListWithRowsVariant;
}) => {
  const detailsVariant = [
    "with-details",
    "details-reviews-top",
    "full-details",
    "full-reviews-top",
  ].includes(variant);
  const topReview = [
    "reviews-top",
    "details-reviews-top",
    "full-reviews-top",
  ].includes(variant);
  const fullDetails = ["full-details", "full-reviews-top"].includes(variant);
  const descriptionOnly = variant === "with-description";

  return (
    <>
      {topReview ? (
        <>
          <Rating count={item.reviewCount ?? 18} />
          <MjmlSpacer height="18px" />
        </>
      ) : null}
      <MjmlText
        color="#030712"
        fontFamily={fontFamily}
        fontSize="20px"
        fontWeight="600"
        lineHeight="28px"
        padding="0"
      >
        {item.name} · {item.price}
      </MjmlText>
      <MjmlSpacer height="24px" />
      {descriptionOnly ? <Copy>{item.description}</Copy> : null}
      {!descriptionOnly && !detailsVariant ? <Copy>{item.details}</Copy> : null}
      <ProductOptionsBlock
        detailsVariant={detailsVariant}
        fullDetails={fullDetails}
        item={item}
      />
      {!topReview && !descriptionOnly ? (
        <>
          <MjmlSpacer height="18px" />
          <Rating count={item.reviewCount ?? 18} />
        </>
      ) : null}
      <MjmlSpacer height="18px" />
      <MjmlButton
        align="left"
        backgroundColor="transparent"
        color="#4f46e5"
        fontFamily={fontFamily}
        fontSize="16px"
        fontWeight="500"
        href={item.href ?? "https://example.com/thsirts"}
        innerPadding="4px 0"
        lineHeight="16px"
        padding="0"
      >
        Discover →
      </MjmlButton>
    </>
  );
};

const ProductRow = ({
  item,
  variant,
}: {
  item: ProductListItem;
  variant: ProductListWithRowsVariant;
}) => (
  <MjmlSection backgroundColor="#fffffe" padding="0 24px">
    <MjmlColumn padding="0 24px 0 0" verticalAlign="top" width="168px">
      <MjmlImage
        alt={item.name}
        borderRadius="8px"
        padding="0"
        src={item.imageUrl}
        width="144px"
      />
    </MjmlColumn>
    <MjmlColumn padding="0" verticalAlign="top">
      <ProductContent item={item} variant={variant} />
    </MjmlColumn>
  </MjmlSection>
);

export const ProductListWithRowsSection = ({
  products,
  variant = "basic",
}: {
  products?: ProductListItem[];
  variant?: ProductListWithRowsVariant;
}) => {
  const list = products ?? defaultProducts;
  const visible =
    variant === "with-intro" ? list.slice(0, 2) : list.slice(0, 1);
  const rowVariant = variant === "with-intro" ? "basic" : variant;

  return (
    <>
      <MjmlSection backgroundColor="#fffffe" padding="44px 24px 0">
        <MjmlColumn padding="0">
          {variant === "with-intro" ? (
            <>
              <MjmlText
                align="center"
                color="#030712"
                fontFamily={fontFamily}
                fontSize="30px"
                fontWeight="600"
                lineHeight="36px"
                padding="0"
              >
                T-shirts
              </MjmlText>
              <MjmlSpacer height="44px" />
              <MjmlText
                align="center"
                color="#4b5563"
                fontFamily={fontFamily}
                fontSize="18px"
                lineHeight="28px"
                padding="0"
              >
                Style meets purpose in every piece. Designed with attention to
                detail and built for everyday comfort.
              </MjmlText>
              <MjmlSpacer height="44px" />
            </>
          ) : null}
        </MjmlColumn>
      </MjmlSection>
      {visible.map((item, index) => (
        <Fragment key={`${item.name}-${index}`}>
          <ProductRow item={item} variant={rowVariant} />
          {index < visible.length - 1 ? (
            <MjmlSection backgroundColor="#fffffe" padding="0">
              <MjmlColumn padding="0">
                <MjmlSpacer height="44px" />
              </MjmlColumn>
            </MjmlSection>
          ) : null}
        </Fragment>
      ))}
      <MjmlSection backgroundColor="#fffffe" padding="0">
        <MjmlColumn padding="0">
          <MjmlSpacer height="44px" />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};
