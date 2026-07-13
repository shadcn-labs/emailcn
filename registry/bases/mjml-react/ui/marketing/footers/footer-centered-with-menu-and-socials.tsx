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
  MjmlStyle,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type FooterCenteredWithMenuAndSocialsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterCenteredWithMenuAndSocialsProps {
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
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  copyright?: string;
  variant?: FooterCenteredWithMenuAndSocialsVariant;
}

const variantClass = (variant: FooterCenteredWithMenuAndSocialsVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const FooterCenteredWithMenuAndSocials = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/100x25/6",
  logoAlt = "Logo",
  link1 = "Features",
  link1Href = "#",
  link2 = "Pricing",
  link2Href = "#",
  link3 = "About",
  link3Href = "#",
  link4 = "Contact",
  link4Href = "#",
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-footer-centered-with-menu-and-socials-tsx-6&size=20",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-footer-centered-with-menu-and-socials-tsx-7&size=20",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-footer-centered-with-menu-and-socials-tsx-8&size=20",
  socialAlt3 = "LinkedIn",
  copyright = "© 2024 Acme Inc.",
  variant = "default",
}: FooterCenteredWithMenuAndSocialsProps) => {
  const links = [
    { href: link1Href, label: link1 },
    { href: link2Href, label: link2 },
    { href: link3Href, label: link3 },
    { href: link4Href, label: link4 },
  ];
  const socials = [
    { alt: socialAlt1, src: socialSrc1 },
    { alt: socialAlt2, src: socialSrc2 },
    { alt: socialAlt3, src: socialSrc3 },
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
              height={25}
              paddingBottom="24px"
              src={logoSrc}
              width={100}
            />
            <MjmlText align="center" paddingBottom="24px">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: theme.colorTextMuted,
                    fontSize: theme.fontSizeSm,
                    margin: "0 12px",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </MjmlText>
            <MjmlText align="center" paddingBottom="16px">
              {socials.map((social) => (
                <img
                  key={social.alt}
                  alt={social.alt}
                  src={social.src}
                  width="20"
                  height="20"
                  style={{
                    display: "inline-block",
                    height: "auto",
                    margin: "0 8px",
                    objectFit: "contain",
                    verticalAlign: "middle",
                  }}
                />
              ))}
            </MjmlText>
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

FooterCenteredWithMenuAndSocials.PreviewProps = {
  copyright: "© 2024 Acme Inc.",
  link1: "Features",
  link1Href: "#",
  link2: "Pricing",
  link2Href: "#",
  link3: "About",
  link3Href: "#",
  link4: "Contact",
  link4Href: "#",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/100x25/10",
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "LinkedIn",
  socialSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-footer-centered-with-menu-and-socials-tsx-10&size=20",
  socialSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-footer-centered-with-menu-and-socials-tsx-11&size=20",
  socialSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-footer-centered-with-menu-and-socials-tsx-12&size=20",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterCenteredWithMenuAndSocialsProps;
