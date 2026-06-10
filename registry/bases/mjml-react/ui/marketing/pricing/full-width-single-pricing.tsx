/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
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

export type PricingSideBySideVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface PricingSideBySideProps {
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
  variant?: PricingSideBySideVariant;
}

const PricingSideBySideSection = ({
  plans,
  theme,
  variant,
}: {
  plans: PricingSideBySideProps["plans"];
  theme: EmailThemeTokens;
  variant: PricingSideBySideVariant;
}) => {
  const items = (plans ?? []).slice(0, 2);

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {items.map((plan, i) => (
        <MjmlColumn
          key={plan.name + i}
          width={`${100 / Math.max(items.length, 1)}%`}
          padding={theme.spacingBase ?? "24px"}
          verticalAlign="top"
        >
          <MjmlSection
            backgroundColor={
              plan.highlighted
                ? theme.colorBackgroundMuted
                : theme.colorBackground
            }
            border={
              plan.highlighted
                ? `2px solid ${theme.colorPrimary}`
                : `1px solid ${theme.colorBorder ?? "#e5e7eb"}`
            }
            borderRadius={theme.borderRadius}
            padding={theme.spacingXl ?? "24px"}
          >
            <MjmlText
              align="center"
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeLg ?? "16px"}
              fontWeight={theme.fontWeightMedium}
              paddingBottom={theme.spacingBase ?? "16px"}
            >
              {plan.name}
            </MjmlText>
            <MjmlText
              align="center"
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeHeading}
              fontWeight={theme.fontWeightBold}
              paddingBottom={theme.spacingBase ?? "16px"}
            >
              {plan.price}
              <span
                style={{
                  color: theme.colorTextMuted,
                  fontSize: theme.fontSizeSm ?? "14px",
                }}
              >
                {plan.period}
              </span>
            </MjmlText>
            {plan.features.map((f, fi) => (
              <MjmlText
                key={plan.name + f + fi}
                align="center"
                color={theme.colorTextMuted}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeBase ?? "14px"}
                lineHeight={theme.lineHeightBase}
                paddingBottom={theme.spacingBase ?? "8px"}
              >
                &bull; {f}
              </MjmlText>
            ))}
            <MjmlButton
              align="center"
              backgroundColor={theme.colorPrimary}
              borderRadius={theme.borderRadius}
              color={theme.colorPrimaryForeground}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeSm ?? "14px"}
              fontWeight={theme.fontWeightMedium}
              href={plan.ctaHref}
              innerPadding={`${theme.button.primary.paddingY} ${theme.button.primary.paddingX}`}
            >
              {plan.ctaLabel}
            </MjmlButton>
          </MjmlSection>
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const FullWidthSinglePricing = ({
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
  variant = "default",
}: PricingSideBySideProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>pricing side-by-side</MjmlPreview>
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
        <PricingSideBySideSection
          plans={plans}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FullWidthSinglePricing.PreviewProps = {
  plans: [
    {
      ctaHref: "https://example.com/signup",
      ctaLabel: "Get Started",
      features: ["1 user", "5 projects", "Basic support"],
      name: "Basic",
      period: "/mo",
      price: "$9",
    },
    {
      ctaHref: "https://example.com/signup",
      ctaLabel: "Get Started",
      features: [
        "5 users",
        "Unlimited projects",
        "Priority support",
        "Custom branding",
      ],
      highlighted: true,
      name: "Pro",
      period: "/mo",
      price: "$29",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies PricingSideBySideProps;
