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

import type { ResolvedEmailTheme } from "@/registry/lib/resolve-theme";
import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

import { getLayoutTokens } from "../lib/get-layout-tokens";

export interface LogoHeaderProps {
  theme?: EmailTheme;
  logoUrl?: string;
  logoAlt?: string;
  logoWidth?: number;
  links?: { label: string; href: string }[];
}

const LogoHeaderSection = ({
  links,
  logoAlt,
  logoUrl,
  logoWidth,
  t,
}: {
  links: { label: string; href: string }[];
  logoAlt: string;
  logoUrl?: string;
  logoWidth: number;
  t: ResolvedEmailTheme;
}) => (
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

export const LogoHeader = ({
  theme = defaultTheme,
  logoUrl,
  logoAlt = "Logo",
  logoWidth = 120,
  links = [],
}: LogoHeaderProps) => {
  const t = resolveEmailTheme(theme);
  const { baseFs, bg, fg, lh, sans, width } = getLayoutTokens(t);

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
          <LogoHeaderSection
            links={links}
            logoAlt={logoAlt}
            logoUrl={logoUrl}
            logoWidth={logoWidth}
            t={t}
          />
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
