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

export type HeaderLeftAlignedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderLeftAlignedProps {
  theme?: EmailThemeTokens;
  title?: string;
  subtitle?: string;
  variant?: HeaderLeftAlignedVariant;
}

const HeaderLeftAlignedSection = ({
  subtitle,
  theme,
  title,
  variant,
}: {
  subtitle: string;
  theme: EmailThemeTokens;
  title: string;
  variant: HeaderLeftAlignedVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      <MjmlText
        align="left"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeHeading}
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {title}
      </MjmlText>
      {subtitle ? (
        <MjmlText
          align="left"
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeLg ?? "16px"}
          lineHeight={theme.lineHeightBase}
        >
          {subtitle}
        </MjmlText>
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

export const HeaderWithUserDetailsAndAvatar = ({
  theme = defaultTheme,
  title = "Page Title",
  subtitle = "A left-aligned header section.",
  variant = "default",
}: HeaderLeftAlignedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>header left</MjmlPreview>
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
        <HeaderLeftAlignedSection
          subtitle={subtitle}
          theme={theme}
          title={title}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeaderWithUserDetailsAndAvatar.PreviewProps = {
  subtitle: "Here's what's new this month.",
  theme: defaultTheme,
  title: "Latest Updates",
  variant: "default",
} satisfies HeaderLeftAlignedProps;
