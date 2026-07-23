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

export type FooterWithCompanyLocationsVariant = "stacked" | "grid";

export interface CompanyLocation {
  address: string;
  name: string;
}

export interface FooterWithCompanyLocationsProps {
  theme?: EmailThemeTokens;
  variant?: FooterWithCompanyLocationsVariant;
  locations?: CompanyLocation[];
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  strongTextColor?: string;
  subduedTextColor?: string;
  mutedTextColor?: string;
  unsubscribeHref?: string;
}

const stackedLocations: CompanyLocation[] = [
  {
    address: "Gas Company Tower\n555 W 5th St, Los Angeles, CA 90013",
    name: "Downtown Los Angeles, CA",
  },
  {
    address: "One World Trade Center\n285 Fulton St, New York, NY 10007",
    name: "Downtown New York, NY",
  },
  {
    address:
      "Willis Tower (formerly Sears Tower)\n233 S Wacker Dr, Chicago, IL 60606",
    name: "Downtown Chicago, IL",
  },
];
const gridLocations: CompanyLocation[] = [
  ...stackedLocations,
  {
    address: "Salesforce Tower\n415 Mission St, San Francisco, CA 94105",
    name: "Downtown San Francisco, CA",
  },
];
const menu = [
  { href: "https://example.com/about", label: "About us" },
  { href: "https://example.com/shop", label: "Shop" },
  { href: "https://example.com/faq", label: "FAQs" },
  { href: "https://example.com/contact", label: "Contact us" },
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

export const FooterWithCompanyLocationsSection = ({
  variant = "stacked",
  locations,
  logoSrc = `${iconRoot}/maizzle-insignia.png`,
  logoAlt = "Maizzle",
  logoHref = "https://example.com",
  backgroundColor = "#fffffe",
  dividerColor = "#d1d5db",
  textColor = "#6b7280",
  strongTextColor = "#030712",
  subduedTextColor = "#9ca3af",
  mutedTextColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FooterWithCompanyLocationsProps, "theme">) => {
  const items =
    locations ?? (variant === "grid" ? gridLocations : stackedLocations);

  return (
    <>
      <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 12px">
        <MjmlColumn>
          <FooterLogo
            align="center"
            alt={logoAlt}
            href={logoHref}
            padding="0 0 20px"
            src={logoSrc}
            width="64px"
          />
          <FooterMenu align="center" links={menu} textColor={textColor} />
          <MjmlDivider borderColor={dividerColor} padding="20px 0" />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection backgroundColor={backgroundColor} padding="0 24px 20px">
        {items.map((location) => (
          <MjmlColumn
            key={location.name}
            padding="8px 12px"
            width={variant === "grid" ? "50%" : "100%"}
          >
            <FooterCopy color={strongTextColor} fontWeight="600">
              {location.name}
            </FooterCopy>
            <FooterCopy color={subduedTextColor} padding="6px 0 0">
              {location.address}
            </FooterCopy>
          </MjmlColumn>
        ))}
      </MjmlSection>
      <MjmlSection backgroundColor={backgroundColor} padding="0 24px 24px">
        <MjmlColumn>
          <FooterSocials align="center" socials={socials} />
          <FooterLegal
            align="center"
            copyright="© 2026 emailcn. All rights reserved."
            mutedTextColor={mutedTextColor}
            unsubscribeHref={unsubscribeHref}
          />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};

export const FooterWithCompanyLocations = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: FooterWithCompanyLocationsProps) => (
  <FooterEmailShell pageBackgroundColor={pageBackgroundColor} theme={theme}>
    <FooterWithCompanyLocationsSection {...props} />
  </FooterEmailShell>
);

FooterWithCompanyLocations.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked",
} satisfies FooterWithCompanyLocationsProps;
