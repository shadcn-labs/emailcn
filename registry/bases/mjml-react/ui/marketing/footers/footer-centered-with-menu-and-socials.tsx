import { MjmlColumn, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FooterEmailShell,
  FooterLegal,
  FooterLogo,
  FooterMenu,
  FooterSocials,
} from "@/registry/bases/mjml-react/ui/marketing/footers/footer-shared";

export interface CenteredFooterLink {
  href: string;
  label: string;
}

export interface CenteredFooterSocial extends CenteredFooterLink {
  iconSrc: string;
}

export interface FooterCenteredWithMenuAndSocialsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  links?: CenteredFooterLink[];
  socials?: CenteredFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  mutedTextColor?: string;
}

const defaults = {
  backgroundColor: "#fffffe",
  links: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  socials: [
    {
      href: "https://facebook.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-facebook.png",
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-github.png",
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-linkedin.png",
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-youtube.png",
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-x.png",
      label: "X",
    },
  ],
  textColor: "#9ca3af",
  unsubscribeHref: "https://example.com/unsub",
};

type SectionProps = Omit<FooterCenteredWithMenuAndSocialsProps, "theme">;

export const FooterCenteredWithMenuAndSocialsSection = (
  props: SectionProps
) => {
  const resolved = { ...defaults, ...props };

  return (
    <MjmlSection
      backgroundColor={resolved.backgroundColor}
      padding="44px 24px 24px"
    >
      <MjmlColumn>
        <FooterLogo
          align="center"
          alt={resolved.logoAlt}
          href={resolved.logoHref}
          padding="0 0 40px"
          src={resolved.logoSrc}
          width="55px"
        />
        <FooterMenu
          align="center"
          links={resolved.links}
          textColor={resolved.textColor}
        />
        <FooterSocials align="center" socials={resolved.socials} />
        <FooterLegal
          align="center"
          copyright="© 2026 emailcn. All rights reserved."
          mutedTextColor={resolved.mutedTextColor}
          unsubscribeHref={resolved.unsubscribeHref}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};

export const FooterCenteredWithMenuAndSocials = ({
  pageBackgroundColor = defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: FooterCenteredWithMenuAndSocialsProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <FooterCenteredWithMenuAndSocialsSection {...props} />
  </FooterEmailShell>
);

FooterCenteredWithMenuAndSocials.PreviewProps = {
  theme: defaultTheme,
} satisfies FooterCenteredWithMenuAndSocialsProps;
