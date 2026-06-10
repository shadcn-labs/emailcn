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
    <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
      <MjmlColumn>
        {imageUrl ? (
          <MjmlImage
            alt={name}
            borderRadius={theme.borderRadius}
            src={imageUrl}
            width={300}
            paddingBottom={theme.spacingBase ?? "16px"}
          />
        ) : null}
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>single-image-detail</MjmlPreview>
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
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
