import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface PricingTableProps {
  theme?: EmailThemeTokens;
  plans?: {
    name: string;
    price: string;
    period: string;
    features: string[];
    ctaLabel: string;
    ctaHref: string;
    highlighted?: boolean;
  }[];
}

const PricingTableSection = ({
  plans,
  theme,
}: {
  plans: NonNullable<PricingTableProps["plans"]>;
  theme: EmailThemeTokens;
}) => {
  const pct = `${100 / Math.min(plans.length, 3)}%`;

  return (
    <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
      {plans.slice(0, 3).map((plan) => (
        <MjmlColumn
          key={plan.name}
          backgroundColor={
            plan.highlighted
              ? theme.colorBackgroundMuted
              : theme.colorBackground
          }
          border={
            plan.highlighted
              ? `2px solid ${theme.colorPrimary}`
              : `1px solid ${theme.colorBorder}`
          }
          borderRadius={theme.borderRadius}
          padding={`${theme.spacingLg ?? "24px"} ${theme.spacingBase ?? "16px"}`}
          verticalAlign="top"
          width={pct}
        >
          <MjmlText
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeLg ?? "16px"}
            fontWeight={theme.fontWeightMedium ?? "500"}
            paddingBottom={theme.spacingBase ?? "16px"}
          >
            {plan.name}
          </MjmlText>
          <MjmlText paddingBottom={theme.spacingBase ?? "16px"}>
            <span
              style={{
                fontSize: theme.fontSizeHeading ?? "28px",
                fontWeight: 700,
              }}
            >
              {plan.price}
            </span>
            <span
              style={{
                color: theme.colorTextMuted,
                fontSize: 14,
              }}
            >
              {plan.period}
            </span>
          </MjmlText>
          {plan.features.map((feature) => (
            <MjmlText
              key={`${plan.name}-${feature}`}
              color={theme.colorTextMuted}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase ?? "14px"}
              paddingBottom={theme.spacingBase ?? "16px"}
            >
              • {feature}
            </MjmlText>
          ))}
          <MjmlButton
            align="center"
            backgroundColor={theme.colorPrimary}
            borderRadius={theme.borderRadius}
            color={theme.colorPrimaryForeground ?? "#ffffff"}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm ?? "14px"}
            fontWeight={theme.fontWeightMedium ?? "500"}
            href={plan.ctaHref}
            innerPadding={`${theme.spacingBase ?? "16px"} ${theme.spacingLg ?? "24px"}`}
            paddingTop={theme.spacingBase ?? "16px"}
          >
            {plan.ctaLabel}
          </MjmlButton>
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const PricingTable = ({
  theme = defaultTheme,
  plans = [
    {
      ctaHref: "#",
      ctaLabel: "Get Started",
      features: ["1 user", "5 projects"],
      name: "Basic",
      period: "/mo",
      price: "$9",
    },
    {
      ctaHref: "#",
      ctaLabel: "Get Started",
      features: ["5 users", "Unlimited projects", "Priority support"],
      highlighted: true,
      name: "Pro",
      period: "/mo",
      price: "$29",
    },
  ],
}: PricingTableProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>pricing-table</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <PricingTableSection plans={plans} theme={theme} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

PricingTable.PreviewProps = {
  theme: defaultTheme,
} satisfies PricingTableProps;
