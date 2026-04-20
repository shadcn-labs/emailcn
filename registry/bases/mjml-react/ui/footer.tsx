import {
  MjmlColumn,
  MjmlDivider,
  MjmlSection,
  MjmlText,
} from "@faire/mjml-react";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import type { EmailTheme } from "@/registry/themes/default";
import { theme as defaultTheme } from "@/registry/themes/default";

export interface FooterProps {
  theme?: EmailTheme;
  companyName?: string;
  address?: string;
  links?: { label: string; href: string }[];
  unsubscribeHref?: string;
}

export const Footer = ({
  theme = defaultTheme,
  companyName = "Acme",
  address = "123 Main St, San Francisco, CA",
  links = [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Terms" },
  ],
  unsubscribeHref = "#",
}: FooterProps) => {
  const t = resolveEmailTheme(theme);

  return (
    <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
      <MjmlDivider borderColor={t.colors.border} paddingBottom={t.spacing.md} />
      <MjmlColumn>
        <MjmlText
          color={t.colors["foreground-muted"]}
          fontFamily={t.fontFamily.sans}
          fontSize={t.fontSize.sm ?? "12px"}
          lineHeight={t.lineHeight.snug}
        >
          © {new Date().getFullYear()} {companyName}. All rights reserved.
        </MjmlText>
        {address ? (
          <MjmlText
            color={t.colors["foreground-muted"]}
            fontFamily={t.fontFamily.sans}
            fontSize={t.fontSize.sm ?? "12px"}
            paddingTop={t.spacing.sm}
          >
            {address}
          </MjmlText>
        ) : null}
        <MjmlText
          color={t.colors["foreground-muted"]}
          fontFamily={t.fontFamily.sans}
          fontSize={t.fontSize.sm ?? "12px"}
          paddingTop={t.spacing.sm}
        >
          {links.map((link) => (
            <span key={`${link.href}-${link.label}`}>
              <a href={link.href} style={{ color: "inherit", marginRight: 24 }}>
                {link.label}
              </a>
            </span>
          ))}
        </MjmlText>
        <MjmlText paddingTop={t.spacing.lg}>
          <a
            href={unsubscribeHref}
            style={{
              color: t.colors["foreground-muted"],
              fontSize: t.fontSize.sm ?? "12px",
              textDecoration: "underline",
            }}
          >
            Unsubscribe
          </a>
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
};

Footer.PreviewProps = {
  address: "123 Main Street, San Francisco, CA 94105",
  companyName: "Acme Inc.",
  links: [
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#terms", label: "Terms of Service" },
  ],
  theme: defaultTheme,
  unsubscribeHref: "#unsubscribe",
} satisfies FooterProps;

export default Footer;
