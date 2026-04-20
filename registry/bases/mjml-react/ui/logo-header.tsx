import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

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

  const container =
    typeof t.maxWidth.container === "string"
      ? Number.parseInt(String(t.maxWidth.container).replaceAll(/\D/g, ""), 10)
      : 600;
  const width = Number.isFinite(container) && container > 0 ? container : 600;

  const fg = t.colors.foreground ?? "#111827";
  const bg = t.colors.background ?? "#ffffff";
  const sans = t.fontFamily.sans ?? "sans-serif";
  const baseFs = t.fontSize.base ?? "14px";
  const lh = t.lineHeight.snug ?? "1.375";

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>logo-header</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll color={fg} fontFamily={sans} />
          <MjmlText fontSize={baseFs} lineHeight={lh} />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody backgroundColor={bg} width={width}>
        <MjmlWrapper padding="0">
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
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
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
