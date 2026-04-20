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

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

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

  const container =
    typeof t.maxWidth.container === "string"
      ? Number.parseInt(String(t.maxWidth.container).replaceAll(/\D/g, ""), 10)
      : 600;
  const width = Number.isFinite(container) && container > 0 ? container : 600;

  const fg = t.colors.foreground ?? "#111827";
  const bg = t.colors.background ?? "#ffffff";
  const sans = t.fontFamily.sans ?? "sans-serif";
  const baseFs = t.fontSize.base ?? "14px";
  const lh = t.lineHeight.snug ?? "1.375";
  const pct = `${100 / Math.min(plans.length, 3)}%`;

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
          <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
            {plans.slice(0, 3).map((plan) => (
              <MjmlColumn key={plan.name} padding={t.spacing.sm} width={pct}>
                <MjmlSection
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
                  padding={t.spacing.lg ?? "24px"}
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
                </MjmlSection>
              </MjmlColumn>
            ))}
          </MjmlSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

PricingTable.PreviewProps = {
  theme: defaultTheme,
} satisfies PricingTableProps;
