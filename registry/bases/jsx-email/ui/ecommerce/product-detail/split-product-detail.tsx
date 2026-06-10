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

export interface SplitProductDetailProps {
  theme?: EmailThemeTokens;
  imageUrl?: string;
  name?: string;
  price?: string;
  description?: string;
  features?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const SplitProductDetailSection = ({
  ctaHref,
  ctaLabel,
  description,
  features,
  imageUrl,
  name,
  price,
  theme,
  variant,
}: {
  ctaHref: string;
  ctaLabel?: string;
  description?: string;
  features?: string[];
  imageUrl?: string;
  name: string;
  price: string;
  theme: EmailThemeTokens;
  variant: NonNullable<SplitProductDetailProps["variant"]>;
}) => {
  const imageFirst = variant !== "slanted-right";

  return (
    <Section style={{ padding: `${theme.spacingXl ?? "24px"} 0` }}>
      <Row>
        {imageFirst ? (
          <Column
            style={{ paddingRight: theme.spacingBase ?? "16px", width: "40%" }}
          >
            {imageUrl ? (
              <Img
                alt={name}
                src={imageUrl}
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
        ) : null}
        <Column style={{ width: "60%" }}>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeXl ?? "20px",
              fontWeight: theme.fontWeightMedium ?? "500",
              margin: 0,
              paddingBottom: theme.spacingBase ?? "16px",
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
              }}
            >
              {features.map((f) => `\u2713 ${f}`).join("\n")}
            </Text>
          ) : null}
          {ctaLabel && ctaHref ? (
            <Button
              href={ctaHref}
              align="left"
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
        {!imageFirst ? (
          <Column
            style={{ paddingLeft: theme.spacingBase ?? "16px", width: "40%" }}
          >
            {imageUrl ? (
              <Img
                alt={name}
                src={imageUrl}
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
        ) : null}
      </Row>
    </Section>
  );
};

export const SplitProductDetail = ({
  theme = defaultTheme,
  imageUrl,
  name = "Product Name",
  price = "$99.00",
  description = "Product description.",
  features,
  ctaLabel = "Buy Now",
  ctaHref = "#",
  variant = "default",
}: SplitProductDetailProps) => (
  <Html>
    <Head />
    <Preview>split-product-detail</Preview>
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
          <SplitProductDetailSection
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            description={description}
            features={features}
            imageUrl={imageUrl}
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

SplitProductDetail.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Shop Now",
  description: "Premium quality crafted with precision and care.",
  features: ["Durable materials", "One-year warranty", "Free shipping"],
  imageUrl: "https://static.photos/technology/800x600/2",
  name: "Premium Sneakers",
  price: "$149.00",
  theme: defaultTheme,
  variant: "default",
} satisfies SplitProductDetailProps;
