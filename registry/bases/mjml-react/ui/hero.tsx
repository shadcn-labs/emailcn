import {
  MjmlButton,
  MjmlColumn,
  MjmlSection,
  MjmlText,
} from "@faire/mjml-react";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import type { EmailTheme } from "@/registry/themes/default";
import { theme as defaultTheme } from "@/registry/themes/default";

export interface HeroProps {
  theme?: EmailTheme;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "center";
}

export const Hero = ({
  theme = defaultTheme,
  heading = "Welcome",
  subheading = "Get started with your account",
  ctaLabel = "Get Started",
  ctaHref = "#",
  align = "center",
}: HeroProps) => {
  const t = resolveEmailTheme(theme);
  const py = t.spacing["2xl"] ?? "48px";

  return (
    <MjmlSection backgroundColor={t.colors.background} padding={`${py} 0`}>
      <MjmlColumn>
        <MjmlText
          align={align}
          color={t.colors.foreground}
          fontFamily={t.fontFamily.sans}
          fontSize={t.fontSize.heading ?? "28px"}
          fontWeight={t.fontWeight.bold ?? "700"}
          paddingBottom={t.spacing.md ?? "16px"}
        >
          {heading}
        </MjmlText>
        <MjmlText
          align={align}
          color={t.colors["foreground-muted"]}
          fontFamily={t.fontFamily.sans}
          fontSize={t.fontSize.lg ?? "16px"}
          lineHeight={t.lineHeight.snug}
          paddingBottom={t.spacing.xl ?? "24px"}
        >
          {subheading}
        </MjmlText>
        {ctaLabel && ctaHref ? (
          <MjmlButton
            align={align}
            backgroundColor={t.colors.primary}
            borderRadius={t.borderRadius.md ?? "6px"}
            color={t.colors["primary-fg"] ?? "#ffffff"}
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

Hero.PreviewProps = {
  align: "center",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Welcome to Acme",
  subheading: "Build faster with the tools you love.",
  theme: defaultTheme,
} satisfies HeroProps;

export default Hero;
