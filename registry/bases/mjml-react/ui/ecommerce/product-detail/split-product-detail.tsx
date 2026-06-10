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
    <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
      {imageFirst ? (
        <MjmlColumn width="40%" paddingRight={theme.spacingBase ?? "16px"}>
          {imageUrl ? (
            <MjmlImage
              alt={name}
              borderRadius={theme.borderRadius}
              src={imageUrl}
              width={200}
            />
          ) : null}
        </MjmlColumn>
      ) : null}
      <MjmlColumn width="60%">
        <MjmlText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeXl ?? "20px"}
          fontWeight={theme.fontWeightMedium ?? "500"}
          paddingBottom={theme.spacingBase ?? "16px"}
        >
          {name}
        </MjmlText>
        <MjmlText
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
            align="left"
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
      {!imageFirst ? (
        <MjmlColumn width="40%" paddingLeft={theme.spacingBase ?? "16px"}>
          {imageUrl ? (
            <MjmlImage
              alt={name}
              borderRadius={theme.borderRadius}
              src={imageUrl}
              width={200}
            />
          ) : null}
        </MjmlColumn>
      ) : null}
    </MjmlSection>
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>split-product-detail</MjmlPreview>
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
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
