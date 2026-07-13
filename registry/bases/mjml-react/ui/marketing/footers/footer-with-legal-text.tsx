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
  MjmlStyle,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type FooterWithLegalTextVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterWithLegalTextProps {
  theme?: EmailThemeTokens;
  legalText?: string;
  variant?: FooterWithLegalTextVariant;
}

const variantClass = (variant: FooterWithLegalTextVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const FooterWithLegalText = ({
  theme = defaultTheme,
  legalText = "© 2024 Acme Inc. All rights reserved. This email was sent to you because you signed up for our newsletter.",
  variant = "default",
}: FooterWithLegalTextProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Footer</MjmlPreview>
      <MjmlStyle>{`
        .ec-skew-left > div { transform: skewX(-10deg); }
        .ec-skew-right > div { transform: skewX(10deg); }
      `}</MjmlStyle>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextSubtle} fontFamily={theme.fontFamily} />
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
      <MjmlSection
        backgroundColor={theme.colorBackground}
        cssClass={variantClass(variant)}
        padding="32px 0"
      >
        <MjmlColumn>
          <MjmlDivider
            borderColor={theme.colorBorder}
            borderWidth="1px"
            paddingBottom="24px"
          />
          <MjmlText
            align="center"
            color={theme.colorTextSubtle}
            fontSize={theme.fontSizeSm}
            lineHeight={theme.lineHeightBase}
          >
            {legalText}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);

FooterWithLegalText.PreviewProps = {
  legalText:
    "© 2024 Acme Inc. All rights reserved. This email was sent to you because you signed up for our newsletter.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterWithLegalTextProps;
