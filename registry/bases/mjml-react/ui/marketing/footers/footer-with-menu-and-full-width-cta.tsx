import { MjmlColumn, MjmlDivider, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FooterCopy,
  FooterCta,
  FooterEmailShell,
  FooterLegal,
  FooterMenu,
  FooterSocials,
} from "@/registry/bases/mjml-react/ui/marketing/footers/footer-shared";

export interface FooterWithMenuAndFullWidthCtaProps {
  theme?: EmailThemeTokens;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  subduedTextColor?: string;
  mutedTextColor?: string;
  ctaHref?: string;
  ctaText?: string;
  unsubscribeHref?: string;
}

const links = [
  { href: "https://example.com/about", label: "About us" },
  { href: "https://example.com/shop", label: "Shop" },
  { href: "https://example.com/faq", label: "FAQs" },
  { href: "https://example.com/contact", label: "Contact us" },
];

const socials = [
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
];

export const FooterWithMenuAndFullWidthCtaSection = ({
  backgroundColor = "#fffffe",
  dividerColor = "#d1d5db",
  textColor = "#6b7280",
  subduedTextColor = "#9ca3af",
  mutedTextColor = "#d1d5db",
  ctaHref = "https://example.com/contact",
  ctaText = "Got questions? We’re here to help.",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FooterWithMenuAndFullWidthCtaProps, "theme">) => (
  <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 24px">
    <MjmlColumn>
      <FooterMenu links={links} textColor={textColor} />
      <MjmlDivider borderColor={dividerColor} padding="20px 0" />
      <FooterCopy color={textColor} fontSize="16px">
        {ctaText}
      </FooterCopy>
      <FooterCta
        backgroundColor={textColor}
        color={backgroundColor}
        href={ctaHref}
        label="Contact us"
      />
      <MjmlDivider borderColor={dividerColor} padding="20px 0" />
      <FooterSocials socials={socials} />
      <FooterLegal
        copyright="© 2026 emailcn. All rights reserved."
        mutedTextColor={mutedTextColor || subduedTextColor}
        unsubscribeHref={unsubscribeHref}
      />
    </MjmlColumn>
  </MjmlSection>
);

export const FooterWithMenuAndFullWidthCta = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: FooterWithMenuAndFullWidthCtaProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <FooterWithMenuAndFullWidthCtaSection {...props} />
  </FooterEmailShell>
);

FooterWithMenuAndFullWidthCta.PreviewProps = {
  theme: defaultTheme,
} satisfies FooterWithMenuAndFullWidthCtaProps;
