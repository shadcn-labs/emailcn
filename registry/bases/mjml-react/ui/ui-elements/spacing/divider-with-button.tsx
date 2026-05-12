/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlButton,
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

export interface DividerWithButtonProps {
  theme?: EmailThemeTokens;
  label?: string;
  href?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DividerWithButtonSection = ({
  label,
  href,
  theme,
}: {
  label: string;
  href: string;
  theme: EmailThemeTokens;
}) => (
  <MjmlSection padding={`${theme.spacingBase ?? "16px"} 0`}>
    <MjmlColumn>
      <MjmlDivider
        borderColor={theme.colorBorder}
        paddingBottom={theme.spacingBase ?? "16px"}
      />
      <MjmlButton
        align="center"
        backgroundColor={theme.colorPrimary}
        borderRadius={theme.borderRadius}
        color={theme.colorPrimaryForeground ?? "#ffffff"}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
        fontWeight={theme.fontWeightMedium ?? "500"}
        href={href}
        innerPadding={`${theme.spacingBase ?? "16px"} ${theme.spacingLg ?? "24px"}`}
      >
        {label}
      </MjmlButton>
      <MjmlDivider
        borderColor={theme.colorBorder}
        paddingTop={theme.spacingBase ?? "16px"}
      />
    </MjmlColumn>
  </MjmlSection>
);

export const DividerWithButton = ({
  theme = defaultTheme,
  label = "View All",
  href = "#",
  variant = "default",
}: DividerWithButtonProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>divider-btn</MjmlPreview>
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
        <DividerWithButtonSection label={label} href={href} theme={theme} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

DividerWithButton.PreviewProps = {
  href: "https://example.com",
  label: "Shop Now",
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithButtonProps;
