import {
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
  MjmlTable,
  MjmlWrapper,
} from "@faire/mjml-react";
import { Fragment } from "react";
import type { ReactNode } from "react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

export type ProductListVariant =
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

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const productListResponsiveStyles = "";

const defaultProducts: ProductListItem[] = [
  {
    description:
      "Crafted from a soft bamboo-linen blend, this shirt combines breathability, comfort...",
    details: "Black, White, Gray +5 more | S,M,L,XL",
    href: "https://example.com/thsirts",
    imageUrl: emailAsset(`product-lists/product-list-1.jpg`),
    name: "Stark Graphic T",
    price: "$9.99",
    reviewCount: 18,
  },
  {
    details: "Black, White, Gray +5 more | S,M,L,XL",
    href: "https://example.com",
    imageUrl: emailAsset(`product-lists/product-list-2.jpg`),
    name: "Intricate Lifestyle Cotton T",
    price: "$9.99",
    reviewCount: 42,
  },
];

const Rating = ({
  count,
  allSolid = false,
}: {
  count: number;
  allSolid?: boolean;
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
        {[0, 1, 2, 3, 4].map((index) => (
          <td key={index} style={{ paddingRight: "4px", width: "16px" }}>
            <img
              alt=""
              src={emailAsset(
                `icon-star-${index === 4 && !allSolid ? "half" : "solid"}.png`
              )}
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
          ({count} reviews)
        </td>
      </tr>
    </tbody>
  </MjmlTable>
);

const Copy = ({ children }: { children?: ReactNode }) =>
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

const Header = ({ item }: { item: ProductListItem }) => (
  <MjmlTable
    cellpadding="0"
    cellspacing="0"
    padding="0"
    role="presentation"
    tableLayout="fixed"
    width="100%"
  >
    <tbody>
      <tr>
        <td
          style={{
            color: "#030712",
            fontFamily,
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "28px",
            verticalAlign: "top",
          }}
        >
          {item.name}
        </td>
        <td
          width="80"
          style={{
            color: "#030712",
            fontFamily,
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "28px",
            textAlign: "right",
            verticalAlign: "top",
            width: "80px",
          }}
        >
          {item.price}
        </td>
      </tr>
    </tbody>
  </MjmlTable>
);

const ColorSwatches = () => (
  <>
    {["#030712", "#fffffe", "#E5E7EB"].map((color) => (
      <span
        key={color}
        style={{
          display: "inline-block",
          maxWidth: "12px",
        }}
      >
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

const ProductOptions = () => (
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
          <ColorSwatches />
        </td>
        <td style={{ whiteSpace: "nowrap" }}>
          <span style={{ marginRight: "8px" }}>Sizes:</span>
          S, M, L, XL
        </td>
      </tr>
    </tbody>
  </MjmlTable>
);

const Discover = ({ href }: { href: string }) => (
  <MjmlTable
    align="left"
    cellpadding="0"
    cellspacing="0"
    padding="0"
    role="presentation"
    width="104px"
  >
    <tbody>
      <tr>
        <td
          style={{
            fontFamily,
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "16px",
          }}
        >
          <a
            href={href}
            style={{
              color: "#4f46e5",
              display: "inline-block",
              padding: "4px 0",
              textDecoration: "none",
            }}
          >
            <span style={{ marginRight: "8px" }}>Discover</span>
            <img
              alt=""
              src={emailAsset("icon-arrow-right-indigo.png")}
              style={{
                display: "inline-block",
                verticalAlign: "baseline",
              }}
              width="16"
            />
          </a>
        </td>
      </tr>
    </tbody>
  </MjmlTable>
);

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
        <ProductOptions />
        <MjmlDivider
          borderColor="#d1d5db"
          borderWidth="1px"
          padding="8px 0 6px"
        />
      </>
    );
  }
  if (detailsVariant) {
    return <ProductOptions />;
  }
  return null;
};

const ProductContent = ({
  item,
  variant,
}: {
  item: ProductListItem;
  variant: ProductListVariant;
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
          <Rating
            allSolid={(item.reviewCount ?? 18) === 42}
            count={item.reviewCount ?? 18}
          />
          <MjmlSpacer height="18px" />
        </>
      ) : null}
      <Header item={item} />
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
          <Rating
            allSolid={(item.reviewCount ?? 18) === 42}
            count={item.reviewCount ?? 18}
          />
        </>
      ) : null}
      <MjmlSpacer height="18px" />
      <Discover href={item.href ?? "https://example.com/thsirts"} />
    </>
  );
};

const ProductRow = ({
  item,
  variant,
}: {
  item: ProductListItem;
  variant: ProductListVariant;
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
    <MjmlColumn padding="0" verticalAlign="top" width="384px">
      <ProductContent item={item} variant={variant} />
    </MjmlColumn>
  </MjmlSection>
);

const ProductListWithRowsSection = ({
  products,
  variant = "basic",
}: {
  products?: ProductListItem[];
  variant?: ProductListVariant;
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
                detail and built for everyday comfort, our collection brings
                together modern design, timeless quality, and effortlessness.
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

const ProductList_SharedProductListWithRowsSection = ProductListWithRowsSection;

interface ProductList_ProductListWithRowsProps {
  theme?: EmailTheme;
  products?: ProductListItem[];
  variant?: ProductListVariant;
}

const ProductList_ProductListWithRowsSectionWrapper = ({
  products,
  variant = "basic",
}: Omit<ProductList_ProductListWithRowsProps, "theme">) => (
  <ProductList_SharedProductListWithRowsSection
    products={products}
    variant={variant}
  />
);

const ProductList_ProductListWithRows = ({
  theme = defaultTheme,
  ...props
}: ProductList_ProductListWithRowsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Product list</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{productListResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <ProductList_ProductListWithRowsSectionWrapper {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ProductList_ProductListWithRows.PreviewProps = {
  theme: defaultTheme,
  variant: "basic",
} satisfies ProductList_ProductListWithRowsProps;

const __ProductList = ProductList_ProductListWithRows;

export interface ProductListProps extends Omit<
  Parameters<typeof __ProductList>[0],
  "theme"
> {
  theme?: Parameters<typeof __ProductList>[0]["theme"];
}

export const ProductList = (props: ProductListProps) => (
  <__ProductList {...props} />
);

export const ProductListSection = ProductListWithRowsSection;

ProductList.PreviewProps = {} satisfies ProductListProps;
