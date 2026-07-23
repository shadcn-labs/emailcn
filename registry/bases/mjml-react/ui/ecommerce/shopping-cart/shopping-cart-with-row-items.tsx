import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  shoppingCartResponsiveStyles,
  ShoppingCartSection,
} from "@/registry/bases/mjml-react/ui/ecommerce/shopping-cart/shopping-cart-shared";
import type {
  ShoppingCartItem,
  ShoppingCartVariant,
} from "@/registry/bases/mjml-react/ui/ecommerce/shopping-cart/shopping-cart-shared";

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
  theme = defaultTheme,
  ...props
}: ShoppingCartRowItemsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Shopping cart</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{shoppingCartResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <ShoppingCartRowItemsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ShoppingCartRowItems.PreviewProps = {
  theme: defaultTheme,
  variant: "basic",
} satisfies ShoppingCartRowItemsProps;
