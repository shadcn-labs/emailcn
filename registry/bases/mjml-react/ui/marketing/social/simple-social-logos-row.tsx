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

export type SocialLinksFeaturedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SocialLinksFeaturedProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string }[];
  variant?: SocialLinksFeaturedVariant;
}

const SocialLinksFeaturedSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksFeaturedProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksFeaturedVariant;
}) => (
  <MjmlSection backgroundColor={theme.colorBackground} padding="24px 0">
    <MjmlColumn>
      {(links ?? []).map((l) => (
        <MjmlText
          key={l.platform}
          align="center"
          color={theme.colorPrimary}
          fontFamily={theme.fontFamily}
          fontSize="14px"
          fontWeight={theme.fontWeightMedium}
          padding="0 16px"
        >
          <a
            href={l.href}
            style={{ color: theme.colorPrimary, textDecoration: "none" }}
          >
            {l.platform}
          </a>
        </MjmlText>
      ))}
    </MjmlColumn>
  </MjmlSection>
);

export const SimpleSocialLogosRow = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
  ],
  variant = "default",
}: SocialLinksFeaturedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>social featured</MjmlPreview>
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
        <SocialLinksFeaturedSection
          links={links}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
SimpleSocialLogosRow.PreviewProps = {
  links: [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
    { href: "https://linkedin.com", platform: "LinkedIn" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksFeaturedProps;
