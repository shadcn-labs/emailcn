/* eslint-disable @next/next/no-img-element, complexity */
import { Fragment } from "react";
import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

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
  theme?: TailwindConfig;
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

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .category-card-column { display: block !important; width: 100% !important; }
    .category-card-gap { line-height: 44px !important; }
    .category-card-image { width: 100% !important; }
  }
`;

const textStyle = { fontFamily, margin: 0 } as const;

const colors = ["#030712", "#fffffe", "#e5e7eb", "#6ee7b7"];

const ColorOptions = ({ short }: { short: boolean }) => (
  <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
    <tbody>
      <tr>
        <td
          style={{
            color: "#4b5563",
            fontFamily,
            fontSize: "14px",
            lineHeight: "20px",
            paddingRight: "8px",
          }}
        >
          Colors:
        </td>
        <td>
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
        </td>
      </tr>
    </tbody>
  </table>
);

const ShopButton = ({ label, href }: { href: string; label: string }) => (
  <a
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
    <img
      alt=""
      src="https://assets.mailviews.com/images/components/icon-arrow-right.png"
      style={{ maxWidth: "100%", verticalAlign: "baseline" }}
      width="12"
    />
  </a>
);

interface CardProps {
  ctaLabel: string;
  description: string;
  details: boolean;
  imageSrc: string;
  name: string;
  price: string;
  second: boolean;
}

const CategoryCard = ({
  ctaLabel,
  description,
  details,
  imageSrc,
  name,
  price,
  second,
}: CardProps) => (
  <td
    className="category-card-column"
    style={{ verticalAlign: "top", width: "254px" }}
  >
    <img
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
    <div style={{ lineHeight: "24px" }}>&zwj;</div>
    <h3
      style={{
        ...textStyle,
        color: "#030712",
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "28px",
      }}
    >
      {name}
    </h3>
    <p
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
    </p>
    <div style={{ lineHeight: "24px" }}>&zwj;</div>
    {details ? (
      <>
        <p
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
        </p>
        <ColorOptions short={second} />
        <div style={{ lineHeight: "24px" }}>&zwj;</div>
      </>
    ) : null}
    <ShopButton
      href={second ? "https://example.com/pants" : "https://example.com/shoes"}
      label={ctaLabel}
    />
  </td>
);

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

export const CategoryPreviewCardsSection = ({
  ctaLabel = "Shop now",
  description1 = "Soft, breathable, and effortlessly stylish. Made for comfort and everyday wear with a clean, minimal edge.",
  description2 = "Designed for comfort and movement with a refined fit and modern silhouette — your go-to for everyday versatility.",
  heading = "Our products",
  imageSrc1 = "https://assets.mailviews.com/images/components/category-previews/landscape-1.jpg",
  imageSrc2 = "https://assets.mailviews.com/images/components/category-previews/landscape-2.jpg",
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
      <style>{responsiveStyles}</style>
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        style={{ backgroundColor: "#f1f5f9", width: "100%" }}
      >
        <tbody>
          <tr>
            <td>&zwj;</td>
            <td
              style={{
                backgroundColor: "#fffffe",
                maxWidth: "100%",
                paddingBottom: "44px",
                width: "600px",
              }}
            >
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                style={{ width: "100%" }}
              >
                <tbody>
                  <tr>
                    <td style={{ padding: "0 24px" }}>
                      <div style={{ lineHeight: "44px" }}>&zwj;</div>
                      {features.header ? (
                        <>
                          <h2
                            style={{
                              ...textStyle,
                              color: "#030712",
                              fontSize: "30px",
                              fontWeight: 600,
                              lineHeight: "36px",
                              textAlign: "center",
                            }}
                          >
                            {heading}
                          </h2>
                          <div style={{ lineHeight: "44px" }}>&zwj;</div>
                        </>
                      ) : null}
                      {features.description ? (
                        <>
                          <p
                            style={{
                              ...textStyle,
                              color: "#4b5563",
                              fontSize: "18px",
                              lineHeight: "28px",
                              textAlign: "center",
                            }}
                          >
                            {intro}
                          </p>
                          <div style={{ lineHeight: "44px" }}>&zwj;</div>
                        </>
                      ) : null}
                      <table
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        role="presentation"
                        style={{ width: "100%" }}
                      >
                        <tbody>
                          <tr>
                            <CategoryCard
                              ctaLabel={ctaLabel}
                              description={description1}
                              details={features.details}
                              imageSrc={imageSrc1}
                              name={name1}
                              price={price1}
                              second={false}
                            />
                            <td
                              className="category-card-column category-card-gap"
                              style={{ width: "44px" }}
                            >
                              &zwj;
                            </td>
                            <CategoryCard
                              ctaLabel={ctaLabel}
                              description={description2}
                              details={features.details}
                              imageSrc={imageSrc2}
                              name={name2}
                              price={price2}
                              second
                            />
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>&zwj;</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export const CategoryPreviewCards = ({
  theme = defaultTheme,
  ...props
}: CategoryPreviewCardsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Our products</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CategoryPreviewCardsSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

CategoryPreviewCards.PreviewProps = {
  theme: defaultTheme,
  variant: "with-header",
} satisfies CategoryPreviewCardsProps;
