import { MjmlColumn, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FooterCopy,
  FooterCta,
  FooterEmailShell,
  FooterLegal,
  FooterLogo,
} from "@/registry/bases/mjml-react/ui/marketing/footers/footer-shared";

export type FooterWithContentAndCtaVariant =
  | "centered"
  | "left-aligned"
  | "right-aligned";

export interface FooterWithContentAndCtaProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  logoSrc?: string;
  logoAlt?: string;
  updatePreferencesHref?: string;
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  variant?: FooterWithContentAndCtaVariant;
}

const defaults = {
  backgroundColor: "#fffffe",
  buttonColor: "#4f46e5",
  buttonTextColor: "#fffffe",
  ctaHref: "https://example.com",
  ctaLabel: "Visit website",
  heading: "Start sending professionally\ndesigned emails today",
  headingColor: "#030712",
  logoAlt: "Maizzle",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  subtext:
    "Lorem ipsum dolor sit amet consectetur. Eget aenean sed sit sed in sapien. Vel auctor arcu nulla consectetur sed.",
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
  updatePreferencesHref: "https://example.com/update",
};

type SectionProps = Omit<FooterWithContentAndCtaProps, "theme">;

export const FooterWithContentAndCtaSection = (props: SectionProps) => {
  const resolved = { ...defaults, ...props };
  let align: "center" | "left" | "right" = "center";
  if (resolved.variant === "left-aligned") {
    align = "left";
  } else if (resolved.variant === "right-aligned") {
    align = "right";
  }

  return (
    <MjmlSection
      backgroundColor={resolved.backgroundColor}
      padding="44px 24px 24px"
    >
      <MjmlColumn>
        <FooterCopy
          align={align}
          color={resolved.headingColor}
          fontSize="20px"
          fontWeight="600"
          lineHeight="28px"
        >
          {resolved.heading}
        </FooterCopy>
        <FooterCopy
          align={align}
          color={resolved.textColor}
          fontSize="16px"
          lineHeight="24px"
          padding="24px 0 0"
        >
          {resolved.subtext}
        </FooterCopy>
        <FooterCta
          align={align}
          backgroundColor={resolved.buttonColor}
          color={resolved.buttonTextColor}
          href={resolved.ctaHref}
          label={resolved.ctaLabel}
          padding="28px 0"
        />
        <FooterLogo
          align={align}
          alt={resolved.logoAlt}
          href="https://example.com"
          src={resolved.logoSrc}
          width="48px"
        />
        <FooterLegal
          align={align}
          copyright="© 2026 emailcn. Update preferences at any time."
          mutedTextColor={resolved.mutedTextColor}
          unsubscribeHref={resolved.unsubscribeHref}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};

export const FooterWithContentAndCta = ({
  pageBackgroundColor = defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: FooterWithContentAndCtaProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <FooterWithContentAndCtaSection {...props} />
  </FooterEmailShell>
);

FooterWithContentAndCta.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies FooterWithContentAndCtaProps;
