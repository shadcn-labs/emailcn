import {
  Body,
  Head,
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

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type CategoryPreviewRowsVariant =
  | "basic"
  | "with-header"
  | "with-description"
  | "header-description"
  | "with-details"
  | "header-details"
  | "full-details"
  | "header-full-details";

export interface CategoryPreviewRowsProps {
  theme?: EmailThemeTokens;
  variant?: CategoryPreviewRowsVariant;
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

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .category-row-column { display: block !important; width: 100% !important; }
    .category-row-gap { line-height: 24px !important; }
    .category-row-image { width: 100% !important; }
  }
`;

const textStyle = { fontFamily, margin: 0 } as const;
const colors = ["#030712", "#fffffe", "#e5e7eb", "#6ee7b7"];

const ColorOptions = ({ short }: { short: boolean }) => (
  <Section>
    <Fragment>
      <Row>
        <Column
          style={{
            color: "#4b5563",
            fontFamily,
            fontSize: "14px",
            lineHeight: "20px",
            paddingRight: "8px",
          }}
        >
          Colors:
        </Column>
        <Column>
          {colors.slice(0, short ? 3 : 4).map((color, index) => (
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
              {index < (short ? 2 : 3) ? (
                <span style={{ display: "inline-block", width: "4px" }} />
              ) : null}
            </Fragment>
          ))}
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const ShopButton = ({ label, href }: { href: string; label: string }) => (
  <Link
    href={href}
    style={{
      backgroundColor: "#4f46e5",
      borderRadius: "8px",
      color: "#fffffe",
      display: "inline-block",
      fontFamily,
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
      src="https://emailcn.vercel.app/api/email-assets/icon-arrow-right.png"
      style={{ maxWidth: "100%", verticalAlign: "baseline" }}
      width="12"
    />
  </Link>
);

interface RowProps {
  ctaLabel: string;
  description: string;
  details: boolean;
  imageSrc: string;
  name: string;
  price: string;
  second: boolean;
}

const CategoryRow = ({
  ctaLabel,
  description,
  details,
  imageSrc,
  name,
  price,
  second,
}: RowProps) => (
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
              ...textStyle,
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
              ...textStyle,
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
                  ...textStyle,
                  color: "#4b5563",
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: "24px",
                  marginBottom: "28px",
                }}
              >
                {description}
              </Text>
              <ColorOptions short={second} />
              <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
            </>
          ) : null}
          <ShopButton
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

const variantFeatures = (variant: CategoryPreviewRowsVariant) => ({
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

export const CategoryPreviewRowsSection = ({
  ctaLabel = "Shop now",
  description1 = "Soft, breathable, and effortlessly stylish. Made for comfort and everyday wear with a clean, minimal edge.",
  description2 = "Designed for comfort and movement with a refined fit and modern silhouette — your go-to for everyday versatility.",
  heading = "Our products",
  imageSrc1 = "https://emailcn.vercel.app/api/email-assets/category-previews/portrait-1.jpg",
  imageSrc2 = "https://emailcn.vercel.app/api/email-assets/category-previews/portrait-2.jpg",
  intro = "Style meets purpose in every piece. Designed with attention to detail and built for everyday comfort, our collection brings together modern design, timeless quality, and effortlessness.",
  name1 = "Sweatshirts",
  name2 = "Pants",
  price1 = "$40.00-69.00",
  price2 = "$70.00-120.00",
  variant = "with-header",
}: Omit<CategoryPreviewRowsProps, "theme">) => {
  const features = variantFeatures(variant);

  return (
    <>
      <style>{responsiveStyles}</style>
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
                              ...textStyle,
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
                              ...textStyle,
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
                      <CategoryRow
                        ctaLabel={ctaLabel}
                        description={description1}
                        details={features.details}
                        imageSrc={imageSrc1}
                        name={name1}
                        price={price1}
                        second={false}
                      />
                      <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                      <CategoryRow
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

export const CategoryPreviewRows = ({
  theme: _theme = defaultTheme,
  ...props
}: CategoryPreviewRowsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Our products</Preview>
    <Body style={{ margin: 0 }}>
      <CategoryPreviewRowsSection {...props} />
    </Body>
  </Html>
);

CategoryPreviewRows.PreviewProps = {
  theme: defaultTheme,
  variant: "with-header",
} satisfies CategoryPreviewRowsProps;
