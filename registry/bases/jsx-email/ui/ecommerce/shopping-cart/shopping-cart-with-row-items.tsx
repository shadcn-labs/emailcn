import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { ShoppingCartSection } from "@/registry/bases/jsx-email/ui/ecommerce/shopping-cart/shopping-cart-shared";
import type {
  ShoppingCartItem,
  ShoppingCartVariant,
} from "@/registry/bases/jsx-email/ui/ecommerce/shopping-cart/shopping-cart-shared";

export interface ShoppingCartRowItemsProps {
  items?: ShoppingCartItem[];
  theme?: EmailThemeTokens;
  variant?: ShoppingCartVariant;
}

export const ShoppingCartRowItemsSection = ({
  items,
  variant = "basic",
}: Omit<ShoppingCartRowItemsProps, "theme">) => (
  <ShoppingCartSection items={items} variant={variant} />
);

export const ShoppingCartRowItems = ({
  theme: _theme = defaultTheme,
  ...props
}: ShoppingCartRowItemsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Shopping cart</Preview>
    <Body style={{ margin: 0 }}>
      <ShoppingCartRowItemsSection {...props} />
    </Body>
  </Html>
);

ShoppingCartRowItems.PreviewProps = {
  theme: defaultTheme,
  variant: "basic",
} satisfies ShoppingCartRowItemsProps;
