/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
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

export interface ProductDetailTwoImagesProps {
  theme?: EmailThemeTokens;
  imageUrl1?: string;
  imageUrl2?: string;
  name?: string;
  price?: string;
  description?: string;
  features?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const ProductDetailTwoImagesSection = ({
  ctaHref,
  ctaLabel,
  description,
  features,
  imageUrl1,
  imageUrl2,
  name,
  price,
  theme,
  variant,
}: {
  ctaHref: string;
  ctaLabel?: string;
  description?: string;
  features?: string[];
  imageUrl1?: string;
  imageUrl2?: string;
  name: string;
  price: string;
  theme: EmailThemeTokens;
  variant: NonNullable<ProductDetailTwoImagesProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";

  return (
    <Section style={{ padding: `${theme.spacingXl ?? "24px"} 0` }}>
      <Row>
        {imageUrl1 || imageUrl2 ? (
          <Section style={{ padding: "0 0 24px" }}>
            <Row>
              {imageUrl1 ? (
                <Column
                  style={{
                    paddingRight: theme.spacingBase ?? "16px",
                    width: "50%",
                  }}
                >
                  <Img
                    alt={`${name} 1`}
                    src={imageUrl1}
                    width={200}
                    style={{
                      borderRadius: theme.borderRadius,
                      display: "block",
                      margin: "0 auto",
                      maxWidth: "100%",
                    }}
                  />
                </Column>
              ) : null}
              {imageUrl2 ? (
                <Column
                  style={{
                    paddingLeft: theme.spacingBase ?? "16px",
                    width: "50%",
                  }}
                >
                  <Img
                    alt={`${name} 2`}
                    src={imageUrl2}
                    width={200}
                    style={{
                      borderRadius: theme.borderRadius,
                      display: "block",
                      margin: "0 auto",
                      maxWidth: "100%",
                    }}
                  />
                </Column>
              ) : null}
            </Row>
          </Section>
        ) : null}
        <Column>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeXl ?? "20px",
              fontWeight: theme.fontWeightMedium ?? "500",
              margin: 0,
              paddingBottom: theme.spacingBase ?? "16px",
              textAlign: alignText,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              color: theme.colorPrimary,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeXl ?? "20px",
              fontWeight: theme.fontWeightBold ?? "700",
              margin: 0,
              paddingBottom: theme.spacingBase ?? "16px",
              textAlign: alignText,
            }}
          >
            {price}
          </Text>
          {description ? (
            <Text
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeBase ?? "14px",
                lineHeight: theme.lineHeightBase,
                margin: 0,
                paddingBottom: theme.spacingBase ?? "16px",
                textAlign: alignText,
              }}
            >
              {description}
            </Text>
          ) : null}
          {features ? (
            <Text
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeBase ?? "14px",
                margin: 0,
                paddingBottom: theme.spacingBase ?? "16px",
                textAlign: alignText,
              }}
            >
              {features.map((f) => `\u2713 ${f}`).join("\n")}
            </Text>
          ) : null}
          {ctaLabel && ctaHref ? (
            <Button
              href={ctaHref}
              align={alignText}
              width={160}
              height={40}
              style={{
                backgroundColor: theme.colorPrimary,
                borderRadius: theme.borderRadius,
                color: theme.colorPrimaryForeground ?? "#ffffff",
                display: "inline-block",
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeSm ?? "14px",
                fontWeight: theme.fontWeightMedium ?? "500",
                height: "auto",
                padding: `${theme.spacingBase ?? "16px"} ${theme.spacingLg ?? "24px"}`,
                textDecoration: "none",
                width: "auto",
              }}
            >
              {ctaLabel}
            </Button>
          ) : null}
        </Column>
      </Row>
    </Section>
  );
};

export const ProductDetailTwoImages = ({
  theme = defaultTheme,
  imageUrl1,
  imageUrl2,
  name = "Product Name",
  price = "$99.00",
  description = "Product description.",
  features,
  ctaLabel = "Buy Now",
  ctaHref = "#",
  variant = "default",
}: ProductDetailTwoImagesProps) => (
  <Html>
    <Head />
    <Preview>two-images-detail</Preview>
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
          <ProductDetailTwoImagesSection
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            description={description}
            features={features}
            imageUrl1={imageUrl1}
            imageUrl2={imageUrl2}
            name={name}
            price={price}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

ProductDetailTwoImages.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Add to Cart",
  description: "See both sides of this beautifully designed accessory.",
  features: ["Premium finish", "Lightweight", "1 year warranty"],
  imageUrl1: "https://static.photos/technology/800x600/2",
  imageUrl2: "https://static.photos/technology/800x600/3",
  name: "Designer Sunglasses",
  price: "$179.00",
  theme: defaultTheme,
  variant: "default",
} satisfies ProductDetailTwoImagesProps;
