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

export interface SingleImageProductDetailProps {
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

const SingleImageProductDetailSection = ({
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
  variant: NonNullable<SingleImageProductDetailProps["variant"]>;
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
        <Column>
          {imageUrl ? (
            <Img
              alt={name}
              src={imageUrl}
              width={300}
              style={{
                borderRadius: theme.borderRadius,
                display: "block",
                margin: "0 auto",
                maxWidth: "100%",
                paddingBottom: theme.spacingBase ?? "16px",
              }}
            />
          ) : null}
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

export const SingleImageProductDetail = ({
  theme = defaultTheme,
  imageUrl,
  name = "Product Name",
  price = "$99.00",
  description = "Product description.",
  features,
  ctaLabel = "Buy Now",
  ctaHref = "#",
  variant = "default",
}: SingleImageProductDetailProps) => (
  <Html>
    <Head />
    <Preview>single-image-detail</Preview>
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
          <SingleImageProductDetailSection
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

SingleImageProductDetail.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Add to Cart",
  description: "A beautiful product designed for everyday elegance.",
  features: ["Handcrafted", "Premium finish", "Eco-friendly"],
  imageUrl: "https://static.photos/technology/800x600/2",
  name: "Artisan Watch",
  price: "$299.00",
  theme: defaultTheme,
  variant: "default",
} satisfies SingleImageProductDetailProps;
