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

export type HeaderMinimalVariant = "default" | "slanted-left" | "slanted-right";

export interface HeaderMinimalProps {
  theme?: EmailThemeTokens;
  title?: string;
  variant?: HeaderMinimalVariant;
}

const HeaderMinimalSection = ({
  theme,
  title,
  variant,
}: {
  theme: EmailThemeTokens;
  title: string;
  variant: HeaderMinimalVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0 ${theme.spacingBase ?? "24px"} 0`}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeXl ?? "20px"}
        fontWeight={theme.fontWeightMedium}
      >
        {title}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const HeaderMinimal = ({
  theme = defaultTheme,
  title = "Section Title",
  variant = "default",
}: HeaderMinimalProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>header minimal</MjmlPreview>
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
        <HeaderMinimalSection theme={theme} title={title} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeaderMinimal.PreviewProps = {
  theme: defaultTheme,
  title: "What Our Customers Say",
  variant: "default",
} satisfies HeaderMinimalProps;
