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

export type HeaderLogoVariant = "default" | "slanted-left" | "slanted-right";

export interface HeaderLogoProps {
  theme?: EmailThemeTokens;
  logoUrl?: string;
  logoAlt?: string;
  logoWidth?: number;
  variant?: HeaderLogoVariant;
}

const HeaderLogoSection = ({
  logoAlt,
  logoUrl,
  logoWidth,
  theme,
  variant,
}: {
  logoAlt: string;
  logoUrl?: string;
  logoWidth: number;
  theme: EmailThemeTokens;
  variant: HeaderLogoVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingBase ?? "24px"} 0`}
  >
    <MjmlColumn>
      {logoUrl ? (
        <MjmlImage
          align="center"
          alt={logoAlt}
          src={logoUrl}
          width={logoWidth}
        />
      ) : (
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeXl ?? "20px"}
          fontWeight={theme.fontWeightBold}
        >
          {logoAlt}
        </MjmlText>
      )}
    </MjmlColumn>
  </MjmlSection>
);

export const HeaderWithLogoAndFinanceStats = ({
  theme = defaultTheme,
  logoUrl,
  logoAlt = "Logo",
  logoWidth = 120,
  variant = "default",
}: HeaderLogoProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>header logo</MjmlPreview>
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
        <HeaderLogoSection
          logoAlt={logoAlt}
          logoUrl={logoUrl}
          logoWidth={logoWidth}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeaderWithLogoAndFinanceStats.PreviewProps = {
  logoAlt: "Acme",
  logoUrl: "https://placehold.co/120x40?text=Acme",
  logoWidth: 120,
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderLogoProps;
