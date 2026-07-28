import {
  Body,
  Head as EmailHead,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Link,
  Heading,
  Text,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { EmailTailwind } from "@/registry/bases/jsx-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/jsx-email/themes/email-theme";
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

const CategoryCards_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .category-card-column { display: block !important; width: 100% !important; }
      .category-card-gap { line-height: 44px !important; }
      .category-card-image { width: 100% !important; }
    }
  `;

const CategoryCards_textStyle = {
  fontFamily: CategoryCards_fontFamily,
  margin: 0,
} as const;

const CategoryCards_colors = ["#030712", "#fffffe", "#e5e7eb", "#6ee7b7"];

const CategoryCards_ColorOptions = ({ short }: { short: boolean }) => (
  <Section>
    <Fragment>
      <Row>
        <Column
          style={{
            color: "#4b5563",
            fontFamily: CategoryCards_fontFamily,
            fontSize: "14px",
            lineHeight: "20px",
            paddingRight: "8px",
          }}
        >
          Colors:
        </Column>
        <Column>
          {CategoryCards_colors.slice(0, short ? 3 : 4).map((color, index) => (
            <Fragment key={`${color}-${index}`}>
              <span
                style={{
                  backgroundColor: color,
                  borderRadius: "9999px",
                  display: "inline-block",
                  height: "16px",
                  width: "16px",
                }}
              />
              {(() => {
                if (index < (short ? 2 : 3)) {
                  return (
                    <span style={{ display: "inline-block", width: "4px" }} />
                  );
                }
                return null;
              })()}
            </Fragment>
          ))}
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const CategoryCards_ShopButton = ({
  label,
  href,
}: {
  href: string;
  label: string;
}) => (
  <Link
    href={href}
    style={{
      backgroundColor: "#4f46e5",
      borderRadius: "8px",
      color: "#fffffe",
      display: "inline-block",
      fontFamily: CategoryCards_fontFamily,
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: 1,
      padding: "14px 20px",
      textDecoration: "none",
    }}
  >
    <span style={{ marginRight: "8px" }}>{label}</span>
    <Img
      alt=""
      src={emailAsset("icon-arrow-right.png")}
      style={{
        display: "inline-block",
        maxWidth: "100%",
        verticalAlign: "baseline",
      }}
      width="12"
    />
  </Link>
);

interface CategoryCards_CardProps {
  ctaLabel: string;
  description: string;
  details: boolean;
  imageSrc: string;
  name: string;
  price: string;
  second: boolean;
}

const CategoryCards_CategoryCard = ({
  ctaLabel,
  description,
  details,
  imageSrc,
  name,
  price,
  second,
}: CategoryCards_CardProps) => (
  <Column
    className="category-card-column"
    style={{ verticalAlign: "top", width: "254px" }}
  >
    <Img
      alt=""
      className="category-card-image"
      src={imageSrc}
      style={{
        borderRadius: "8px",
        maxWidth: "100%",
        verticalAlign: "middle",
      }}
      width="254"
    />
    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
    <Heading
      style={{
        ...CategoryCards_textStyle,
        color: "#030712",
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "28px",
      }}
      as="h3"
    >
      {name}
    </Heading>
    <Text
      style={{
        ...CategoryCards_textStyle,
        color: "#030712",
        fontSize: "20px",
        fontWeight: 500,
        lineHeight: "28px",
        marginTop: "12px",
      }}
    >
      {price}
    </Text>
    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
    {details ? (
      <>
        <Text
          style={{
            ...CategoryCards_textStyle,
            color: "#4b5563",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "24px",
            marginBottom: "28px",
          }}
        >
          {description}
        </Text>
        <CategoryCards_ColorOptions short={second} />
        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
      </>
    ) : null}
    <CategoryCards_ShopButton
      href={second ? "https://example.com/pants" : "https://example.com/shoes"}
      label={ctaLabel}
    />
  </Column>
);

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
      <style>{CategoryCards_responsiveStyles}</style>
      <Section style={{ backgroundColor: "#f1f5f9", width: "100%" }}>
        <Fragment>
          <Row>
            <Column>&zwj;</Column>
            <Column
              style={{
                backgroundColor: "#fffffe",
                maxWidth: "100%",
                paddingBottom: "44px",
                width: "600px",
              }}
            >
              <Section style={{ width: "100%" }}>
                <Fragment>
                  <Row>
                    <Column style={{ padding: "0 24px" }}>
                      <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                      {features.header ? (
                        <>
                          <Heading
                            style={{
                              ...CategoryCards_textStyle,
                              color: "#030712",
                              fontSize: "30px",
                              fontWeight: 600,
                              lineHeight: "36px",
                              textAlign: "center",
                            }}
                            as="h2"
                          >
                            {heading}
                          </Heading>
                          <Section style={{ lineHeight: "44px" }}>
                            &zwj;
                          </Section>
                        </>
                      ) : null}
                      {features.description ? (
                        <>
                          <Text
                            style={{
                              ...CategoryCards_textStyle,
                              color: "#4b5563",
                              fontSize: "18px",
                              lineHeight: "28px",
                              textAlign: "center",
                            }}
                          >
                            {intro}
                          </Text>
                          <Section style={{ lineHeight: "44px" }}>
                            &zwj;
                          </Section>
                        </>
                      ) : null}
                      <Section style={{ width: "100%" }}>
                        <Fragment>
                          <Row>
                            <CategoryCards_CategoryCard
                              ctaLabel={ctaLabel}
                              description={description1}
                              details={features.details}
                              imageSrc={imageSrc1}
                              name={name1}
                              price={price1}
                              second={false}
                            />
                            <Column
                              className="category-card-column category-card-gap"
                              style={{ width: "44px" }}
                            >
                              &zwj;
                            </Column>
                            <CategoryCards_CategoryCard
                              ctaLabel={ctaLabel}
                              description={description2}
                              details={features.details}
                              imageSrc={imageSrc2}
                              name={name2}
                              price={price2}
                              second
                            />
                          </Row>
                        </Fragment>
                      </Section>
                    </Column>
                  </Row>
                </Fragment>
              </Section>
            </Column>
            <Column>&zwj;</Column>
          </Row>
        </Fragment>
      </Section>
    </>
  );
};

const CategoryCards_CategoryPreviewCards = ({
  theme = defaultTheme,
  ...props
}: CategoryCards_CategoryPreviewCardsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Our products</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <CategoryCards_CategoryPreviewCardsSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
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

const CategoryRows_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .category-row-column { display: block !important; width: 100% !important; }
      .category-row-gap { line-height: 24px !important; }
      .category-row-image { width: 100% !important; }
    }
  `;

const CategoryRows_textStyle = {
  fontFamily: CategoryRows_fontFamily,
  margin: 0,
} as const;

const CategoryRows_colors = ["#030712", "#fffffe", "#e5e7eb", "#6ee7b7"];

const CategoryRows_ColorOptions = ({ short }: { short: boolean }) => (
  <Section>
    <Fragment>
      <Row>
        <Column
          style={{
            color: "#4b5563",
            fontFamily: CategoryRows_fontFamily,
            fontSize: "14px",
            lineHeight: "20px",
            paddingRight: "8px",
          }}
        >
          Colors:
        </Column>
        <Column>
          {CategoryRows_colors.slice(0, short ? 3 : 4).map((color, index) => (
            <Fragment key={`${color}-${index}`}>
              <span
                style={{
                  backgroundColor: color,
                  borderRadius: "9999px",
                  display: "inline-block",
                  height: "16px",
                  width: "16px",
                }}
              />
              {(() => {
                if (index < (short ? 2 : 3)) {
                  return (
                    <span style={{ display: "inline-block", width: "4px" }} />
                  );
                }
                return null;
              })()}
            </Fragment>
          ))}
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const CategoryRows_ShopButton = ({
  label,
  href,
}: {
  href: string;
  label: string;
}) => (
  <Link
    href={href}
    style={{
      backgroundColor: "#4f46e5",
      borderRadius: "8px",
      color: "#fffffe",
      display: "inline-block",
      fontFamily: CategoryRows_fontFamily,
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: 1,
      padding: "14px 20px",
      textDecoration: "none",
    }}
  >
    <span style={{ marginRight: "8px" }}>{label}</span>
    <Img
      alt=""
      src={emailAsset("icon-arrow-right.png")}
      style={{
        display: "inline-block",
        maxWidth: "100%",
        verticalAlign: "baseline",
      }}
      width="12"
    />
  </Link>
);

interface CategoryRows_RowProps {
  ctaLabel: string;
  description: string;
  details: boolean;
  imageSrc: string;
  name: string;
  price: string;
  second: boolean;
}

const CategoryRows_CategoryRow = ({
  ctaLabel,
  description,
  details,
  imageSrc,
  name,
  price,
  second,
}: CategoryRows_RowProps) => (
  <Section style={{ width: "100%" }}>
    <Fragment>
      <Row>
        <Column
          className="category-row-column"
          style={{ verticalAlign: "top", width: "188px" }}
        >
          <Img
            alt=""
            className="category-row-image"
            src={imageSrc}
            style={{
              borderRadius: "8px",
              maxWidth: "100%",
              verticalAlign: "middle",
            }}
            width="254"
          />
        </Column>
        <Column
          className="category-row-column category-row-gap"
          style={{ width: "24px" }}
        >
          &zwj;
        </Column>
        <Column
          className="category-row-column"
          style={{ verticalAlign: "top" }}
        >
          <Heading
            style={{
              ...CategoryRows_textStyle,
              color: "#030712",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "28px",
            }}
            as="h3"
          >
            {name}
          </Heading>
          <Text
            style={{
              ...CategoryRows_textStyle,
              color: "#030712",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "28px",
              marginTop: "12px",
            }}
          >
            {price}
          </Text>
          <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
          {details ? (
            <>
              <Text
                style={{
                  ...CategoryRows_textStyle,
                  color: "#4b5563",
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: "24px",
                  marginBottom: "28px",
                }}
              >
                {description}
              </Text>
              <CategoryRows_ColorOptions short={second} />
              <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
            </>
          ) : null}
          <CategoryRows_ShopButton
            href={
              second ? "https://example.com/pants" : "https://example.com/shoes"
            }
            label={ctaLabel}
          />
        </Column>
      </Row>
    </Fragment>
  </Section>
);

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
      <style>{CategoryRows_responsiveStyles}</style>
      <Section style={{ backgroundColor: "#f1f5f9", width: "100%" }}>
        <Fragment>
          <Row>
            <Column>&zwj;</Column>
            <Column
              style={{
                backgroundColor: "#fffffe",
                maxWidth: "100%",
                paddingBottom: "44px",
                width: "600px",
              }}
            >
              <Section style={{ width: "100%" }}>
                <Fragment>
                  <Row>
                    <Column style={{ padding: "0 24px" }}>
                      <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                      {features.header ? (
                        <>
                          <Heading
                            style={{
                              ...CategoryRows_textStyle,
                              color: "#030712",
                              fontSize: "30px",
                              fontWeight: 600,
                              lineHeight: "36px",
                              textAlign: "center",
                            }}
                            as="h2"
                          >
                            {heading}
                          </Heading>
                          <Section style={{ lineHeight: "44px" }}>
                            &zwj;
                          </Section>
                        </>
                      ) : null}
                      {features.description ? (
                        <>
                          <Text
                            style={{
                              ...CategoryRows_textStyle,
                              color: "#4b5563",
                              fontSize: "18px",
                              lineHeight: "28px",
                              textAlign: "center",
                            }}
                          >
                            {intro}
                          </Text>
                          <Section style={{ lineHeight: "44px" }}>
                            &zwj;
                          </Section>
                        </>
                      ) : null}
                      <CategoryRows_CategoryRow
                        ctaLabel={ctaLabel}
                        description={description1}
                        details={features.details}
                        imageSrc={imageSrc1}
                        name={name1}
                        price={price1}
                        second={false}
                      />
                      <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                      <CategoryRows_CategoryRow
                        ctaLabel={ctaLabel}
                        description={description2}
                        details={features.details}
                        imageSrc={imageSrc2}
                        name={name2}
                        price={price2}
                        second
                      />
                    </Column>
                  </Row>
                </Fragment>
              </Section>
            </Column>
            <Column>&zwj;</Column>
          </Row>
        </Fragment>
      </Section>
    </>
  );
};

const CategoryRows_CategoryPreviewRows = ({
  theme = defaultTheme,
  ...props
}: CategoryRows_CategoryPreviewRowsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Our products</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <CategoryRows_CategoryPreviewRowsSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
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
