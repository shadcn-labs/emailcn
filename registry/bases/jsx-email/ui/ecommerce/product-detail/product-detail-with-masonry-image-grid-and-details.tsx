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

export interface ProductDetailMasonryProps {
  theme?: EmailThemeTokens;
  images?: string[];
  name?: string;
  price?: string;
  description?: string;
  features?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const ProductDetailMasonrySection = ({
  ctaHref,
  ctaLabel,
  description,
  features,
  images,
  name,
  price,
  theme,
  variant,
}: {
  ctaHref: string;
  ctaLabel?: string;
  description?: string;
  features?: string[];
  images?: string[];
  name: string;
  price: string;
  theme: EmailThemeTokens;
  variant: NonNullable<ProductDetailMasonryProps["variant"]>;
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
        {images && images.length > 0 ? (
          <Section style={{ padding: "0 0 24px" }}>
            <Row>
              <Column
                style={{
                  paddingRight: theme.spacingBase ?? "16px",
                  width: "50%",
                }}
              >
                {images[0] ? (
                  <Img
                    alt={`${name} 1`}
                    src={images[0]}
                    width={200}
                    style={{
                      borderRadius: theme.borderRadius,
                      display: "block",
                      margin: "0 auto",
                      maxWidth: "100%",
                      paddingBottom: theme.spacingBase ?? "16px",
                    }}
                  />
                ) : null}
                {images[2] ? (
                  <Img
                    alt={`${name} 3`}
                    src={images[2]}
                    width={200}
                    style={{
                      borderRadius: theme.borderRadius,
                      display: "block",
                      margin: "0 auto",
                      maxWidth: "100%",
                    }}
                  />
                ) : null}
              </Column>
              <Column
                style={{
                  paddingLeft: theme.spacingBase ?? "16px",
                  width: "50%",
                }}
              >
                {images[1] ? (
                  <Img
                    alt={`${name} 2`}
                    src={images[1]}
                    width={200}
                    style={{
                      borderRadius: theme.borderRadius,
                      display: "block",
                      margin: "0 auto",
                      maxWidth: "100%",
                      paddingBottom: theme.spacingBase ?? "16px",
                    }}
                  />
                ) : null}
                {images[3] ? (
                  <Img
                    alt={`${name} 4`}
                    src={images[3]}
                    width={200}
                    style={{
                      borderRadius: theme.borderRadius,
                      display: "block",
                      margin: "0 auto",
                      maxWidth: "100%",
                    }}
                  />
                ) : null}
              </Column>
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

export const ProductDetailMasonry = ({
  theme = defaultTheme,
  images,
  name = "Product Name",
  price = "$99.00",
  description = "Product description.",
  features,
  ctaLabel = "Buy Now",
  ctaHref = "#",
  variant = "default",
}: ProductDetailMasonryProps) => (
  <Html>
    <Head />
    <Preview>masonry-detail</Preview>
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
          <ProductDetailMasonrySection
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            description={description}
            features={features}
            images={images}
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

ProductDetailMasonry.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "View Collection",
  description: "A carefully curated product captured from every angle.",
  features: ["Artisan crafted", "Premium materials", "Lifetime guarantee"],
  images: [
    "https://static.photos/technology/800x600/2",
    "https://static.photos/technology/800x600/3",
    "https://static.photos/technology/800x600/4",
    "https://static.photos/technology/800x600/5",
  ],
  name: "Handcrafted Vase",
  price: "$129.00",
  theme: defaultTheme,
  variant: "default",
} satisfies ProductDetailMasonryProps;
