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

export type HeaderCenteredVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderCenteredProps {
  theme?: EmailThemeTokens;
  title?: string;
  subtitle?: string;
  variant?: HeaderCenteredVariant;
}

const HeaderCenteredSection = ({
  subtitle,
  theme,
  title,
  variant,
}: {
  subtitle: string;
  theme: EmailThemeTokens;
  title: string;
  variant: HeaderCenteredVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
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
          align="center"
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

export const HeaderWithLogoAndText = ({
  theme = defaultTheme,
  title = "Page Title",
  subtitle = "A short description or tagline goes here.",
  variant = "default",
}: HeaderCenteredProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>header centered</MjmlPreview>
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
        <HeaderCenteredSection
          subtitle={subtitle}
          theme={theme}
          title={title}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeaderWithLogoAndText.PreviewProps = {
  subtitle: "Stay up to date with the latest news and updates.",
  theme: defaultTheme,
  title: "Welcome to Our Newsletter",
  variant: "default",
} satisfies HeaderCenteredProps;
