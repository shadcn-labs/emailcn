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

export type HeaderAccentVariant = "default" | "slanted-left" | "slanted-right";

export interface HeaderAccentProps {
  theme?: EmailThemeTokens;
  title?: string;
  subtitle?: string;
  variant?: HeaderAccentVariant;
}

const HeaderAccentSection = ({
  subtitle,
  theme,
  title,
  variant,
}: {
  subtitle: string;
  theme: EmailThemeTokens;
  title: string;
  variant: HeaderAccentVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackgroundMuted}
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
        {subtitle}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeHeading}
        fontWeight={theme.fontWeightBold}
      >
        {title}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const HeaderAccent = ({
  theme = defaultTheme,
  title = "Main Title",
  subtitle = "SECTION LABEL",
  variant = "default",
}: HeaderAccentProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>header accent</MjmlPreview>
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
        <HeaderAccentSection
          subtitle={subtitle}
          theme={theme}
          title={title}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeaderAccent.PreviewProps = {
  subtitle: "WHAT'S NEW",
  theme: defaultTheme,
  title: "Latest Features & Updates",
  variant: "default",
} satisfies HeaderAccentProps;
