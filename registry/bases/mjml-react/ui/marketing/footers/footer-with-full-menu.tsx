import { MjmlColumn, MjmlDivider, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FooterCopy,
  FooterEmailShell,
  FooterLegal,
  FooterLogo,
  FooterMenu,
  FooterSocials,
} from "@/registry/bases/mjml-react/ui/marketing/footers/footer-shared";

export type FooterWithFullMenuVariant = "oversized-logo" | "bordered";

export interface FullMenuFooterLink {
  href: string;
  label: string;
}

export interface FullMenuFooterSocial extends FullMenuFooterLink {
  iconSrc: string;
}

export interface FooterWithFullMenuProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  assistanceText?: string;
  links?: FullMenuFooterLink[];
  socials?: FullMenuFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: FooterWithFullMenuVariant;
}

const iconRoot = "https://emailcn.vercel.app/api/email-assets";
const defaults = {
  assistanceText:
    "If you have any questions or need assistance, please reply to this email.",
  backgroundColor: "#fffffe",
  dividerColor: "#d1d5db",
  links: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/blog", label: "Blog" },
    { href: "https://example.com/support", label: "Support" },
    { href: "https://example.com/privacy", label: "Privacy Policy" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: `${iconRoot}/maizzle-insignia.png`,
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  socials: [
    {
      href: "https://facebook.com",
      iconSrc: `${iconRoot}/icon-facebook.png`,
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: `${iconRoot}/icon-github.png`,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc: `${iconRoot}/icon-linkedin.png`,
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc: `${iconRoot}/icon-youtube.png`,
      label: "YouTube",
    },
    { href: "https://x.com", iconSrc: `${iconRoot}/icon-x.png`, label: "X" },
  ],
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
};

type SectionProps = Omit<FooterWithFullMenuProps, "theme">;

export const FooterWithFullMenuSection = (props: SectionProps) => {
  const resolved = {
    ...defaults,
    ...props,
    variant: props.variant ?? "oversized-logo",
  };

  return (
    <MjmlSection
      backgroundColor={resolved.backgroundColor}
      border={
        resolved.variant === "bordered"
          ? `1px solid ${resolved.dividerColor}`
          : "none"
      }
      padding="44px 24px 24px"
    >
      <MjmlColumn>
        <FooterLogo
          align="center"
          alt={resolved.logoAlt}
          href={resolved.logoHref}
          padding="0 0 28px"
          src={resolved.logoSrc}
          width={resolved.variant === "oversized-logo" ? "96px" : "55px"}
        />
        <FooterMenu
          align="center"
          links={resolved.links}
          textColor={resolved.textColor}
        />
        <MjmlDivider borderColor={resolved.dividerColor} padding="24px 0" />
        <FooterCopy align="center" color={resolved.textColor}>
          {resolved.assistanceText}
        </FooterCopy>
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

export const FooterWithFullMenu = ({
  pageBackgroundColor = defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: FooterWithFullMenuProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <FooterWithFullMenuSection {...props} />
  </FooterEmailShell>
);

FooterWithFullMenu.PreviewProps = {
  theme: defaultTheme,
  variant: "oversized-logo",
} satisfies FooterWithFullMenuProps;
