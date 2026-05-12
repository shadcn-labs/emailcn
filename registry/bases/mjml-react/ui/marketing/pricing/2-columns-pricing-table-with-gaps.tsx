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

export type PricingBasicVariant = "default" | "slanted-left" | "slanted-right";

export interface PricingBasicProps {
  theme?: EmailThemeTokens;
  name?: string;
  price?: string;
  period?: string;
  features?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  variant?: PricingBasicVariant;
}

const PricingBasicSection = ({
  ctaHref,
  ctaLabel,
  features,
  name,
  period,
  price,
  theme,
  variant,
}: {
  ctaHref: string;
  ctaLabel: string;
  features: string[];
  name: string;
  period: string;
  price: string;
  theme: EmailThemeTokens;
  variant: PricingBasicVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    border={`1px solid ${theme.colorBorder ?? "#e5e7eb"}`}
    borderRadius={theme.borderRadius}
    padding={theme.spacingXl ?? "24px"}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg ?? "16px"}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {name}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeHeading}
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {price}
        <span
          style={{
            color: theme.colorTextMuted,
            fontSize: theme.fontSizeSm ?? "14px",
          }}
        >
          {period}
        </span>
      </MjmlText>
      {features.map((f, i) => (
        <MjmlText
          key={name + f + i}
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
        href={ctaHref}
        innerPadding={`${theme.button.primary.paddingY} ${theme.button.primary.paddingX}`}
      >
        {ctaLabel}
      </MjmlButton>
    </MjmlColumn>
  </MjmlSection>
);

export const TwoColumnsPricingTableWithGaps = ({
  theme = defaultTheme,
  name = "Basic",
  price = "$9",
  period = "/mo",
  features = ["1 user", "5 projects"],
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "default",
}: PricingBasicProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>pricing basic</MjmlPreview>
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
        <PricingBasicSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          features={features}
          name={name}
          period={period}
          price={price}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TwoColumnsPricingTableWithGaps.PreviewProps = {
  ctaHref: "https://example.com/signup",
  ctaLabel: "Get Started",
  features: ["1 user", "5 projects", "Basic support"],
  name: "Basic",
  period: "/mo",
  price: "$9",
  theme: defaultTheme,
  variant: "default",
} satisfies PricingBasicProps;
