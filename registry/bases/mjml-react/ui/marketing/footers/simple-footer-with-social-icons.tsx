import { MjmlColumn, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FooterEmailShell,
  FooterLegal,
  FooterLogo,
  FooterSocials,
} from "@/registry/bases/mjml-react/ui/marketing/footers/footer-shared";

export type SimpleFooterWithSocialIconsVariant =
  | "left-aligned"
  | "centered"
  | "right-aligned";

export interface SimpleFooterSocial {
  href: string;
  iconSrc: string;
  label: string;
}

export interface SimpleFooterWithSocialIconsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  socials?: SimpleFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  mutedTextColor?: string;
  variant?: SimpleFooterWithSocialIconsVariant;
}

const defaults = {
  backgroundColor: "#fffffe",
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
  unsubscribeHref: "https://example.com/unsub",
};

type SectionProps = Omit<SimpleFooterWithSocialIconsProps, "theme">;

export const SimpleFooterWithSocialIconsSection = (props: SectionProps) => {
  const resolved = { ...defaults, ...props };
  let align: "center" | "left" | "right" = "left";
  if (resolved.variant === "centered") {
    align = "center";
  } else if (resolved.variant === "right-aligned") {
    align = "right";
  }

  return (
    <MjmlSection
      backgroundColor={resolved.backgroundColor}
      padding="44px 24px 24px"
    >
      <MjmlColumn>
        <FooterLogo
          align={align}
          alt={resolved.logoAlt}
          href={resolved.logoHref}
          src={resolved.logoSrc}
          width="64px"
        />
        <FooterSocials align={align} socials={resolved.socials} />
        <FooterLegal
          align={align}
          copyright="© 2026 emailcn. All rights reserved."
          mutedTextColor={resolved.mutedTextColor}
          unsubscribeHref={resolved.unsubscribeHref}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};

export const SimpleFooterWithSocialIcons = ({
  pageBackgroundColor = defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: SimpleFooterWithSocialIconsProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <SimpleFooterWithSocialIconsSection {...props} />
  </FooterEmailShell>
);

SimpleFooterWithSocialIcons.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies SimpleFooterWithSocialIconsProps;
