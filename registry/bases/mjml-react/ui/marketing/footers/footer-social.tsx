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

export type FooterSocialVariant = "default" | "slanted-left" | "slanted-right";

export interface FooterSocialProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  socialLinks?: { label: string; href: string }[];
  variant?: FooterSocialVariant;
}

const FooterSocialSection = ({
  companyName,
  socialLinks,
  theme,
  variant,
}: {
  companyName: string;
  socialLinks: FooterSocialProps["socialLinks"];
  theme: EmailThemeTokens;
  variant: FooterSocialVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0 ${theme.spacingBase ?? "24px"} 0`}
  >
    <MjmlColumn>
      {socialLinks && socialLinks.length > 0 ? (
        <MjmlText
          align="center"
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "12px"}
          paddingBottom={theme.spacingBase ?? "16px"}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: theme.colorTextMuted,
                margin: "0 8px",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </MjmlText>
      ) : null}
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
      >
        &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const FooterSocial = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  socialLinks = [
    { href: "https://twitter.com", label: "Twitter" },
    { href: "https://github.com", label: "GitHub" },
  ],
  variant = "default",
}: FooterSocialProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>footer social</MjmlPreview>
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
        <FooterSocialSection
          companyName={companyName}
          socialLinks={socialLinks}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FooterSocial.PreviewProps = {
  companyName: "Acme Inc.",
  socialLinks: [
    { href: "https://twitter.com", label: "Twitter" },
    { href: "https://github.com", label: "GitHub" },
    { href: "https://linkedin.com", label: "LinkedIn" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FooterSocialProps;
