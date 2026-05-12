/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
  MjmlDivider,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface ShoppingCartRowItemsProps {
  theme?: EmailThemeTokens;
  items?: {
    imageUrl?: string;
    name: string;
    price: string;
    quantity: number;
  }[];
  subtotal?: string;
  total?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const ShoppingCartRowItemsSection = ({
  items,
  subtotal,
  theme,
  total,
  variant,
}: {
  items: NonNullable<ShoppingCartRowItemsProps["items"]>;
  subtotal?: string;
  theme: EmailThemeTokens;
  total?: string;
  variant: NonNullable<ShoppingCartRowItemsProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "left";

  return (
    <MjmlWrapper
      border={`1px solid ${theme.colorBorder ?? "#e5e7eb"}`}
      borderRadius={theme.borderRadius}
      padding={theme.spacingBase ?? "16px"}
    >
      {items.map((item) => (
        <MjmlSection
          key={item.name}
          padding={`${theme.spacingBase ?? "16px"} 0`}
        >
          <MjmlColumn width="80px">
            {item.imageUrl ? (
              <MjmlImage
                alt={item.name}
                borderRadius={theme.borderRadius}
                src={item.imageUrl}
                width={64}
              />
            ) : null}
          </MjmlColumn>
          <MjmlColumn>
            <MjmlText
              align={alignText}
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase ?? "14px"}
              fontWeight={theme.fontWeightMedium ?? "500"}
              paddingBottom={theme.spacingBase ?? "16px"}
            >
              {item.name}
            </MjmlText>
            <MjmlText
              align={alignText}
              color={theme.colorTextMuted}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeSm ?? "12px"}
            >
              Qty: {item.quantity}
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width="100px">
            <MjmlText
              align="right"
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase ?? "14px"}
              fontWeight={theme.fontWeightBold ?? "700"}
            >
              {item.price}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      ))}
      <MjmlDivider borderColor={theme.colorBorder} />
      {subtotal ? (
        <MjmlSection padding={`${theme.spacingBase ?? "16px"} 0 0`}>
          <MjmlColumn>
            <MjmlText
              color={theme.colorTextMuted}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase ?? "14px"}
            >
              Subtotal
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width="100px">
            <MjmlText
              align="right"
              color={theme.colorTextMuted}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase ?? "14px"}
            >
              {subtotal}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      ) : null}
      {total ? (
        <MjmlSection padding={`${theme.spacingBase ?? "16px"} 0 0`}>
          <MjmlColumn>
            <MjmlText
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeLg ?? "16px"}
              fontWeight={theme.fontWeightBold ?? "700"}
            >
              Total
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width="100px">
            <MjmlText
              align="right"
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeLg ?? "16px"}
              fontWeight={theme.fontWeightBold ?? "700"}
            >
              {total}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      ) : null}
    </MjmlWrapper>
  );
};

export const ShoppingCartRowItems = ({
  theme = defaultTheme,
  items = [{ name: "Product 1", price: "$29.00", quantity: 2 }],
  subtotal = "$58.00",
  total = "$58.00",
  variant = "default",
}: ShoppingCartRowItemsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>cart-rows</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <ShoppingCartRowItemsSection
          items={items}
          subtotal={subtotal}
          theme={theme}
          total={total}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ShoppingCartRowItems.PreviewProps = {
  items: [
    {
      imageUrl: "https://example.com/item1.jpg",
      name: "Wireless Headphones",
      price: "$129.00",
      quantity: 1,
    },
    {
      imageUrl: "https://example.com/item2.jpg",
      name: "Phone Case",
      price: "$19.00",
      quantity: 2,
    },
  ],
  subtotal: "$167.00",
  theme: defaultTheme,
  total: "$167.00",
  variant: "default",
} satisfies ShoppingCartRowItemsProps;
