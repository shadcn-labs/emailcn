/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type LogoCloudVariant = "default" | "slanted-left" | "slanted-right";

export type LogoCloudTone = "boxed" | "outlined";

export interface LogoCloudProps {
  theme?: EmailThemeTokens;
  heading?: string;
  logoSrc1?: string;
  logoAlt1?: string;
  logoSrc2?: string;
  logoAlt2?: string;
  logoSrc3?: string;
  logoAlt3?: string;
  logoSrc4?: string;
  logoAlt4?: string;
  variant?: LogoCloudVariant;
  tone?: LogoCloudTone;
}

const toneAttrs = (theme: EmailThemeTokens, tone: LogoCloudTone) =>
  tone === "outlined"
    ? {
        border: `1px solid ${theme.colorBorder}`,
        borderRadius: "8px",
        padding: "16px 24px",
      }
    : {
        borderRadius: "8px",
        containerBackgroundColor: theme.colorBackgroundMuted,
        padding: "16px 24px",
      };

export const LogoCloud = ({
  theme = defaultTheme,
  heading = "Trusted by",
  logoSrc1 = "https://static.photos/business/120x40/6",
  logoAlt1 = "Logo 1",
  logoSrc2 = "https://static.photos/business/120x40/7",
  logoAlt2 = "Logo 2",
  logoSrc3 = "https://static.photos/business/120x40/8",
  logoAlt3 = "Logo 3",
  logoSrc4 = "https://static.photos/business/120x40/9",
  logoAlt4 = "Logo 4",
  variant = "default",
  tone = "boxed",
}: LogoCloudProps) => {
  const attrs = toneAttrs(theme, tone);
  const logos = [
    { alt: logoAlt1, src: logoSrc1 },
    { alt: logoAlt2, src: logoSrc2 },
    { alt: logoAlt3, src: logoSrc3 },
    { alt: logoAlt4, src: logoSrc4 },
  ];
  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>{heading}</MjmlPreview>
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
        <MjmlWrapper padding="48px 0">
          {heading ? (
            <MjmlSection padding="0 0 24px">
              <MjmlColumn>
                <MjmlText
                  align="center"
                  color={theme.colorTextMuted}
                  fontSize={theme.fontSizeSm}
                  padding="0"
                  textTransform="uppercase"
                >
                  {heading}
                </MjmlText>
              </MjmlColumn>
            </MjmlSection>
          ) : null}
          <MjmlSection padding="0">
            {logos.map((logo) => (
              <MjmlColumn key={logo.alt} verticalAlign="middle" width="25%">
                <MjmlImage
                  align="center"
                  alt={logo.alt}
                  height="40px"
                  src={logo.src}
                  width="120px"
                  {...attrs}
                />
              </MjmlColumn>
            ))}
          </MjmlSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

LogoCloud.PreviewProps = {
  heading: "Trusted by",
  logoAlt1: "Company 1",
  logoAlt2: "Company 2",
  logoAlt3: "Company 3",
  logoAlt4: "Company 4",
  logoSrc1: "https://static.photos/business/120x40/10",
  logoSrc2: "https://static.photos/business/120x40/11",
  logoSrc3: "https://static.photos/business/120x40/12",
  logoSrc4: "https://static.photos/business/120x40/13",
  theme: defaultTheme,
  tone: "boxed",
  variant: "default",
} satisfies LogoCloudProps;
