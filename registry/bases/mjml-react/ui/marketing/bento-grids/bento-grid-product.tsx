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
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type BentoGridProductVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface BentoGridProductProps {
  theme?: EmailThemeTokens;
  heading?: string;
  products?: {
    imageUrl: string;
    imageAlt: string;
    name: string;
    price: string;
  }[];
  variant?: BentoGridProductVariant;
}
const BentoGridProductSection = ({
  heading,
  products,
  theme,
  variant,
}: {
  heading: string;
  products: BentoGridProductProps["products"];
  theme: EmailThemeTokens;
  variant: BentoGridProductVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {heading ? (
      <MjmlColumn>
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeHeading}
          fontWeight={theme.fontWeightBold}
          paddingBottom={theme.spacingXl ?? "48px"}
        >
          {heading}
        </MjmlText>
      </MjmlColumn>
    ) : null}
    {(products ?? []).slice(0, 3).map((p, i) => (
      <MjmlColumn
        key={p.name + i}
        width="33.33%"
        padding="8px"
        verticalAlign="top"
      >
        <MjmlImage
          alt={p.imageAlt}
          borderRadius={theme.borderRadius}
          src={p.imageUrl}
          width={190}
          paddingBottom={theme.spacingBase ?? "12px"}
        />
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase}
          fontWeight={theme.fontWeightMedium}
          paddingBottom={theme.spacingBase ?? "4px"}
        >
          {p.name}
        </MjmlText>
        <MjmlText
          align="center"
          color={theme.colorPrimary}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm}
          fontWeight={theme.fontWeightMedium}
        >
          {p.price}
        </MjmlText>
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const BentoGridProduct = ({
  theme = defaultTheme,
  heading = "Products",
  products = [
    {
      imageAlt: "Product 1",
      imageUrl: "https://placehold.co/300x300?text=Product+1",
      name: "Product One",
      price: "$29",
    },
    {
      imageAlt: "Product 2",
      imageUrl: "https://placehold.co/300x300?text=Product+2",
      name: "Product Two",
      price: "$49",
    },
    {
      imageAlt: "Product 3",
      imageUrl: "https://placehold.co/300x300?text=Product+3",
      name: "Product Three",
      price: "$79",
    },
  ],
  variant = "default",
}: BentoGridProductProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>bento product</MjmlPreview>
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
        <BentoGridProductSection
          heading={heading}
          products={products}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
BentoGridProduct.PreviewProps = {
  heading: "Featured Products",
  products: [
    {
      imageAlt: "Widget",
      imageUrl: "https://placehold.co/300x300?text=Widget",
      name: "Premium Widget",
      price: "$39",
    },
    {
      imageAlt: "Gadget",
      imageUrl: "https://placehold.co/300x300?text=Gadget",
      name: "Super Gadget",
      price: "$59",
    },
    {
      imageAlt: "Tool",
      imageUrl: "https://placehold.co/300x300?text=Tool",
      name: "Pro Tool",
      price: "$99",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridProductProps;
