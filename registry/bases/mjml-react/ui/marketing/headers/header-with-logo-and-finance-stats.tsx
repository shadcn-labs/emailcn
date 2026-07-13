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

export type HeaderWithLogoAndFinanceStatsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithLogoAndFinanceStatsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  stat1?: string;
  stat1Label?: string;
  stat2?: string;
  stat2Label?: string;
  variant?: HeaderWithLogoAndFinanceStatsVariant;
}

const variantClass = (variant: HeaderWithLogoAndFinanceStatsVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const HeaderWithLogoAndFinanceStats = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/3",
  logoAlt = "Logo",
  stat1 = "$12,450",
  stat1Label = "Balance",
  stat2 = "+5.2%",
  stat2Label = "Change",
  variant = "default",
}: HeaderWithLogoAndFinanceStatsProps) => (
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
        <MjmlColumn verticalAlign="middle" width="25%">
          <MjmlText
            align="right"
            color={theme.colorTextMuted}
            fontSize={theme.fontSizeSm}
            paddingBottom="0"
          >
            {stat1Label}
          </MjmlText>
          <MjmlText
            align="right"
            color={theme.colorText}
            fontSize={theme.fontSizeSm}
            fontWeight={theme.fontWeightBold}
            paddingTop="0"
          >
            {stat1}
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn verticalAlign="middle" width="25%">
          <MjmlText
            align="right"
            color={theme.colorTextMuted}
            fontSize={theme.fontSizeSm}
            paddingBottom="0"
          >
            {stat2Label}
          </MjmlText>
          <MjmlText
            align="right"
            color={theme.colorSuccess}
            fontSize={theme.fontSizeSm}
            fontWeight={theme.fontWeightBold}
            paddingTop="0"
          >
            {stat2}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);

HeaderWithLogoAndFinanceStats.PreviewProps = {
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/4",
  stat1: "$12,450",
  stat1Label: "Balance",
  stat2: "+5.2%",
  stat2Label: "Change",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderWithLogoAndFinanceStatsProps;
