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

export type FooterDisclaimerVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterDisclaimerProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  disclaimer?: string;
  variant?: FooterDisclaimerVariant;
}

const FooterDisclaimerSection = ({
  companyName,
  disclaimer,
  theme,
  variant,
}: {
  companyName: string;
  disclaimer: string;
  theme: EmailThemeTokens;
  variant: FooterDisclaimerVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackgroundSubtle}
    padding={`${theme.spacingBase ?? "24px"} 0`}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "11px"}
        paddingBottom={theme.spacingBase ?? "8px"}
      >
        {disclaimer}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "11px"}
      >
        &copy; {new Date().getFullYear()} {companyName}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const FooterDisclaimer = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  disclaimer = "This email was sent to you because you signed up for our newsletter.",
  variant = "default",
}: FooterDisclaimerProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>footer disclaimer</MjmlPreview>
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
        <FooterDisclaimerSection
          companyName={companyName}
          disclaimer={disclaimer}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
FooterDisclaimer.PreviewProps = {
  companyName: "Acme Inc.",
  disclaimer:
    "This email was sent to you because you opted in to receive updates.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterDisclaimerProps;
