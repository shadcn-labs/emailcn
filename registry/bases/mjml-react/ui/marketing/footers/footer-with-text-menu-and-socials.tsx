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

export type FooterMinimalVariant = "default" | "slanted-left" | "slanted-right";

export interface FooterMinimalProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  variant?: FooterMinimalVariant;
}

const FooterMinimalSection = ({
  companyName,
  theme,
  variant,
}: {
  companyName: string;
  theme: EmailThemeTokens;
  variant: FooterMinimalVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackgroundMuted}
    padding={`${theme.spacingBase ?? "24px"} 0`}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
      >
        &copy; {new Date().getFullYear()} {companyName}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const FooterWithTextMenuAndSocials = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  variant = "default",
}: FooterMinimalProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>footer minimal</MjmlPreview>
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
        <FooterMinimalSection
          companyName={companyName}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FooterWithTextMenuAndSocials.PreviewProps = {
  companyName: "Acme Inc.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterMinimalProps;
