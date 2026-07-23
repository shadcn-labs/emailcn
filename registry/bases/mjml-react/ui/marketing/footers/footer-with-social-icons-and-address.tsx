import { MjmlColumn, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FooterCopy,
  FooterEmailShell,
  FooterLegal,
  FooterLogo,
  FooterSocials,
} from "@/registry/bases/mjml-react/ui/marketing/footers/footer-shared";

export type FooterWithSocialIconsAndAddressVariant =
  | "left-logo"
  | "right-logo"
  | "centered";

export interface FooterAddressSocial {
  href: string;
  iconSrc: string;
  label: string;
}

export interface FooterWithSocialIconsAndAddressProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  socials?: FooterAddressSocial[];
  address?: string;
  legalText?: string;
  centeredLegalText?: string;
  title?: string;
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: FooterWithSocialIconsAndAddressVariant;
}

const iconRoot = "https://emailcn.vercel.app/api/email-assets";
const defaults = {
  address: "© 2026 emailcn\nemailcn | 155 Bdv Saint Germain | 75505 Paris",
  backgroundColor: "#fffffe",
  centeredLegalText: "You’re receiving this because you subscribed to updates.",
  legalText: "We’re sending you this because you subscribed.",
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
  title: "Follow us",
  unsubscribeHref: "https://example.com/unsub",
};

type SectionProps = Omit<FooterWithSocialIconsAndAddressProps, "theme">;

export const FooterWithSocialIconsAndAddressSection = (props: SectionProps) => {
  const resolved = { ...defaults, ...props };
  const centered = resolved.variant === "centered";
  let logoAlign: "center" | "left" | "right" = "left";
  if (centered) {
    logoAlign = "center";
  } else if (resolved.variant === "right-logo") {
    logoAlign = "right";
  }
  const brand = (
    <MjmlColumn direction="ltr" width={centered ? "100%" : "25%"}>
      <FooterLogo
        align={logoAlign}
        alt={resolved.logoAlt}
        href={resolved.logoHref}
        src={resolved.logoSrc}
        width="55px"
      />
    </MjmlColumn>
  );
  const content = (
    <MjmlColumn direction="ltr" width={centered ? "100%" : "75%"}>
      <FooterCopy
        align={centered ? "center" : "left"}
        color={resolved.textColor}
        fontSize="16px"
        fontWeight="600"
      >
        {resolved.title}
      </FooterCopy>
      <FooterSocials
        align={centered ? "center" : "left"}
        socials={resolved.socials}
      />
      <FooterCopy
        align={centered ? "center" : "left"}
        color={resolved.textColor}
        padding="20px 0 0"
      >
        {resolved.address}
      </FooterCopy>
      <FooterLegal
        align={centered ? "center" : "left"}
        copyright={centered ? resolved.centeredLegalText : resolved.legalText}
        mutedTextColor={resolved.mutedTextColor}
        unsubscribeHref={resolved.unsubscribeHref}
      />
    </MjmlColumn>
  );

  return (
    <MjmlSection
      backgroundColor={resolved.backgroundColor}
      padding="44px 24px 24px"
    >
      {centered || resolved.variant !== "right-logo" ? brand : content}
      {centered || resolved.variant !== "right-logo" ? content : brand}
    </MjmlSection>
  );
};

export const FooterWithSocialIconsAndAddress = ({
  pageBackgroundColor = defaults.pageBackgroundColor,
  theme = defaultTheme,
  ...props
}: FooterWithSocialIconsAndAddressProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <FooterWithSocialIconsAndAddressSection {...props} />
  </FooterEmailShell>
);

FooterWithSocialIconsAndAddress.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies FooterWithSocialIconsAndAddressProps;
