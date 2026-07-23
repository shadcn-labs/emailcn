import { Section, Link, Row, Column, Heading, Text, Img } from "jsx-email";
import type { CSSProperties, ReactNode } from "react";
import { Fragment } from "react";

export type ShoppingCartVariant =
  | "basic"
  | "basic-alt"
  | "with-details"
  | "details-alt"
  | "full-details"
  | "full-details-alt"
  | "example-with-cta";

export interface ShoppingCartItem {
  colors?: string[];
  description?: string;
  editHref?: string;
  imageUrl?: string;
  name: string;
  price: string;
  quantity: number;
  size?: string;
}

const ASSET_ROOT = "https://emailcn.vercel.app/api/email-assets";
const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const shoppingCartResponsiveStyles = `
  @media only screen and (max-width: 599px) {
    .shopping-cart-column { display: block !important; width: 100% !important; }
    .shopping-cart-image { width: 100% !important; }
    .shopping-cart-gap { line-height: 24px !important; }
    .shopping-cart-options { line-height: 32px !important; }
  }
  @media only screen and (max-width: 430px) {
    .shopping-cart-option { display: inline-block !important; }
  }
`;

const defaultItems: ShoppingCartItem[] = [
  {
    colors: ["#030712", "#fffffe", "#E5E7EB"],
    description:
      "Crafted from a soft bamboo-linen blend, this shirt combines breathability, comfort...",
    editHref: "https://example.com/cart/edit",
    imageUrl: `${ASSET_ROOT}/shopping-cart/shopping-cart-1.jpg`,
    name: "Bio Bamboo Indigo Shirt",
    price: "$9.99",
    quantity: 2,
    size: "Large",
  },
  {
    colors: ["#030712", "#E5E7EB"],
    description:
      "Crafted from a soft bamboo-linen blend, this shirt combines breathability, comfort...",
    editHref: "https://example.com/cart/edit",
    imageUrl: `${ASSET_ROOT}/shopping-cart/shopping-cart-2.jpg`,
    name: "Bio Bamboo Earth Shirt",
    price: "$9.99",
    quantity: 2,
    size: "Medium",
  },
  {
    colors: ["#E5E7EB", "#fffffe"],
    description:
      "Crafted from a soft bamboo-linen blend, this shirt combines breathability, comfort...",
    editHref: "https://example.com/cart/edit",
    imageUrl: `${ASSET_ROOT}/shopping-cart/shopping-cart-3.jpg`,
    name: "Bio Bamboo Natural Shirt",
    price: "$9.99",
    quantity: 1,
    size: "Small",
  },
  {
    colors: ["#E5E7EB", "#030712"],
    description:
      "Crafted from a soft bamboo-linen blend, this shirt combines breathability, comfort...",
    editHref: "https://example.com/cart/edit",
    imageUrl: `${ASSET_ROOT}/shopping-cart/shopping-cart-4.jpg`,
    name: "Bio Bamboo Basic Shirt",
    price: "$9.99",
    quantity: 3,
    size: "Extra Large",
  },
];

const textStyle = { fontFamily, margin: 0 } as const;
type EmailCssProperties = CSSProperties & { msoTextRaise?: string };
const msoRaise6: EmailCssProperties = { msoTextRaise: "6px" };
const msoRaise16: EmailCssProperties = { msoTextRaise: "16px" };

const Spacer = ({ height }: { height: number }) => (
  <Section style={{ lineHeight: `${height}px` }}>&zwj;</Section>
);

const EditLink = ({ align, href }: { align?: "right"; href: string }) => (
  <Section style={align ? { textAlign: align } : undefined}>
    <Link
      href={href}
      style={{
        backgroundColor: "#fffffe",
        borderRadius: "8px",
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
      <span style={msoRaise6}>
        <Img
          alt=""
          src={`${ASSET_ROOT}/icon-edit-indigo.png`}
          style={{
            maxWidth: "100%",
            verticalAlign: "text-top",
          }}
          width="16"
        />
      </span>
      <span style={{ ...msoRaise6, marginLeft: "8px" }}>Edit</span>
    </Link>
  </Section>
);

const Divider = ({
  bottom = 8,
  top = 24,
}: {
  bottom?: number;
  top?: number;
}) => (
  <Section
    style={{
      backgroundColor: "#d1d5db",
      height: "1px",
      lineHeight: "1px",
      margin: 0,
      ...(bottom ? { marginBottom: `${bottom}px` } : {}),
      marginTop: `${top}px`,
    }}
  >
    &zwj;
  </Section>
);

const Header = ({ item }: { item: ShoppingCartItem }) => (
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

const BasicInfo = ({ item }: { item: ShoppingCartItem }) => (
  <Section style={{ width: "100%" }}>
    <Fragment>
      <Row>
        <Column style={{ paddingRight: "16px", verticalAlign: "top" }}>
          <Copy>Indigo | {item.size ?? "Large"}</Copy>
        </Column>
        <Column
          style={{ textAlign: "right", verticalAlign: "top", width: "96px" }}
        >
          <Text
            style={{
              ...textStyle,
              color: "#4b5563",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
            }}
          >
            <span style={{ fontWeight: 500 }}>Quantity:</span> {item.quantity}
          </Text>
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const ColorSwatches = ({ colors }: { colors: string[] }) => (
  <Section style={{ fontSize: 0, lineHeight: 1 }}>
    {colors.map((color) => (
      <span key={color} style={{ display: "inline-block", maxWidth: "12px" }}>
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
);

const Option = ({
  children,
  last = false,
  label,
  unstyled = false,
}: {
  children: ReactNode;
  label: string;
  last?: boolean;
  unstyled?: boolean;
}) => (
  <Column
    className="shopping-cart-option"
    style={{ paddingRight: last ? undefined : "24px" }}
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
            {`${label}:`}
          </Column>
          <Column
            style={
              unstyled
                ? undefined
                : {
                    color: "#4b5563",
                    fontFamily,
                    fontSize: "14px",
                    lineHeight: "20px",
                  }
            }
          >
            {children}
          </Column>
        </Row>
      </Fragment>
    </Section>
  </Column>
);

const Options = ({
  item,
  showQuantity = true,
}: {
  item: ShoppingCartItem;
  showQuantity?: boolean;
}) => (
  <Section className="shopping-cart-options">
    <Fragment>
      <Row>
        <Option label="Colors" unstyled>
          <ColorSwatches
            colors={item.colors ?? ["#030712", "#fffffe", "#E5E7EB"]}
          />
        </Option>
        <Option label="Size" last={!showQuantity}>
          {item.size ?? "Large"}
        </Option>
        {showQuantity ? (
          <Option label="Quantity" last>
            {item.quantity}
          </Option>
        ) : null}
      </Row>
    </Fragment>
  </Section>
);

const QuantityAndEdit = ({ item }: { item: ShoppingCartItem }) => (
  <Section style={{ width: "100%" }}>
    <Fragment>
      <Row>
        <Column
          style={{
            color: "#4b5563",
            fontFamily,
            fontWeight: 500,
          }}
        >
          Qty: {item.quantity}
        </Column>
        <Column>
          <EditLink
            align="right"
            href={item.editHref ?? "https://example.com/cart/edit"}
          />
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const RowContent = ({
  item,
  variant,
}: {
  item: ShoppingCartItem;
  variant: ShoppingCartVariant;
}) => {
  const isAlt = variant.endsWith("-alt") || variant === "basic-alt";
  const hasOptions = !["basic", "basic-alt"].includes(variant);
  const hasDescription = [
    "full-details",
    "full-details-alt",
    "example-with-cta",
  ].includes(variant);
  const showQuantityOption = variant !== "full-details-alt";
  let details: ReactNode;

  if (hasOptions) {
    details = <Options item={item} showQuantity={showQuantityOption} />;
  } else if (variant === "basic") {
    details = <BasicInfo item={item} />;
  } else {
    details = <Copy>Indigo | {item.size ?? "Large"}</Copy>;
  }

  return (
    <>
      <Header item={item} />
      <Spacer height={24} />
      {hasDescription ? (
        <>
          <Copy>{item.description}</Copy>
          <Divider />
        </>
      ) : null}
      {details}
      {hasDescription ? <Divider bottom={0} top={8} /> : null}
      <Spacer height={hasDescription && !isAlt ? 24 : 34} />
      {isAlt ? (
        <QuantityAndEdit item={item} />
      ) : (
        <EditLink href={item.editHref ?? "https://example.com/cart/edit"} />
      )}
    </>
  );
};

const CartRow = ({
  item,
  variant,
}: {
  item: ShoppingCartItem;
  variant: ShoppingCartVariant;
}) => (
  <Section style={{ width: "100%" }}>
    <Fragment>
      <Row>
        <Column
          className="shopping-cart-column"
          style={{ verticalAlign: "top", width: "144px" }}
        >
          <Section>
            <Img
              alt=""
              className="shopping-cart-image"
              src={item.imageUrl}
              style={{
                borderRadius: "8px",
                maxWidth: "100%",
                verticalAlign: "middle",
              }}
              width="144"
            />
          </Section>
        </Column>
        <Column
          className="shopping-cart-column shopping-cart-gap"
          style={{ width: "24px" }}
        >
          &zwj;
        </Column>
        <Column
          className="shopping-cart-column"
          style={{ verticalAlign: "top" }}
        >
          <RowContent item={item} variant={variant} />
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const Checkout = () => (
  <Section style={{ textAlign: "center" }}>
    <Link
      href="https://example.com/checkout"
      style={{
        backgroundColor: "#4f46e5",
        borderRadius: "8px",
        color: "#f8fafc",
        display: "inline-block",
        fontFamily,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: 1,
        padding: "14px 22px",
        textAlign: "center",
        textDecoration: "none",
      }}
    >
      <span style={msoRaise16}>Checkout now</span>
    </Link>
  </Section>
);

const EmailShell = ({ children }: { children: ReactNode }) => (
  <>
    <style>{shoppingCartResponsiveStyles}</style>
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

export const ShoppingCartSection = ({
  items,
  variant = "basic",
}: {
  items?: ShoppingCartItem[];
  variant?: ShoppingCartVariant;
}) => {
  const list = items ?? defaultItems;
  const visible =
    variant === "example-with-cta"
      ? list.slice(0, 4).map((item) => ({
          ...item,
          colors: item.colors?.slice(0, 2),
        }))
      : list.slice(0, 1);
  const rowVariant =
    variant === "example-with-cta" ? "example-with-cta" : variant;

  return (
    <EmailShell>
      <Section style={{ width: "100%" }}>
        <Fragment>
          {visible.flatMap((item, index) => [
            <Row key={`${item.name}-row`}>
              <Column>
                <CartRow item={item} variant={rowVariant} />
              </Column>
            </Row>,
            index < visible.length - 1 ? (
              <Row key={`${item.name}-gap`}>
                <Column style={{ lineHeight: "44px" }}>&zwj;</Column>
              </Row>
            ) : null,
          ])}
        </Fragment>
      </Section>
      {variant === "example-with-cta" ? (
        <>
          <Spacer height={64} />
          <Checkout />
        </>
      ) : null}
    </EmailShell>
  );
};
