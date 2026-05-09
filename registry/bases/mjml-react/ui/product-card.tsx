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

export interface ProductCardProps {
  theme?: EmailThemeTokens;
  imageUrl?: string;
  name?: string;
  price?: string;
  quantity?: number;
  ctaLabel?: string;
  ctaHref?: string;
}

const ProductCardSection = ({
  ctaHref,
  ctaLabel,
  imageUrl,
  name,
  price,
  quantity,
  theme,
}: {
  ctaHref: string;
  ctaLabel?: string;
  imageUrl?: string;
  name: string;
  price: string;
  quantity: number;
  theme: EmailThemeTokens;
}) => (
  <MjmlSection
    border={`1px solid ${theme.colorBorder ?? "#e5e7eb"}`}
    borderRadius={theme.borderRadius}
    padding={theme.spacingBase ?? "16px"}
  >
    <MjmlColumn width="120px">
      {imageUrl ? (
        <MjmlImage
          alt={name}
          borderRadius={theme.borderRadius}
          src={imageUrl}
          width={100}
        />
      ) : null}
    </MjmlColumn>
    <MjmlColumn>
      <MjmlText
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase ?? "14px"}
        fontWeight={theme.fontWeightMedium ?? "500"}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {name}
      </MjmlText>
      <MjmlText
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg ?? "16px"}
        fontWeight={theme.fontWeightBold ?? "700"}
      >
        {price}
        {quantity > 1 ? (
          <span
            style={{
              color: theme.colorTextMuted,
              fontSize: 12,
            }}
          >
            {" "}
            x {quantity}
          </span>
        ) : null}
      </MjmlText>
      {ctaLabel ? (
        <MjmlText paddingTop={theme.spacingBase ?? "16px"}>
          <a
            href={ctaHref}
            style={{
              color: theme.colorPrimary,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "12px",
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

export const ProductCard = ({
  theme = defaultTheme,
  imageUrl,
  name = "Product Name",
  price = "$99.00",
  quantity = 1,
  ctaLabel = "View Details",
  ctaHref = "#",
}: ProductCardProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>product-card</MjmlPreview>
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
        <ProductCardSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          imageUrl={imageUrl}
          name={name}
          price={price}
          quantity={quantity}
          theme={theme}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ProductCard.PreviewProps = {
  imageUrl: "https://example.com/p.jpg",
  name: "Premium Sneakers",
  price: "$149.00",
  quantity: 1,
  theme: defaultTheme,
} satisfies ProductCardProps;
