/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlStyle,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type FooterWithContentAndCtaVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterWithContentAndCtaProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: FooterWithContentAndCtaVariant;
}

const variantClass = (variant: FooterWithContentAndCtaVariant) =>
  variant === "slanted-left"
    ? "ec-skew-left"
    : variant === "slanted-right"
      ? "ec-skew-right"
      : undefined;

export const FooterWithContentAndCta = ({
  theme = defaultTheme,
  heading = "Stay in touch",
  subtext = "Subscribe to our newsletter.",
  ctaLabel = "Subscribe",
  ctaHref = "#",
  variant = "default",
}: FooterWithContentAndCtaProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{heading}</MjmlPreview>
      <MjmlStyle>{`
        .ec-skew-left > div { transform: skewX(-10deg); }
        .ec-skew-right > div { transform: skewX(10deg); }
      `}</MjmlStyle>
      <MjmlAttributes>
        <MjmlAll color={theme.colorText} fontFamily={theme.fontFamily} />
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
          <MjmlText
            align="center"
            color={theme.colorText}
            fontSize={theme.fontSizeLg}
            fontWeight={theme.fontWeightMedium}
            paddingBottom="8px"
          >
            {heading}
          </MjmlText>
          <MjmlText
            align="center"
            color={theme.colorTextMuted}
            fontSize={theme.fontSizeSm}
            paddingBottom="24px"
          >
            {subtext}
          </MjmlText>
          {ctaLabel && ctaHref ? (
            <MjmlButton
              align="center"
              backgroundColor={theme.colorPrimary}
              borderRadius={theme.borderRadius}
              color={theme.colorPrimaryForeground ?? "#ffffff"}
              fontSize={theme.fontSizeSm}
              fontWeight={theme.fontWeightMedium}
              href={ctaHref}
              innerPadding="8px 24px"
            >
              {ctaLabel}
            </MjmlButton>
          ) : null}
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);

FooterWithContentAndCta.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Subscribe",
  heading: "Stay in touch",
  subtext: "Subscribe to our newsletter.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterWithContentAndCtaProps;
