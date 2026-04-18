import { Column, Img, Row, Section, Text } from "react-email";

import type { EmailTheme } from "../themes/default";
import { theme as defaultTheme } from "../themes/default";

export interface ProductCardProps {
  theme?: EmailTheme;
  imageUrl?: string;
  name?: string;
  price?: string;
  quantity?: number;
  ctaLabel?: string;
  ctaHref?: string;
}

export const ProductCard = ({
  theme = defaultTheme,
  imageUrl,
  name = "Product Name",
  price = "$99.00",
  quantity = 1,
  ctaLabel = "View Details",
  ctaHref = "#",
}: ProductCardProps) => {
  const style = {
    cta: {
      color: theme.colorPrimary,
      display: "inline-block",
      fontSize: theme.fontSizeSm,
      marginTop: "8px",
      textDecoration: "none",
    } as const,
    image: {
      borderRadius: theme.borderRadius,
      height: "auto",
      maxWidth: "100%",
      objectFit: "cover" as const,
    },
    imageContainer: {
      width: 100,
    },
    info: {
      paddingLeft: theme.spacingBase,
    },
    name: {
      color: theme.colorText,
      fontSize: theme.fontSizeBase,
      fontWeight: theme.fontWeightMedium,
      marginBottom: "8px",
    },
    price: {
      color: theme.colorText,
      fontSize: theme.fontSizeLg,
      fontWeight: theme.fontWeightBold,
    },
    quantity: {
      color: theme.colorTextMuted,
      fontSize: theme.fontSizeSm,
      marginLeft: "8px",
    },
    section: {
      backgroundColor: theme.colorBackground,
      border: `1px solid ${theme.colorBorder}`,
      borderRadius: theme.borderRadius,
      padding: theme.spacingBase,
    },
  };

  return (
    <Section style={style.section}>
      <Row>
        <Column style={style.imageContainer}>
          {imageUrl && (
            <Img src={imageUrl} alt={name} style={style.image} width={100} />
          )}
        </Column>
        <Column style={style.info}>
          <Text style={style.name}>{name}</Text>
          <Text style={style.price}>
            {price}
            {quantity > 1 && <span style={style.quantity}> x {quantity}</span>}
          </Text>
          {ctaLabel && (
            <Text>
              <a href={ctaHref} style={style.cta}>
                {ctaLabel}
              </a>
            </Text>
          )}
        </Column>
      </Row>
    </Section>
  );
};

ProductCard.PreviewProps = {
  ctaHref: "https://example.com/product",
  ctaLabel: "View Details",
  imageUrl: "https://example.com/product.jpg",
  name: "Premium Sneakers",
  price: "$149.00",
  quantity: 1,
  theme: defaultTheme,
} satisfies ProductCardProps;

export default ProductCard;
