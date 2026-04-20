import {
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlText,
} from "@faire/mjml-react";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import type { EmailTheme } from "@/registry/themes/default";
import { theme as defaultTheme } from "@/registry/themes/default";

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
  const t = resolveEmailTheme(theme);

  return (
    <MjmlSection
      border={`1px solid ${t.colors.border ?? "#e5e7eb"}`}
      borderRadius={t.borderRadius.md}
      padding={t.spacing.md ?? "16px"}
    >
      <MjmlColumn width="120px">
        {imageUrl ? (
          <MjmlImage
            alt={name}
            borderRadius={t.borderRadius.md}
            src={imageUrl}
            width={100}
          />
        ) : null}
      </MjmlColumn>
      <MjmlColumn>
        <MjmlText
          color={t.colors.foreground}
          fontFamily={t.fontFamily.sans}
          fontSize={t.fontSize.base ?? "14px"}
          fontWeight={t.fontWeight.medium ?? "500"}
          paddingBottom={t.spacing.sm}
        >
          {name}
        </MjmlText>
        <MjmlText
          color={t.colors.foreground}
          fontFamily={t.fontFamily.sans}
          fontSize={t.fontSize.lg ?? "16px"}
          fontWeight={t.fontWeight.bold ?? "700"}
        >
          {price}
          {quantity > 1 ? (
            <span style={{ color: t.colors["foreground-muted"], fontSize: 12 }}>
              {" "}
              x {quantity}
            </span>
          ) : null}
        </MjmlText>
        {ctaLabel ? (
          <MjmlText paddingTop={t.spacing.sm}>
            <a
              href={ctaHref}
              style={{
                color: t.colors.primary,
                fontFamily: t.fontFamily.sans,
                fontSize: t.fontSize.sm ?? "12px",
                textDecoration: "none",
              }}
            >
              {ctaLabel}
            </a>
          </MjmlText>
        ) : null}
      </MjmlColumn>
    </MjmlSection>
  );
};

ProductCard.PreviewProps = {
  imageUrl: "https://example.com/p.jpg",
  name: "Premium Sneakers",
  price: "$149.00",
  quantity: 1,
  theme: defaultTheme,
} satisfies ProductCardProps;

export default ProductCard;
