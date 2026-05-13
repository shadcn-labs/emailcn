/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Head,
  Html,
  Hr,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface ShoppingCartRowItemsProps {
  theme?: TailwindConfig;
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

export const ShoppingCartRowItemsSection = ({
  items = [
    { name: "Item 1", price: "$29.00", quantity: 1 },
    { name: "Item 2", price: "$39.00", quantity: 2 },
  ],
  subtotal = "$107.00",
  total = "$107.00",
  variant = "default",
}: Omit<ShoppingCartRowItemsProps, "theme">) => {
  const alignClass =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-left";

  return (
    <Section className="py-12">
      {items.map((item, index) => (
        <Row key={`${item.name}-${index}`} className="mb-4">
          <Column className="w-[80px] align-top">
            {item.imageUrl ? (
              <Img
                src={item.imageUrl}
                alt={item.name}
                className="h-auto max-w-full rounded-md object-cover"
              />
            ) : null}
          </Column>
          <Column className="pl-4 align-top">
            <Text
              className={`mb-1 text-base font-medium text-foreground ${alignClass}`}
            >
              {item.name}
            </Text>
            <Text className={`m-0 text-sm text-foreground-muted ${alignClass}`}>
              Qty: {item.quantity}
            </Text>
          </Column>
          <Column className="w-[80px] text-right align-top">
            <Text className="m-0 text-base font-medium text-foreground">
              {item.price}
            </Text>
          </Column>
        </Row>
      ))}
      <Hr className="border-border" />
      {subtotal ? (
        <Row className="mt-4">
          <Column>
            <Text className="m-0 text-base text-foreground-muted">
              Subtotal
            </Text>
          </Column>
          <Column className="text-right">
            <Text className="m-0 text-base text-foreground">{subtotal}</Text>
          </Column>
        </Row>
      ) : null}
      <Hr className="border-border" />
      {total ? (
        <Row className="mt-2">
          <Column>
            <Text className="m-0 text-lg font-bold text-foreground">Total</Text>
          </Column>
          <Column className="text-right">
            <Text className="m-0 text-lg font-bold text-foreground">
              {total}
            </Text>
          </Column>
        </Row>
      ) : null}
    </Section>
  );
};

export const ShoppingCartRowItems = ({
  theme = defaultTheme,
  items = [
    { name: "Item 1", price: "$29.00", quantity: 1 },
    { name: "Item 2", price: "$39.00", quantity: 2 },
  ],
  subtotal = "$107.00",
  total = "$107.00",
  variant = "default",
}: ShoppingCartRowItemsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Shopping Cart</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ShoppingCartRowItemsSection
          items={items}
          subtotal={subtotal}
          total={total}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

ShoppingCartRowItems.PreviewProps = {
  items: [
    {
      imageUrl: "https://static.photos/technology/640x640/2",
      name: "Wireless Headphones",
      price: "$149.00",
      quantity: 1,
    },
    {
      imageUrl: "https://static.photos/technology/640x640/3",
      name: "Leather Case",
      price: "$39.00",
      quantity: 2,
    },
    {
      imageUrl: "https://static.photos/technology/640x640/4",
      name: "USB-C Cable",
      price: "$19.00",
      quantity: 1,
    },
  ],
  subtotal: "$246.00",
  theme: defaultTheme,
  total: "$246.00",
  variant: "default",
} satisfies ShoppingCartRowItemsProps;
