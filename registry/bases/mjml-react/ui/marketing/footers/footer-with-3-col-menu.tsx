import { MjmlColumn, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FooterEmailShell,
  FooterLegal,
  FooterLogo,
  FooterSocials,
  FooterVerticalMenu,
} from "@/registry/bases/mjml-react/ui/marketing/footers/footer-shared";

export type FooterWith3ColMenuVariant = "left-logo" | "right-logo";

export interface FooterWith3ColMenuLink {
  href: string;
  label: string;
}

export interface FooterWith3ColMenuSocial extends FooterWith3ColMenuLink {
  iconSrc: string;
}

export interface FooterWith3ColMenuProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  quickLinks?: FooterWith3ColMenuLink[];
  connectLinks?: FooterWith3ColMenuLink[];
  legalLinks?: FooterWith3ColMenuLink[];
  socials?: FooterWith3ColMenuSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: FooterWith3ColMenuVariant;
}

const iconRoot = "https://emailcn.vercel.app/api/email-assets";
const defaults = {
  backgroundColor: "#fffffe",
  connectLinks: [
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://github.com", label: "GitHub" },
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://youtube.com", label: "YouTube" },
    { href: "https://instagram.com", label: "Instagram" },
  ],
  headingColor: "#030712",
  legalLinks: [
    { href: "https://example.com/privacy", label: "Privacy Policy" },
    { href: "https://example.com/terms", label: "Terms of Service" },
    { href: "https://example.com/returns", label: "Returns" },
  ],
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: `${iconRoot}/maizzle-insignia.png`,
  mutedTextColor: "#9ca3af",
  pageBackgroundColor: "#f1f5f9",
  quickLinks: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
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

type SectionProps = Omit<FooterWith3ColMenuProps, "theme">;

export const FooterWith3ColMenuSection = (props: SectionProps) => {
  const resolved = { ...defaults, ...props };
  const brand = (
    <MjmlColumn direction="ltr" width="25%">
      <FooterLogo
        align={resolved.variant === "right-logo" ? "right" : "left"}
        alt={resolved.logoAlt}
        href={resolved.logoHref}
        src={resolved.logoSrc}
        width="55px"
      />
    </MjmlColumn>
  );
  const menus = (
    <>
      {[
        ["Quick links", resolved.quickLinks],
        ["Connect", resolved.connectLinks],
        ["Legal", resolved.legalLinks],
      ].map(([heading, links]) => (
        <MjmlColumn direction="ltr" key={heading as string} width="25%">
          <FooterVerticalMenu
            heading={heading as string}
            headingColor={resolved.headingColor}
            links={links as FooterWith3ColMenuLink[]}
            textColor={resolved.textColor}
          />
        </MjmlColumn>
      ))}
    </>
  );

  return (
    <>
      <MjmlSection
        backgroundColor={resolved.backgroundColor}
        padding="44px 24px 16px"
      >
        {resolved.variant === "right-logo" ? menus : brand}
        {resolved.variant === "right-logo" ? brand : menus}
      </MjmlSection>
      <MjmlSection
        backgroundColor={resolved.backgroundColor}
        padding="0 24px 24px"
      >
        <MjmlColumn>
          <FooterSocials socials={resolved.socials} />
          <FooterLegal
            copyright="© 2026 emailcn. All rights reserved."
            mutedTextColor={resolved.mutedTextColor}
            unsubscribeHref={resolved.unsubscribeHref}
          />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};

export const FooterWith3ColMenu = ({
  pageBackgroundColor = defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: FooterWith3ColMenuProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <FooterWith3ColMenuSection {...props} />
  </FooterEmailShell>
);

FooterWith3ColMenu.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies FooterWith3ColMenuProps;
