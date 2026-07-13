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

export type HeaderWithUserDetailsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithUserDetailsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  userName?: string;
  userEmail?: string;
  variant?: HeaderWithUserDetailsVariant;
}

const variantClass = (variant: HeaderWithUserDetailsVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const HeaderWithUserDetails = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/3",
  logoAlt = "Logo",
  userName = "John Doe",
  userEmail = "john@example.com",
  variant = "default",
}: HeaderWithUserDetailsProps) => (
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
          <MjmlText
            align="right"
            color={theme.colorText}
            fontSize={theme.fontSizeSm}
            fontWeight={theme.fontWeightMedium}
            paddingBottom="0"
          >
            {userName}
          </MjmlText>
          <MjmlText
            align="right"
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

HeaderWithUserDetails.PreviewProps = {
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/4",
  theme: defaultTheme,
  userEmail: "john@example.com",
  userName: "John Doe",
  variant: "default",
} satisfies HeaderWithUserDetailsProps;
