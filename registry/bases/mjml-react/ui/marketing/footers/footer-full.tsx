/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type FooterFullVariant = "default" | "slanted-left" | "slanted-right";

export interface FooterFullProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  address?: string;
  links?: { label: string; href: string }[];
  unsubscribeHref?: string;
  variant?: FooterFullVariant;
}

const FooterFullSection = ({
  address,
  companyName,
  links,
  theme,
  unsubscribeHref,
  variant,
}: {
  address: string;
  companyName: string;
  links: FooterFullProps["links"];
  theme: EmailThemeTokens;
  unsubscribeHref: string;
  variant: FooterFullVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0 ${theme.spacingBase ?? "24px"} 0`}
  >
    <MjmlColumn>
      {links && links.length > 0 ? (
        <MjmlText
          align="center"
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "12px"}
          paddingBottom={theme.spacingBase ?? "16px"}
        >
          {links.map((link, i) => (
            <span key={link.label}>
              <a
                href={link.href}
                style={{
                  color: theme.colorTextMuted,
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
              {i < links.length - 1 ? (
                <span style={{ color: theme.colorTextMuted, margin: "0 8px" }}>
                  |
                </span>
              ) : null}
            </span>
          ))}
        </MjmlText>
      ) : null}
      {address ? (
        <MjmlText
          align="center"
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "12px"}
          paddingBottom={theme.spacingBase ?? "8px"}
        >
          {address}
        </MjmlText>
      ) : null}
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
      </MjmlText>
      {unsubscribeHref ? (
        <MjmlText
          align="center"
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "12px"}
        >
          <a href={unsubscribeHref} style={{ color: theme.colorTextMuted }}>
            Unsubscribe
          </a>
        </MjmlText>
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

export const FooterFull = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  address = "123 Main Street, San Francisco, CA 94105",
  links = [
    { href: "#privacy", label: "Privacy" },
    { href: "#terms", label: "Terms" },
  ],
  unsubscribeHref = "#",
  variant = "default",
}: FooterFullProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>footer full</MjmlPreview>
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
        <FooterFullSection
          address={address}
          companyName={companyName}
          links={links}
          theme={theme}
          unsubscribeHref={unsubscribeHref}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FooterFull.PreviewProps = {
  address: "123 Main Street, San Francisco, CA 94105",
  companyName: "Acme Inc.",
  links: [
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#terms", label: "Terms of Service" },
  ],
  theme: defaultTheme,
  unsubscribeHref: "#unsubscribe",
  variant: "default",
} satisfies FooterFullProps;
