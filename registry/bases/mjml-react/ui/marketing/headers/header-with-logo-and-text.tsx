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

export type HeaderWithLogoAndTextVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithLogoAndTextProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  text?: string;
  variant?: HeaderWithLogoAndTextVariant;
}

const variantClass = (variant: HeaderWithLogoAndTextVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const HeaderWithLogoAndText = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/3",
  logoAlt = "Logo",
  text = "Welcome to our newsletter",
  variant = "default",
}: HeaderWithLogoAndTextProps) => (
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
        <MjmlColumn verticalAlign="middle" width="33%">
          <MjmlImage
            align="left"
            alt={logoAlt}
            height={30}
            src={logoSrc}
            width={120}
          />
        </MjmlColumn>
        <MjmlColumn verticalAlign="middle" width="67%">
          <MjmlText
            align="right"
            color={theme.colorTextMuted}
            fontSize={theme.fontSizeSm}
          >
            {text}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);

HeaderWithLogoAndText.PreviewProps = {
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/4",
  text: "Welcome to our newsletter",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderWithLogoAndTextProps;
