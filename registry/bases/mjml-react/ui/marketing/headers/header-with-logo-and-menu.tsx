import {
  MjmlColumn,
  MjmlNavbar,
  MjmlNavbarLink,
  MjmlSection,
  MjmlSpacer,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  HeaderEmailShell,
  HeaderLogo,
} from "@/registry/bases/mjml-react/ui/marketing/headers/header-shared";

export type HeaderWithLogoAndMenuVariant =
  | "menu-right"
  | "menu-left"
  | "menu-around"
  | "stacked-left"
  | "stacked-center"
  | "stacked-right";

export interface HeaderMenuLink {
  href: string;
  label: string;
}

export interface HeaderWithLogoAndMenuProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  links?: HeaderMenuLink[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  variant?: HeaderWithLogoAndMenuVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const defaultLinks: HeaderMenuLink[] = [
  { href: "https://example.com", label: "Home" },
  { href: "https://example.com/about", label: "About us" },
  { href: "https://example.com/shop", label: "Shop" },
  { href: "https://example.com/faq", label: "FAQs" },
  { href: "https://example.com/returns", label: "Returns" },
  { href: "https://example.com/contact", label: "Contact us" },
];

const Menu = ({
  align,
  links,
  textColor,
}: {
  align: "center" | "left" | "right";
  links: HeaderMenuLink[];
  textColor: string;
}) => (
  <MjmlNavbar align={align} padding="0">
    {links.map((link) => (
      <MjmlNavbarLink
        color={textColor}
        fontFamily={fontFamily}
        fontSize="14px"
        href={link.href}
        key={`${link.label}-${link.href}`}
        padding="8px 10px"
      >
        {link.label}
      </MjmlNavbarLink>
    ))}
  </MjmlNavbar>
);

export const HeaderWithLogoAndMenuSection = ({
  backgroundColor = "#fffffe",
  links = defaultLinks,
  logoAlt = "Maizzle",
  logoHref = "https://example.com",
  logoSrc = "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  textColor = "#6b7280",
  variant = "menu-right",
}: Omit<HeaderWithLogoAndMenuProps, "theme">) => {
  if (variant.startsWith("stacked-")) {
    const align = variant.replace("stacked-", "") as
      | "center"
      | "left"
      | "right";
    return (
      <MjmlSection backgroundColor={backgroundColor} padding="24px">
        <MjmlColumn padding="0">
          <HeaderLogo
            align={align}
            alt={logoAlt}
            href={logoHref}
            src={logoSrc}
          />
          <MjmlSpacer height="20px" />
          <Menu align={align} links={links} textColor={textColor} />
        </MjmlColumn>
      </MjmlSection>
    );
  }

  if (variant === "menu-around") {
    const midpoint = Math.ceil(links.length / 2);
    return (
      <MjmlSection backgroundColor={backgroundColor} padding="24px">
        <MjmlColumn padding="0" verticalAlign="middle" width="42%">
          <Menu
            align="right"
            links={links.slice(0, midpoint)}
            textColor={textColor}
          />
        </MjmlColumn>
        <MjmlColumn padding="0" verticalAlign="middle" width="16%">
          <HeaderLogo
            align="center"
            alt={logoAlt}
            href={logoHref}
            src={logoSrc}
          />
        </MjmlColumn>
        <MjmlColumn padding="0" verticalAlign="middle" width="42%">
          <Menu
            align="left"
            links={links.slice(midpoint)}
            textColor={textColor}
          />
        </MjmlColumn>
      </MjmlSection>
    );
  }

  const menuLeft = variant === "menu-left";
  const logo = (
    <MjmlColumn padding="0" verticalAlign="middle" width="22%">
      <HeaderLogo
        align={menuLeft ? "right" : "left"}
        alt={logoAlt}
        href={logoHref}
        src={logoSrc}
      />
    </MjmlColumn>
  );
  const menu = (
    <MjmlColumn padding="0" verticalAlign="middle" width="78%">
      <Menu
        align={menuLeft ? "left" : "right"}
        links={links}
        textColor={textColor}
      />
    </MjmlColumn>
  );

  return (
    <MjmlSection backgroundColor={backgroundColor} padding="24px">
      {menuLeft ? menu : logo}
      {menuLeft ? logo : menu}
    </MjmlSection>
  );
};

export const HeaderWithLogoAndMenu = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeaderWithLogoAndMenuProps) => (
  <HeaderEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Navigation"
    theme={theme}
  >
    <HeaderWithLogoAndMenuSection {...props} />
  </HeaderEmailShell>
);

HeaderWithLogoAndMenu.PreviewProps = {
  theme: defaultTheme,
  variant: "menu-right",
} satisfies HeaderWithLogoAndMenuProps;
