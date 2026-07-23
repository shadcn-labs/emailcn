/* eslint-disable next/no-img-element */
import { Body, Head, Html, Preview } from "jsx-email";

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
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    width="100%"
  >
    <tbody>
      <tr>
        <td
          style={{
            backgroundColor: cardBackgroundColor,
            borderRadius: "8px",
            padding: "24px",
          }}
        >
          <p
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
          </p>
          <div style={{ lineHeight: "16px" }}>&zwj;</div>
          <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
            <tbody>
              <tr>
                <td>
                  <p
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
                  </p>
                </td>
                <td style={{ width: "8px" }}>&zwj;</td>
                <td>
                  <p
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
                  </p>
                  <p
                    style={{
                      color: "#6b7280",
                      fontFamily,
                      fontSize: "14px",
                      lineHeight: "20px",
                      margin: 0,
                    }}
                  >
                    {plan.period}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ lineHeight: "16px" }}>&zwj;</div>
          <p
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
          </p>
          <div style={{ lineHeight: "36px" }}>&zwj;</div>
          <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
            <tbody>
              {plan.features.map((feature, index) => (
                <tr key={feature.label}>
                  <td
                    style={{
                      lineHeight: "24px",
                      verticalAlign: "top",
                      width: "16px",
                    }}
                  >
                    <img
                      alt=""
                      src={`https://assets.mailviews.com/images/components/icon-check-${feature.muted ? "muted" : "brand"}.png`}
                      style={{ maxWidth: "100%", verticalAlign: "middle" }}
                      width={16}
                    />
                  </td>
                  <td style={{ width: "12px" }}>&zwj;</td>
                  <td
                    style={{
                      paddingBottom:
                        index < plan.features.length - 1 ? "16px" : 0,
                      verticalAlign: "top",
                    }}
                  >
                    <p
                      style={{
                        color: feature.muted ? "#9ca3af" : "#4b5563",
                        fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      {feature.label}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ lineHeight: "36px" }}>&zwj;</div>
          <a
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
          </a>
        </td>
      </tr>
    </tbody>
  </table>
);

export const TwoColumnsPricingTableSection = ({
  plans = defaultPlans,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f9fafb",
  brandColor = "#4f46e5",
}: Omit<TwoColumnsPricingTableProps, "theme">) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    style={{ backgroundColor: pageBackgroundColor }}
    width="100%"
  >
    <tbody>
      <tr>
        <td>&zwj;</td>
        <td
          style={{
            backgroundColor,
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
            width="100%"
          >
            <tbody>
              <tr>
                <td style={{ padding: "0 24px" }}>
                  <div style={{ lineHeight: "44px" }}>&zwj;</div>
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    role="presentation"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        {plans.map((plan, index) => (
                          <td
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
                          </td>
                        ))}
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
