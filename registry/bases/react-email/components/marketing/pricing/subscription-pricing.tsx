import { Fragment } from "react";
import {
  Body,
  Head as EmailHead,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Text,
  Link,
  Img,
  Tailwind,
} from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { createEmailTailwindConfig } from "@/registry/bases/react-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/react-email/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

interface TwoColumnPricing_PricingPlanFeature {
  label: string;
  muted?: boolean;
}

interface TwoColumnPricing_PricingPlan {
  ctaHref: string;
  ctaLabel: string;
  description: string;
  features: TwoColumnPricing_PricingPlanFeature[];
  name: string;
  period: string;
  price: string;
}

interface TwoColumnPricing_TwoColumnsPricingTableProps {
  theme?: EmailTheme;
  plans?: TwoColumnPricing_PricingPlan[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  brandColor?: string;
}

const TwoColumnPricing_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TwoColumnPricing_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .pricing-plan-column { display: block !important; width: 100% !important; }",
  "  .pricing-plan-gap { display: block !important; line-height: 16px !important; }",
  "}",
].join("\n");

const TwoColumnPricing_defaultPlans: TwoColumnPricing_PricingPlan[] = [
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

const TwoColumnPricing_PlanCard = ({
  plan,
  cardBackgroundColor,
  brandColor,
}: {
  plan: TwoColumnPricing_PricingPlan;
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
              fontFamily: TwoColumnPricing_fontFamily,
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
                      fontFamily: TwoColumnPricing_fontFamily,
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
                      fontFamily: TwoColumnPricing_fontFamily,
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
                      fontFamily: TwoColumnPricing_fontFamily,
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
              fontFamily: TwoColumnPricing_fontFamily,
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
                      src={emailAsset(
                        `icon-check-${feature.muted ? "muted" : "brand"}.png`
                      )}
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
                        fontFamily: TwoColumnPricing_fontFamily,
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
              fontFamily: TwoColumnPricing_fontFamily,
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

const TwoColumnPricing_TwoColumnsPricingTableSection = ({
  plans = TwoColumnPricing_defaultPlans,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f9fafb",
  brandColor = "#4f46e5",
}: Omit<TwoColumnPricing_TwoColumnsPricingTableProps, "theme">) => (
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
                            <TwoColumnPricing_PlanCard
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

const TwoColumnPricing_TwoColumnsPricingTable = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: TwoColumnPricing_TwoColumnsPricingTableProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: TwoColumnPricing_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Pricing plans</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: TwoColumnPricing_fontFamily,
        }}
        className="m-0"
      >
        <TwoColumnPricing_TwoColumnsPricingTableSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
        />
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnPricing_TwoColumnsPricingTable.PreviewProps = {
  theme: defaultTheme,
} satisfies TwoColumnPricing_TwoColumnsPricingTableProps;

const __TwoColumnPricing = TwoColumnPricing_TwoColumnsPricingTable;

interface SinglePricing_PricingFeature {
  label: string;
  muted?: boolean;
}

interface SinglePricing_FullWidthSinglePricingProps {
  theme?: EmailTheme;
  name?: string;
  price?: string;
  currency?: string;
  period?: string;
  description?: string;
  features?: SinglePricing_PricingFeature[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  brandColor?: string;
}

const SinglePricing_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const SinglePricing_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .single-pricing-break { display: none !important; }",
  "}",
].join("\n");

const SinglePricing_defaultFeatures: SinglePricing_PricingFeature[] = [
  { label: "Visual email editor" },
  { label: "Transactional & marketing templates" },
  { label: "Team collaboration (up to 3 users)", muted: true },
  { label: "Version control & previews", muted: true },
];

const SinglePricing_FullWidthSinglePricingSection = ({
  name = "Takeoff",
  price = "$19",
  currency = "USD",
  period = "/Month",
  description = "Everything you need to design, build, and ship emails faster.",
  features = SinglePricing_defaultFeatures,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f9fafb",
  brandColor = "#4f46e5",
}: Omit<SinglePricing_FullWidthSinglePricingProps, "theme">) => (
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
                              fontFamily: SinglePricing_fontFamily,
                              fontSize: "24px",
                              fontWeight: 600,
                              lineHeight: "32px",
                              margin: 0,
                            }}
                          >
                            {name}
                          </Text>
                          <Section style={{ lineHeight: "16px" }}>
                            &zwj;
                          </Section>
                          <Section>
                            <Fragment>
                              <Row>
                                <Column>
                                  <Text
                                    style={{
                                      color: "#030712",
                                      fontFamily: SinglePricing_fontFamily,
                                      fontSize: "60px",
                                      fontWeight: 600,
                                      lineHeight: 1,
                                      margin: 0,
                                    }}
                                  >
                                    {price}
                                  </Text>
                                </Column>
                                <Column style={{ width: "8px" }}>&zwj;</Column>
                                <Column>
                                  <Text
                                    style={{
                                      color: "#374151",
                                      fontFamily: SinglePricing_fontFamily,
                                      fontSize: "14px",
                                      fontWeight: 500,
                                      lineHeight: "20px",
                                      margin: 0,
                                    }}
                                  >
                                    {currency}
                                  </Text>
                                  <Text
                                    style={{
                                      color: "#6b7280",
                                      fontFamily: SinglePricing_fontFamily,
                                      fontSize: "14px",
                                      lineHeight: "20px",
                                      margin: 0,
                                    }}
                                  >
                                    {period}
                                  </Text>
                                </Column>
                              </Row>
                            </Fragment>
                          </Section>
                          <Section style={{ lineHeight: "16px" }}>
                            &zwj;
                          </Section>
                          <Text
                            style={{
                              color: "#030712",
                              fontFamily: SinglePricing_fontFamily,
                              fontSize: "18px",
                              fontWeight: 500,
                              lineHeight: "28px",
                              margin: 0,
                            }}
                          >
                            {description ===
                            "Everything you need to design, build, and ship emails faster." ? (
                              <>
                                Everything you need to design, build,{" "}
                                <br className="single-pricing-break" /> and ship
                                emails faster.
                              </>
                            ) : (
                              description
                            )}
                          </Text>
                          <Section style={{ lineHeight: "36px" }}>
                            &zwj;
                          </Section>
                          <Section>
                            <Fragment>
                              {features.map((feature, index) => (
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
                                      src={emailAsset(
                                        `icon-check-${feature.muted ? "muted" : "brand"}.png`
                                      )}
                                      style={{
                                        maxWidth: "100%",
                                        verticalAlign: "middle",
                                      }}
                                      width={16}
                                    />
                                  </Column>
                                  <Column style={{ width: "12px" }}>
                                    &zwj;
                                  </Column>
                                  <Column
                                    style={{
                                      paddingBottom:
                                        index < features.length - 1
                                          ? "16px"
                                          : 0,
                                      verticalAlign: "top",
                                    }}
                                  >
                                    <Text
                                      style={{
                                        color: feature.muted
                                          ? "#9ca3af"
                                          : "#4b5563",
                                        fontFamily: SinglePricing_fontFamily,
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
                        </Column>
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

const SinglePricing_FullWidthSinglePricing = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: SinglePricing_FullWidthSinglePricingProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: SinglePricing_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Takeoff pricing</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: SinglePricing_fontFamily,
        }}
        className="m-0"
      >
        <SinglePricing_FullWidthSinglePricingSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
        />
      </Body>
    </Tailwind>
  </Html>
);

SinglePricing_FullWidthSinglePricing.PreviewProps = {
  theme: defaultTheme,
} satisfies SinglePricing_FullWidthSinglePricingProps;

const __SinglePricing = SinglePricing_FullWidthSinglePricing;

export interface SubscriptionPlan {
  name: string;
  description?: string;
  price: string;
  currency?: string;
  period?: string;
  features?: {
    label: string;
    muted?: boolean;
  }[];
  action: {
    href: string;
    label: string;
  };
}

export interface SubscriptionPricingProps {
  theme?: Parameters<typeof __TwoColumnPricing>[0]["theme"];
  plans?: SubscriptionPlan[];
  columns?: 1 | 2;
}

export const SubscriptionPricing = ({
  theme,
  plans,
  columns = 2,
}: SubscriptionPricingProps) => {
  if (columns === 1) {
    const [plan] = plans ?? [];
    return (
      <__SinglePricing
        currency={plan?.currency}
        description={plan?.description}
        features={plan?.features}
        name={plan?.name}
        period={plan?.period}
        price={plan?.price}
        theme={theme}
      />
    );
  }
  return (
    <__TwoColumnPricing
      plans={plans?.map((plan) => ({
        ctaHref: plan.action.href,
        ctaLabel: plan.action.label,
        description: plan.description ?? "",
        features: plan.features ?? [],
        name: plan.name,
        period: plan.period ?? "",
        price: plan.price,
      }))}
      theme={theme}
    />
  );
};

SubscriptionPricing.PreviewProps = {
  columns: 2,
} satisfies SubscriptionPricingProps;
