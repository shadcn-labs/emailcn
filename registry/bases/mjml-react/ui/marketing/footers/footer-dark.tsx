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

export type FooterDarkVariant = "default" | "slanted-left" | "slanted-right";

export interface FooterDarkProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  variant?: FooterDarkVariant;
}

const FooterDarkSection = ({
  companyName,
  theme,
  variant,
}: {
  companyName: string;
  theme: EmailThemeTokens;
  variant: FooterDarkVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorText}
    padding={`${theme.spacingBase ?? "24px"} 0`}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorBackground}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
      >
        &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const FooterDark = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  variant = "default",
}: FooterDarkProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>footer dark</MjmlPreview>
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
        <FooterDarkSection
          companyName={companyName}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FooterDark.PreviewProps = {
  companyName: "Acme Inc.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterDarkProps;
