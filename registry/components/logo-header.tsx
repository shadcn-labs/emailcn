import { Column, Img, Link, Section, Text } from "react-email";
import type { EmailTheme } from "../themes/default";
import { theme as defaultTheme } from "../themes/default";

export interface LogoHeaderProps {
  theme?: EmailTheme;
  logoUrl?: string;
  logoAlt?: string;
  logoWidth?: number;
  links?: { label: string; href: string }[];
}

export const LogoHeader = ({
  theme = defaultTheme,
  logoUrl,
  logoAlt = "Logo",
  logoWidth = 120,
  links = [],
}: LogoHeaderProps) => {
  const style = {
    container: {
      padding: `${theme.spacingBase} 0`,
    },
    link: {
      color: theme.colorTextMuted,
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSizeSm,
      textDecoration: "none",
    },
    logo: {
      display: "block",
      height: "auto",
      maxWidth: logoWidth,
    } as const,
    nav: {
      display: "flex",
      gap: theme.spacingBase,
    },
  };

  return (
    <Section style={style.container}>
      <Column align="left">
        {logoUrl ? (
          <Img src={logoUrl} alt={logoAlt} width={logoWidth} style={style.logo} />
        ) : (
          <Text
            style={{
              ...style.link,
              color: theme.colorText,
              fontWeight: theme.fontWeightBold,
            }}
          >
            {logoAlt}
          </Text>
        )}
      </Column>
      {links.length > 0 && (
        <Column align="right" style={style.nav}>
          {links.map((link, index) => (
            <Link key={index} href={link.href} style={style.link}>
              {link.label}
            </Link>
          ))}
        </Column>
      )}
    </Section>
  );
};

LogoHeader.PreviewProps = {
  links: [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
  ],
  logoAlt: "Acme",
  logoUrl: "https://example.com/logo.png",
  logoWidth: 120,
  theme: defaultTheme,
} satisfies LogoHeaderProps;

export default LogoHeader;
