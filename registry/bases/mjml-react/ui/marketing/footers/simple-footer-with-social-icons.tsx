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

export type FooterUnsubscribeVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterUnsubscribeProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  unsubscribeHref?: string;
  variant?: FooterUnsubscribeVariant;
}

const FooterUnsubscribeSection = ({
  companyName,
  theme,
  unsubscribeHref,
  variant,
}: {
  companyName: string;
  theme: EmailThemeTokens;
  unsubscribeHref: string;
  variant: FooterUnsubscribeVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
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
        If you no longer wish to receive these emails, you can{" "}
        <a href={unsubscribeHref} style={{ color: theme.colorTextMuted }}>
          unsubscribe
        </a>
        .
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

export const SimpleFooterWithSocialIcons = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  unsubscribeHref = "#",
  variant = "default",
}: FooterUnsubscribeProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>footer unsubscribe</MjmlPreview>
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
        <FooterUnsubscribeSection
          companyName={companyName}
          theme={theme}
          unsubscribeHref={unsubscribeHref}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
SimpleFooterWithSocialIcons.PreviewProps = {
  companyName: "Acme Inc.",
  theme: defaultTheme,
  unsubscribeHref: "#unsubscribe",
  variant: "default",
} satisfies FooterUnsubscribeProps;
