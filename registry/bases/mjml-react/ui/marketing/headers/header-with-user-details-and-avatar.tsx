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

export type HeaderWithUserDetailsAndAvatarVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithUserDetailsAndAvatarProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  userName?: string;
  userEmail?: string;
  variant?: HeaderWithUserDetailsAndAvatarVariant;
}

const variantClass = (variant: HeaderWithUserDetailsAndAvatarVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const HeaderWithUserDetailsAndAvatar = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/4",
  logoAlt = "Logo",
  avatarSrc = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-headers-header-with-user-details-and-avatar-tsx-4&size=40",
  avatarAlt = "",
  userName = "John Doe",
  userEmail = "john@example.com",
  variant = "default",
}: HeaderWithUserDetailsAndAvatarProps) => (
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
        <MjmlColumn verticalAlign="middle" width="15%">
          <MjmlImage
            align="right"
            alt={avatarAlt}
            borderRadius="9999px"
            height={40}
            src={avatarSrc}
            width={40}
          />
        </MjmlColumn>
        <MjmlColumn verticalAlign="middle" width="35%">
          <MjmlText
            align="left"
            color={theme.colorText}
            fontSize={theme.fontSizeSm}
            fontWeight={theme.fontWeightMedium}
            paddingBottom="0"
          >
            {userName}
          </MjmlText>
          <MjmlText
            align="left"
            color={theme.colorTextMuted}
            fontSize={theme.fontSizeSm}
            paddingTop="0"
          >
            {userEmail}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);

HeaderWithUserDetailsAndAvatar.PreviewProps = {
  avatarAlt: "",
  avatarSrc:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-mjml-react-ui-marketing-headers-header-with-user-details-and-avatar-tsx-8&size=40",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/8",
  theme: defaultTheme,
  userEmail: "john@example.com",
  userName: "John Doe",
  variant: "default",
} satisfies HeaderWithUserDetailsAndAvatarProps;
