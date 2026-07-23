import { MjmlColumn, MjmlDivider, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FooterCopy,
  FooterEmailShell,
  FooterLegal,
  FooterMenu,
  FooterSocials,
} from "@/registry/bases/mjml-react/ui/marketing/footers/footer-shared";

export interface LegalFooterLink {
  href: string;
  label: string;
}

export interface LegalFooterSocial extends LegalFooterLink {
  iconSrc: string;
}

export interface FooterWithLegalTextProps {
  theme?: EmailThemeTokens;
  legalText?: string;
  links?: LegalFooterLink[];
  socials?: LegalFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  copyrightColor?: string;
  mutedTextColor?: string;
}

const iconRoot = "https://emailcn.vercel.app/api/email-assets";
const defaults = {
  backgroundColor: "#fffffe",
  copyrightColor: "#9ca3af",
  dividerColor: "#d1d5db",
  legalText:
    "The information provided in this email is for general informational purposes only. It is not intended as professional advice and should not be considered as a substitute for consulting with qualified professionals. The author/publisher makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the information contained herein. Any reliance you place on such information is strictly at your own risk.\n\nIn no event will the author/publisher be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this information.\n\nThrough this email, you are able to link to other websites that are not under the control of the author/publisher. The author/publisher has no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.",
  links: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
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

type SectionProps = Omit<FooterWithLegalTextProps, "theme">;

export const FooterWithLegalTextSection = (props: SectionProps) => {
  const resolved = { ...defaults, ...props };

  return (
    <MjmlSection
      backgroundColor={resolved.backgroundColor}
      padding="44px 24px 24px"
    >
      <MjmlColumn>
        <MjmlDivider borderColor={resolved.dividerColor} padding="0 0 28px" />
        <FooterMenu links={resolved.links} textColor={resolved.textColor} />
        <FooterSocials socials={resolved.socials} />
        <MjmlDivider borderColor={resolved.dividerColor} padding="24px 0" />
        {resolved.legalText.split("\n\n").map((paragraph) => (
          <FooterCopy
            color={resolved.textColor}
            fontSize="12px"
            key={paragraph}
            lineHeight="18px"
            padding="0 0 14px"
          >
            {paragraph}
          </FooterCopy>
        ))}
        <FooterLegal
          copyright="© 2026 emailcn. All rights reserved."
          mutedTextColor={resolved.copyrightColor || resolved.mutedTextColor}
          unsubscribeHref={resolved.unsubscribeHref}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};

export const FooterWithLegalText = ({
  pageBackgroundColor = defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: FooterWithLegalTextProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <FooterWithLegalTextSection {...props} />
  </FooterEmailShell>
);

FooterWithLegalText.PreviewProps = {
  theme: defaultTheme,
} satisfies FooterWithLegalTextProps;
