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

export type FooterLinksVariant = "default" | "slanted-left" | "slanted-right";

export interface FooterLinksProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  links?: { label: string; href: string }[];
  variant?: FooterLinksVariant;
}

const FooterLinksSection = ({
  companyName,
  links,
  theme,
  variant,
}: {
  companyName: string;
  links: FooterLinksProps["links"];
  theme: EmailThemeTokens;
  variant: FooterLinksVariant;
}) => {
  const items = links ?? [];

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0 ${theme.spacingBase ?? "24px"} 0`}
    >
      {items.length > 0 ? (
        <MjmlColumn paddingBottom={theme.spacingBase ?? "16px"}>
          {items.map((link) => (
            <MjmlText
              key={link.label}
              align="center"
              color={theme.colorTextMuted}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeSm ?? "12px"}
              padding="0 8px"
            >
              <a
                href={link.href}
                style={{ color: theme.colorTextMuted, textDecoration: "none" }}
              >
                {link.label}
              </a>
            </MjmlText>
          ))}
        </MjmlColumn>
      ) : null}
      <MjmlColumn>
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
};

export const FooterLinks = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  links = [
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#terms", label: "Terms of Service" },
  ],
  variant = "default",
}: FooterLinksProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>footer links</MjmlPreview>
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
        <FooterLinksSection
          companyName={companyName}
          links={links}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FooterLinks.PreviewProps = {
  companyName: "Acme Inc.",
  links: [
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#terms", label: "Terms of Service" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FooterLinksProps;
