import { MjmlColumn, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FooterCopy,
  FooterEmailShell,
  FooterLegal,
  FooterLogo,
  FooterSocials,
  FooterVerticalMenu,
} from "@/registry/bases/mjml-react/ui/marketing/footers/footer-shared";

export type FooterWithTextMenuAndSocialsVariant = "left-logo" | "right-logo";

export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterSocialLink extends FooterLink {
  iconSrc: string;
}

export interface FooterWithTextMenuAndSocialsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  description?: string;
  /** @deprecated Use `copyright` instead. */
  text?: string;
  quickLinks?: FooterLink[];
  socials?: FooterSocialLink[];
  copyright?: string;
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: FooterWithTextMenuAndSocialsVariant;
}

const iconRoot = "https://emailcn.vercel.app/api/email-assets";
const defaults = {
  backgroundColor: "#fffffe",
  copyright: "© 2026 emailcn. No longer want to receive emails?",
  description:
    "Lorem ipsum dolor sit amet consectetur. Eget aenean sed sit sed in sapien. Vel auctor arcu nulla consectetur sed.",
  headingColor: "#030712",
  logoAlt: "Maizzle",
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

type SectionProps = Omit<FooterWithTextMenuAndSocialsProps, "theme">;

export const FooterWithTextMenuAndSocialsSection = (props: SectionProps) => {
  const resolved = { ...defaults, ...props };
  const brand = (
    <MjmlColumn direction="ltr" width="60%">
      <FooterLogo
        align={resolved.variant === "right-logo" ? "right" : "left"}
        alt={resolved.logoAlt}
        href="https://example.com"
        src={resolved.logoSrc}
        width="55px"
      />
      <FooterCopy
        align={resolved.variant === "right-logo" ? "right" : "left"}
        color={resolved.textColor}
        fontSize="16px"
        padding="24px 0 0"
      >
        {resolved.text ?? resolved.description}
      </FooterCopy>
    </MjmlColumn>
  );
  const menu = (
    <MjmlColumn direction="ltr" width="40%">
      <FooterVerticalMenu
        align={resolved.variant === "right-logo" ? "left" : "right"}
        heading="Quick links"
        headingColor={resolved.headingColor}
        links={resolved.quickLinks}
        textColor={resolved.textColor}
      />
    </MjmlColumn>
  );

  return (
    <>
      <MjmlSection
        backgroundColor={resolved.backgroundColor}
        padding="44px 24px 16px"
      >
        {resolved.variant === "right-logo" ? menu : brand}
        {resolved.variant === "right-logo" ? brand : menu}
      </MjmlSection>
      <MjmlSection
        backgroundColor={resolved.backgroundColor}
        padding="0 24px 24px"
      >
        <MjmlColumn>
          <FooterSocials socials={resolved.socials} />
          <FooterLegal
            copyright={resolved.copyright}
            mutedTextColor={resolved.mutedTextColor}
            unsubscribeHref={resolved.unsubscribeHref}
          />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};

export const FooterWithTextMenuAndSocials = ({
  pageBackgroundColor = defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: FooterWithTextMenuAndSocialsProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <FooterWithTextMenuAndSocialsSection {...props} />
  </FooterEmailShell>
);

FooterWithTextMenuAndSocials.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies FooterWithTextMenuAndSocialsProps;
