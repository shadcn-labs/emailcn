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

import type { ResolvedEmailTheme } from "@/registry/lib/resolve-theme";
import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

import { getLayoutTokens } from "../lib/get-layout-tokens";

export interface PricingTableProps {
  theme?: EmailTheme;
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
  t,
}: {
  plans: NonNullable<PricingTableProps["plans"]>;
  t: ResolvedEmailTheme;
}) => {
  const pct = `${100 / Math.min(plans.length, 3)}%`;

  return (
    <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
      {plans.slice(0, 3).map((plan) => (
        <MjmlColumn
          key={plan.name}
          backgroundColor={
            plan.highlighted
              ? t.colors["background-muted"]
              : t.colors.background
          }
          border={
            plan.highlighted
              ? `2px solid ${t.colors.primary}`
              : `1px solid ${t.colors.border}`
          }
          borderRadius={t.borderRadius.md}
          padding={`${t.spacing.lg ?? "24px"} ${t.spacing.sm ?? "12px"}`}
          verticalAlign="top"
          width={pct}
        >
          <MjmlText
            color={t.colors.foreground}
            fontFamily={t.fontFamily.sans}
            fontSize={t.fontSize.lg ?? "16px"}
            fontWeight={t.fontWeight.medium ?? "500"}
            paddingBottom={t.spacing.sm}
          >
            {plan.name}
          </MjmlText>
          <MjmlText paddingBottom={t.spacing.md}>
            <span
              style={{
                fontSize: t.fontSize.heading ?? "28px",
                fontWeight: 700,
              }}
            >
              {plan.price}
            </span>
            <span
              style={{
                color: t.colors["foreground-muted"],
                fontSize: 14,
              }}
            >
              {plan.period}
            </span>
          </MjmlText>
          {plan.features.map((feature) => (
            <MjmlText
              key={`${plan.name}-${feature}`}
              color={t.colors["foreground-muted"]}
              fontFamily={t.fontFamily.sans}
              fontSize={t.fontSize.base ?? "14px"}
              paddingBottom={t.spacing.sm}
            >
              • {feature}
            </MjmlText>
          ))}
          <MjmlButton
            align="center"
            backgroundColor={t.colors.primary}
            borderRadius={t.borderRadius.md}
            color={t.colors["primary-fg"] ?? "#ffffff"}
            fontFamily={t.fontFamily.sans}
            fontSize={t.fontSize.sm ?? "14px"}
            fontWeight={t.fontWeight.medium ?? "500"}
            href={plan.ctaHref}
            innerPadding={`${t.spacing.sm ?? "12px"} ${t.spacing.lg ?? "24px"}`}
            paddingTop={t.spacing.md}
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
}: PricingTableProps) => {
  const t = resolveEmailTheme(theme);
  const { baseFs, bg, fg, lh, sans, width } = getLayoutTokens(t);

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>pricing-table</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll color={fg} fontFamily={sans} />
          <MjmlText fontSize={baseFs} lineHeight={lh} />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody backgroundColor={bg} width={width}>
        <MjmlWrapper padding="0">
          <PricingTableSection plans={plans} t={t} />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

PricingTable.PreviewProps = {
  theme: defaultTheme,
} satisfies PricingTableProps;
