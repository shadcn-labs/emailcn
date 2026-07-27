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

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
interface PurchasePricing_ProductPricingPlan {
  ctaHref: string;
  ctaLabel: string;
  leasePrice: string;
  name: string;
  purchasePrice: string;
}
interface PurchasePricing_TwoColumnsPricingTableWithGapsProps {
  theme?: EmailThemeTokens;
  plans?: PurchasePricing_ProductPricingPlan[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  buttonBackgroundColor?: string;
}
const PurchasePricing_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
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
const PurchasePricing_ProductCard = ({
  plan,
  cardBackgroundColor,
  buttonBackgroundColor,
  second,
}: {
  plan: PurchasePricing_ProductPricingPlan;
  cardBackgroundColor: string;
  buttonBackgroundColor: string;
  second: boolean;
}) => (
  <MjmlColumn
    padding={second ? "0 0 0 8px" : "0 8px 0 0"}
    verticalAlign="top"
    width="50%"
  >
    <MjmlText
      align="center"
      color="#030712"
      fontFamily={PurchasePricing_fontFamily}
      fontSize="24px"
      fontWeight="600"
      lineHeight="32px"
      padding="0 0 16px"
    >
      {plan.name}
    </MjmlText>
    <MjmlText
      align="center"
      color="#030712"
      containerBackgroundColor={cardBackgroundColor}
      fontFamily={PurchasePricing_fontFamily}
      fontSize="36px"
      fontWeight="600"
      lineHeight="44px"
      padding="24px"
    >
      {plan.leasePrice} / month
    </MjmlText>
    <MjmlText
      align="center"
      color="#4b5563"
      containerBackgroundColor={cardBackgroundColor}
      fontFamily={PurchasePricing_fontFamily}
      fontSize="16px"
      lineHeight="24px"
      padding="20px 24px 24px"
    >
      Purchase for {plan.purchasePrice}
    </MjmlText>
    <MjmlSpacer height="20px" />
    <MjmlButton
      backgroundColor={buttonBackgroundColor}
      borderRadius="8px"
      color="#fffffe"
      fontFamily={PurchasePricing_fontFamily}
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
const PurchasePricing_TwoColumnsPricingTableWithGapsSection = ({
  plans = PurchasePricing_defaultPlans,
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f9fafb",
  buttonBackgroundColor = "#030712",
}: Omit<PurchasePricing_TwoColumnsPricingTableWithGapsProps, "theme">) => (
  <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
    {plans.slice(0, 2).map((plan, index) => (
      <PurchasePricing_ProductCard
        buttonBackgroundColor={buttonBackgroundColor}
        cardBackgroundColor={cardBackgroundColor}
        key={plan.name}
        plan={plan}
        second={index === 1}
      />
    ))}
  </MjmlSection>
);
const PurchasePricing_TwoColumnsPricingTableWithGaps = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: PurchasePricing_TwoColumnsPricingTableWithGapsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlPreview>Model pricing</MjmlPreview>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <PurchasePricing_TwoColumnsPricingTableWithGapsSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
