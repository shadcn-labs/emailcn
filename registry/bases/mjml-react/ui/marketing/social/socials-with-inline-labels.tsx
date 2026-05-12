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

export type SocialLinksGridVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SocialLinksGridProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string }[];
  variant?: SocialLinksGridVariant;
}

const SocialLinksGridSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksGridProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksGridVariant;
}) => (
  <MjmlSection backgroundColor={theme.colorBackgroundMuted} padding="24px 0">
    <MjmlColumn>
      {(links ?? []).map((l) => (
        <MjmlText
          key={l.platform}
          align="center"
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize="12px"
          padding="8px 12px"
        >
          <a
            href={l.href}
            style={{ color: theme.colorTextMuted, textDecoration: "none" }}
          >
            {l.platform}
          </a>
        </MjmlText>
      ))}
    </MjmlColumn>
  </MjmlSection>
);

export const SocialsWithInlineLabels = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
  ],
  variant = "default",
}: SocialLinksGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>social grid</MjmlPreview>
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
        <SocialLinksGridSection links={links} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
SocialsWithInlineLabels.PreviewProps = {
  links: [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
    { href: "https://linkedin.com", platform: "LinkedIn" },
    { href: "https://youtube.com", platform: "YouTube" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksGridProps;
