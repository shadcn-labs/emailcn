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

export type HeaderWithLogoAndSocialIconsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithLogoAndSocialIconsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  variant?: HeaderWithLogoAndSocialIconsVariant;
}

const variantClass = (variant: HeaderWithLogoAndSocialIconsVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const HeaderWithLogoAndSocialIcons = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/6",
  logoAlt = "Logo",
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-headers-header-with-logo-and-social-icons-tsx-6&size=24",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-headers-header-with-logo-and-social-icons-tsx-7&size=24",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-headers-header-with-logo-and-social-icons-tsx-8&size=24",
  socialAlt3 = "LinkedIn",
  variant = "default",
}: HeaderWithLogoAndSocialIconsProps) => {
  const socials = [
    { alt: socialAlt1, src: socialSrc1 },
    { alt: socialAlt2, src: socialSrc2 },
    { alt: socialAlt3, src: socialSrc3 },
  ];
  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>Header</MjmlPreview>
        <MjmlStyle>{`
          .ec-skew-left > div { transform: skewX(-10deg); }
          .ec-skew-right > div { transform: skewX(10deg); }
        `}</MjmlStyle>
        <MjmlAttributes>
          <MjmlAll color={theme.colorText} fontFamily={theme.fontFamily} />
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
          padding={`${theme.spacingBase ?? "24px"} 0`}
        >
          <MjmlColumn verticalAlign="middle" width="50%">
            <MjmlImage
              align="left"
              alt={logoAlt}
              height={30}
              src={logoSrc}
              width={120}
            />
          </MjmlColumn>
          <MjmlColumn verticalAlign="middle" width="50%">
            <MjmlText align="right">
              {socials.map((social) => (
                <img
                  key={social.alt}
                  alt={social.alt}
                  src={social.src}
                  width="24"
                  height="24"
                  style={{
                    display: "inline-block",
                    height: "auto",
                    marginLeft: "12px",
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

HeaderWithLogoAndSocialIcons.PreviewProps = {
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/10",
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "LinkedIn",
  socialSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-headers-header-with-logo-and-social-icons-tsx-10&size=24",
  socialSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-headers-header-with-logo-and-social-icons-tsx-11&size=24",
  socialSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-headers-header-with-logo-and-social-icons-tsx-12&size=24",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderWithLogoAndSocialIconsProps;
