import {
  Section,
  Row,
  Column,
  Text,
  Heading,
  Link,
  Img,
  Body,
  Head as EmailHead,
  Html,
  Preview,
} from "jsx-email";
import { Fragment } from "react";
import type { ReactNode } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { EmailTailwind } from "@/registry/bases/jsx-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/jsx-email/themes/email-theme";
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

const productListResponsiveStyles = `
  @media only screen and (max-width: 599px) {
    .product-list-column { display: block !important; width: 100% !important; }
    .product-list-image { width: 100% !important; }
    .product-list-gap { line-height: 24px !important; }
  }
  @media only screen and (max-width: 430px) {
    .product-list-option { display: inline-block !important; }
  }
`;

const textStyle = { fontFamily, margin: 0 } as const;

const Spacer = ({ height }: { height: number }) => (
  <Section style={{ lineHeight: `${height}px` }}>&zwj;</Section>
);

const EmailShell = ({ children }: { children: ReactNode }) => (
  <>
    <style>{productListResponsiveStyles}</style>
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
                  <Column style={{ padding: "0 24px" }}>
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

const Rating = ({
  count,
  allSolid = false,
}: {
  count: number;
  allSolid?: boolean;
}) => (
  <Section>
    <Fragment>
      <Row>
        <Column>
          <Section>
            <Fragment>
              <Row>
                {[0, 1, 2, 3, 4].map((index) => (
                  <Column key={index} style={{ paddingRight: "4px" }}>
                    <Img
                      alt=""
                      src={emailAsset(
                        `icon-star-${index === 4 && !allSolid ? "half" : "solid"}.png`
                      )}
                      style={{ display: "block" }}
                      width="16"
                    />
                  </Column>
                ))}
              </Row>
            </Fragment>
          </Section>
        </Column>
        <Column style={{ paddingLeft: "8px" }}>
          <Text
            style={{
              ...textStyle,
              color: "#4b5563",
              fontSize: "12px",
              lineHeight: "16px",
              marginTop: "1px",
            }}
          >
            {`(${count} reviews)`}
          </Text>
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const Copy = ({ children }: { children: ReactNode }) => (
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

const ProductOptions = () => (
  <Section>
    <Fragment>
      <Row>
        <Column
          className="product-list-option"
          style={{ paddingRight: "36px" }}
        >
          <Section>
            <Fragment>
              <Row>
                <Column
                  style={{
                    color: "#4b5563",
                    fontFamily,
                    fontSize: "14px",
                    lineHeight: "20px",
                    paddingRight: "8px",
                  }}
                >
                  Colors:
                </Column>
                <Column>
                  <Section style={{ fontSize: 0 }}>
                    {["#030712", "#fffffe", "#E5E7EB"].map((color) => (
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
                  </Section>
                </Column>
              </Row>
            </Fragment>
          </Section>
        </Column>
        <Column className="product-list-option">
          <Section>
            <Fragment>
              <Row>
                <Column
                  style={{
                    color: "#4b5563",
                    fontFamily,
                    fontSize: "14px",
                    lineHeight: "20px",
                    paddingRight: "8px",
                  }}
                >
                  Sizes:
                </Column>
                <Column
                  style={{
                    color: "#4b5563",
                    fontFamily,
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  {[
                    ["S", true],
                    ["M", true],
                    ["L", true],
                    ["XL", false],
                  ].map(([size, comma]) => (
                    <span key={String(size)}>
                      {`${size}${comma ? ", " : ""}`}
                    </span>
                  ))}
                </Column>
              </Row>
            </Fragment>
          </Section>
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const Divider = ({ bottom, top }: { bottom: number; top: number }) => (
  <Section
    style={{
      backgroundColor: "#d1d5db",
      height: "1px",
      lineHeight: "1px",
      margin: `${top}px 0 ${bottom}px`,
    }}
  >
    &zwj;
  </Section>
);

const Discover = ({ href }: { href: string }) => (
  <Section>
    <Link
      href={href}
      style={{
        backgroundColor: "#fffffe",
        color: "#4f46e5",
        display: "inline-block",
        fontFamily,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: 1,
        padding: "4px 0",
        textDecoration: "none",
      }}
    >
      <span style={{ marginRight: "8px" }}>Discover</span>
      <span>
        <Img
          alt=""
          src={emailAsset(`icon-arrow-right-indigo.png`)}
          style={{
            maxWidth: "100%",
            verticalAlign: "baseline",
          }}
          width="16"
        />
      </span>
    </Link>
  </Section>
);

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

const Header = ({ item }: { item: ProductListItem }) => (
  <Section style={{ width: "100%" }}>
    <Fragment>
      <Row>
        <Column>
          <Heading
            style={{
              ...textStyle,
              color: "#030712",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "28px",
            }}
            as="h3"
          >
            {item.name}
          </Heading>
        </Column>
        <Column
          style={{ textAlign: "right", verticalAlign: "top", width: "80px" }}
        >
          <Text
            style={{
              ...textStyle,
              color: "#030712",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "28px",
            }}
          >
            {item.price}
          </Text>
        </Column>
      </Row>
    </Fragment>
  </Section>
);

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
  let optionsBlock: ReactNode = null;
  if (fullDetails) {
    optionsBlock = (
      <>
        <Copy>{item.description}</Copy>
        <Divider bottom={8} top={24} />
        <ProductOptions />
        <Divider bottom={6} top={8} />
      </>
    );
  } else if (detailsVariant) {
    optionsBlock = <ProductOptions />;
  }
  return (
    <>
      {topReview ? (
        <>
          <Rating
            allSolid={(item.reviewCount ?? 18) === 42}
            count={item.reviewCount ?? 18}
          />
          <Spacer height={18} />
        </>
      ) : null}
      <Header item={item} />
      <Spacer height={24} />
      {descriptionOnly ? <Copy>{item.description}</Copy> : null}
      {!descriptionOnly && !detailsVariant ? <Copy>{item.details}</Copy> : null}
      {optionsBlock}
      {!topReview && !descriptionOnly ? (
        <>
          <Spacer height={18} />
          <Rating
            allSolid={(item.reviewCount ?? 18) === 42}
            count={item.reviewCount ?? 18}
          />
        </>
      ) : null}
      <Spacer height={18} />
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
  <Section style={{ width: "100%" }}>
    <Fragment>
      <Row>
        <Column
          className="product-list-column"
          style={{ verticalAlign: "top", width: "144px" }}
        >
          <Section>
            <Img
              alt=""
              className="product-list-image"
              src={item.imageUrl}
              style={{
                borderRadius: "8px",
                maxWidth: "100%",
                verticalAlign: "middle",
                width: "100%",
              }}
              width="144"
            />
          </Section>
        </Column>
        <Column
          className="product-list-column product-list-gap"
          style={{ lineHeight: "24px", width: "24px" }}
        >
          &zwj;
        </Column>
        <Column
          className="product-list-column"
          style={{ verticalAlign: "top" }}
        >
          <ProductContent item={item} variant={variant} />
        </Column>
      </Row>
    </Fragment>
  </Section>
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
    <EmailShell>
      {variant === "with-intro" ? (
        <>
          <Heading
            style={{
              ...textStyle,
              color: "#030712",
              fontSize: "30px",
              fontWeight: 600,
              lineHeight: "36px",
              textAlign: "center",
            }}
            as="h2"
          >
            T-shirts
          </Heading>
          <Spacer height={44} />
          <Text
            style={{
              ...textStyle,
              color: "#4b5563",
              fontSize: "18px",
              lineHeight: "28px",
              textAlign: "center",
            }}
          >
            Style meets purpose in every piece. Designed with attention to
            detail and built for everyday comfort, our collection brings
            together modern design, timeless quality, and effortlessness.
          </Text>
          <Spacer height={44} />
        </>
      ) : null}
      <Section style={{ width: "100%" }}>
        <Fragment>
          {visible
            .map((item, index) => (
              <Row key={`${item.name}-${index}`}>
                <Column>
                  <ProductRow item={item} variant={rowVariant} />
                </Column>
              </Row>
            ))
            .flatMap((row, index) =>
              index === 0 && visible.length > 1
                ? [
                    row,
                    <Row key="product-gap">
                      <Column style={{ lineHeight: "44px" }}>&zwj;</Column>
                    </Row>,
                  ]
                : [row]
            )}
        </Fragment>
      </Section>
    </EmailShell>
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
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Product list</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <ProductList_ProductListWithRowsSectionWrapper {...props} />
      </Body>
    </EmailTailwind>
  </Html>
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
