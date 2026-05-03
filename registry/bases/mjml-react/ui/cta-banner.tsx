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

export interface CTABannerProps {
  theme?: EmailTheme;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "filled" | "outline";
}

const ctaBannerStyles = (isFilled: boolean, t: ResolvedEmailTheme) => {
  const primaryFg = t.colors["primary-fg"] ?? "#ffffff";
  const border = t.colors.border ?? "#e5e7eb";
  return {
    boxBg: isFilled ? t.colors.primary : "transparent",
    boxBorder: isFilled ? "none" : `1px solid ${border}`,
    btnBg: isFilled ? primaryFg : t.colors.primary,
    btnFg: isFilled ? t.colors.primary : primaryFg,
    subColor: isFilled ? primaryFg : t.colors["foreground-muted"],
    titleColor: isFilled ? primaryFg : t.colors.foreground,
  };
};

const CTABannerSection = ({
  ctaHref,
  ctaLabel,
  heading,
  s,
  subtext,
  t,
}: {
  ctaHref: string;
  ctaLabel: string;
  heading: string;
  s: ReturnType<typeof ctaBannerStyles>;
  subtext: string;
  t: ResolvedEmailTheme;
}) => (
  <MjmlSection
    backgroundColor={s.boxBg}
    border={s.boxBorder}
    borderRadius={t.borderRadius.md}
    padding={t.spacing.xl ?? "24px"}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={s.titleColor}
        fontFamily={t.fontFamily.sans}
        fontSize={t.fontSize.xl ?? "20px"}
        fontWeight={t.fontWeight.medium ?? "500"}
        paddingBottom={t.spacing.sm}
      >
        {heading}
      </MjmlText>
      <MjmlText
        align="center"
        color={s.subColor}
        fontFamily={t.fontFamily.sans}
        fontSize={t.fontSize.base ?? "14px"}
        paddingBottom={t.spacing.lg}
      >
        {subtext}
      </MjmlText>
      {ctaLabel && ctaHref ? (
        <MjmlButton
          align="center"
          backgroundColor={s.btnBg}
          borderRadius={t.borderRadius.md}
          color={s.btnFg}
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

export const CTABanner = ({
  theme = defaultTheme,
  heading = "Get Started",
  subtext = "Join thousands of happy users.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "filled",
}: CTABannerProps) => {
  const t = resolveEmailTheme(theme);
  const { baseFs, bg, fg, lh, sans, width } = getLayoutTokens(t);
  const isFilled = variant === "filled";
  const s = ctaBannerStyles(isFilled, t);

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>cta-banner</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll color={fg} fontFamily={sans} />
          <MjmlText fontSize={baseFs} lineHeight={lh} />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody backgroundColor={bg} width={width}>
        <MjmlWrapper padding="0">
          <CTABannerSection
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            heading={heading}
            s={s}
            subtext={subtext}
            t={t}
          />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
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
