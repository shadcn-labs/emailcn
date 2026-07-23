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

export interface ProductPricingPlan {
  ctaHref: string;
  ctaLabel: string;
  leasePrice: string;
  name: string;
  purchasePrice: string;
}

export interface TwoColumnsPricingTableWithGapsProps {
  theme?: EmailThemeTokens;
  plans?: ProductPricingPlan[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  buttonBackgroundColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
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

const ProductCard = ({
  plan,
  cardBackgroundColor,
  buttonBackgroundColor,
  second,
}: {
  plan: ProductPricingPlan;
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
      fontFamily={fontFamily}
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
      fontFamily={fontFamily}
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
      fontFamily={fontFamily}
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

export const TwoColumnsPricingTableWithGapsSection = ({
  plans = defaultPlans,
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f9fafb",
  buttonBackgroundColor = "#030712",
}: Omit<TwoColumnsPricingTableWithGapsProps, "theme">) => (
  <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
    {plans.slice(0, 2).map((plan, index) => (
      <ProductCard
        buttonBackgroundColor={buttonBackgroundColor}
        cardBackgroundColor={cardBackgroundColor}
        key={plan.name}
        plan={plan}
        second={index === 1}
      />
    ))}
  </MjmlSection>
);

export const TwoColumnsPricingTableWithGaps = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: TwoColumnsPricingTableWithGapsProps) => (
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
        <TwoColumnsPricingTableWithGapsSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TwoColumnsPricingTableWithGaps.PreviewProps = {
  theme: defaultTheme,
} satisfies TwoColumnsPricingTableWithGapsProps;
