import {
  Body,
  Head,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Text,
  Link,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

export interface PricingPlanFeature {
  label: string;
  muted?: boolean;
}

export interface PricingPlan {
  ctaHref: string;
  ctaLabel: string;
  description: string;
  features: PricingPlanFeature[];
  name: string;
  period: string;
  price: string;
}

export interface TwoColumnsPricingTableProps {
  theme?: EmailThemeTokens;
  plans?: PricingPlan[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  brandColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .pricing-plan-column { display: block !important; width: 100% !important; }",
  "  .pricing-plan-gap { display: block !important; line-height: 16px !important; }",
  "}",
].join("\n");

const defaultPlans: PricingPlan[] = [
  {
    ctaHref: "https://example.com",
    ctaLabel: "Get started",
    description:
      "Everything you need to design, build, and ship emails faster.",
    features: [
      { label: "Visual email editor" },
      { label: "All email templates" },
      { label: "Team collaboration (up to 3 users)", muted: true },
      { label: "Version control & previews", muted: true },
    ],
    name: "Takeoff",
    period: "/Month",
    price: "$19",
  },
  {
    ctaHref: "https://example.com",
    ctaLabel: "Get started",
    description:
      "Everything your team needs to design, build, and ship emails faster.",
    features: [
      { label: "Everything in Takeoff" },
      { label: "Unlimited team slots" },
      { label: "Advanced workflow automations" },
      { label: "Analytics and performance insights" },
    ],
    name: "Orbit",
    period: "/Month",
    price: "$29",
  },
];

const PlanCard = ({
  plan,
  cardBackgroundColor,
  brandColor,
}: {
  plan: PricingPlan;
  cardBackgroundColor: string;
  brandColor: string;
}) => (
  <Section width="100%">
    <Fragment>
      <Row>
        <Column
          style={{
            backgroundColor: cardBackgroundColor,
            borderRadius: "8px",
            padding: "24px",
          }}
        >
          <Text
            style={{
              color: brandColor,
              fontFamily,
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "32px",
              margin: 0,
            }}
          >
            {plan.name}
          </Text>
          <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
          <Section>
            <Fragment>
              <Row>
                <Column>
                  <Text
                    style={{
                      color: "#030712",
                      fontFamily,
                      fontSize: "60px",
                      fontWeight: 600,
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    {plan.price}
                  </Text>
                </Column>
                <Column style={{ width: "8px" }}>&zwj;</Column>
                <Column>
                  <Text
                    style={{
                      color: "#374151",
                      fontFamily,
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "20px",
                      margin: 0,
                    }}
                  >
                    USD
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontFamily,
                      fontSize: "14px",
                      lineHeight: "20px",
                      margin: 0,
                    }}
                  >
                    {plan.period}
                  </Text>
                </Column>
              </Row>
            </Fragment>
          </Section>
          <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
          <Text
            style={{
              color: "#030712",
              fontFamily,
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "28px",
              margin: 0,
            }}
          >
            {plan.description}
          </Text>
          <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
          <Section>
            <Fragment>
              {plan.features.map((feature, index) => (
                <Row key={feature.label}>
                  <Column
                    style={{
                      lineHeight: "24px",
                      verticalAlign: "top",
                      width: "16px",
                    }}
                  >
                    <Img
                      alt=""
                      src={`https://emailcn.vercel.app/api/email-assets/icon-check-${feature.muted ? "muted" : "brand"}.png`}
                      style={{ maxWidth: "100%", verticalAlign: "middle" }}
                      width={16}
                    />
                  </Column>
                  <Column style={{ width: "12px" }}>&zwj;</Column>
                  <Column
                    style={{
                      paddingBottom:
                        index < plan.features.length - 1 ? "16px" : 0,
                      verticalAlign: "top",
                    }}
                  >
                    <Text
                      style={{
                        color: feature.muted ? "#9ca3af" : "#4b5563",
                        fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      {feature.label}
                    </Text>
                  </Column>
                </Row>
              ))}
            </Fragment>
          </Section>
          <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
          <Link
            href={plan.ctaHref}
            style={{
              backgroundColor: brandColor,
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
        </Column>
      </Row>
    </Fragment>
  </Section>
);

export const TwoColumnsPricingTableSection = ({
  plans = defaultPlans,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f9fafb",
  brandColor = "#4f46e5",
}: Omit<TwoColumnsPricingTableProps, "theme">) => (
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
                            className="pricing-plan-column"
                            key={plan.name}
                            style={{
                              paddingLeft: index > 0 ? "16px" : undefined,
                              verticalAlign: "top",
                              width: "268px",
                            }}
                          >
                            <PlanCard
                              cardBackgroundColor={cardBackgroundColor}
                              brandColor={brandColor}
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

export const TwoColumnsPricingTable = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  ...props
}: TwoColumnsPricingTableProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Pricing plans</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <TwoColumnsPricingTableSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
      />
    </Body>
  </Html>
);

TwoColumnsPricingTable.PreviewProps = {
  theme: defaultTheme,
} satisfies TwoColumnsPricingTableProps;
