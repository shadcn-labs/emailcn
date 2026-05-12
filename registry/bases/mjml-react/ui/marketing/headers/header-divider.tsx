/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlDivider,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type HeaderDividerVariant = "default" | "slanted-left" | "slanted-right";

export interface HeaderDividerProps {
  theme?: EmailThemeTokens;
  title?: string;
  variant?: HeaderDividerVariant;
}

const HeaderDividerSection = ({
  theme,
  title,
  variant,
}: {
  theme: EmailThemeTokens;
  title: string;
  variant: HeaderDividerVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0 0 0`}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg ?? "16px"}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {title}
      </MjmlText>
      <MjmlDivider
        borderColor={theme.colorBorder ?? "#e5e7eb"}
        borderWidth="1px"
        paddingBottom="0"
      />
    </MjmlColumn>
  </MjmlSection>
);

export const HeaderDivider = ({
  theme = defaultTheme,
  title = "Section Title",
  variant = "default",
}: HeaderDividerProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>header divider</MjmlPreview>
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
        <HeaderDividerSection theme={theme} title={title} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeaderDivider.PreviewProps = {
  theme: defaultTheme,
  title: "Features",
  variant: "default",
} satisfies HeaderDividerProps;
