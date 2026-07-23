/* eslint-disable @next/next/no-img-element, complexity */
import type { CSSProperties, ReactNode } from "react";

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
  <div style={{ lineHeight: `${height}px` }}>&zwj;</div>
);

const EditLink = ({ align, href }: { align?: "right"; href: string }) => (
  <div style={align ? { textAlign: align } : undefined}>
    <a
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
        <img
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
    </a>
  </div>
);

const Divider = ({
  bottom = 8,
  top = 24,
}: {
  bottom?: number;
  top?: number;
}) => (
  <div
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
  </div>
);

const Header = ({ item }: { item: ShoppingCartItem }) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    style={{ width: "100%" }}
  >
    <tbody>
      <tr>
        <td>
          <h3
            style={{
              ...textStyle,
              color: "#030712",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "28px",
            }}
          >
            {item.name}
          </h3>
        </td>
        <td style={{ textAlign: "right", verticalAlign: "top", width: "80px" }}>
          <p
            style={{
              ...textStyle,
              color: "#030712",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "28px",
            }}
          >
            {item.price}
          </p>
        </td>
      </tr>
    </tbody>
  </table>
);

const Copy = ({ children }: { children: ReactNode }) => (
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

const BasicInfo = ({ item }: { item: ShoppingCartItem }) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    style={{ width: "100%" }}
  >
    <tbody>
      <tr>
        <td style={{ paddingRight: "16px", verticalAlign: "top" }}>
          <Copy>Indigo | {item.size ?? "Large"}</Copy>
        </td>
        <td style={{ textAlign: "right", verticalAlign: "top", width: "96px" }}>
          <p
            style={{
              ...textStyle,
              color: "#4b5563",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
            }}
          >
            <span style={{ fontWeight: 500 }}>Quantity:</span> {item.quantity}
          </p>
        </td>
      </tr>
    </tbody>
  </table>
);

const ColorSwatches = ({ colors }: { colors: string[] }) => (
  <div style={{ fontSize: 0, lineHeight: 1 }}>
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
  </div>
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
  <td
    className="shopping-cart-option"
    style={{ paddingRight: last ? undefined : "24px" }}
  >
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
            {`${label}:`}
          </td>
          <td
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
          </td>
        </tr>
      </tbody>
    </table>
  </td>
);

const Options = ({
  item,
  showQuantity = true,
}: {
  item: ShoppingCartItem;
  showQuantity?: boolean;
}) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    className="shopping-cart-options"
    role="presentation"
  >
    <tbody>
      <tr>
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
      </tr>
    </tbody>
  </table>
);

const QuantityAndEdit = ({ item }: { item: ShoppingCartItem }) => (
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
          style={{
            color: "#4b5563",
            fontFamily,
            fontWeight: 500,
          }}
        >
          Qty: {item.quantity}
        </td>
        <td>
          <EditLink
            align="right"
            href={item.editHref ?? "https://example.com/cart/edit"}
          />
        </td>
      </tr>
    </tbody>
  </table>
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
          className="shopping-cart-column"
          style={{ verticalAlign: "top", width: "144px" }}
        >
          <div>
            <img
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
          </div>
        </td>
        <td
          className="shopping-cart-column shopping-cart-gap"
          style={{ width: "24px" }}
        >
          &zwj;
        </td>
        <td className="shopping-cart-column" style={{ verticalAlign: "top" }}>
          <RowContent item={item} variant={variant} />
        </td>
      </tr>
    </tbody>
  </table>
);

const Checkout = () => (
  <div style={{ textAlign: "center" }}>
    <a
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
    </a>
  </div>
);

const EmailShell = ({ children }: { children: ReactNode }) => (
  <>
    <style>{shoppingCartResponsiveStyles}</style>
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
                  <td style={{ padding: "0 24px" }}>
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
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        style={{ width: "100%" }}
      >
        <tbody>
          {visible.flatMap((item, index) => [
            <tr key={`${item.name}-row`}>
              <td>
                <CartRow item={item} variant={rowVariant} />
              </td>
            </tr>,
            index < visible.length - 1 ? (
              <tr key={`${item.name}-gap`}>
                <td style={{ lineHeight: "44px" }}>&zwj;</td>
              </tr>
            ) : null,
          ])}
        </tbody>
      </table>
      {variant === "example-with-cta" ? (
        <>
          <Spacer height={64} />
          <Checkout />
        </>
      ) : null}
    </EmailShell>
  );
};
