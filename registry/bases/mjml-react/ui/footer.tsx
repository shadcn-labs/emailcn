import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlDivider,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface FooterProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  address?: string;
  links?: { label: string; href: string }[];
  unsubscribeHref?: string;
}

const FooterSection = ({
  address,
  companyName,
  links,
  theme,
  unsubscribeHref,
}: {
  address?: string;
  companyName: string;
  links: { label: string; href: string }[];
  theme: EmailThemeTokens;
  unsubscribeHref: string;
}) => (
  <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
    <MjmlColumn>
      <MjmlDivider
        borderColor={theme.colorBorder}
        paddingBottom={theme.spacingBase ?? "16px"}
      />
      <MjmlText
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
        lineHeight={theme.lineHeightBase}
      >
        © {new Date().getFullYear()} {companyName}. All rights reserved.
      </MjmlText>
      {address ? (
        <MjmlText
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "12px"}
          paddingTop={theme.spacingBase ?? "16px"}
        >
          {address}
        </MjmlText>
      ) : null}
      <MjmlText
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
        paddingTop={theme.spacingBase ?? "16px"}
      >
        {links.map((link) => (
          <span key={`${link.href}-${link.label}`}>
            <a href={link.href} style={{ color: "inherit", marginRight: 24 }}>
              {link.label}
            </a>
          </span>
        ))}
      </MjmlText>
      <MjmlText paddingTop={theme.spacingLg ?? "24px"}>
        <a
          href={unsubscribeHref}
          style={{
            color: theme.colorTextMuted,
            fontSize: theme.fontSizeSm ?? "12px",
            textDecoration: "underline",
          }}
        >
          Unsubscribe
        </a>
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const Footer = ({
  theme = defaultTheme,
  companyName = "Acme",
  address = "123 Main St, San Francisco, CA",
  links = [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Terms" },
  ],
  unsubscribeHref = "#",
}: FooterProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>footer</MjmlPreview>
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
        <FooterSection
          address={address}
          companyName={companyName}
          links={links}
          theme={theme}
          unsubscribeHref={unsubscribeHref}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

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
