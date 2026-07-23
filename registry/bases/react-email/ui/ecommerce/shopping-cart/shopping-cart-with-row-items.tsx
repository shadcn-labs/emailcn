import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { ShoppingCartSection } from "@/registry/bases/react-email/ui/ecommerce/shopping-cart/shopping-cart-shared";
import type {
  ShoppingCartItem,
  ShoppingCartVariant,
} from "@/registry/bases/react-email/ui/ecommerce/shopping-cart/shopping-cart-shared";

export interface ShoppingCartRowItemsProps {
  items?: ShoppingCartItem[];
  theme?: TailwindConfig;
  variant?: ShoppingCartVariant;
}

export const ShoppingCartRowItemsSection = ({
  items,
  variant = "basic",
}: Omit<ShoppingCartRowItemsProps, "theme">) => (
  <ShoppingCartSection items={items} variant={variant} />
);

export const ShoppingCartRowItems = ({
  theme = defaultTheme,
  ...props
}: ShoppingCartRowItemsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Shopping cart</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ShoppingCartRowItemsSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

ShoppingCartRowItems.PreviewProps = {
  theme: defaultTheme,
  variant: "basic",
} satisfies ShoppingCartRowItemsProps;
