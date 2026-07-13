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

export type HeaderWithLogoAndBadgeVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithLogoAndBadgeProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  badgeText?: string;
  variant?: HeaderWithLogoAndBadgeVariant;
}

const variantClass = (variant: HeaderWithLogoAndBadgeVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const HeaderWithLogoAndBadge = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/3",
  logoAlt = "Logo",
  badgeText = "New",
  variant = "default",
}: HeaderWithLogoAndBadgeProps) => (
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
          {badgeText ? (
            <MjmlText align="right">
              <span
                style={{
                  backgroundColor: theme.colorPrimary,
                  borderRadius: "9999px",
                  color: theme.colorPrimaryForeground ?? "#ffffff",
                  display: "inline-block",
                  fontSize: theme.fontSizeSm,
                  fontWeight: theme.fontWeightMedium,
                  padding: "4px 12px",
                }}
              >
                {badgeText}
              </span>
            </MjmlText>
          ) : null}
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);

HeaderWithLogoAndBadge.PreviewProps = {
  badgeText: "New",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/4",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderWithLogoAndBadgeProps;
