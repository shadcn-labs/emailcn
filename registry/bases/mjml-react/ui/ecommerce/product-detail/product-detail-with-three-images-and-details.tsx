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
    <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
      {imageUrl1 ? (
        <MjmlSection padding="0 0 12px">
          <MjmlColumn>
            <MjmlImage
              alt={`${name} primary`}
              borderRadius={theme.borderRadius}
              src={imageUrl1}
              width={300}
            />
          </MjmlColumn>
        </MjmlSection>
      ) : null}
      {imageUrl2 || imageUrl3 ? (
        <MjmlSection padding="0 0 24px">
          {imageUrl2 ? (
            <MjmlColumn width="50%" paddingRight={theme.spacingBase ?? "16px"}>
              <MjmlImage
                alt={`${name} 2`}
                borderRadius={theme.borderRadius}
                src={imageUrl2}
                width={200}
              />
            </MjmlColumn>
          ) : null}
          {imageUrl3 ? (
            <MjmlColumn width="50%" paddingLeft={theme.spacingBase ?? "16px"}>
              <MjmlImage
                alt={`${name} 3`}
                borderRadius={theme.borderRadius}
                src={imageUrl3}
                width={200}
              />
            </MjmlColumn>
          ) : null}
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>three-images-detail</MjmlPreview>
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
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
