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

export type HeaderLogoWithLinksVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderLogoWithLinksProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  variant?: HeaderLogoWithLinksVariant;
}

const variantClass = (variant: HeaderLogoWithLinksVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const HeaderLogoWithLinks = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/3",
  logoAlt = "Logo",
  variant = "default",
}: HeaderLogoWithLinksProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Header</MjmlPreview>
      <MjmlStyle>{`
        .ec-skew-left div { transform: skewX(-10deg); }
        .ec-skew-left img { transform: skewX(10deg); }
        .ec-skew-right div { transform: skewX(10deg); }
        .ec-skew-right img { transform: skewX(-10deg); }
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
        <MjmlColumn>
          <MjmlImage
            align="center"
            alt={logoAlt}
            height={30}
            src={logoSrc}
            width={120}
          />
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);

HeaderLogoWithLinks.PreviewProps = {
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/4",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderLogoWithLinksProps;
