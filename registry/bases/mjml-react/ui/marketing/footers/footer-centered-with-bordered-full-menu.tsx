/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlDivider,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlStyle,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type FooterCenteredWithBorderedFullMenuVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterCenteredWithBorderedFullMenuProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  link1?: string;
  link1Href?: string;
  link2?: string;
  link2Href?: string;
  link3?: string;
  link3Href?: string;
  link4?: string;
  link4Href?: string;
  link5?: string;
  link5Href?: string;
  copyright?: string;
  variant?: FooterCenteredWithBorderedFullMenuVariant;
}

const variantClass = (variant: FooterCenteredWithBorderedFullMenuVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const FooterCenteredWithBorderedFullMenu = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/3",
  logoAlt = "Logo",
  link1 = "Features",
  link1Href = "#",
  link2 = "Pricing",
  link2Href = "#",
  link3 = "About",
  link3Href = "#",
  link4 = "Blog",
  link4Href = "#",
  link5 = "Contact",
  link5Href = "#",
  copyright = "© 2024 Acme Inc.",
  variant = "default",
}: FooterCenteredWithBorderedFullMenuProps) => {
  const links = [
    { href: link1Href, label: link1 },
    { href: link2Href, label: link2 },
    { href: link3Href, label: link3 },
    { href: link4Href, label: link4 },
    { href: link5Href, label: link5 },
  ];
  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>Footer</MjmlPreview>
        <MjmlStyle>{`
          .ec-skew-left > div { transform: skewX(-10deg); }
          .ec-skew-right > div { transform: skewX(10deg); }
        `}</MjmlStyle>
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
        <MjmlSection
          backgroundColor={theme.colorBackground}
          cssClass={variantClass(variant)}
          padding="32px 0"
        >
          <MjmlColumn>
            <MjmlImage
              align="center"
              alt={logoAlt}
              height={30}
              paddingBottom="24px"
              src={logoSrc}
              width={120}
            />
            <MjmlDivider
              borderColor={theme.colorBorder}
              borderWidth="1px"
              paddingBottom="24px"
            />
            <MjmlText align="center" paddingBottom="24px">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: theme.colorTextMuted,
                    fontSize: theme.fontSizeSm,
                    margin: "0 16px",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </MjmlText>
            <MjmlDivider
              borderColor={theme.colorBorder}
              borderWidth="1px"
              paddingBottom="24px"
            />
            <MjmlText
              align="center"
              color={theme.colorTextSubtle}
              fontSize={theme.fontSizeSm}
            >
              {copyright}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};

FooterCenteredWithBorderedFullMenu.PreviewProps = {
  copyright: "© 2024 Acme Inc.",
  link1: "Features",
  link1Href: "#",
  link2: "Pricing",
  link2Href: "#",
  link3: "About",
  link3Href: "#",
  link4: "Blog",
  link4Href: "#",
  link5: "Contact",
  link5Href: "#",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/6",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterCenteredWithBorderedFullMenuProps;
