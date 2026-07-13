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

export type SocialLogosVariant = "default" | "slanted-left" | "slanted-right";

export type SocialLogosTile =
  | "square"
  | "circle"
  | "pill"
  | "squared-box"
  | "outlined-box"
  | "outlined-pill"
  | "outlined-square";

export interface SocialLogosProps {
  theme?: EmailThemeTokens;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  socialSrc4?: string;
  socialAlt4?: string;
  variant?: SocialLogosVariant;
  tile?: SocialLogosTile;
}

const tileAttrs = (theme: EmailThemeTokens, tile: SocialLogosTile) => {
  const padding =
    tile === "pill" || tile === "outlined-pill" ? "12px 16px" : "12px";
  const borderRadius =
    tile === "circle" || tile === "pill" || tile === "outlined-pill"
      ? "9999px"
      : tile === "squared-box"
        ? "4px"
        : tile === "outlined-box"
          ? "0"
          : "8px";
  const outlined =
    tile === "outlined-box" ||
    tile === "outlined-pill" ||
    tile === "outlined-square";
  return outlined
    ? { border: `1px solid ${theme.colorBorder}`, borderRadius, padding }
    : {
        borderRadius,
        containerBackgroundColor: theme.colorBackgroundMuted,
        padding,
      };
};

const SocialLogosSection = ({
  theme,
  tile,
  socials,
}: {
  theme: EmailThemeTokens;
  tile: SocialLogosTile;
  socials: { src: string; alt: string }[];
}) => {
  const attrs = tileAttrs(theme, tile);
  return (
    <MjmlSection backgroundColor={theme.colorBackground} padding="32px 0">
      {socials.map((social) => (
        <MjmlColumn key={social.alt} verticalAlign="middle" width="25%">
          <MjmlImage
            align="center"
            alt={social.alt}
            height="24px"
            src={social.src}
            width="24px"
            {...attrs}
          />
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const SocialLogos = ({
  theme = defaultTheme,
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-social-social-logos-tsx-1&size=24",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-social-social-logos-tsx-2&size=24",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-social-social-logos-tsx-3&size=24",
  socialAlt3 = "Instagram",
  socialSrc4 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-social-social-logos-tsx-4&size=24",
  socialAlt4 = "LinkedIn",
  variant = "default",
  tile = "square",
}: SocialLogosProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Social</MjmlPreview>
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
        <SocialLogosSection
          socials={[
            { alt: socialAlt1, src: socialSrc1 },
            { alt: socialAlt2, src: socialSrc2 },
            { alt: socialAlt3, src: socialSrc3 },
            { alt: socialAlt4, src: socialSrc4 },
          ]}
          theme={theme}
          tile={tile}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
SocialLogos.PreviewProps = {
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "Instagram",
  socialAlt4: "LinkedIn",
  socialSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-social-social-logos-tsx-5&size=24",
  socialSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-social-social-logos-tsx-6&size=24",
  socialSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-social-social-logos-tsx-7&size=24",
  socialSrc4:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-social-social-logos-tsx-8&size=24",
  theme: defaultTheme,
  tile: "square",
  variant: "default",
} satisfies SocialLogosProps;
