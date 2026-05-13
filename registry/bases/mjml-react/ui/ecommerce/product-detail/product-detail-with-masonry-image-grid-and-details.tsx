/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlButton,
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
    <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
      {images && images.length > 0 ? (
        <MjmlSection padding="0 0 24px">
          <MjmlColumn width="50%" paddingRight={theme.spacingBase ?? "16px"}>
            {images[0] ? (
              <MjmlImage
                alt={`${name} 1`}
                borderRadius={theme.borderRadius}
                src={images[0]}
                width={200}
                paddingBottom={theme.spacingBase ?? "16px"}
              />
            ) : null}
            {images[2] ? (
              <MjmlImage
                alt={`${name} 3`}
                borderRadius={theme.borderRadius}
                src={images[2]}
                width={200}
              />
            ) : null}
          </MjmlColumn>
          <MjmlColumn width="50%" paddingLeft={theme.spacingBase ?? "16px"}>
            {images[1] ? (
              <MjmlImage
                alt={`${name} 2`}
                borderRadius={theme.borderRadius}
                src={images[1]}
                width={200}
                paddingBottom={theme.spacingBase ?? "16px"}
              />
            ) : null}
            {images[3] ? (
              <MjmlImage
                alt={`${name} 4`}
                borderRadius={theme.borderRadius}
                src={images[3]}
                width={200}
              />
            ) : null}
          </MjmlColumn>
        </MjmlSection>
      ) : null}
      <MjmlColumn>
        <MjmlText
          align={alignText}
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeXl ?? "20px"}
          fontWeight={theme.fontWeightMedium ?? "500"}
          paddingBottom={theme.spacingBase ?? "16px"}
        >
          {name}
        </MjmlText>
        <MjmlText
          align={alignText}
          color={theme.colorPrimary}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeXl ?? "20px"}
          fontWeight={theme.fontWeightBold ?? "700"}
          paddingBottom={theme.spacingBase ?? "16px"}
        >
          {price}
        </MjmlText>
        {description ? (
          <MjmlText
            align={alignText}
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase ?? "14px"}
            lineHeight={theme.lineHeightBase}
            paddingBottom={theme.spacingBase ?? "16px"}
          >
            {description}
          </MjmlText>
        ) : null}
        {features ? (
          <MjmlText
            align={alignText}
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase ?? "14px"}
            paddingBottom={theme.spacingBase ?? "16px"}
          >
            {features.map((f) => `\u2713 ${f}`).join("\n")}
          </MjmlText>
        ) : null}
        {ctaLabel && ctaHref ? (
          <MjmlButton
            align={alignText}
            backgroundColor={theme.colorPrimary}
            borderRadius={theme.borderRadius}
            color={theme.colorPrimaryForeground ?? "#ffffff"}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm ?? "14px"}
            fontWeight={theme.fontWeightMedium ?? "500"}
            href={ctaHref}
            innerPadding={`${theme.spacingBase ?? "16px"} ${theme.spacingLg ?? "24px"}`}
          >
            {ctaLabel}
          </MjmlButton>
        ) : null}
      </MjmlColumn>
    </MjmlSection>
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>masonry-detail</MjmlPreview>
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
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
