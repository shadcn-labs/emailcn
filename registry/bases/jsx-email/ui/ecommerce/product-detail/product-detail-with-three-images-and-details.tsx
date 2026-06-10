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

export interface ProductDetailThreeImagesProps {
  theme?: EmailThemeTokens;
  imageUrl1?: string;
  imageUrl2?: string;
  imageUrl3?: string;
  name?: string;
  price?: string;
  description?: string;
  features?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const ProductDetailThreeImagesSection = ({
  ctaHref,
  ctaLabel,
  description,
  features,
  imageUrl1,
  imageUrl2,
  imageUrl3,
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
  imageUrl3?: string;
  name: string;
  price: string;
  theme: EmailThemeTokens;
  variant: NonNullable<ProductDetailThreeImagesProps["variant"]>;
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
        {imageUrl1 ? (
          <Section style={{ padding: "0 0 12px" }}>
            <Row>
              <Column>
                <Img
                  alt={`${name} primary`}
                  src={imageUrl1}
                  width={300}
                  style={{
                    borderRadius: theme.borderRadius,
                    display: "block",
                    margin: "0 auto",
                    maxWidth: "100%",
                  }}
                />
              </Column>
            </Row>
          </Section>
        ) : null}
        {imageUrl2 || imageUrl3 ? (
          <Section style={{ padding: "0 0 24px" }}>
            <Row>
              {imageUrl2 ? (
                <Column
                  style={{
                    paddingRight: theme.spacingBase ?? "16px",
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
              {imageUrl3 ? (
                <Column
                  style={{
                    paddingLeft: theme.spacingBase ?? "16px",
                    width: "50%",
                  }}
                >
                  <Img
                    alt={`${name} 3`}
                    src={imageUrl3}
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

export const ProductDetailThreeImages = ({
  theme = defaultTheme,
  imageUrl1,
  imageUrl2,
  imageUrl3,
  name = "Product Name",
  price = "$99.00",
  description = "Product description.",
  features,
  ctaLabel = "Buy Now",
  ctaHref = "#",
  variant = "default",
}: ProductDetailThreeImagesProps) => (
  <Html>
    <Head />
    <Preview>three-images-detail</Preview>
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
          <ProductDetailThreeImagesSection
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            description={description}
            features={features}
            imageUrl1={imageUrl1}
            imageUrl2={imageUrl2}
            imageUrl3={imageUrl3}
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

ProductDetailThreeImages.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Explore More",
  description: "See every angle of this meticulously crafted item.",
  features: ["Timeless design", "Sustainable sourcing", "Gift-ready"],
  imageUrl1: "https://static.photos/technology/800x600/2",
  imageUrl2: "https://static.photos/technology/800x600/3",
  imageUrl3: "https://static.photos/technology/800x600/4",
  name: "Premium Leather Shoes",
  price: "$349.00",
  theme: defaultTheme,
  variant: "default",
} satisfies ProductDetailThreeImagesProps;
