import { Column, Link, Row, Section, Text } from "react-email";

import type { EmailTheme } from "../themes/default";
import { theme as defaultTheme } from "../themes/default";

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
  const style = {
    link: {
      color: theme.colorTextMuted,
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSizeSm,
      marginRight: theme.spacingBase,
      textDecoration: "none",
    } as const,
    section: {
      borderTop: `1px solid ${theme.colorBorder}`,
      padding: `${theme.spacingXl} 0 ${theme.spacingBase}`,
    },
    text: {
      color: theme.colorTextMuted,
      fontSize: theme.fontSizeSm,
      lineHeight: theme.lineHeightBase,
    },
    unsubscribe: {
      color: theme.colorTextMuted,
      fontSize: theme.fontSizeSm,
      textDecoration: "underline",
    },
  };

  return (
    <Section style={style.section}>
      <Text style={{ ...style.text, marginBottom: "8px" }}>
        © {new Date().getFullYear()} {companyName}. All rights reserved.
      </Text>
      {address && (
        <Text style={{ ...style.text, marginBottom: "8px" }}>{address}</Text>
      )}
      <Row>
        {links.map((link, index) => (
          <Column key={index}>
            <Link href={link.href} style={style.link}>
              {link.label}
            </Link>
          </Column>
        ))}
      </Row>
      <Text style={{ marginTop: theme.spacingBase }}>
        <Link href={unsubscribeHref} style={style.unsubscribe}>
          Unsubscribe
        </Link>
      </Text>
    </Section>
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
