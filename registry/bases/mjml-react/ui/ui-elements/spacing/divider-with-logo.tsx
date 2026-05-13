/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlDivider,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface DividerWithLogoProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DividerWithLogoSection = ({
  logoSrc,
  logoAlt,
  theme,
}: {
  logoSrc?: string;
  logoAlt: string;
  theme: EmailThemeTokens;
}) => (
  <MjmlSection padding={`${theme.spacingBase ?? "16px"} 0`}>
    <MjmlColumn>
      <MjmlDivider
        borderColor={theme.colorBorder}
        paddingBottom={theme.spacingBase ?? "16px"}
      />
      {logoSrc ? (
        <MjmlImage align="center" alt={logoAlt} src={logoSrc} width={80} />
      ) : null}
      <MjmlDivider
        borderColor={theme.colorBorder}
        paddingTop={theme.spacingBase ?? "16px"}
      />
    </MjmlColumn>
  </MjmlSection>
);

export const DividerWithLogo = ({
  theme = defaultTheme,
  logoSrc,
  logoAlt = "Logo",
  variant = "default",
}: DividerWithLogoProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>divider-logo</MjmlPreview>
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
        <DividerWithLogoSection
          logoSrc={logoSrc}
          logoAlt={logoAlt}
          theme={theme}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

DividerWithLogo.PreviewProps = {
  logoAlt: "Brand",
  logoSrc: "https://static.photos/business/320x80/2",
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithLogoProps;
