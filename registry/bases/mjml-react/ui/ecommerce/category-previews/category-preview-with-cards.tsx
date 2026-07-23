import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type CategoryPreviewCardsVariant =
  | "basic"
  | "with-header"
  | "with-description"
  | "header-description"
  | "with-details"
  | "header-details"
  | "full-details"
  | "header-full-details";

export interface CategoryPreviewCardsProps {
  theme?: EmailThemeTokens;
  variant?: CategoryPreviewCardsVariant;
  heading?: string;
  intro?: string;
  imageSrc1?: string;
  imageSrc2?: string;
  name1?: string;
  name2?: string;
  price1?: string;
  price2?: string;
  description1?: string;
  description2?: string;
  ctaLabel?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const variantFeatures = (variant: CategoryPreviewCardsVariant) => ({
  description:
    variant === "with-description" ||
    variant === "header-description" ||
    variant === "full-details" ||
    variant === "header-full-details",
  details:
    variant === "with-details" ||
    variant === "header-details" ||
    variant === "full-details" ||
    variant === "header-full-details",
  header:
    variant === "with-header" ||
    variant === "header-description" ||
    variant === "header-details" ||
    variant === "header-full-details",
});

const CategoryCard = ({
  ctaLabel,
  description,
  details,
  imageSrc,
  name,
  price,
  second,
}: {
  ctaLabel: string;
  description: string;
  details: boolean;
  imageSrc: string;
  name: string;
  price: string;
  second: boolean;
}) => (
  <MjmlColumn
    padding={second ? "0 0 0 22px" : "0 22px 0 0"}
    verticalAlign="top"
    width="50%"
  >
    <MjmlImage
      alt={name}
      borderRadius="8px"
      padding="0"
      src={imageSrc}
      width="254px"
    />
    <MjmlSpacer height="24px" />
    <MjmlText
      color="#030712"
      fontFamily={fontFamily}
      fontSize="20px"
      fontWeight="600"
      lineHeight="28px"
      padding="0"
    >
      {name}
    </MjmlText>
    <MjmlText
      color="#030712"
      fontFamily={fontFamily}
      fontSize="20px"
      fontWeight="500"
      lineHeight="28px"
      padding="12px 0 0"
    >
      {price}
    </MjmlText>
    <MjmlSpacer height="24px" />
    {details ? (
      <>
        <MjmlText
          color="#4b5563"
          fontFamily={fontFamily}
          fontSize="16px"
          fontWeight="300"
          lineHeight="24px"
          padding="0"
        >
          {description}
        </MjmlText>
        <MjmlSpacer height="28px" />
        <MjmlText
          color="#4b5563"
          fontFamily={fontFamily}
          fontSize="14px"
          lineHeight="20px"
          padding="0"
        >
          Colors: Black, White, Gray{second ? "" : ", Mint"}
        </MjmlText>
        <MjmlSpacer height="24px" />
      </>
    ) : null}
    <MjmlButton
      align="left"
      backgroundColor="#4f46e5"
      borderRadius="8px"
      color="#fffffe"
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="500"
      href={second ? "https://example.com/pants" : "https://example.com/shoes"}
      innerPadding="14px 20px"
      lineHeight="16px"
      padding="0"
    >
      {ctaLabel} →
    </MjmlButton>
  </MjmlColumn>
);

export const CategoryPreviewCardsSection = ({
  ctaLabel = "Shop now",
  description1 = "Soft, breathable, and effortlessly stylish. Made for comfort and everyday wear with a clean, minimal edge.",
  description2 = "Designed for comfort and movement with a refined fit and modern silhouette — your go-to for everyday versatility.",
  heading = "Our products",
  imageSrc1 = "https://emailcn.vercel.app/api/email-assets/category-previews/landscape-1.jpg",
  imageSrc2 = "https://emailcn.vercel.app/api/email-assets/category-previews/landscape-2.jpg",
  intro = "Style meets purpose in every piece. Designed with attention to detail and built for everyday comfort, our collection brings together modern design, timeless quality, and effortlessness.",
  name1 = "Sweatshirts",
  name2 = "Pants",
  price1 = "$40.00-69.00",
  price2 = "$70.00-120.00",
  variant = "with-header",
}: Omit<CategoryPreviewCardsProps, "theme">) => {
  const features = variantFeatures(variant);

  return (
    <>
      <MjmlSection backgroundColor="#fffffe" padding="44px 24px">
        <MjmlColumn padding="0">
          {features.header ? (
            <>
              <MjmlText
                align="center"
                color="#030712"
                fontFamily={fontFamily}
                fontSize="30px"
                fontWeight="600"
                lineHeight="36px"
                padding="0"
              >
                {heading}
              </MjmlText>
              <MjmlSpacer height="44px" />
            </>
          ) : null}
          {features.description ? (
            <MjmlText
              align="center"
              color="#4b5563"
              fontFamily={fontFamily}
              fontSize="18px"
              lineHeight="28px"
              padding="0"
            >
              {intro}
            </MjmlText>
          ) : null}
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection backgroundColor="#fffffe" padding="0 24px 44px">
        <CategoryCard
          ctaLabel={ctaLabel}
          description={description1}
          details={features.details}
          imageSrc={imageSrc1}
          name={name1}
          price={price1}
          second={false}
        />
        <CategoryCard
          ctaLabel={ctaLabel}
          description={description2}
          details={features.details}
          imageSrc={imageSrc2}
          name={name2}
          price={price2}
          second
        />
      </MjmlSection>
    </>
  );
};

export const CategoryPreviewCards = ({
  theme = defaultTheme,
  ...props
}: CategoryPreviewCardsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Our products</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <CategoryPreviewCardsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

CategoryPreviewCards.PreviewProps = {
  theme: defaultTheme,
  variant: "with-header",
} satisfies CategoryPreviewCardsProps;
