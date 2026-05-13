/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
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

export type HeaderLogoWithLinksVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderLogoWithLinksProps {
  theme?: EmailThemeTokens;
  logoUrl?: string;
  logoAlt?: string;
  logoWidth?: number;
  links?: { label: string; href: string }[];
  variant?: HeaderLogoWithLinksVariant;
}

const HeaderLogoWithLinksSection = ({
  links,
  logoAlt,
  logoUrl,
  logoWidth,
  theme,
  variant,
}: {
  links: HeaderLogoWithLinksProps["links"];
  logoAlt: string;
  logoUrl?: string;
  logoWidth: number;
  theme: EmailThemeTokens;
  variant: HeaderLogoWithLinksVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingBase ?? "24px"} 0`}
  >
    <MjmlColumn width="50%" verticalAlign="middle">
      {logoUrl ? (
        <MjmlImage align="left" alt={logoAlt} src={logoUrl} width={logoWidth} />
      ) : (
        <MjmlText
          align="left"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeXl ?? "20px"}
          fontWeight={theme.fontWeightBold}
        >
          {logoAlt}
        </MjmlText>
      )}
    </MjmlColumn>
    {links && links.length > 0 ? (
      <MjmlColumn width="50%" verticalAlign="middle">
        {links.map((link) => (
          <MjmlText
            key={link.label}
            align="right"
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm ?? "12px"}
            padding="0 0 0 16px"
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
  </MjmlSection>
);

export const HeaderLogoWithLinks = ({
  theme = defaultTheme,
  logoUrl,
  logoAlt = "Logo",
  logoWidth = 120,
  links = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
  ],
  variant = "default",
}: HeaderLogoWithLinksProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>header with links</MjmlPreview>
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
        <HeaderLogoWithLinksSection
          links={links}
          logoAlt={logoAlt}
          logoUrl={logoUrl}
          logoWidth={logoWidth}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeaderLogoWithLinks.PreviewProps = {
  links: [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
  ],
  logoAlt: "Acme",
  logoUrl: "https://static.photos/business/120x40/2",
  logoWidth: 120,
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderLogoWithLinksProps;
