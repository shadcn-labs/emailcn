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

export const shoppingCartResponsiveStyles = "";

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

const EditButton = ({ href }: { href: string }) => (
  <MjmlButton
    align="left"
    backgroundColor="transparent"
    color="#4f46e5"
    fontFamily={fontFamily}
    fontSize="16px"
    fontWeight="500"
    href={href}
    innerPadding="4px 0"
    lineHeight="16px"
    padding="0"
  >
    ✎ Edit
  </MjmlButton>
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
  let details = `Indigo · ${item.size ?? "Large"}`;
  if (hasOptions) {
    const quantity = showQuantityOption ? ` · Quantity: ${item.quantity}` : "";
    details = `Colors: ${(item.colors ?? ["#030712", "#fffffe", "#E5E7EB"]).length} options · Size: ${item.size ?? "Large"}${quantity}`;
  } else if (variant === "basic") {
    details = `${details} · Quantity: ${item.quantity}`;
  }

  return (
    <>
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
      <Copy>{details}</Copy>
      {hasDescription ? (
        <MjmlDivider
          borderColor="#d1d5db"
          borderWidth="1px"
          padding="8px 0 0"
        />
      ) : null}
      <MjmlSpacer height={hasDescription && !isAlt ? "24px" : "34px"} />
      {isAlt ? (
        <>
          <MjmlText
            color="#4b5563"
            fontFamily={fontFamily}
            fontSize="14px"
            fontWeight="500"
            lineHeight="20px"
            padding="0"
          >
            Qty: {item.quantity}
          </MjmlText>
          <MjmlSpacer height="8px" />
          <EditButton href={item.editHref ?? "https://example.com/cart/edit"} />
        </>
      ) : (
        <EditButton href={item.editHref ?? "https://example.com/cart/edit"} />
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
        alt={item.name}
        borderRadius="8px"
        padding="0"
        src={item.imageUrl}
        width="144px"
      />
    </MjmlColumn>
    <MjmlColumn padding="0" verticalAlign="top">
      <RowContent item={item} variant={variant} />
    </MjmlColumn>
  </MjmlSection>
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
