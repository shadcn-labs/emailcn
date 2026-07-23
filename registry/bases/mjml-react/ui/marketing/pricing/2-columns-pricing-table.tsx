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

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

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
  second,
}: {
  plan: PricingPlan;
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
      fontFamily={fontFamily}
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
      fontFamily={fontFamily}
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
      fontFamily={fontFamily}
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
        fontFamily={fontFamily}
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
      fontFamily={fontFamily}
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

export const TwoColumnsPricingTableSection = ({
  plans = defaultPlans,
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f9fafb",
  brandColor = "#4f46e5",
}: Omit<TwoColumnsPricingTableProps, "theme">) => (
  <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
    {plans.slice(0, 2).map((plan, index) => (
      <PlanCard
        brandColor={brandColor}
        cardBackgroundColor={cardBackgroundColor}
        key={plan.name}
        plan={plan}
        second={index === 1}
      />
    ))}
  </MjmlSection>
);

export const TwoColumnsPricingTable = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: TwoColumnsPricingTableProps) => (
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
        <TwoColumnsPricingTableSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TwoColumnsPricingTable.PreviewProps = {
  theme: defaultTheme,
} satisfies TwoColumnsPricingTableProps;
