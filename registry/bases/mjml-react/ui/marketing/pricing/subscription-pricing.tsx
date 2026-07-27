import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/themes/definitions/default";
import type { EmailThemeTokens } from "@/registry/themes/definitions/default";

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
  theme?: EmailThemeTokens;
  plans?: TwoColumnPricing_PricingPlan[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  brandColor?: string;
}

const TwoColumnPricing_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

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
  second,
}: {
  plan: TwoColumnPricing_PricingPlan;
  cardBackgroundColor: string;
  brandColor: string;
  second: boolean;
}) => (
  <MjmlColumn
    backgroundColor={cardBackgroundColor}
    borderRadius="8px"
    padding={second ? "24px 24px 24px 32px" : "24px 32px 24px 24px"}
    verticalAlign="top"
    width="50%"
  >
    <MjmlText
      color={brandColor}
      fontFamily={TwoColumnPricing_fontFamily}
      fontSize="22px"
      fontWeight="600"
      lineHeight="30px"
      padding="0"
    >
      {plan.name}
    </MjmlText>
    <MjmlSpacer height="16px" />
    <MjmlText
      color="#030712"
      fontFamily={TwoColumnPricing_fontFamily}
      fontSize="44px"
      fontWeight="600"
      lineHeight="48px"
      padding="0"
    >
      {plan.price} {plan.period}
    </MjmlText>
    <MjmlSpacer height="16px" />
    <MjmlText
      color="#4b5563"
      fontFamily={TwoColumnPricing_fontFamily}
      fontSize="15px"
      lineHeight="22px"
      padding="0"
    >
      {plan.description}
    </MjmlText>
    <MjmlSpacer height="28px" />
    {plan.features.map((feature) => (
      <MjmlText
        color={feature.muted ? "#9ca3af" : "#4b5563"}
        fontFamily={TwoColumnPricing_fontFamily}
        fontSize="14px"
        key={feature.label}
        lineHeight="20px"
        padding="0 0 12px"
      >
        ✓ &nbsp;{feature.label}
      </MjmlText>
    ))}
    <MjmlSpacer height="16px" />
    <MjmlButton
      backgroundColor={brandColor}
      borderRadius="8px"
      color="#fffffe"
      fontFamily={TwoColumnPricing_fontFamily}
      fontSize="16px"
      fontWeight="500"
      href={plan.ctaHref}
      innerPadding="10px 18px"
      lineHeight="16px"
      padding="0"
    >
      {plan.ctaLabel}
    </MjmlButton>
  </MjmlColumn>
);

const TwoColumnPricing_TwoColumnsPricingTableSection = ({
  plans = TwoColumnPricing_defaultPlans,
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f9fafb",
  brandColor = "#4f46e5",
}: Omit<TwoColumnPricing_TwoColumnsPricingTableProps, "theme">) => (
  <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
    {plans.slice(0, 2).map((plan, index) => (
      <TwoColumnPricing_PlanCard
        brandColor={brandColor}
        cardBackgroundColor={cardBackgroundColor}
        key={plan.name}
        plan={plan}
        second={index === 1}
      />
    ))}
  </MjmlSection>
);

const TwoColumnPricing_TwoColumnsPricingTable = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: TwoColumnPricing_TwoColumnsPricingTableProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlPreview>Pricing plans</MjmlPreview>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <TwoColumnPricing_TwoColumnsPricingTableSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
  theme?: EmailThemeTokens;
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
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f9fafb",
  brandColor = "#4f46e5",
}: Omit<SinglePricing_FullWidthSinglePricingProps, "theme">) => (
  <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
    <MjmlColumn
      backgroundColor={cardBackgroundColor}
      borderRadius="8px"
      padding="24px"
    >
      <MjmlText
        color={brandColor}
        fontFamily={SinglePricing_fontFamily}
        fontSize="24px"
        fontWeight="600"
        lineHeight="32px"
        padding="0"
      >
        {name}
      </MjmlText>
      <MjmlSpacer height="16px" />
      <MjmlText
        color="#030712"
        fontFamily={SinglePricing_fontFamily}
        fontSize="60px"
        fontWeight="600"
        lineHeight="60px"
        padding="0"
      >
        {price} · {currency} {period}
      </MjmlText>
      <MjmlSpacer height="16px" />
      <MjmlText
        color="#030712"
        fontFamily={SinglePricing_fontFamily}
        fontSize="18px"
        fontWeight="500"
        lineHeight="28px"
        padding="0"
      >
        {description}
      </MjmlText>
      <MjmlSpacer height="36px" />
      {features.map((feature) => (
        <MjmlText
          color={feature.muted ? "#9ca3af" : "#4b5563"}
          fontFamily={SinglePricing_fontFamily}
          fontSize="16px"
          key={feature.label}
          lineHeight="24px"
          padding="0 0 16px"
        >
          ✓ &nbsp;{feature.label}
        </MjmlText>
      ))}
    </MjmlColumn>
  </MjmlSection>
);

const SinglePricing_FullWidthSinglePricing = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: SinglePricing_FullWidthSinglePricingProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlPreview>Takeoff pricing</MjmlPreview>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <SinglePricing_FullWidthSinglePricingSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
