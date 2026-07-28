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
  MjmlTable,
  MjmlWrapper,
} from "@faire/mjml-react";
import { Fragment } from "react";
import type { ReactNode } from "react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

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

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const shoppingCartResponsiveStyles = `
  .shopping-cart-full-table table { width: 100% !important; }
`;

const defaultItems: ShoppingCartItem[] = [
  {
    colors: ["#030712", "#fffffe", "#E5E7EB"],
    description:
      "Crafted from a soft bamboo-linen blend, this shirt combines breathability, comfort...",
    editHref: "https://example.com/cart/edit",
    imageUrl: emailAsset(`shopping-cart/shopping-cart-1.jpg`),
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
    imageUrl: emailAsset(`shopping-cart/shopping-cart-2.jpg`),
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
    imageUrl: emailAsset(`shopping-cart/shopping-cart-3.jpg`),
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
    imageUrl: emailAsset(`shopping-cart/shopping-cart-4.jpg`),
    name: "Bio Bamboo Basic Shirt",
    price: "$9.99",
    quantity: 3,
    size: "Extra Large",
  },
];

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

const EditLink = ({
  align = "left",
  href,
}: {
  align?: "left" | "right";
  href: string;
}) => (
  <MjmlTable
    align={align}
    cellpadding="0"
    cellspacing="0"
    padding="0"
    role="presentation"
    width="72px"
  >
    <tbody>
      <tr>
        <td
          style={{
            fontFamily,
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "16px",
            textAlign: align,
          }}
        >
          <a
            href={href}
            style={{
              color: "#4f46e5",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            <img
              alt=""
              src={emailAsset("icon-edit-indigo.png")}
              width="16"
              style={{
                display: "inline-block",
                verticalAlign: "text-top",
              }}
            />
            <span style={{ marginLeft: "8px" }}>Edit</span>
          </a>
        </td>
      </tr>
    </tbody>
  </MjmlTable>
);

const Header = ({ item }: { item: ShoppingCartItem }) => (
  <MjmlTable
    cellpadding="0"
    cssClass="shopping-cart-full-table"
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

const BasicInfo = ({ item }: { item: ShoppingCartItem }) => (
  <MjmlTable
    cellpadding="0"
    cssClass="shopping-cart-full-table"
    cellspacing="0"
    color="#4b5563"
    fontFamily={fontFamily}
    fontSize="16px"
    fontWeight="300"
    lineHeight="24px"
    padding="0"
    role="presentation"
    tableLayout="fixed"
    width="100%"
  >
    <tbody>
      <tr>
        <td style={{ paddingRight: "16px", verticalAlign: "top" }}>
          Indigo | {item.size ?? "Large"}
        </td>
        <td
          width="96"
          style={{
            textAlign: "right",
            verticalAlign: "top",
            whiteSpace: "nowrap",
            width: "96px",
          }}
        >
          <span style={{ fontWeight: 500 }}>Quantity:</span> {item.quantity}
        </td>
      </tr>
    </tbody>
  </MjmlTable>
);

const ColorSwatches = ({ colors }: { colors: string[] }) => (
  <>
    {colors.map((color) => (
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

const Options = ({
  item,
  showQuantity,
}: {
  item: ShoppingCartItem;
  showQuantity: boolean;
}) => (
  <MjmlTable
    align="left"
    cellpadding="0"
    cssClass="shopping-cart-full-table"
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
        <td style={{ paddingRight: "24px", whiteSpace: "nowrap" }}>
          <span style={{ marginRight: "8px" }}>Colors:</span>
          <ColorSwatches
            colors={item.colors ?? ["#030712", "#fffffe", "#E5E7EB"]}
          />
        </td>
        <td style={{ paddingRight: showQuantity ? "24px" : "0" }}>
          <span style={{ marginRight: "8px" }}>Size:</span>
          {item.size ?? "Large"}
        </td>
        {showQuantity ? (
          <td style={{ whiteSpace: "nowrap" }}>
            <span style={{ marginRight: "8px" }}>Quantity:</span>
            {item.quantity}
          </td>
        ) : null}
      </tr>
    </tbody>
  </MjmlTable>
);

const QuantityAndEdit = ({ item }: { item: ShoppingCartItem }) => (
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
            color: "#4b5563",
            fontFamily,
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "20px",
          }}
        >
          Qty: {item.quantity}
        </td>
        <td width="72" style={{ textAlign: "right", width: "72px" }}>
          <EditLink
            align="right"
            href={item.editHref ?? "https://example.com/cart/edit"}
          />
        </td>
      </tr>
    </tbody>
  </MjmlTable>
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
  let details = <BasicInfo item={item} />;
  if (hasOptions) {
    details = <Options item={item} showQuantity={showQuantityOption} />;
  } else if (variant === "basic-alt") {
    details = <Copy>Indigo | {item.size ?? "Large"}</Copy>;
  }
  return (
    <>
      <Header item={item} />
      <MjmlSpacer height="24px" />
      {hasDescription ? (
        <>
          <Copy>{item.description}</Copy>
          <MjmlDivider
            borderColor="#d1d5db"
            borderWidth="1px"
            padding="24px 0 8px"
          />
        </>
      ) : null}
      {details}
      {hasDescription ? (
        <MjmlDivider
          borderColor="#d1d5db"
          borderWidth="1px"
          padding="8px 0 0"
        />
      ) : null}
      <MjmlSpacer height={hasDescription && !isAlt ? "24px" : "34px"} />
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
  <MjmlSection backgroundColor="#fffffe" padding="0 24px">
    <MjmlColumn padding="0 24px 0 0" verticalAlign="top" width="168px">
      <MjmlImage
        align="left"
        alt={item.name}
        borderRadius="8px"
        padding="0"
        src={item.imageUrl}
        width="144px"
      />
    </MjmlColumn>
    <MjmlColumn padding="0" verticalAlign="top" width="384px">
      <RowContent item={item} variant={variant} />
    </MjmlColumn>
  </MjmlSection>
);

const ShoppingCartSection = ({
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
    <>
      <MjmlSection backgroundColor="#fffffe" padding="44px 0 0">
        <MjmlColumn padding="0">
          <MjmlSpacer height="1px" />
        </MjmlColumn>
      </MjmlSection>
      {visible.map((item, index) => (
        <Fragment key={`${item.name}-${index}`}>
          <CartRow item={item} variant={rowVariant} />
          {index < visible.length - 1 ? (
            <MjmlSection backgroundColor="#fffffe" padding="0">
              <MjmlColumn padding="0">
                <MjmlSpacer height="44px" />
              </MjmlColumn>
            </MjmlSection>
          ) : null}
        </Fragment>
      ))}
      {variant === "example-with-cta" ? (
        <MjmlSection backgroundColor="#fffffe" padding="64px 24px 0">
          <MjmlColumn padding="0">
            <MjmlButton
              backgroundColor="#4f46e5"
              borderRadius="8px"
              color="#f8fafc"
              fontFamily={fontFamily}
              fontSize="16px"
              fontWeight="500"
              href="https://example.com/checkout"
              innerPadding="14px 22px"
              lineHeight="16px"
              padding="0"
            >
              Checkout now
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>
      ) : null}
      <MjmlSection backgroundColor="#fffffe" padding="0">
        <MjmlColumn padding="0">
          <MjmlSpacer height="44px" />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};

interface ShoppingCart_ShoppingCartRowItemsProps {
  items?: ShoppingCartItem[];
  theme?: EmailTheme;
  variant?: ShoppingCartVariant;
}

const ShoppingCart_ShoppingCartRowItemsSection = ({
  items,
  variant = "basic",
}: Omit<ShoppingCart_ShoppingCartRowItemsProps, "theme">) => (
  <ShoppingCartSection items={items} variant={variant} />
);

const ShoppingCart_ShoppingCartRowItems = ({
  theme = defaultTheme,
  ...props
}: ShoppingCart_ShoppingCartRowItemsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Shopping cart</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{shoppingCartResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <ShoppingCart_ShoppingCartRowItemsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ShoppingCart_ShoppingCartRowItems.PreviewProps = {
  theme: defaultTheme,
  variant: "basic",
} satisfies ShoppingCart_ShoppingCartRowItemsProps;

const __ShoppingCart = ShoppingCart_ShoppingCartRowItems;

export interface ShoppingCartProps extends Omit<
  Parameters<typeof __ShoppingCart>[0],
  "theme"
> {
  theme?: Parameters<typeof __ShoppingCart>[0]["theme"];
}

export const ShoppingCart = (props: ShoppingCartProps) => (
  <__ShoppingCart {...props} />
);

ShoppingCart.PreviewProps = {} satisfies ShoppingCartProps;
