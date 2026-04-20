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

export interface HeroProps {
  theme?: EmailTheme;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "center";
}

const HeroPrimaryCta = ({
  align,
  ctaHref,
  ctaLabel,
  t,
}: {
  align: "center" | "left";
  ctaHref: string;
  ctaLabel: string;
  t: ResolvedEmailTheme;
}) => (
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
);

const HeroMainSection = ({
  align,
  ctaHref,
  ctaLabel,
  heading,
  py,
  subheading,
  t,
}: {
  align: "center" | "left";
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  py: string;
  subheading: string;
  t: ResolvedEmailTheme;
}) => (
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
        <HeroPrimaryCta
          align={align}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          t={t}
        />
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

export const Hero = ({
  theme = defaultTheme,
  heading = "Welcome",
  subheading = "Get started with your account",
  ctaLabel = "Get Started",
  ctaHref = "#",
  align = "center",
}: HeroProps) => {
  const t = resolveEmailTheme(theme);
  const { baseFs, bg, fg, lh, sans, width } = getLayoutTokens(t);
  const py = t.spacing["2xl"] ?? "48px";

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>hero</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll color={fg} fontFamily={sans} />
          <MjmlText fontSize={baseFs} lineHeight={lh} />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody backgroundColor={bg} width={width}>
        <MjmlWrapper padding="0">
          <HeroMainSection
            align={align}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            heading={heading}
            py={py}
            subheading={subheading}
            t={t}
          />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
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
