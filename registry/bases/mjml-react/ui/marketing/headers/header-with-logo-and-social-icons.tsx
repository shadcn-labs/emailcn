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
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type HeaderBadgeVariant = "default" | "slanted-left" | "slanted-right";

export interface HeaderBadgeProps {
  theme?: EmailThemeTokens;
  badge?: string;
  heading?: string;
  variant?: HeaderBadgeVariant;
}

const HeaderBadgeSection = ({
  badge,
  heading,
  theme,
  variant,
}: {
  badge: string;
  heading: string;
  theme: EmailThemeTokens;
  variant: HeaderBadgeVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorPrimary}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {badge}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeHeading}
        fontWeight={theme.fontWeightBold}
      >
        {heading}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const HeaderWithLogoAndSocialIcons = ({
  theme = defaultTheme,
  badge = "NEW",
  heading = "Introducing Our Latest Feature",
  variant = "default",
}: HeaderBadgeProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>header badge</MjmlPreview>
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
        <HeaderBadgeSection
          badge={badge}
          heading={heading}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeaderWithLogoAndSocialIcons.PreviewProps = {
  badge: "ANNOUNCEMENT",
  heading: "Big News Coming Soon",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderBadgeProps;
