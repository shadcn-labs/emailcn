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

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface LogoHeaderProps {
  theme?: EmailThemeTokens;
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
  theme,
}: {
  links: { label: string; href: string }[];
  logoAlt: string;
  logoUrl?: string;
  logoWidth: number;
  theme: EmailThemeTokens;
}) => (
  <MjmlSection padding={`${theme.spacingBase ?? "16px"} 0`}>
    <MjmlColumn width="50%">
      {logoUrl ? (
        <MjmlImage alt={logoAlt} src={logoUrl} width={logoWidth} />
      ) : (
        <MjmlText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
          fontWeight={theme.fontWeightBold ?? "700"}
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
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeSm ?? "12px",
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
}: LogoHeaderProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>logo-header</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <LogoHeaderSection
          links={links}
          logoAlt={logoAlt}
          logoUrl={logoUrl}
          logoWidth={logoWidth}
          theme={theme}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

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
