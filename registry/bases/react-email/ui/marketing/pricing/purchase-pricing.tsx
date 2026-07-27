import { Fragment } from "react";
import {
  Body,
  Head as EmailHead,
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
interface PurchasePricing_ProductPricingPlan {
  ctaHref: string;
  ctaLabel: string;
  leasePrice: string;
  name: string;
  purchasePrice: string;
}
interface PurchasePricing_TwoColumnsPricingTableWithGapsProps {
  theme?: TailwindConfig;
  plans?: PurchasePricing_ProductPricingPlan[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  buttonBackgroundColor?: string;
}
const PurchasePricing_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const PurchasePricing_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .product-pricing-column { display: block !important; padding-left: 0 !important; width: 100% !important; }",
  "  .product-pricing-column + .product-pricing-column { padding-top: 44px !important; }",
  "}",
].join("\n");
const PurchasePricing_defaultPlans: PurchasePricing_ProductPricingPlan[] = [
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
const PurchasePricing_PriceBlock = ({
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
        fontFamily: PurchasePricing_fontFamily,
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
        fontFamily: PurchasePricing_fontFamily,
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
const PurchasePricing_ProductCard = ({
  plan,
  cardBackgroundColor,
  buttonBackgroundColor,
}: {
  plan: PurchasePricing_ProductPricingPlan;
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
          fontFamily: PurchasePricing_fontFamily,
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
    <PurchasePricing_PriceBlock
      backgroundColor={cardBackgroundColor}
      label="Leasing starting at"
      period="/Month"
      price={plan.leasePrice}
    />
    <Section style={{ lineHeight: "4px" }}>&zwj;</Section>
    <PurchasePricing_PriceBlock
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
        fontFamily: PurchasePricing_fontFamily,
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
const PurchasePricing_TwoColumnsPricingTableWithGapsSection = ({
  plans = PurchasePricing_defaultPlans,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f9fafb",
  buttonBackgroundColor = "#030712",
}: Omit<PurchasePricing_TwoColumnsPricingTableWithGapsProps, "theme">) => (
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
                            <PurchasePricing_ProductCard
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
const PurchasePricing_TwoColumnsPricingTableWithGaps = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  ...props
}: PurchasePricing_TwoColumnsPricingTableWithGapsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: PurchasePricing_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Model pricing</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: PurchasePricing_fontFamily,
        margin: 0,
      }}
    >
      <PurchasePricing_TwoColumnsPricingTableWithGapsSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
      />
    </Body>
  </Html>
);
PurchasePricing_TwoColumnsPricingTableWithGaps.PreviewProps = {
  theme: defaultTheme,
} satisfies PurchasePricing_TwoColumnsPricingTableWithGapsProps;
const __PurchasePricing = PurchasePricing_TwoColumnsPricingTableWithGaps;
export interface PurchasePlan {
  name: string;
  leasePrice?: string;
  purchasePrice: string;
  action: {
    href: string;
    label: string;
  };
}
export interface PurchasePricingProps {
  theme?: Parameters<typeof __PurchasePricing>[0]["theme"];
  plans?: PurchasePlan[];
}
export const PurchasePricing = ({ theme, plans }: PurchasePricingProps) => (
  <__PurchasePricing
    plans={plans?.map((plan) => ({
      ctaHref: plan.action.href,
      ctaLabel: plan.action.label,
      leasePrice: plan.leasePrice ?? "",
      name: plan.name,
      purchasePrice: plan.purchasePrice,
    }))}
    theme={theme}
  />
);
PurchasePricing.PreviewProps = {} satisfies PurchasePricingProps;
