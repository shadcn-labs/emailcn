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

export type FooterWithSocialIconsAndAddressVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterWithSocialIconsAndAddressProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  address?: string;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  socialSrc4?: string;
  socialAlt4?: string;
  variant?: FooterWithSocialIconsAndAddressVariant;
}

const variantClass = (variant: FooterWithSocialIconsAndAddressVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const FooterWithSocialIconsAndAddress = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/100x25/7",
  logoAlt = "Logo",
  address = "123 Main Street, San Francisco, CA 94102",
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-footer-with-social-icons-and-address-tsx-7&size=20",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-footer-with-social-icons-and-address-tsx-8&size=20",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-footer-with-social-icons-and-address-tsx-9&size=20",
  socialAlt3 = "Instagram",
  socialSrc4 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-footer-with-social-icons-and-address-tsx-10&size=20",
  socialAlt4 = "LinkedIn",
  variant = "default",
}: FooterWithSocialIconsAndAddressProps) => {
  const socials = [
    { alt: socialAlt1, src: socialSrc1 },
    { alt: socialAlt2, src: socialSrc2 },
    { alt: socialAlt3, src: socialSrc3 },
    { alt: socialAlt4, src: socialSrc4 },
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
              paddingBottom="16px"
              src={logoSrc}
              width={100}
            />
            <MjmlText
              align="center"
              color={theme.colorTextMuted}
              fontSize={theme.fontSizeSm}
            >
              {address}
            </MjmlText>
            <MjmlText align="center">
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
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};

FooterWithSocialIconsAndAddress.PreviewProps = {
  address: "123 Main Street, San Francisco, CA 94102",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/100x25/12",
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "Instagram",
  socialAlt4: "LinkedIn",
  socialSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-footer-with-social-icons-and-address-tsx-12&size=20",
  socialSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-footer-with-social-icons-and-address-tsx-13&size=20",
  socialSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-footer-with-social-icons-and-address-tsx-14&size=20",
  socialSrc4:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-footer-with-social-icons-and-address-tsx-15&size=20",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterWithSocialIconsAndAddressProps;
