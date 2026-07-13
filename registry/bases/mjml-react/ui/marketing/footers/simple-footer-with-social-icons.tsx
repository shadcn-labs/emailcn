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
  MjmlStyle,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type SimpleFooterWithSocialIconsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SimpleFooterWithSocialIconsProps {
  theme?: EmailThemeTokens;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  variant?: SimpleFooterWithSocialIconsVariant;
}

const variantClass = (variant: SimpleFooterWithSocialIconsVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const SimpleFooterWithSocialIcons = ({
  theme = defaultTheme,
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-simple-footer-with-social-icons-tsx-4&size=20",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-simple-footer-with-social-icons-tsx-5&size=20",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-simple-footer-with-social-icons-tsx-6&size=20",
  socialAlt3 = "LinkedIn",
  variant = "default",
}: SimpleFooterWithSocialIconsProps) => {
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
                    margin: "0 12px",
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

SimpleFooterWithSocialIcons.PreviewProps = {
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "LinkedIn",
  socialSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-simple-footer-with-social-icons-tsx-7&size=20",
  socialSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-simple-footer-with-social-icons-tsx-8&size=20",
  socialSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-footers-simple-footer-with-social-icons-tsx-9&size=20",
  theme: defaultTheme,
  variant: "default",
} satisfies SimpleFooterWithSocialIconsProps;
