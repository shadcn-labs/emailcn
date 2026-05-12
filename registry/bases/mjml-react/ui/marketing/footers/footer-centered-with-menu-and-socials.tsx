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

export type FooterBasicVariant = "default" | "slanted-left" | "slanted-right";

export interface FooterBasicProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  variant?: FooterBasicVariant;
}

const FooterBasicSection = ({
  companyName,
  theme,
  variant,
}: {
  companyName: string;
  theme: EmailThemeTokens;
  variant: FooterBasicVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0 ${theme.spacingBase ?? "24px"} 0`}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
      >
        &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const FooterCenteredWithMenuAndSocials = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  variant = "default",
}: FooterBasicProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>footer basic</MjmlPreview>
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
        <FooterBasicSection
          companyName={companyName}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FooterCenteredWithMenuAndSocials.PreviewProps = {
  companyName: "Acme Inc.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterBasicProps;
