import {
  MjmlButton,
  MjmlColumn,
  MjmlSection,
  MjmlText,
} from "@faire/mjml-react";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import type { EmailTheme } from "@/registry/themes/default";
import { theme as defaultTheme } from "@/registry/themes/default";

export interface CTABannerProps {
  theme?: EmailTheme;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "filled" | "outline";
}

export const CTABanner = ({
  theme = defaultTheme,
  heading = "Get Started",
  subtext = "Join thousands of happy users.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "filled",
}: CTABannerProps) => {
  const t = resolveEmailTheme(theme);
  const isFilled = variant === "filled";
  const boxBg = isFilled ? t.colors.primary : "transparent";
  const boxBorder = isFilled
    ? "none"
    : `1px solid ${t.colors.border ?? "#e5e7eb"}`;
  const titleColor = isFilled
    ? (t.colors["primary-fg"] ?? "#ffffff")
    : t.colors.foreground;
  const subColor = isFilled
    ? (t.colors["primary-fg"] ?? "#ffffff")
    : t.colors["foreground-muted"];
  const btnBg = isFilled
    ? (t.colors["primary-fg"] ?? "#ffffff")
    : t.colors.primary;
  const btnFg = isFilled
    ? t.colors.primary
    : (t.colors["primary-fg"] ?? "#ffffff");

  return (
    <MjmlSection
      backgroundColor={boxBg}
      border={boxBorder}
      borderRadius={t.borderRadius.md}
      padding={t.spacing.xl ?? "24px"}
    >
      <MjmlColumn>
        <MjmlText
          align="center"
          color={titleColor}
          fontFamily={t.fontFamily.sans}
          fontSize={t.fontSize.xl ?? "20px"}
          fontWeight={t.fontWeight.medium ?? "500"}
          paddingBottom={t.spacing.sm}
        >
          {heading}
        </MjmlText>
        <MjmlText
          align="center"
          color={subColor}
          fontFamily={t.fontFamily.sans}
          fontSize={t.fontSize.base ?? "14px"}
          paddingBottom={t.spacing.lg}
        >
          {subtext}
        </MjmlText>
        {ctaLabel && ctaHref ? (
          <MjmlButton
            align="center"
            backgroundColor={btnBg}
            borderRadius={t.borderRadius.md}
            color={btnFg}
            fontFamily={t.fontFamily.sans}
            fontSize={t.fontSize.sm ?? "14px"}
            fontWeight={t.fontWeight.medium ?? "500"}
            href={ctaHref}
            innerPadding={`${t.spacing.sm ?? "12px"} ${t.spacing.lg ?? "24px"}`}
          >
            {ctaLabel}
          </MjmlButton>
        ) : null}
      </MjmlColumn>
    </MjmlSection>
  );
};

CTABanner.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Start Building Free",
  heading: "Ready to get started?",
  subtext: "Join 10,000+ developers building with our tools.",
  theme: defaultTheme,
  variant: "filled",
} satisfies CTABannerProps;

export default CTABanner;
