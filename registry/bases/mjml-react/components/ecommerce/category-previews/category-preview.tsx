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

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

type CategoryCards_CategoryPreviewCardsVariant =
  | "basic"
  | "with-header"
  | "with-description"
  | "header-description"
  | "with-details"
  | "header-details"
  | "full-details"
  | "header-full-details";

interface CategoryCards_CategoryPreviewCardsProps {
  theme?: EmailTheme;
  variant?: CategoryCards_CategoryPreviewCardsVariant;
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

const CategoryCards_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const CategoryCards_variantFeatures = (
  variant: CategoryCards_CategoryPreviewCardsVariant
) => ({
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

const CategoryCards_CategoryCard = ({
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
      fontFamily={CategoryCards_fontFamily}
      fontSize="20px"
      fontWeight="600"
      lineHeight="28px"
      padding="0"
    >
      {name}
    </MjmlText>
    <MjmlText
      color="#030712"
      fontFamily={CategoryCards_fontFamily}
      fontSize="20px"
      fontWeight="500"
      lineHeight="28px"
      padding="12px 0 0"
    >
      {price}
    </MjmlText>
    <MjmlSpacer height="24px" />
    {(() => {
      if (details) {
        return (
          <>
            <MjmlText
              color="#4b5563"
              fontFamily={CategoryCards_fontFamily}
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
              fontFamily={CategoryCards_fontFamily}
              fontSize="14px"
              lineHeight="20px"
              padding="0"
            >
              Colors: Black, White, Gray{second ? "" : ", Mint"}
            </MjmlText>
            <MjmlSpacer height="24px" />
          </>
        );
      }
      return null;
    })()}
    <MjmlButton
      align="left"
      backgroundColor="#4f46e5"
      borderRadius="8px"
      color="#fffffe"
      fontFamily={CategoryCards_fontFamily}
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

const CategoryCards_CategoryPreviewCardsSection = ({
  ctaLabel = "Shop now",
  description1 = "Soft, breathable, and effortlessly stylish. Made for comfort and everyday wear with a clean, minimal edge.",
  description2 = "Designed for comfort and movement with a refined fit and modern silhouette — your go-to for everyday versatility.",
  heading = "Our products",
  imageSrc1 = emailAsset("category-previews/landscape-1.jpg"),
  imageSrc2 = emailAsset("category-previews/landscape-2.jpg"),
  intro = "Style meets purpose in every piece. Designed with attention to detail and built for everyday comfort, our collection brings together modern design, timeless quality, and effortlessness.",
  name1 = "Sweatshirts",
  name2 = "Pants",
  price1 = "$40.00-69.00",
  price2 = "$70.00-120.00",
  variant = "with-header",
}: Omit<CategoryCards_CategoryPreviewCardsProps, "theme">) => {
  const features = CategoryCards_variantFeatures(variant);
  return (
    <>
      <MjmlSection backgroundColor="#fffffe" padding="44px 24px 0">
        <MjmlColumn padding="0">
          {features.header ? (
            <>
              <MjmlText
                align="center"
                color="#030712"
                fontFamily={CategoryCards_fontFamily}
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
            <>
              <MjmlText
                align="center"
                color="#4b5563"
                fontFamily={CategoryCards_fontFamily}
                fontSize="18px"
                lineHeight="28px"
                padding="0"
              >
                {intro}
              </MjmlText>
              <MjmlSpacer height="44px" />
            </>
          ) : null}
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection backgroundColor="#fffffe" padding="0 24px 44px">
        <CategoryCards_CategoryCard
          ctaLabel={ctaLabel}
          description={description1}
          details={features.details}
          imageSrc={imageSrc1}
          name={name1}
          price={price1}
          second={false}
        />
        <CategoryCards_CategoryCard
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

const CategoryCards_CategoryPreviewCards = ({
  theme = defaultTheme,
  ...props
}: CategoryCards_CategoryPreviewCardsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Our products</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <CategoryCards_CategoryPreviewCardsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

CategoryCards_CategoryPreviewCards.PreviewProps = {
  theme: defaultTheme,
  variant: "with-header",
} satisfies CategoryCards_CategoryPreviewCardsProps;

const __CategoryCards = CategoryCards_CategoryPreviewCards;

type CategoryRows_CategoryPreviewRowsVariant =
  | "basic"
  | "with-header"
  | "with-description"
  | "header-description"
  | "with-details"
  | "header-details"
  | "full-details"
  | "header-full-details";

interface CategoryRows_CategoryPreviewRowsProps {
  theme?: EmailTheme;
  variant?: CategoryRows_CategoryPreviewRowsVariant;
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

const CategoryRows_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const CategoryRows_variantFeatures = (
  variant: CategoryRows_CategoryPreviewRowsVariant
) => ({
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

const CategoryRows_CategoryRow = ({
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
  <MjmlSection backgroundColor="#fffffe" padding="0 24px">
    <MjmlColumn padding="0 24px 0 0" verticalAlign="top" width="212px">
      <MjmlImage
        alt={name}
        borderRadius="8px"
        padding="0"
        src={imageSrc}
        width="188px"
      />
    </MjmlColumn>
    <MjmlColumn padding="0" verticalAlign="top">
      <MjmlText
        color="#030712"
        fontFamily={CategoryRows_fontFamily}
        fontSize="20px"
        fontWeight="600"
        lineHeight="28px"
        padding="0"
      >
        {name}
      </MjmlText>
      <MjmlText
        color="#030712"
        fontFamily={CategoryRows_fontFamily}
        fontSize="20px"
        fontWeight="500"
        lineHeight="28px"
        padding="12px 0 0"
      >
        {price}
      </MjmlText>
      <MjmlSpacer height="24px" />
      {(() => {
        if (details) {
          return (
            <>
              <MjmlText
                color="#4b5563"
                fontFamily={CategoryRows_fontFamily}
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
                fontFamily={CategoryRows_fontFamily}
                fontSize="14px"
                lineHeight="20px"
                padding="0"
              >
                Colors: Black, White, Gray{second ? "" : ", Mint"}
              </MjmlText>
              <MjmlSpacer height="24px" />
            </>
          );
        }
        return null;
      })()}
      <MjmlButton
        align="left"
        backgroundColor="#4f46e5"
        borderRadius="8px"
        color="#fffffe"
        fontFamily={CategoryRows_fontFamily}
        fontSize="16px"
        fontWeight="500"
        href={
          second ? "https://example.com/pants" : "https://example.com/shoes"
        }
        innerPadding="14px 20px"
        lineHeight="16px"
        padding="0"
      >
        {ctaLabel} →
      </MjmlButton>
    </MjmlColumn>
  </MjmlSection>
);

const CategoryRows_CategoryPreviewRowsSection = ({
  ctaLabel = "Shop now",
  description1 = "Soft, breathable, and effortlessly stylish. Made for comfort and everyday wear with a clean, minimal edge.",
  description2 = "Designed for comfort and movement with a refined fit and modern silhouette — your go-to for everyday versatility.",
  heading = "Our products",
  imageSrc1 = emailAsset("category-previews/portrait-1.jpg"),
  imageSrc2 = emailAsset("category-previews/portrait-2.jpg"),
  intro = "Style meets purpose in every piece. Designed with attention to detail and built for everyday comfort, our collection brings together modern design, timeless quality, and effortlessness.",
  name1 = "Sweatshirts",
  name2 = "Pants",
  price1 = "$40.00-69.00",
  price2 = "$70.00-120.00",
  variant = "with-header",
}: Omit<CategoryRows_CategoryPreviewRowsProps, "theme">) => {
  const features = CategoryRows_variantFeatures(variant);
  return (
    <>
      <MjmlSection backgroundColor="#fffffe" padding="44px 24px 0">
        <MjmlColumn padding="0">
          {features.header ? (
            <>
              <MjmlText
                align="center"
                color="#030712"
                fontFamily={CategoryRows_fontFamily}
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
            <>
              <MjmlText
                align="center"
                color="#4b5563"
                fontFamily={CategoryRows_fontFamily}
                fontSize="18px"
                lineHeight="28px"
                padding="0"
              >
                {intro}
              </MjmlText>
              <MjmlSpacer height="44px" />
            </>
          ) : null}
        </MjmlColumn>
      </MjmlSection>
      <CategoryRows_CategoryRow
        ctaLabel={ctaLabel}
        description={description1}
        details={features.details}
        imageSrc={imageSrc1}
        name={name1}
        price={price1}
        second={false}
      />
      <MjmlSection backgroundColor="#fffffe" padding="0">
        <MjmlColumn padding="0">
          <MjmlSpacer height="44px" />
        </MjmlColumn>
      </MjmlSection>
      <CategoryRows_CategoryRow
        ctaLabel={ctaLabel}
        description={description2}
        details={features.details}
        imageSrc={imageSrc2}
        name={name2}
        price={price2}
        second
      />
      <MjmlSection backgroundColor="#fffffe" padding="0">
        <MjmlColumn padding="0">
          <MjmlSpacer height="44px" />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};

const CategoryRows_CategoryPreviewRows = ({
  theme = defaultTheme,
  ...props
}: CategoryRows_CategoryPreviewRowsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Our products</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <CategoryRows_CategoryPreviewRowsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

CategoryRows_CategoryPreviewRows.PreviewProps = {
  theme: defaultTheme,
  variant: "with-header",
} satisfies CategoryRows_CategoryPreviewRowsProps;

const __CategoryRows = CategoryRows_CategoryPreviewRows;

export interface CategoryPreviewItem {
  image: {
    src: string;
    alt?: string;
  };
  name: string;
  price?: string;
  description?: string;
}

export interface CategoryPreviewProps {
  theme?: Parameters<typeof __CategoryCards>[0]["theme"];
  layout?: "cards" | "rows";
  detailLevel?: "name" | "description" | "price" | "full";
  header?: {
    heading: string;
    description?: string;
  };
  items?: CategoryPreviewItem[];
  actionLabel?: string;
}

const categoryVariant = (
  header: CategoryPreviewProps["header"],
  detailLevel: NonNullable<CategoryPreviewProps["detailLevel"]>
): NonNullable<Parameters<typeof __CategoryCards>[0]["variant"]> => {
  if (header) {
    if (detailLevel === "description") {
      return "header-description";
    }
    if (detailLevel === "price") {
      return "header-details";
    }
    if (detailLevel === "full") {
      return "header-full-details";
    }
    return "with-header";
  }
  if (detailLevel === "description") {
    return "with-description";
  }
  if (detailLevel === "price") {
    return "with-details";
  }
  return detailLevel === "full" ? "full-details" : "basic";
};

export const CategoryPreview = ({
  theme,
  layout = "cards",
  detailLevel = "name",
  header,
  items,
  actionLabel,
}: CategoryPreviewProps) => {
  const [first, second] = items ?? [];
  const props = {
    ctaLabel: actionLabel,
    description1: first?.description,
    description2: second?.description,
    heading: header?.heading,
    imageSrc1: first?.image.src,
    imageSrc2: second?.image.src,
    intro: header?.description,
    name1: first?.name,
    name2: second?.name,
    price1: first?.price,
    price2: second?.price,
    theme,
    variant: categoryVariant(header, detailLevel),
  };
  return layout === "rows" ? (
    <__CategoryRows {...props} />
  ) : (
    <__CategoryCards {...props} />
  );
};

CategoryPreview.PreviewProps = {
  detailLevel: "name",
  layout: "cards",
} satisfies CategoryPreviewProps;
