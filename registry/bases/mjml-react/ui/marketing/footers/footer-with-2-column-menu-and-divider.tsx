import { MjmlColumn, MjmlDivider, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FooterEmailShell,
  FooterLegal,
  FooterLogo,
  FooterSocials,
  FooterVerticalMenu,
} from "@/registry/bases/mjml-react/ui/marketing/footers/footer-shared";

export type FooterWith2ColumnMenuAndDividerVariant = "left-logo" | "right-logo";

export interface FooterWith2ColumnMenuAndDividerProps {
  theme?: EmailThemeTokens;
  variant?: FooterWith2ColumnMenuAndDividerVariant;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  headingColor?: string;
  legalColor?: string;
  unsubscribeHref?: string;
}

const quickLinks = [
  { href: "https://example.com/about", label: "About us" },
  { href: "https://example.com/shop", label: "Shop" },
  { href: "https://example.com/faq", label: "FAQs" },
  { href: "https://example.com/contact", label: "Contact us" },
];
const legalLinks = [
  { href: "https://example.com/privacy", label: "Privacy Policy" },
  { href: "https://example.com/terms", label: "Terms of Service" },
  { href: "https://example.com/returns", label: "Returns" },
];
const iconRoot = "https://emailcn.vercel.app/api/email-assets";
const socials = [
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
];

export const FooterWith2ColumnMenuAndDividerSection = ({
  variant = "left-logo",
  logoSrc = `${iconRoot}/maizzle-insignia.png`,
  logoAlt = "Maizzle",
  logoHref = "https://example.com",
  backgroundColor = "#fffffe",
  dividerColor = "#d1d5db",
  textColor = "#6b7280",
  headingColor = "#030712",
  legalColor = "#9ca3af",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FooterWith2ColumnMenuAndDividerProps, "theme">) => {
  const brand = (
    <MjmlColumn direction="ltr" width="34%">
      <FooterLogo
        align={variant === "right-logo" ? "right" : "left"}
        alt={logoAlt}
        href={logoHref}
        src={logoSrc}
        width="55px"
      />
    </MjmlColumn>
  );
  const menus = (
    <>
      <MjmlColumn direction="ltr" width="33%">
        <FooterVerticalMenu
          heading="Quick links"
          headingColor={headingColor}
          links={quickLinks}
          textColor={textColor}
        />
      </MjmlColumn>
      <MjmlColumn direction="ltr" width="33%">
        <FooterVerticalMenu
          heading="Legal"
          headingColor={headingColor}
          links={legalLinks}
          textColor={textColor}
        />
      </MjmlColumn>
    </>
  );

  return (
    <>
      <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 8px">
        {variant === "right-logo" ? menus : brand}
        {variant === "right-logo" ? brand : menus}
      </MjmlSection>
      <MjmlSection backgroundColor={backgroundColor} padding="0 24px 24px">
        <MjmlColumn>
          <MjmlDivider borderColor={dividerColor} padding="16px 0 24px" />
          <FooterSocials socials={socials} />
          <FooterLegal
            copyright="© 2026 emailcn. All rights reserved."
            mutedTextColor={legalColor}
            unsubscribeHref={unsubscribeHref}
          />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};

export const FooterWith2ColumnMenuAndDivider = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: FooterWith2ColumnMenuAndDividerProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <FooterWith2ColumnMenuAndDividerSection {...props} />
  </FooterEmailShell>
);

FooterWith2ColumnMenuAndDivider.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies FooterWith2ColumnMenuAndDividerProps;
