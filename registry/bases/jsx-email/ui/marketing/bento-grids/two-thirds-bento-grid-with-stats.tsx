/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      {heading ? (
        <Column>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeHeading,
              fontWeight: theme.fontWeightBold,
              margin: 0,
              paddingBottom: theme.spacingXl ?? "48px",
              textAlign: "center",
            }}
          >
            {heading}
          </Text>
        </Column>
      ) : null}
      {(products ?? []).slice(0, 3).map((p, i) => (
        <Column
          key={p.name + i}
          style={{ padding: "8px", verticalAlign: "top", width: "33.33%" }}
        >
          <Img
            alt={p.imageAlt}
            src={p.imageUrl}
            width={190}
            style={{
              borderRadius: theme.borderRadius,
              display: "block",
              margin: "0 auto",
              maxWidth: "100%",
              paddingBottom: theme.spacingBase ?? "12px",
            }}
          />
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase,
              fontWeight: theme.fontWeightMedium,
              margin: 0,
              paddingBottom: theme.spacingBase ?? "4px",
              textAlign: "center",
            }}
          >
            {p.name}
          </Text>
          <Text
            style={{
              color: theme.colorPrimary,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm,
              fontWeight: theme.fontWeightMedium,
              margin: 0,
              textAlign: "center",
            }}
          >
            {p.price}
          </Text>
        </Column>
      ))}
    </Row>
  </Section>
);
export const TwoThirdsBentoGridWithStats = ({
  theme = defaultTheme,
  heading = "Products",
  products = [
    {
      imageAlt: "Product 1",
      imageUrl: "https://static.photos/technology/300x300/2",
      name: "Product One",
      price: "$29",
    },
    {
      imageAlt: "Product 2",
      imageUrl: "https://static.photos/technology/300x300/3",
      name: "Product Two",
      price: "$49",
    },
    {
      imageAlt: "Product 3",
      imageUrl: "https://static.photos/technology/300x300/4",
      name: "Product Three",
      price: "$79",
    },
  ],
  variant = "default",
}: BentoGridProductProps) => (
  <Html>
    <Head />
    <Preview>bento product</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <BentoGridProductSection
            heading={heading}
            products={products}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
TwoThirdsBentoGridWithStats.PreviewProps = {
  heading: "Featured Products",
  products: [
    {
      imageAlt: "Widget",
      imageUrl: "https://static.photos/technology/300x300/5",
      name: "Premium Widget",
      price: "$39",
    },
    {
      imageAlt: "Gadget",
      imageUrl: "https://static.photos/technology/300x300/6",
      name: "Super Gadget",
      price: "$59",
    },
    {
      imageAlt: "Tool",
      imageUrl: "https://static.photos/technology/300x300/7",
      name: "Pro Tool",
      price: "$99",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridProductProps;
