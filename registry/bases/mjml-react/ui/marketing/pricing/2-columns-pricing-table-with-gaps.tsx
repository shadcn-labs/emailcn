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
  MjmlStyle,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type TwoColumnsPricingTableWithGapsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TwoColumnsPricingTableWithGapsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  plan1?: string;
  price1?: string;
  period1?: string;
  desc1?: string;
  feature1_1?: string;
  feature1_2?: string;
  feature1_3?: string;
  ctaLabel1?: string;
  ctaHref1?: string;
  plan2?: string;
  price2?: string;
  period2?: string;
  desc2?: string;
  feature2_1?: string;
  feature2_2?: string;
  feature2_3?: string;
  ctaLabel2?: string;
  ctaHref2?: string;
  variant?: TwoColumnsPricingTableWithGapsVariant;
}

const variantClass = (variant: TwoColumnsPricingTableWithGapsVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

const Card = ({
  plan,
  price,
  period,
  desc,
  features,
  ctaLabel,
  ctaHref,
  theme,
}: {
  plan: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  theme: EmailThemeTokens;
}) => (
  <MjmlColumn
    border={`1px solid ${theme.colorBorder}`}
    borderRadius={theme.borderRadiusLg ?? theme.borderRadius}
    padding="24px"
    verticalAlign="top"
    width="48%"
  >
    <MjmlText
      align="center"
      color={theme.colorText}
      fontSize={theme.fontSizeLg}
      fontWeight={theme.fontWeightBold}
      paddingBottom="12px"
    >
      {plan}
    </MjmlText>
    <MjmlText
      align="center"
      color={theme.colorText}
      fontSize={theme.fontSizeHeading}
      fontWeight={theme.fontWeightBold}
      paddingBottom="8px"
    >
      {price}
      <span
        style={{
          color: theme.colorTextMuted,
          fontSize: theme.fontSizeSm,
          fontWeight: theme.fontWeightNormal,
        }}
      >
        {period}
      </span>
    </MjmlText>
    <MjmlText
      align="center"
      color={theme.colorTextMuted}
      fontSize={theme.fontSizeSm}
      paddingBottom="16px"
    >
      {desc}
    </MjmlText>
    {features.map((feature) => (
      <MjmlText
        key={feature}
        align="center"
        color={theme.colorText}
        fontSize={theme.fontSizeSm}
        paddingBottom="4px"
      >
        &bull; {feature}
      </MjmlText>
    ))}
    {ctaLabel && ctaHref ? (
      <MjmlButton
        align="center"
        backgroundColor={theme.colorPrimary}
        borderRadius={theme.borderRadius}
        color={theme.colorPrimaryForeground ?? "#ffffff"}
        fontSize={theme.fontSizeSm}
        fontWeight={theme.fontWeightMedium}
        href={ctaHref}
        innerPadding="8px 24px"
        paddingTop="20px"
      >
        {ctaLabel}
      </MjmlButton>
    ) : null}
  </MjmlColumn>
);

export const TwoColumnsPricingTableWithGaps = ({
  theme = defaultTheme,
  heading = "Plans",
  plan1 = "Starter",
  price1 = "$9",
  period1 = "/month",
  desc1 = "For individuals.",
  feature1_1 = "1,000 emails",
  feature1_2 = "Basic templates",
  feature1_3 = "Email support",
  ctaLabel1 = "Get Started",
  ctaHref1 = "#",
  plan2 = "Pro",
  price2 = "$29",
  period2 = "/month",
  desc2 = "For teams.",
  feature2_1 = "Unlimited emails",
  feature2_2 = "Custom templates",
  feature2_3 = "Priority support",
  ctaLabel2 = "Subscribe",
  ctaHref2 = "#",
  variant = "default",
}: TwoColumnsPricingTableWithGapsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{heading}</MjmlPreview>
      <MjmlStyle>{`
        .ec-skew-left > div { transform: skewX(-10deg); }
        .ec-skew-right > div { transform: skewX(10deg); }
      `}</MjmlStyle>
      <MjmlAttributes>
        <MjmlAll color={theme.colorText} fontFamily={theme.fontFamily} />
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
      <MjmlSection backgroundColor={theme.colorBackground} paddingTop="64px">
        <MjmlColumn>
          {heading ? (
            <MjmlText
              align="center"
              color={theme.colorText}
              fontSize={theme.fontSizeHeading}
              fontWeight={theme.fontWeightBold}
            >
              {heading}
            </MjmlText>
          ) : null}
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection
        backgroundColor={theme.colorBackground}
        cssClass={variantClass(variant)}
        paddingBottom="64px"
        paddingTop="24px"
      >
        <Card
          ctaHref={ctaHref1}
          ctaLabel={ctaLabel1}
          desc={desc1}
          features={[feature1_1, feature1_2, feature1_3]}
          period={period1}
          plan={plan1}
          price={price1}
          theme={theme}
        />
        <MjmlColumn width="4%" />
        <Card
          ctaHref={ctaHref2}
          ctaLabel={ctaLabel2}
          desc={desc2}
          features={[feature2_1, feature2_2, feature2_3]}
          period={period2}
          plan={plan2}
          price={price2}
          theme={theme}
        />
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);

TwoColumnsPricingTableWithGaps.PreviewProps = {
  ctaHref1: "#",
  ctaHref2: "#",
  ctaLabel1: "Get Started",
  ctaLabel2: "Subscribe",
  desc1: "For individuals.",
  desc2: "For teams.",
  feature1_1: "1,000 emails",
  feature1_2: "Basic templates",
  feature1_3: "Email support",
  feature2_1: "Unlimited emails",
  feature2_2: "Custom templates",
  feature2_3: "Priority support",
  heading: "Plans",
  period1: "/month",
  period2: "/month",
  plan1: "Starter",
  plan2: "Pro",
  price1: "$9",
  price2: "$29",
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnsPricingTableWithGapsProps;
