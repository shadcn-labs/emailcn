import { Fragment } from "react";
import {
  Body,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Row,
  Column,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface ProductPricingPlan {
  ctaHref: string;
  ctaLabel: string;
  leasePrice: string;
  name: string;
  purchasePrice: string;
}

export interface TwoColumnsPricingTableWithGapsProps {
  theme?: TailwindConfig;
  plans?: ProductPricingPlan[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  buttonBackgroundColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .product-pricing-column { display: block !important; padding-left: 0 !important; width: 100% !important; }",
  "  .product-pricing-column + .product-pricing-column { padding-top: 44px !important; }",
  "}",
].join("\n");

const defaultPlans: ProductPricingPlan[] = [
  {
    ctaHref: "https://example.com",
    ctaLabel: "View details",
    leasePrice: "$499",
    name: "Model X",
    purchasePrice: "$142,400",
  },
  {
    ctaHref: "https://example.com",
    ctaLabel: "View details",
    leasePrice: "$199",
    name: "Model Y",
    purchasePrice: "$52,400",
  },
];

const PriceBlock = ({
  label,
  price,
  period,
  backgroundColor,
  rounded,
}: {
  label: string;
  price: string;
  period?: string;
  backgroundColor: string;
  rounded?: "top" | "bottom";
}) => (
  <Section
    style={{
      backgroundColor,
      borderBottomLeftRadius: rounded === "bottom" ? "8px" : undefined,
      borderBottomRightRadius: rounded === "bottom" ? "8px" : undefined,
      borderTopLeftRadius: rounded === "top" ? "8px" : undefined,
      borderTopRightRadius: rounded === "top" ? "8px" : undefined,
      textAlign: "center",
    }}
  >
    <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
    <Text
      style={{
        color: "#4b5563",
        fontFamily,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "24px",
        margin: 0,
        textAlign: "center",
      }}
    >
      {label}
    </Text>
    <Text
      style={{
        color: "#030712",
        fontFamily,
        fontSize: "30px",
        fontWeight: 600,
        lineHeight: "36px",
        margin: "8px 0 0",
        textAlign: "center",
      }}
    >
      {price}{" "}
      {period ? (
        <span
          style={{
            color: "#6b7280",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
          }}
        >
          {period}
        </span>
      ) : null}
    </Text>
    <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
  </Section>
);

const ProductCard = ({
  plan,
  cardBackgroundColor,
  buttonBackgroundColor,
}: {
  plan: ProductPricingPlan;
  cardBackgroundColor: string;
  buttonBackgroundColor: string;
}) => (
  <>
    <Section
      style={{
        backgroundColor: cardBackgroundColor,
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        textAlign: "center",
      }}
    >
      <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
      <Text
        style={{
          color: "#030712",
          fontFamily,
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: "32px",
          margin: 0,
          textAlign: "center",
        }}
      >
        {plan.name}
      </Text>
      <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
    </Section>
    <Section style={{ lineHeight: "4px" }}>&zwj;</Section>
    <PriceBlock
      backgroundColor={cardBackgroundColor}
      label="Leasing starting at"
      period="/Month"
      price={plan.leasePrice}
    />
    <Section style={{ lineHeight: "4px" }}>&zwj;</Section>
    <PriceBlock
      backgroundColor={cardBackgroundColor}
      label="Purchase starting at"
      price={plan.purchasePrice}
      rounded="bottom"
    />
    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
    <Link
      href={plan.ctaHref}
      style={{
        backgroundColor: buttonBackgroundColor,
        borderRadius: "8px",
        color: "#f8fafc",
        display: "block",
        fontFamily,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: 1,
        padding: "10px 18px",
        textAlign: "center",
        textDecoration: "none",
      }}
    >
      {plan.ctaLabel}
    </Link>
  </>
);

export const TwoColumnsPricingTableWithGapsSection = ({
  plans = defaultPlans,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f9fafb",
  buttonBackgroundColor = "#030712",
}: Omit<TwoColumnsPricingTableWithGapsProps, "theme">) => (
  <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
    <Fragment>
      <Row>
        <Column>&zwj;</Column>
        <Column
          style={{
            backgroundColor,
            maxWidth: "100%",
            paddingBottom: "44px",
            width: "600px",
          }}
        >
          <Section width="100%">
            <Fragment>
              <Row>
                <Column style={{ padding: "0 24px" }}>
                  <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                  <Section width="100%">
                    <Fragment>
                      <Row>
                        {plans.map((plan, index) => (
                          <Column
                            className="product-pricing-column"
                            key={plan.name}
                            style={{
                              paddingLeft: index > 0 ? "16px" : undefined,
                              verticalAlign: "top",
                              width: "268px",
                            }}
                          >
                            <ProductCard
                              buttonBackgroundColor={buttonBackgroundColor}
                              cardBackgroundColor={cardBackgroundColor}
                              plan={plan}
                            />
                          </Column>
                        ))}
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
);

export const TwoColumnsPricingTableWithGaps = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  ...props
}: TwoColumnsPricingTableWithGapsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Model pricing</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <TwoColumnsPricingTableWithGapsSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
      />
    </Body>
  </Html>
);

TwoColumnsPricingTableWithGaps.PreviewProps = {
  theme: defaultTheme,
} satisfies TwoColumnsPricingTableWithGapsProps;
