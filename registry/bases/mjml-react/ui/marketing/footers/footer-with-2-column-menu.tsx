import { MjmlColumn, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FooterEmailShell,
  FooterLegal,
  FooterLogo,
  FooterVerticalMenu,
} from "@/registry/bases/mjml-react/ui/marketing/footers/footer-shared";

export type FooterWith2ColumnMenuVariant = "left-logo" | "right-logo";

export interface FooterWith2ColumnMenuLink {
  href: string;
  label: string;
}

export interface FooterWith2ColumnMenuProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  quickLinks?: FooterWith2ColumnMenuLink[];
  connectLinks?: FooterWith2ColumnMenuLink[];
  copyright?: string;
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: FooterWith2ColumnMenuVariant;
}

const defaults = {
  backgroundColor: "#fffffe",
  connectLinks: [
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://github.com", label: "GitHub" },
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://youtube.com", label: "YouTube" },
    { href: "https://instagram.com", label: "Instagram" },
  ],
  copyright: "© 2026 emailcn. No longer want to receive emails?",
  headingColor: "#030712",
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  mutedTextColor: "#9ca3af",
  pageBackgroundColor: "#f1f5f9",
  quickLinks: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
};

type SectionProps = Omit<FooterWith2ColumnMenuProps, "theme">;

export const FooterWith2ColumnMenuSection = (props: SectionProps) => {
  const resolved = { ...defaults, ...props };
  const brand = (
    <MjmlColumn direction="ltr" width="40%">
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
      <MjmlColumn direction="ltr" width="30%">
        <FooterVerticalMenu
          heading="Quick links"
          headingColor={resolved.headingColor}
          links={resolved.quickLinks}
          textColor={resolved.textColor}
        />
      </MjmlColumn>
      <MjmlColumn direction="ltr" width="30%">
        <FooterVerticalMenu
          heading="Connect"
          headingColor={resolved.headingColor}
          links={resolved.connectLinks}
          textColor={resolved.textColor}
        />
      </MjmlColumn>
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

export const FooterWith2ColumnMenu = ({
  pageBackgroundColor = defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: FooterWith2ColumnMenuProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <FooterWith2ColumnMenuSection {...props} />
  </FooterEmailShell>
);

FooterWith2ColumnMenu.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies FooterWith2ColumnMenuProps;
