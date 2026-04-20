import {
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlText,
} from "@faire/mjml-react";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import type { EmailTheme } from "@/registry/themes/default";
import { theme as defaultTheme } from "@/registry/themes/default";

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
  const t = resolveEmailTheme(theme);

  return (
    <MjmlSection padding={`${t.spacing.md ?? "16px"} 0`}>
      <MjmlColumn width="50%">
        {logoUrl ? (
          <MjmlImage alt={logoAlt} src={logoUrl} width={logoWidth} />
        ) : (
          <MjmlText
            color={t.colors.foreground}
            fontFamily={t.fontFamily.sans}
            fontSize={t.fontSize.base ?? "14px"}
            fontWeight={t.fontWeight.bold ?? "700"}
          >
            {logoAlt}
          </MjmlText>
        )}
      </MjmlColumn>
      <MjmlColumn width="50%">
        <MjmlText align="right">
          {links.map((link, index) => (
            <span key={`${link.href}-${link.label}`}>
              <a
                href={link.href}
                style={{
                  color: t.colors["foreground-muted"],
                  fontFamily: t.fontFamily.sans,
                  fontSize: t.fontSize.sm ?? "12px",
                  marginLeft: index === 0 ? 0 : 16,
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            </span>
          ))}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
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
