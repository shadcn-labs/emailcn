import {
  Body,
  Column,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

export interface ProductCardProps {
  imageUrl?: string;
  name?: string;
  price?: string;
  quantity?: number;
  ctaLabel?: string;
  ctaHref?: string;
}

export const ProductCardSection = ({
  imageUrl,
  name = "Product Name",
  price = "$99.00",
  quantity = 1,
  ctaLabel = "View Details",
  ctaHref = "#",
}: Omit<ProductCardProps, "theme">) => (
  <Section
    style={{
      backgroundColor: defaultTheme.colorBackground,
      border: `1px solid ${defaultTheme.colorBorder}`,
      borderRadius: "8px",
      padding: "24px",
    }}
  >
    <Row>
      <Column style={{ verticalAlign: "top", width: "100px" }}>
        {imageUrl ? (
          <Img
            src={imageUrl}
            alt={name}
            width={100}
            style={{
              borderRadius: "8px",
              height: "auto",
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
        ) : null}
      </Column>
      <Column style={{ paddingLeft: "24px", verticalAlign: "top" }}>
        <Text
          style={{
            color: defaultTheme.colorText,
            fontSize: defaultTheme.fontSizeBase,
            fontWeight: defaultTheme.fontWeightMedium,
            marginBottom: "8px",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: defaultTheme.colorText,
            fontSize: defaultTheme.fontSizeLg,
            fontWeight: defaultTheme.fontWeightBold,
          }}
        >
          {price}
          {quantity > 1 ? (
            <span
              style={{
                color: defaultTheme.colorTextMuted,
                fontSize: defaultTheme.fontSizeSm,
                marginLeft: "8px",
              }}
            >
              {" "}
              x {quantity}
            </span>
          ) : null}
        </Text>
        {ctaLabel ? (
          <Text style={{ marginTop: "8px" }}>
            <a
              href={ctaHref}
              style={{
                color: defaultTheme.colorPrimary,
                display: "inline-block",
                fontSize: defaultTheme.fontSizeSm,
                textDecoration: "none",
              }}
            >
              {ctaLabel}
            </a>
          </Text>
        ) : null}
      </Column>
    </Row>
  </Section>
);

export const ProductCard = ({
  imageUrl,
  name = "Product Name",
  price = "$99.00",
  quantity = 1,
  ctaLabel = "View Details",
  ctaHref = "#",
}: ProductCardProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{name}</Preview>
    <Tailwind>
      <Body
        style={{
          backgroundColor: defaultTheme.colorBackground,
          fontFamily: defaultTheme.fontFamily,
          margin: 0,
        }}
      >
        <ProductCardSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          imageUrl={imageUrl}
          name={name}
          price={price}
          quantity={quantity}
        />
      </Body>
    </Tailwind>
  </Html>
);

ProductCard.PreviewProps = {
  ctaHref: "https://example.com/product",
  ctaLabel: "View Details",
  imageUrl: "https://example.com/product.jpg",
  name: "Premium Sneakers",
  price: "$149.00",
  quantity: 1,
} satisfies ProductCardProps;
